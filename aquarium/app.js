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

    const FOOD_TYPES = {
        jellyfish: {
            label: "Jellyfish",
            description: "Soft, floaty, and Momo's favorite.",
            growth: 8,
            hunger: 9,
            mood: 4,
            message: "Momo says: blub blub, thank you."
        },
        krill: {
            label: "Krill",
            description: "Tiny, bright, and a quick energy boost.",
            growth: 6,
            hunger: 12,
            mood: 2,
            message: "Momo chased the krill in a happy little loop."
        },
        seaweed: {
            label: "Sea lettuce",
            description: "A crisp reef snack that lifts Momo's mood.",
            growth: 5,
            hunger: 7,
            mood: 8,
            message: "Momo tucked into the sea lettuce. Very refined."
        }
    };

    const state = {
        mode: "running",
        elapsed: 0,
        growth: 0,
        hunger: 78,
        cleanliness: 86,
        mood: 72,
        feedings: 0,
        foodsTried: {},
        lastFood: "jellyfish",
        foodType: "jellyfish",
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
            targetX: 430,
            targetY: 310,
            velocity: 0,
            tilt: 0,
            eatTimer: 0,
            happyTimer: 0
        }
    };

    const elements = {
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
        foodVarietyValue: document.getElementById("food-variety-value"),
        foodVarietyFill: document.getElementById("food-variety-fill"),
        eventMessage: document.getElementById("event-message"),
        feedButton: document.getElementById("feed-button"),
        cleanButton: document.getElementById("clean-button"),
        playButton: document.getElementById("play-button"),
        fullscreenButton: document.getElementById("fullscreen-button"),
        foodButtons: Array.from(document.querySelectorAll("[data-food]")),
        foodDescription: document.getElementById("food-description")
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

    const reefFriends = [
        { x: 160, y: 206, baseY: 206, scale: 0.7, speed: 8, color: "#7be0cb", phase: 0.3 },
        { x: 760, y: 270, baseY: 270, scale: 0.52, speed: -6, color: "#f2cb3f", phase: 2.1 },
        { x: 590, y: 150, baseY: 150, scale: 0.42, speed: 5, color: "#ef9a92", phase: 4.2 }
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

    function feedFish(x, foodType) {
        if (state.feedCooldown > 0) {
            setMessage("Momo is still chewing that one.", 2);
            return;
        }
        const selectedFoodType = FOOD_TYPES[foodType] ? foodType : state.foodType;
        const food = FOOD_TYPES[selectedFoodType];
        const firstTaste = !state.foodsTried[selectedFoodType];
        const targetX = clamp(typeof x === "number" ? x : 260 + ((state.feedings * 137) % 440), 80, WIDTH - 80);
        state.pellets.push({
            type: selectedFoodType,
            x: targetX,
            y: 68,
            drift: (state.feedings % 2 ? 1 : -1) * 12,
            life: 5,
            seed: state.feedings * 1.7,
            message: food.message
        });
        state.foodsTried[selectedFoodType] = true;
        state.lastFood = selectedFoodType;
        state.hunger = clamp(state.hunger + food.hunger, 0, 100);
        state.mood = clamp(state.mood + food.mood, 0, 100);
        state.growth = clamp(state.growth + food.growth, 0, MAX_GROWTH);
        state.feedings += 1;
        state.feedCooldown = 0.12;
        state.fish.targetX = targetX;
        state.fish.happyTimer = 1.2;
        addBubble(targetX + 12, 88, 0.75);
        if (firstTaste && Object.keys(state.foodsTried).length === Object.keys(FOOD_TYPES).length) {
            setMessage("Momo sampled the full reef menu. Variety bonus!", 5);
        } else {
            setMessage(state.growth >= MAX_GROWTH ? "Momo reached gentle giant status!" : food.message, 4);
        }
    }

    function selectFood(foodType) {
        if (!FOOD_TYPES[foodType]) return;
        state.foodType = foodType;
        const food = FOOD_TYPES[foodType];
        elements.foodButtons.forEach(function (button) {
            const selected = button.dataset.food === foodType;
            button.classList.toggle("is-selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
        elements.foodDescription.textContent = food.description;
        setMessage(food.label + " ready for the tank.", 3);
        renderUI();
    }

    function cleanTank() {
        state.cleanliness = clamp(state.cleanliness + 24, 0, 100);
        state.mood = clamp(state.mood + 5, 0, 100);
        state.fish.happyTimer = 1.4;
        for (let index = 0; index < 4; index += 1) {
            addBubble(250 + index * 126, 480, 1.15);
        }
        setMessage("The water sparkles. Momo approves.", 4);
    }

    function playWithFish() {
        state.mood = clamp(state.mood + 20, 0, 100);
        state.fish.targetX = 150 + ((state.feedings + 2) * 163) % 660;
        state.fish.happyTimer = 3;
        state.fish.targetY = 250 + ((state.feedings * 37) % 110);
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
                state.fish.eatTimer = 0.7;
                state.fish.happyTimer = 2.2;
                setMessage(pellet.message || FOOD_TYPES[pellet.type].message, 3);
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
        const previousX = state.fish.x;
        state.fish.x += (target - state.fish.x) * Math.min(1, delta * 0.8);
        state.fish.velocity = (state.fish.x - previousX) / Math.max(delta, 0.001);
        state.fish.tilt += (clamp(state.fish.velocity * 0.018, -0.16, 0.16) - state.fish.tilt) * Math.min(1, delta * 4);
        const targetY = state.fish.targetY || 310;
        const swimY = 310 + Math.sin(state.fish.phase * 0.65) * 34 + Math.sin(state.fish.phase * 1.4) * 8;
        state.fish.y += (targetY + (swimY - 310) - state.fish.y) * Math.min(1, delta * 1.4);
        state.fish.targetY += (310 - state.fish.targetY) * Math.min(1, delta * 0.45);
        state.fish.eatTimer = Math.max(0, state.fish.eatTimer - delta);
        state.fish.happyTimer = Math.max(0, state.fish.happyTimer - delta);
        if (Math.abs(target - state.fish.x) > 2) {
            state.fish.direction = target >= state.fish.x ? 1 : -1;
        }
        state.fish.x = clamp(state.fish.x, 125, WIDTH - 125);
        state.fish.y = clamp(state.fish.y, 170, 455);
    }

    function updateReefFriends(delta) {
        reefFriends.forEach(function (friend) {
            friend.x += friend.speed * delta;
            friend.y = friend.baseY + Math.sin(state.elapsed * 0.7 + friend.phase) * 12;
            if (friend.x < -80) friend.x = WIDTH + 80;
            if (friend.x > WIDTH + 80) friend.x = -80;
        });
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
        updateReefFriends(delta);
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

    function drawReefFriends() {
        reefFriends.forEach(function (friend) {
            context.save();
            context.translate(friend.x, friend.y);
            context.scale(friend.speed < 0 ? -friend.scale : friend.scale, friend.scale);
            context.globalAlpha = 0.72;
            context.fillStyle = friend.color;
            context.beginPath();
            context.ellipse(0, 0, 19, 9, 0, 0, TAU);
            context.fill();
            context.beginPath();
            context.moveTo(-14, 0);
            context.lineTo(-28, -10);
            context.lineTo(-26, 10);
            context.closePath();
            context.fill();
            context.fillStyle = "#113e49";
            context.beginPath();
            context.arc(10, -3, 2.5, 0, TAU);
            context.fill();
            context.restore();
        });
    }

    function drawPellets() {
        state.pellets.forEach(function (pellet) {
            const foodType = pellet.type || "jellyfish";
            const wobble = Math.sin(state.elapsed * 4 + (pellet.seed || 0));
            context.save();
            context.translate(pellet.x, pellet.y);
            context.shadowBlur = 10;

            if (foodType === "krill") {
                context.rotate(-0.18 + wobble * 0.12);
                context.shadowColor = "rgba(245, 146, 75, 0.8)";
                context.fillStyle = "#f29b52";
                context.beginPath();
                context.ellipse(0, 0, 13, 5, 0, 0, TAU);
                context.fill();
                context.fillStyle = "#ffd36a";
                context.beginPath();
                context.moveTo(-12, 0);
                context.lineTo(-20, -7);
                context.lineTo(-17, 2);
                context.lineTo(-20, 8);
                context.closePath();
                context.fill();
                context.strokeStyle = "#ffe4a0";
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(-2, -5);
                context.lineTo(-2, 5);
                context.moveTo(4, -4);
                context.lineTo(4, 4);
                context.stroke();
                context.fillStyle = "#183e45";
                context.beginPath();
                context.arc(9, -1, 2, 0, TAU);
                context.fill();
            } else if (foodType === "seaweed") {
                context.rotate(wobble * 0.12);
                context.shadowColor = "rgba(123, 224, 203, 0.7)";
                context.strokeStyle = "#7be0cb";
                context.lineWidth = 5;
                context.lineCap = "round";
                context.beginPath();
                context.moveTo(-5, 12);
                context.bezierCurveTo(-15, 4, -12, -5, -4, -13);
                context.bezierCurveTo(2, -5, 0, 4, 8, -6);
                context.stroke();
                context.strokeStyle = "#b4f1a1";
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(5, 13);
                context.bezierCurveTo(14, 4, 11, -4, 5, -12);
                context.stroke();
            } else {
                context.scale(1 + wobble * 0.05, 1 - wobble * 0.05);
                context.shadowColor = "rgba(231, 121, 82, 0.8)";
                context.fillStyle = "#ef8e92";
                context.beginPath();
                context.arc(0, -3, 11, Math.PI, TAU);
                context.lineTo(10, 2);
                context.quadraticCurveTo(0, 8, -10, 2);
                context.closePath();
                context.fill();
                context.strokeStyle = "#ffd1b3";
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(-7, 3);
                context.quadraticCurveTo(-8, 12, -5, 16);
                context.moveTo(0, 4);
                context.quadraticCurveTo(-1, 14, 2, 18);
                context.moveTo(7, 3);
                context.quadraticCurveTo(8, 12, 6, 16);
                context.stroke();
                context.fillStyle = "#fff1ce";
                context.beginPath();
                context.arc(-4, -5, 2, 0, TAU);
                context.arc(4, -5, 2, 0, TAU);
                context.fill();
            }
            context.restore();
        });
    }

    function drawFish() {
        const stage = currentStage();
        const size = stage.size;
        const bob = Math.sin(state.fish.phase * 0.8) * 2;
        const direction = state.fish.direction;
        const happyPulse = state.fish.happyTimer > 0 ? 1 + Math.sin(state.elapsed * 10) * 0.025 : 1;
        context.save();
        context.translate(state.fish.x, state.fish.y + bob);
        context.rotate(state.fish.tilt * direction);
        context.scale(direction * size * happyPulse, size * happyPulse);

        context.fillStyle = "rgba(0, 27, 37, 0.2)";
        context.beginPath();
        context.ellipse(8, 82, 92, 14, 0, 0, TAU);
        context.fill();

        // Broad fins and the lobed clavus make the silhouette read as a sunfish.
        context.fillStyle = stage.accent;
        context.beginPath();
        context.moveTo(-45, -42);
        context.bezierCurveTo(-38, -83, -19, -111, 2, -125);
        context.bezierCurveTo(0, -91, 11, -62, 25, -45);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(-43, 41);
        context.bezierCurveTo(-35, 82, -15, 108, 6, 122);
        context.bezierCurveTo(5, 90, 14, 61, 26, 44);
        context.closePath();
        context.fill();

        context.fillStyle = stage.accent;
        context.beginPath();
        context.moveTo(-63, -49);
        context.bezierCurveTo(-88, -49, -105, -38, -117, -24);
        context.bezierCurveTo(-106, -15, -106, -6, -118, 0);
        context.bezierCurveTo(-106, 7, -106, 16, -117, 25);
        context.bezierCurveTo(-100, 40, -84, 49, -63, 48);
        context.closePath();
        context.fill();
        context.strokeStyle = "rgba(255, 238, 174, 0.42)";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(-80, -32);
        context.quadraticCurveTo(-96, -20, -106, -15);
        context.moveTo(-80, 31);
        context.quadraticCurveTo(-96, 20, -106, 15);
        context.stroke();

        context.fillStyle = stage.accent;
        context.beginPath();
        context.moveTo(-49, 4);
        context.bezierCurveTo(-73, 10, -76, 29, -57, 42);
        context.bezierCurveTo(-40, 34, -30, 23, -28, 13);
        context.closePath();
        context.fill();

        context.fillStyle = stage.color;
        context.beginPath();
        context.ellipse(0, 0, 84, 70, 0, 0, TAU);
        context.fill();
        context.strokeStyle = "rgba(255, 246, 200, 0.7)";
        context.lineWidth = 3;
        context.stroke();

        context.fillStyle = "rgba(255, 240, 173, 0.28)";
        context.beginPath();
        context.ellipse(-10, 18, 58, 42, -0.12, 0, TAU);
        context.fill();

        context.fillStyle = "rgba(255, 240, 173, 0.5)";
        [[-43, -36, 10], [-18, -52, 5], [16, -43, 7], [-49, 0, 5], [-22, 11, 8], [10, 27, 10], [42, 5, 6]].forEach(function (spot) {
            context.beginPath();
            context.arc(spot[0], spot[1], spot[2], 0, TAU);
            context.fill();
        });

        context.strokeStyle = "rgba(119, 66, 68, 0.6)";
        context.lineWidth = 3;
        context.beginPath();
        context.arc(40, 0, 15, -0.9, 0.9);
        context.stroke();

        context.fillStyle = stage.accent;
        context.beginPath();
        context.moveTo(21, 12);
        context.bezierCurveTo(39, 21, 54, 34, 47, 49);
        context.bezierCurveTo(32, 43, 22, 31, 15, 18);
        context.closePath();
        context.fill();

        context.fillStyle = "#183e45";
        context.beginPath();
        context.arc(51, -21, 10, 0, TAU);
        context.fill();
        context.fillStyle = "#fff9db";
        context.beginPath();
        context.arc(54, -24, 3, 0, TAU);
        context.fill();

        const mouthOpen = state.fish.eatTimer > 0 ? 1.8 : 1;
        context.fillStyle = "#f5c45d";
        context.beginPath();
        context.ellipse(67, 14, 9, 6 * mouthOpen, 0, 0, TAU);
        context.fill();
        if (mouthOpen > 1) {
            context.fillStyle = "#7d3d4b";
            context.beginPath();
            context.ellipse(68, 14, 5, 3.5, 0, 0, TAU);
            context.fill();
        }
        context.strokeStyle = "#7d3d4b";
        context.lineWidth = 3;
        context.beginPath();
        context.arc(68, 14, 6, 0.2, Math.PI - 0.2);
        context.stroke();

        context.restore();

        if (state.fish.happyTimer > 0) {
            context.save();
            context.fillStyle = "rgba(242, 203, 63, 0.9)";
            context.beginPath();
            context.arc(state.fish.x + 94, state.fish.y - 82, 4, 0, TAU);
            context.arc(state.fish.x + 108, state.fish.y - 102, 2.5, 0, TAU);
            context.fill();
            context.restore();
        }

        context.save();
        context.fillStyle = "rgba(255, 250, 222, 0.92)";
        context.font = "800 12px Trebuchet MS, sans-serif";
        context.textAlign = "center";
        context.letterSpacing = "2px";
        context.fillText("MOMO", state.fish.x, state.fish.y - 140 * size);
        context.restore();
    }

    function render() {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        drawWater();
        drawReefFriends();
        drawPlants();
        drawBubbles();
        drawPellets();
        drawFish();
    }

    function renderUI() {
        const stage = currentStage();
        const progress = stageProgress();
        const day = String(ageDay()).padStart(2, "0");
        const size = sizeInMeters();

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
        const variety = Object.keys(state.foodsTried).length;
        elements.foodVarietyValue.textContent = variety + " / " + Object.keys(FOOD_TYPES).length;
        elements.foodVarietyFill.style.width = (variety / Object.keys(FOOD_TYPES).length) * 100 + "%";
        elements.eventMessage.textContent = state.message;
        elements.foodDescription.textContent = FOOD_TYPES[state.foodType].description;
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
            selectedFood: state.foodType,
            foodVariety: Object.keys(state.foodsTried).length,
            lastFood: state.lastFood,
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
    elements.foodButtons.forEach(function (button) {
        button.addEventListener("click", function () { selectFood(button.dataset.food); });
    });
    canvas.addEventListener("pointerdown", function (event) {
        const point = pointerPosition(event);
        const nearFish = Math.hypot(point.x - state.fish.x, point.y - state.fish.y) < 125;
        if (nearFish) playWithFish();
        else feedFish(point.x);
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
