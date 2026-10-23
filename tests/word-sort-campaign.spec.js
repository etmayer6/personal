const { test, expect } = require('@playwright/test');
const fs = require('node:fs/promises');

test('Word Sort shows and records the optional move par', async ({ page }) => {
    const pageErrors = [];
    const consoleErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text());
    });

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/word-sort/');
    const campaign = page.locator('#wordsort-campaign');
    const status = page.locator('#wordsort-campaign-status');
    const firstDeal = page.locator('[data-word-level="0"]');
    const secondDeal = page.locator('[data-word-level="1"]');

    await expect(campaign).toBeVisible();
    await expect(status).toContainText('finish Deal 01 with 11 or more moves left');
    await expect(firstDeal).toHaveAttribute('aria-label', /par: finish with at least 11 moves left/);

    await page.evaluate(() => window.__wordsort_debug_set_level(0));
    await expect(status).toHaveAttribute('data-state', 'safe');
    await page.evaluate(() => window.__wordsort_debug_set_moves(14));
    await expect(status).toHaveAttribute('data-state', 'close');
    await expect(status).toContainText('You can spend 3 more moves');
    await fs.mkdir('test-results/word-sort-par', { recursive: true });
    await page.screenshot({ path: 'test-results/word-sort-par/close.png', fullPage: true });
    await page.evaluate(() => window.__wordsort_debug_set_moves(10));
    await expect(status).toHaveAttribute('data-state', 'missed');
    await expect(status).toContainText('any clear still opens the next deal');

    await page.evaluate(() => {
        window.__wordsort_debug_set_level(0);
        window.__wordsort_debug_complete_round();
        window.__wordsort_debug_set_moves(10);
    });
    await expect(status).toContainText('par was 11');
    await expect(secondDeal).toBeEnabled();
    await expect(firstDeal).not.toHaveClass(/is-par-cleared/);

    await page.evaluate(() => {
        window.__wordsort_debug_set_level(0);
        window.__wordsort_debug_complete_round();
        window.__wordsort_debug_set_moves(11);
    });
    await expect(status).toHaveAttribute('data-state', 'earned');
    await expect(status).toContainText('Lantern pin earned');
    await expect(firstDeal).toHaveClass(/is-par-cleared/);
    await expect(firstDeal).toHaveAttribute('aria-label', /lantern pin earned/);

    await page.screenshot({ path: 'test-results/word-sort-par/desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileWidth = await page.evaluate(() => ({ viewport: window.innerWidth, document: document.documentElement.scrollWidth }));
    expect(mobileWidth.document).toBeLessThanOrEqual(mobileWidth.viewport);
    await page.screenshot({ path: 'test-results/word-sort-par/mobile.png' });

    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('word-sort-story-progress-v1')));
    expect(saved.parCleared).toContain(0);
    expect(saved.bestMovesLeft['0']).toBe(11);
    expect(pageErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
});
