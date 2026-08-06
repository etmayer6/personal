const fs = require("fs");
const path = require("path");
const { SITE_ROOT, projectRegistry, publicRoutes } = require("../tests/site-manifest.cjs");

const errors = [];
const ignoredDirectories = new Set([".git", "node_modules", "output"]);
const htmlFiles = [];
const cssFiles = [];
const jsFiles = [];

function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
        const filePath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            walk(filePath);
        } else if (entry.isFile()) {
            if (entry.name.toLowerCase().endsWith(".html")) htmlFiles.push(filePath);
            if (entry.name.toLowerCase().endsWith(".css")) cssFiles.push(filePath);
            if (entry.name.toLowerCase().endsWith(".js")) jsFiles.push(filePath);
        }
    }
}

function display(filePath) {
    return path.relative(SITE_ROOT, filePath).replaceAll(path.sep, "/");
}

function report(filePath, message) {
    errors.push(`${display(filePath)}: ${message}`);
}

function cleanReference(reference) {
    return reference.trim().split("#")[0].split("?")[0];
}

function isLocalReference(reference) {
    const value = reference.trim();
    return value && !value.startsWith("#") && !/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value);
}

function resolveReference(sourceFile, reference) {
    const clean = cleanReference(reference);
    if (!clean) return sourceFile;
    return path.normalize(clean.startsWith("/")
        ? path.join(SITE_ROOT, clean)
        : path.resolve(path.dirname(sourceFile), clean));
}

function referenceExists(sourceFile, reference) {
    const resolved = resolveReference(sourceFile, reference);
    if (fs.existsSync(resolved)) return true;
    if (!path.extname(resolved) && fs.existsSync(`${resolved}.html`)) return true;
    return fs.existsSync(path.join(resolved, "index.html"));
}

function extractAttributes(source, attributeNames) {
    const attributes = [];
    const pattern = new RegExp(`\\b(?:${attributeNames.join("|")})\\s*=\\s*([\\\"'])(.*?)\\1`, "gi");
    let match;
    while ((match = pattern.exec(source))) attributes.push(match[2]);
    return attributes;
}

function extractIds(source) {
    return [...source.matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)].map((match) => match[2]);
}

function checkResourceReferences(filePath, source) {
    const references = extractAttributes(source, ["src", "href", "poster", "data-src"]);
    const srcsets = extractAttributes(source, ["srcset"]);

    for (const reference of references) {
        if (!isLocalReference(reference)) continue;
        if (!referenceExists(filePath, reference)) report(filePath, `missing local reference: ${reference}`);
    }

    for (const srcset of srcsets) {
        for (const candidate of srcset.split(",")) {
            const reference = candidate.trim().split(/\s+/)[0];
            if (isLocalReference(reference) && !referenceExists(filePath, reference)) {
                report(filePath, `missing local srcset reference: ${reference}`);
            }
        }
    }
}

function checkInternalLinks(filePath, source, idsByFile) {
    const links = extractAttributes(source, ["href"]);
    for (const reference of links) {
        if (!isLocalReference(reference)) continue;
        const [rawPath, rawHash = ""] = reference.split("#");
        const targetFile = resolveReference(filePath, rawPath || ".");
        if (!referenceExists(filePath, rawPath || ".")) {
            report(filePath, `broken internal link: ${reference}`);
            continue;
        }
        if (!rawHash) continue;
        const normalizedTarget = fs.existsSync(path.join(targetFile, "index.html"))
            ? path.join(targetFile, "index.html")
            : fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()
                ? targetFile
                : fs.existsSync(`${targetFile}.html`)
                    ? `${targetFile}.html`
                    : targetFile;
        if (!idsByFile.get(normalizedTarget)?.has(rawHash)) {
            report(filePath, `broken internal anchor: ${reference}`);
        }
    }
}

function checkDuplicateIds(filePath, source) {
    const seen = new Set();
    for (const id of extractIds(source)) {
        if (seen.has(id)) report(filePath, `duplicate HTML id: ${id}`);
        seen.add(id);
    }
}

function checkCssReferences(filePath, source) {
    for (const match of source.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)) {
        const reference = match[2].trim();
        if (isLocalReference(reference) && !referenceExists(filePath, reference)) {
            report(filePath, `missing local CSS reference: ${reference}`);
        }
    }
}

function checkJavaScriptFetches(filePath, source) {
    for (const match of source.matchAll(/\bfetch\(\s*(["'`])([^"'`]+)\1/gi)) {
        const reference = match[2];
        if (isLocalReference(reference) && !referenceExists(filePath, reference)) {
            report(filePath, `missing local fetch target: ${reference}`);
        }
    }
}

walk(SITE_ROOT);

const idsByFile = new Map();
for (const filePath of htmlFiles) {
    const source = fs.readFileSync(filePath, "utf8");
    idsByFile.set(filePath, new Set(extractIds(source)));
    checkDuplicateIds(filePath, source);
}

for (const filePath of htmlFiles) {
    const source = fs.readFileSync(filePath, "utf8");
    checkResourceReferences(filePath, source);
    checkInternalLinks(filePath, source, idsByFile);
}

for (const filePath of cssFiles) checkCssReferences(filePath, fs.readFileSync(filePath, "utf8"));
for (const filePath of jsFiles) checkJavaScriptFetches(filePath, fs.readFileSync(filePath, "utf8"));

const projectsFile = path.join(SITE_ROOT, "projects", "index.html");
const projectsSource = fs.readFileSync(projectsFile, "utf8");
const projectCardCount = (projectsSource.match(/<article\s+class="feature-card/g) || []).length +
    (projectsSource.match(/<article\s+class="archive-card/g) || []).length;
const tallyMatch = projectsSource.match(/class="project-tally"[\s\S]*?<strong>\s*(\d+)\s*<\/strong>/i);
const displayedProjectCount = tallyMatch ? Number(tallyMatch[1]) : NaN;

if (projectCardCount !== projectRegistry.length) {
    report(projectsFile, `project card count ${projectCardCount} does not match registry count ${projectRegistry.length}`);
}
if (displayedProjectCount !== projectRegistry.length) {
    report(projectsFile, `project tally ${displayedProjectCount} does not match registry count ${projectRegistry.length}`);
}

for (const project of projectRegistry) {
    if (project.external) continue;
    if (!publicRoutes.some((route) => route.path === project.path)) {
        report(projectsFile, `project registry route is not public: ${project.path}`);
    }
}

if (errors.length) {
    console.error(`Static validation failed with ${errors.length} issue(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
} else {
    console.log(`Static validation passed: ${htmlFiles.length} HTML files, ${cssFiles.length} stylesheets, ${jsFiles.length} scripts, ${projectRegistry.length} projects.`);
}
