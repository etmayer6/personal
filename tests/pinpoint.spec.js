const { test, expect } = require("@playwright/test");

const BASE_URL = "http://127.0.0.1:4175";

async function gameState(page) {
    return page.evaluate(() => JSON.parse(window.render_game_to_text()));
}

test("Pinpoint shows the rising hint price and applies it to the round score", async ({ page }) => {
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.goto(`${BASE_URL}/pinpoint/`);
    await page.waitForFunction(() => {
        if (typeof window.render_game_to_text !== "function") return false;
        return JSON.parse(window.render_game_to_text()).mode === "guessing";
    });

    await expect(page.locator("#hint-cost-value")).toHaveText("Next -100 pts");
    await expect(page.locator("#hint-button")).toHaveText("Use a hint (-100 pts)");
    await page.locator("#hint-button").click();
    await expect(page.locator("#game-status")).toContainText("100 points this round");
    await page.evaluate(() => window.__pinpoint_debug_guess(0, 0));
    await page.locator("#guess-button").click();
    await expect.poll(async () => (await gameState(page)).mode).toBe("result");
    expect(await gameState(page)).toMatchObject({ hintCost: 100, hintPenalty: 100 });
    await expect(page.locator("#answer-detail")).toContainText("100 point hint penalty");

    await page.locator("#next-button").click();
    await expect.poll(async () => (await gameState(page)).round).toBe(2);
    await expect(page.locator("#hint-cost-value")).toHaveText("Next -150 pts");
    await expect(page.locator("#hint-button")).toHaveText("Use a hint (-150 pts)");
    await page.locator("#hint-button").click();
    expect(await gameState(page)).toMatchObject({ hintCost: 150, hintPenalty: 150 });
    await expect(page.locator("#game-status")).toContainText("150 points this round");

    await page.evaluate(() => window.__pinpoint_debug_guess(0, 0));
    await page.locator("#guess-button").click();
    await expect.poll(async () => (await gameState(page)).mode).toBe("result");
    expect(await gameState(page)).toMatchObject({ hintCost: 150, hintPenalty: 150 });
    await expect(page.locator("#answer-detail")).toContainText("150 point hint penalty");
    expect(pageErrors).toEqual([]);
});
