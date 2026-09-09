(() => {
    "use strict";

    const canvas = document.getElementById("tower-defense-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const BOARD_WIDTH = 960;
    const BOARD_HEIGHT = 600;
    const GRID = {
        x: 48,
        y: 57,
        cols: 16,
        rows: 9,
        tile: 54
    };
    const FRAME_MS = 1000 / 60;
    const TOTAL_WAVES = 8;
    const pathCells = [
        [0, 4], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 5], [5, 5], [6, 5],
        [6, 2], [7, 2], [8, 2], [8, 6], [9, 6], [10, 6], [10, 4], [11, 4],
        [12, 4], [12, 7], [13, 7], [14, 7], [15, 7]
    ];
    const pathLookup = new Set(pathCells.map(([col, row]) => `${col},${row}`));
    const towerTypes = {
        pulse: {
            name: "Pulse",
            cost: 55,
            color: "#6dd1bb",
            damage: 18,
            cooldown: 0.72,
            range: 2.1,
            description: "Fast single-target signal.",
            projectile: "orb"
        },
        ember: {
            name: "Ember",
            cost: 80,
            color: "#ee8a68",
            damage: 34,
            cooldown: 1.22,
            range: 2.55,
            splash: 0.62,
            description: "Heavy signal with a warm radius.",
            projectile: "flare"
        },
        lattice: {
            name: "Lattice",
            cost: 110,
            color: "#f2cb3f",
            damage: 10,
            cooldown: 0.3,
            range: 2.75,
            slow: 0.34,
            slowDuration: 1.55,
            description: "A fast beam that slows the whole lane.",
            projectile: "spark"
        }
    };
    const enemyTypes = {
        mote: {
            name: "Mote",
            color: "#e9d78a",
            hp: 44,
            speed: 0.72,
            reward: 14,
            radius: 8
        },
        runner: {
            name: "Runner",
            color: "#7bc6c0",
            hp: 30,
            speed: 1.2,
            reward: 12,
            radius: 7
        },
        brute: {
            name: "Brute",
            color: "#e77962",
            hp: 158,
            speed: 0.42,
            reward: 28,
            radius: 13
        },
        shell: {
            name: "Shell",
            color: "#b8a5d8",
            hp: 88,
            speed: 0.61,
            reward: 21,
            radius: 10,
            armor: 0.2
        }
    };

    const elements = {
        credits: document.getElementById("tower-credits"),
        lives: document.getElementById("tower-lives"),
        wave: document.getElementById("tower-wave"),
        waveLabel: document.getElementById("tower-wave-label"),
        enemyCount: document.getElementById("tower-enemy-count"),
        status: document.getElementById("tower-status"),
        coordinate: document.getElementById("tower-coordinate-readout"),
        overlay: document.getElementById("tower-overlay"),
        overlayTitle: document.getElementById("tower-overlay-title"),
        overlayCopy: document.getElementById("tower-overlay-copy"),
        startButton: document.getElementById("tower-start-btn"),
        waveButton: document.getElementById("tower-wave-btn"),
        pauseButton: document.getElementById("tower-pause-btn"),
        speedButton: document.getElementById("tower-speed-btn"),
        resetButton: document.getElementById("tower-reset-btn"),
        liveSummary: document.getElementById("tower-live-summary"),
        inspectorEmpty: document.getElementById("tower-inspector-empty"),
        inspectorCard: document.getElementById("tower-inspector-card"),
        inspectorName: document.getElementById("tower-inspector-name"),
        inspectorLevel: document.getElementById("tower-inspector-level"),
        inspectorCopy: document.getElementById("tower-inspector-copy"),
        statDamage: document.getElementById("tower-stat-damage"),
        statRange: document.getElementById("tower-stat-range"),
        statRate: document.getElementById("tower-stat-rate"),
        upgradeButton: document.getElementById("tower-upgrade-btn"),
        sellButton: document.getElementById("tower-sell-btn"),
        towerChoices: [...document.querySelectorAll("[data-tower-type]")]
    };

    const state = {
        mode: "ready",
        paused: false,
        speed: 1,
        wave: 0,
        waveState: "ready",
        credits: 220,
        lives: 12,
        score: 0,
        selectedTowerType: "pulse",
        selectedTowerId: null,
        towers: [],
        enemies: [],
        projectiles: [],
        effects: [],
        floaters: [],
        spawnQueue: [],
        spawnTimer: 0,
        elapsed: 0,
        message: "Choose Enter the grove to begin building."
    };

    let nextId = 1;
    let deviceScale = 1;
    let hoverCell = null;
    let deterministic = false;

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function lerp(start, end, amount) {
        return start + (end - start) * amount;
    }

    function cellKey(col, row) {
        return `${col},${row}`;
    }

    function isInsideGrid(col, row) {
        return col >= 0 && col < GRID.cols && row >= 0 && row < GRID.rows;
    }

    function isPathCell(col, row) {
        return pathLookup.has(cellKey(col, row));
    }

    function cellCenter(col, row) {
        return {
            x: GRID.x + col * GRID.tile + GRID.tile / 2,
            y: GRID.y + row * GRID.tile + GRID.tile / 2
        };
    }

    const pathPoints = pathCells.map(([col, row]) => cellCenter(col, row));

    function getPathPosition(distance) {
        const last = pathPoints.length - 1;
        if (distance < 0) {
            const first = pathPoints[0];
            const next = pathPoints[1];
            return {
                x: first.x + (next.x - first.x) * distance,
                y: first.y + (next.y - first.y) * distance
            };
        }
        if (distance >= last) {
            const previous = pathPoints[last - 1];
            const final = pathPoints[last];
            return {
                x: final.x + (final.x - previous.x) * (distance - last),
                y: final.y + (final.y - previous.y) * (distance - last)
            };
        }
        const index = Math.floor(distance);
        const amount = distance - index;
        return {
            x: lerp(pathPoints[index].x, pathPoints[index + 1].x, amount),
            y: lerp(pathPoints[index].y, pathPoints[index + 1].y, amount)
        };
    }

    function distanceBetween(a, b) {
        return Math.hypot(a.x - b.x, a.y - b.y);
    }

    function towerAt(col, row) {
        return state.towers.find((tower) => tower.col === col && tower.row === row);
    }

    function selectedTower() {
        return state.towers.find((tower) => tower.id === state.selectedTowerId) || null;
    }

    function towerStats(tower) {
        const base = towerTypes[tower.type];
        const level = tower.level;
        return {
            damage: Math.round(base.damage * (1 + (level - 1) * 0.38)),
            cooldown: Math.max(0.16, base.cooldown * (1 - (level - 1) * 0.085)),
            range: base.range + (level - 1) * 0.13,
            splash: base.splash ? base.splash + (level - 1) * 0.08 : 0,
            slow: base.slow ? Math.min(0.64, base.slow + (level - 1) * 0.06) : 0,
            slowDuration: base.slowDuration ? base.slowDuration + (level - 1) * 0.14 : 0
        };
    }

    function upgradeCost(tower) {
        return Math.round(42 + tower.level * 32 + towerTypes[tower.type].cost * 0.18);
    }

    function enemyStats(type, wave) {
        const base = enemyTypes[type];
        const healthScale = 1 + (wave - 1) * 0.2;
        return {
            maxHp: Math.round(base.hp * healthScale),
            speed: base.speed * (1 + Math.min(0.14, (wave - 1) * 0.018)),
            reward: Math.round(base.reward + (wave - 1) * 1.5),
            armor: base.armor || 0
        };
    }

    function chooseEnemyType(wave, index) {
        if (wave >= 5 && index % 7 === 0) return "brute";
        if (wave >= 3 && index % 5 === 0) return "shell";
        if (index % 4 === 0) return "runner";
        return "mote";
    }

    function waveQueue(wave) {
        const count = 6 + wave * 2;
        return Array.from({ length: count }, (_, index) => chooseEnemyType(wave, index));
    }

    function setMessage(message) {
        state.message = message;
    }

    function beginBuildPhase() {
        if (state.mode !== "ready") return;
        state.mode = "playing";
        state.paused = false;
        setMessage("Build phase. Place towers, then launch wave 1.");
        render();
    }

    function startWave() {
        if (state.mode === "ready") beginBuildPhase();
        if (state.mode !== "playing" || state.paused || state.waveState === "active" || state.wave >= TOTAL_WAVES) return;
        state.wave += 1;
        state.waveState = "active";
        state.spawnQueue = waveQueue(state.wave);
        state.spawnTimer = 0;
        setMessage(`Wave ${state.wave} incoming. Cover the lane.`);
        render();
    }

    function spawnEnemy(type) {
        const config = enemyTypes[type];
        const stats = enemyStats(type, state.wave);
        const enemy = {
            id: nextId++,
            type,
            x: pathPoints[0].x,
            y: pathPoints[0].y,
            distance: -0.55,
            hp: stats.maxHp,
            maxHp: stats.maxHp,
            speed: stats.speed,
            reward: stats.reward,
            armor: stats.armor,
            slow: 0,
            slowTimer: 0,
            radius: config.radius,
            dead: false
        };
        state.enemies.push(enemy);
    }

    function placeTower(col, row) {
        if (state.mode !== "playing" || !isInsideGrid(col, row)) return false;
        const existing = towerAt(col, row);
        if (existing) {
            state.selectedTowerId = existing.id;
            setMessage(`${towerTypes[existing.type].name} selected. Tune it in the inspector.`);
            render();
            return true;
        }
        if (isPathCell(col, row)) {
            setMessage("The lane is reserved for incoming signals.");
            render();
            return false;
        }
        const type = state.selectedTowerType;
        const config = towerTypes[type];
        if (state.credits < config.cost) {
            setMessage(`You need ${config.cost - Math.floor(state.credits)} more credits for ${config.name}.`);
            render();
            return false;
        }
        const tower = {
            id: nextId++,
            type,
            col,
            row,
            x: cellCenter(col, row).x,
            y: cellCenter(col, row).y,
            level: 1,
            cooldown: 0,
            invested: config.cost,
            pulse: Math.random() * Math.PI * 2
        };
        state.credits -= config.cost;
        state.towers.push(tower);
        state.selectedTowerId = tower.id;
        setMessage(`${config.name} online. Keep it near the bend.`);
        render();
        return true;
    }

    function selectTowerType(type) {
        if (!towerTypes[type]) return;
        state.selectedTowerType = type;
        setMessage(`${towerTypes[type].name} selected. Click an empty grid cell to place it.`);
        render();
    }

    function selectCellFromPointer(event) {
        const rect = canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left) * BOARD_WIDTH / rect.width;
        const y = (event.clientY - rect.top) * BOARD_HEIGHT / rect.height;
        const col = Math.floor((x - GRID.x) / GRID.tile);
        const row = Math.floor((y - GRID.y) / GRID.tile);
        return isInsideGrid(col, row) ? { col, row } : null;
    }

    function updateHover(event) {
        hoverCell = selectCellFromPointer(event);
        if (!hoverCell) {
            elements.coordinate.textContent = "grid / waiting";
        } else {
            elements.coordinate.textContent = `grid / ${String(hoverCell.col + 1).padStart(2, "0")} : ${String(hoverCell.row + 1).padStart(2, "0")}`;
        }
        renderCanvas();
    }

    function getTarget(tower, stats) {
        const maxRange = stats.range * GRID.tile;
        return state.enemies
            .filter((enemy) => !enemy.dead && distanceBetween(tower, enemy) <= maxRange)
            .sort((first, second) => second.distance - first.distance)[0] || null;
    }

    function fireTower(tower, target, stats) {
        const config = towerTypes[tower.type];
        state.projectiles.push({
            id: nextId++,
            x: tower.x,
            y: tower.y,
            targetId: target.id,
            targetX: target.x,
            targetY: target.y,
            speed: tower.type === "lattice" ? 760 : 560,
            damage: stats.damage,
            splash: stats.splash,
            slow: stats.slow,
            slowDuration: stats.slowDuration,
            color: config.color,
            kind: config.projectile,
            life: 1.4
        });
        addBurst(tower.x, tower.y, config.color, tower.type === "lattice" ? 2 : 4, 0.3);
    }

    function resolveProjectile(projectile, target) {
        if (!target || target.dead) return;
        const damage = projectile.damage * (1 - (target.armor || 0));
        target.hp -= damage;
        addFloater(target.x, target.y - target.radius - 9, `-${Math.max(1, Math.round(damage))}`, projectile.color);
        if (projectile.slow) {
            target.slow = Math.max(target.slow, projectile.slow);
            target.slowTimer = Math.max(target.slowTimer, projectile.slowDuration);
            addFloater(target.x, target.y - target.radius - 22, "SLOW", "#dff7d8", 0.5);
        }
        if (projectile.splash) {
            state.enemies.forEach((enemy) => {
                if (enemy === target || enemy.dead) return;
                if (distanceBetween(target, enemy) <= projectile.splash * GRID.tile) {
                    const splashDamage = damage * 0.58;
                    enemy.hp -= splashDamage;
                    addFloater(enemy.x, enemy.y - enemy.radius - 9, `-${Math.max(1, Math.round(splashDamage))}`, projectile.color, 0.58);
                    addBurst(enemy.x, enemy.y, projectile.color, 1, 0.24);
                    if (enemy.hp <= 0) defeatEnemy(enemy);
                }
            });
        }
        addBurst(target.x, target.y, projectile.color, projectile.kind === "flare" ? 8 : 3, 0.46);
        if (target.hp <= 0) defeatEnemy(target);
    }

    function defeatEnemy(enemy) {
        if (!enemy || enemy.dead) return;
        enemy.dead = true;
        state.credits += enemy.reward;
        state.score += enemy.reward * 10;
        addFloater(enemy.x, enemy.y - enemy.radius - 22, `+${enemy.reward}`, "#f2cb3f", 0.9);
        addBurst(enemy.x, enemy.y, enemyTypes[enemy.type].color, 10, 0.72);
        setMessage(`${enemyTypes[enemy.type].name} dispersed. +${enemy.reward} credits.`);
    }

    function addBurst(x, y, color, count = 4, life = 0.4) {
        for (let index = 0; index < count; index += 1) {
            const angle = (Math.PI * 2 * index) / count + Math.random() * 0.45;
            const speed = 22 + Math.random() * 54;
            state.effects.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: 1.5 + Math.random() * 2.5,
                color,
                life,
                maxLife: life
            });
        }
    }

    function addFloater(x, y, text, color, life = 0.72) {
        state.floaters.push({
            x,
            y,
            text,
            color,
            life,
            maxLife: life,
            drift: 16 + Math.random() * 8
        });
    }

    function updateWave(dt) {
        if (state.waveState !== "active") return;
        state.spawnTimer -= dt;
        if (state.spawnQueue.length && state.spawnTimer <= 0) {
            spawnEnemy(state.spawnQueue.shift());
            state.spawnTimer = Math.max(0.34, 0.7 - state.wave * 0.025);
        }
    }

    function updateEnemies(dt) {
        for (let index = state.enemies.length - 1; index >= 0; index -= 1) {
            const enemy = state.enemies[index];
            if (enemy.dead) {
                state.enemies.splice(index, 1);
                continue;
            }
            if (enemy.slowTimer > 0) {
                enemy.slowTimer -= dt;
                if (enemy.slowTimer <= 0) enemy.slow = 0;
            }
            enemy.distance += enemy.speed * (1 - enemy.slow) * dt;
            const position = getPathPosition(enemy.distance);
            enemy.x = position.x;
            enemy.y = position.y;
            if (enemy.distance >= pathPoints.length - 1 + 0.46) {
                state.lives = Math.max(0, state.lives - 1);
                addFloater(pathPoints.at(-1).x, pathPoints.at(-1).y - 28, "-1 CORE", "#ef9b76", 0.9);
                addBurst(pathPoints.at(-1).x, pathPoints.at(-1).y, "#ef9b76", 12, 0.62);
                state.enemies.splice(index, 1);
                setMessage(`${enemyTypes[enemy.type].name} reached the core. ${state.lives} core charge${state.lives === 1 ? "" : "s"} left.`);
                if (state.lives <= 0) {
                    state.mode = "defeat";
                    state.waveState = "defeat";
                    state.paused = false;
                    setMessage("The static reached the core. Rebuild the grove and try again.");
                }
            }
        }
    }

    function updateTowers(dt) {
        state.towers.forEach((tower) => {
            tower.pulse += dt;
            tower.cooldown -= dt;
            if (state.waveState !== "active" || tower.cooldown > 0) return;
            const stats = towerStats(tower);
            const target = getTarget(tower, stats);
            if (!target) return;
            fireTower(tower, target, stats);
            tower.cooldown = stats.cooldown;
        });
    }

    function updateProjectiles(dt) {
        for (let index = state.projectiles.length - 1; index >= 0; index -= 1) {
            const projectile = state.projectiles[index];
            const target = state.enemies.find((enemy) => enemy.id === projectile.targetId && !enemy.dead);
            if (!target) {
                state.projectiles.splice(index, 1);
                continue;
            }
            projectile.targetX = target.x;
            projectile.targetY = target.y;
            const dx = target.x - projectile.x;
            const dy = target.y - projectile.y;
            const distance = Math.hypot(dx, dy);
            const step = projectile.speed * dt;
            projectile.life -= dt;
            if (distance <= step + target.radius || projectile.life <= 0) {
                resolveProjectile(projectile, target);
                state.projectiles.splice(index, 1);
                continue;
            }
            projectile.x += dx / distance * step;
            projectile.y += dy / distance * step;
        }
    }

    function updateEffects(dt) {
        for (let index = state.effects.length - 1; index >= 0; index -= 1) {
            const effect = state.effects[index];
            effect.life -= dt;
            effect.x += effect.vx * dt;
            effect.y += effect.vy * dt;
            effect.vx *= 0.97;
            effect.vy *= 0.97;
            if (effect.life <= 0) state.effects.splice(index, 1);
        }
    }

    function updateFloaters(dt) {
        for (let index = state.floaters.length - 1; index >= 0; index -= 1) {
            const floater = state.floaters[index];
            floater.life -= dt;
            floater.y -= floater.drift * dt;
            if (floater.life <= 0) state.floaters.splice(index, 1);
        }
    }

    function finishWaveIfClear() {
        if (state.waveState !== "active" || state.spawnQueue.length || state.enemies.length) return;
        if (state.wave >= TOTAL_WAVES) {
            state.mode = "victory";
            state.waveState = "victory";
            state.paused = false;
            setMessage(`The grove held. Final score ${state.score}.`);
            return;
        }
        const bonus = 24 + state.wave * 8;
        state.credits += bonus;
        state.waveState = "ready";
        setMessage(`Wave ${state.wave} clear. +${bonus} bonus credits. Tune up before the next launch.`);
    }

    function step(dt) {
        if (state.mode === "playing" && !state.paused) {
            state.elapsed += dt;
            updateWave(dt);
            updateEnemies(dt);
            updateTowers(dt);
            updateProjectiles(dt);
            finishWaveIfClear();
        }
        updateEffects(dt);
        updateFloaters(dt);
    }

    function resetGame() {
        state.mode = "ready";
        state.paused = false;
        state.speed = 1;
        state.wave = 0;
        state.waveState = "ready";
        state.credits = 220;
        state.lives = 12;
        state.score = 0;
        state.selectedTowerType = "pulse";
        state.selectedTowerId = null;
        state.towers = [];
        state.enemies = [];
        state.projectiles = [];
        state.effects = [];
        state.floaters = [];
        state.spawnQueue = [];
        state.spawnTimer = 0;
        state.elapsed = 0;
        nextId = 1;
        setMessage("Choose Enter the grove to begin building.");
        render();
    }

    function togglePause() {
        if (state.mode !== "playing") return;
        state.paused = !state.paused;
        setMessage(state.paused ? "Simulation paused. Your grove is safe for now." : "Simulation resumed. Watch the next bend.");
        render();
    }

    function cycleSpeed() {
        if (state.mode !== "playing") return;
        state.speed = state.speed === 1 ? 2 : 1;
        setMessage(`Simulation speed ${state.speed}x.`);
        render();
    }

    function upgradeSelectedTower() {
        const tower = selectedTower();
        if (!tower) return;
        if (tower.level >= 4) {
            setMessage("This tower is fully tuned.");
            render();
            return;
        }
        const cost = upgradeCost(tower);
        if (state.credits < cost) {
            setMessage(`You need ${cost - Math.floor(state.credits)} more credits to tune this tower.`);
            render();
            return;
        }
        state.credits -= cost;
        tower.level += 1;
        tower.invested += cost;
        setMessage(`${towerTypes[tower.type].name} tuned to level ${tower.level}.`);
        render();
    }

    function sellSelectedTower() {
        const tower = selectedTower();
        if (!tower) return;
        const refund = Math.round(tower.invested * 0.62);
        state.credits += refund;
        state.towers = state.towers.filter((item) => item.id !== tower.id);
        state.selectedTowerId = null;
        setMessage(`${towerTypes[tower.type].name} dismantled. +${refund} credits returned.`);
        render();
    }

    function resizeCanvas() {
        deviceScale = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = BOARD_WIDTH * deviceScale;
        canvas.height = BOARD_HEIGHT * deviceScale;
        ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
        renderCanvas();
    }

    function drawRoundedRect(x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + width, y, x + width, y + height, r);
        ctx.arcTo(x + width, y + height, x, y + height, r);
        ctx.arcTo(x, y + height, x, y, r);
        ctx.arcTo(x, y, x + width, y, r);
        ctx.closePath();
    }

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
        gradient.addColorStop(0, "#0c3a43");
        gradient.addColorStop(0.54, "#0b3039");
        gradient.addColorStop(1, "#071f29");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

        const glow = ctx.createRadialGradient(760, 130, 8, 760, 130, 320);
        glow.addColorStop(0, "rgba(89, 188, 165, 0.14)");
        glow.addColorStop(1, "rgba(89, 188, 165, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

        ctx.strokeStyle = "rgba(166, 222, 204, 0.045)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= BOARD_WIDTH; x += 32) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, BOARD_HEIGHT);
            ctx.stroke();
        }
        for (let y = 0; y <= BOARD_HEIGHT; y += 32) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(BOARD_WIDTH, y);
            ctx.stroke();
        }
    }

    function drawField() {
        const fieldWidth = GRID.cols * GRID.tile;
        const fieldHeight = GRID.rows * GRID.tile;
        drawRoundedRect(GRID.x - 11, GRID.y - 11, fieldWidth + 22, fieldHeight + 22, 5);
        ctx.fillStyle = "rgba(3, 20, 27, 0.38)";
        ctx.fill();
        ctx.strokeStyle = "rgba(126, 196, 182, 0.19)";
        ctx.stroke();

        for (let row = 0; row < GRID.rows; row += 1) {
            for (let col = 0; col < GRID.cols; col += 1) {
                const x = GRID.x + col * GRID.tile;
                const y = GRID.y + row * GRID.tile;
                ctx.fillStyle = (row + col) % 2 === 0 ? "rgba(139, 208, 186, 0.045)" : "rgba(139, 208, 186, 0.025)";
                ctx.fillRect(x, y, GRID.tile, GRID.tile);
                ctx.strokeStyle = "rgba(179, 225, 207, 0.08)";
                ctx.strokeRect(x + 0.5, y + 0.5, GRID.tile - 1, GRID.tile - 1);
                if (!isPathCell(col, row)) {
                    ctx.fillStyle = "rgba(145, 219, 194, 0.045)";
                    ctx.fillRect(x + 5, y + 5, GRID.tile - 10, GRID.tile - 10);
                }
            }
        }

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        pathPoints.forEach((point, index) => {
            if (index === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
        });
        ctx.strokeStyle = "rgba(237, 168, 100, 0.18)";
        ctx.lineWidth = 47;
        ctx.stroke();
        ctx.strokeStyle = "#1d5961";
        ctx.lineWidth = 35;
        ctx.stroke();
        ctx.strokeStyle = "rgba(242, 203, 63, 0.4)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 12]);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = "rgba(232, 242, 238, 0.38)";
        ctx.font = "700 10px Trebuchet MS, sans-serif";
        ctx.letterSpacing = "1px";
        ctx.fillText("ENTRY SIGNAL", GRID.x + 4, GRID.y + GRID.tile * 4 - 31);
        ctx.fillText("CORE / KEEP ALIVE", GRID.x + GRID.tile * 12.1, GRID.y + GRID.tile * 7 + 37);
    }

    function drawCore() {
        const point = pathPoints.at(-1);
        const pulse = 1 + Math.sin(state.elapsed * 3.4) * 0.11;
        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.strokeStyle = "rgba(242, 203, 63, 0.18)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 25 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = "rgba(119, 219, 180, 0.46)";
        ctx.beginPath();
        ctx.arc(0, 0, 18 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "#f2cb3f";
        ctx.shadowColor = "rgba(242, 203, 63, 0.64)";
        ctx.shadowBlur = 17;
        ctx.fillRect(-8, -8, 16, 16);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff7ce";
        ctx.fillRect(-3, -3, 6, 6);
        ctx.restore();
    }

    function drawEntryBeacon() {
        const point = pathPoints[0];
        const pulse = 1 + Math.sin(state.elapsed * 2.2 + 1) * 0.08;
        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.strokeStyle = "rgba(109, 209, 187, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, 17 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "#6dd1bb";
        ctx.shadowColor = "rgba(109, 209, 187, 0.7)";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function drawTower(tower) {
        const config = towerTypes[tower.type];
        const stats = towerStats(tower);
        const isSelected = tower.id === state.selectedTowerId;
        ctx.save();
        ctx.translate(tower.x, tower.y);
        if (isSelected) {
            ctx.fillStyle = "rgba(242, 203, 63, 0.055)";
            ctx.strokeStyle = "rgba(242, 203, 63, 0.38)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(0, 0, stats.range * GRID.tile, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        ctx.fillStyle = "rgba(2, 19, 25, 0.42)";
        ctx.beginPath();
        ctx.ellipse(2, 12, 17, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#102f37";
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowColor = config.color;
        ctx.shadowBlur = 8 + Math.sin(tower.pulse) * 2;
        ctx.fillStyle = config.color;
        if (tower.type === "pulse") {
            ctx.fillRect(-4, -10, 8, 20);
            ctx.fillRect(-10, -4, 20, 8);
        } else if (tower.type === "ember") {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-7, -7, 14, 14);
        } else {
            ctx.fillRect(-8, -8, 16, 16);
            ctx.shadowBlur = 0;
            ctx.strokeStyle = "#102f37";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-7, 0);
            ctx.lineTo(7, 0);
            ctx.moveTo(0, -7);
            ctx.lineTo(0, 7);
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
        for (let level = 0; level < tower.level; level += 1) {
            ctx.fillStyle = "#f2cb3f";
            ctx.beginPath();
            ctx.arc(-7 + level * 5, 21, 1.8, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    function drawEnemy(enemy) {
        const config = enemyTypes[enemy.type];
        const ratio = clamp(enemy.hp / enemy.maxHp, 0, 1);
        ctx.save();
        ctx.translate(enemy.x, enemy.y);
        ctx.fillStyle = "rgba(1, 15, 20, 0.48)";
        ctx.beginPath();
        ctx.ellipse(2, enemy.radius + 5, enemy.radius + 3, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = config.color;
        ctx.shadowBlur = enemy.slow ? 12 : 7;
        ctx.fillStyle = config.color;
        ctx.strokeStyle = enemy.slow ? "#dff7d8" : "rgba(255, 250, 220, 0.8)";
        ctx.lineWidth = enemy.slow ? 2 : 1;
        ctx.beginPath();
        if (enemy.type === "runner") {
            ctx.rotate(Math.PI / 4);
            ctx.rect(-enemy.radius * 0.8, -enemy.radius * 0.8, enemy.radius * 1.6, enemy.radius * 1.6);
        } else if (enemy.type === "brute") {
            for (let side = 0; side < 6; side += 1) {
                const angle = side * Math.PI / 3;
                const x = Math.cos(angle) * enemy.radius;
                const y = Math.sin(angle) * enemy.radius;
                if (side === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
        } else if (enemy.type === "shell") {
            ctx.arc(0, 0, enemy.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, enemy.radius * 0.58, 0, Math.PI * 2);
        } else {
            ctx.arc(0, 0, enemy.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        if (enemy.type === "shell") ctx.stroke();
        ctx.shadowBlur = 0;
        const barWidth = Math.max(18, enemy.radius * 2.8);
        const barY = -enemy.radius - 9;
        ctx.fillStyle = "rgba(1, 15, 20, 0.8)";
        ctx.fillRect(-barWidth / 2, barY, barWidth, 3);
        ctx.fillStyle = enemy.slow ? "#dff7d8" : "#f5d76b";
        ctx.fillRect(-barWidth / 2, barY, barWidth * ratio, 3);
        ctx.restore();
    }

    function drawProjectile(projectile) {
        ctx.save();
        ctx.translate(projectile.x, projectile.y);
        ctx.shadowColor = projectile.color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = projectile.color;
        if (projectile.kind === "flare") {
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 245, 180, 0.75)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-9, 0);
            ctx.lineTo(9, 0);
            ctx.moveTo(0, -9);
            ctx.lineTo(0, 9);
            ctx.stroke();
        } else if (projectile.kind === "spark") {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-4, -4, 8, 8);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    function drawEffects() {
        state.effects.forEach((effect) => {
            ctx.globalAlpha = clamp(effect.life / effect.maxLife, 0, 1);
            ctx.fillStyle = effect.color;
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    function drawFloaters() {
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "700 12px Trebuchet MS, sans-serif";
        state.floaters.forEach((floater) => {
            ctx.globalAlpha = clamp(floater.life / floater.maxLife, 0, 1);
            ctx.shadowColor = "rgba(1, 15, 20, 0.8)";
            ctx.shadowBlur = 5;
            ctx.fillStyle = floater.color;
            ctx.fillText(floater.text, floater.x, floater.y);
        });
        ctx.restore();
    }

    function drawTargetLock() {
        const tower = selectedTower();
        if (!tower || state.waveState !== "active") return;
        const target = getTarget(tower, towerStats(tower));
        if (!target) return;
        ctx.save();
        ctx.globalAlpha = 0.52;
        ctx.strokeStyle = towerTypes[tower.type].color;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.moveTo(tower.x, tower.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 0.82;
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.radius + 7 + Math.sin(state.elapsed * 8) * 1.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    function drawHover() {
        if (!hoverCell || state.mode !== "playing") return;
        const { col, row } = hoverCell;
        const center = cellCenter(col, row);
        const occupied = Boolean(towerAt(col, row));
        const valid = !occupied && !isPathCell(col, row);
        ctx.fillStyle = valid ? "rgba(109, 209, 187, 0.12)" : "rgba(231, 121, 82, 0.12)";
        ctx.strokeStyle = valid ? "rgba(109, 209, 187, 0.72)" : "rgba(231, 121, 82, 0.72)";
        ctx.lineWidth = 2;
        ctx.fillRect(GRID.x + col * GRID.tile + 5, GRID.y + row * GRID.tile + 5, GRID.tile - 10, GRID.tile - 10);
        ctx.strokeRect(GRID.x + col * GRID.tile + 6, GRID.y + row * GRID.tile + 6, GRID.tile - 12, GRID.tile - 12);
        if (valid) {
            const previewStats = towerStats({ type: state.selectedTowerType, level: 1 });
            const previewRange = previewStats.range * GRID.tile;
            const previewColor = towerTypes[state.selectedTowerType].color;
            ctx.save();
            ctx.translate(center.x, center.y);
            ctx.globalAlpha = 0.1;
            const rangeGlow = ctx.createRadialGradient(0, 0, 10, 0, 0, previewRange);
            rangeGlow.addColorStop(0, previewColor);
            rangeGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = rangeGlow;
            ctx.beginPath();
            ctx.arc(0, 0, previewRange, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 0.55;
            ctx.strokeStyle = previewColor;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 7]);
            ctx.beginPath();
            ctx.arc(0, 0, previewRange, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 0.38;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }
    }

    function renderCanvas() {
        ctx.save();
        ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
        ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
        drawBackground();
        drawField();
        drawEntryBeacon();
        drawCore();
        state.towers.forEach(drawTower);
        drawTargetLock();
        state.enemies.forEach(drawEnemy);
        state.projectiles.forEach(drawProjectile);
        drawEffects();
        drawFloaters();
        drawHover();
        ctx.restore();
    }

    function renderInspector() {
        const tower = selectedTower();
        const hasTower = Boolean(tower);
        elements.inspectorEmpty.hidden = hasTower;
        elements.inspectorCard.hidden = !hasTower;
        if (!tower) return;
        const config = towerTypes[tower.type];
        const stats = towerStats(tower);
        const cost = upgradeCost(tower);
        elements.inspectorName.textContent = config.name;
        elements.inspectorLevel.textContent = `LV ${tower.level}`;
        elements.inspectorCopy.textContent = config.description;
        elements.statDamage.textContent = String(stats.damage);
        elements.statRange.textContent = stats.range.toFixed(1);
        elements.statRate.textContent = `${stats.cooldown.toFixed(2)}s`;
        elements.upgradeButton.disabled = tower.level >= 4 || state.credits < cost;
        elements.upgradeButton.textContent = tower.level >= 4 ? "Fully tuned" : `Upgrade · ${cost}`;
        elements.sellButton.disabled = false;
    }

    function renderDom() {
        elements.credits.textContent = String(Math.floor(state.credits));
        elements.lives.textContent = String(state.lives);
        elements.wave.textContent = `${state.wave} / ${TOTAL_WAVES}`;
        const incoming = state.enemies.length + state.spawnQueue.length;
        elements.enemyCount.textContent = incoming ? `${incoming} signal${incoming === 1 ? "" : "s"} in lane` : "No incoming signals";
        elements.waveLabel.textContent = state.paused ? "Simulation paused" : state.waveState === "active" ? `Wave ${state.wave} live` : state.mode === "victory" ? "Grove secured" : state.mode === "defeat" ? "Core offline" : "Build phase";
        elements.status.textContent = state.message;
        elements.waveButton.disabled = state.mode !== "playing" || state.paused || state.waveState === "active" || state.wave >= TOTAL_WAVES;
        elements.waveButton.textContent = state.wave >= TOTAL_WAVES ? "All waves launched" : state.waveState === "active" ? `Wave ${state.wave} live` : `Launch wave ${state.wave + 1}`;
        elements.pauseButton.disabled = state.mode !== "playing";
        elements.pauseButton.textContent = state.paused ? "Resume" : "Pause";
        elements.speedButton.disabled = state.mode !== "playing";
        elements.speedButton.textContent = `Speed ${state.speed}x`;
        elements.towerChoices.forEach((button) => {
            const type = button.dataset.towerType;
            const isSelected = type === state.selectedTowerType;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
            button.disabled = state.mode !== "playing" || state.credits < towerTypes[type].cost;
            if (isSelected) button.disabled = state.mode !== "playing";
        });
        renderInspector();

        const showOverlay = state.mode === "ready" || state.mode === "victory" || state.mode === "defeat";
        elements.overlay.dataset.visible = String(showOverlay);
        if (state.mode === "ready") {
            elements.overlayTitle.textContent = "A quiet grove. For now.";
            elements.overlayCopy.textContent = "Build a small network of signal towers, then launch the first wave before the static reaches the core.";
            elements.startButton.textContent = "Enter the grove →";
        } else if (state.mode === "victory") {
            elements.overlayTitle.textContent = "The grove held.";
            elements.overlayCopy.textContent = `Eight waves cleared. You finished with ${Math.floor(state.credits)} credits and a score of ${state.score}.`;
            elements.startButton.textContent = "Play it again →";
        } else if (state.mode === "defeat") {
            elements.overlayTitle.textContent = "The static got through.";
            elements.overlayCopy.textContent = "The core is offline. Change the order of your towers, upgrade a control point, and try the route again.";
            elements.startButton.textContent = "Rebuild the grove →";
        }
        elements.liveSummary.textContent = `${state.waveState} state. ${state.credits} credits. ${state.lives} core charges. ${state.towers.length} towers. ${incoming} signals in lane.`;
    }

    function render() {
        renderDom();
        renderCanvas();
    }

    function animationFrame() {
        if (!deterministic && state.mode === "playing") step((FRAME_MS / 1000) * state.speed);
        render();
        window.requestAnimationFrame(animationFrame);
    }

    elements.startButton.addEventListener("click", () => {
        if (state.mode === "ready") beginBuildPhase();
        else resetGame();
        canvas.focus();
    });
    elements.waveButton.addEventListener("click", startWave);
    elements.pauseButton.addEventListener("click", togglePause);
    elements.speedButton.addEventListener("click", cycleSpeed);
    elements.resetButton.addEventListener("click", resetGame);
    elements.upgradeButton.addEventListener("click", upgradeSelectedTower);
    elements.sellButton.addEventListener("click", sellSelectedTower);
    elements.towerChoices.forEach((button) => {
        button.addEventListener("click", () => selectTowerType(button.dataset.towerType));
    });
    canvas.addEventListener("pointermove", updateHover);
    canvas.addEventListener("pointerleave", () => {
        hoverCell = null;
        elements.coordinate.textContent = "grid / waiting";
        renderCanvas();
    });
    canvas.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        const cell = selectCellFromPointer(event);
        if (cell) placeTower(cell.col, cell.row);
    });
    document.addEventListener("keydown", (event) => {
        if (event.target && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
        if (event.key === "1") selectTowerType("pulse");
        else if (event.key === "2") selectTowerType("ember");
        else if (event.key === "3") selectTowerType("lattice");
        else if (event.key.toLowerCase() === "p") togglePause();
        else if (event.key.toLowerCase() === "r") resetGame();
        else if (event.key === " ") {
            event.preventDefault();
            if (state.mode === "ready") beginBuildPhase();
            else startWave();
        } else if (event.key.toLowerCase() === "f") {
            const target = document.querySelector(".tower-defense-app");
            if (!document.fullscreenElement && target?.requestFullscreen) target.requestFullscreen();
            else if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
        }
    });
    window.addEventListener("resize", resizeCanvas);

    window.render_game_to_text = () => JSON.stringify({
        coordinateSystem: { x: "right", y: "down", origin: "top-left of battlefield" },
        mode: state.mode,
        paused: state.paused,
        wave: state.wave,
        totalWaves: TOTAL_WAVES,
        waveState: state.waveState,
        credits: Math.floor(state.credits),
        lives: state.lives,
        score: state.score,
        selectedTowerType: state.selectedTowerType,
        selectedTowerId: state.selectedTowerId,
        placementPreview: hoverCell ? {
            col: hoverCell.col,
            row: hoverCell.row,
            valid: !towerAt(hoverCell.col, hoverCell.row) && !isPathCell(hoverCell.col, hoverCell.row),
            range: Number(towerStats({ type: state.selectedTowerType, level: 1 }).range.toFixed(2))
        } : null,
        towers: state.towers.map((tower) => {
            const stats = towerStats(tower);
            return {
                id: tower.id,
                type: tower.type,
                level: tower.level,
                col: tower.col,
                row: tower.row,
                x: Math.round(tower.x),
                y: Math.round(tower.y),
                damage: stats.damage,
                range: Number(stats.range.toFixed(2)),
                upgradeCost: tower.level >= 4 ? null : upgradeCost(tower)
            };
        }),
        enemies: state.enemies.map((enemy) => ({
            id: enemy.id,
            type: enemy.type,
            x: Math.round(enemy.x),
            y: Math.round(enemy.y),
            hp: Math.round(enemy.hp),
            maxHp: enemy.maxHp,
            distance: Number(enemy.distance.toFixed(2)),
            slow: Number(enemy.slow.toFixed(2))
        })),
        projectiles: state.projectiles.map((projectile) => ({
            id: projectile.id,
            kind: projectile.kind,
            x: Math.round(projectile.x),
            y: Math.round(projectile.y),
            targetId: projectile.targetId
        })),
        queuedSignals: state.spawnQueue.length,
        objective: "Protect the core through eight waves.",
        message: state.message
    });

    window.advanceTime = (milliseconds) => {
        deterministic = true;
        const steps = Math.max(0, Math.round(Math.max(0, milliseconds) / FRAME_MS * state.speed));
        for (let index = 0; index < steps; index += 1) step(FRAME_MS / 1000);
        render();
    };

    resizeCanvas();
    render();
    window.requestAnimationFrame(animationFrame);
})();
