const config = window.TIER_LAB_SUPABASE_CONFIG || {};
const base = (config.url || '').replace(/\/$/, '');
const key = config.publishableKey || '';
const GUEST_KEY = 'ethan-sketchbook-guest-v1';
const LAST_KEY = 'ethan-sketchbook-last-v1';
let guest = read(GUEST_KEY);
let guestRequest = null;
function read(keyName) { try { return JSON.parse(localStorage.getItem(keyName) || 'null'); } catch { return null; } }
function save(keyName, value) { try { if (value) localStorage.setItem(keyName, JSON.stringify(value)); else localStorage.removeItem(keyName); } catch { /* Session still works in memory. */ } }
export class SketchbookError extends Error {
    constructor(message, code = 'network') { super(message); this.code = code; }
}
async function rpc(name, args) {
    if (!base || !key) throw new SketchbookError('The shared sketchbook is not connected yet.', 'setup');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
        const endpoint = new URL(`/rest/v1/rpc/${name}`, `${base}/`).href;
        const response = await fetch(endpoint, {
            method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json' },
            body: JSON.stringify(args), signal: controller.signal
        });
        const data = await response.json().catch(() => null);
        if (!response.ok) {
            const raw = typeof data?.message === 'string' ? data.message : '';
            const known = {
                SKETCHBOOK_COOLDOWN: ['Give the ink a minute to dry, then add another.', 'cooldown'],
                SKETCHBOOK_DAILY_LIMIT: ['Your three stickers for today are on the page. Come back tomorrow.', 'daily'],
                SKETCHBOOK_BUSY: ['The sketchbook is taking a breather. Try again later.', 'busy'],
                SKETCHBOOK_PAUSED: ['New stickers are paused. You can still flip through the album.', 'paused'],
                SKETCHBOOK_FULL: ['This album is full. You can still explore every page.', 'full'],
                SKETCHBOOK_GUEST: ['Your guest pass expired. Try again for a fresh one.', 'guest'],
                SKETCHBOOK_INVALID: ['Choose a sticker and an ink from the tray.', 'invalid']
            };
            const reason = Object.keys(known).find(code => raw.includes(code));
            if (reason) throw new SketchbookError(...known[reason]);
            if (response.status === 404 || data?.code === 'PGRST202') throw new SketchbookError('The shared sketchbook is not connected yet. Your selection stays here.', 'setup');
            throw new SketchbookError('The shared page could not be reached. Your selection is safe—try again.', 'network');
        }
        if (data === null) throw new SketchbookError('The shared page returned an unreadable response.', 'network');
        return data;
    } catch (error) {
        if (error instanceof SketchbookError) throw error;
        throw new SketchbookError('The shared page could not be reached. Your selection is safe—try again.', 'network');
    } finally { clearTimeout(timeout); }
}
export const getAlbum = page => rpc('sketchbook_read', { p_page: page });
async function getGuest() {
    if (guest?.token && /^[\da-f]{64}$/i.test(guest.token)) return guest;
    if (!guestRequest) guestRequest = rpc('sketchbook_guest', {}).then(data => {
        if (!/^[\da-f]{64}$/i.test(data?.token || '')) throw new SketchbookError('Your guest pass could not be created.', 'network');
        guest = data; save(GUEST_KEY, guest); return guest;
    }).finally(() => { guestRequest = null; });
    return guestRequest;
}
export async function leaveSticker(sticker, ink, requestId) {
    const pass = await getGuest();
    try {
        const result = await rpc('sketchbook_place', { p_token: pass.token, p_sticker: sticker, p_ink: ink, p_request: requestId });
        const last = { id: result.id, page: result.page, nextAt: result.next_at, remaining: result.remaining };
        save(LAST_KEY, last); return result;
    } catch (error) {
        if (error.code === 'guest') { guest = null; save(GUEST_KEY, null); }
        throw error;
    }
}
export function getLast() { return read(LAST_KEY); }
export async function undoSticker(id) {
    if (!guest?.token) throw new SketchbookError('This browser no longer has the guest pass for that sticker.', 'guest');
    await rpc('sketchbook_undo', { p_token: guest.token, p_id: id });
    const last = read(LAST_KEY);
    save(LAST_KEY, last ? { ...last, id: null } : null);
}
