const { test, expect } = require('@playwright/test');

test('meal plans reflect selected ingredients, pantry additions, and survive reload', async ({ page }) => {
    await page.goto('/meal-planner/');
    await expect(page.locator('#receipt-file')).toHaveCount(0);
    await page.getByRole('checkbox', { name: 'chicken breast', exact: true }).uncheck();
    await page.locator('#planner-notes').fill('oil, salt, pepper');
    await page.locator('#analyze-receipt').click();
    const wraps = page.locator('.recipe-card').filter({ hasText: 'Creamy lime chicken wraps' });
    await expect(wraps).toContainText('Need: chicken breast');
    await expect(wraps).toContainText('Need: garlic');
    await expect(page.locator('#result-stats')).toContainText('Receipt lines12');
    await expect(page.locator('#ingredient-count')).toHaveText('11 available');
    await page.locator('#planner-notes').fill('oil, salt, pepper, garlic');
    await page.locator('#analyze-receipt').click();
    await expect(wraps).not.toContainText('Need: garlic');
    await expect(wraps).toContainText('Need: chicken breast');
    await page.reload();
    await expect(page.getByRole('checkbox', { name: 'chicken breast', exact: true })).not.toBeChecked();
    await expect(page.locator('#planner-notes')).toHaveValue('oil, salt, pepper, garlic');
    await expect(wraps).toContainText('Need: chicken breast');
    await page.locator('#plan-style').selectOption('vegetarian');
    await page.locator('#analyze-receipt').click();
    await expect(page.locator('#recipe-list')).not.toContainText('chicken');
    await expect(page.locator('#recipe-list')).not.toContainText('salmon');
});

test('Garage Bay updates the car, build sheet, and saved configuration', async ({ page }) => {
    await page.goto('/garage/');
    await expect(page.locator('.finding-card')).toHaveCount(4);
    await page.getByRole('button', { name: 'Signal orange' }).click();
    await expect(page.locator('#paint-label')).toHaveText('Signal orange');
    await expect(page.locator('#build-code')).toContainText('SIGNAL');
    await page.getByRole('button', { name: 'Track mesh' }).click();
    await expect(page.locator('#deck-code')).toHaveText('20 TRACK');
    await page.getByLabel('Lower stance').check();
    await expect(page.locator('#spec-grid')).toContainText('132 mm');
    await page.getByRole('button', { name: 'Side' }).click();
    await expect(page.locator('#viewport-label')).toHaveText('Profile / side');
    await page.getByRole('button', { name: /Save build/ }).click();
    await expect(page.locator('#save-state')).toHaveText('Saved in this browser');
    await expect(page.locator('body')).toHaveAttribute('data-demo-state', 'ready');
});

test('Skywatch labels fictional fallback and recovers to a validated live snapshot', async ({ page }) => {
    let live = false;
    await page.route('**/flight-radar/live.json*', route => route.fulfill({
        status: live ? 200 : 503,
        contentType: 'application/json',
        body: JSON.stringify(live ? {
            provider: 'ADSB.lol',
            updatedAt: new Date().toISOString(),
            ac: [{ hex: 'abc123', flight: 'TEST123', lat: 42.03, lon: -93.63, alt_baro: 18000, gs: 312, track: 82 }]
        } : { error: 'unavailable' })
    }));
    await page.goto('/flight-radar/');
    await expect(page.locator('#feed-status')).toContainText('showing fictional aircraft');
    await expect(page.locator('#feed-age')).toContainText('No live snapshot');
    await expect(page.locator('#map-title')).toHaveText('Fictional practice aircraft over Iowa');
    await expect(page.locator('#refresh-button')).toBeEnabled();
    live = true;
    await page.locator('#refresh-button').click();
    await expect(page.locator('#feed-status')).toHaveText('Live snapshot');
    await expect(page.locator('#feed-age')).toContainText('Received');
    await expect(page.locator('#selected-status')).toContainText('TEST123');
    live = false;
    await page.locator('#refresh-button').click();
    await expect(page.locator('#feed-status')).toContainText('last received');
    await expect(page.locator('#feed-age')).toContainText('stale fallback');
    await expect(page.locator('#selected-status')).toContainText('TEST123');
});

test('Skywatch marks an old snapshot before using practice aircraft', async ({ page }) => {
    let fresh = false;
    await page.route('**/flight-radar/live.json*', route => route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
            provider: 'ADSB.lol',
            updatedAt: new Date(Date.now() - (fresh ? 0 : 60 * 60 * 1000)).toISOString(),
            ac: [{ hex: 'old123', flight: 'OLD123', lat: 42.03, lon: -93.63, alt_baro: 18000, gs: 312, track: 82 }]
        })
    }));
    await page.goto('/flight-radar/');
    await expect(page.locator('#feed-status')).toContainText('Snapshot is stale');
    await expect(page.locator('#feed-age')).toContainText('stale fallback');
    await expect(page.locator('#map-title')).toHaveText('Fictional practice aircraft over Iowa');
    fresh = true;
    await page.locator('#refresh-button').click();
    await expect(page.locator('#feed-status')).toHaveText('Live snapshot');
    await expect(page.locator('#feed-age')).toContainText('Received');
    await expect(page.locator('#map-title')).toHaveText('Aircraft snapshot over Iowa');
});

test('Games hub remembers favorites, last played game, and best score', async ({ page }) => {
    await page.goto('/games/');
    const flightCard = page.locator('[data-game-slug="flight-sim"]');
    await expect(flightCard.locator('.site-game-card-status')).toHaveText('New to the arcade');
    await flightCard.locator('.site-game-favorite').click();
    await expect(flightCard.locator('.site-game-favorite')).toHaveAttribute('aria-pressed', 'true');

    await page.goto('/tower-defense/');
    await page.evaluate(() => window.EthanSiteState.recordGameSnapshot('tower-defense', { score: 1234 }));
    await page.goto('/games/');

    await expect(page.locator('#games-activity')).toContainText('Continue Signal Grove Defense');
    await expect(page.locator('[data-game-slug="tower-defense"] .site-game-card-status')).toContainText('Played');
    await expect(page.locator('[data-game-slug="tower-defense"] .site-game-card-status')).toContainText('Best 1,234');
    await expect(flightCard.locator('.site-game-favorite')).toHaveAttribute('aria-pressed', 'true');
});

test('project filters stay inside the interactive workbench', async ({ page }) => {
    await page.goto('/projects/');
    await expect(page.locator('.feature-card')).toHaveCount(3);
    await page.getByRole('button', { name: 'Explore', exact: true }).click();
    await expect(page.locator('[data-project-filter-status]')).toHaveText('3 explore projects ready.');
    await expect(page.locator('.feature-card')).toHaveCount(3);
    await expect(page.locator('.archive-grid:not(.archive-grid-reference) .archive-card:visible')).toHaveCount(3);
    await expect(page.locator('.archive-grid-reference .archive-card')).toHaveCount(8);
    await page.getByRole('button', { name: 'Everything', exact: true }).click();
    await expect(page.locator('[data-project-filter-status]')).toHaveText('All 12 interactive doors are open.');
});

test('shared project pages keep Projects marked as the current section', async ({ page }) => {
    for (const route of ['/flight-radar/', '/plant-to-ape/']) {
        await page.goto(route);
        await expect(page.locator('nav a[aria-current="page"]')).toHaveText('Projects');
    }
});

test('Signal Grove Defense supports placement, waves, upgrades, pause, and reset', async ({ page }) => {
    await page.goto('/tower-defense/');
    await expect(page.locator('#tower-defense-root')).toBeVisible();
    await page.locator('#tower-start-btn').click();

    const canvas = page.locator('#tower-defense-canvas');
    const bounds = await canvas.boundingBox();
    const clickGridCell = async (col, row) => {
        const x = 48 + col * 54 + 27;
        const y = 57 + row * 54 + 27;
        await page.mouse.click(bounds.x + bounds.width * x / 960, bounds.y + bounds.height * y / 600);
    };

    await clickGridCell(1, 3);
    const placed = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(placed.mode).toBe('playing');
    expect(placed.towers).toHaveLength(1);
    expect(placed.towers[0].type).toBe('pulse');
    expect(placed.credits).toBe(165);

    await page.locator('#tower-wave-btn').click();
    await page.evaluate(() => window.advanceTime(2400));
    const waveLive = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(waveLive.wave).toBe(1);
    expect(waveLive.waveState).toBe('active');
    expect(waveLive.enemies.length + waveLive.queuedSignals).toBeGreaterThan(0);

    await page.locator('#tower-upgrade-btn').click();
    const upgraded = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(upgraded.towers[0].level).toBe(2);
    expect(upgraded.towers[0].damage).toBeGreaterThan(placed.towers[0].damage);

    await page.locator('#tower-pause-btn').click();
    const paused = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(paused.paused).toBe(true);
    await page.evaluate(() => window.advanceTime(1800));
    const stillPaused = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(stillPaused.enemies).toEqual(paused.enemies);

    await page.locator('#tower-reset-btn').click();
    const reset = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(reset.mode).toBe('ready');
    expect(reset.wave).toBe(0);
    expect(reset.towers).toHaveLength(0);
    expect(reset.credits).toBe(220);
});

test('Flight Sim flight model responds to power, flaps, and a stall', async ({ page }) => {
    await page.goto('/flight-sim/');
    await page.locator('#flight-overlay-start').click();

    const baseline = await page.evaluate(() => JSON.parse(window.render_game_to_text()));

    await page.keyboard.down('PageUp');
    await page.evaluate(() => window.advanceTime(1800));
    await page.keyboard.up('PageUp');
    const powered = await page.evaluate(() => JSON.parse(window.render_game_to_text()));

    expect(powered.plane.throttle).toBeGreaterThan(baseline.plane.throttle);
    expect(powered.plane.thrustNewtons).toBeGreaterThan(0);

    await page.keyboard.press('z');
    await page.evaluate(() => window.advanceTime(200));
    const flapped = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(flapped.plane.flaps).toBe('10 deg');
    expect(flapped.plane.liftCoefficient).toBeGreaterThan(powered.plane.liftCoefficient);

    await page.keyboard.down('PageDown');
    await page.evaluate(() => window.advanceTime(3000));
    await page.keyboard.up('PageDown');
    await page.keyboard.down('ArrowUp');
    await page.evaluate(() => window.advanceTime(12000));
    await page.keyboard.up('ArrowUp');
    const stalled = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(stalled.plane.stall).toBe(true);
    expect(stalled.plane.buffet).toBeGreaterThan(0);
    expect(stalled.plane.stallMarginDeg).toBeLessThan(0);
});

test('Flight Sim couples engine spool and maneuvering stall speed to the aircraft state', async ({ page }) => {
    await page.goto('/flight-sim/');
    await page.locator('#flight-overlay-start').click();

    const baseline = await page.evaluate(() => JSON.parse(window.render_game_to_text()));

    await page.keyboard.down('PageUp');
    await page.evaluate(() => window.advanceTime(1400));
    await page.keyboard.up('PageUp');
    const powered = await page.evaluate(() => JSON.parse(window.render_game_to_text()));

    expect(powered.plane.engineRpm).toBeGreaterThan(baseline.plane.engineRpm);
    expect(powered.plane.enginePowerFraction).toBeGreaterThan(baseline.plane.enginePowerFraction);
    expect(powered.plane.thrustNewtons).toBeGreaterThan(baseline.plane.thrustNewtons);
    expect(powered.plane.airDensityKgM3).toBeLessThan(1.225);
    expect(powered.plane.iasSpeedKts).toBeLessThan(powered.plane.trueAirspeedKts);

    await page.keyboard.down('PageDown');
    await page.evaluate(() => window.advanceTime(3200));
    await page.keyboard.up('PageDown');
    const powerOff = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(powerOff.plane.engineRpm).toBeLessThan(powered.plane.engineRpm);
    expect(powerOff.plane.thrustNewtons).toBeLessThan(powered.plane.thrustNewtons);

    await page.reload();
    await page.locator('#flight-overlay-start').click();
    const straight = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    await page.keyboard.down('ArrowRight');
    await page.evaluate(() => window.advanceTime(1000));
    await page.keyboard.up('ArrowRight');
    const banked = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(banked.plane.stallSpeedKts).toBeGreaterThan(straight.plane.stallSpeedKts + 5);
});
