const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const { publicRoutes } = require('./site-manifest.cjs');

test.use({ reducedMotion: 'reduce' });

test('shared primary headers keep one frame across pages and leave the resume untouched', async ({ page }) => {
    test.setTimeout(60000);
    await page.setViewportSize({ width: 1440, height: 1000 });
    const routes = publicRoutes.filter(route => {
        if (route.path === '/resume/') return false;
        const file = path.join(__dirname, '..', route.path === '/' ? 'index.html' : `${route.path.slice(1)}${route.path.endsWith('/') ? 'index.html' : ''}`);
        return fs.readFileSync(file, 'utf8').includes('aria-label="Primary navigation"');
    });
    expect(routes.length).toBeGreaterThan(30);
    for (const route of routes) {
        await page.goto(route.path);
        const frame = await page.locator('body > header').evaluate(header => {
            const nav = header.querySelector('nav[aria-label="Primary navigation"]');
            const link = nav.querySelector('li a');
            return { height: header.getBoundingClientRect().height, background: getComputedStyle(header).backgroundColor,
                width: nav.getBoundingClientRect().width, font: getComputedStyle(link).fontSize, links: nav.querySelectorAll('li a').length };
        });
        expect(frame, route.path).toEqual({ height: 68, background: 'rgb(16, 43, 54)', width: 1160, font: '12px', links: 7 });
    }
    await page.goto('/resume/');
    await expect(page.locator('link[href*="site-frame.css"]')).toHaveCount(0);
});

test('skip links and section navigation keep their meaning on hub and detail pages', async ({ page }) => {
    await page.goto('/projects/');
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    await skip.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main-content')).toBeFocused();
    await expect(page.locator('nav[aria-label="Primary navigation"] a[aria-current="page"]')).toHaveText('Projects');

    await page.goto('/block-blast/');
    await expect(page.locator('nav[aria-label="Primary navigation"] a[aria-current="location"]')).toHaveText('Games');
    await expect(page.locator('nav[aria-label="Primary navigation"] a[aria-current="page"]')).toHaveCount(0);

    await page.goto('/projects/');
    const card = page.locator('.archive-card').first();
    await expect(card).not.toHaveAttribute('role', 'link');
    await expect(card).not.toHaveAttribute('tabindex');
    await expect(card.locator('a[href]').first()).toBeVisible();
});

test('private Gremlin Dex skip link targets the gate, then the unlocked game', async ({ page }) => {
    await page.goto('/gremlindex/');
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skip).toHaveAttribute('href', '#gate-password');
    await skip.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#gate-password')).toBeFocused();

    await page.locator('#gate-password').fill('cactus');
    await page.getByRole('button', { name: 'Unlock Gremlin Dex' }).click();
    await expect(page.locator('#gremlindex-content')).toBeVisible();
    await expect(skip).toHaveAttribute('href', '#gremlindex-content');
});

test('mobile flight scenarios advertise the horizontal picker', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/flight-sim/');
    const picker = page.locator('.scenario-options');
    await expect(picker).toBeVisible();
    await expect(page.locator('.scenario-scroll-hint')).toBeVisible();
    const dimensions = await picker.evaluate(element => ({ client: element.clientWidth, scroll: element.scrollWidth }));
    expect(dimensions.scroll).toBeGreaterThan(dimensions.client);
    await expect(page.locator('.scenario-option')).toHaveCount(3);
});

test('featured projects have equal space, aligned actions, and a compact introduction', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/projects/');
    // Entrance animation may finish with an identity matrix rather than "none".
    // Wait for actual alignment before measuring the settled card layout.
    await expect.poll(async () => page.locator('.feature-card').evaluateAll(cards => {
        const tops = cards.map(card => card.getBoundingClientRect().top);
        return Math.max(...tops) - Math.min(...tops);
    })).toBeLessThan(1);
    const cards = await page.locator('.featured-layout .feature-card').evaluateAll(elements => elements.map(card => {
        const box = card.getBoundingClientRect();
        const image = card.querySelector('img').getBoundingClientRect();
        const link = card.querySelector('.feature-link').getBoundingClientRect();
        return { x: box.x, y: box.y, width: box.width, height: box.height, imageY: image.y, imageHeight: image.height, linkY: link.y };
    }));
    expect(cards).toHaveLength(3);
    expect(Math.max(...cards.map(c => c.width)) - Math.min(...cards.map(c => c.width))).toBeLessThan(1);
    expect(Math.max(...cards.map(c => c.y)) - Math.min(...cards.map(c => c.y))).toBeLessThan(1);
    expect(cards[0].y).toBeLessThan(760);
    expect(cards[0].height).toBeLessThan(560);
    expect(Math.max(...cards.map(c => c.linkY)) - Math.min(...cards.map(c => c.linkY))).toBeLessThan(3);
    for (const card of cards) expect(card.imageHeight).toBe(210);
    await expect(page.locator('.featured-layout .project-tags')).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Make/ })).toBeVisible();
});

test('all twelve games use the same readable catalog layout', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/games/');
    await expect(page.locator('.site-game-card-status')).toHaveCount(12);
    const cards = await page.locator('.games-grid .game-card').evaluateAll(elements => elements.map(card => {
        const box = card.getBoundingClientRect();
        const status = getComputedStyle(card.querySelector('.site-game-card-status'));
        return { width: box.width, y: box.y, imageHeight: card.querySelector('img').getBoundingClientRect().height,
            background: getComputedStyle(card).backgroundColor, statusColor: status.color, opacity: status.opacity };
    }));
    expect(cards).toHaveLength(12);
    expect(new Set(cards.map(c => Math.round(c.width))).size).toBe(1);
    expect(cards.slice(0, 3).every(c => c.y === cards[0].y)).toBe(true);
    for (const card of cards) {
        expect(card.imageHeight).toBe(210);
        expect(card.background).toBe('rgb(251, 248, 241)');
        expect(card.statusColor).toBe('rgb(81, 100, 106)');
        expect(card.opacity).toBe('1');
    }
    const favorite = page.locator('[data-game-slug="pinpoint"] .site-game-favorite');
    await favorite.click();
    await expect(favorite).toHaveAttribute('aria-pressed', 'true');
    await page.reload();
    await expect(favorite).toHaveAttribute('aria-pressed', 'true');
});

test('homepage directs visitors without repeating the whole catalog', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero-actions .button-primary')).toHaveAttribute('href', 'projects/');
    await expect(page.locator('.off-clock-links a')).toHaveCount(4);
    expect(await page.locator('.off-clock-links a').evaluateAll(links => links.map(link => link.getAttribute('href')))).toEqual(['games/', 'photos/', 'blog/', 'sketchbook/']);
    await expect(page.getByRole('link', { name: 'Peek at the sketchbook' })).toBeVisible();
});

test('blog is compact and still clearly identifies AI authorship', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/blog/');
    await expect(page.locator('.blog-author-card')).toContainText('Ethan Mayer');
    await expect(page.locator('.featured-note .post-meta')).toContainText('By Ethan Mayer');
    await expect(page.locator('.codex-archive')).toContainText('AI-authored / Codex');
    await expect(page.locator('.signal-monitor, .author-stats, .transmission-status')).toHaveCount(0);
    expect((await page.locator('.blog-hero').boundingBox()).height).toBeLessThan(400);
    expect((await page.locator('.featured-note').boundingBox()).height).toBeLessThan(470);
});

test('gallery starts without stealing focus and connects back to the travel map', async ({ page }) => {
    await page.goto('/photos/');
    await expect(page.locator('.photo-card')).toHaveCount(27);
    expect(await page.evaluate(() => document.activeElement.tagName)).toBe('BODY');
    await expect(page.getByRole('link', { name: 'Travel map' })).toHaveAttribute('href', '../travel/');
    const archive = page.getByRole('button', { name: 'All photos' });
    await archive.click();
    await expect(archive).toBeFocused();
    await page.getByRole('button', { name: 'Curated journal' }).click();
    const open = page.getByRole('button', { name: 'View Island window' });
    await open.click();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(open).toBeFocused();
});

test('photo order controls stay readable and easy to tap on a narrow phone', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 760 });
    await page.goto('/photos/');

    const buttons = await page.locator('.view-button').evaluateAll((items) => items.map((button) => ({
        height: button.getBoundingClientRect().height,
        clientWidth: button.clientWidth,
        scrollWidth: button.scrollWidth,
    })));

    expect(buttons).toHaveLength(3);
    for (const button of buttons) {
        expect(button.scrollWidth).toBeLessThanOrEqual(button.clientWidth);
        expect(button.height).toBeGreaterThanOrEqual(44);
    }
});
