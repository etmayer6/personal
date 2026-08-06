const { spawn, spawnSync } = require("node:child_process");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = 4175;
const server = spawn(process.execPath, [path.join(__dirname, "static-server.js"), ".", String(port)], {
    cwd: root,
    stdio: "inherit",
    windowsHide: true
});

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

function stopServer() {
    if (!server.killed) server.kill();
}

async function main() {
    try {
        await waitForServer(`http://127.0.0.1:${port}/`);
        const cli = path.join(root, "node_modules", "@playwright", "test", "cli.js");
        const result = spawnSync(process.execPath, [cli, "test", ...process.argv.slice(2)], {
            cwd: root,
            stdio: "inherit",
            env: process.env
        });
        stopServer();
        process.exitCode = result.error ? 1 : (result.status ?? 1);
    } catch (error) {
        stopServer();
        console.error(error.message);
        process.exitCode = 1;
    }
}

main();
