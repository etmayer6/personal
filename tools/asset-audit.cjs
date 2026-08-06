const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { execFileSync } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const ignoredDirectories = new Set([".git", "node_modules", "test-results", "playwright-report"]);
const textExtensions = new Set([".html", ".css", ".js", ".cjs", ".json", ".md"]);
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

function walk(directory, files = []) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
        const filePath = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(filePath, files);
        else if (entry.isFile()) files.push(filePath);
    }
    return files;
}

function relative(filePath) {
    return path.relative(ROOT, filePath).replaceAll(path.sep, "/");
}

function readTrackedFiles() {
    const output = execFileSync("git", ["ls-files", "-z"], { cwd: ROOT });
    return output.toString("utf8").split("\0").filter(Boolean)
        .map((filePath) => path.resolve(ROOT, filePath))
        .filter((filePath) => fs.existsSync(filePath) && fs.statSync(filePath).isFile());
}

function bytes(filePath) {
    return fs.statSync(filePath).size;
}

function isDeployable(filePath) {
    const file = relative(filePath);
    if (file.startsWith("images/photos/source/") || file.startsWith("images/source/") || file.startsWith("plant-to-ape/assets/source/") || file.startsWith("courseflow/assets/source/")) return false;
    if (/^performance-.*\.json$/i.test(path.basename(file))) return false;
    return true;
}

function formatBytes(value) {
    if (value >= 1024 * 1024) return `${(value / 1024 / 1024).toFixed(2)} MB`;
    if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
    return `${value} B`;
}

function cleanReference(value) {
    return value.trim().split("#")[0].split("?")[0];
}

function resolveReference(sourceFile, value) {
    const clean = cleanReference(value);
    if (!clean || clean.startsWith("#") || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(clean)) return null;
    return path.normalize(clean.startsWith("/")
        ? path.join(ROOT, clean)
        : path.resolve(path.dirname(sourceFile), clean));
}

function imageDimensions(filePath) {
    const data = fs.readFileSync(filePath);
    const extension = path.extname(filePath).toLowerCase();
    if (extension === ".png" && data.length >= 24 && data.toString("ascii", 1, 4) === "PNG") {
        return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
    }
    if (extension === ".webp" && data.length >= 30 && data.toString("ascii", 0, 4) === "RIFF") {
        const type = data.toString("ascii", 12, 16);
        if (type === "VP8X") {
            return {
                width: 1 + data.readUIntLE(24, 3),
                height: 1 + data.readUIntLE(27, 3)
            };
        }
    }
    if ([".jpg", ".jpeg"].includes(extension) && data.length > 4 && data[0] === 0xff && data[1] === 0xd8) {
        let offset = 2;
        while (offset + 9 < data.length) {
            if (data[offset] !== 0xff) {
                offset += 1;
                continue;
            }
            const marker = data[offset + 1];
            const length = data.readUInt16BE(offset + 2);
            if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
                return { width: data.readUInt16BE(offset + 7), height: data.readUInt16BE(offset + 5) };
            }
            if (!length) break;
            offset += length + 2;
        }
    }
    return null;
}

function collectReferences(files) {
    const references = new Map();
    const pathPattern = /(?:\.\.?\/|\/)?[A-Za-z0-9_./-]+\.(?:jpe?g|png|webp|avif|gif|svg)(?:\?[^\s"'`)]*)?/gi;
    for (const filePath of files) {
        if (!textExtensions.has(path.extname(filePath).toLowerCase())) continue;
        const source = fs.readFileSync(filePath, "utf8");
        for (const match of source.matchAll(pathPattern)) {
            const value = match[0];
            const resolved = resolveReference(filePath, value);
            if (!resolved) continue;
            if (!references.has(resolved)) references.set(resolved, []);
            references.get(resolved).push(relative(filePath));
        }
        if (source.includes("images/photos/optimized/") || source.includes("images\\photos\\optimized\\")) {
            for (const candidate of walk(path.join(ROOT, "images", "photos", "optimized"))) {
                references.set(candidate, [...(references.get(candidate) || []), `${relative(filePath)} (generated path)`]);
            }
        }
    }
    return references;
}

function duplicateGroups(files) {
    const byHash = new Map();
    for (const filePath of files) {
        if (!imageExtensions.has(path.extname(filePath).toLowerCase())) continue;
        const hash = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
        const group = byHash.get(hash) || [];
        group.push(relative(filePath));
        byHash.set(hash, group);
    }
    return [...byHash.values()].filter((group) => group.length > 1);
}

function pageAssetLoads(htmlFiles) {
    const loads = [];
    const attributePattern = /\b(?:src|href|poster|data-src)\s*=\s*(["'])(.*?)\1/gi;
    for (const filePath of htmlFiles) {
        const source = fs.readFileSync(filePath, "utf8");
        const assets = [];
        for (const match of source.matchAll(attributePattern)) {
            const resolved = resolveReference(filePath, match[2]);
            if (resolved && fs.existsSync(resolved) && fs.statSync(resolved).isFile()) assets.push(relative(resolved));
        }
        loads.push({ page: relative(filePath), assets: [...new Set(assets)] });
    }
    return loads;
}

function main() {
    const trackedFiles = readTrackedFiles();
    const allFiles = walk(ROOT);
    const deployedFiles = allFiles.filter(isDeployable);
    const imageFiles = deployedFiles.filter((filePath) => imageExtensions.has(path.extname(filePath).toLowerCase()));
    const references = collectReferences(deployedFiles);
    const largestTracked = [...trackedFiles].sort((a, b) => bytes(b) - bytes(a)).slice(0, 25)
        .map((filePath) => ({ path: relative(filePath), bytes: bytes(filePath), size: formatBytes(bytes(filePath)) }));
    const largestDeployed = [...deployedFiles].sort((a, b) => bytes(b) - bytes(a)).slice(0, 25)
        .map((filePath) => ({ path: relative(filePath), bytes: bytes(filePath), size: formatBytes(bytes(filePath)) }));
    const duplicateAssets = duplicateGroups(imageFiles);
    const galleryOriginals = imageFiles.filter((filePath) => relative(filePath).startsWith("images/photos/") && !relative(filePath).includes("/optimized/") && [".jpg", ".jpeg"].includes(path.extname(filePath).toLowerCase()));
    const missingOptimized = galleryOriginals.flatMap((filePath) => {
        const stem = path.basename(filePath, path.extname(filePath));
        return [480, 960].map((width) => path.join(ROOT, "images", "photos", "optimized", `${stem}-${width}.webp`))
            .filter((candidate) => !fs.existsSync(candidate))
            .map(relative);
    });
    const likelyUnused = imageFiles.filter((filePath) => !references.has(filePath)).map(relative);
    const totalTrackedBytes = trackedFiles.reduce((sum, filePath) => sum + bytes(filePath), 0);
    const totalDeployedBytes = deployedFiles.reduce((sum, filePath) => sum + bytes(filePath), 0);
    const report = {
        generatedAt: new Date().toISOString(),
        trackedFileCount: trackedFiles.length,
        deployedFileCount: deployedFiles.length,
        scannedFileCount: allFiles.length,
        trackedBytes: totalTrackedBytes,
        trackedSize: formatBytes(totalTrackedBytes),
        deployedBytes: totalDeployedBytes,
        deployedSize: formatBytes(totalDeployedBytes),
        largestTracked,
        largestDeployed,
        duplicateAssets,
        likelyUnused,
        missingOptimized,
        imageSummary: imageFiles.map((filePath) => ({
            path: relative(filePath),
            bytes: bytes(filePath),
            size: formatBytes(bytes(filePath)),
            dimensions: imageDimensions(filePath)
        })).sort((a, b) => b.bytes - a.bytes),
        pageAssetLoads: pageAssetLoads(trackedFiles.filter((filePath) => path.extname(filePath).toLowerCase() === ".html"))
    };

    if (process.argv[2] === "--json") {
        process.stdout.write(JSON.stringify(report, null, 2));
        return;
    }

    console.log(`Git-tracked payload: ${report.trackedFileCount} files, ${report.trackedSize}`);
    console.log(`Deployable payload: ${report.deployedFileCount} files, ${report.deployedSize}`);
    console.log("\nLargest tracked files:");
    for (const item of largestTracked.slice(0, 15)) console.log(`- ${item.size.padStart(10)} ${item.path}`);
    console.log("\nLargest deployable files:");
    for (const item of largestDeployed.slice(0, 15)) console.log(`- ${item.size.padStart(10)} ${item.path}`);
    console.log(`\nImages: ${imageFiles.length} files; gallery originals: ${galleryOriginals.length}; missing 480/960 derivatives: ${missingOptimized.length}`);
    console.log(`Duplicate image groups: ${duplicateAssets.length}`);
    console.log(`Likely unreferenced image files: ${likelyUnused.length}`);
    for (const filePath of likelyUnused.slice(0, 30)) console.log(`- ${filePath}`);
    if (missingOptimized.length) {
        console.log("\nMissing optimized alternatives:");
        for (const filePath of missingOptimized) console.log(`- ${filePath}`);
    }
    if (duplicateAssets.length) {
        console.log("\nDuplicate image groups:");
        for (const group of duplicateAssets) console.log(`- ${group.join(" = ")}`);
    }
}

main();
