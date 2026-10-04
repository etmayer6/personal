// These are the only shapes and inks that can appear in the public sketchbook.
// Keep this catalog in sync with the database migration's allowlists.
export const STICKERS = Object.freeze([
    { id: 'sprout', name: 'Little sprout', art: '<path d="M57 91V49M57 65C26 67 22 43 25 32c22-3 37 11 32 33ZM57 54C54 30 72 20 88 23c2 17-9 31-31 31Z"/><path d="M33 95h46" fill="none"/>' },
    { id: 'daisy', name: 'Daydream daisy', art: '<path d="M57 89V56M56 81c-14 1-21-6-24-14 12-3 23 2 24 14"/><path d="M45 34C22 11 15 44 37 48 10 57 35 78 47 58 46 85 76 76 65 56 89 70 101 39 75 40 95 21 63 9 59 32 54 11 31 18 45 34Z"/><circle cx="56" cy="46" r="12" fill="#f0cc76"/>' },
    { id: 'mushroom', name: 'Forest umbrella', art: '<path d="M43 58 38 90q18 12 37 0l-6-32" fill="#fff6df"/><path d="M15 58C20 8 85 7 96 58q-39 12-81 0Z"/><circle cx="36" cy="43" r="6" fill="#fff6df"/><circle cx="66" cy="29" r="5" fill="#fff6df"/><circle cx="79" cy="47" r="4" fill="#fff6df"/>' },
    { id: 'moth', name: 'Midnight moth', art: '<path d="M52 46C23 8 4 38 22 66 3 86 36 105 52 62M62 46C91 8 110 38 92 66c19 20-14 39-30-4"/><path d="M53 40q-4 22 4 40 8-18 4-40ZM53 40 44 28m17 12 9-12" fill="#fff6df"/><circle cx="32" cy="48" r="7" fill="#fff6df"/><circle cx="82" cy="48" r="7" fill="#fff6df"/>' },
    { id: 'snail', name: 'Slow mail', art: '<path d="M18 83q15-18 45-7l10-25q14-9 20 5l-1 24q-3 13-21 14H24Z" fill="#fff6df"/><path d="M77 52 73 40m17 11 6-14" fill="none"/><circle cx="40" cy="60" r="27"/><path d="M49 73C29 79 20 54 38 45c15-7 27 14 12 20-7 3-13-6-7-10" fill="none"/><circle cx="80" cy="59" r="1.5" fill="#294541" stroke="none"/>' },
    { id: 'teacup', name: 'A tiny tea break', art: '<path d="M76 47c29-10 31 25 1 26" fill="none" stroke-width="7"/><path d="M20 43h60l-4 33q-5 17-24 17T25 76Z"/><path d="M16 97h71M36 29q-12-10 0-20m20 20q-12-10 0-20" fill="none"/><path d="M32 51h35" fill="none" stroke="#fff6df" stroke-width="5"/>' },
    { id: 'cloud', name: 'Passing cloud', art: '<path d="M25 74C3 75 7 42 27 45c-1-29 37-36 48-12 23-10 39 18 24 30 8 16-11 24-29 15Z"/><path d="m31 89-4 7m24-7-4 7m24-7-4 7" fill="none"/><path d="M36 62q7 9 14 0m12 0q7 9 14 0" fill="none"/>' },
    { id: 'sun', name: 'Pocket sunshine', art: '<circle cx="56" cy="55" r="27"/><path d="M56 13V5m0 100v-8M14 55H6m100 0h-8M26 25l-6-6m72 72-6-6M26 85l-6 6m72-72-6 6" fill="none"/><path d="M43 57q12 13 26 0" fill="none"/><circle cx="44" cy="45" r="2" fill="#294541" stroke="none"/><circle cx="68" cy="45" r="2" fill="#294541" stroke="none"/>' },
    { id: 'planet', name: 'Small orbit', art: '<circle cx="56" cy="55" r="29"/><path d="M27 51C-8 80 12 98 61 75c53-25 60-52 24-45M28 65q28-4 57-26" fill="none"/><path d="m29 19 2-9m-6 5 9-1m55 75 2-9m-6 5 9-1" fill="none"/>' },
    { id: 'house', name: 'Somewhere cozy', art: '<path d="M22 50h66v45H22Z" fill="#fff6df"/><path d="m12 51 43-37 45 37Z"/><path d="M49 95V67h17v28M32 61h10v12H32Zm40 0h10v12H72Z"/><path d="M77 27V12h12v26" fill="none"/>' },
    { id: 'bird', name: 'Morning visitor', art: '<path d="M21 76C6 38 43 34 59 56 74 22 106 44 90 69L75 94H38Z"/><path d="m92 54 14 4-15 8M45 56C30 69 53 87 66 67M34 95l-6 9m43-9 6 9" fill="none"/><circle cx="83" cy="50" r="2" fill="#294541" stroke="none"/>' },
    { id: 'cat', name: 'Window cat', art: '<path d="M24 44 22 18 44 32q12-7 24 0l22-14-2 26q17 37-30 41C10 84 11 61 24 44Z"/><path d="M31 89h50M23 91q-24-8-13-23M42 58q5-6 10 0m13 0q5-6 10 0m-18 8 5 4 5-4m-5 4v6" fill="none"/><path d="m30 65-17-3m17 11-16 3m70-11 17-3M84 73l16 3" fill="none"/>' }
]);
export const INKS = Object.freeze([
    { id: 'fern', name: 'Fern', color: '#87a482', wash: '#e1e8d7' },
    { id: 'sea', name: 'Sea glass', color: '#81acb2', wash: '#dcebee' },
    { id: 'ochre', name: 'Honey', color: '#dfb36c', wash: '#f2e5c5' },
    { id: 'rose', name: 'Wild rose', color: '#c88d83', wash: '#f0ded8' },
    { id: 'ink', name: 'Blue hour', color: '#8896b4', wash: '#e1e4ef' }
]);
export const PAGE_SIZE = 12;
export function isSticker(id) { return STICKERS.some(sticker => sticker.id === id); }
export function isInk(id) { return INKS.some(ink => ink.id === id); }
export function stickerSvg(id, inkId = 'fern', label = false) {
    const sticker = STICKERS.find(item => item.id === id);
    const ink = INKS.find(item => item.id === inkId);
    if (!sticker || !ink) return '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" ${label ? `role="img" aria-label="${sticker.name}"` : 'aria-hidden="true"'}><g fill="${ink.color}" stroke="#294541" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">${sticker.art}</g></svg>`;
}
// Never trust an API payload for markup, colors, slot positions, or totals.
export function sanitizeAlbum(value) {
    if (!value || typeof value !== 'object') throw new Error('The sketchbook returned an unreadable page.');
    const page = Number(value.page), pages = Number(value.pages), total = Number(value.total);
    if (!Number.isInteger(page) || page < 0 || page > 499 || !Number.isInteger(pages) || pages < 1 || pages > 500 || page >= pages || !Number.isInteger(total) || total < 0 || total > 6000) {
        throw new Error('The sketchbook returned an unreadable page.');
    }
    const slots = new Set();
    const stickers = (Array.isArray(value.stickers) ? value.stickers : []).slice(0, PAGE_SIZE).filter(item => {
        if (!item || !isSticker(item.sticker) || !isInk(item.ink) || !/^[\da-f-]{36}$/i.test(item.id || '') || !Number.isInteger(item.slot) || item.slot < 0 || item.slot >= PAGE_SIZE || slots.has(item.slot)) return false;
        slots.add(item.slot); return true;
    }).map(item => ({ id: item.id, slot: item.slot, sticker: item.sticker, ink: item.ink }));
    return { page, pages, total, open: value.open === true, stickers };
}
