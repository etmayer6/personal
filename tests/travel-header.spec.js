const { test, expect } = require('@playwright/test');

// Header controls must work without the external map library or tile service.
test.beforeEach(async ({ context }) => {
    await context.route('https://unpkg.com/**', route => route.abort());
});

for (const width of [1440, 768, 390]) {
    test(`travel photo header stays contained and switches scenes at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 1000 });
        await page.goto('/travel/');
        const hero = page.locator('.travel-hero');
        const image = page.locator('#travel-hero-image');
        await expect(hero.getByRole('button')).toHaveCount(3);
        await expect(page.getByRole('button', { name: 'Show Isla Mujeres photo' })).toHaveAttribute('aria-pressed', 'true');
        const title = await page.locator('#travel-title').boundingBox();
        const bounds = await hero.boundingBox();
        expect(title.x).toBeGreaterThanOrEqual(bounds.x);
        expect(title.x + title.width).toBeLessThanOrEqual(bounds.x + bounds.width);
        expect(await page.locator('html').evaluate(el => el.scrollWidth)).toBeLessThanOrEqual(width + 1);
        if (width === 1440) {
            expect(bounds.height).toBeLessThanOrEqual(450);
            expect((await page.locator('#travel-explorer').boundingBox()).y).toBeLessThan(700);
        }

        await page.getByRole('button', { name: 'Both', exact: true }).click();
        await page.getByRole('button', { name: 'Show El Boquerón photo' }).click();
        await expect(page.locator('#travel-scene-caption')).toHaveText('El Boquerón, El Salvador');
        await expect(image).toHaveAttribute('alt', /volcanic crater/);
        await expect(image).toHaveAttribute('src', /P1020888-1440/);
        await expect(page.getByRole('button', { name: 'Both', exact: true })).toHaveAttribute('aria-pressed', 'true');
        await expect(hero.locator('[aria-pressed="true"]')).toHaveCount(1);

        const home = page.getByRole('button', { name: 'Show Ames photo' });
        await home.focus();
        await page.keyboard.press('Enter');
        await expect(page.locator('#travel-scene-caption')).toHaveText('Ames, Iowa');
        await expect(image).toHaveAttribute('src', /P1020464-1440/);
        await expect(home).toBeFocused();
        await expect(home).toHaveAttribute('aria-pressed', 'true');
        await expect(page.getByRole('link', { name: 'Open the full photo journal' })).toHaveAttribute('href', '../photos/');
        await page.getByRole('link', { name: 'Explore the map' }).click();
        await expect(page).toHaveURL(/#travel-explorer$/);
        await expect(page.locator('.travel-view-toggle')).toBeInViewport();
    });
}

test('a failed scene load leaves the previous image and selection intact', async ({ page, context }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/travel/');
    await context.route('**/P1020888-*.webp', route => route.abort());
    await page.getByRole('button', { name: 'Show El Boquerón photo' }).click();
    await expect(page.locator('#travel-hero-status')).toContainText('could not load');
    await expect(page.locator('#travel-scene-caption')).toHaveText('Isla Mujeres, Mexico');
    await expect(page.locator('#travel-hero-image')).toHaveAttribute('src', /GOPR9752-1440/);
    await expect(page.getByRole('button', { name: 'Show Isla Mujeres photo' })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Show Ames photo' }).click();
    await expect(page.locator('#travel-scene-caption')).toHaveText('Ames, Iowa');
});
