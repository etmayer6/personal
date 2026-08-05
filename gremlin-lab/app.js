(function () {
    "use strict";

    const canvas = document.getElementById("lab-canvas");
    const context = canvas.getContext("2d");
    const stage = document.getElementById("lab-stage");
    const pauseButton = document.getElementById("pause-toggle");
    const resetButton = document.getElementById("reset-lab");
    const clearButton = document.getElementById("clear-lab");
    const fullscreenButton = document.getElementById("fullscreen-toggle");
    const statusText = document.getElementById("lab-status");
    const scenarioLabel = document.getElementById("scenario-label");
    const chaosValue = document.getElementById("chaos-value");
    const chaosFill = document.getElementById("chaos-fill");
    const objectCount = document.getElementById("object-count");
    const reactionCount = document.getElementById("reaction-count");
    const reactionFeed = document.getElementById("reaction-feed");
    const discoveryCount = document.getElementById("discovery-count");
    const discoveryFill = document.getElementById("discovery-fill");
    const discoveryNote = document.getElementById("discovery-note");
    const WIDTH = 960;
    const HEIGHT = 560;
    const FRAME_MS = 1000 / 60;
    const TAU = Math.PI * 2;

    const definitions = {
        water: { label: "Water", color: "#6dbed0", accent: "#d9f3ee", radius: 18, gravity: 0.17, drag: 0.996 },
        spark: { label: "Spark", color: "#f2cb3f", accent: "#fff3a9", radius: 14, gravity: 0.03, drag: 0.985 },
        oil: { label: "Oil", color: "#3d5a5c", accent: "#9db4a5", radius: 20, gravity: 0.16, drag: 0.995 },
        gremlin: { label: "Gremlin", color: "#a967b8", accent: "#f2cb3f", radius: 23, gravity: 0.19, drag: 0.994 },
        snack: { label: "Snack", color: "#e77952", accent: "#f8d29a", radius: 15, gravity: 0.22, drag: 0.994 },
        fan: { label: "Fan", color: "#4c9a97", accent: "#d6f3df", radius: 28, gravity: 0, drag: 1, anchored: true },
        moon: { label: "Moon rock", color: "#b9a5df", accent: "#f3eaff", radius: 30, gravity: 0, drag: 1, anchored: true },
        confetti: { label: "Confetti", color: "#ef9a72", accent: "#f2cb3f", radius: 5, gravity: 0.02, drag: 0.996, life: 9 },
        steam: { label: "Steam", color: "#a8c8c4", accent: "#f4fbeb", radius: 22, gravity: -0.06, drag: 0.99, life: 5 },
        fire: { label: "Fire", color: "#e75438", accent: "#f2cb3f", radius: 20, gravity: -0.08, drag: 0.99, life: 8 },
        bubble: { label: "Moon bubble", color: "#8ecfe1", accent: "#f4fbeb", radius: 16, gravity: -0.11, drag: 0.995, life: 7 }
    };

    const scenarioNames = {
        free: "Free play",
        storm: "Storm cabinet",
        snack: "Snack attack",
        oil: "Bad fuel day",
        moon: "Moon soup"
    };

    const recipeNames = {
        "spark+water": "Steam",
        "oil+spark": "Fire",
        "gremlin+snack": "Fed gremlin",
        "moon+water": "Moon bubble",
        "confetti+fan": "Confetti storm",
        "fire+gremlin": "Gremlin panic",
        "fire+water": "Steam again"
    };
    const recipeTotal = Object.keys(recipeNames).length;

    const state = {
        running: true,
        entities: [],
        scenario: "free",
        chaos: 0,
        reactions: 0,
        lastReaction: "Drop a few pieces and see what happens.",
        time: 0,
        nextSpawn: 0,
        dragging: null,
        pointerId: null,
        dragReactionStart: 0,
        dragLastX: 0,
        dragLastY: 0,
        dragLastTime: 0,
        dragTrail: [],
        bursts: [],
        discovered: {},
        lastDiscovery: "Find seven weird combinations.",
        fullscreenRequested: false,
        dpr: 1
    };

    let nextId = 1;
    let lastFrame = performance.now();

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function pad(value) {
        return String(Math.max(0, Math.round(value))).padStart(2, "0");
    }

    function definitionFor(type) {
        return definitions[type] || definitions.confetti;
    }

    function addEntity(type, x, y, options) {
        const definition = definitionFor(type);
        const settings = options || {};
        const entity = {
            id: nextId++,
            type: type,
            x: clamp(x, definition.radius, WIDTH - definition.radius),
            y: clamp(y, definition.radius, HEIGHT - definition.radius),
            vx: settings.vx || 0,
            vy: settings.vy || 0,
            r: settings.radius || definition.radius,
            gravity: settings.gravity == null ? definition.gravity : settings.gravity,
            drag: settings.drag == null ? definition.drag : settings.drag,
            anchored: settings.anchored == null ? Boolean(definition.anchored) : settings.anchored,
            age: 0,
            life: settings.life == null ? (definition.life || Infinity) : settings.life,
            cooldown: 0,
            rotation: settings.rotation || 0,
            fed: 0,
            alive: true,
            dragging: false
        };
        state.entities.push(entity);
        return entity;
    }

    function clearEntities() {
        state.entities.forEach(function (entity) {
            entity.alive = false;
        });
        state.entities = [];
        state.dragging = null;
        state.pointerId = null;
        state.dragTrail = [];
        state.bursts = [];
    }

    function recipeKey(first, second) {
        return [first, second].sort().join("+");
    }

    function setReaction(message, amount, recipe) {
        state.lastReaction = message;
        state.chaos = clamp(state.chaos + amount, 0, 100);
        state.reactions += 1;
        if (recipe) {
            const isNew = !state.discovered[recipe];
            state.discovered[recipe] = true;
            state.lastDiscovery = isNew ? "New recipe logged." : "Recipe repeated.";
        }
    }

    function addBurst(x, y, color, options) {
        const settings = options || {};
        state.bursts.push({
            x: x,
            y: y,
            color: color,
            age: 0,
            life: settings.life || 0.8,
            radius: settings.radius || 16,
            scale: settings.scale || 1,
            rotation: settings.rotation || 0
        });
        if (state.bursts.length > 28) state.bursts.shift();
    }

    function updateBursts(frameScale) {
        const elapsed = frameScale / 60;
        state.bursts.forEach(function (burst) {
            burst.age += elapsed;
            burst.rotation += 0.03 * frameScale;
        });
        state.bursts = state.bursts.filter(function (burst) {
            return burst.age < burst.life;
        });
    }

    function spawnConfetti(x, y, amount, speed) {
        const count = Math.min(amount, Math.max(0, 62 - state.entities.length));
        const burstSpeed = speed || 1;
        for (let index = 0; index < count; index += 1) {
            const angle = (index / Math.max(1, count)) * TAU + state.time * 0.7;
            addEntity("confetti", x, y, {
                vx: Math.cos(angle) * (0.8 + burstSpeed),
                vy: Math.sin(angle) * (0.8 + burstSpeed) - 1.1,
                rotation: angle
            });
        }
    }

    function resetStats() {
        state.chaos = 0;
        state.reactions = 0;
        state.time = 0;
        state.nextSpawn = 0;
        state.lastDiscovery = "Find seven weird combinations.";
    }

    function setupFreePlay() {
        clearEntities();
        resetStats();
        state.scenario = "free";
        state.lastReaction = "Drop a few pieces and see what happens.";
        addEntity("gremlin", 270, 350, { vx: 0.16 });
        addEntity("snack", 520, 270, { vx: -0.08 });
        addEntity("water", 690, 410, { vx: -0.25 });
        addEntity("fan", 785, 175, { anchored: true });
        state.running = true;
        updateUi();
        draw();
    }

    function setupScenario(name) {
        clearEntities();
        resetStats();
        state.scenario = name;
        state.running = true;

        if (name === "storm") {
            addEntity("water", 405, 350, { vx: 0.25 });
            addEntity("spark", 433, 350, { vx: -0.1 });
            addEntity("fan", 760, 350, { anchored: true });
            addEntity("confetti", 770, 200, { vx: -0.6, vy: 0.2 });
            state.lastReaction = "The storm cabinet is armed.";
        } else if (name === "snack") {
            addEntity("gremlin", 405, 340, { vx: 0.35 });
            addEntity("snack", 447, 340, { vx: -0.15 });
            state.lastReaction = "The snack has been left unattended.";
        } else if (name === "oil") {
            addEntity("oil", 405, 340, { vx: 0.2 });
            addEntity("spark", 429, 340, { vx: -0.1 });
            addEntity("fan", 760, 360, { anchored: true });
            state.lastReaction = "Someone labeled the fuel cabinet 'probably fine'.";
        } else if (name === "moon") {
            addEntity("moon", 650, 350, { anchored: true });
            addEntity("water", 608, 350, { vx: 0.2 });
            addEntity("gremlin", 340, 370, { vx: 0.3 });
            state.lastReaction = "Moon soup is ready for stirring.";
        }

        updateUi();
        draw();
    }

    function dropElement(type) {
        const slot = state.nextSpawn++;
        const x = 190 + ((slot * 137) % 560);
        const y = 155 + ((slot * 71) % 210);
        addEntity(type, x, y, {
            vx: (slot % 2 === 0 ? 1 : -1) * 0.18,
            vy: -0.45
        });
        state.scenario = "free";
        state.lastReaction = definitionFor(type).label + " entered the lab.";
        updateUi();
        draw();
    }

    function isPair(first, second, left, right) {
        return (first.type === left && second.type === right) || (first.type === right && second.type === left);
    }

    function pairEntities(first, second, type) {
        return first.type === type ? first : second.type === type ? second : null;
    }

    function lockPair(first, second) {
        first.cooldown = 0.7;
        second.cooldown = 0.7;
    }

    function midpoint(first, second) {
        return { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
    }

    function react(first, second) {
        if (!first.alive || !second.alive || first.cooldown > 0 || second.cooldown > 0) return false;

        if (isPair(first, second, "water", "spark")) {
            const point = midpoint(first, second);
            first.alive = false;
            second.alive = false;
            addEntity("steam", point.x, point.y, { vx: 0.1, vy: -1.1 });
            spawnConfetti(point.x, point.y, 3, 0.5);
            addBurst(point.x, point.y, "#8ecfe1", { radius: 18, scale: 1.1 });
            setReaction("Water shorted the spark. Steam everywhere.", 13, recipeKey("water", "spark"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "oil", "spark")) {
            const point = midpoint(first, second);
            first.alive = false;
            second.alive = false;
            addEntity("fire", point.x, point.y, { vx: 0.4, vy: -1.2 });
            spawnConfetti(point.x, point.y, 5, 1.1);
            addBurst(point.x, point.y, "#e75438", { radius: 22, scale: 1.2 });
            setReaction("Oil met a spark. The clipboard is on fire.", 23, recipeKey("oil", "spark"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "gremlin", "snack")) {
            const gremlin = pairEntities(first, second, "gremlin");
            const snack = pairEntities(first, second, "snack");
            snack.alive = false;
            gremlin.fed += 1;
            gremlin.r = clamp(gremlin.r + 3, 23, 34);
            gremlin.vy = -2.1;
            spawnConfetti(gremlin.x, gremlin.y, 5, 0.8);
            addBurst(gremlin.x, gremlin.y, "#d98bd2", { radius: 15, scale: 0.9 });
            setReaction("The gremlin ate the snack. It learned the word 'again'.", 17, recipeKey("gremlin", "snack"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "moon", "water")) {
            const point = midpoint(first, second);
            const water = pairEntities(first, second, "water");
            water.alive = false;
            addEntity("bubble", point.x, point.y, { vx: 0.15, vy: -1.35 });
            addBurst(point.x, point.y, "#b9a5df", { radius: 19, scale: 0.95 });
            setReaction("Moon rock touched water. Gravity filed a complaint.", 11, recipeKey("moon", "water"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "fan", "confetti")) {
            const fan = pairEntities(first, second, "fan");
            state.entities.forEach(function (entity) {
                if (entity.type !== "confetti" || !entity.alive) return;
                const distance = Math.hypot(entity.x - fan.x, entity.y - fan.y);
                if (distance < 230) {
                    entity.vx += 2.1;
                    entity.vy -= 0.35;
                }
            });
            addBurst(fan.x, fan.y, "#ef9a72", { radius: 25, scale: 0.8 });
            setReaction("The fan found confetti. The corners are no longer safe.", 9, recipeKey("fan", "confetti"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "fire", "gremlin")) {
            const gremlin = pairEntities(first, second, "gremlin");
            gremlin.vx = gremlin.x < WIDTH / 2 ? 2.4 : -2.4;
            gremlin.vy = -2.4;
            spawnConfetti(gremlin.x, gremlin.y, 6, 1.2);
            addBurst(gremlin.x, gremlin.y, "#f2cb3f", { radius: 20, scale: 1.1 });
            setReaction("The gremlin saw fire and invented a new direction.", 15, recipeKey("fire", "gremlin"));
            lockPair(first, second);
            return true;
        }

        if (isPair(first, second, "fire", "water")) {
            const point = midpoint(first, second);
            first.alive = false;
            second.alive = false;
            addEntity("steam", point.x, point.y, { vx: -0.2, vy: -1.4 });
            addBurst(point.x, point.y, "#a8c8c4", { radius: 23, scale: 1.05 });
            setReaction("Fire + water made steam. The lab remains technically standing.", 12, recipeKey("fire", "water"));
            lockPair(first, second);
            return true;
        }

        return false;
    }

    function resolveBounce(first, second, dx, dy, distance) {
        if (first.anchored && second.anchored) return;
        const safeDistance = distance || 1;
        const nx = dx / safeDistance;
        const ny = dy / safeDistance;
        const overlap = first.r + second.r - safeDistance;
        if (overlap > 0) {
            if (!first.anchored && !second.anchored) {
                first.x -= nx * overlap * 0.5;
                first.y -= ny * overlap * 0.5;
                second.x += nx * overlap * 0.5;
                second.y += ny * overlap * 0.5;
            } else if (first.anchored) {
                second.x += nx * overlap;
                second.y += ny * overlap;
            } else {
                first.x -= nx * overlap;
                first.y -= ny * overlap;
            }
        }

        const relativeVelocity = (first.vx - second.vx) * nx + (first.vy - second.vy) * ny;
        if (relativeVelocity > 0) return;
        const impulse = relativeVelocity * -0.64;
        if (!first.anchored) {
            first.vx += nx * impulse;
            first.vy += ny * impulse;
        }
        if (!second.anchored) {
            second.vx -= nx * impulse;
            second.vy -= ny * impulse;
        }
    }

    function applyFields(entity, frameScale) {
        if (entity.anchored) return;

        state.entities.forEach(function (field) {
            if (!field.alive || field === entity) return;
            const dx = entity.x - field.x;
            const dy = entity.y - field.y;
            const distance = Math.hypot(dx, dy);
            if (field.type === "moon" && distance < 190) {
                entity.vy -= (1 - distance / 190) * 0.1 * frameScale;
            }
            if (field.type === "fan" && distance < 220) {
                const strength = (1 - distance / 220) * 0.07 * frameScale;
                entity.vx += strength;
                entity.vy += Math.sin(state.time * 6 + entity.id) * 0.012 * frameScale;
            }
        });
    }

    function keepInside(entity) {
        const bounce = entity.type === "confetti" ? 0.7 : 0.76;
        if (entity.x < entity.r) {
            entity.x = entity.r;
            entity.vx = Math.abs(entity.vx) * bounce;
        } else if (entity.x > WIDTH - entity.r) {
            entity.x = WIDTH - entity.r;
            entity.vx = -Math.abs(entity.vx) * bounce;
        }
        if (entity.y < entity.r) {
            entity.y = entity.r;
            entity.vy = Math.abs(entity.vy) * bounce;
        } else if (entity.y > HEIGHT - entity.r) {
            entity.y = HEIGHT - entity.r;
            entity.vy = -Math.abs(entity.vy) * bounce;
        }
    }

    function update(frameScale) {
        if (!state.running) return;
        state.time += frameScale / 60;
        state.chaos = Math.max(0, state.chaos - frameScale * 0.008);
        updateBursts(frameScale);

        state.entities.forEach(function (entity) {
            if (!entity.alive) return;
            entity.age += frameScale / 60;
            entity.cooldown = Math.max(0, entity.cooldown - frameScale / 60);
            if (entity.age > entity.life) {
                entity.alive = false;
                return;
            }
            if (entity.anchored || entity.dragging) return;

            applyFields(entity, frameScale);
            entity.vy += entity.gravity * frameScale;
            if (entity.type === "fire" || entity.type === "steam" || entity.type === "bubble") {
                entity.vx += Math.sin(state.time * 4 + entity.id) * 0.012 * frameScale;
            }
            entity.vx *= Math.pow(entity.drag, frameScale);
            entity.vy *= Math.pow(entity.drag, frameScale);
            entity.x += entity.vx * frameScale;
            entity.y += entity.vy * frameScale;
            entity.rotation += (entity.vx * 0.015 + 0.01) * frameScale;
            keepInside(entity);
        });

        const collisionEntities = state.entities.slice();
        for (let firstIndex = 0; firstIndex < collisionEntities.length; firstIndex += 1) {
            const first = collisionEntities[firstIndex];
            if (!first.alive) continue;
            for (let secondIndex = firstIndex + 1; secondIndex < collisionEntities.length; secondIndex += 1) {
                const second = collisionEntities[secondIndex];
                if (!second.alive) continue;
                const dx = second.x - first.x;
                const dy = second.y - first.y;
                const distance = Math.hypot(dx, dy);
                if (distance > first.r + second.r) continue;
                if (react(first, second)) continue;
                if (!first.dragging && !second.dragging) resolveBounce(first, second, dx, dy, distance);
            }
        }

        state.entities = state.entities.filter(function (entity) {
            return entity.alive;
        });
    }

    function drawRoundedRect(x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height / 2);
        context.beginPath();
        context.moveTo(x + r, y);
        context.arcTo(x + width, y, x + width, y + height, r);
        context.arcTo(x + width, y + height, x, y + height, r);
        context.arcTo(x, y + height, x, y, r);
        context.arcTo(x, y, x + width, y, r);
        context.closePath();
    }

    function drawStar(radius, points) {
        context.beginPath();
        for (let index = 0; index < points * 2; index += 1) {
            const pointRadius = index % 2 === 0 ? radius : radius * 0.42;
            const angle = -Math.PI / 2 + (index / (points * 2)) * TAU;
            const x = Math.cos(angle) * pointRadius;
            const y = Math.sin(angle) * pointRadius;
            if (index === 0) context.moveTo(x, y);
            else context.lineTo(x, y);
        }
        context.closePath();
    }

    function drawBackground() {
        context.fillStyle = "#f8f1e6";
        context.fillRect(0, 0, WIDTH, HEIGHT);
        context.strokeStyle = "rgba(25, 79, 97, 0.11)";
        context.lineWidth = 1;
        for (let x = 24; x < WIDTH; x += 48) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, HEIGHT);
            context.stroke();
        }
        for (let y = 24; y < HEIGHT; y += 48) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(WIDTH, y);
            context.stroke();
        }
        context.fillStyle = "rgba(197, 90, 50, 0.07)";
        context.beginPath();
        context.arc(96, 92, 58, 0, TAU);
        context.fill();
        context.strokeStyle = "rgba(197, 90, 50, 0.22)";
        context.setLineDash([5, 8]);
        context.beginPath();
        context.arc(96, 92, 82, 0, TAU);
        context.stroke();
        context.setLineDash([]);
        context.fillStyle = "rgba(16, 43, 54, 0.48)";
        context.font = "800 10px Trebuchet MS, sans-serif";
        context.letterSpacing = "2px";
        context.fillText("UNSUPERVISED TEST FLOOR", 22, 28);
        context.fillStyle = "rgba(16, 43, 54, 0.38)";
        context.fillText("DRAG / DROP / OBSERVE", WIDTH - 154, 28);
    }

    function drawBursts() {
        state.bursts.forEach(function (burst) {
            const progress = clamp(burst.age / burst.life, 0, 1);
            const alpha = (1 - progress) * 0.72;
            const radius = burst.radius + progress * 42 * burst.scale;
            context.save();
            context.translate(burst.x, burst.y);
            context.rotate(burst.rotation);
            context.globalAlpha = alpha;
            context.strokeStyle = burst.color;
            context.lineWidth = 2.5;
            context.beginPath();
            context.arc(0, 0, radius, 0, TAU);
            context.stroke();
            context.fillStyle = burst.color;
            for (let ray = 0; ray < 8; ray += 1) {
                const angle = ray * TAU / 8;
                const distance = radius + 7;
                context.fillRect(
                    Math.cos(angle) * distance - 1.5,
                    Math.sin(angle) * distance - 1.5,
                    3,
                    3
                );
            }
            context.restore();
        });
    }

    function drawDragTrail() {
        if (!state.dragging || state.dragTrail.length < 2) return;
        context.save();
        context.strokeStyle = "rgba(143, 62, 36, 0.42)";
        context.lineWidth = 2;
        context.setLineDash([5, 7]);
        context.beginPath();
        state.dragTrail.forEach(function (point, index) {
            if (index === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
        });
        context.stroke();
        context.restore();
    }

    function drawShadow(entity) {
        context.save();
        context.translate(entity.x, entity.y + entity.r * 0.75);
        context.scale(1.25, 0.24);
        context.fillStyle = "rgba(16, 43, 54, 0.16)";
        context.beginPath();
        context.arc(0, 0, entity.r, 0, TAU);
        context.fill();
        context.restore();
    }

    function drawEntity(entity) {
        const definition = definitionFor(entity.type);
        drawShadow(entity);
        context.save();
        context.translate(entity.x, entity.y);
        context.rotate(entity.rotation);

        if (entity.type === "water") {
            context.fillStyle = definition.color;
            context.beginPath();
            context.moveTo(0, -entity.r * 1.2);
            context.bezierCurveTo(entity.r * 0.95, -entity.r * 0.2, entity.r * 0.7, entity.r, 0, entity.r);
            context.bezierCurveTo(-entity.r * 0.7, entity.r, -entity.r * 0.95, -entity.r * 0.2, 0, -entity.r * 1.2);
            context.fill();
            context.fillStyle = definition.accent;
            context.beginPath();
            context.arc(-entity.r * 0.3, -entity.r * 0.2, entity.r * 0.2, 0, TAU);
            context.fill();
        } else if (entity.type === "spark") {
            context.shadowColor = "rgba(242, 203, 63, 0.7)";
            context.shadowBlur = 18;
            context.fillStyle = definition.color;
            drawStar(entity.r * 1.3, 8);
            context.fill();
            context.shadowBlur = 0;
            context.fillStyle = "#fff8c7";
            drawStar(entity.r * 0.55, 8);
            context.fill();
        } else if (entity.type === "oil") {
            context.fillStyle = definition.color;
            context.beginPath();
            context.ellipse(0, 0, entity.r * 1.08, entity.r * 0.82, 0.1, 0, TAU);
            context.fill();
            context.fillStyle = definition.accent;
            context.beginPath();
            context.ellipse(-entity.r * 0.28, -entity.r * 0.26, entity.r * 0.28, entity.r * 0.12, -0.2, 0, TAU);
            context.fill();
        } else if (entity.type === "gremlin") {
            context.fillStyle = definition.color;
            context.beginPath();
            context.moveTo(-entity.r * 0.62, -entity.r * 0.45);
            context.lineTo(-entity.r * 1.12, -entity.r * 1.12);
            context.lineTo(-entity.r * 0.25, -entity.r * 0.78);
            context.lineTo(entity.r * 0.25, -entity.r * 0.78);
            context.lineTo(entity.r * 1.12, -entity.r * 1.12);
            context.lineTo(entity.r * 0.62, -entity.r * 0.45);
            context.arc(0, 0, entity.r * 0.82, 0, TAU);
            context.fill();
            context.fillStyle = definition.accent;
            context.beginPath();
            context.arc(-entity.r * 0.3, -entity.r * 0.15, entity.r * 0.11, 0, TAU);
            context.arc(entity.r * 0.3, -entity.r * 0.15, entity.r * 0.11, 0, TAU);
            context.fill();
            context.fillStyle = "#102b36";
            context.beginPath();
            context.arc(-entity.r * 0.3, -entity.r * 0.15, entity.r * 0.045, 0, TAU);
            context.arc(entity.r * 0.3, -entity.r * 0.15, entity.r * 0.045, 0, TAU);
            context.fill();
            context.strokeStyle = "#102b36";
            context.lineWidth = 2;
            context.beginPath();
            context.arc(0, entity.r * 0.18, entity.r * 0.28, 0.15, Math.PI - 0.15);
            context.stroke();
            if (entity.fed > 0) {
                context.fillStyle = "#102b36";
                context.font = "800 10px Trebuchet MS, sans-serif";
                context.fillText("x" + entity.fed, -7, entity.r + 16);
            }
        } else if (entity.type === "snack") {
            context.fillStyle = definition.color;
            drawRoundedRect(-entity.r * 1.08, -entity.r * 0.68, entity.r * 2.16, entity.r * 1.36, 7);
            context.fill();
            context.fillStyle = definition.accent;
            context.fillRect(-entity.r * 0.6, -entity.r * 0.18, entity.r * 0.28, entity.r * 0.15);
            context.fillRect(-entity.r * 0.08, entity.r * 0.12, entity.r * 0.3, entity.r * 0.15);
            context.fillRect(entity.r * 0.35, -entity.r * 0.28, entity.r * 0.22, entity.r * 0.15);
        } else if (entity.type === "fan") {
            context.strokeStyle = definition.color;
            context.lineWidth = 5;
            context.beginPath();
            context.arc(0, 0, entity.r * 0.86, 0, TAU);
            context.stroke();
            context.fillStyle = definition.accent;
            for (let blade = 0; blade < 3; blade += 1) {
                context.save();
                context.rotate(blade * TAU / 3 + state.time * 2);
                context.beginPath();
                context.ellipse(entity.r * 0.34, 0, entity.r * 0.55, entity.r * 0.16, 0, 0, TAU);
                context.fill();
                context.restore();
            }
            context.fillStyle = definition.color;
            context.beginPath();
            context.arc(0, 0, entity.r * 0.18, 0, TAU);
            context.fill();
        } else if (entity.type === "moon") {
            context.fillStyle = definition.color;
            context.beginPath();
            context.arc(0, 0, entity.r, 0, TAU);
            context.fill();
            context.fillStyle = "rgba(16, 43, 54, 0.2)";
            [[-9, -9, 7], [12, -2, 5], [-7, 12, 4], [13, 13, 3]].forEach(function (crater) {
                context.beginPath();
                context.arc(crater[0], crater[1], crater[2], 0, TAU);
                context.fill();
            });
        } else if (entity.type === "confetti") {
            context.fillStyle = ["#e77952", "#f2cb3f", "#4c9a97", "#a967b8"][entity.id % 4];
            context.fillRect(-entity.r, -entity.r * 1.45, entity.r * 2, entity.r * 2.9);
        } else if (entity.type === "steam") {
            context.fillStyle = "rgba(168, 200, 196, 0.78)";
            context.beginPath();
            context.arc(-entity.r * 0.45, 2, entity.r * 0.58, 0, TAU);
            context.arc(entity.r * 0.2, -entity.r * 0.18, entity.r * 0.72, 0, TAU);
            context.arc(entity.r * 0.72, 3, entity.r * 0.48, 0, TAU);
            context.fill();
            context.fillStyle = "rgba(255, 255, 255, 0.52)";
            context.beginPath();
            context.arc(entity.r * 0.02, -entity.r * 0.32, entity.r * 0.23, 0, TAU);
            context.fill();
        } else if (entity.type === "fire") {
            context.shadowColor = "rgba(231, 84, 56, 0.45)";
            context.shadowBlur = 18;
            context.fillStyle = definition.color;
            context.beginPath();
            context.moveTo(0, -entity.r * 1.2);
            context.bezierCurveTo(entity.r * 0.85, -entity.r * 0.4, entity.r * 0.75, entity.r * 0.55, 0, entity.r);
            context.bezierCurveTo(-entity.r * 0.8, entity.r * 0.52, -entity.r * 0.72, -entity.r * 0.28, 0, -entity.r * 1.2);
            context.fill();
            context.shadowBlur = 0;
            context.fillStyle = definition.accent;
            context.beginPath();
            context.arc(0, entity.r * 0.25, entity.r * 0.34, 0, TAU);
            context.fill();
        } else if (entity.type === "bubble") {
            context.strokeStyle = definition.color;
            context.lineWidth = 3;
            context.beginPath();
            context.arc(0, 0, entity.r, 0, TAU);
            context.stroke();
            context.fillStyle = definition.accent;
            context.beginPath();
            context.arc(-entity.r * 0.32, -entity.r * 0.35, entity.r * 0.18, 0, TAU);
            context.fill();
        }

        context.restore();

        if (state.dragging === entity) {
            context.save();
            context.strokeStyle = "rgba(197, 90, 50, 0.8)";
            context.lineWidth = 2;
            context.setLineDash([4, 4]);
            context.beginPath();
            context.arc(entity.x, entity.y, entity.r + 7, 0, TAU);
            context.stroke();
            context.setLineDash([]);
            context.fillStyle = "#8f3e24";
            context.font = "800 10px Trebuchet MS, sans-serif";
            context.fillText(definition.label.toUpperCase(), entity.x - entity.r, entity.y - entity.r - 12);
            context.restore();
        }
    }

    function draw() {
        context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
        context.clearRect(0, 0, WIDTH, HEIGHT);
        drawBackground();
        drawBursts();
        drawDragTrail();
        state.entities.slice().sort(function (first, second) {
            return first.y - second.y;
        }).forEach(drawEntity);
        if (!state.entities.length) {
            context.fillStyle = "rgba(16, 43, 54, 0.48)";
            context.font = "700 18px Georgia, serif";
            context.fillText("Drop something questionable here", 316, 284);
            context.font = "800 10px Trebuchet MS, sans-serif";
            context.fillText("THE FLOOR IS WAITING", 410, 310);
        }
    }

    function resizeCanvas() {
        state.dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = WIDTH * state.dpr;
        canvas.height = HEIGHT * state.dpr;
        draw();
    }

    function updateUi() {
        pauseButton.textContent = state.running ? "Pause lab" : "Resume lab";
        pauseButton.setAttribute("aria-pressed", String(!state.running));
        statusText.textContent = state.running ? "The lab is running." : "The lab is paused.";
        scenarioLabel.textContent = scenarioNames[state.scenario].toUpperCase();
        chaosValue.textContent = pad(state.chaos);
        chaosFill.style.width = clamp(state.chaos, 0, 100) + "%";
        objectCount.textContent = pad(state.entities.length);
        reactionCount.textContent = pad(state.reactions);
        reactionFeed.textContent = state.lastReaction;
        const recipeCount = Object.keys(state.discovered).length;
        discoveryCount.textContent = pad(recipeCount) + " / " + pad(recipeTotal);
        discoveryFill.style.width = (recipeCount / recipeTotal) * 100 + "%";
        discoveryNote.textContent = state.lastDiscovery;
        discoveryNote.classList.toggle("is-new", state.lastDiscovery === "New recipe logged.");
        fullscreenButton.textContent = document.fullscreenElement || state.fullscreenRequested ? "Exit fullscreen" : "Fullscreen";
        document.body.classList.toggle("lab-paused", !state.running);
        document.querySelectorAll("[data-scenario]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.scenario === state.scenario);
        });
    }

    function pointerPosition(event) {
        const bounds = canvas.getBoundingClientRect();
        return {
            x: clamp((event.clientX - bounds.left) * WIDTH / bounds.width, 0, WIDTH),
            y: clamp((event.clientY - bounds.top) * HEIGHT / bounds.height, 0, HEIGHT)
        };
    }

    function entityAt(point) {
        for (let index = state.entities.length - 1; index >= 0; index -= 1) {
            const entity = state.entities[index];
            if (!entity.alive || entity.anchored) continue;
            if (Math.hypot(point.x - entity.x, point.y - entity.y) <= entity.r + 8) return entity;
        }
        return null;
    }

    function releaseDrag() {
        if (!state.dragging) return;
        const droppedType = state.dragging.type;
        const causedReaction = state.reactions > state.dragReactionStart;
        const launchSpeed = Math.hypot(state.dragging.vx, state.dragging.vy);
        state.dragging.dragging = false;
        if (!causedReaction) {
            const verb = launchSpeed > 1.25 ? "launched into the lab" : "dropped into the lab";
            state.lastReaction = definitionFor(droppedType).label + " " + verb + ".";
        }
        state.dragging = null;
        state.pointerId = null;
        state.dragReactionStart = state.reactions;
        state.dragTrail = [];
        canvas.classList.remove("is-dragging");
        updateUi();
        draw();
    }

    canvas.addEventListener("pointerdown", function (event) {
        const point = pointerPosition(event);
        const hit = entityAt(point);
        if (!hit) return;
        state.dragging = hit;
        state.pointerId = event.pointerId;
        state.dragReactionStart = state.reactions;
        state.dragLastX = point.x;
        state.dragLastY = point.y;
        state.dragLastTime = performance.now();
        state.dragTrail = [point];
        hit.dragging = true;
        hit.vx = 0;
        hit.vy = 0;
        canvas.classList.add("is-dragging");
        canvas.setPointerCapture(event.pointerId);
        event.preventDefault();
        draw();
    });

    canvas.addEventListener("pointermove", function (event) {
        if (!state.dragging || state.pointerId !== event.pointerId) return;
        const point = pointerPosition(event);
        const now = performance.now();
        const elapsed = Math.max(8, now - state.dragLastTime);
        const velocityScale = FRAME_MS / elapsed;
        const nextVx = (point.x - state.dragLastX) * velocityScale;
        const nextVy = (point.y - state.dragLastY) * velocityScale;
        state.dragging.x = clamp(point.x, state.dragging.r, WIDTH - state.dragging.r);
        state.dragging.y = clamp(point.y, state.dragging.r, HEIGHT - state.dragging.r);
        state.dragging.vx = clamp(state.dragging.vx * 0.25 + nextVx * 0.75, -12, 12);
        state.dragging.vy = clamp(state.dragging.vy * 0.25 + nextVy * 0.75, -12, 12);
        state.dragLastX = point.x;
        state.dragLastY = point.y;
        state.dragLastTime = now;
        state.dragTrail.push(point);
        if (state.dragTrail.length > 14) state.dragTrail.shift();
        draw();
        event.preventDefault();
    });

    canvas.addEventListener("pointerup", releaseDrag);
    canvas.addEventListener("pointercancel", releaseDrag);

    document.querySelectorAll("[data-element]").forEach(function (button) {
        button.addEventListener("click", function () {
            dropElement(button.dataset.element);
        });
    });

    document.querySelectorAll("[data-scenario]").forEach(function (button) {
        button.addEventListener("click", function () {
            setupScenario(button.dataset.scenario);
        });
    });

    pauseButton.addEventListener("click", function () {
        state.running = !state.running;
        updateUi();
        draw();
    });

    resetButton.addEventListener("click", setupFreePlay);

    clearButton.addEventListener("click", function () {
        clearEntities();
        state.scenario = "free";
        state.lastReaction = "The floor is clear. This is your chance to behave.";
        state.chaos = 0;
        state.reactions = 0;
        updateUi();
        draw();
    });

    async function toggleFullscreen() {
        const fullscreenActive = Boolean(document.fullscreenElement) || state.fullscreenRequested;
        try {
            if (fullscreenActive) {
                state.fullscreenRequested = false;
                if (document.fullscreenElement) await document.exitFullscreen();
            } else if (stage.requestFullscreen) {
                state.fullscreenRequested = true;
                await stage.requestFullscreen();
            }
        } catch (error) {
            state.fullscreenRequested = Boolean(document.fullscreenElement);
            state.lastReaction = "Fullscreen is being dramatic on this browser.";
        } finally {
            updateUi();
            window.setTimeout(resizeCanvas, 40);
        }
    }

    fullscreenButton.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", function () {
        state.fullscreenRequested = Boolean(document.fullscreenElement);
        window.setTimeout(resizeCanvas, 40);
        updateUi();
    });

    document.addEventListener("keydown", function (event) {
        const target = event.target;
        const isTyping = target instanceof HTMLElement &&
            (target.matches("input, textarea, select") || target.isContentEditable);
        if (isTyping) return;
        if (event.key.toLowerCase() === "f") {
            event.preventDefault();
            toggleFullscreen();
        } else if (event.key === " ") {
            event.preventDefault();
            pauseButton.click();
        } else if (event.key.toLowerCase() === "r") {
            event.preventDefault();
            resetButton.click();
        }
    });

    window.render_game_to_text = function () {
        return JSON.stringify({
            coordinateSystem: "origin top-left; x increases right; y increases down; units are lab pixels",
            mode: state.running ? "running" : "paused",
            scenario: state.scenario,
            chaos: Math.round(state.chaos),
            reactions: state.reactions,
            lastReaction: state.lastReaction,
            objectCount: state.entities.length,
            objects: state.entities.slice(0, 28).map(function (entity) {
                return {
                    id: entity.id,
                    type: entity.type,
                    x: Math.round(entity.x),
                    y: Math.round(entity.y),
                    vx: Math.round(entity.vx * 100) / 100,
                    vy: Math.round(entity.vy * 100) / 100,
                    radius: Math.round(entity.r),
                    fed: entity.fed
                };
            })
        });
    };

    window.advanceTime = function (milliseconds) {
        const steps = Math.max(1, Math.min(360, Math.round((milliseconds || 0) / FRAME_MS)));
        for (let step = 0; step < steps; step += 1) update(1);
        draw();
        updateUi();
    };

    window.addEventListener("resize", resizeCanvas);
    setupFreePlay();
    resizeCanvas();

    function frame(now) {
        const frameScale = clamp((now - lastFrame) / FRAME_MS, 0, 2);
        lastFrame = now;
        update(frameScale);
        draw();
        updateUi();
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
})();
