(function () {
    "use strict";

    const canvas = document.getElementById("whiteboard-canvas");
    const canvasWrap = document.getElementById("canvas-wrap");
    const emptyState = document.getElementById("board-empty");
    const textEditor = document.getElementById("text-editor");
    const textForm = document.getElementById("text-form");
    const textInput = document.getElementById("text-input");
    const textCancel = document.getElementById("text-cancel");
    const boardStatus = document.getElementById("board-status");
    const objectCount = document.getElementById("object-count");
    const undoButton = document.getElementById("undo-button");
    const redoButton = document.getElementById("redo-button");
    const exportButton = document.getElementById("export-button");
    const clearButton = document.getElementById("clear-button");
    const strokeColor = document.getElementById("stroke-color");
    const strokeWidth = document.getElementById("stroke-width");
    const strokeOutput = document.getElementById("stroke-output");
    const fillToggle = document.getElementById("fill-toggle");
    const gridToggle = document.getElementById("grid-toggle");
    const context = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    const gridSize = 40;
    const storageKey = "ethan-site-whiteboard-v1";
    const toolNames = {
        select: "Select",
        pen: "Pen",
        line: "Line",
        rectangle: "Box",
        ellipse: "Oval",
        text: "Text",
        eraser: "Eraser"
    };

    let state = loadState();
    let history = [];
    let future = [];
    let drawing = null;
    let textDraft = null;
    let nextId = getNextId();

    function loadState() {
        const fallback = {
            tool: "select",
            color: "#102b36",
            strokeWidth: 4,
            fill: false,
            showGrid: true,
            shapes: [],
            selectedId: null
        };

        try {
            const saved = JSON.parse(window.localStorage.getItem(storageKey) || "null");
            if (!saved || !Array.isArray(saved.shapes)) return fallback;
            return {
                ...fallback,
                ...saved,
                tool: toolNames[saved.tool] ? saved.tool : fallback.tool,
                strokeWidth: clamp(Number(saved.strokeWidth) || fallback.strokeWidth, 1, 12),
                color: typeof saved.color === "string" ? saved.color : fallback.color,
                fill: Boolean(saved.fill),
                showGrid: saved.showGrid !== false,
                shapes: saved.shapes.filter(isValidShape),
                selectedId: null
            };
        } catch (error) {
            return fallback;
        }
    }

    function isValidShape(shape) {
        return shape && typeof shape === "object" && typeof shape.type === "string" && typeof shape.id === "number";
    }

    function getNextId() {
        return state.shapes.reduce(function (largest, shape) {
            return Math.max(largest, Number(shape.id) || 0);
        }, 0) + 1;
    }

    function clamp(value, minimum, maximum) {
        return Math.min(maximum, Math.max(minimum, value));
    }

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function snapshot() {
        return JSON.stringify(state.shapes);
    }

    function commit(before) {
        if (before === snapshot()) return;
        history.push(before);
        if (history.length > 60) history.shift();
        future = [];
        persist();
        render();
    }

    function persist() {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify({
                tool: state.tool,
                color: state.color,
                strokeWidth: state.strokeWidth,
                fill: state.fill,
                showGrid: state.showGrid,
                shapes: state.shapes
            }));
        } catch (error) {
            // The board remains usable if local storage is unavailable.
        }
    }

    function setStatus(message) {
        boardStatus.textContent = message;
    }

    function setTool(tool) {
        state.tool = tool;
        canvas.dataset.tool = tool;
        document.querySelectorAll("[data-tool]").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.tool === tool));
        });
        if (tool !== "text") closeTextEditor();
        setStatus(tool === "select" ? "Select an object to move it." : toolNames[tool] + " ready.");
        canvas.focus({ preventScroll: true });
        render();
    }

    function updateControls() {
        strokeColor.value = state.color;
        strokeWidth.value = String(state.strokeWidth);
        strokeOutput.value = String(state.strokeWidth);
        strokeOutput.textContent = String(state.strokeWidth);
        fillToggle.checked = state.fill;
        gridToggle.setAttribute("aria-pressed", String(state.showGrid));
        undoButton.disabled = history.length === 0;
        redoButton.disabled = future.length === 0;
        objectCount.textContent = state.shapes.length + (state.shapes.length === 1 ? " object" : " objects");
        emptyState.hidden = state.shapes.length > 0 || Boolean(drawing);
    }

    function drawGrid() {
        context.save();
        context.fillStyle = "#fffdf8";
        context.fillRect(0, 0, width, height);
        if (!state.showGrid) {
            context.restore();
            return;
        }

        context.strokeStyle = "rgba(16, 43, 54, 0.075)";
        context.lineWidth = 1;
        context.beginPath();
        for (let x = gridSize; x < width; x += gridSize) {
            context.moveTo(x + 0.5, 0);
            context.lineTo(x + 0.5, height);
        }
        for (let y = gridSize; y < height; y += gridSize) {
            context.moveTo(0, y + 0.5);
            context.lineTo(width, y + 0.5);
        }
        context.stroke();
        context.restore();
    }

    function drawShape(shape, preview) {
        if (!shape) return;
        context.save();
        context.strokeStyle = shape.color || state.color;
        context.fillStyle = toRgba(shape.color || state.color, 0.14);
        context.lineWidth = shape.strokeWidth || state.strokeWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        if (preview) context.globalAlpha = 0.72;

        if (shape.type === "pen") {
            context.beginPath();
            shape.points.forEach(function (point, index) {
                if (index === 0) context.moveTo(point.x, point.y);
                else context.lineTo(point.x, point.y);
            });
            if (shape.points.length === 1) context.lineTo(shape.points[0].x + 0.1, shape.points[0].y + 0.1);
            context.stroke();
        }

        if (shape.type === "line") {
            context.beginPath();
            context.moveTo(shape.x1, shape.y1);
            context.lineTo(shape.x2, shape.y2);
            context.stroke();
        }

        if (shape.type === "rectangle") {
            if (shape.fill) context.fillRect(shape.x, shape.y, shape.w, shape.h);
            context.strokeRect(shape.x, shape.y, shape.w, shape.h);
        }

        if (shape.type === "ellipse") {
            context.beginPath();
            context.ellipse(shape.cx, shape.cy, Math.abs(shape.rx), Math.abs(shape.ry), 0, 0, Math.PI * 2);
            if (shape.fill) context.fill();
            context.stroke();
        }

        if (shape.type === "text") {
            context.font = "700 28px Georgia, Palatino Linotype, serif";
            context.textBaseline = "top";
            context.fillStyle = shape.color || state.color;
            context.fillText(shape.text, shape.x, shape.y);
        }
        context.restore();
    }

    function drawSelection(shape) {
        const bounds = getBounds(shape);
        if (!bounds) return;
        context.save();
        context.strokeStyle = "#c55a32";
        context.lineWidth = 2;
        context.setLineDash([10, 8]);
        context.strokeRect(bounds.x - 12, bounds.y - 12, bounds.w + 24, bounds.h + 24);
        context.restore();
    }

    function render() {
        drawGrid();
        state.shapes.forEach(function (shape) {
            drawShape(shape, false);
        });
        if (drawing && drawing.preview) drawShape(drawing.preview, true);
        if (state.selectedId != null) {
            drawSelection(state.shapes.find(function (shape) { return shape.id === state.selectedId; }));
        }
        updateControls();
    }

    function toRgba(hex, alpha) {
        const value = hex.replace("#", "");
        const normalized = value.length === 3 ? value.split("").map(function (part) { return part + part; }).join("") : value;
        const red = parseInt(normalized.slice(0, 2), 16);
        const green = parseInt(normalized.slice(2, 4), 16);
        const blue = parseInt(normalized.slice(4, 6), 16);
        return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
    }

    function getPoint(event) {
        const bounds = canvas.getBoundingClientRect();
        return {
            x: clamp((event.clientX - bounds.left) * width / bounds.width, 0, width),
            y: clamp((event.clientY - bounds.top) * height / bounds.height, 0, height)
        };
    }

    function makePreview(tool, start, current, points) {
        const common = {
            id: -1,
            color: state.color,
            strokeWidth: state.strokeWidth,
            fill: state.fill
        };
        if (tool === "pen") return { ...common, type: "pen", points: points };
        if (tool === "line") return { ...common, type: "line", x1: start.x, y1: start.y, x2: current.x, y2: current.y };
        if (tool === "rectangle") {
            return { ...common, type: "rectangle", x: Math.min(start.x, current.x), y: Math.min(start.y, current.y), w: Math.abs(current.x - start.x), h: Math.abs(current.y - start.y) };
        }
        if (tool === "ellipse") {
            return { ...common, type: "ellipse", cx: (start.x + current.x) / 2, cy: (start.y + current.y) / 2, rx: Math.abs(current.x - start.x) / 2, ry: Math.abs(current.y - start.y) / 2 };
        }
        return null;
    }

    function finalizePreview(preview) {
        if (!preview) return null;
        const bounds = getBounds(preview);
        if (preview.type !== "pen" && (!bounds || bounds.w < 3 && bounds.h < 3)) return null;
        if (preview.type === "line" && distance(preview.x1, preview.y1, preview.x2, preview.y2) < 3) return null;
        return { ...preview, id: nextId++ };
    }

    function getBounds(shape) {
        if (!shape) return null;
        if (shape.type === "pen") {
            const xs = shape.points.map(function (point) { return point.x; });
            const ys = shape.points.map(function (point) { return point.y; });
            return boundsFromValues(xs, ys);
        }
        if (shape.type === "line") return boundsFromValues([shape.x1, shape.x2], [shape.y1, shape.y2]);
        if (shape.type === "rectangle") return { x: shape.x, y: shape.y, w: shape.w, h: shape.h };
        if (shape.type === "ellipse") return { x: shape.cx - Math.abs(shape.rx), y: shape.cy - Math.abs(shape.ry), w: Math.abs(shape.rx) * 2, h: Math.abs(shape.ry) * 2 };
        if (shape.type === "text") return { x: shape.x, y: shape.y, w: Math.max(120, shape.text.length * 17), h: 34 };
        return null;
    }

    function boundsFromValues(xs, ys) {
        const minX = Math.min.apply(null, xs);
        const maxX = Math.max.apply(null, xs);
        const minY = Math.min.apply(null, ys);
        const maxY = Math.max.apply(null, ys);
        return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
    }

    function hitTest(point) {
        const tolerance = Math.max(14, state.strokeWidth * 2);
        for (let index = state.shapes.length - 1; index >= 0; index -= 1) {
            const shape = state.shapes[index];
            const bounds = getBounds(shape);
            if (!bounds) continue;
            if (shape.type === "line") {
                if (distanceToSegment(point, { x: shape.x1, y: shape.y1 }, { x: shape.x2, y: shape.y2 }) <= tolerance) return shape.id;
            } else if (shape.type === "pen") {
                for (let pointIndex = 1; pointIndex < shape.points.length; pointIndex += 1) {
                    if (distanceToSegment(point, shape.points[pointIndex - 1], shape.points[pointIndex]) <= tolerance) return shape.id;
                }
            } else if (point.x >= bounds.x - tolerance && point.x <= bounds.x + bounds.w + tolerance && point.y >= bounds.y - tolerance && point.y <= bounds.y + bounds.h + tolerance) {
                return shape.id;
            }
        }
        return null;
    }

    function distanceToSegment(point, start, end) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        if (dx === 0 && dy === 0) return distance(point.x, point.y, start.x, start.y);
        const ratio = clamp(((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy), 0, 1);
        return distance(point.x, point.y, start.x + ratio * dx, start.y + ratio * dy);
    }

    function distance(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }

    function moveShape(shape, original, deltaX, deltaY) {
        if (shape.type === "pen") shape.points = original.points.map(function (point) { return { x: point.x + deltaX, y: point.y + deltaY }; });
        if (shape.type === "line") {
            shape.x1 = original.x1 + deltaX;
            shape.y1 = original.y1 + deltaY;
            shape.x2 = original.x2 + deltaX;
            shape.y2 = original.y2 + deltaY;
        }
        if (shape.type === "rectangle") {
            shape.x = original.x + deltaX;
            shape.y = original.y + deltaY;
        }
        if (shape.type === "ellipse") {
            shape.cx = original.cx + deltaX;
            shape.cy = original.cy + deltaY;
        }
        if (shape.type === "text") {
            shape.x = original.x + deltaX;
            shape.y = original.y + deltaY;
        }
    }

    function startDrawing(event) {
        if (event.button !== 0) return;
        const point = getPoint(event);
        canvas.setPointerCapture(event.pointerId);

        if (state.tool === "text") {
            openTextEditor(point);
            return;
        }

        if (state.tool === "eraser") {
            const id = hitTest(point);
            if (id == null) {
                setStatus("Nothing to erase there.");
                return;
            }
            const before = snapshot();
            state.shapes = state.shapes.filter(function (shape) { return shape.id !== id; });
            state.selectedId = null;
            commit(before);
            setStatus("Object erased. Undo is available.");
            return;
        }

        const before = snapshot();
        if (state.tool === "select") {
            const id = hitTest(point);
            state.selectedId = id;
            drawing = id == null ? null : {
                mode: "move",
                id: id,
                start: point,
                original: clone(state.shapes.find(function (shape) { return shape.id === id; })),
                before: before,
                moved: false
            };
            setStatus(id == null ? "Nothing selected. Pick a shape or draw something new." : "Selected object. Drag to move it.");
            render();
            return;
        }

        drawing = {
            mode: "draw",
            tool: state.tool,
            start: point,
            current: point,
            points: [point],
            before: before,
            preview: makePreview(state.tool, point, point, [point])
        };
        render();
    }

    function updateDrawing(event) {
        if (!drawing) return;
        const point = getPoint(event);
        if (drawing.mode === "move") {
            const shape = state.shapes.find(function (item) { return item.id === drawing.id; });
            if (!shape) return;
            const deltaX = point.x - drawing.start.x;
            const deltaY = point.y - drawing.start.y;
            drawing.moved = drawing.moved || Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2;
            moveShape(shape, drawing.original, deltaX, deltaY);
        } else {
            drawing.current = point;
            if (drawing.tool === "pen") drawing.points.push(point);
            drawing.preview = makePreview(drawing.tool, drawing.start, point, drawing.points);
        }
        render();
    }

    function finishDrawing(event) {
        if (!drawing) return;
        if (event && canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
        if (drawing.mode === "move") {
            if (drawing.moved) {
                commit(drawing.before);
                setStatus("Object moved. Select it again or keep sketching.");
            }
            drawing = null;
            render();
            return;
        }

        const shape = finalizePreview(drawing.preview);
        const before = drawing.before;
        drawing = null;
        if (!shape) {
            render();
            return;
        }
        state.shapes.push(shape);
        state.selectedId = shape.id;
        commit(before);
        setStatus(toolNames[shape.type] + " placed. Use Select to move it.");
    }

    function openTextEditor(point) {
        textDraft = { point: point, before: snapshot() };
        textEditor.hidden = false;
        const scale = canvas.clientWidth / width;
        const left = clamp(point.x * scale, 8, Math.max(8, canvasWrap.clientWidth - 280));
        const top = clamp(point.y * scale, 8, Math.max(8, canvasWrap.clientHeight - 120));
        textEditor.style.left = left + "px";
        textEditor.style.top = top + "px";
        textInput.value = "";
        textInput.focus();
        setStatus("Type a note, then place it on the board.");
    }

    function closeTextEditor() {
        textEditor.hidden = true;
        textDraft = null;
    }

    function placeText(event) {
        event.preventDefault();
        if (!textDraft) return;
        const value = textInput.value.trim();
        if (!value) {
            setStatus("A blank note stays in the notebook.");
            closeTextEditor();
            return;
        }
        const shape = {
            id: nextId++,
            type: "text",
            text: value,
            x: textDraft.point.x,
            y: textDraft.point.y,
            color: state.color,
            strokeWidth: state.strokeWidth
        };
        const before = textDraft.before;
        state.shapes.push(shape);
        state.selectedId = shape.id;
        closeTextEditor();
        commit(before);
        setStatus("Note placed. Drag it with Select.");
    }

    function deleteSelected() {
        if (state.selectedId == null) return;
        const before = snapshot();
        state.shapes = state.shapes.filter(function (shape) { return shape.id !== state.selectedId; });
        state.selectedId = null;
        commit(before);
        setStatus("Selection removed. Undo is available.");
    }

    function undo() {
        if (!history.length) return;
        future.push(snapshot());
        state.shapes = JSON.parse(history.pop());
        state.selectedId = null;
        persist();
        setStatus("Undid the last mark.");
        render();
    }

    function redo() {
        if (!future.length) return;
        history.push(snapshot());
        state.shapes = JSON.parse(future.pop());
        state.selectedId = null;
        persist();
        setStatus("Restored the next mark.");
        render();
    }

    function clearBoard() {
        if (!state.shapes.length) {
            setStatus("The board is already clear.");
            return;
        }
        const before = snapshot();
        state.shapes = [];
        state.selectedId = null;
        commit(before);
        setStatus("Board cleared. Undo is available.");
    }

    function exportBoard() {
        const selected = state.selectedId;
        state.selectedId = null;
        render();
        const link = document.createElement("a");
        link.download = "ethan-whiteboard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        state.selectedId = selected;
        render();
        setStatus("PNG export prepared.");
    }

    function handleKeydown(event) {
        const target = event.target;
        const typing = target instanceof HTMLElement && (target.matches("input, textarea, select") || target.isContentEditable);
        if (typing) {
            if (event.key === "Escape") closeTextEditor();
            return;
        }

        const modifier = event.ctrlKey || event.metaKey;
        if (modifier && event.key.toLowerCase() === "z") {
            event.preventDefault();
            if (event.shiftKey) redo();
            else undo();
            return;
        }
        if (modifier && event.key.toLowerCase() === "y") {
            event.preventDefault();
            redo();
            return;
        }
        if (event.key === "Delete" || event.key === "Backspace") {
            event.preventDefault();
            deleteSelected();
            return;
        }
        const shortcuts = { v: "select", p: "pen", l: "line", r: "rectangle", o: "ellipse", t: "text", e: "eraser" };
        const tool = shortcuts[event.key.toLowerCase()];
        if (tool) setTool(tool);
        if (event.key.toLowerCase() === "g") {
            state.showGrid = !state.showGrid;
            persist();
            render();
            setStatus(state.showGrid ? "Guide grid on." : "Guide grid off.");
        }
    }

    document.querySelectorAll("[data-tool]").forEach(function (button) {
        button.addEventListener("click", function () { setTool(button.dataset.tool); });
    });
    canvas.addEventListener("pointerdown", startDrawing);
    canvas.addEventListener("pointermove", updateDrawing);
    canvas.addEventListener("pointerup", finishDrawing);
    canvas.addEventListener("pointercancel", finishDrawing);
    textForm.addEventListener("submit", placeText);
    textCancel.addEventListener("click", function () {
        closeTextEditor();
        setTool("select");
    });
    undoButton.addEventListener("click", undo);
    redoButton.addEventListener("click", redo);
    exportButton.addEventListener("click", exportBoard);
    clearButton.addEventListener("click", clearBoard);
    strokeColor.addEventListener("input", function () {
        state.color = strokeColor.value;
        persist();
        setStatus("Ink color updated.");
    });
    strokeWidth.addEventListener("input", function () {
        state.strokeWidth = clamp(Number(strokeWidth.value), 1, 12);
        persist();
        updateControls();
    });
    fillToggle.addEventListener("change", function () {
        state.fill = fillToggle.checked;
        persist();
        setStatus(state.fill ? "Shape fill on." : "Shape fill off.");
    });
    gridToggle.addEventListener("click", function () {
        state.showGrid = !state.showGrid;
        persist();
        render();
        setStatus(state.showGrid ? "Guide grid on." : "Guide grid off.");
    });
    document.addEventListener("keydown", handleKeydown);

    setTool(state.tool);
    render();
})();
