const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { SITE_ROOT } = require("../tests/site-manifest.cjs");

const ignoredDirectories = new Set([".git", "node_modules", "output"]);
const files = [];
const failures = [];

function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
        const filePath = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(filePath);
        else if (entry.isFile() && /\.(?:js|json)$/i.test(entry.name)) files.push(filePath);
    }
}

function display(filePath) {
    return path.relative(SITE_ROOT, filePath).replaceAll(path.sep, "/");
}

walk(SITE_ROOT);
for (const filePath of files) {
    if (filePath.toLowerCase().endsWith(".json")) {
        try {
            JSON.parse(fs.readFileSync(filePath, "utf8"));
        } catch (error) {
            failures.push(`${display(filePath)}: ${error.message}`);
        }
        continue;
    }

    const result = spawnSync(process.execPath, ["--check", filePath], { encoding: "utf8" });
    if (result.status !== 0) failures.push(`${display(filePath)}:\n${result.stderr.trim()}`);
}

if (failures.length) {
    console.error(`Syntax validation failed for ${failures.length} file(s):`);
    for (const failure of failures) console.error(`\n${failure}`);
    process.exitCode = 1;
} else {
    console.log(`Syntax validation passed: ${files.length} JavaScript and JSON files.`);
}
