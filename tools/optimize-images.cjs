const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium } = require("@playwright/test");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "http://127.0.0.1:4175";
const widths = [480, 960, 1440];

function sourceDirectory(directory) {
    const privateDirectory = path.join(directory, "source");
    return fs.existsSync(privateDirectory) ? privateDirectory : directory;
}

function waitForServer(url, timeoutMs = 10000) {
    const started = Date.now();
    return new Promise((resolve, reject) => {
        function probe() {
            const request = http.get(url, (response) => {
                response.resume();
                resolve();
            });
            request.on("error", () => {
                if (Date.now() - started >= timeoutMs) {
                    reject(new Error(`Static server did not start at ${url}`));
                    return;
                }
                setTimeout(probe, 100);
            });
        }
        probe();
    });
}

function startServer() {
    return spawn(process.execPath, [path.join(ROOT, "tools", "static-server.js"), ".", "4175"], {
        cwd: ROOT,
        stdio: "inherit",
        windowsHide: true
    });
}

function imageJobs() {
    const galleryDirectory = sourceDirectory(path.join(ROOT, "images", "photos"));
    const galleryFiles = fs.readdirSync(galleryDirectory)
        .filter((filename) => /\.(?:jpe?g|png)$/i.test(filename))
        .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
    const rootDirectory = path.join(ROOT, "images");
    const rootSourceDirectory = sourceDirectory(rootDirectory);
    const rootFiles = [
        "kyle.jpg"
    ].filter((filename) => fs.existsSync(path.join(rootSourceDirectory, filename)));
    const artworkDirectory = sourceDirectory(path.join(ROOT, "plant-to-ape", "assets"));
    const artworkFiles = fs.existsSync(artworkDirectory)
        ? fs.readdirSync(artworkDirectory)
            .filter((filename) => /\.png$/i.test(filename))
            .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
        : [];
    const courseflowAssets = sourceDirectory(path.join(ROOT, "courseflow", "assets"));
    const courseflowLogo = path.join(courseflowAssets, "logo.png");

    return [
        ...galleryFiles.map((filename) => ({
            source: path.join(galleryDirectory, filename),
            publicSource: path.relative(ROOT, path.join(galleryDirectory, filename)).replaceAll(path.sep, "/"),
            outputDirectory: path.join(ROOT, "images", "photos", "optimized")
        })),
        ...rootFiles.map((filename) => ({
            source: path.join(rootSourceDirectory, filename),
            publicSource: path.relative(ROOT, path.join(rootSourceDirectory, filename)).replaceAll(path.sep, "/"),
            outputDirectory: path.join(ROOT, "images", "optimized"),
            widths: [480]
        })),
        ...artworkFiles.map((filename) => ({
            source: path.join(artworkDirectory, filename),
            publicSource: path.relative(ROOT, path.join(artworkDirectory, filename)).replaceAll(path.sep, "/"),
            outputDirectory: path.join(ROOT, "plant-to-ape", "assets", "optimized"),
            widths: [1440]
        })),
        ...(fs.existsSync(courseflowLogo) ? [{
            source: courseflowLogo,
            publicSource: path.relative(ROOT, courseflowLogo).replaceAll(path.sep, "/"),
            outputDirectory: path.join(ROOT, "courseflow", "assets"),
            widths: [640]
        }] : [])
    ];
}

async function encodeImage(page, publicSource, width) {
    return page.evaluate(async ({ url, targetWidth }) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Unable to read ${url} (${response.status})`);
        const bitmap = await createImageBitmap(await response.blob());
        const ratio = bitmap.width ? targetWidth / bitmap.width : 1;
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(bitmap.width * ratio));
        canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
        const context = canvas.getContext("2d", { alpha: false });
        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        const encoded = await new Promise((resolve, reject) => {
            canvas.toBlob(async (blob) => {
                if (!blob) {
                    reject(new Error(`WebP encoding failed for ${url}`));
                    return;
                }
                const bytes = new Uint8Array(await blob.arrayBuffer());
                let binary = "";
                const chunkSize = 0x8000;
                for (let index = 0; index < bytes.length; index += chunkSize) {
                    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
                }
                resolve(btoa(binary));
            }, "image/webp", targetWidth <= 480 ? 0.8 : 0.84);
        });
        return { base64: encoded, width: canvas.width, height: canvas.height };
    }, { url: `${BASE_URL}/${publicSource}`, targetWidth: width });
}

async function main() {
    const force = process.argv.includes("--force");
    const server = startServer();
    let browser;
    let generated = 0;
    let skipped = 0;
    try {
        await waitForServer(`${BASE_URL}/`);
        browser = await chromium.launch({ headless: true });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
        for (const job of imageJobs()) {
            fs.mkdirSync(job.outputDirectory, { recursive: true });
            const sourceMtime = fs.statSync(job.source).mtimeMs;
            for (const width of job.widths || widths) {
                const stem = path.basename(job.source, path.extname(job.source));
                const output = path.join(job.outputDirectory, `${stem}-${width}.webp`);
                if (!force && fs.existsSync(output) && fs.statSync(output).mtimeMs >= sourceMtime) {
                    skipped += 1;
                    continue;
                }
                const encoded = await encodeImage(page, job.publicSource, width);
                fs.writeFileSync(output, Buffer.from(encoded.base64, "base64"));
                generated += 1;
                console.log(`Generated ${path.relative(ROOT, output)} (${encoded.width}x${encoded.height})`);
            }
        }
        await context.close();
        console.log(`Image optimization complete: ${generated} generated, ${skipped} cached.`);
    } finally {
        if (browser) await browser.close();
        if (!server.killed) server.kill();
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
