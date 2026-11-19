const { test, expect } = require("@playwright/test");

test("Gremlin Lab rack shortcuts drop the labeled element with live feedback", async ({ page }) => {
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.setViewportSize({ width: 320, height: 740 });
    await page.goto("/gremlin-lab/");
    await page.waitForFunction(() => typeof window.render_game_to_text === "function");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);

    const spark = page.locator('[data-element="spark"]');
    await expect(spark).toHaveAttribute("aria-keyshortcuts", "2");
    await expect(spark.locator("kbd")).toHaveText("2");
    await expect(page.locator(".lab-stage-footer")).toContainText("1–8 drops");

    await page.keyboard.press("2");
    await expect(page.locator("#reaction-feed")).toHaveText("Spark entered the lab.");
    await expect.poll(async () => page.evaluate(() => {
        const game = JSON.parse(window.render_game_to_text());
        return game.objects.filter((object) => object.type === "spark").length;
    })).toBe(1);

    expect(pageErrors).toEqual([]);
});
