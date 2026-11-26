const { test, expect } = require('@playwright/test');

test('erase brush can clear a drag stroke that starts on an empty cell', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    page.on('console', message => {
        if (message.type() === 'error') browserErrors.push(message.text());
    });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/conway/');
    await page.locator('#run-button').click();
    await page.locator('#clear-button').click();

    const canvas = page.locator('#life-canvas');
    const box = await canvas.boundingBox();
    const point = (x, y) => ({
        x: box.x + box.width * ((x + 0.5) / 48),
        y: box.y + box.height * ((y + 0.5) / 30)
    });
    await page.mouse.click(point(3, 3).x, point(3, 3).y);
    await page.mouse.click(point(4, 3).x, point(4, 3).y);
    expect((await page.evaluate(() => JSON.parse(window.render_game_to_text()))).population).toBe(2);

    await page.keyboard.press('e');
    await expect(page.locator('#erase-brush')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#interaction-readout')).toContainText('drag to clear');

    const start = point(2, 3);
    const end = point(5, 3);
    await page.mouse.move(start.x, start.y);
    await page.mouse.down();
    await page.mouse.move(end.x, end.y, { steps: 6 });
    await page.mouse.up();

    const state = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(state.population).toBe(0);
    expect(state.eraseBrush).toBe(true);
    await expect(page.locator('#erase-brush')).toContainText('on');
    await page.screenshot({ path: 'test-results/conway-erase-brush.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('#erase-brush')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(391);
    await page.screenshot({ path: 'test-results/conway-erase-brush-mobile.png', fullPage: true });
    await page.keyboard.press('e');
    await expect(page.locator('#erase-brush')).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#interaction-readout')).toContainText('click to flip');
    expect(browserErrors).toEqual([]);
});
