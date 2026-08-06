const { test, expect } = require("@playwright/test");
const { interactiveRoutes: routes } = require("./site-manifest.cjs");
const BASE_URL = "http://127.0.0.1:4175";

const corruptStorageKeys = [
    "courseflow-faithful-demo-v1",
    "ethan-diet-tracker-demo-v1",
    "ethan-receipt-meal-planner-demo-v1",
    "gremlin-garage-demo-v1",
    "ethan-childhood-timeline-demo-flags-v1",
    "ethan-site-whiteboard-v1",
    "ethan-site-pet-v1"
];

function installOfflineRoutes(context) {
    return context.route("**/*", async (route) => {
        const url = route.request().url();
        if (route.request().resourceType() === "document" && url.startsWith(BASE_URL)) {
            const response = await route.fetch();
            const body = await response.text();
            if (body.includes("unpkg.com") && body.includes("integrity=")) {
                await route.fulfill({
                    response,
                    body: body.replaceAll(/\s+integrity="[^"]*"/g, "")
                });
                return;
            }
            await route.fulfill({ response, body });
            return;
        }
        if (url.includes("unpkg.com")) {
            // Supply an empty local asset after stripping SRI in the test-only
            // document response. This keeps offline runs deterministic while
            // the real site still uses the integrity-checked CDN asset.
            const isStylesheet = /\.css(?:\?|$)/i.test(url);
            await route.fulfill({
                status: 200,
                contentType: isStylesheet ? "text/css" : "application/javascript",
                body: isStylesheet ? "/* deterministic offline stylesheet fixture */" : "/* deterministic offline script fixture */"
            });
            return;
        }
        if (url.includes("api.airplanes.live") || url.includes("graph.mapillary.com") || url.includes("assets.calendly.com")) {
            await route.fulfill({ status: 204 });
            return;
        }
        if (url.includes("tiles.openfreemap.org") || url.includes("tile.openstreetmap.org")) {
            await route.fulfill({
                status: 200,
                contentType: "image/png",
                body: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64")
            });
            return;
        }
        await route.continue();
    });
}

async function captureScreenshot(page, path) {
    let lastError;
    for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
            await page.screenshot({ path });
            return;
        } catch (error) {
            lastError = error;
            await page.waitForTimeout(150);
        }
    }
    throw lastError;
}

for (const route of routes) {
    test(`${route.name} has a meaningful first render and settles`, async ({ browser }, testInfo) => {
        const staticContext = await browser.newContext({ javaScriptEnabled: false, serviceWorkers: "block" });
        try {
            await installOfflineRoutes(staticContext);
            const staticPage = await staticContext.newPage();
            await staticPage.goto(`${BASE_URL}${route.path}`, { waitUntil: "commit" });
            await captureScreenshot(staticPage, testInfo.outputPath(`${route.name.toLowerCase().replaceAll(" ", "-")}-static.png`));
            const staticText = await staticPage.locator("body").innerText();
            expect(staticText.toLowerCase()).toContain(route.marker.toLowerCase());
            expect(staticText.length).toBeGreaterThan(80);
        } finally {
            await staticContext.close();
        }

        const context = await browser.newContext({ serviceWorkers: "block" });
        try {
            await installOfflineRoutes(context);
            const storageScript = JSON.stringify(corruptStorageKeys);
            await context.addInitScript(`for (const key of ${storageScript}) { try { localStorage.setItem(key, "{broken fixture"); } catch (error) {} }`);
            const pageErrors = [];
            const consoleErrors = [];
            const page = await context.newPage();
            page.on("pageerror", (error) => pageErrors.push(String(error)));
            page.on("console", (message) => {
                if (message.type() === "error") consoleErrors.push(message.text());
            });

            await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "commit" });
            await captureScreenshot(page, testInfo.outputPath(`${route.name.toLowerCase().replaceAll(" ", "-")}-immediate.png`));
            const immediateText = await page.locator("body").innerText();
            expect(immediateText.toLowerCase()).toContain(route.marker.toLowerCase());

            await page.waitForLoadState("domcontentloaded");
            await captureScreenshot(page, testInfo.outputPath(`${route.name.toLowerCase().replaceAll(" ", "-")}-initialized.png`));
            await page.waitForTimeout(1200);
            await captureScreenshot(page, testInfo.outputPath(`${route.name.toLowerCase().replaceAll(" ", "-")}-settled.png`));

            const finalText = await page.locator("body").innerText();
            const state = await page.locator("body").getAttribute("data-demo-state");
            expect(state).not.toBe("loading");
            expect(finalText).not.toMatch(/Loading (travel data|routes|Block Blast|Word Sort|location\.\.\.)/i);
            expect(finalText).not.toMatch(/(preparing the deck|preparing the board|readying controls)/i);
            expect(finalText).not.toContain("Waiting for listing data");
            expect(finalText).not.toContain("Initializing flight deck");
            expect(finalText).not.toMatch(/\b0 (?:items|locations|listings|meals|recipes|saved meals|photos|places)\b/i);
            expect(finalText).not.toMatch(/\b(?:items|locations|listings|meals|recipes|saved meals|photos|places)\s*:\s*0\b/i);
            expect(finalText.length).toBeGreaterThan(80);
            const readyCount = await page.locator(route.ready).count();
            expect(readyCount).toBeGreaterThan(0);
            expect(pageErrors, pageErrors.join("\n")).toEqual([]);
            expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
        } finally {
            await context.close();
        }
    });
}

test("representative demos stay usable across viewports and keyboard input", async ({ browser }) => {
    const viewports = [
        { name: "desktop", width: 1440, height: 900 },
        { name: "tablet", width: 834, height: 1112 },
        { name: "mobile", width: 390, height: 844 }
    ];

    for (const viewport of viewports) {
        const context = await browser.newContext({
            viewport: { width: viewport.width, height: viewport.height },
            reducedMotion: "reduce",
            serviceWorkers: "block"
        });
        try {
            await installOfflineRoutes(context);
            const consoleErrors = [];
            const page = await context.newPage();
            page.on("console", (message) => {
                if (message.type() === "error") consoleErrors.push(message.text());
            });
            page.on("pageerror", (error) => consoleErrors.push(String(error)));

            await page.goto(`${BASE_URL}/scenario-lab/`, { waitUntil: "domcontentloaded" });
            await expect(page.locator("#scenario-lab-title")).toBeVisible();
            await expect(page.locator('[data-role="run-status"]')).toHaveAttribute("data-status", "standby");
            const layout = await page.evaluate(() => ({
                reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                viewportWidth: window.innerWidth,
                documentWidth: document.documentElement.scrollWidth
            }));
            expect(layout.reducedMotion).toBe(true);
            expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);

            await page.keyboard.press("r");
            await expect(page.locator('[data-role="run-status"]')).toHaveAttribute("data-status", /^(running|pass)$/);
            expect(consoleErrors, `${viewport.name} console output`).toEqual([]);
        } finally {
            await context.close();
        }
    }
});
