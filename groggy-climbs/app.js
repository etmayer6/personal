(() => {
    "use strict";

    const WIDTH = 420;
    const HEIGHT = 680;
    const RADIUS = 15;
    const START_Y = 48;
    const GRAVITY = 1080;
    const BEST_KEY = "groggy-climbs-best-v1";
    const canvas = document.getElementById("climb-canvas");
    const ctx = canvas.getContext("2d");
    const overlay = document.getElementById("game-overlay");
    const overlayKicker = document.getElementById("overlay-kicker");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayCopy = document.getElementById("overlay-copy");
    const overlayButton = document.getElementById("overlay-button");
    const statusLabel = document.getElementById("climb-status");
    const wallDot = document.querySelector(".wall-dot");
    const currentHeightLabel = document.getElementById("current-height");
    const bestHeightLabel = document.getElementById("best-height");
    const runHeightLabel = document.getElementById("run-height");
    const dynoMeter = document.getElementById("dyno-meter");
    const dynoFill = document.getElementById("dyno-fill");
    const dynoValue = document.getElementById("dyno-value");
    const climbTip = document.getElementById("climb-tip");
    const pauseButton = document.getElementById("pause-button");
    const restartButton = document.getElementById("restart-button");
    const fullscreenButton = document.getElementById("fullscreen-button");
    const stage = document.getElementById("climb-stage");

    const keys = { a: false, d: false, s: false };
    const state = {
        mode: "title",
        player: { x: WIDTH / 2, y: START_Y, vx: 0, vy: 0, facing: 1, animation: 0 },
        platforms: [],
        chalkBags: [],
        particles: [],
        cameraY: START_Y - HEIGHT * 0.48,
        highestY: START_Y,
        height: 0,
        best: readBest(),
        recordImproved: false,
        chalk: 100,
        dynoCooldown: 0,
        time: 0,
        lastHold: "Start hold",
        lastWallBand: -1,
        seed: 481516,
        nextPlatformId: 0,
        collected: 0,
        landings: 0,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    };

    function readBest() {
        try {
            const value = Number(localStorage.getItem(BEST_KEY));
            return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
        } catch {
            return 0;
        }
    }

    function saveBest() {
        try {
            localStorage.setItem(BEST_KEY, String(state.best));
        } catch {
            // The run remains playable when storage is unavailable.
        }
    }

    function random() {
        state.seed = (state.seed * 1664525 + 1013904223) >>> 0;
        return state.seed / 4294967296;
    }

    function metersAt(y) {
        return Math.max(0, Math.floor((y - START_Y - RADIUS) / 10));
    }

    function updateHud() {
        const currentMeters = metersAt(state.player.y);
        state.height = metersAt(state.highestY);
        currentHeightLabel.innerHTML = `${currentMeters}<span>m</span>`;
        bestHeightLabel.innerHTML = `${state.best}<span>m</span>`;
        runHeightLabel.textContent = `${currentMeters} m climbed`;
        dynoMeter.setAttribute("aria-valuenow", String(Math.round(state.chalk)));
        dynoFill.style.width = `${state.chalk}%`;
        dynoValue.textContent = `${Math.round(state.chalk)}%`;

        if (state.chalk < 40) {
            climbTip.textContent = "Land on a hold or snag a chalk bag to refill.";
        } else if (state.chalk >= 90) {
            climbTip.textContent = "Chalk is full. W is ready for a dyno.";
        } else {
            climbTip.textContent = "A clean landing tops up your chalk.";
        }

        if (state.height > state.best) {
            state.best = state.height;
            state.recordImproved = true;
            saveBest();
            bestHeightLabel.innerHTML = `${state.best}<span>m</span>`;
        }
    }

    function setMode(mode) {
        state.mode = mode;
        document.body.dataset.demoState = mode === "title" ? "ready" : mode;
        wallDot.dataset.state = mode === "playing" ? "playing" : mode;
        pauseButton.disabled = mode === "title" || mode === "gameover";
        pauseButton.textContent = mode === "paused" ? "Resume" : "Pause";
        pauseButton.setAttribute("aria-label", mode === "paused" ? "Resume climbing" : "Pause climbing");

        if (mode === "title") {
            overlay.hidden = false;
            overlayKicker.textContent = "The wall is waiting";
            overlayTitle.textContent = "One more hold.";
            overlayCopy.textContent = "Bounce from hold to hold, chase the chalk bags, and try not to look down.";
            overlayButton.innerHTML = 'Start climbing <span aria-hidden="true">↗</span>';
        } else if (mode === "paused") {
            overlay.hidden = false;
            overlayKicker.textContent = "Rest stance";
            overlayTitle.textContent = "Catch your breath.";
            overlayCopy.textContent = `You have climbed ${state.height} m. The holds will wait right where you left them.`;
            overlayButton.innerHTML = 'Back on the wall <span aria-hidden="true">↗</span>';
        } else if (mode === "gameover") {
            overlay.hidden = false;
            overlayKicker.textContent = state.recordImproved ? "New high point" : "The landing zone";
            overlayTitle.textContent = "Take a breather.";
            overlayCopy.textContent = `You made it ${state.height} m up the wall${state.recordImproved ? " — a new personal best" : ""}. Fancy another lap?`;
            overlayButton.innerHTML = 'Climb again <span aria-hidden="true">↗</span>';
        } else {
            overlay.hidden = true;
        }
    }

    function resetRun(mode = "title") {
        state.seed = 481516;
        state.nextPlatformId = 0;
        state.player = { x: WIDTH / 2, y: START_Y + RADIUS, vx: 0, vy: 0, facing: 1, animation: 0 };
        state.platforms = [{ id: state.nextPlatformId++, x: WIDTH / 2, y: START_Y, width: 112, kind: "base", broken: false, used: false }];
        state.chalkBags = [];
        state.particles = [];
        state.cameraY = state.player.y - HEIGHT * 0.48;
        state.highestY = state.player.y;
        state.height = 0;
        state.recordImproved = false;
        state.chalk = 100;
        state.dynoCooldown = 0;
        state.time = 0;
        state.lastHold = "Start hold";
        state.lastWallBand = -1;
        state.collected = 0;
        state.landings = 0;
        Object.keys(keys).forEach((key) => { keys[key] = false; });
        makePlatformsReachable();
        setMode(mode);
        updateHud();
        render();
    }

    function makePlatformsReachable() {
        let top = Math.max(...state.platforms.map((platform) => platform.y));
        let lastX = state.platforms[state.platforms.length - 1].x;
        while (top < state.cameraY + HEIGHT * 1.65) {
            const gap = 78 + random() * 20;
            top += gap;
            const margin = 46;
            const range = Math.min(118, WIDTH * 0.31);
            const low = Math.max(margin, lastX - range);
            const high = Math.min(WIDTH - margin, lastX + range);
            const x = low + random() * Math.max(1, high - low);
            const roll = random();
            const kind = roll > 0.91 ? "crumbly" : roll > 0.77 ? "spring" : "stone";
            const platform = {
                id: state.nextPlatformId++,
                x,
                y: top,
                width: 58 + random() * 26,
                kind,
                broken: false,
                used: false,
                wobble: random() * Math.PI * 2
            };
            state.platforms.push(platform);
            if (random() < 0.19) {
                state.chalkBags.push({
                    x: x + (random() - 0.5) * 48,
                    y: top + 38 + random() * 15,
                    collected: false,
                    spin: random() * Math.PI * 2
                });
            }
            lastX = x;
        }
    }

    function startRun(focusCanvas = true) {
        if (state.mode === "paused") {
            setMode("playing");
            if (focusCanvas) canvas.focus({ preventScroll: true });
            return;
        }
        resetRun("playing");
        state.player.vy = 500;
        statusLabel.textContent = "First move. Find the next hold.";
        if (focusCanvas) canvas.focus({ preventScroll: true });
        render();
    }

    function pauseRun() {
        if (state.mode === "playing") {
            Object.keys(keys).forEach((key) => { keys[key] = false; });
            setMode("paused");
        } else if (state.mode === "paused") {
            setMode("playing");
            canvas.focus({ preventScroll: true });
        }
        render();
    }

    function triggerDyno() {
        if (state.mode !== "playing") return;
        if (state.chalk < 40) {
            statusLabel.textContent = "Out of chalk. Find a bag or stick a landing.";
            return;
        }
        if (state.dynoCooldown > 0) return;
        state.chalk -= 40;
        state.dynoCooldown = 0.72;
        state.player.vy = Math.min(760, Math.max(0, state.player.vy) + 345);
        state.player.animation = 0.45;
        statusLabel.textContent = "Big reach! Chalk dyno.";
        burst(state.player.x, state.player.y, "chalk", 10);
        updateHud();
        render();
    }

    function burst(x, y, kind, amount = 8) {
        if (state.reducedMotion && kind !== "landing") amount = Math.ceil(amount / 2);
        for (let index = 0; index < amount; index += 1) {
            const angle = (Math.PI * 2 * index) / amount + random() * 0.4;
            const speed = 28 + random() * 100;
            state.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed + (kind === "chalk" ? 25 : 0),
                life: kind === "chalk" ? 0.4 : 0.55,
                maxLife: kind === "chalk" ? 0.4 : 0.55,
                kind
            });
        }
    }

    function landOn(platform) {
        if (platform.kind === "crumbly") {
            platform.broken = true;
            burst(platform.x, platform.y, "stone", 8);
        }
        state.player.y = platform.y + RADIUS + 0.5;
        state.player.vy = platform.kind === "spring" ? 610 : 500;
        state.player.animation = 0.25;
        state.landings += 1;
        state.chalk = Math.min(100, state.chalk + (platform.kind === "spring" ? 10 : 16));
        state.lastHold = platform.kind === "spring" ? "Spring hold" : platform.kind === "crumbly" ? "Crumbly hold" : "Stone hold";
        statusLabel.textContent = platform.kind === "spring" ? "Spring hold! That one had some pop." : "Nice stick. Keep moving.";
        burst(platform.x, platform.y, "landing", 7);
        updateHud();
    }

    function collectChalkBag(bag) {
        bag.collected = true;
        state.collected += 1;
        state.chalk = Math.min(100, state.chalk + 48);
        statusLabel.textContent = "Chalk bag! The next dyno is on us.";
        burst(bag.x, bag.y, "chalk", 13);
        updateHud();
    }

    function update(dt) {
        if (state.mode !== "playing") return;
        state.time += dt;
        state.dynoCooldown = Math.max(0, state.dynoCooldown - dt);
        const player = state.player;
        const previousFoot = player.y - RADIUS;
        const direction = Number(keys.d) - Number(keys.a);
        if (direction) {
            player.vx += direction * 1240 * dt;
            player.facing = direction;
        }
        player.vx *= Math.exp(-2.6 * dt);
        player.vx = Math.max(-285, Math.min(285, player.vx));
        const gravity = keys.s && player.vy < 0 ? GRAVITY * 2.05 : GRAVITY;
        player.vy = Math.max(-850, player.vy - gravity * dt);
        player.x += player.vx * dt;
        player.y += player.vy * dt;
        player.animation = Math.max(0, player.animation - dt);

        if (player.x < RADIUS + 9) {
            player.x = RADIUS + 9;
            player.vx = Math.abs(player.vx) * 0.22;
        } else if (player.x > WIDTH - RADIUS - 9) {
            player.x = WIDTH - RADIUS - 9;
            player.vx = -Math.abs(player.vx) * 0.22;
        }

        if (player.vy < 0) {
            const nextFoot = player.y - RADIUS;
            for (const platform of state.platforms) {
                if (platform.broken) continue;
                const overlapsX = Math.abs(player.x - platform.x) < platform.width * 0.5 + RADIUS * 0.55;
                if (overlapsX && previousFoot >= platform.y && nextFoot <= platform.y) {
                    landOn(platform);
                    break;
                }
            }
        }

        for (const bag of state.chalkBags) {
            if (bag.collected) continue;
            if (Math.abs(player.x - bag.x) < 24 && Math.abs(player.y - bag.y) < 25) collectChalkBag(bag);
        }

        if (player.y > state.highestY) {
            state.highestY = player.y;
            updateHud();
            const band = Math.floor(state.height / 80);
            if (band > state.lastWallBand) {
                state.lastWallBand = band;
                const names = ["The warm-up wall", "The long face", "Chalkstone corner", "Into the overhang", "Cloud level"];
                statusLabel.textContent = names[Math.min(band, names.length - 1)];
            }
        }

        state.cameraY = Math.max(state.cameraY, player.y - HEIGHT * 0.48);
        makePlatformsReachable();
        state.platforms = state.platforms.filter((platform) => platform.y > state.cameraY - 120 && !(platform.broken && platform.y < player.y - 60));
        state.chalkBags = state.chalkBags.filter((bag) => !bag.collected && bag.y > state.cameraY - 90);
        for (const particle of state.particles) {
            particle.x += particle.vx * dt;
            particle.y += particle.vy * dt;
            particle.vy -= 170 * dt;
            particle.life -= dt;
        }
        state.particles = state.particles.filter((particle) => particle.life > 0);

        if (worldToScreen(player.y) > HEIGHT + 50) {
            updateHud();
            setMode("gameover");
        }
    }

    function worldToScreen(y) {
        return HEIGHT - (y - state.cameraY);
    }

    function hash(value) {
        let n = (value ^ 0x45d9f3b) >>> 0;
        n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
        n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
        return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
    }

    function drawWall() {
        const rock = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
        rock.addColorStop(0, "#d8d5bf");
        rock.addColorStop(0.48, "#c9c9ad");
        rock.addColorStop(1, "#b7bea0");
        ctx.fillStyle = rock;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        const firstBand = Math.floor(state.cameraY / 145) - 1;
        const lastBand = Math.ceil((state.cameraY + HEIGHT) / 145) + 1;
        for (let band = firstBand; band <= lastBand; band += 1) {
            const worldY = band * 145;
            const y = worldToScreen(worldY);
            ctx.strokeStyle = "rgba(87, 108, 86, 0.15)";
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(-12, y + 13);
            ctx.bezierCurveTo(96, y - 12, 215, y + 33, 432, y + 5);
            ctx.stroke();
            ctx.strokeStyle = "rgba(255, 251, 232, 0.25)";
            ctx.beginPath();
            ctx.moveTo(-12, y + 18);
            ctx.bezierCurveTo(112, y - 5, 244, y + 38, 432, y + 10);
            ctx.stroke();

            const seed = band + 500;
            for (let index = 0; index < 13; index += 1) {
                const px = hash(seed * 29 + index * 7) * WIDTH;
                const py = y + hash(seed * 47 + index * 11) * 126;
                const radius = 1 + hash(seed * 61 + index * 13) * 2.2;
                ctx.fillStyle = index % 3 === 0 ? "rgba(244, 239, 215, 0.38)" : "rgba(84, 105, 82, 0.13)";
                ctx.beginPath();
                ctx.ellipse(px, py, radius * 1.4, radius, hash(seed + index) * Math.PI, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.fillStyle = "rgba(92, 113, 89, 0.16)";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(21, 0);
        ctx.lineTo(12, HEIGHT * 0.18);
        ctx.lineTo(26, HEIGHT * 0.38);
        ctx.lineTo(15, HEIGHT * 0.62);
        ctx.lineTo(27, HEIGHT * 0.83);
        ctx.lineTo(16, HEIGHT);
        ctx.lineTo(0, HEIGHT);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(WIDTH, 0);
        ctx.lineTo(WIDTH - 17, 0);
        ctx.lineTo(WIDTH - 29, HEIGHT * 0.22);
        ctx.lineTo(WIDTH - 13, HEIGHT * 0.47);
        ctx.lineTo(WIDTH - 26, HEIGHT * 0.69);
        ctx.lineTo(WIDTH - 14, HEIGHT);
        ctx.lineTo(WIDTH, HEIGHT);
        ctx.closePath();
        ctx.fill();

        const firstTick = Math.floor(state.cameraY / 100) * 100;
        for (let worldY = firstTick; worldY < state.cameraY + HEIGHT + 100; worldY += 100) {
            const y = worldToScreen(worldY);
            if (y < 30 || y > HEIGHT - 20) continue;
            ctx.strokeStyle = "rgba(48, 84, 68, 0.2)";
            ctx.setLineDash([2, 5]);
            ctx.beginPath();
            ctx.moveTo(28, y);
            ctx.lineTo(38, y);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "rgba(37, 73, 59, 0.45)";
            ctx.font = "8px system-ui, sans-serif";
            ctx.fillText(`${Math.max(0, Math.floor((worldY - START_Y) / 10))}m`, 42, y + 3);
        }
    }

    function drawPlatform(platform) {
        if (platform.broken) return;
        const x = platform.x;
        const y = worldToScreen(platform.y);
        if (y < -30 || y > HEIGHT + 30) return;
        const width = platform.width;
        const shape = platform.kind === "base" ? "#516d53" : platform.kind === "spring" ? "#cd714e" : platform.kind === "crumbly" ? "#a87852" : "#607b5c";
        ctx.save();
        ctx.shadowColor = "rgba(41, 54, 39, 0.27)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.moveTo(x - width * 0.52, y + 3);
        ctx.lineTo(x - width * 0.44, y - 5);
        ctx.lineTo(x - width * 0.16, y - 8);
        ctx.lineTo(x + width * 0.04, y - 5);
        ctx.lineTo(x + width * 0.29, y - 7);
        ctx.lineTo(x + width * 0.5, y - 2);
        ctx.lineTo(x + width * 0.43, y + 8);
        ctx.lineTo(x - width * 0.44, y + 9);
        ctx.closePath();
        ctx.fillStyle = shape;
        ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.strokeStyle = "rgba(248, 242, 216, 0.66)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - width * 0.39, y - 4);
        ctx.quadraticCurveTo(x - width * 0.03, y - 10, x + width * 0.4, y - 3);
        ctx.stroke();

        if (platform.kind === "spring") {
            ctx.strokeStyle = "rgba(255, 235, 182, 0.9)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x - 5, y + 1);
            ctx.lineTo(x - 2, y - 5);
            ctx.lineTo(x + 2, y + 1);
            ctx.lineTo(x + 5, y - 5);
            ctx.stroke();
        } else if (platform.kind === "crumbly") {
            ctx.strokeStyle = "rgba(79, 54, 40, 0.68)";
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(x + 5, y - 5);
            ctx.lineTo(x + 1, y + 1);
            ctx.lineTo(x + 6, y + 3);
            ctx.stroke();
        } else {
            ctx.fillStyle = "rgba(244, 237, 211, 0.72)";
            ctx.beginPath();
            ctx.ellipse(x - width * 0.19, y - 2, 2.4, 1.2, -0.2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    function drawChalkBag(bag) {
        if (bag.collected) return;
        const x = bag.x;
        const y = worldToScreen(bag.y) + Math.sin(state.time * 3 + bag.spin) * 3;
        if (y < -24 || y > HEIGHT + 24) return;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.sin(state.time * 2 + bag.spin) * 0.08);
        ctx.fillStyle = "rgba(255, 251, 230, 0.28)";
        ctx.beginPath();
        ctx.arc(0, 0, 17, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#f2e7c9";
        ctx.beginPath();
        ctx.moveTo(-10, -6);
        ctx.quadraticCurveTo(-9, -11, -5, -10);
        ctx.lineTo(7, -10);
        ctx.quadraticCurveTo(10, -8, 10, -5);
        ctx.lineTo(8, 9);
        ctx.quadraticCurveTo(0, 13, -8, 8);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#be7950";
        ctx.fillRect(-8, -5, 16, 3);
        ctx.fillStyle = "#fffaf0";
        ctx.beginPath();
        ctx.arc(-2, 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function drawClimber() {
        const player = state.player;
        const x = player.x;
        const y = worldToScreen(player.y);
        const stretch = player.vy > 70 ? 1 : player.vy < -80 ? -1 : 0;
        const swing = Math.sin(state.time * 12) * 5;
        const boost = player.animation > 0;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(player.facing < 0 ? -1 : 1, 1);

        ctx.fillStyle = "rgba(33, 53, 43, 0.19)";
        ctx.beginPath();
        ctx.ellipse(1, 14, 17, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#5b7358";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-4, 6);
        ctx.lineTo(-10 + swing * 0.35, 15);
        ctx.lineTo(-15 + swing * 0.45, 20);
        ctx.moveTo(4, 6);
        ctx.lineTo(10 - swing * 0.3, 14);
        ctx.lineTo(16 - swing * 0.4, 19);
        ctx.stroke();

        ctx.fillStyle = "#3f4a3d";
        ctx.beginPath();
        ctx.ellipse(-15 + swing * 0.45, 21, 5, 2.6, -0.1, 0, Math.PI * 2);
        ctx.ellipse(16 - swing * 0.4, 20, 5, 2.6, 0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#e57d55";
        ctx.beginPath();
        ctx.roundRect(-10, -5 - stretch * 2, 20, 20 + stretch * 3, 7);
        ctx.fill();
        ctx.fillStyle = "#b2553b";
        ctx.beginPath();
        ctx.roundRect(5, -1, 7, 14, 3);
        ctx.fill();

        ctx.strokeStyle = "#e7b68a";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(-8, -1);
        ctx.lineTo(-14 - swing * 0.3, -8 - (boost ? 6 : 0));
        ctx.lineTo(-18 - swing * 0.4, -13 - (boost ? 11 : 0));
        ctx.moveTo(8, -1);
        ctx.lineTo(14 + swing * 0.3, -8 + (boost ? 3 : 0));
        ctx.lineTo(18 + swing * 0.4, -14 + (boost ? 8 : 0));
        ctx.stroke();
        ctx.fillStyle = "#f1c99e";
        ctx.beginPath();
        ctx.arc(-18 - swing * 0.4, -14 - (boost ? 11 : 0), 3.4, 0, Math.PI * 2);
        ctx.arc(18 + swing * 0.4, -15 + (boost ? 8 : 0), 3.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#d8a276";
        ctx.beginPath();
        ctx.arc(0, -13, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#45513e";
        ctx.beginPath();
        ctx.arc(-1, -18, 9, Math.PI, Math.PI * 2);
        ctx.quadraticCurveTo(8, -23, 8, -15);
        ctx.quadraticCurveTo(3, -19, -1, -18);
        ctx.fill();
        ctx.fillStyle = "#293c39";
        ctx.beginPath();
        ctx.arc(3, -13, 1.2, 0, Math.PI * 2);
        ctx.arc(-3, -13, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#9d5e45";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-2, -9);
        ctx.quadraticCurveTo(1, -7, 4, -9);
        ctx.stroke();

        ctx.fillStyle = "#d2aa5b";
        ctx.beginPath();
        ctx.roundRect(-13, 5, 7, 8, 2);
        ctx.fill();
        ctx.restore();
    }

    function drawParticles() {
        for (const particle of state.particles) {
            const alpha = Math.max(0, particle.life / particle.maxLife);
            const y = worldToScreen(particle.y);
            ctx.fillStyle = particle.kind === "chalk"
                ? `rgba(255, 248, 225, ${alpha * 0.78})`
                : `rgba(206, 112, 75, ${alpha * 0.7})`;
            ctx.beginPath();
            ctx.arc(particle.x, y, particle.kind === "chalk" ? 2.2 : 2.8, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function render() {
        ctx.setTransform(canvas.width / WIDTH, 0, 0, canvas.height / HEIGHT, 0, 0);
        drawWall();
        state.platforms.forEach(drawPlatform);
        state.chalkBags.forEach(drawChalkBag);
        drawParticles();
        drawClimber();

        const vignette = ctx.createLinearGradient(0, 0, 0, HEIGHT);
        vignette.addColorStop(0, "rgba(28, 54, 43, 0.05)");
        vignette.addColorStop(0.52, "rgba(28, 54, 43, 0)");
        vignette.addColorStop(1, "rgba(28, 54, 43, 0.1)");
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    function renderGameToText() {
        const visibleHolds = state.platforms
            .filter((platform) => !platform.broken && worldToScreen(platform.y) > -20 && worldToScreen(platform.y) < HEIGHT + 20)
            .map((platform) => ({ x: Math.round(platform.x), y: Math.round(platform.y), kind: platform.kind }));
        const visibleBags = state.chalkBags
            .filter((bag) => !bag.collected && worldToScreen(bag.y) > -20 && worldToScreen(bag.y) < HEIGHT + 20)
            .map((bag) => ({ x: Math.round(bag.x), y: Math.round(bag.y) }));
        return JSON.stringify({
            coordinateSystem: "origin bottom-left in wall coordinates; x increases right, y increases upward; units are game pixels",
            mode: state.mode,
            player: {
                x: Math.round(state.player.x),
                y: Math.round(state.player.y),
                vx: Math.round(state.player.vx),
                vy: Math.round(state.player.vy)
            },
            height: state.height,
            currentHeight: metersAt(state.player.y),
            best: state.best,
            chalk: Math.round(state.chalk),
            dynoReady: state.chalk >= 40 && state.dynoCooldown <= 0,
            inputs: { left: keys.a, right: keys.d, drop: keys.s },
            landings: state.landings,
            chalkBagsCollected: state.collected,
            holds: visibleHolds,
            chalkBags: visibleBags,
            lastHold: state.lastHold
        });
    }

    function advanceTime(milliseconds) {
        const steps = Math.max(1, Math.round(milliseconds / (1000 / 60)));
        for (let index = 0; index < steps; index += 1) update(1 / 60);
        render();
        updateHud();
        return renderGameToText();
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen?.();
        } else {
            stage.requestFullscreen?.();
        }
    }

    overlayButton.addEventListener("click", startRun);
    restartButton.addEventListener("click", startRun);
    pauseButton.addEventListener("click", pauseRun);
    fullscreenButton.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", () => {
        const active = document.fullscreenElement === stage;
        fullscreenButton.setAttribute("aria-label", active ? "Exit fullscreen" : "Enter fullscreen");
        fullscreenButton.textContent = active ? "×" : "⛶";
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        if (["a", "d", "s", "w", " ", "arrowleft", "arrowright", "arrowup", "arrowdown"].includes(key)) event.preventDefault();
        if (key === "r") {
            startRun();
            return;
        }
        if (key === "f") {
            toggleFullscreen();
            return;
        }
        if (key === "p" || key === "escape") {
            if (key === "escape" && document.fullscreenElement) document.exitFullscreen?.();
            else if (state.mode === "playing" || state.mode === "paused") pauseRun();
            return;
        }
        if (state.mode !== "playing" || event.repeat) return;
        if (key === "a" || key === "arrowleft") keys.a = true;
        if (key === "d" || key === "arrowright") keys.d = true;
        if (key === "s" || key === "arrowdown") keys.s = true;
        if (key === "w" || key === "arrowup") triggerDyno();
    });

    document.addEventListener("keyup", (event) => {
        const key = event.key.toLowerCase();
        if (key === "a" || key === "arrowleft") keys.a = false;
        if (key === "d" || key === "arrowright") keys.d = false;
        if (key === "s" || key === "arrowdown") keys.s = false;
    });

    window.addEventListener("blur", () => {
        Object.keys(keys).forEach((key) => { keys[key] = false; });
    });

    document.querySelectorAll("[data-control]").forEach((button) => {
        const key = button.dataset.control;
        button.addEventListener("pointerdown", (event) => {
            event.preventDefault();
            button.setPointerCapture?.(event.pointerId);
            if (key === "w") {
                if (state.mode === "title" || state.mode === "gameover") startRun();
                else triggerDyno();
            } else {
                if (state.mode === "title" || state.mode === "gameover") startRun();
                keys[key] = state.mode === "playing";
            }
        });
        const release = () => { if (key !== "w") keys[key] = false; };
        button.addEventListener("pointerup", release);
        button.addEventListener("pointercancel", release);
        button.addEventListener("lostpointercapture", release);
    });

    window.addEventListener("blur", () => {
        document.querySelectorAll("[data-control]").forEach((button) => button.blur());
    });

    let lastFrame = 0;
    function frame(timestamp) {
        const dt = lastFrame ? Math.min(0.034, (timestamp - lastFrame) / 1000) : 1 / 60;
        lastFrame = timestamp;
        update(dt);
        render();
        requestAnimationFrame(frame);
    }

    startRun(false);
    window.render_game_to_text = renderGameToText;
    window.advanceTime = advanceTime;
    requestAnimationFrame(frame);
})();
