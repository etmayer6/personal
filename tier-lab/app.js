const STORAGE_KEY = "ethan-tier-lab-v1";
const SHARE_PREFIX = "#list=";
const TIER_COLORS = ["#ef7667", "#efbd4f", "#76c7ae", "#70a7bb", "#9a87b8", "#d28ba0", "#9baa78", "#d08b5b"];

const elements = {
    body: document.body,
    saveState: document.querySelector("#save-state"),
    status: document.querySelector("#tier-status"),
    titleInput: document.querySelector("#list-title"),
    subtitleInput: document.querySelector("#list-subtitle"),
    boardTitle: document.querySelector("#board-title"),
    boardSubtitle: document.querySelector("#board-subtitle"),
    itemCount: document.querySelector("#item-count"),
    poolCount: document.querySelector("#pool-count"),
    rows: document.querySelector("#tier-rows"),
    pool: document.querySelector("#tier-pool"),
    addForm: document.querySelector("#add-item-form"),
    itemLabel: document.querySelector("#item-label"),
    itemImage: document.querySelector("#item-image"),
    addTier: document.querySelector("#add-tier-button"),
    newButton: document.querySelector("#new-button"),
    shareButton: document.querySelector("#share-button"),
    exportButton: document.querySelector("#export-button"),
    importInput: document.querySelector("#import-input"),
    selectionTools: document.querySelector("#selection-tools"),
    selectedName: document.querySelector("#selected-name"),
    moveButtons: document.querySelector("#move-buttons"),
    deleteItem: document.querySelector("#delete-item-button"),
    remixLink: document.querySelector(".viewer-only")
};

const defaultState = () => ({
    version: 1,
    title: "Road Trip Snacks",
    subtitle: "A ranking made somewhere between the first gas stop and a deeply regrettable purchase.",
    tiers: [
        { id: "tier-s", label: "S", color: TIER_COLORS[0], items: ["fries", "pb-cups"] },
        { id: "tier-a", label: "A", color: TIER_COLORS[1], items: ["pretzel", "jerky"] },
        { id: "tier-b", label: "B", color: TIER_COLORS[2], items: ["gummies"] },
        { id: "tier-c", label: "C", color: TIER_COLORS[3], items: ["trail-mix"] },
        { id: "tier-d", label: "D", color: TIER_COLORS[4], items: ["egg"] }
    ],
    pool: ["sunflower", "banana"],
    items: {
        fries: { id: "fries", label: "🍟 Hot fries", image: "" },
        "pb-cups": { id: "pb-cups", label: "🥜 Peanut butter cups", image: "" },
        pretzel: { id: "pretzel", label: "🥨 Giant pretzel", image: "" },
        jerky: { id: "jerky", label: "🥩 Beef jerky", image: "" },
        gummies: { id: "gummies", label: "🐛 Gummy worms", image: "" },
        "trail-mix": { id: "trail-mix", label: "🥜 Trail mix", image: "" },
        egg: { id: "egg", label: "🥚 Gas-station egg", image: "" },
        sunflower: { id: "sunflower", label: "🌻 Sunflower seeds", image: "" },
        banana: { id: "banana", label: "🍌 Slightly bruised banana", image: "" }
    }
});

let state = defaultState();
let selectedId = null;
let draggedId = null;
let mode = "edit";

function uid(prefix) {
    if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function setStatus(message) {
    elements.status.textContent = message;
}

function normalizeText(value, fallback, maxLength) {
    return typeof value === "string" ? value.trim().slice(0, maxLength) || fallback : fallback;
}

function normalizeState(input) {
    if (!input || typeof input !== "object") throw new Error("That file does not contain a tier list.");

    const rawItems = input.items && typeof input.items === "object" ? input.items : {};
    const items = {};
    Object.values(rawItems).slice(0, 80).forEach((item) => {
        if (!item || typeof item !== "object") return;
        const id = normalizeText(item.id, uid("item"), 100);
        if (items[id]) return;
        const image = typeof item.image === "string" && /^(https?:\/\/|data:image\/)/i.test(item.image)
            ? item.image.slice(0, 12000)
            : "";
        items[id] = { id, label: normalizeText(item.label, "Untitled", 42), image };
    });

    const seen = new Set();
    const rawTiers = Array.isArray(input.tiers) ? input.tiers.slice(0, 8) : [];
    const tiers = rawTiers.map((tier, index) => {
        const tierItems = Array.isArray(tier?.items)
            ? tier.items.filter((id) => items[id] && !seen.has(id)).slice(0, 80)
            : [];
        tierItems.forEach((id) => seen.add(id));
        return {
            id: normalizeText(tier?.id, uid("tier"), 100),
            label: normalizeText(tier?.label, String.fromCharCode(83 + index), 16),
            color: /^#[0-9a-f]{6}$/i.test(tier?.color || "") ? tier.color : TIER_COLORS[index % TIER_COLORS.length],
            items: tierItems
        };
    });

    if (!tiers.length) {
        tiers.push(
            { id: uid("tier"), label: "S", color: TIER_COLORS[0], items: [] },
            { id: uid("tier"), label: "A", color: TIER_COLORS[1], items: [] },
            { id: uid("tier"), label: "B", color: TIER_COLORS[2], items: [] }
        );
    }

    const pool = Array.isArray(input.pool)
        ? input.pool.filter((id) => items[id] && !seen.has(id)).slice(0, 80)
        : [];
    pool.forEach((id) => seen.add(id));
    Object.keys(items).forEach((id) => {
        if (!seen.has(id)) pool.push(id);
    });

    return {
        version: 1,
        title: normalizeText(input.title, "Untitled Tier List", 70),
        subtitle: normalizeText(input.subtitle, "A completely objective ranking.", 120),
        tiers,
        pool,
        items
    };
}

function save() {
    if (mode === "view") return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        window.EthanSiteState?.saveTierDraft?.({
            title: state.title,
            itemCount: Object.keys(state.items).length
        });
        elements.saveState.textContent = "Saved locally";
    } catch {
        elements.saveState.textContent = "Save unavailable";
    }
}

function encodeState(value) {
    const bytes = new TextEncoder().encode(JSON.stringify(value));
    let binary = "";
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/g, "");
}

function decodeState(value) {
    const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
}

function publicUrl() {
    const url = new URL(window.location.href);
    url.search = "?view=1";
    url.hash = `list=${encodeState(state)}`;
    return url.toString();
}

async function copyText(value) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
    }
    const field = document.createElement("textarea");
    field.value = value;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    document.execCommand("copy");
    field.remove();
}

function allPlacements() {
    return [...state.tiers.flatMap((tier) => tier.items), ...state.pool];
}

function removeFromPlacements(itemId) {
    state.tiers.forEach((tier) => {
        tier.items = tier.items.filter((id) => id !== itemId);
    });
    state.pool = state.pool.filter((id) => id !== itemId);
}

function moveItem(itemId, target) {
    if (!state.items[itemId]) return;
    removeFromPlacements(itemId);
    if (target === "pool") {
        state.pool.push(itemId);
    } else {
        const tier = state.tiers.find((entry) => entry.id === target);
        (tier || { items: state.pool }).items.push(itemId);
    }
    selectedId = null;
    save();
    render();
}

function createItem(itemId) {
    const item = state.items[itemId];
    if (!item) return null;
    const card = document.createElement(mode === "view" ? "div" : "button");
    card.className = `tier-item${item.image ? " has-image" : ""}${selectedId === itemId ? " is-selected" : ""}`;
    card.dataset.itemId = itemId;
    card.title = mode === "view" ? item.label : `${item.label}. Drag or tap to move.`;
    if (mode !== "view") {
        card.type = "button";
        card.draggable = true;
        card.setAttribute("aria-pressed", selectedId === itemId ? "true" : "false");
    }
    if (item.image) {
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = "";
        image.loading = "lazy";
        image.draggable = false;
        image.addEventListener("error", () => {
            image.remove();
            card.classList.remove("has-image");
        });
        card.append(image);
    }
    const label = document.createElement("span");
    label.textContent = item.label;
    card.append(label);
    return card;
}

function renderItems(container, itemIds) {
    const fragment = document.createDocumentFragment();
    itemIds.forEach((id) => {
        const item = createItem(id);
        if (item) fragment.append(item);
    });
    container.replaceChildren(fragment);
}

function renderRows() {
    const fragment = document.createDocumentFragment();
    state.tiers.forEach((tier, index) => {
        const row = document.createElement("section");
        row.className = "tier-row";
        row.dataset.tierId = tier.id;
        row.style.setProperty("--row-color", tier.color);

        const labelWrap = document.createElement("div");
        labelWrap.className = "tier-row-label";

        const label = document.createElement("input");
        label.value = tier.label;
        label.maxLength = 16;
        label.readOnly = mode === "view";
        label.dataset.tierName = tier.id;
        label.setAttribute("aria-label", `Tier ${index + 1} name`);
        labelWrap.append(label);

        const actions = document.createElement("div");
        actions.className = "tier-row-actions editor-only";
        [
            { action: "up", symbol: "↑", description: "Move" },
            { action: "down", symbol: "↓", description: "Move" },
            { action: "remove", symbol: "×", description: "Remove" }
        ].forEach(({ action, symbol, description }) => {
            const button = document.createElement("button");
            button.type = "button";
            button.dataset.tierAction = action;
            button.dataset.tierId = tier.id;
            button.textContent = symbol;
            button.setAttribute("aria-label", `${description} ${tier.label} tier${action === "up" || action === "down" ? ` ${action}` : ""}`);
            actions.append(button);
        });
        labelWrap.append(actions);

        const items = document.createElement("div");
        items.className = "tier-items";
        items.dataset.dropzone = tier.id;
        renderItems(items, tier.items);

        row.append(labelWrap, items);
        fragment.append(row);
    });
    elements.rows.replaceChildren(fragment);
}

function renderSelection() {
    const item = selectedId ? state.items[selectedId] : null;
    elements.selectionTools.hidden = !item || mode === "view";
    if (!item || mode === "view") return;
    elements.selectedName.textContent = item.label;
    const fragment = document.createDocumentFragment();
    state.tiers.forEach((tier) => {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.moveTarget = tier.id;
        button.textContent = tier.label;
        button.title = `Move to ${tier.label}`;
        fragment.append(button);
    });
    const poolButton = document.createElement("button");
    poolButton.type = "button";
    poolButton.dataset.moveTarget = "pool";
    poolButton.textContent = "Unranked";
    fragment.append(poolButton);
    elements.moveButtons.replaceChildren(fragment);
}

function render() {
    elements.body.dataset.mode = mode;
    if (document.activeElement !== elements.titleInput) elements.titleInput.value = state.title;
    if (document.activeElement !== elements.subtitleInput) elements.subtitleInput.value = state.subtitle;
    elements.boardTitle.textContent = state.title;
    elements.boardSubtitle.textContent = state.subtitle;
    elements.itemCount.textContent = Object.keys(state.items).length;
    elements.poolCount.textContent = state.pool.length;
    renderRows();
    renderItems(elements.pool, state.pool);
    renderSelection();
    if (elements.remixLink && window.location.hash.startsWith(SHARE_PREFIX)) {
        elements.remixLink.href = `?edit=1${window.location.hash}`;
    }
}

function selectItem(itemId) {
    if (mode === "view") return;
    selectedId = selectedId === itemId ? null : itemId;
    render();
    setStatus(selectedId ? "Now choose a tier below the board—or drag the card there." : "Selection cleared.");
}

function handleTierAction(action, tierId) {
    const index = state.tiers.findIndex((tier) => tier.id === tierId);
    if (index < 0) return;
    if (action === "up" && index > 0) {
        [state.tiers[index - 1], state.tiers[index]] = [state.tiers[index], state.tiers[index - 1]];
    } else if (action === "down" && index < state.tiers.length - 1) {
        [state.tiers[index + 1], state.tiers[index]] = [state.tiers[index], state.tiers[index + 1]];
    } else if (action === "remove") {
        if (state.tiers.length === 1) {
            setStatus("Keep at least one tier on the board.");
            return;
        }
        state.pool.push(...state.tiers[index].items);
        state.tiers.splice(index, 1);
    } else {
        return;
    }
    save();
    render();
}

function loadInitialState() {
    const shared = window.location.hash.startsWith(SHARE_PREFIX)
        ? window.location.hash.slice(SHARE_PREFIX.length)
        : "";
    mode = new URLSearchParams(window.location.search).get("view") === "1" ? "view" : "edit";

    if (shared) {
        try {
            state = normalizeState(decodeState(shared));
            elements.saveState.textContent = mode === "view" ? "Public list" : "Ready to remix";
            return;
        } catch {
            setStatus("That shared link is damaged, so the local list was opened instead.");
        }
    }

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        state = stored ? normalizeState(JSON.parse(stored)) : defaultState();
    } catch {
        state = defaultState();
    }
}

elements.titleInput.addEventListener("input", () => {
    state.title = elements.titleInput.value.slice(0, 70) || "Untitled Tier List";
    elements.boardTitle.textContent = state.title;
    save();
});

elements.subtitleInput.addEventListener("input", () => {
    state.subtitle = elements.subtitleInput.value.slice(0, 120) || "A completely objective ranking.";
    elements.boardSubtitle.textContent = state.subtitle;
    save();
});

elements.addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const label = elements.itemLabel.value.trim();
    if (!label) return;
    const id = uid("item");
    state.items[id] = {
        id,
        label: label.slice(0, 42),
        image: elements.itemImage.value.trim().slice(0, 12000)
    };
    state.pool.push(id);
    elements.addForm.reset();
    save();
    render();
    elements.itemLabel.focus();
    setStatus(`${label} joined the unranked pile.`);
});

elements.addTier.addEventListener("click", () => {
    if (state.tiers.length >= 8) {
        setStatus("Eight tiers should be enough to start an argument.");
        return;
    }
    const index = state.tiers.length;
    state.tiers.push({ id: uid("tier"), label: "New", color: TIER_COLORS[index], items: [] });
    save();
    render();
    setStatus("New tier added. Rename it directly on the board.");
});

elements.rows.addEventListener("input", (event) => {
    const tierId = event.target.dataset.tierName;
    if (!tierId) return;
    const tier = state.tiers.find((entry) => entry.id === tierId);
    if (!tier) return;
    tier.label = event.target.value.slice(0, 16) || "?";
    save();
});

elements.rows.addEventListener("click", (event) => {
    const item = event.target.closest("[data-item-id]");
    if (item) {
        selectItem(item.dataset.itemId);
        return;
    }
    const action = event.target.closest("[data-tier-action]");
    if (action) handleTierAction(action.dataset.tierAction, action.dataset.tierId);
});

elements.pool.addEventListener("click", (event) => {
    const item = event.target.closest("[data-item-id]");
    if (item) selectItem(item.dataset.itemId);
});

document.querySelector(".tier-board").addEventListener("dragstart", (event) => {
    const item = event.target.closest("[data-item-id]");
    if (!item || mode === "view") return;
    draggedId = item.dataset.itemId;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedId);
});

document.querySelector(".tier-board").addEventListener("dragover", (event) => {
    const zone = event.target.closest("[data-dropzone]");
    if (!zone || !draggedId) return;
    event.preventDefault();
    document.querySelectorAll(".is-drop-target").forEach((node) => node.classList.remove("is-drop-target"));
    zone.classList.add("is-drop-target");
});

document.querySelector(".tier-board").addEventListener("drop", (event) => {
    const zone = event.target.closest("[data-dropzone]");
    if (!zone || !draggedId) return;
    event.preventDefault();
    const itemId = draggedId;
    draggedId = null;
    document.querySelectorAll(".is-drop-target").forEach((node) => node.classList.remove("is-drop-target"));
    moveItem(itemId, zone.dataset.dropzone);
    setStatus("Ranking updated and saved.");
});

document.querySelector(".tier-board").addEventListener("dragend", () => {
    draggedId = null;
    document.querySelectorAll(".is-drop-target").forEach((node) => node.classList.remove("is-drop-target"));
});

elements.moveButtons.addEventListener("click", (event) => {
    const button = event.target.closest("[data-move-target]");
    if (!button || !selectedId) return;
    moveItem(selectedId, button.dataset.moveTarget);
    setStatus("Ranking updated and saved.");
});

elements.deleteItem.addEventListener("click", () => {
    if (!selectedId || !state.items[selectedId]) return;
    const label = state.items[selectedId].label;
    removeFromPlacements(selectedId);
    delete state.items[selectedId];
    selectedId = null;
    save();
    render();
    setStatus(`${label} was removed from the list.`);
});

elements.shareButton.addEventListener("click", async () => {
    try {
        const url = publicUrl();
        if (url.length > 16000) throw new Error("too-long");
        await copyText(url);
        setStatus("Public link copied. Anyone with it can view this exact ranking.");
    } catch (error) {
        setStatus(error.message === "too-long"
            ? "This list is too large for a link. Export the JSON instead."
            : "The browser blocked copying. Export the JSON instead.");
    }
});

elements.exportButton.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${state.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "tier-list"}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    setStatus("Tier list exported as JSON.");
});

elements.importInput.addEventListener("change", async () => {
    const [file] = elements.importInput.files;
    if (!file) return;
    try {
        state = normalizeState(JSON.parse(await file.text()));
        mode = "edit";
        selectedId = null;
        save();
        render();
        setStatus(`${state.title} imported and ready to edit.`);
    } catch (error) {
        setStatus(error.message || "That JSON file could not be imported.");
    } finally {
        elements.importInput.value = "";
    }
});

elements.newButton.addEventListener("click", () => {
    if (!window.confirm("Start a fresh tier list? Export first if you want to keep this version.")) return;
    state = normalizeState({
        title: "Untitled Tier List",
        subtitle: "A completely objective ranking.",
        tiers: [
            { id: uid("tier"), label: "S", color: TIER_COLORS[0], items: [] },
            { id: uid("tier"), label: "A", color: TIER_COLORS[1], items: [] },
            { id: uid("tier"), label: "B", color: TIER_COLORS[2], items: [] },
            { id: uid("tier"), label: "C", color: TIER_COLORS[3], items: [] }
        ],
        pool: [],
        items: {}
    });
    selectedId = null;
    save();
    render();
    elements.titleInput.focus();
    elements.titleInput.select();
    setStatus("Fresh board ready.");
});

loadInitialState();
render();

if (mode === "view") {
    setStatus("A public tier list. No sign-in required.");
}

// Exposed for the site's lightweight first-render checks.
window.__tierLabState = () => ({ mode, items: allPlacements().length, tiers: state.tiers.length });
