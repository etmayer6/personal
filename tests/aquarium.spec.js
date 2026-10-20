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

test('Mola Mola keeps care progress and unlocks reef keepsakes across visits', async ({ page }) => {
    await page.addInitScript(() => {
        if (!localStorage.getItem('mola-mola-care-v1')) {
            localStorage.setItem('mola-mola-care-v1', JSON.stringify({
                elapsed: 180,
                growth: 32,
                hunger: 44,
                cleanliness: 62,
                mood: 70,
                feedings: 4,
                foodsTried: { jellyfish: true, krill: false, seaweed: false },
                lastFood: 'jellyfish',
                foodType: 'jellyfish'
            }));
        }
    });
    await page.goto('/aquarium/');
    await expect(page.locator('#reef-milestone')).toContainText('Shell garden');

    const before = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(before.growth.points).toBe(32);
    expect(before.fish.stageIndex).toBe(1);
    expect(before.foodsTried).toEqual(['jellyfish']);

    await page.locator('#feed-button').click();
    const afterFeed = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(afterFeed.growth.points).toBeGreaterThan(before.growth.points);
    expect(afterFeed.foodsTried).toContain('jellyfish');
    await page.reload();

    const returned = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(returned.growth.points).toBe(afterFeed.growth.points);
    expect(returned.foodVariety).toBe(1);
    expect(returned.reefMilestone).toBe('Shell garden');
    await expect(page.locator('.care-hint')).toContainText('Care never fades while you are away');
});

test('an aimed snack pulls Momo into a banking chase and a mouth-first bite', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/aquarium/');
    await page.waitForFunction(() => typeof window.render_game_to_text === 'function');

    const before = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    const canvas = page.locator('#aquarium-canvas');
    const box = await canvas.boundingBox();
    await page.mouse.click(box.x + box.width * (250 / 960), box.y + box.height * (230 / 600));

    const tossed = await page.evaluate(() => JSON.parse(window.render_game_to_text()));
    expect(tossed.snacks).toEqual([{ type: 'jellyfish', x: 250, y: 230 }]);

    const bite = await page.evaluate(() => {
        let current;
        for (let frame = 0; frame < 360; frame += 1) {
            window.advanceTime(1000 / 60);
            current = JSON.parse(window.render_game_to_text());
            if (current.fish.eating && current.pellets === 0) return current;
        }
        return current;
    });
    expect(bite.fish.x).not.toBe(before.fish.x);
    expect(bite.pellets).toBe(0);
    expect(bite.fish.eating).toBe(true);
});
