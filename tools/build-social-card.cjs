const fs = require("fs");
const path = require("path");
const { chromium } = require("@playwright/test");

const root = path.resolve(__dirname, "..");
const svg = fs.readFileSync(path.join(root, "assets", "social-card.svg"), "utf8");
const output = path.join(root, "assets", "social-card.png");

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.setContent(`<!doctype html><html><body style="margin:0; width:1200px; height:630px; overflow:hidden">${svg}</body></html>`);
    await page.screenshot({ path: output });
    await browser.close();
    console.log(`Generated ${path.relative(root, output).replaceAll(path.sep, "/")} (1200x630).`);
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
