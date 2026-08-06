const { test, expect } = require("@playwright/test");
const { interactiveRoutes, primaryNavigation, projectRegistry, publicRoutes } = require("./site-manifest.cjs");

const OFFLINE_PNG = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64");

const VIEWPORTS = [
    { name: "320px", width: 320, height: 760 },
    { name: "390px", width: 390, height: 844 },
    { name: "768px", width: 768, height: 1024 },
    { name: "1440px", width: 1440, height: 900 }
];

function installOfflineRoutes(context) {
    return context.route("**/*", async (route) => {
        const url = route.request().url();
        if (route.request().resourceType() === "document" && url.startsWith("http://127.0.0.1:4175")) {
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
            await route.fulfill({ status: 200, contentType: "image/png", body: OFFLINE_PNG });
            return;
        }
        await route.continue();
    });
}

function isLocalUrl(value) {
    try {
        const url = new URL(value);
        return url.origin === "http://127.0.0.1:4175";
    } catch (error) {
        return false;
    }
}

function isIgnoredRequest(value) {
    try {
        return new URL(value).pathname === "/favicon.ico";
    } catch (error) {
        return false;
    }
}

function basicAccessibilityAudit() {
    const violations = [];
    const isHidden = (element) => element.hidden ||
        element.getAttribute("aria-hidden") === "true" ||
        Boolean(element.closest("[hidden], [aria-hidden='true']"));
    const accessibleName = (element) => (
        element.getAttribute("aria-label") ||
        element.getAttribute("aria-labelledby") && document.getElementById(element.getAttribute("aria-labelledby"))?.textContent ||
        element.getAttribute("title") ||
        element.innerText ||
        element.textContent ||
        ""
    ).trim();

    const ids = new Map();
    document.querySelectorAll("[id]").forEach((element) => {
        const id = element.id;
        ids.set(id, (ids.get(id) || 0) + 1);
    });
    ids.forEach((count, id) => {
        if (count > 1) violations.push(`duplicate id #${id}`);
    });

    document.querySelectorAll("img").forEach((image) => {
        if (!image.hasAttribute("alt")) violations.push("image missing alt text");
    });

    document.querySelectorAll("a, button").forEach((element) => {
        if (!isHidden(element) && !accessibleName(element)) {
            violations.push(`${element.tagName.toLowerCase()} without an accessible name`);
        }
    });

    document.querySelectorAll("input, select, textarea").forEach((element) => {
        if (isHidden(element) || element.type === "hidden") return;
        const labelled = element.getAttribute("aria-label") ||
            element.getAttribute("aria-labelledby") ||
            element.getAttribute("placeholder") ||
            element.id && document.querySelector(`label[for="${CSS.escape(element.id)}"]`) ||
            element.closest("label");
        if (!labelled) violations.push(`${element.tagName.toLowerCase()} without a label`);
    });

    document.querySelectorAll("dialog").forEach((dialog) => {
        if (!dialog.getAttribute("aria-label") && !dialog.getAttribute("aria-labelledby") && !dialog.querySelector("h1, h2, h3")) {
            violations.push("dialog without an accessible name");
        }
    });

    ["aria-controls", "aria-describedby", "aria-labelledby"].forEach((attribute) => {
        document.querySelectorAll(`[${attribute}]`).forEach((element) => {
            const targetIds = element.getAttribute(attribute).split(/\s+/).filter(Boolean);
            if (targetIds.some((id) => !document.getElementById(id))) {
                violations.push(`${attribute} points to a missing target`);
            }
        });
    });

    return violations;
}

async function pageDiagnostics(page) {
    return page.evaluate((auditSource) => {
        const documentElement = document.documentElement;
        const audit = Function(`return (${auditSource})`)();
        return {
            state: document.body.dataset.demoState || null,
            textLength: document.body.innerText.length,
            duplicateIds: [...document.querySelectorAll("[id]")]
                .map((element) => element.id)
                .filter((id, index, ids) => ids.indexOf(id) !== index),
            scrollWidth: documentElement.scrollWidth,
            viewportWidth: window.innerWidth,
            accessibilityViolations: audit()
        };
    }, basicAccessibilityAudit.toString());
}

for (const route of publicRoutes) {
    test(`${route.name} returns cleanly with usable markup`, async ({ browser, request }) => {
        const context = await browser.newContext({ reducedMotion: "reduce", serviceWorkers: "block" });
        await installOfflineRoutes(context);
        const pageErrors = [];
        const consoleErrors = [];
        const missingResponses = [];
        const page = await context.newPage();
        page.on("pageerror", (error) => pageErrors.push(String(error)));
        page.on("console", (message) => {
            if (message.type() === "error") consoleErrors.push(message.text());
        });
        page.on("response", (response) => {
            if (isLocalUrl(response.url()) && response.status() >= 400 && !isIgnoredRequest(response.url())) {
                missingResponses.push(`${response.status()} ${response.url()}`);
            }
        });

        const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
        expect(response, `${route.path} returned no response`).not.toBeNull();
        expect(response.status(), `${route.path} returned an error`).toBeLessThan(400);
        await page.waitForTimeout(route.interactive ? 1100 : 250);

        const diagnostics = await pageDiagnostics(page);
        expect(pageErrors, pageErrors.join("\n")).toEqual([]);
        expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
        expect(missingResponses, missingResponses.join("\n")).toEqual([]);
        expect(diagnostics.duplicateIds).toEqual([]);
        expect(diagnostics.accessibilityViolations).toEqual([]);
        expect(diagnostics.textLength).toBeGreaterThan(80);
        expect(diagnostics.state).not.toBe("loading");

        if (route.interactive) {
            await expect(page.locator(route.ready)).not.toHaveCount(0);
        }

        const internalLinks = await page.locator("a[href]").evaluateAll((links) => links
            .map((link) => link.href)
            .filter((href) => href.startsWith("http://127.0.0.1:4175/")));
        for (const link of [...new Set(internalLinks)]) {
            const linkResponse = await request.get(link);
            expect(linkResponse.status(), `broken rendered link ${link}`).toBeLessThan(400);
        }
        await context.close();
    });
}

for (const viewport of VIEWPORTS) {
    test(`public routes do not overflow horizontally at ${viewport.name}`, async ({ browser }) => {
        const context = await browser.newContext({
            viewport: { width: viewport.width, height: viewport.height },
            reducedMotion: "reduce",
            serviceWorkers: "block"
        });
        await installOfflineRoutes(context);
        const page = await context.newPage();
        for (const route of publicRoutes) {
            await page.goto(route.path, { waitUntil: "domcontentloaded" });
            await page.waitForTimeout(route.interactive ? 350 : 100);
            const dimensions = await page.evaluate(() => ({
                scrollWidth: document.documentElement.scrollWidth,
                viewportWidth: window.innerWidth
            }));
            expect(dimensions.scrollWidth, `${route.path} overflows at ${viewport.name}`).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
        }
        await context.close();
    });
}

test("primary navigation reaches every public top-level section", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", serviceWorkers: "block" });
    await installOfflineRoutes(context);
    const page = await context.newPage();

    for (const navigation of primaryNavigation) {
        await page.goto("/", { waitUntil: "domcontentloaded" });
        const link = page.locator("header nav ul a").filter({ hasText: navigation.label }).first();
        await expect(link, `missing ${navigation.label} navigation link`).toBeVisible();
        await link.click();
        const destination = new URL(page.url());
        const normalizedPath = destination.pathname.replace(/index\.html$/, "");
        expect(normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`).toBe(navigation.path);
    }
    await context.close();
});

test("project counts match the centralized registry", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", serviceWorkers: "block" });
    await installOfflineRoutes(context);
    const page = await context.newPage();
    await page.goto("/projects/", { waitUntil: "domcontentloaded" });
    const counts = await page.evaluate(() => ({
        cards: document.querySelectorAll(".feature-card, .archive-card").length,
        tally: Number(document.querySelector(".project-tally strong")?.textContent.trim())
    }));
    expect(counts.cards).toBe(projectRegistry.length);
    expect(counts.tally).toBe(projectRegistry.length);
    await context.close();
});

test("featured demos support their primary interaction", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", serviceWorkers: "block" });
    await installOfflineRoutes(context);
    const page = await context.newPage();

    await page.goto("/courseflow/", { waitUntil: "domcontentloaded" });
    const flowchartLink = page.locator('.quick-item[data-route="flowchart"]');
    await expect(flowchartLink).toHaveCount(1);
    await flowchartLink.click();
    await page.locator('[data-action="toggle-insights"]').click();
    await expect(page.locator('[data-action="toggle-insights"]')).toContainText("Hide");

    await page.goto("/scenario-lab/", { waitUntil: "domcontentloaded" });
    await page.locator('[data-action="run"]').first().click();
    await expect(page.locator('[data-role="run-status"]')).toHaveAttribute("data-status", "pass");

    await page.goto("/word-sort/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#wordsort-start")).toBeVisible();
    await page.locator("#wordsort-start").click();
    await expect(page.locator("#wordsort-draw")).toBeVisible();
    await context.close();
});

test("keyboard focus is visible on every public route", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce", serviceWorkers: "block" });
    await installOfflineRoutes(context);
    const page = await context.newPage();

    for (const route of publicRoutes) {
        await page.goto(route.path, { waitUntil: "domcontentloaded" });
        let focusInfo = null;
        for (let attempt = 0; attempt < 12; attempt += 1) {
            await page.keyboard.press("Tab");
            focusInfo = await page.evaluate(() => {
                const element = document.activeElement;
                if (!element || element === document.body) return null;
                const style = getComputedStyle(element);
                const bounds = element.getBoundingClientRect();
                return {
                    tag: element.tagName,
                    visible: bounds.width > 0 && bounds.height > 0,
                    indicator: (style.outlineStyle !== "none" && style.outlineWidth !== "0px") || style.boxShadow !== "none"
                };
            });
            if (focusInfo?.visible) break;
        }
        expect(focusInfo, `${route.path} never moved focus`).not.toBeNull();
        expect(focusInfo.visible, `${route.path} focused element is not visible`).toBe(true);
        expect(focusInfo.indicator, `${route.path} has no visible focus indicator`).toBe(true);
    }
    await context.close();
});

test("native dialogs trap focus and restore it to the trigger", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", serviceWorkers: "block" });
    await installOfflineRoutes(context);
    const page = await context.newPage();

    await page.goto("/photos/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(350);
    const photoTrigger = page.locator(".photo-open-button").first();
    await photoTrigger.click();
    const photoDialog = page.locator("#photo-viewer");
    await expect(photoDialog).toBeVisible();
    for (let attempt = 0; attempt < 8; attempt += 1) {
        await page.keyboard.press("Tab");
        expect(await page.evaluate(() => Boolean(document.activeElement?.closest("#photo-viewer")))).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(photoDialog).not.toBeVisible();
    await expect.poll(() => page.evaluate(() => document.activeElement?.className || "")).toContain("photo-open-button");

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(350);
    const huntToken = page.locator(".scavenger-token");
    await expect(huntToken).toBeVisible();
    await huntToken.click();
    const siteDialog = page.locator("dialog.site-play-dialog");
    await expect(siteDialog).toBeVisible();
    await expect.poll(() => page.evaluate(() => Boolean(document.activeElement?.closest("dialog.site-play-dialog")))).toBe(true);
    for (let attempt = 0; attempt < 6; attempt += 1) {
        await page.keyboard.press("Tab");
        expect(await page.evaluate(() => Boolean(document.activeElement?.closest("dialog.site-play-dialog")))).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(siteDialog).not.toBeVisible();
    await expect.poll(() => page.evaluate(() => Boolean(document.activeElement?.closest("header nav")))).toBe(true);
    await context.close();
});
