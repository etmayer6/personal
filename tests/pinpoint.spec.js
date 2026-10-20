const { test, expect } = require("@playwright/test");
const path = require("node:path");

const BASE_URL = process.env.PINPOINT_BASE_URL || "http://127.0.0.1:4175";

async function gameState(page) {
    return page.evaluate(() => JSON.parse(window.render_game_to_text()));
}

function watchBrowserErrors(page) {
    const errors = [];
    page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
    page.on("console", (message) => {
        if (message.type() === "error") errors.push(`console: ${message.text()}`);
    });
    return errors;
}

async function playLocalRun(page) {
    for (let round = 1; round <= 5; round += 1) {
        await page.evaluate(() => window.__pinpoint_debug_guess(0, 0));
        await page.locator("#guess-button").click();
        await expect.poll(async () => (await gameState(page)).mode).toBe("result");

        if (round < 5) {
            await page.locator("#next-button").click();
            await expect.poll(async () => (await gameState(page)).round).toBe(round + 1);
        }
    }

    await page.locator("#next-button").click();
    await expect.poll(async () => (await gameState(page)).mode).toBe("complete");
}

test("Pinpoint shows the rising hint price and applies it to the round score", async ({ page }) => {
    const browserErrors = watchBrowserErrors(page);

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
    expect(browserErrors).toEqual([]);
});

test("Pinpoint saves a new best and shows a tie target on replay", async ({ page }) => {
    const browserErrors = watchBrowserErrors(page);
    await page.addInitScript(() => {
        if (sessionStorage.getItem("pinpoint-test-seeded") === "yes") return;
        localStorage.setItem("pinpoint-best-score-v1", "0");
        sessionStorage.setItem("pinpoint-test-seeded", "yes");
    });

    await page.goto(`${BASE_URL}/pinpoint/`);
    await page.waitForFunction(() => JSON.parse(window.render_game_to_text()).mode === "guessing");
    await expect(page.locator("#best-score-value")).toHaveText("0");

    await playLocalRun(page);
    const firstRun = await gameState(page);
    expect(firstRun.bestScore).toBe(firstRun.score);
    expect(firstRun.recordOutcome).toBe("new");
    await expect(page.locator("#record-reward")).toHaveAttribute("data-outcome", "new");
    await expect(page.locator("#record-reward")).toContainText("New personal best");
    expect(await page.evaluate(() => localStorage.getItem("pinpoint-best-score-v1"))).toBe(String(firstRun.score));
    if (process.env.PINPOINT_CAPTURE_QA_SHOTS === "1") {
        await page.screenshot({ path: path.resolve(process.cwd(), "test-results/pinpoint-new-record.png"), fullPage: true });
    }

    await page.reload();
    await page.waitForFunction(() => JSON.parse(window.render_game_to_text()).mode === "guessing");
    await expect(page.locator("#best-score-value")).toHaveText(firstRun.score.toLocaleString());
    await playLocalRun(page);

    const replay = await gameState(page);
    expect(replay.score).toBe(firstRun.score);
    expect(replay.recordOutcome).toBe("tied");
    await expect(page.locator("#record-reward")).toHaveAttribute("data-outcome", "tied");
    await expect(page.locator("#record-reward")).toContainText("Personal best matched");
    expect(browserErrors).toEqual([]);
});

test("Pinpoint shows the score gap when a run misses its personal best", async ({ page }) => {
    const browserErrors = watchBrowserErrors(page);
    await page.addInitScript(() => localStorage.setItem("pinpoint-best-score-v1", "25000"));

    await page.goto(`${BASE_URL}/pinpoint/`);
    await page.waitForFunction(() => JSON.parse(window.render_game_to_text()).mode === "guessing");
    await playLocalRun(page);

    const run = await gameState(page);
    expect(run.score).toBeLessThan(run.bestScore);
    expect(run.recordOutcome).toBe("chase");
    await expect(page.locator("#record-reward")).toHaveAttribute("data-outcome", "chase");
    await expect(page.locator("#record-reward")).toContainText("points to beat");
    if (process.env.PINPOINT_CAPTURE_QA_SHOTS === "1") {
        await page.screenshot({ path: path.resolve(process.cwd(), "test-results/pinpoint-score-gap.png"), fullPage: true });
    }
    expect(browserErrors).toEqual([]);
});
