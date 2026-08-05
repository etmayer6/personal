(function () {
    "use strict";

    const canvas = document.querySelector("#life-canvas");
    const board = document.querySelector("#life-board");
    const context = canvas.getContext("2d");
    const columns = 48;
    const rows = 30;
    const cellCount = columns * rows;
    const grid = new Uint8Array(cellCount);
    const nextGrid = new Uint8Array(cellCount);
    const state = {
        running: false,
        generation: 0,
        speed: 8,
        activePattern: "Custom seed",
        pointerPainting: false,
        interactionMode: "idle",
        paintValue: null,
        lastFrame: 0,
        accumulator: 0,
        hoveredCell: null
    };

    const runButton = document.querySelector("#run-button");
    const stepButton = document.querySelector("#step-button");
    const randomizeButton = document.querySelector("#randomize-button");
    const clearButton = document.querySelector("#clear-button");
    const fullscreenButton = document.querySelector("#fullscreen-button");
    const speedInput = document.querySelector("#speed-input");
    const speedValue = document.querySelector("#speed-value");
    const generationValue = document.querySelector("#generation-value");
    const populationValue = document.querySelector("#population-value");
    const statusValue = document.querySelector("#life-status");
    const coordinateReadout = document.querySelector("#coordinate-readout");
    const patternButtons = Array.from(document.querySelectorAll("[data-pattern]"));

    function indexFor(x, y) {
        return y * columns + x;
    }

    function clearGrid(announce) {
        grid.fill(0);
        state.generation = 0;
        state.running = false;
        state.accumulator = 0;
        state.activePattern = "Empty board";
        state.pointerPainting = false;
        setInteractionMode("idle");
        if (announce) setStatus("Board cleared");
        updateUi();
        render();
    }

    function placePattern(pattern, offsetX, offsetY) {
        pattern.forEach(function (point) {
            const x = point[0] + offsetX;
            const y = point[1] + offsetY;
            if (x >= 0 && x < columns && y >= 0 && y < rows) grid[indexFor(x, y)] = 1;
        });
    }

    function loadPattern(name) {
        grid.fill(0);
        state.generation = 0;
        state.running = false;
        state.accumulator = 0;
        state.activePattern = name === "random" ? "Random soup" : name[0].toUpperCase() + name.slice(1);
        state.pointerPainting = false;
        setInteractionMode("idle");

        if (name === "glider") placePattern([[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]], 8, 7);
        if (name === "blinker") placePattern([[0, 0], [1, 0], [2, 0]], 10, 8);
        if (name === "r-pentomino") placePattern([[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]], 20, 12);
        if (name === "pulsar") {
            const pulsar = [
                [2, 0], [3, 0], [4, 0], [8, 0], [9, 0], [10, 0],
                [0, 2], [5, 2], [7, 2], [12, 2], [0, 3], [5, 3], [7, 3], [12, 3],
                [0, 4], [5, 4], [7, 4], [12, 4], [2, 5], [3, 5], [4, 5], [8, 5], [9, 5], [10, 5],
                [2, 7], [3, 7], [4, 7], [8, 7], [9, 7], [10, 7],
                [0, 8], [5, 8], [7, 8], [12, 8], [0, 9], [5, 9], [7, 9], [12, 9],
                [0, 10], [5, 10], [7, 10], [12, 10], [2, 12], [3, 12], [4, 12], [8, 12], [9, 12], [10, 12]
            ];
            placePattern(pulsar, 16, 8);
        }
        if (name === "random") {
            for (let i = 0; i < cellCount; i += 1) grid[i] = Math.random() > 0.76 ? 1 : 0;
        }

        patternButtons.forEach(function (button) {
            button.classList.toggle("is-selected", button.dataset.pattern === name);
        });
        setStatus(state.activePattern + " loaded");
        updateUi();
        render();
    }

    function randomizeBoard() {
        loadPattern("random");
        state.activePattern = "Randomized board";
        setStatus("Random seed loaded");
        updateUi();
    }

    function countNeighbors(x, y) {
        let neighbors = 0;
        for (let yOffset = -1; yOffset <= 1; yOffset += 1) {
            for (let xOffset = -1; xOffset <= 1; xOffset += 1) {
                if (xOffset === 0 && yOffset === 0) continue;
                const neighborX = (x + xOffset + columns) % columns;
                const neighborY = (y + yOffset + rows) % rows;
                neighbors += grid[indexFor(neighborX, neighborY)];
            }
        }
        return neighbors;
    }

    function stepSimulation() {
        for (let y = 0; y < rows; y += 1) {
            for (let x = 0; x < columns; x += 1) {
                const cellIndex = indexFor(x, y);
                const neighbors = countNeighbors(x, y);
                nextGrid[cellIndex] = grid[cellIndex] ? (neighbors === 2 || neighbors === 3 ? 1 : 0) : (neighbors === 3 ? 1 : 0);
            }
        }
        grid.set(nextGrid);
        state.generation += 1;
        state.activePattern = "Live simulation";
        setStatus(state.running ? "Simulation running" : "Generation stepped");
        updateUi();
        render();
    }

    function countPopulation() {
        let population = 0;
        for (let i = 0; i < cellCount; i += 1) population += grid[i];
        return population;
    }

    function setStatus(message) {
        statusValue.textContent = message;
    }

    function setInteractionMode(mode) {
        state.interactionMode = mode;
        canvas.classList.toggle("is-placing", mode === "placing");
        canvas.classList.toggle("is-erasing", mode === "erasing");
        canvas.dataset.interactionMode = mode;
    }

    function updateUi() {
        const population = countPopulation();
        runButton.textContent = state.running ? "Pause simulation" : "Start simulation";
        runButton.setAttribute("aria-pressed", String(state.running));
        generationValue.textContent = String(state.generation);
        populationValue.textContent = String(population);
        speedValue.textContent = state.speed + " gen/s";
        if (!state.running && state.generation === 0 && population === 0) setStatus("Ready to evolve");
    }

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
        canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        render();
    }

    function render() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (!width || !height) return;
        const cellWidth = width / columns;
        const cellHeight = height / rows;
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#efe5d2";
        context.fillRect(0, 0, width, height);

        context.strokeStyle = "rgba(23, 32, 20, 0.14)";
        context.lineWidth = 1;
        context.beginPath();
        for (let x = 0; x <= columns; x += 1) {
            context.moveTo(Math.round(x * cellWidth) + 0.5, 0);
            context.lineTo(Math.round(x * cellWidth) + 0.5, height);
        }
        for (let y = 0; y <= rows; y += 1) {
            context.moveTo(0, Math.round(y * cellHeight) + 0.5);
            context.lineTo(width, Math.round(y * cellHeight) + 0.5);
        }
        context.stroke();

        for (let y = 0; y < rows; y += 1) {
            for (let x = 0; x < columns; x += 1) {
                if (!grid[indexFor(x, y)]) continue;
                const isHovered = state.hoveredCell && state.hoveredCell.x === x && state.hoveredCell.y === y;
                context.fillStyle = isHovered ? "#f2cb3f" : ((x + y) % 5 === 0 ? "#e75438" : "#173e8f");
                context.fillRect(x * cellWidth + 1.5, y * cellHeight + 1.5, Math.max(1, cellWidth - 3), Math.max(1, cellHeight - 3));
            }
        }

        if (state.hoveredCell && !state.pointerPainting) {
            const x = state.hoveredCell.x;
            const y = state.hoveredCell.y;
            context.fillStyle = grid[indexFor(x, y)] ? "rgba(231, 84, 56, 0.2)" : "rgba(23, 62, 143, 0.12)";
            context.fillRect(x * cellWidth + 1.5, y * cellHeight + 1.5, Math.max(1, cellWidth - 3), Math.max(1, cellHeight - 3));
        }
    }

    function cellFromPointer(event) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(((event.clientX - rect.left) / rect.width) * columns);
        const y = Math.floor(((event.clientY - rect.top) / rect.height) * rows);
        if (x < 0 || x >= columns || y < 0 || y >= rows) return null;
        return { x: x, y: y };
    }

    function paintCell(event) {
        if (!state.pointerPainting) return;
        const cell = cellFromPointer(event);
        if (!cell) return;
        state.hoveredCell = cell;
        const cellIndex = indexFor(cell.x, cell.y);
        grid[cellIndex] = state.paintValue;
        state.activePattern = "Custom seed";
        setStatus(state.interactionMode === "erasing" ? "Erasing cells" : "Placing cells");
        updateUi();
        render();
        coordinateReadout.textContent = "x " + String(cell.x).padStart(2, "0") + " / y " + String(cell.y).padStart(2, "0");
    }

    function updateHoveredCell(event) {
        state.hoveredCell = cellFromPointer(event);
        if (state.hoveredCell) {
            coordinateReadout.textContent = "x " + String(state.hoveredCell.x).padStart(2, "0") + " / y " + String(state.hoveredCell.y).padStart(2, "0");
        }
        render();
    }

    function simulateElapsed(milliseconds) {
        if (!state.running) return;
        state.accumulator += milliseconds;
        const generationLength = 1000 / state.speed;
        let safety = 0;
        while (state.accumulator >= generationLength && safety < 120) {
            state.accumulator -= generationLength;
            stepSimulation();
            safety += 1;
        }
    }

    function animate(timestamp) {
        if (!state.lastFrame) state.lastFrame = timestamp;
        const elapsed = Math.min(100, timestamp - state.lastFrame);
        state.lastFrame = timestamp;
        simulateElapsed(elapsed);
        requestAnimationFrame(animate);
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (board.requestFullscreen) {
            board.requestFullscreen();
        }
    }

    runButton.addEventListener("click", function () {
        state.running = !state.running;
        state.lastFrame = 0;
        setStatus(state.running ? "Simulation running" : "Simulation paused");
        updateUi();
    });
    stepButton.addEventListener("click", function () {
        state.running = false;
        stepSimulation();
    });
    randomizeButton.addEventListener("click", randomizeBoard);
    clearButton.addEventListener("click", function () { clearGrid(true); });
    fullscreenButton.addEventListener("click", toggleFullscreen);
    speedInput.addEventListener("input", function () {
        state.speed = Number(speedInput.value);
        updateUi();
    });
    patternButtons.forEach(function (button) {
        button.addEventListener("click", function () { loadPattern(button.dataset.pattern); });
    });

    canvas.addEventListener("pointerdown", function (event) {
        const cell = cellFromPointer(event);
        if (!cell) return;
        canvas.setPointerCapture(event.pointerId);
        state.pointerPainting = true;
        state.paintValue = grid[indexFor(cell.x, cell.y)] ? 0 : 1;
        setInteractionMode(state.paintValue ? "placing" : "erasing");
        paintCell(event);
    });
    canvas.addEventListener("pointermove", function (event) {
        if (state.pointerPainting) paintCell(event);
        else updateHoveredCell(event);
    });
    canvas.addEventListener("pointerup", function () {
        state.pointerPainting = false;
        setInteractionMode("idle");
        setStatus("Click a cell to edit again");
        render();
    });
    canvas.addEventListener("pointercancel", function () {
        state.pointerPainting = false;
        setInteractionMode("idle");
        setStatus("Click a cell to edit again");
        render();
    });
    canvas.addEventListener("pointerleave", function () {
        if (!state.pointerPainting) {
            state.hoveredCell = null;
            render();
        }
    });
    window.addEventListener("keydown", function (event) {
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
        const key = event.key.toLowerCase();
        if (key === " ") {
            event.preventDefault();
            runButton.click();
        }
        if (key === "n") stepButton.click();
        if (key === "r") randomizeButton.click();
        if (key === "c") clearButton.click();
        if (key === "f") toggleFullscreen();
    });
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("fullscreenchange", resizeCanvas);

    window.render_game_to_text = function () {
        const liveCells = [];
        for (let y = 0; y < rows && liveCells.length < 18; y += 1) {
            for (let x = 0; x < columns && liveCells.length < 18; x += 1) {
                if (grid[indexFor(x, y)]) liveCells.push([x, y]);
            }
        }
        return JSON.stringify({
            mode: state.running ? "running" : "paused",
            generation: state.generation,
            population: countPopulation(),
            board: { columns: columns, rows: rows, coordinateSystem: "origin top-left; x increases right; y increases down" },
            speed: state.speed,
            interactionMode: state.interactionMode,
            activePattern: state.activePattern,
            liveCells: liveCells
        });
    };

    window.advanceTime = function (milliseconds) {
        simulateElapsed(milliseconds);
        render();
    };

    loadPattern("glider");
    resizeCanvas();
    requestAnimationFrame(animate);
}());
