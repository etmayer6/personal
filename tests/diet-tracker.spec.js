const { test, expect } = require('@playwright/test');

for (const viewport of [
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'mobile', width: 390, height: 844 }
]) {
    test(`diet tracker reviews a portion before saving at ${viewport.name} width`, async ({ browser }, testInfo) => {
        const context = await browser.newContext({ viewport });
        const page = await context.newPage();
        const errors = [];
        page.on('console', message => {
            if (message.type() === 'error') errors.push(message.text());
        });
        page.on('pageerror', error => errors.push(error.message));

        await page.goto('/diet-tracker/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();

        await page.locator('#sample-photo').click();
        await page.locator('#meal-form').evaluate(form => form.requestSubmit());
        const review = page.locator('#review-dialog');
        await expect(review).toBeVisible();
        await expect(page.locator('#review-title')).toHaveText('Berry yogurt oat bowl');
        await expect(page.locator('#review-nutrition')).toContainText('420');
        await expect(page.locator('#review-impact')).toContainText('2,190 kcal');

        await page.locator('#close-review').click();
        await expect(review).not.toBeVisible();
        await expect(page.locator('#meal-description')).toHaveValue('Berry yogurt oat bowl');
        await page.locator('#meal-form').evaluate(form => form.requestSubmit());
        await expect(review).toBeVisible();

        await page.locator('[data-portion="0.75"]').click();
        await expect(page.locator('[data-portion="0.75"]')).toHaveAttribute('aria-pressed', 'true');
        await expect(page.locator('#review-nutrition')).toContainText('315');
        await expect(page.locator('#review-impact')).toContainText('2,085 kcal');
        await review.screenshot({ path: testInfo.outputPath(`review-${viewport.name}.png`) });

        await page.locator('#review-form').evaluate(form => form.requestSubmit());
        await expect(review).not.toBeVisible();
        const reviewedMeal = page.locator('.meal-card').filter({ has: page.getByText('315', { exact: true }) });
        await expect(reviewedMeal).toContainText('315');
        await page.reload();
        await expect(page.locator('.meal-card').filter({ has: page.getByText('315', { exact: true }) })).toContainText('315');

        const overflow = await page.evaluate(() => ({
            document: document.documentElement.scrollWidth - document.documentElement.clientWidth,
            body: document.body.scrollWidth - document.body.clientWidth
        }));
        expect(overflow.document).toBeLessThanOrEqual(1);
        expect(overflow.body).toBeLessThanOrEqual(1);
        expect(errors).toEqual([]);
        await context.close();
    });
}
