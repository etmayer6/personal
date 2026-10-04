const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const TOKEN = 'a'.repeat(64);
const ID = '11111111-1111-4111-8111-111111111111';
const baseAlbum = () => ({ page: 0, pages: 1, total: 0, open: true, stickers: [] });

async function fixture(context, options = {}) {
    const state = { album: baseAlbum(), placements: [], guests: 0, undos: [], ...options };
    await context.route('https://jqnfxgkmlrswxgtxqovm.supabase.co/**', async route => {
        const name = new URL(route.request().url()).pathname.split('/').at(-1);
        const body = route.request().postDataJSON();
        let data;
        if (name === 'sketchbook_read') {
            if (state.readError) { await route.abort(); return; }
            data = typeof state.read === 'function' ? state.read(body) : state.album;
        } else if (name === 'sketchbook_guest') {
            state.guests++; data = { token: TOKEN };
        } else if (name === 'sketchbook_place') {
            state.placements.push(body);
            if (state.placeError) { await route.fulfill({ status: 400, contentType: 'application/json', body: JSON.stringify({ message: state.placeError }) }); return; }
            state.album = { ...state.album, total: 1, stickers: [{ id: ID, slot: 5, sticker: body.p_sticker, ink: body.p_ink }] };
            data = { id: ID, page: 0, next_at: new Date(Date.now() + 60000).toISOString(), remaining: 2 };
            if (state.loseResponse) { state.loseResponse = false; await route.abort(); return; }
        } else if (name === 'sketchbook_undo') {
            state.undos.push(body); state.album = { ...state.album, total: 0, stickers: [] }; data = true;
        } else { throw new Error(`Unexpected backend call ${name}`); }
        await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(data) });
    });
    return state;
}

test('empty album is honest and private previews never become fake public stickers', async ({ page, context }) => {
    const state = await fixture(context);
    await page.goto('/sketchbook/');
    await expect(page.locator('#connection')).toContainText('connected');
    await expect(page.locator('#sticker-board')).toContainText('First page. Fresh paper.');
    await expect(page.locator('#sticker-board svg')).toHaveCount(0);
    await expect(page.locator('[data-sticker]')).toHaveCount(12);
    await expect(page.locator('[data-ink]')).toHaveCount(5);
    await page.getByRole('button', { name: 'Window cat', exact: true }).click();
    await page.getByRole('button', { name: 'Sea glass', exact: true }).click();
    await expect(page.locator('#sticker-name')).toHaveText('Window cat');
    await expect(page.locator('#ink-name')).toHaveText('Sea glass');
    await expect(page.locator('#sticker-preview svg')).toHaveAttribute('aria-label', 'Window cat');
    expect(state.guests).toBe(0); expect(state.placements).toHaveLength(0);
    await page.reload();
    await expect(page.locator('[data-sticker="cat"]')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-ink="sea"]')).toHaveAttribute('aria-pressed', 'true');
});

test('publishing sends only allowlisted choices, and undo preserves the cooldown across reloads', async ({ page, context }) => {
    const state = await fixture(context);
    await page.goto('/sketchbook/');
    await page.getByRole('button', { name: 'Forest umbrella', exact: true }).click();
    await page.getByRole('button', { name: 'Wild rose', exact: true }).click();
    await page.locator('#publish').click();
    await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    expect(state.guests).toBe(1); expect(state.placements).toHaveLength(1);
    expect(Object.keys(state.placements[0]).sort()).toEqual(['p_ink', 'p_request', 'p_sticker', 'p_token']);
    expect(state.placements[0]).toMatchObject({ p_sticker: 'mushroom', p_ink: 'rose', p_token: TOKEN });
    await expect(page.locator('#publish')).toBeDisabled();
    await page.locator('#undo').click();
    await expect(page.locator('#sticker-board svg')).toHaveCount(0);
    expect(state.undos).toEqual([{ p_token: TOKEN, p_id: ID }]);
    await expect(page.locator('#publish')).toBeDisabled();
    await page.reload();
    await expect(page.locator('#connection')).toContainText('connected');
    await expect(page.locator('#publish')).toBeDisabled();
    await expect(page.locator('#undo')).toBeHidden();
});

test('a contribution is visible from an independent browser without a guest pass', async ({ browser }) => {
    const first = await browser.newContext();
    const state = await fixture(first);
    const one = await first.newPage(); await one.goto('/sketchbook/'); await one.locator('#publish').click();
    await expect(one.locator('#sticker-board svg')).toHaveCount(1);
    const second = await browser.newContext(); await fixture(second, { album: state.album });
    const two = await second.newPage(); await two.goto('/sketchbook/');
    await expect(two.locator('#sticker-board svg')).toHaveCount(1);
    await expect(two.locator('#undo')).toBeHidden();
    expect(await two.evaluate(() => localStorage.getItem('ethan-sketchbook-guest-v1'))).toBeNull();
    await first.close(); await second.close();
});

test('a lost response retries the same request ID, including after a reload', async ({ page, context }) => {
    const state = await fixture(context, { loseResponse: true });
    await page.goto('/sketchbook/'); await page.locator('#publish').click();
    await expect(page.locator('#publish-status')).toContainText('could not be reached');
    await page.reload(); await page.locator('#publish').click();
    await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    expect(state.placements).toHaveLength(2);
    expect(state.placements[0].p_request).toBe(state.placements[1].p_request);
    expect(state.guests).toBe(1);
});

test('unsafe or unexpected API artwork is discarded, not rendered as user markup', async ({ page, context }) => {
    await fixture(context, { album: { ...baseAlbum(), total: 4, stickers: [
        { id: ID, slot: 0, sticker: '<img src=x onerror=alert(1)>', ink: 'fern' },
        { id: ID, slot: 1, sticker: 'sprout', ink: 'url(javascript:alert(1))' },
        { id: ID, slot: 120, sticker: 'sun', ink: 'ochre' },
        { id: ID, slot: 5, sticker: 'cat', ink: 'rose', html: '<script>bad</script>', x: -9999, rotation: 3600 }
    ] } });
    await page.goto('/sketchbook/');
    await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    await expect(page.locator('#sticker-board img,#sticker-board script')).toHaveCount(0);
    await expect(page.locator('#sticker-board svg')).toHaveAttribute('aria-label', 'Window cat');
});

test('pagination and shared page links work without allowing arbitrary layout edits', async ({ page, context }) => {
    await fixture(context, { read: ({ p_page }) => ({ page: p_page < 0 || p_page > 1 ? 1 : p_page, pages: 2, total: 13, open: true, stickers: [] }) });
    await page.goto('/sketchbook/#page=1');
    await expect(page.locator('#page-counter')).toHaveText('Page 1 of 2');
    await page.locator('#next').click();
    await expect(page.locator('#page-counter')).toHaveText('Page 2 of 2');
    await expect(page).toHaveURL(/#page=2$/);
    await page.locator('#previous').click();
    await expect(page).toHaveURL(/#page=1$/);
    await page.locator('#latest').click(); await expect(page).toHaveURL(/#page=2$/);
    await expect(page.locator('input,textarea,[contenteditable],input[type=file]')).toHaveCount(0);
    await expect(page.locator('nav a[aria-current]')).toHaveText('Projects');
});

test('temporary disconnection keeps an existing shared page but disables posting', async ({ page, context }) => {
    const state = await fixture(context, { album: { ...baseAlbum(), total: 1, stickers: [{ id: ID, slot: 8, sticker: 'bird', ink: 'sea' }] } });
    await page.goto('/sketchbook/'); await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    state.readError = true; await page.locator('#refresh').click();
    await expect(page.locator('#connection')).toContainText('Connection lost');
    await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    await expect(page.locator('#publish')).toBeDisabled();
    state.readError = false; await page.locator('#refresh').click(); await expect(page.locator('#publish')).toBeEnabled();
});

test('a first-visit backend failure is not represented as an empty live community', async ({ page, context }) => {
    await fixture(context, { readError: true }); await page.goto('/sketchbook/');
    await expect(page.locator('#connection')).toHaveText('Shared album unavailable');
    await expect(page.locator('#sticker-board')).toContainText('unavailable');
    await expect(page.locator('#publish')).toBeDisabled();
    await expect(page.locator('#sticker-preview svg')).toHaveCount(1);
});

for (const code of ['SKETCHBOOK_COOLDOWN', 'SKETCHBOOK_DAILY_LIMIT', 'SKETCHBOOK_BUSY', 'SKETCHBOOK_INVALID']) {
    test(`server posting refusal ${code} never creates a local pretend contribution`, async ({ page, context }) => {
        const state = await fixture(context, { placeError: code }); await page.goto('/sketchbook/');
        await page.locator('#publish').click();
        await expect(page.locator('#publish-status')).not.toHaveText('One sticker, a spot picked for you. Everyone can see it.');
        await expect(page.locator('#sticker-board svg')).toHaveCount(0);
        expect(state.placements).toHaveLength(1);
    });
}

test('paused album is still readable, and page pictures export as PNG', async ({ page, context }, testInfo) => {
    await fixture(context, { album: { ...baseAlbum(), total: 1, open: false, stickers: [{ id: ID, slot: 3, sticker: 'daisy', ink: 'fern' }] } });
    await page.goto('/sketchbook/'); await expect(page.locator('#publish')).toBeDisabled();
    await expect(page.locator('#sticker-board svg')).toHaveCount(1);
    const downloadEvent = page.waitForEvent('download'); await page.locator('#download').click();
    const download = await downloadEvent; expect(download.suggestedFilename()).toBe('sticker-sketchbook-page-1.png');
    const file = testInfo.outputPath('page.png'); await download.saveAs(file);
    expect(fs.readFileSync(file).subarray(1, 4).toString()).toBe('PNG');
});

test('the sketchbook is discoverable under Make and the homepage, not categorized as a game', async ({ page }) => {
    await page.goto('/projects/?kind=make');
    await expect(page.getByRole('link', { name: 'Open Sticker Sketchbook', exact: true }).last()).toBeVisible();
    await expect(page.locator('[data-project-filter-status]')).toHaveText('4 make projects ready.');
    await page.goto('/'); await expect(page.getByRole('link', { name: 'Sketchbook preview' })).toHaveAttribute('href', 'sketchbook/');
    await page.goto('/games/'); await expect(page.locator('a[href*="sketchbook"]')).toHaveCount(0);
});

test('curated album has no overflow at small and large widths and no unexpected script errors', async ({ browser }, testInfo) => {
    for (const width of [320, 390, 768, 1440]) {
        const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
        const stickers = ['sprout', 'daisy', 'mushroom', 'moth', 'snail', 'teacup', 'cloud', 'sun', 'planet', 'house', 'bird', 'cat'].map((sticker, slot) => ({ id: ID, sticker, slot, ink: ['fern', 'sea', 'ochre', 'rose', 'ink'][slot % 5] }));
        await fixture(context, { album: { ...baseAlbum(), total: 12, stickers } });
        const page = await context.newPage(), errors = [];
        page.on('pageerror', error => errors.push(String(error)));
        await page.goto('/sketchbook/'); await expect(page.locator('#sticker-board svg')).toHaveCount(12);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
        expect(errors).toEqual([]);
        await page.screenshot({ path: testInfo.outputPath(`album-${width}.png`), fullPage: true });
        await context.close();
    }
});

test('migration denies raw access and accepts no placement, text or upload arguments', () => {
    const source = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20261003000000_sticker_sketchbook.sql'), 'utf8');
    expect(source).toContain('revoke all on schema sketchbook_private from public, anon, authenticated');
    expect(source).toContain('revoke all on all tables in schema sketchbook_private from public, anon, authenticated');
    expect((source.match(/enable row level security/g) || []).length).toBe(3);
    expect((source.match(/security definer set search_path = ''/g) || []).length).toBe(4);
    expect(source).toContain('unique(guest_hash, request_id)');
    expect(source).toContain('v_guest.day_count >= 3');
    expect(source).toContain("interval '60 seconds'");
    expect(source).toContain('v_count >= 300');
    expect(source).toContain('v_position >= 6000');
    expect(source).not.toMatch(/p_(?:text|html|svg|upload|x|y|rotation|scale)\b/);
    const catalog = fs.readFileSync(path.join(__dirname, '../sketchbook/stickers.js'), 'utf8');
    const ids = [...catalog.matchAll(/\{ id: '([^']+)'/g)].map(match => match[1]);
    const stickerCheck = source.match(/check\(sticker in \(([^)]+)\)\)/)[1].match(/'([^']+)'/g).map(id => id.slice(1, -1));
    const inkCheck = source.match(/check\(ink in \(([^)]+)\)\)/)[1].match(/'([^']+)'/g).map(id => id.slice(1, -1));
    expect(ids).toEqual([...stickerCheck, ...inkCheck]);
});
