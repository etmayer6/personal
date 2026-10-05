const { test, expect } = require('@playwright/test');

test.use({ reducedMotion: 'reduce' });

test('reduced motion pauses ambient swimming while care controls remain responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/aquarium/');
    expect(await page.evaluate(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
    await page.waitForFunction(() => typeof window.render_game_to_text === 'function');
    const readState = () => page.evaluate(() => JSON.parse(window.render_game_to_text()));

    const before = await readState();
    await page.waitForTimeout(450);
    const settled = await readState();
    expect(settled.fish.x).toBe(before.fish.x);
    expect(settled.fish.y).toBe(before.fish.y);
    expect(settled.day).toBe(before.day);

    await page.locator('#feed-button').click();
    await expect.poll(async () => (await readState()).pellets).toBe(before.pellets + 1);
    await expect.poll(async () => (await readState()).fish.hunger).toBeGreaterThan(before.fish.hunger);
    await expect(page.locator('#event-message')).toContainText(/Momo|thank you|snack/i);
});
