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
    await expect(page.locator('#map-title')).toHaveText('Fictional practice aircraft over Iowa');
    await expect(page.locator('#refresh-button')).toBeEnabled();
    live = true;
    await page.locator('#refresh-button').click();
    await expect(page.locator('#feed-status')).toHaveText('Live snapshot');
    await expect(page.locator('#selected-status')).toContainText('TEST123');
    live = false;
    await page.locator('#refresh-button').click();
    await expect(page.locator('#feed-status')).toContainText('last received');
    await expect(page.locator('#selected-status')).toContainText('TEST123');
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
    await expect(page.locator('[data-project-filter-status]')).toHaveText('All 11 interactive doors are open.');
});

test('shared project pages keep Projects marked as the current section', async ({ page }) => {
    for (const route of ['/flight-radar/', '/plant-to-ape/']) {
        await page.goto(route);
        await expect(page.locator('nav a[aria-current="page"]')).toHaveText('Projects');
    }
});
