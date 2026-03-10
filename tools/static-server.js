const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.argv[2] || process.cwd();
const port = Number(process.argv[3] || 8123);

const mime = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp"
};

http.createServer((req, res) => {
    let reqPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (reqPath === "/") reqPath = "/index.html";

    let filePath = path.join(root, reqPath);
    if (reqPath.endsWith("/")) filePath = path.join(root, reqPath, "index.html");
    if (!path.extname(filePath) && fs.existsSync(path.join(filePath, "index.html"))) {
        filePath = path.join(filePath, "index.html");
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end("Not found");
            return;
        }
        res.setHeader("Content-Type", mime[path.extname(filePath).toLowerCase()] || "application/octet-stream");
        res.end(data);
    });
}).listen(port, "127.0.0.1");

console.log(`Static server listening on http://127.0.0.1:${port}`);
