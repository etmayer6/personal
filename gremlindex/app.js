const TILE = 32;
const MAP_W = 20;
const MAP_H = 12;
const CANVAS_W = MAP_W * TILE;
const CANVAS_H = MAP_H * TILE;
const SPEED = 3.2;

const GREMLINS = {
    gayden: { id: "gayden", name: "Gayden Dicks", title: "The Splash Gremlin", types: ["Chaos", "Water"], role: "Reality-interfering overseer", personality: "Loud, authoritative, slightly damp.", description: "A clipboard-wielding gremlin that materializes from Splash Zones whenever confusion or questionable strategy occurs.", abilities: ["Splash Entry", "Clipboard Judgment", "Tan Decree"], accent: "#4eb7ff", hp: 8, atk: 3, vibe: "Declares a ruling nobody asked for." },
    caleb: { id: "caleb", name: "Caleb Hardy", title: "The Mudman Gremlin", types: ["Ground", "Water"], role: "Wet terrain defender", personality: "Quiet. Patient. Slightly gurgly.", description: "The mudman emerges from puddles and storm drains, drawing power through the legendary harditan ginger mop.", abilities: ["Ooze Rise", "Drain Whisper", "Mud Screen"], accent: "#9a6d42", hp: 10, atk: 2, vibe: "The puddle moved first." },
    craig: { id: "craig", name: "Craig Donald Hardy", title: "The Beer Titan Gremlin", types: ["Mythic", "Spirit"], role: "Legendary tavern-force from Mickey's", personality: "Confident. Mythic. Occasionally missing.", description: "A legendary gremlin powered by beer and Mickey's. It chugs at impossible speed and briefly distorts physics.", abilities: ["0.4-Second Chug", "Mickey's Teleport", "Legendary Mop"], accent: "#f2c15d", hp: 9, atk: 4, vibe: "He came back stronger from Mickey's." },
    aubrey: { id: "aubrey", name: "Aubrey Rhanklin", title: "The Smoke Gremlin", types: ["Poison", "Fog"], role: "Passive damage drifter", personality: "Quiet, drifting, mildly unpleasant atmosphere.", description: "A wandering gremlin wrapped in stinky smoke that lingers and ruins focus.", abilities: ["Stink Fog", "Lingering Presence", "Heavy Aura"], accent: "#8f90b5", hp: 8, atk: 3, vibe: "The smoke arrives first." },
    opranitan: { id: "opranitan", name: "Opranitan Winfranitan", title: "The Mass Gremlin", types: ["Titan", "Gravity"], role: "Mythical weight benchmark", personality: "Immovable. Monumental.", description: "A mythical gremlin whose presence bends the battlefield and makes movement feel heavy.", abilities: ["Gravity Well", "Mass Drop", "Unmovable"], accent: "#c78df8", hp: 12, atk: 3, vibe: "The whole route feels heavier." },
    blarbo: { id: "blarbo", name: "Blarbo Snailton", title: "The Bureaucrat Gremlin", types: ["Psychic", "Slime"], role: "Cosmic battle auditor", personality: "Slow, procedural, inescapably official.", description: "A cosmic snail gremlin that audits battles for rule violations and leaves terrain-altering slime.", abilities: ["Compliance Trail", "Audit", "Paperwork Loop"], accent: "#74d7bf", hp: 9, atk: 2, vibe: "Every move now needs a form." }
};

const STARTERS = ["caleb", "gayden", "craig"];
const ENCOUNTERS = ["aubrey", "blarbo", "gayden", "opranitan", "caleb", "craig"];
const NPCS = [
    { label: "Mud Scholar", x: 5.5, y: 2.5, color: "#d5b57c", dialogue: { speaker: "Mud Scholar", lines: ["Welcome to the Opposite-of-Fly region.", "Choose Mudman, Splash Gayden, or Craig Donald Hardy as your starter.", "The final legendary still supposedly lives beneath Mickey's."] } },
    { label: "Splash Scout", x: 15.5, y: 8.5, color: "#7fd4ff", dialogue: { speaker: "Splash Scout", lines: ["Splash Zones attract reality-interfering gremlins.", "If the grass bubbles, be ready for mid-battle nonsense."] } }
];
const SIGN_DIALOGUE = { speaker: "Trail Sign", lines: ["Route Zero: Splash Zone perimeter.", "Tall grass bubbles with gremlin signatures.", "Rumor: Mickey's basement still is not mapped."] };

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const pressed = {};
const state = createInitialState("caleb");
let selectedStarter = "caleb";
let frameHandle = null;

function createInitialState(starterId) {
    return {
        mode: "title",
        playerX: 7.5,
        playerY: 8.5,
        facing: "down",
        steps: 0,
        wins: 0,
        discoveries: [],
        grassTicks: 0,
        starterId,
        dialogue: null,
        encounter: null
    };
}

function resetState(mode) {
    Object.assign(state, createInitialState(selectedStarter));
    state.mode = mode;
    render();
}

function isGrassTile(x, y) {
    return (x >= 11 && x <= 17 && y >= 2 && y <= 5) || (x >= 2 && x <= 6 && y >= 8 && y <= 10);
}

function isSolidTile(x, y) {
    return x < 0 || y < 0 || x >= MAP_W || y >= MAP_H || x === 0 || y === 0 || x === MAP_W - 1 || y === MAP_H - 1 || (x >= 8 && x <= 10 && y >= 1 && y <= 3) || (x >= 12 && x <= 16 && y === 6) || (x >= 2 && x <= 4 && y >= 4 && y <= 6);
}

function nearbyDialogue() {
    const npc = NPCS.find((entry) => Math.hypot(entry.x - state.playerX, entry.y - state.playerY) <= 1.1);
    if (npc) return npc.dialogue;
    if (Math.abs(state.playerX - 10.5) <= 1.1 && Math.abs(state.playerY - 2.5) <= 1.1) return SIGN_DIALOGUE;
    return null;
}

function fillRoundedRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
}

function makeEncounter(starterId, wins) {
    const picks = ENCOUNTERS.filter((id) => id !== starterId);
    const enemyId = picks[wins % picks.length] || "aubrey";
    return {
        enemyId,
        enemyHp: GREMLINS[enemyId].hp,
        yourHp: GREMLINS[starterId].hp,
        enemyMove: GREMLINS[enemyId].abilities[0],
        log: `${GREMLINS[enemyId].name} emerged from the Splash Zone. ${GREMLINS[enemyId].vibe}`
    };
}

function addDiscovery(item) {
    if (!state.discoveries.includes(item)) state.discoveries = [...state.discoveries, item];
}

function tryMove(nextX, nextY) {
    const half = 0.3;
    const left = Math.floor(nextX - half);
    const right = Math.floor(nextX + half);
    const top = Math.floor(nextY - half);
    const bottom = Math.floor(nextY + half);
    if (isSolidTile(left, top) || isSolidTile(right, top) || isSolidTile(left, bottom) || isSolidTile(right, bottom)) return false;
    state.playerX = nextX;
    state.playerY = nextY;
    return true;
}

function update(dt) {
    if (state.mode !== "explore") return;
    let moveX = 0;
    let moveY = 0;
    if (pressed.arrowleft || pressed.a) { moveX -= 1; state.facing = "left"; }
    if (pressed.arrowright || pressed.d) { moveX += 1; state.facing = "right"; }
    if (pressed.arrowup || pressed.w) { moveY -= 1; state.facing = "up"; }
    if (pressed.arrowdown || pressed.s) { moveY += 1; state.facing = "down"; }
    const mag = Math.hypot(moveX, moveY) || 1;
    const dx = (moveX / mag) * SPEED * dt;
    const dy = (moveY / mag) * SPEED * dt;
    let moved = false;
    if (dx !== 0) moved = tryMove(Math.max(0.5, Math.min(MAP_W - 0.5, state.playerX + dx)), state.playerY) || moved;
    if (dy !== 0) moved = tryMove(state.playerX, Math.max(0.5, Math.min(MAP_H - 0.5, state.playerY + dy))) || moved;
    if (moved) {
        state.steps += 1;
        if (state.playerX > 14 && state.playerY < 5) addDiscovery("Splash Zone");
        if (state.playerX > 13 && state.playerY > 7) addDiscovery("Mickey's rumor");
        if (state.playerX < 6 && state.playerY < 4) addDiscovery("Starter camp");
    }
    if (isGrassTile(Math.floor(state.playerX), Math.floor(state.playerY)) && moved) {
        state.grassTicks += dt;
        if (state.grassTicks >= 0.35) {
            state.mode = "encounter";
            state.grassTicks = 0;
            state.encounter = makeEncounter(state.starterId, state.wins);
        }
    } else if (!isGrassTile(Math.floor(state.playerX), Math.floor(state.playerY))) {
        state.grassTicks = 0;
    }
}

function handleAttack() {
    if (state.mode !== "encounter" || !state.encounter) return;
    const starter = GREMLINS[state.starterId];
    const enemy = GREMLINS[state.encounter.enemyId];
    state.encounter.enemyHp = Math.max(0, state.encounter.enemyHp - starter.atk);
    if (state.encounter.enemyHp === 0) {
        state.encounter.log = `${enemy.name} folded under ${starter.name}'s pressure.`;
        state.wins += 1;
        state.encounter = null;
        state.mode = "victory";
        return;
    }
    state.encounter.yourHp = Math.max(0, state.encounter.yourHp - Math.max(1, Math.floor(enemy.atk / 2)));
    state.encounter.log = `${starter.abilities[0]} answered ${state.encounter.enemyMove}.`;
    if (state.encounter.yourHp === 0) {
        state.encounter.yourHp = starter.hp;
        state.encounter.enemyHp = enemy.hp;
        state.encounter.log = "Prototype reset: battle health restored.";
    }
}

function handleInteraction() {
    if (state.mode === "title") return resetState("explore");
    if (state.mode === "dialogue") {
        state.dialogue = null;
        state.mode = "explore";
        return;
    }
    if (state.mode === "victory") {
        state.mode = "explore";
        return;
    }
    if (state.mode === "encounter") return handleAttack();
    const dialogue = nearbyDialogue();
    if (dialogue) {
        state.dialogue = dialogue;
        state.mode = "dialogue";
    }
}

function syncStatus() {
    document.getElementById("status-mode").textContent = state.mode;
    document.getElementById("status-starter").textContent = GREMLINS[state.starterId].name.split(" ")[0];
    document.getElementById("status-wins").textContent = String(state.wins);
    document.getElementById("live-state").textContent = window.render_game_to_text();
}

function drawScene() {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    const sky = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
    sky.addColorStop(0, "#94d4ff");
    sky.addColorStop(1, "#e4fbff");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    for (let y = 0; y < MAP_H; y += 1) {
        for (let x = 0; x < MAP_W; x += 1) {
            const px = x * TILE;
            const py = y * TILE;
            if (isSolidTile(x, y)) {
                ctx.fillStyle = x >= 8 && x <= 10 && y >= 1 && y <= 3 ? "#6f7f8f" : x >= 2 && x <= 4 && y >= 4 && y <= 6 ? "#3b7cbc" : "#8a6846";
                ctx.fillRect(px, py, TILE, TILE);
            } else if (isGrassTile(x, y)) {
                ctx.fillStyle = "#61bb5c";
                ctx.fillRect(px, py, TILE, TILE);
                ctx.fillStyle = "#8ce4ff";
                ctx.beginPath();
                ctx.arc(px + 8, py + 10, 3, 0, Math.PI * 2);
                ctx.arc(px + 17, py + 7, 2, 0, Math.PI * 2);
                ctx.arc(px + 23, py + 12, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#4d943f";
                ctx.fillRect(px + 4, py + 8, 6, 16);
                ctx.fillRect(px + 14, py + 6, 5, 18);
                ctx.fillRect(px + 22, py + 9, 4, 15);
            } else {
                ctx.fillStyle = "#ccb77b";
                ctx.fillRect(px, py, TILE, TILE);
            }
            ctx.strokeStyle = "rgba(0,0,0,0.06)";
            ctx.strokeRect(px, py, TILE, TILE);
        }
    }
    ctx.fillStyle = "#d25548";
    fillRoundedRect(7 * TILE, 1 * TILE, 5 * TILE, 3 * TILE, 12);
    ctx.fillStyle = "#f8f1de";
    fillRoundedRect(7.5 * TILE, 2 * TILE, 4 * TILE, 2 * TILE, 8);
    ctx.fillStyle = "#5a341d";
    ctx.fillRect(9.25 * TILE, 2.4 * TILE, TILE, 1.6 * TILE);
    ctx.fillStyle = "#7b4f2a";
    fillRoundedRect(13 * TILE, 7 * TILE, 4 * TILE, 3 * TILE, 12);
    ctx.fillStyle = "#f8f1de";
    fillRoundedRect(13.4 * TILE, 7.6 * TILE, 3.2 * TILE, 1.9 * TILE, 8);
    ctx.fillStyle = "#f2c15d";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Mickey's", 15 * TILE, 8.8 * TILE);
    ctx.fillStyle = "#60d2ff";
    ctx.beginPath();
    ctx.arc(15.7 * TILE, 4.2 * TILE, 18, 0, Math.PI * 2);
    ctx.fill();
    for (const npc of NPCS) {
        const cx = npc.x * TILE;
        const cy = npc.y * TILE;
        ctx.fillStyle = npc.color;
        ctx.beginPath();
        ctx.arc(cx, cy - 8, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#24314b";
        ctx.fillRect(cx - 8, cy, 16, 18);
        ctx.fillStyle = "rgba(11,18,32,0.7)";
        ctx.fillRect(cx - 22, cy - 30, 44, 12);
        ctx.fillStyle = "#f7f3e9";
        ctx.font = "10px sans-serif";
        ctx.fillText(npc.label, cx, cy - 21);
    }
    const starter = GREMLINS[state.starterId];
    const px = state.playerX * TILE;
    const py = state.playerY * TILE;
    ctx.fillStyle = "#f9d98c";
    ctx.beginPath();
    ctx.arc(px, py - 10, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = starter.accent;
    ctx.fillRect(px - 8, py - 2, 16, 20);
    ctx.fillStyle = "rgba(9,15,28,0.68)";
    fillRoundedRect(10, CANVAS_H - 62, 380, 48, 14);
    ctx.fillStyle = "#eef4ff";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "left";
    const prompt = state.mode === "title" ? "Pick a starter, then Start Run." : state.mode === "encounter" ? "Space, Enter, or Action attacks." : state.mode === "dialogue" ? "Press E, Space, Enter, or Action." : "Move with keyboard or on-screen pad.";
    ctx.fillText(prompt, 24, CANVAS_H - 33);
    ctx.fillStyle = "rgba(9,15,28,0.68)";
    fillRoundedRect(CANVAS_W - 206, 10, 196, 110, 14);
    ctx.fillStyle = "#eef4ff";
    ctx.fillText(`Mode: ${state.mode}`, CANVAS_W - 186, 34);
    ctx.fillText(`Starter: ${starter.name.split(" ")[0]}`, CANVAS_W - 186, 54);
    ctx.fillText(`Steps: ${state.steps}`, CANVAS_W - 186, 74);
    ctx.fillText(`Wins: ${state.wins}`, CANVAS_W - 186, 94);
    ctx.fillText(document.fullscreenElement ? "Fullscreen: on" : "Fullscreen: off", CANVAS_W - 186, 114);
    if (state.mode === "title") {
        ctx.fillStyle = "rgba(7, 10, 18, 0.74)";
        fillRoundedRect(66, 44, CANVAS_W - 132, 212, 24);
        ctx.fillStyle = "#f6c453";
        ctx.font = "bold 32px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Gremlin Dex: Opposite-of-Fly", CANVAS_W / 2, 94);
        ctx.fillStyle = "#f1f5fb";
        ctx.font = "16px sans-serif";
        ctx.fillText("Pokemon-style route prototype with lore-accurate gremlins.", CANVAS_W / 2, 126);
        ctx.fillText(`Current starter: ${starter.name} - ${starter.title}`, CANVAS_W / 2, 178);
        ctx.fillText(starter.vibe, CANVAS_W / 2, 206);
    }
    if (state.mode === "dialogue" && state.dialogue) {
        ctx.fillStyle = "rgba(6, 10, 18, 0.82)";
        fillRoundedRect(42, CANVAS_H - 138, CANVAS_W - 84, 108, 18);
        ctx.fillStyle = "#f6c453";
        ctx.font = "bold 18px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(state.dialogue.speaker, 62, CANVAS_H - 104);
        ctx.fillStyle = "#f6fbff";
        ctx.font = "15px sans-serif";
        state.dialogue.lines.forEach((line, index) => ctx.fillText(line, 62, CANVAS_H - 76 + index * 22));
    }
    if (state.mode === "encounter" && state.encounter) {
        const enemy = GREMLINS[state.encounter.enemyId];
        ctx.fillStyle = "rgba(9, 13, 24, 0.88)";
        fillRoundedRect(34, 26, CANVAS_W - 68, CANVAS_H - 52, 22);
        ctx.fillStyle = "#d7f3ff";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText(`Wild ${enemy.name}`, 58, 62);
        ctx.fillStyle = "#f1f5fb";
        ctx.font = "14px sans-serif";
        ctx.fillText(`${enemy.title} | ${enemy.types.join(" / ")}`, 58, 88);
        ctx.fillText(state.encounter.log, 58, 338);
        ctx.fillStyle = enemy.accent;
        fillRoundedRect(378, 60, 182, 96, 18);
        ctx.fillStyle = "#132033";
        ctx.fillText(enemy.name, 396, 94);
        ctx.fillText(`HP ${state.encounter.enemyHp}/${enemy.hp}`, 396, 118);
        ctx.fillText(state.encounter.enemyMove, 396, 142);
        ctx.fillStyle = starter.accent;
        fillRoundedRect(92, 220, 196, 104, 18);
        ctx.fillStyle = "#132033";
        ctx.fillText(starter.name, 110, 254);
        ctx.fillText(`HP ${state.encounter.yourHp}/${starter.hp}`, 110, 278);
        ctx.fillText(starter.abilities[0], 110, 302);
    }
    if (state.mode === "victory") {
        ctx.fillStyle = "rgba(7, 10, 18, 0.78)";
        fillRoundedRect(98, 92, CANVAS_W - 196, 146, 24);
        ctx.fillStyle = "#8ee3a7";
        ctx.font = "bold 30px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Gremlin Encounter Cleared", CANVAS_W / 2, 138);
        ctx.fillStyle = "#f4f8ff";
        ctx.font = "16px sans-serif";
        ctx.fillText("Press Enter, Space, E, or Action to return.", CANVAS_W / 2, 178);
    }
}

function renderGameToText() {
    return JSON.stringify({
        coordinateSystem: { origin: "top-left", x: "right", y: "down", tileSize: TILE },
        region: "Opposite-of-Fly",
        mode: state.mode,
        starter: GREMLINS[state.starterId].name,
        player: { x: Number(state.playerX.toFixed(2)), y: Number(state.playerY.toFixed(2)), facing: state.facing },
        nearbyInteraction: nearbyDialogue() ? nearbyDialogue().speaker : null,
        inGrass: isGrassTile(Math.floor(state.playerX), Math.floor(state.playerY)),
        wins: state.wins,
        discoveries: state.discoveries,
        encounter: state.encounter ? { enemy: GREMLINS[state.encounter.enemyId].name, enemyHp: state.encounter.enemyHp, yourHp: state.encounter.yourHp, log: state.encounter.log } : null,
        codex: Object.values(GREMLINS).map((g) => ({ name: g.name, title: g.title, types: g.types }))
    });
}

function renderStarters() {
    const starterList = document.getElementById("starter-list");
    starterList.innerHTML = "";
    STARTERS.forEach((id) => {
        const gremlin = GREMLINS[id];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `starter-card${selectedStarter === id ? " active" : ""}`;
        btn.style.color = gremlin.accent;
        btn.innerHTML = `<div class="type-line">${gremlin.types.join(" / ")}</div><div class="name-line">${gremlin.name}</div><div class="subtitle">${gremlin.title}</div><div class="detail">${gremlin.description}</div><div class="detail">Abilities: ${gremlin.abilities.join(" | ")}</div>`;
        btn.addEventListener("click", () => {
            selectedStarter = id;
            state.starterId = id;
            renderStarters();
            render();
        });
        starterList.appendChild(btn);
    });
}

function renderCodex() {
    const codexGrid = document.getElementById("codex-grid");
    codexGrid.innerHTML = "";
    Object.values(GREMLINS).forEach((gremlin) => {
        const card = document.createElement("div");
        card.className = "codex-card";
        card.innerHTML = `<div class="type-line">${gremlin.types.join(" / ")}</div><div class="name-line">${gremlin.name}</div><div class="subtitle">${gremlin.title}</div><div class="detail">${gremlin.description}</div><div class="detail">Role: ${gremlin.role}</div><div class="detail">Personality: ${gremlin.personality}</div><div class="detail">Abilities: ${gremlin.abilities.join(" | ")}</div>`;
        codexGrid.appendChild(card);
    });
}

function render() {
    drawScene();
    syncStatus();
}

function loop() {
    update(1 / 60);
    render();
    frameHandle = window.requestAnimationFrame(loop);
}

function setVirtualDirection(direction) {
    pressed.arrowup = direction === "up";
    pressed.arrowdown = direction === "down";
    pressed.arrowleft = direction === "left";
    pressed.arrowright = direction === "right";
}

document.getElementById("start-btn").addEventListener("click", () => resetState("explore"));
document.getElementById("reset-btn").addEventListener("click", () => resetState("title"));
document.getElementById("fullscreen-btn").addEventListener("click", async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await canvas.requestFullscreen();
});
document.getElementById("action-btn").addEventListener("click", () => {
    handleInteraction();
    render();
});

document.querySelectorAll("[data-dir]").forEach((button) => {
    const direction = button.getAttribute("data-dir");
    button.addEventListener("mousedown", () => setVirtualDirection(direction));
    button.addEventListener("mouseup", () => setVirtualDirection(null));
    button.addEventListener("mouseleave", () => setVirtualDirection(null));
    button.addEventListener("touchstart", (event) => { event.preventDefault(); setVirtualDirection(direction); }, { passive: false });
    button.addEventListener("touchend", () => setVirtualDirection(null));
});

document.addEventListener("keydown", async (event) => {
    const key = event.key.toLowerCase();
    if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d", "e", " ", "enter", "f"].includes(key)) event.preventDefault();
    if (key === "f") {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await canvas.requestFullscreen();
        render();
        return;
    }
    if (key === "e" || key === "enter" || key === " ") {
        handleInteraction();
        render();
        return;
    }
    pressed[key] = true;
});

document.addEventListener("keyup", (event) => {
    pressed[event.key.toLowerCase()] = false;
});

window.render_game_to_text = renderGameToText;
window.advanceTime = (ms) => {
    const frames = Math.max(1, Math.round(ms / (1000 / 60)));
    for (let i = 0; i < frames; i += 1) update(1 / 60);
    render();
};

renderStarters();
renderCodex();
render();
frameHandle = window.requestAnimationFrame(loop);
