const { test, expect } = require('@playwright/test');

test('privacy trace explains the publication gate at desktop and mobile widths', async ({ browser }, testInfo) => {
    for (const viewport of [{ name: 'desktop', width: 1280, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
        const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
        const page = await context.newPage();
        const browserErrors = [];
        page.on('console', message => {
            if (message.type() === 'error') browserErrors.push(message.text());
        });
        page.on('pageerror', error => browserErrors.push(error.message));

        await page.goto('/childhood-timeline/');
        await page.getByRole('button', { name: /Science fair at the kitchen table/ }).click();
        await page.getByRole('button', { name: 'Trace privacy changes' }).click();

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(page.locator('#transform-status')).toHaveText('Step 1 of 4: Extract');
        await expect(page.locator('#transform-preview')).toContainText('<full name>');
        await expect(page.locator('#transform-ledger .is-complete')).toHaveCount(0);

        await page.getByRole('button', { name: 'Next change' }).click();
        await expect(page.locator('#transform-status')).toHaveText('Step 2 of 4: De-identify');
        await expect(page.locator('#transform-ledger .is-complete')).toHaveCount(2);

        await dialog.getByRole('button', { name: /Generalize/ }).click();
        await expect(page.locator('#transform-preview')).toContainText('Archive year 08');
        await expect(page.locator('#transform-ledger .is-complete')).toHaveCount(4);

        await dialog.getByRole('button', { name: /Publish/ }).click();
        await expect(page.locator('#transform-status')).toHaveText('Step 4 of 4: Publish');
        await expect(page.locator('#transform-ledger .is-complete')).toHaveCount(6);
        await expect(page.locator('.transform-story')).toContainText('Science fair at the kitchen table');
        await expect(page.locator('#transform-preview')).not.toContainText('<original source link>');

        expect(await page.locator('html').evaluate(element => element.scrollWidth)).toBeLessThanOrEqual(viewport.width + 1);
        expect(await dialog.locator('form').evaluate(element => element.scrollWidth)).toBeLessThanOrEqual(await dialog.locator('form').evaluate(element => element.clientWidth + 1));
        expect(browserErrors).toEqual([]);
        await dialog.screenshot({ path: testInfo.outputPath(`privacy-trace-${viewport.name}.png`) });
        await context.close();
    }
});
