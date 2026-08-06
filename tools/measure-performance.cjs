const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium } = require("@playwright/test");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "http://127.0.0.1:4175";
const routes = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos/", action: "photos" },
    { name: "Projects", path: "/projects/" },
    { name: "Travel Map", path: "/travel/", action: "travel" },
    { name: "Pinpoint", path: "/pinpoint/", action: "pinpoint" },
    { name: "Block Blast", path: "/block-blast/", action: "block-blast" },
    { name: "Flight Sim", path: "/flight-sim/", action: "flight-sim" },
    { name: "CourseFlow", path: "/courseflow/", action: "courseflow" }
];
const offlineHosts = [
    "api.airplanes.live",
    "graph.mapillary.com",
    "tiles.openfreemap.org",
    "tile.openstreetmap.org",
    "unpkg.com",
    "assets.calendly.com"
];

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

function installOfflineRoutes(context) {
    return context.route("**/*", async (route) => {
        if (offlineHosts.some((host) => route.request().url().includes(host))) {
            await route.abort();
            return;
        }
        await route.continue();
    });
}

async function measureInteraction(page, route) {
    const started = Date.now();
    if (route.action === "photos") {
        await page.locator('[data-gallery-mode="archive"]').click();
        await page.locator(".photo-deck").waitFor({ state: "visible" });
    } else if (route.action === "travel") {
        await page.locator('[data-view="places"]').click();
        await page.waitForFunction(() => document.querySelector('[data-view="places"]')?.getAttribute("aria-pressed") === "true");
    } else if (route.action === "pinpoint") {
        await page.locator("#photo-zoom-in").click();
        await page.waitForFunction(() => document.getElementById("photo-zoom-value")?.textContent !== "1x");
    } else if (route.action === "block-blast") {
        await page.locator("#blockblast-start").click();
        await page.locator("#blockblast-canvas").waitFor({ state: "visible" });
    } else if (route.action === "flight-sim") {
        const scenarioButton = page.locator("button").filter({ hasText: /scenario|sortie|fly/i }).first();
        if (await scenarioButton.count()) await scenarioButton.click();
    } else if (route.action === "courseflow") {
        await page.locator('.quick-item[data-route="flowchart"]').click();
        await page.locator('[data-action="toggle-insights"]').click();
    } else {
        return null;
    }
    return Date.now() - started;
}

async function measureRoute(browser, route) {
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        reducedMotion: "reduce",
        serviceWorkers: "block"
    });
    await installOfflineRoutes(context);
    const page = await context.newPage();
    await page.addInitScript(() => {
        window.__assetPerf = { lcp: 0, cls: 0, shifts: [] };
        try {
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const last = entries[entries.length - 1];
                if (last) window.__assetPerf.lcp = last.startTime;
            }).observe({ type: "largest-contentful-paint", buffered: true });
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        window.__assetPerf.cls += entry.value;
                        window.__assetPerf.shifts.push({
                            value: entry.value,
                            sources: (entry.sources || []).map((source) => source.node?.tagName || "unknown")
                        });
                    }
                }
            }).observe({ type: "layout-shift", buffered: true });
        } catch (error) {
            window.__assetPerfObserverError = String(error);
        }
    });

    const started = Date.now();
    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    const initialPaint = await page.evaluate(() => ({
        lcp: window.__assetPerf.lcp || null,
        cls: Number(window.__assetPerf.cls.toFixed(4))
    }));
    const interactionMs = await measureInteraction(page, route);
    await page.waitForTimeout(150);
    const result = await page.evaluate(() => {
        const localOrigin = window.location.origin;
        const resources = performance.getEntriesByType("resource")
            .filter((entry) => entry.name.startsWith(localOrigin))
            .map((entry) => ({
                name: new URL(entry.name).pathname,
                type: entry.initiatorType,
                bytes: entry.transferSize || entry.encodedBodySize || 0,
                duration: entry.duration
            }));
        const navigation = performance.getEntriesByType("navigation")[0];
        if (navigation) resources.unshift({
            name: new URL(navigation.name).pathname,
            type: "navigation",
            bytes: navigation.transferSize || navigation.encodedBodySize || 0,
            duration: navigation.duration
        });
        const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
        return {
            lcp: window.__assetPerf.lcp || lcpEntries.at(-1)?.startTime || null,
            cls: Number(window.__assetPerf.cls.toFixed(4)),
            shifts: window.__assetPerf.shifts,
            resources,
            pageReadyMs: performance.now(),
            observerError: window.__assetPerfObserverError || null
        };
    });
    await context.close();

    const localResources = result.resources.filter((resource) => resource.name !== "/favicon.ico");
    return {
        name: route.name,
        path: route.path,
        transferredBytes: localResources.reduce((sum, resource) => sum + resource.bytes, 0),
        transferredSize: `${(localResources.reduce((sum, resource) => sum + resource.bytes, 0) / 1024).toFixed(1)} KB`,
        requestCount: localResources.length,
        lcpMs: result.lcp === null ? null : Number(result.lcp.toFixed(1)),
        cls: result.cls,
        interactionMs,
        initialLcpMs: initialPaint.lcp === null ? null : Number(initialPaint.lcp.toFixed(1)),
        initialCls: initialPaint.cls,
        pageReadyMs: Number((Date.now() - started).toFixed(1)),
        resources: localResources.sort((a, b) => b.bytes - a.bytes).slice(0, 12),
        observerError: result.observerError,
        layoutShifts: result.shifts
    };
}

async function main() {
    const labelIndex = process.argv.indexOf("--label");
    const outputIndex = process.argv.indexOf("--output");
    const label = labelIndex >= 0 ? process.argv[labelIndex + 1] : "measurement";
    const outputPath = outputIndex >= 0 ? process.argv[outputIndex + 1] : null;
    const server = startServer();
    let browser;
    try {
        await waitForServer(`${BASE_URL}/`);
        browser = await chromium.launch({ headless: true });
        const pages = [];
        for (const route of routes) pages.push(await measureRoute(browser, route));
        const report = {
            label,
            generatedAt: new Date().toISOString(),
            baseURL: BASE_URL,
            pages,
            totals: {
                transferredBytes: pages.reduce((sum, page) => sum + page.transferredBytes, 0),
                requestCount: pages.reduce((sum, page) => sum + page.requestCount, 0)
            }
        };
        if (outputPath) fs.writeFileSync(path.resolve(ROOT, outputPath), JSON.stringify(report, null, 2));
        console.log(JSON.stringify(report, null, 2));
    } finally {
        if (browser) await browser.close();
        if (!server.killed) server.kill();
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
