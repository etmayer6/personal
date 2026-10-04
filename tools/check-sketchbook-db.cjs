// Optional local PostgreSQL verification. The runtime lives outside the site.
// Usage: node tools/check-sketchbook-db.cjs <path-to-@electric-sql/pglite>
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { randomUUID } = require('node:crypto');
const runtime = process.argv[2];
if (!runtime) throw new Error('Pass the installed @electric-sql/pglite runtime path.');
const { PGlite } = require(path.resolve(runtime));

async function main() {
    const db = new PGlite();
    const sql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20261003000000_sticker_sketchbook.sql'), 'utf8');
    let checks = 0;
    const query = (text, args) => db.query(text, args);
    const rpc = async (name, args = [], types = []) => (await query(`select public.${name}(${args.map((_, index) => `$${index + 1}${types[index] ? `::${types[index]}` : ''}`).join(',')}) as result`, args)).rows[0].result;
    async function refuses(action, text) { await assert.rejects(action, error => error.message.includes(text)); checks++; }
    async function owner(action) {
        await db.exec('reset role');
        try { return await action(); } finally { await db.exec('set role anon'); }
    }
    try {
        await db.exec('create role anon; create role authenticated;');
        await db.exec(sql); await db.exec(sql); checks++;
        await db.exec('set role anon');
        assert.deepEqual(await rpc('sketchbook_read', [-1], ['integer']), { page: 0, pages: 1, total: 0, open: true, stickers: [] }); checks++;
        await refuses(() => query('select * from sketchbook_private.guests'), 'permission denied');
        await refuses(() => query("insert into sketchbook_private.stickers(sticker, ink, position) values('cat','fern',0)"), 'permission denied');
        const a = await rpc('sketchbook_guest');
        assert.match(a.token, /^[0-9a-f]{64}$/); checks++;
        await refuses(() => rpc('sketchbook_place', ['0'.repeat(64), 'sprout', 'fern', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_GUEST');
        await refuses(() => rpc('sketchbook_place', [a.token, '<script>bad</script>', 'fern', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_INVALID');
        await refuses(() => rpc('sketchbook_place', [a.token, 'cat', '#000000', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_INVALID');
        await refuses(() => rpc('sketchbook_place', [a.token, null, 'fern', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_INVALID');
        const request = randomUUID();
        const first = await rpc('sketchbook_place', [a.token, 'sprout', 'fern', request], ['text','text','text','uuid']);
        assert.equal(first.remaining, 2); assert.equal(first.page, 0); checks++;
        assert.deepEqual(await rpc('sketchbook_place', [a.token, 'sprout', 'fern', request], ['text','text','text','uuid']), first); checks++;
        await refuses(() => rpc('sketchbook_place', [a.token, 'cat', 'rose', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_COOLDOWN');
        const read = await rpc('sketchbook_read', [0], ['integer']);
        assert.equal(read.total, 1); assert.equal(read.stickers[0].id, first.id);
        assert.deepEqual(Object.keys(read.stickers[0]).sort(), ['id', 'ink', 'slot', 'sticker']); checks++;
        const b = await rpc('sketchbook_guest');
        await refuses(() => rpc('sketchbook_undo', [b.token, first.id], ['text','uuid']), 'SKETCHBOOK_GUEST');
        assert.equal(await rpc('sketchbook_undo', [a.token, first.id], ['text','uuid']), true);
        assert.equal((await rpc('sketchbook_read', [0], ['integer'])).total, 0); checks++;
        await refuses(() => rpc('sketchbook_place', [a.token, 'cat', 'rose', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_COOLDOWN');
        for (let i = 0; i < 2; i++) {
            await owner(() => query("update sketchbook_private.guests set last_post_at = now() - interval '2 minutes'"));
            const next = await rpc('sketchbook_place', [a.token, 'cat', 'rose', randomUUID()], ['text','text','text','uuid']);
            assert.equal(next.remaining, 1 - i); checks++;
        }
        await refuses(() => rpc('sketchbook_place', [a.token, 'cat', 'rose', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_DAILY_LIMIT');
        await owner(() => query("update sketchbook_private.guests set day = (now() at time zone 'utc')::date - 1, last_post_at = now() - interval '2 minutes'"));
        assert.equal((await rpc('sketchbook_place', [a.token, 'bird', 'sea', randomUUID()], ['text','text','text','uuid'])).remaining, 2); checks++;
        // Fill a page through public RPCs, then verify positions cannot collide.
        for (let i = 0; i < 9; i++) {
            const pass = await rpc('sketchbook_guest');
            await rpc('sketchbook_place', [pass.token, 'daisy', 'ochre', randomUUID()], ['text','text','text','uuid']);
        }
        const page0 = await rpc('sketchbook_read', [0], ['integer']);
        assert.equal(new Set(page0.stickers.map(item => item.slot)).size, page0.stickers.length);
        assert.equal((await rpc('sketchbook_read', [-1], ['integer'])).page, 1); checks++;
        await owner(() => query('update sketchbook_private.settings set accepting = false'));
        assert.equal((await rpc('sketchbook_read')).open, false); checks++;
        await refuses(() => rpc('sketchbook_guest'), 'SKETCHBOOK_PAUSED');
        await refuses(() => rpc('sketchbook_place', [b.token, 'daisy', 'ochre', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_PAUSED');
        await owner(() => query('update sketchbook_private.settings set accepting = true, next_position = 6000'));
        await refuses(() => rpc('sketchbook_guest'), 'SKETCHBOOK_FULL');
        await refuses(() => rpc('sketchbook_place', [b.token, 'daisy', 'ochre', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_FULL');
        await owner(async () => {
            await query('update sketchbook_private.settings set next_position = 13');
            await query("insert into sketchbook_private.stickers(guest_hash,request_id,position,sticker,ink) select (select token_hash from sketchbook_private.guests limit 1), gen_random_uuid(), n, 'cat', 'fern' from generate_series(13,300) n");
        });
        await refuses(() => rpc('sketchbook_place', [b.token, 'daisy', 'ochre', randomUUID()], ['text','text','text','uuid']), 'SKETCHBOOK_BUSY');
        await owner(() => query("insert into sketchbook_private.guests(token_hash) select 'test-' || n from generate_series(1,49) n"));
        await refuses(() => rpc('sketchbook_guest'), 'SKETCHBOOK_BUSY');
        await db.exec('reset role; set role authenticated;');
        assert.equal((await rpc('sketchbook_read')).pages, 2); checks++;
        await refuses(() => query('select * from sketchbook_private.stickers'), 'permission denied');
        console.log(`Sketchbook PostgreSQL checks passed: ${checks}. No live data touched.`);
    } finally { await db.close(); }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
