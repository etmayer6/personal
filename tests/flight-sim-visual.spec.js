const { test, expect } = require('@playwright/test');
const fs = require('node:fs/promises');

test('Flight Sim twinjet cockpit stays legible and camera changes do not change flight controls', async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    await fs.mkdir('test-results/flight-sim-visual', { recursive: true });

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/flight-sim/');
    await expect(page.getByRole('radio')).toHaveCount(3);
    await expect(page.locator('#flight-overlay-start')).toBeVisible();
    await page.locator('#flight-overlay-start').click();
    await expect(page.locator('canvas')).toBeVisible();
    await page.screenshot({ path: 'test-results/flight-sim-visual/desktop-chase.png', fullPage: true });

    const chase = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    await page.locator('.workHubHeader').getByRole('button', { name: 'Switch Camera' }).click();
    await expect(page.locator('[data-flight-display="pfd"]')).toBeVisible();
    await expect(page.locator('[data-flight-display="nd"]')).toBeVisible();
    const cockpit = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(cockpit.mode).toBe(chase.mode);
    expect(cockpit.cameraMode).toBe('cockpit');
    expect(cockpit.plane.throttle).toBe(chase.plane.throttle);
    await page.screenshot({ path: 'test-results/flight-sim-visual/desktop-cockpit.png', fullPage: true });

    await page.keyboard.down('ArrowDown');
    await page.evaluate(() => window.advanceTime(800));
    await page.keyboard.up('ArrowDown');
    const controlled = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(controlled.plane.verticalVelocityFpm).toBeLessThan(cockpit.plane.verticalVelocityFpm - 100);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();
    await expect(page.getByRole('radio')).toHaveCount(3);
    await page.locator('#flight-overlay-start').click();
    await page.locator('.workHubHeader').getByRole('button', { name: 'Switch Camera' }).click();
    await expect(page.locator('[data-flight-display="pfd"]')).toBeVisible();
    await expect(page.locator('[data-flight-display="nd"]')).toBeVisible();
    const mobileWidth = await page.evaluate(() => ({ viewport: window.innerWidth, document: document.documentElement.scrollWidth }));
    expect(mobileWidth.document).toBeLessThanOrEqual(mobileWidth.viewport);
    await page.evaluate(() => {
        const stage = document.querySelector('#flight-sim-root .panel');
        if (stage) window.scrollTo(0, window.scrollY + stage.getBoundingClientRect().top - 104);
    });
    await page.screenshot({ path: 'test-results/flight-sim-visual/mobile-cockpit.png' });
    expect(pageErrors).toEqual([]);
});
