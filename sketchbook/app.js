import { STICKERS, INKS, PAGE_SIZE, isSticker, isInk, stickerSvg, sanitizeAlbum } from './stickers.js';
import { getAlbum, leaveSticker, getLast, undoSticker } from './backend.js';

const $ = id => document.getElementById(id);
const DRAFT_KEY = 'ethan-sketchbook-draft-v1';
let draft;
try { draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); } catch { /* A fresh selection is fine. */ }
let selected = isSticker(draft?.sticker) ? draft.sticker : 'sprout';
let ink = isInk(draft?.ink) ? draft.ink : 'fern';
let pending = /^[\da-f-]{36}$/i.test(draft?.request || '') ? draft.request : null;
let album = null, loading = false, submitting = false, connected = false;
let last = getLast(), highlighted = null, messageTimer;
const hashPage = () => {
    const match = location.hash.match(/^#page=(\d{1,3})$/);
    return match && Number(match[1]) >= 1 && Number(match[1]) <= 500 ? Number(match[1]) - 1 : -1;
};
function persistDraft() {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify({ sticker: selected, ink, request: pending })); } catch { /* Private mode: use the current selection. */ }
}
function flash(message) {
    clearTimeout(messageTimer); $('album-message').hidden = false; $('album-message').textContent = message;
    messageTimer = setTimeout(() => { $('album-message').hidden = true; }, 7000);
}
function preview() {
    $('sticker-preview').innerHTML = stickerSvg(selected, ink, true);
    $('sticker-name').textContent = STICKERS.find(item => item.id === selected).name;
    $('ink-name').textContent = INKS.find(item => item.id === ink).name;
    document.querySelectorAll('[data-sticker]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sticker === selected)));
    document.querySelectorAll('[data-ink]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ink === ink)));
}
for (const sticker of STICKERS) {
    const button = document.createElement('button');
    button.dataset.sticker = sticker.id; button.title = sticker.name; button.setAttribute('aria-label', sticker.name);
    button.innerHTML = stickerSvg(sticker.id, INKS[STICKERS.indexOf(sticker) % INKS.length].id);
    button.addEventListener('click', () => {
        if (submitting) return;
        selected = sticker.id; pending = null; persistDraft(); preview();
    });
    $('sticker-picker').append(button);
}
for (const color of INKS) {
    const button = document.createElement('button');
    button.dataset.ink = color.id; button.title = color.name; button.setAttribute('aria-label', color.name);
    button.style.setProperty('--swatch', color.color);
    button.addEventListener('click', () => {
        if (submitting) return;
        ink = color.id; pending = null; persistDraft(); preview();
    });
    $('ink-picker').append(button);
}
preview();
function renderBoard() {
    const board = $('sticker-board'); board.replaceChildren();
    const stickers = album?.stickers || [];
    for (let slot = 0; slot < PAGE_SIZE; slot++) {
        const item = stickers.find(sticker => sticker.slot === slot);
        const cell = document.createElement('div'); cell.className = 'sticker-cell';
        if (item) {
            cell.dataset.stickerId = item.id;
            cell.style.setProperty('--tilt', `${((slot * 7 + (album.page || 0) * 3) % 13) - 6}deg`);
            cell.innerHTML = stickerSvg(item.sticker, item.ink, true);
            const description = `${STICKERS.find(sticker => sticker.id === item.sticker).name}, ${INKS.find(color => color.id === item.ink).name}`;
            cell.title = description;
            if (item.id === last?.id) { cell.classList.add('is-mine'); cell.title += ' · your last sticker'; }
            if (item.id === highlighted) cell.classList.add('is-new');
        } else { cell.classList.add('empty'); cell.setAttribute('aria-hidden', 'true'); }
        board.append(cell);
    }
    if (!album || !stickers.length) {
        const caption = document.createElement('p'); caption.className = 'empty-caption';
        if (!album) caption.append(document.createTextNode(loading ? 'Opening the shared pages…' : 'The shared page is unavailable.'));
        else caption.append(document.createTextNode(album.total === 0 ? 'First page. Fresh paper.' : 'A little breathing room.'));
        const hint = document.createElement('small');
        hint.textContent = !album ? 'Your private sticker preview is ready in the tray.' : album.total === 0 ? 'Leave the first little thing.' : 'Removed stickers leave their spaces blank.';
        caption.append(hint); board.append(caption);
    }
    $('page-number').textContent = String((album?.page || 0) + 1).padStart(2, '0');
    $('page-counter').textContent = album ? `Page ${album.page + 1} of ${album.pages}` : 'Shared album';
    $('total-count').textContent = album ? `${album.total} sticker${album.total === 1 ? '' : 's'} left by visitors` : 'Not connected';
    $('page-caption').textContent = album ? `${stickers.length} little thing${stickers.length === 1 ? '' : 's'} on this page` : 'A page made by visitors';
    $('previous').disabled = loading || !album || album.page === 0;
    $('next').disabled = loading || !album || album.page >= album.pages - 1;
    $('latest').disabled = loading || !album || album.page === album.pages - 1;
    $('download').disabled = !album;
    $('share').disabled = !album;
    highlighted = null;
}
function updatePublish() {
    const wait = last?.nextAt ? Math.max(0, Math.ceil((Date.parse(last.nextAt) - Date.now()) / 1000)) : 0;
    $('publish').disabled = submitting || loading || !connected || !album?.open || wait > 0;
    $('publish').textContent = submitting ? 'Leaving your sticker…' : wait > 0 ? wait > 60 ? 'More stickers tomorrow' : `Ink drying · ${wait}s` : 'Leave a sticker ↗';
    $('undo').hidden = !last?.id;
    $('undo').disabled = submitting || !connected;
    document.querySelectorAll('[data-sticker],[data-ink]').forEach(button => { button.disabled = submitting; });
}
async function loadPage(page = album?.page ?? hashPage(), { quiet = false } = {}) {
    if (loading) return false;
    loading = true; $('refresh').disabled = true; updatePublish();
    for (const id of ['previous', 'next', 'latest']) $(id).disabled = true;
    if (!album) renderBoard();
    try {
        const data = sanitizeAlbum(await getAlbum(page));
        album = data; connected = true;
        $('connection').textContent = data.open ? 'Shared album · connected' : 'Shared album · posting paused';
        $('connection').classList.add('live');
        if (!submitting) $('publish-status').textContent = data.open ? 'One sticker, a spot picked for you. Everyone can see it.' : 'New stickers are paused. The album is still open to browse.';
        if (page >= 0 && data.page !== page) flash('That page is not in the album yet. Here is the latest page.');
        return true;
    } catch (error) {
        connected = false; $('connection').textContent = album ? 'Connection lost · showing last loaded page' : 'Shared album unavailable';
        $('connection').classList.remove('live');
        $('publish-status').textContent = error.message;
        if (!quiet) flash(error.message);
        return false;
    } finally {
        loading = false; $('refresh').disabled = false; renderBoard(); updatePublish();
    }
}
function pageHash(page) { history.replaceState(null, '', `#page=${page + 1}`); }
$('previous').addEventListener('click', async () => { if (await loadPage(album.page - 1)) pageHash(album.page); });
$('next').addEventListener('click', async () => { if (await loadPage(album.page + 1)) pageHash(album.page); });
$('latest').addEventListener('click', async () => { if (await loadPage(-1)) pageHash(album.page); });
$('refresh').addEventListener('click', () => loadPage());
window.addEventListener('hashchange', () => loadPage(hashPage()));
$('publish').addEventListener('click', async () => {
    if (submitting || $('publish').disabled) return;
    submitting = true; pending ||= crypto.randomUUID(); persistDraft(); updatePublish();
    try {
        const result = await leaveSticker(selected, ink, pending);
        if (!/^[\da-f-]{36}$/i.test(result?.id || '') || !Number.isInteger(result.page) || result.page < 0 || result.page > 499) throw new Error('Your sticker was sent, but its page could not be read. Refresh before trying again.');
        last = getLast(); highlighted = result.id; pending = null; persistDraft();
        await loadPage(result.page); pageHash(result.page);
        $('publish-status').textContent = connected ? 'Your sticker is in the shared sketchbook. Thanks for stopping by.' : 'Your sticker was saved. Refresh to see it when the connection returns.';
        flash('A little mark, left for everyone.');
    } catch (error) {
        $('publish-status').textContent = error.message;
        if (error.code === 'guest') { pending = null; persistDraft(); }
    } finally { submitting = false; updatePublish(); }
});
$('undo').addEventListener('click', async () => {
    if (!last?.id || submitting) return;
    submitting = true; updatePublish();
    try {
        await undoSticker(last.id);
        // Preserve the already-used posting allowance, even after removing a sticker.
        last = { ...last, id: null };
        await loadPage(); $('publish-status').textContent = 'Your sticker was removed. The posting limit is unchanged.';
    } catch (error) { $('publish-status').textContent = error.message; }
    finally { submitting = false; updatePublish(); }
});
$('share').addEventListener('click', async () => {
    const url = new URL(location.href); url.hash = `page=${album.page + 1}`;
    try { await navigator.clipboard.writeText(url.href); flash('Page link copied.'); }
    catch { pageHash(album.page); flash('Copy the page link from your address bar.'); }
});
$('download').addEventListener('click', async () => {
    if (!album) return;
    $('download').disabled = true;
    const snapshot = album;
    const drawings = snapshot.stickers.map(item => {
        const svg = stickerSvg(item.sticker, item.ink).replace(/<svg[^>]*>/, '').replace('</svg>', '');
        const x = 63 + (item.slot % 4) * 170, y = 112 + Math.floor(item.slot / 4) * 160;
        return `<g transform="translate(${x} ${y}) scale(1.05)">${svg}</g>`;
    }).join('');
    const source = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="700" viewBox="0 0 800 700"><rect width="800" height="700" fill="#3e6056" rx="15"/><rect x="28" y="23" width="749" height="653" rx="5" fill="#fff9eb"/><path d="M48 23v653" stroke="#c99b8255"/><text x="73" y="73" font-family="Georgia,serif" font-style="italic" font-size="24" fill="#76816a">Little things, together.</text><text x="710" y="73" font-family="Arial,sans-serif" font-size="13" fill="#76816a">${snapshot.page + 1}</text>${drawings}<text x="73" y="635" font-family="Arial,sans-serif" font-size="12" fill="#76816a">Sticker Sketchbook · a page made by visitors</text></svg>`;
    const sourceUrl = URL.createObjectURL(new Blob([source], { type: 'image/svg+xml' }));
    try {
        const image = new Image(); image.src = sourceUrl; await image.decode();
        const canvas = document.createElement('canvas'); canvas.width = 1600; canvas.height = 1400;
        canvas.getContext('2d').drawImage(image, 0, 0, 1600, 1400);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (!blob) throw new Error('Picture could not be saved.');
        const url = URL.createObjectURL(blob), link = document.createElement('a');
        link.href = url; link.download = `sticker-sketchbook-page-${snapshot.page + 1}.png`;
        document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
        flash('Your page picture is ready.');
    } catch { flash('The picture could not be saved. Please try again.'); }
    finally { URL.revokeObjectURL(sourceUrl); $('download').disabled = !album; }
});
setInterval(() => { if (!document.hidden) updatePublish(); }, 1000);
setInterval(() => {
    if (!document.hidden && navigator.onLine && connected && !submitting && !loading) loadPage(album.page, { quiet: true });
}, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updatePublish(); });
window.addEventListener('online', () => { if (!connected) loadPage(); });
await loadPage(hashPage());
