const { test, expect } = require("@playwright/test");

async function openComparison(page) {
    await page.goto("/apartments/");
    await expect(page.locator("body")).toHaveAttribute("data-demo-state", /ready|empty/);
    await page.locator("#good-fit-only-input").uncheck();
    await expect(page.locator("#listings-grid .compare-toggle").first()).toBeVisible();
}

for (const viewport of [
    { name: "desktop", width: 1280, height: 900 },
    { name: "mobile", width: 390, height: 844 }
]) {
    test(`apartment finalists compare clearly on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        const browserIssues = [];
        page.on("pageerror", error => browserIssues.push(String(error)));
        page.on("console", message => {
            if (["error", "warning"].includes(message.type())) browserIssues.push(message.text());
        });

        await openComparison(page);
        const choices = page.locator("#listings-grid .compare-toggle");
        await choices.nth(0).click();
        await choices.nth(1).click();
        await choices.nth(2).click();

        await expect(page.locator("#comparison-count")).toHaveText("3 of 3 selected");
        await expect(page.locator(".comparison-card")).toHaveCount(3);
        await expect(page.locator(".comparison-card").first()).toContainText("Monthly");
        await expect(page.locator(".comparison-card").first()).toContainText("Commute");
        await expect(page.locator(".comparison-card").first()).toContainText("Move-in cash");
        await expect(page.locator(".best-marker").first()).toBeVisible();

        await choices.nth(3).click();
        await expect(page.locator("#comparison-feedback")).toContainText("Three finalists");
        await expect(page.locator(".comparison-card")).toHaveCount(3);

        await page.reload();
        await expect(page.locator("#comparison-count")).toHaveText("3 of 3 selected");
        await expect(page.locator(".comparison-card")).toHaveCount(3);
        await page.locator(".comparison-remove").first().click();
        await expect(page.locator("#comparison-count")).toHaveText("2 of 3 selected");
        await page.locator("#max-all-in-input").fill("900");
        await expect(page.locator(".comparison-card").first()).toContainText("over limit");

        const layout = await page.evaluate(() => ({
            pageWidth: document.documentElement.scrollWidth,
            viewportWidth: document.documentElement.clientWidth,
            columns: getComputedStyle(document.querySelector("#comparison-grid")).gridTemplateColumns.split(" ").length
        }));
        expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
        expect(layout.columns).toBe(viewport.name === "mobile" ? 1 : 3);
        expect(browserIssues).toEqual([]);

        await page.locator("#comparison").scrollIntoViewIfNeeded();
        await page.locator("#comparison").screenshot({ path: test.info().outputPath(`comparison-${viewport.name}.png`) });
    });
}
