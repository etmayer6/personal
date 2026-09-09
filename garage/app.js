(function () {
    "use strict";

    const storageKey = "gremlin-garage-visualizer-v1";
    const views = {
        "three-quarter": { label: "Front three-quarter", yaw: 18, tilt: 0 },
        side: { label: "Profile / side", yaw: 72, tilt: 0 },
        front: { label: "Front profile", yaw: 0, tilt: 0 },
        rear: { label: "Rear profile", yaw: 180, tilt: 0 }
    };
    const paints = {
        obsidian: { label: "Obsidian", code: "OBSIDIAN", base: "#26333a", hi: "#71858a", shadow: "#0b1114", accent: "#83e0ad" },
        signal: { label: "Signal orange", code: "SIGNAL", base: "#a84729", hi: "#ffb16c", shadow: "#351718", accent: "#ffd08b" },
        mineral: { label: "Mineral mint", code: "MINERAL", base: "#2d746d", hi: "#b4efd0", shadow: "#102b2c", accent: "#d7ffe5" },
        cobalt: { label: "Cobalt blue", code: "COBALT", base: "#2a478f", hi: "#a5def2", shadow: "#10152f", accent: "#8fd8ff" }
    };
    const wheels = {
        street: { label: "Street forged", code: "19 STREET", power: 482, zero: "3.8 s", range: 318, mass: "1,640 kg", ride: "146 mm", status: "Nominal" },
        aero: { label: "Aero disc", code: "19 AERO", power: 482, zero: "3.9 s", range: 336, mass: "1,618 kg", ride: "146 mm", status: "Efficient" },
        track: { label: "Track mesh", code: "20 TRACK", power: 496, zero: "3.5 s", range: 289, mass: "1,674 kg", ride: "140 mm", status: "Track ready" }
    };
    const scenes = {
        golden: { label: "Golden hour", corner: "GOLDEN HOUR" },
        studio: { label: "Studio white", corner: "STUDIO WHITE" },
        night: { label: "Night run", corner: "NIGHT RUN" }
    };
    const defaults = {
        view: "three-quarter", yaw: 18, tilt: 0, paint: "obsidian", wheel: "street",
        scene: "golden", lights: true, grid: true, overlay: false, lower: false, saved: false
    };
    const elements = {
        body: document.body,
        stage: document.getElementById("vehicle-stage"),
        viewportLabel: document.getElementById("viewport-label"),
        orbitReadout: document.getElementById("orbit-readout"),
        orbitRange: document.getElementById("orbit-range"),
        orbitOutput: document.getElementById("orbit-output"),
        orbitButton: document.getElementById("orbit-button"),
        paintLabel: document.getElementById("paint-label"),
        wheelLabel: document.getElementById("wheel-label"),
        sceneLabel: document.getElementById("scene-label"),
        sceneControlLabel: document.getElementById("scene-label-control"),
        buildCode: document.getElementById("build-code"),
        deckCode: document.getElementById("deck-code"),
        buildStatus: document.getElementById("build-status"),
        saveState: document.getElementById("save-state"),
        specGrid: document.getElementById("spec-grid"),
        systemList: document.getElementById("system-list"),
        systemState: document.getElementById("system-state"),
        lightsToggle: document.getElementById("lights-toggle"),
        gridToggle: document.getElementById("grid-toggle"),
        overlayToggle: document.getElementById("overlay-toggle"),
        lowerToggle: document.getElementById("lower-toggle"),
        scanButton: document.getElementById("scan-button"),
        checkLabel: document.getElementById("check-label"),
        saveButton: document.getElementById("save-button"),
        resetButton: document.getElementById("reset-button"),
        toast: document.getElementById("garage-toast")
    };

    let state = loadBuild();
    let orbitTimer = 0;
    let toastTimer = 0;
    let checking = false;
    let dragState = null;

    function copyDefaults() {
        return Object.assign({}, defaults);
    }

    function isValidBuild(build) {
        return build && typeof build === "object" &&
            (views[build.view] || build.view === "custom") &&
            paints[build.paint] && wheels[build.wheel] && scenes[build.scene] &&
            Number.isFinite(Number(build.yaw)) && Number.isFinite(Number(build.tilt));
    }

    function loadBuild() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(storageKey));
            if (isValidBuild(saved)) return Object.assign(copyDefaults(), saved, { saved: true });
        } catch (error) {
            // The visualizer is intentionally usable without storage.
        }
        return copyDefaults();
    }

    function saveBuildToStorage() {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (error) {
            showToast("The build is active for this visit, but browser storage is unavailable.");
        }
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
        });
    }

    function signedAngle(value) {
        const angle = Math.round(Number(value) || 0);
        return (angle > 0 ? "+" : "") + angle + "°";
    }

    function markDirty() {
        state.saved = false;
        elements.saveState.textContent = "Unsaved build";
    }

    function setPressed(selector, key, value) {
        document.querySelectorAll(selector).forEach(function (button) {
            const active = button.dataset[key] === value;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }

    function renderSpecs() {
        const wheel = wheels[state.wheel];
        const specs = [
            ["Power", wheel.power + " hp", "rear bias / 7,100 rpm"],
            ["0–60", wheel.zero, "launch estimate"],
            ["Range", wheel.range + " mi", state.scene === "night" ? "night-run profile" : "touring profile"],
            ["Ride height", state.lower ? "132 mm" : wheel.ride, state.lower ? "low stance / -14 mm" : "road stance"]
        ];
        elements.specGrid.innerHTML = specs.map(function (spec) {
            return "<article class=\"spec-card\"><span>" + escapeHtml(spec[0]) + "</span><strong>" + escapeHtml(spec[1]) + "</strong><small>" + escapeHtml(spec[2]) + "</small></article>";
        }).join("");
    }

    function renderSystems() {
        const systems = [
            ["Aero map", state.wheel === "aero" ? "Efficiency bias" : "Active / balanced", state.wheel === "track" ? "watch" : "nominal"],
            ["Lighting bus", state.lights ? "Headlamps online" : "Daylight only", state.lights ? "nominal" : "watch"],
            ["Chassis geometry", state.lower ? "Low stance / 132 mm" : "Road stance / 146 mm", state.lower ? "watch" : "nominal"],
            ["Brake package", state.wheel === "track" ? "Heat-ready calipers" : "Street ceramic set", "nominal"]
        ];
        const isTuned = systems.some(function (system) { return system[2] === "watch"; });
        elements.systemState.textContent = isTuned ? "Tuned" : wheels[state.wheel].status;
        elements.systemState.style.color = isTuned ? "var(--garage-orange)" : "var(--garage-mint)";
        elements.systemList.innerHTML = systems.map(function (system) {
            const status = system[2] === "watch" ? "Watch" : "Nominal";
            return "<article class=\"finding-card\" data-status=\"" + system[2] + "\"><span>" + status + " / " + escapeHtml(system[0]) + "</span><strong>" + escapeHtml(system[1]) + "</strong><p>Configuration responds inside the viewport.</p></article>";
        }).join("");
    }

    function applyVisual() {
        const paint = paints[state.paint];
        const wheel = wheels[state.wheel];
        const scene = scenes[state.scene];
        const preset = views[state.view];
        elements.stage.dataset.view = state.view;
        elements.stage.dataset.scene = state.scene;
        elements.stage.dataset.wheel = state.wheel;
        elements.stage.classList.toggle("lights-off", !state.lights);
        elements.stage.classList.toggle("grid-off", !state.grid);
        elements.stage.classList.toggle("overlay-on", state.overlay);
        elements.stage.classList.toggle("is-lowered", state.lower);
        elements.stage.style.setProperty("--orbit", state.yaw + "deg");
        elements.stage.style.setProperty("--tilt", state.tilt + "deg");
        elements.stage.style.setProperty("--paint-base", paint.base);
        elements.stage.style.setProperty("--paint-hi", paint.hi);
        elements.stage.style.setProperty("--paint-shadow", paint.shadow);
        elements.stage.style.setProperty("--paint-accent", paint.accent);
        elements.viewportLabel.textContent = preset ? preset.label : "Custom orbit";
        elements.orbitReadout.textContent = "Yaw " + signedAngle(state.yaw);
        elements.orbitRange.value = String(state.yaw);
        elements.orbitOutput.textContent = signedAngle(state.yaw);
        elements.paintLabel.textContent = paint.label;
        elements.wheelLabel.textContent = wheel.label;
        elements.sceneLabel.textContent = scene.corner;
        elements.sceneControlLabel.textContent = scene.label;
        elements.buildCode.textContent = "APX-04 / " + paint.code;
        elements.deckCode.textContent = wheel.code;
        setPressed(".paint-swatch", "paint", state.paint);
        setPressed(".choice-button", "wheel", state.wheel);
        setPressed(".scene-button", "scene", state.scene);
        document.querySelectorAll(".view-tab").forEach(function (button) {
            const active = button.dataset.view === state.view;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
        elements.lightsToggle.checked = state.lights;
        elements.gridToggle.checked = state.grid;
        elements.overlayToggle.checked = state.overlay;
        elements.lowerToggle.checked = state.lower;
        elements.orbitButton.setAttribute("aria-pressed", String(Boolean(orbitTimer)));
        renderSpecs();
        renderSystems();
    }

    function selectOption(kind, value) {
        if (kind === "paint" && paints[value]) state.paint = value;
        if (kind === "wheel" && wheels[value]) state.wheel = value;
        if (kind === "scene" && scenes[value]) state.scene = value;
        markDirty();
        applyVisual();
        showToast(kind.charAt(0).toUpperCase() + kind.slice(1) + " updated. Build readout recalculated.");
    }

    function setView(view) {
        if (!views[view]) return;
        state.view = view;
        state.yaw = views[view].yaw;
        state.tilt = views[view].tilt;
        markDirty();
        applyVisual();
    }

    function updateOrbit(value, dirty) {
        state.view = "custom";
        state.yaw = Math.max(-72, Math.min(180, Number(value) || 0));
        if (dirty) markDirty();
        applyVisual();
    }

    function updateTilt(value) {
        state.view = "custom";
        state.tilt = Math.max(-10, Math.min(12, Number(value) || 0));
        applyVisual();
    }

    function toggleAutoOrbit() {
        if (orbitTimer) {
            window.clearInterval(orbitTimer);
            orbitTimer = 0;
            applyVisual();
            showToast("Auto orbit paused at " + signedAngle(state.yaw) + ".");
            return;
        }
        orbitTimer = window.setInterval(function () {
            state.view = "custom";
            state.yaw += 1.2;
            if (state.yaw > 180) state.yaw = -72;
            applyVisual();
        }, 60);
        applyVisual();
        showToast("Auto orbit engaged. Drag or use the slider to take over.");
    }

    function saveBuild() {
        state.saved = true;
        saveBuildToStorage();
        elements.saveState.textContent = "Saved in this browser";
        showToast("Build saved locally as APX-04.");
    }

    function resetBuild() {
        if (orbitTimer) window.clearInterval(orbitTimer);
        orbitTimer = 0;
        state = copyDefaults();
        try { window.localStorage.removeItem(storageKey); } catch (error) { /* Optional storage. */ }
        elements.buildStatus.textContent = "Ready to configure";
        elements.checkLabel.textContent = "Validate the current build";
        applyVisual();
        showToast("Apex GT returned to the studio baseline.");
    }

    function delay(milliseconds) {
        return new Promise(function (resolve) { window.setTimeout(resolve, milliseconds); });
    }

    async function runConfigurationCheck() {
        if (checking) return;
        checking = true;
        elements.scanButton.disabled = true;
        elements.body.dataset.demoState = "checking";
        const labels = ["Checking geometry…", "Checking lighting…", "Checking thermal load…"];
        for (let index = 0; index < labels.length; index += 1) {
            elements.checkLabel.textContent = labels[index];
            await delay(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 420);
        }
        checking = false;
        elements.body.dataset.demoState = "ready";
        elements.scanButton.disabled = false;
        elements.checkLabel.textContent = "Current configuration verified";
        elements.buildStatus.textContent = "Configuration verified";
        showToast("Build check complete. Current geometry is ready for a drive.");
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        toastTimer = window.setTimeout(function () { elements.toast.classList.remove("is-visible"); }, 3000);
    }

    function startDrag(event) {
        if (event.target.closest("button, input, output")) return;
        dragState = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, yaw: state.yaw, tilt: state.tilt, shift: event.shiftKey };
        elements.stage.setPointerCapture(event.pointerId);
    }

    function moveDrag(event) {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const horizontal = event.clientX - dragState.x;
        const vertical = event.clientY - dragState.y;
        updateOrbit(dragState.yaw + horizontal * 0.45, false);
        if (dragState.shift || event.shiftKey) updateTilt(dragState.tilt - vertical * 0.22);
    }

    function endDrag(event) {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        markDirty();
        dragState = null;
    }

    document.querySelectorAll(".paint-swatch").forEach(function (button) {
        button.addEventListener("click", function () { selectOption("paint", button.dataset.paint); });
    });
    document.querySelectorAll(".choice-button").forEach(function (button) {
        button.addEventListener("click", function () { selectOption("wheel", button.dataset.wheel); });
    });
    document.querySelectorAll(".scene-button").forEach(function (button) {
        button.addEventListener("click", function () { selectOption("scene", button.dataset.scene); });
    });
    document.querySelectorAll(".view-tab").forEach(function (button) {
        button.addEventListener("click", function () { setView(button.dataset.view); });
    });
    elements.orbitRange.addEventListener("input", function () { updateOrbit(elements.orbitRange.value, true); });
    elements.orbitButton.addEventListener("click", toggleAutoOrbit);
    elements.lightsToggle.addEventListener("change", function () { state.lights = elements.lightsToggle.checked; markDirty(); applyVisual(); });
    elements.gridToggle.addEventListener("change", function () { state.grid = elements.gridToggle.checked; markDirty(); applyVisual(); });
    elements.overlayToggle.addEventListener("change", function () { state.overlay = elements.overlayToggle.checked; markDirty(); applyVisual(); });
    elements.lowerToggle.addEventListener("change", function () { state.lower = elements.lowerToggle.checked; markDirty(); applyVisual(); });
    elements.saveButton.addEventListener("click", saveBuild);
    elements.resetButton.addEventListener("click", resetBuild);
    elements.scanButton.addEventListener("click", runConfigurationCheck);
    elements.stage.addEventListener("pointerdown", startDrag);
    elements.stage.addEventListener("pointermove", moveDrag);
    elements.stage.addEventListener("pointerup", endDrag);
    elements.stage.addEventListener("pointercancel", endDrag);
    elements.stage.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") { event.preventDefault(); updateOrbit(state.yaw - 8, true); }
        if (event.key === "ArrowRight") { event.preventDefault(); updateOrbit(state.yaw + 8, true); }
        if (event.key === "ArrowUp") { event.preventDefault(); updateTilt(state.tilt + 2); }
        if (event.key === "ArrowDown") { event.preventDefault(); updateTilt(state.tilt - 2); }
        if (event.key === " ") { event.preventDefault(); toggleAutoOrbit(); }
    });

    window.render_garage_to_text = function () {
        return JSON.stringify({
            view: state.view,
            yaw: Math.round(state.yaw),
            tilt: Math.round(state.tilt),
            paint: state.paint,
            wheel: state.wheel,
            scene: state.scene,
            headlights: state.lights,
            grid: state.grid,
            overlay: state.overlay,
            lowerStance: state.lower,
            autoOrbit: Boolean(orbitTimer),
            checking: checking,
            saved: state.saved,
            visibleFindingCount: elements.systemList.querySelectorAll(".finding-card").length
        });
    };
    window.render_game_to_text = window.render_garage_to_text;
    window.advanceTime = function () {};

    applyVisual();
}());
