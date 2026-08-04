(function () {
    "use strict";

    const canvas = document.getElementById("aquarium-canvas");
    const context = canvas.getContext("2d");
    const board = document.getElementById("aquarium-board");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const MAX_GROWTH = 260;
    const TAU = Math.PI * 2;

    const STAGES = [
        { name: "Tiny pancake", threshold: 0, size: 0.62, color: "#f7c94a", accent: "#e77952", title: "Tiny fins, big plans." },
        { name: "Snack-sized sunfish", threshold: 32, size: 0.78, color: "#f4b84e", accent: "#ef8e57", title: "Momo found a rhythm." },
        { name: "Reef regular", threshold: 85, size: 0.96, color: "#e5a34c", accent: "#db7253", title: "A familiar face in the reef." },
        { name: "Ocean pancake", threshold: 160, size: 1.16, color: "#d98d4c", accent: "#c85f57", title: "Momo is getting enormous." },
        { name: "Gentle giant", threshold: MAX_GROWTH, size: 1.34, color: "#c97b50", accent: "#b84d5c", title: "The tank has a legend." }
    ];

    const state = {
        mode: "running",
        elapsed: 0,
        growth: 0,
        hunger: 78,
        cleanliness: 86,
        mood: 72,
        feedings: 0,
        pellets: [],
        bubbles: [],
        message: "Momo is floating peacefully.",
        messageTimer: 0,
        eventTimer: 0,
        feedCooldown: 0,
        fish: {
            x: 430,
            y: 315,
            phase: 0,
            direction: 1,
            targetX: 430
        }
    };

    const elements = {
        tankStatus: document.getElementById("tank-status"),
        tankDay: document.getElementById("tank-day"),
        fishName: document.getElementById("fish-name"),
        fishStage: document.getElementById("fish-stage"),
        sizeValue: document.getElementById("size-value"),
        ageValue: document.getElementById("age-value"),
        moodValue: document.getElementById("mood-value"),
        hungerValue: document.getElementById("hunger-value"),
        hungerFill: document.getElementById("hunger-fill"),
        cleanlinessValue: document.getElementById("cleanliness-value"),
        cleanlinessFill: document.getElementById("cleanliness-fill"),
        growthHeading: document.getElementById("growth-heading"),
        growthValue: document.getElementById("growth-value"),
        growthTrack: document.querySelector(".growth-track"),
        growthFill: document.getElementById("growth-fill"),
        eventMessage: document.getElementById("event-message"),
        feedButton: document.getElementById("feed-button"),
        cleanButton: document.getElementById("clean-button"),
        playButton: document.getElementById("play-button"),
        fullscreenButton: document.getElementById("fullscreen-button")
    };

    const plants = [
        { x: 54, height: 138, color: "#176b68", sway: 0.5 },
        { x: 112, height: 92, color: "#27867a", sway: 1.3 },
        { x: 188, height: 166, color: "#0f5d62", sway: 2.2 },
        { x: 774, height: 112, color: "#1c746f", sway: 0.8 },
        { x: 846, height: 174, color: "#0e5c66", sway: 1.8 },
        { x: 918, height: 125, color: "#298479", sway: 2.6 }
    ];

    const backgroundBubbles = [
        { x: 86, y: 176, r: 5, speed: 0.7, phase: 0.2 },
        { x: 172, y: 278, r: 3, speed: 0.9, phase: 2.4 },
        { x: 268, y: 136, r: 4, speed: 0.6, phase: 1.5 },
        { x: 694, y: 220, r: 4, speed: 0.8, phase: 0.8 },
        { x: 838, y: 148, r: 3, speed: 0.9, phase: 2.8 },
        { x: 902, y: 292, r: 5, speed: 0.5, phase: 1.1 }
    ];

    let lastTimestamp = performance.now();

    function clamp(value, minimum, maximum) {
        return Math.max(minimum, Math.min(maximum, value));
    }

    function currentStage() {
        let stage = STAGES[0];
        STAGES.forEach(function (candidate) {
            if (state.growth >= candidate.threshold) {
                stage = candidate;
            }
        });
        return stage;
    }

    function stageIndex() {
        return STAGES.indexOf(currentStage());
    }

    function stageProgress() {
        const index = stageIndex();
        const current = STAGES[index];
        const next = STAGES[index + 1];
        if (!next) {
            return 100;
        }
        return clamp(((state.growth - current.threshold) / (next.threshold - current.threshold)) * 100, 0, 100);
    }

    function sizeInMeters() {
        return 0.42 + (state.growth / MAX_GROWTH) * 1.38;
    }

    function moodLabel() {
        if (state.mood >= 82) return "Delighted";
        if (state.mood >= 60) return "Curious";
        if (state.mood >= 35) return "Sleepy";
        return "Gloomy";
    }

    function ageDay() {
        return 1 + Math.floor(state.elapsed / 45);
    }

    function setMessage(message, duration) {
        state.message = message;
        state.messageTimer = duration || 5;
    }

    function addBubble(x, y, scale) {
        state.bubbles.push({
            x: x,
            y: y,
            r: (2 + (state.bubbles.length % 4)) * (scale || 1),
            speed: 18 + (state.bubbles.length % 5) * 4,
            life: 5
        });
    }

    function feedFish(x) {
        if (state.feedCooldown > 0) {
            setMessage("Momo is still chewing that one.", 2);
            return;
        }
        const targetX = clamp(typeof x === "number" ? x : 260 + ((state.feedings * 137) % 440), 80, WIDTH - 80);
        state.pellets.push({ x: targetX, y: 68, drift: (state.feedings % 2 ? 1 : -1) * 12, life: 5 });
        state.hunger = clamp(state.hunger + 9, 0, 100);
        state.mood = clamp(state.mood + 4, 0, 100);
        state.growth = clamp(state.growth + 8, 0, MAX_GROWTH);
        state.feedings += 1;
        state.feedCooldown = 0.12;
        addBubble(targetX + 12, 88, 0.75);
        setMessage(state.growth >= MAX_GROWTH ? "Momo reached gentle giant status!" : "Snack away. Momo got a little bigger.", 4);
    }

    function cleanTank() {
        state.cleanliness = clamp(state.cleanliness + 24, 0, 100);
        state.mood = clamp(state.mood + 5, 0, 100);
        for (let index = 0; index < 4; index += 1) {
            addBubble(250 + index * 126, 480, 1.15);
        }
        setMessage("The water sparkles. Momo approves.", 4);
    }

    function playWithFish() {
        state.mood = clamp(state.mood + 20, 0, 100);
        state.fish.targetX = 150 + ((state.feedings + 2) * 163) % 660;
        addBubble(state.fish.x, state.fish.y + 40, 1.1);
        setMessage("Momo did a very slow zoomie.", 4);
    }

    function randomEvent() {
        const events = [
            "A shy shrimp waved from the coral.",
            "A sunbeam found the tank. Momo is glowing.",
            "Momo discovered a very interesting pebble.",
            "The reef garden swayed like it knew a secret.",
            "Momo made a bubble the size of a marble."
        ];
        setMessage(events[Math.floor(state.elapsed) % events.length], 5);
        state.eventTimer = 0;
    }

    function updatePellets(delta) {
        state.pellets.forEach(function (pellet) {
            pellet.y += 72 * delta;
            pellet.x += Math.sin(state.elapsed * 2 + pellet.y * 0.02) * pellet.drift * delta;
            pellet.life -= delta;
            const nearFish = Math.abs(pellet.x - state.fish.x) < 70 && Math.abs(pellet.y - state.fish.y) < 54;
            if (nearFish) {
                pellet.life = -1;
                addBubble(pellet.x, pellet.y, 0.7);
                setMessage("Momo says: blub blub, thank you.", 3);
            }
        });
        state.pellets = state.pellets.filter(function (pellet) { return pellet.life > 0 && pellet.y < HEIGHT - 55; });
    }

    function updateBubbles(delta) {
        backgroundBubbles.forEach(function (bubble) {
            bubble.y -= bubble.speed * delta;
            if (bubble.y < 64) {
                bubble.y = HEIGHT - 75;
            }
        });
        state.bubbles.forEach(function (bubble) {
            bubble.y -= bubble.speed * delta;
            bubble.x += Math.sin(state.elapsed * 2 + bubble.y * 0.03) * 4 * delta;
            bubble.life -= delta;
        });
        state.bubbles = state.bubbles.filter(function (bubble) { return bubble.life > 0 && bubble.y > 50; });
    }

    function updateFish(delta) {
        state.fish.phase += delta;
        const driftTarget = 450 + Math.sin(state.elapsed * 0.22) * 230;
        const target = state.pellets.length ? state.pellets[0].x : state.fish.targetX * 0.35 + driftTarget * 0.65;
        state.fish.x += (target - state.fish.x) * Math.min(1, delta * 0.8);
        state.fish.y = 310 + Math.sin(state.fish.phase * 0.65) * 34 + Math.sin(state.fish.phase * 1.4) * 8;
        if (Math.abs(target - state.fish.x) > 2) {
            state.fish.direction = target >= state.fish.x ? 1 : -1;
        }
        state.fish.x = clamp(state.fish.x, 125, WIDTH - 125);
    }

    function update(delta) {
        if (state.mode !== "running") {
            return;
        }
        state.elapsed += delta;
        state.hunger = clamp(state.hunger - delta * 0.075, 0, 100);
        state.cleanliness = clamp(state.cleanliness - delta * 0.018, 0, 100);
        state.mood = clamp(state.mood - delta * 0.01 + (state.cleanliness > 70 ? delta * 0.008 : 0), 0, 100);
        state.feedCooldown = Math.max(0, state.feedCooldown - delta);
        state.messageTimer = Math.max(0, state.messageTimer - delta);
        state.eventTimer += delta;

        if (state.messageTimer === 0) {
            if (state.hunger < 28) {
                state.message = "Momo is hungry. A snack would help.";
            } else if (state.cleanliness < 32) {
                state.message = "The water is getting cloudy. Time for a clean.";
            } else if (state.mood < 30) {
                state.message = "Momo looks a little gloomy. Play with the fish.";
            } else {
                state.message = currentStage().title;
            }
        }
        if (state.eventTimer >= 18) {
            randomEvent();
        }
        updateFish(delta);
        updatePellets(delta);
        updateBubbles(delta);
    }

    function drawWater() {
        const gradient = context.createLinearGradient(0, 0, 0, HEIGHT);
        gradient.addColorStop(0, "#0c5362");
        gradient.addColorStop(0.48, "#0a6570");
        gradient.addColorStop(1, "#063a4c");
        context.fillStyle = gradient;
        context.fillRect(0, 0, WIDTH, HEIGHT);

        context.save();
        context.globalAlpha = 0.12;
        context.strokeStyle = "#d2fff0";
        context.lineWidth = 2;
        for (let index = 0; index < 8; index += 1) {
            const y = 80 + index * 68;
            context.beginPath();
            for (let x = -20; x < WIDTH + 40; x += 20) {
                const wave = y + Math.sin(state.elapsed * 0.34 + x * 0.012 + index) * 7;
                if (x === -20) context.moveTo(x, wave);
                else context.lineTo(x, wave);
            }
            context.stroke();
        }
        context.restore();

        context.save();
        context.globalAlpha = 0.08;
        context.fillStyle = "#fff3b5";
        for (let index = 0; index < 5; index += 1) {
            const x = 90 + index * 210;
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x + 100, 0);
            context.lineTo(x + 250, HEIGHT);
            context.lineTo(x + 125, HEIGHT);
            context.closePath();
            context.fill();
        }
        context.restore();
    }

    function drawPlants() {
        plants.forEach(function (plant) {
            context.save();
            context.strokeStyle = plant.color;
            context.lineWidth = 10;
            context.lineCap = "round";
            context.beginPath();
            context.moveTo(plant.x, HEIGHT - 48);
            context.quadraticCurveTo(plant.x - 17 + Math.sin(state.elapsed * 0.5 + plant.sway) * 11, HEIGHT - plant.height * 0.55, plant.x + Math.sin(state.elapsed * 0.5 + plant.sway) * 9, HEIGHT - plant.height);
            context.stroke();
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(plant.x + 3, HEIGHT - 70);
            context.quadraticCurveTo(plant.x + 23, HEIGHT - 112, plant.x + 29, HEIGHT - 140);
            context.stroke();
            context.restore();
        });

        context.fillStyle = "#b49a66";
        context.fillRect(0, HEIGHT - 47, WIDTH, 47);
        context.fillStyle = "#ddc783";
        for (let index = 0; index < 58; index += 1) {
            const x = (index * 83) % WIDTH;
            const y = HEIGHT - 39 + ((index * 17) % 30);
            context.beginPath();
            context.arc(x, y, 2 + (index % 3), 0, TAU);
            context.fill();
        }
    }

    function drawBubbles() {
        context.save();
        context.lineWidth = 2;
        backgroundBubbles.concat(state.bubbles).forEach(function (bubble) {
            context.globalAlpha = bubble.life ? clamp(bubble.life / 3, 0.15, 0.78) : 0.38;
            context.strokeStyle = "#b7f5df";
            context.beginPath();
            context.arc(bubble.x, bubble.y, bubble.r, 0, TAU);
            context.stroke();
        });
        context.restore();
    }

    function drawPellets() {
        state.pellets.forEach(function (pellet) {
            context.save();
            context.fillStyle = "#e77952";
            context.shadowColor = "rgba(231, 121, 82, 0.8)";
            context.shadowBlur = 10;
            context.beginPath();
            context.arc(pellet.x, pellet.y, 8, 0, TAU);
            context.fill();
            context.restore();
        });
    }

    function drawFish() {
        const stage = currentStage();
        const size = stage.size;
        const bob = Math.sin(state.fish.phase * 0.8) * 2;
        const direction = state.fish.direction;
        context.save();
        context.translate(state.fish.x, state.fish.y + bob);
        context.scale(direction * size, size);

        context.fillStyle = "rgba(0, 27, 37, 0.2)";
        context.beginPath();
        context.ellipse(4, 82, 90, 14, 0, 0, TAU);
        context.fill();

        context.fillStyle = stage.accent;
        context.beginPath();
        context.moveTo(-24, -58);
        context.lineTo(-3, -112);
        context.lineTo(20, -57);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(-24, 58);
        context.lineTo(-3, 110);
        context.lineTo(20, 57);
        context.closePath();
        context.fill();

        context.fillStyle = "#d88055";
        context.beginPath();
        context.moveTo(69, -28);
        context.lineTo(109, 0);
        context.lineTo(69, 28);
        context.closePath();
        context.fill();

        context.fillStyle = stage.color;
        context.beginPath();
        context.ellipse(0, 0, 82, 68, 0, 0, TAU);
        context.fill();
        context.strokeStyle = "rgba(255, 246, 200, 0.7)";
        context.lineWidth = 3;
        context.stroke();

        context.fillStyle = "rgba(255, 240, 173, 0.5)";
        [[-35, -28, 9], [-2, -42, 6], [-42, 16, 6], [24, 25, 10], [48, -6, 5]].forEach(function (spot) {
            context.beginPath();
            context.arc(spot[0], spot[1], spot[2], 0, TAU);
            context.fill();
        });

        context.fillStyle = "#183e45";
        context.beginPath();
        context.arc(48, -17, 10, 0, TAU);
        context.fill();
        context.fillStyle = "#fff9db";
        context.beginPath();
        context.arc(51, -20, 3, 0, TAU);
        context.fill();

        context.strokeStyle = "#8d3f45";
        context.lineWidth = 4;
        context.beginPath();
        context.arc(46, 12, 11, 0.15, Math.PI - 0.15);
        context.stroke();

        context.restore();

        context.save();
        context.fillStyle = "rgba(255, 250, 222, 0.92)";
        context.font = "800 12px Trebuchet MS, sans-serif";
        context.textAlign = "center";
        context.letterSpacing = "2px";
        context.fillText("MOMO", state.fish.x, state.fish.y - 116 * size);
        context.restore();
    }

    function drawTankLabel() {
        const stage = currentStage();
        context.save();
        context.fillStyle = "rgba(246, 241, 230, 0.82)";
        context.font = "800 12px Trebuchet MS, sans-serif";
        context.fillText("STAGE " + String(stageIndex() + 1).padStart(2, "0") + " / " + stage.name.toUpperCase(), 24, 42);
        context.fillStyle = "rgba(246, 241, 230, 0.55)";
        context.font = "12px Trebuchet MS, sans-serif";
        context.fillText("Feed the fish. Grow the legend.", 24, 61);
        context.restore();
    }

    function render() {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        drawWater();
        drawPlants();
        drawBubbles();
        drawPellets();
        drawFish();
        drawTankLabel();
    }

    function renderUI() {
        const stage = currentStage();
        const progress = stageProgress();
        const day = String(ageDay()).padStart(2, "0");
        const size = sizeInMeters();
        const waterStatus = state.cleanliness < 32 ? "Water cloudy" : state.hunger < 28 ? "Momo hungry" : "Water calm";

        elements.tankStatus.textContent = waterStatus;
        elements.tankDay.textContent = "Day " + day;
        elements.fishName.textContent = "Momo";
        elements.fishStage.textContent = stage.name;
        elements.sizeValue.textContent = size.toFixed(1) + " m";
        elements.ageValue.textContent = "Day " + day;
        elements.moodValue.textContent = moodLabel();
        elements.hungerValue.textContent = Math.round(state.hunger) + "%";
        elements.hungerFill.style.width = state.hunger + "%";
        elements.hungerFill.style.backgroundColor = state.hunger < 30 ? "#e77952" : "#f2cb3f";
        elements.cleanlinessValue.textContent = Math.round(state.cleanliness) + "%";
        elements.cleanlinessFill.style.width = state.cleanliness + "%";
        elements.cleanlinessFill.style.backgroundColor = state.cleanliness < 30 ? "#e77952" : "#7be0cb";
        elements.growthHeading.textContent = stage.title;
        elements.growthValue.textContent = Math.round(progress) + "%";
        elements.growthFill.style.width = progress + "%";
        elements.growthTrack.setAttribute("aria-valuenow", String(Math.round(progress)));
        elements.eventMessage.textContent = state.message;
    }

    function pointerPosition(event) {
        const bounds = canvas.getBoundingClientRect();
        return {
            x: ((event.clientX - bounds.left) / bounds.width) * WIDTH,
            y: ((event.clientY - bounds.top) / bounds.height) * HEIGHT
        };
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (board.requestFullscreen) {
            board.requestFullscreen();
        }
    }

    function advanceTime(milliseconds) {
        const steps = Math.max(1, Math.round(milliseconds / (1000 / 60)));
        for (let index = 0; index < steps; index += 1) {
            update(1 / 60);
        }
        renderUI();
        render();
    }

    function renderGameToText() {
        const stage = currentStage();
        return JSON.stringify({
            mode: state.mode,
            fish: {
                name: "Momo",
                stage: stage.name,
                stageIndex: stageIndex(),
                x: Math.round(state.fish.x),
                y: Math.round(state.fish.y),
                sizeMeters: Number(sizeInMeters().toFixed(2)),
                hunger: Math.round(state.hunger),
                cleanliness: Math.round(state.cleanliness),
                mood: Math.round(state.mood)
            },
            growth: {
                points: Math.round(state.growth),
                progress: Math.round(stageProgress()),
                max: MAX_GROWTH
            },
            pellets: state.pellets.length,
            day: ageDay(),
            message: state.message,
            coordinateSystem: "origin top-left; x increases right; y increases down",
            controls: "Space feed, C clean, P play, F fullscreen, click water to feed"
        });
    }

    elements.feedButton.addEventListener("click", function () { feedFish(); });
    elements.cleanButton.addEventListener("click", cleanTank);
    elements.playButton.addEventListener("click", playWithFish);
    elements.fullscreenButton.addEventListener("click", toggleFullscreen);
    canvas.addEventListener("pointerdown", function (event) {
        const point = pointerPosition(event);
        feedFish(point.x);
        canvas.focus();
    });
    window.addEventListener("keydown", function (event) {
        if (event.target && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
        if (event.key === " ") {
            event.preventDefault();
            feedFish();
        } else if (event.key.toLowerCase() === "c") {
            cleanTank();
        } else if (event.key.toLowerCase() === "p") {
            playWithFish();
        } else if (event.key.toLowerCase() === "f") {
            toggleFullscreen();
        }
    });

    window.render_game_to_text = renderGameToText;
    window.advanceTime = advanceTime;

    function loop(timestamp) {
        const delta = Math.min(0.1, Math.max(0, (timestamp - lastTimestamp) / 1000));
        lastTimestamp = timestamp;
        update(delta);
        renderUI();
        render();
        window.requestAnimationFrame(loop);
    }

    renderUI();
    render();
    window.requestAnimationFrame(loop);
}());
