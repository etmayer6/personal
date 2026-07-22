(function () {
    "use strict";

    const HUNT_KEY = "ethan-site-hunt-progress";
    const UNLOCK_KEY = "ethan-site-night-shift-unlocked";
    const NIGHT_MODE_KEY = "ethan-site-night-shift";
    const VISIT_KEY = "ethan-site-visit-log";
    const CERT_KEY = "ethan-site-night-shift-certified";
    const REQUIRED_MARKS = 5;
    const SEQUENCE = ["comms", "nav", "test"];
    const SYSTEM_LABELS = {
        comms: "COMMS",
        nav: "NAV",
        test: "TEST"
    };

    const gate = document.getElementById("access-gate");
    const controlRoom = document.getElementById("control-room");
    const canvas = document.getElementById("systems-canvas");
    const context = canvas.getContext("2d");
    const statusText = document.getElementById("diagnostic-status");
    const attemptCount = document.getElementById("attempt-count");
    const facilityState = document.getElementById("facility-state");
    const badge = document.getElementById("operator-badge");
    const modeToggle = document.getElementById("night-mode-toggle");
    const nightHomeLink = document.getElementById("night-home-link");
    const breakerButtons = Array.from(document.querySelectorAll("[data-system]"));

    const state = {
        access: false,
        mode: "locked",
        powered: [],
        fault: null,
        trips: 0,
        certified: readBoolean(CERT_KEY),
        nightMode: readBoolean(NIGHT_MODE_KEY)
    };

    function storageGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSet(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            // The demo remains usable for the current visit if storage is unavailable.
        }
    }

    function readBoolean(key) {
        return storageGet(key) === "true";
    }

    function getHuntProgress() {
        const value = Number(storageGet(HUNT_KEY));
        return Number.isFinite(value) ? Math.max(0, Math.min(REQUIRED_MARKS, value)) : 0;
    }

    function unlockPage() {
        const progress = getHuntProgress();
        const unlocked = readBoolean(UNLOCK_KEY) || progress >= REQUIRED_MARKS;
        state.access = unlocked;

        if (!unlocked) {
            gate.hidden = false;
            controlRoom.hidden = true;
            return;
        }

        storageSet(UNLOCK_KEY, "true");
        gate.hidden = true;
        controlRoom.hidden = false;
        document.getElementById("marks-count").textContent = REQUIRED_MARKS + " / " + REQUIRED_MARKS;

        if (state.certified) {
            state.mode = "complete";
            state.powered = SEQUENCE.slice();
            statusText.textContent = "All buses stable. Operator certification remains valid.";
        } else {
            state.mode = "active";
        }

        renderShiftReport(progress);
        updateClock();
        window.setInterval(updateClock, 30000);
        render();
    }

    function updateClock() {
        const clock = document.getElementById("shift-clock");
        if (!clock) return;
        clock.textContent = new Intl.DateTimeFormat([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }).format(new Date());
    }

    function readVisits() {
        const fallback = [
            { route: "home", label: "Home" },
            { route: "projects", label: "Projects" },
            { route: "photos", label: "Photos" },
            { route: "games", label: "Games" },
            { route: "flight-sim", label: "Flight Sim" }
        ];
        const stored = storageGet(VISIT_KEY);
        if (!stored) return fallback;
        try {
            const visits = JSON.parse(stored);
            return Array.isArray(visits) && visits.length ? visits.slice(-8) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function renderShiftReport(progress) {
        const visits = readVisits();
        const list = document.getElementById("visited-stations");
        list.replaceChildren();
        visits.forEach(function (visit) {
            const item = document.createElement("li");
            item.textContent = visit.label || visit.route || "Unknown station";
            list.appendChild(item);
        });
        document.getElementById("shift-summary").textContent =
            Math.max(progress, REQUIRED_MARKS) + " marks recovered and " + visits.length +
            " recent stations logged. No account or network connection required.";
    }

    function handleBreaker(system) {
        if (!state.access || state.mode === "complete") return;
        if (state.powered.includes(system)) {
            statusText.textContent = SYSTEM_LABELS[system] + " is already stable. Continue down the dependency chain.";
            return;
        }

        const expected = SEQUENCE[state.powered.length];
        if (system !== expected) {
            state.trips += 1;
            state.mode = "tripped";
            state.fault = system;
            state.powered = [];
            statusText.textContent = "Bus tripped. COMMS must feed NAV, and NAV must lock before TEST starts.";
            render();
            return;
        }

        state.mode = "active";
        state.fault = null;
        state.powered.push(system);

        if (state.powered.length === SEQUENCE.length) {
            state.mode = "complete";
            state.certified = true;
            storageSet(CERT_KEY, "true");
            statusText.textContent = "Test floor online. Gremlin Systems Operator certification issued.";
        } else {
            const next = SYSTEM_LABELS[SEQUENCE[state.powered.length]];
            statusText.textContent = SYSTEM_LABELS[system] + " stable. " + next + " is ready for power.";
        }
        render();
    }

    function resetDiagnostic() {
        state.mode = "active";
        state.powered = [];
        state.fault = null;
        state.trips = 0;
        statusText.textContent = state.certified
            ? "Panel reset for replay. Your operator certification remains valid."
            : "Panel reset. Choose the first system that does not depend on another bus.";
        render();
    }

    function toggleNightMode() {
        if (!state.certified) return;
        state.nightMode = !state.nightMode;
        storageSet(NIGHT_MODE_KEY, String(state.nightMode));
        render();
        statusText.textContent = state.nightMode
            ? "Night Shift will follow you across the shared site."
            : "Daylight styling will return when you leave the facility.";
    }

    function render() {
        attemptCount.textContent = String(state.trips).padStart(2, "0");
        facilityState.textContent = state.mode === "complete"
            ? "All buses stable"
            : state.mode === "tripped" ? "Bus trip detected" : "Power restricted";
        badge.hidden = !state.certified;
        modeToggle.disabled = !state.certified;
        modeToggle.textContent = !state.certified
            ? "Restore systems to enable"
            : state.nightMode ? "Return site to daylight" : "Carry Night Shift across site";
        nightHomeLink.hidden = !state.nightMode;

        breakerButtons.forEach(function (button) {
            const system = button.dataset.system;
            button.classList.toggle("is-powered", state.powered.includes(system));
            button.classList.toggle("is-fault", state.fault === system);
            button.setAttribute("aria-pressed", String(state.powered.includes(system)));
        });

        drawSystems();
    }

    function drawSystems() {
        const width = canvas.width;
        const height = canvas.height;
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#041416";
        context.fillRect(0, 0, width, height);

        context.strokeStyle = "rgba(81, 198, 165, 0.08)";
        context.lineWidth = 1;
        for (let x = 0; x <= width; x += 45) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }
        for (let y = 0; y <= height; y += 42) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }

        context.fillStyle = "#8eada3";
        context.font = "700 14px Consolas, monospace";
        context.fillText("BUS 06 / AFTER-HOURS TEST FLOOR", 34, 42);
        context.fillStyle = "#f4ad48";
        context.font = "700 11px Consolas, monospace";
        context.fillText(state.mode === "complete" ? "SYSTEM NOMINAL" : state.mode === "tripped" ? "PROTECTION TRIP" : "RESTORATION REQUIRED", 34, 67);

        const modules = [
            { id: "comms", x: 190, label: "COMMS", sub: "SIGNAL" },
            { id: "nav", x: 440, label: "NAV", sub: "HEADING" },
            { id: "test", x: 690, label: "TEST", sub: "AUTOMATION" }
        ];
        const centerY = 220;

        context.strokeStyle = "rgba(142, 173, 163, 0.24)";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(78, centerY);
        context.lineTo(840, centerY);
        context.stroke();

        context.fillStyle = "#f4ad48";
        context.fillRect(47, centerY - 27, 42, 54);
        context.fillStyle = "#041416";
        context.font = "900 12px Consolas, monospace";
        context.textAlign = "center";
        context.fillText("PWR", 68, centerY + 4);

        modules.forEach(function (module, index) {
            const powered = state.powered.includes(module.id);
            const fault = state.fault === module.id;
            const color = powered ? "#51c6a5" : fault ? "#ef705d" : "#3d5e59";

            if (powered) {
                const previousX = index === 0 ? 89 : modules[index - 1].x + 150;
                context.strokeStyle = "rgba(81, 198, 165, 0.8)";
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(previousX, centerY);
                context.lineTo(module.x, centerY);
                context.stroke();
            }

            context.fillStyle = "#082427";
            context.strokeStyle = color;
            context.lineWidth = powered || fault ? 3 : 1;
            context.fillRect(module.x, centerY - 70, 150, 140);
            context.strokeRect(module.x, centerY - 70, 150, 140);

            context.fillStyle = color;
            context.beginPath();
            context.arc(module.x + 25, centerY - 42, 7, 0, Math.PI * 2);
            context.fill();

            context.textAlign = "left";
            context.fillStyle = powered ? "#eaf7ef" : "#91aaa2";
            context.font = "900 21px Consolas, monospace";
            context.fillText(module.label, module.x + 24, centerY + 2);
            context.fillStyle = "#78958c";
            context.font = "700 10px Consolas, monospace";
            context.fillText(module.sub, module.x + 24, centerY + 26);
            context.fillStyle = color;
            context.fillText(powered ? "ONLINE" : fault ? "TRIPPED" : "OFFLINE", module.x + 24, centerY + 50);
        });

        context.textAlign = "left";
        context.fillStyle = "#6f8d84";
        context.font = "11px Consolas, monospace";
        context.fillText("DEPENDENCY PATH: SIGNAL > REFERENCE > VALIDATION", 34, 386);
    }

    function runCommand(rawCommand) {
        const command = rawCommand.trim().toUpperCase();
        const output = document.getElementById("terminal-output");
        const responses = {
            STATUS: state.mode === "complete"
                ? "STATUS\nAll three buses stable. Badge GSO-06 is valid."
                : "STATUS\nFacility power is restricted. Complete the bus diagnostic.",
            LOGS: "RECENT LOGS\n00:14 - Test rack requested snacks.\n00:31 - Unscheduled gremlin motion near the photo archive.\n00:44 - Operator access accepted.",
            PROJECTS: "PROJECT INDEX\nCF-19 SWITCHYARD\nPN-04 WAYFINDER\nDT-10 SNACKWATCH\nAR-12 TIME CAPSULE",
            GREMLIN: "GREMLIN NOTICE\nDo not feed after midnight. This instruction has never worked.",
            CLEARANCE: "CLEARANCE\nFive marks verified. Local operator access only.",
            HELP: "AVAILABLE COMMANDS\nSTATUS  LOGS  PROJECTS  GREMLIN  CLEARANCE  HELP"
        };
        output.textContent = responses[command] || "UNKNOWN COMMAND\nType HELP for the approved command list.";
    }

    breakerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleBreaker(button.dataset.system);
        });
    });

    document.getElementById("reset-diagnostic").addEventListener("click", resetDiagnostic);
    modeToggle.addEventListener("click", toggleNightMode);
    document.getElementById("terminal-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const input = document.getElementById("terminal-input");
        runCommand(input.value);
        input.value = "";
        input.focus();
    });

    window.render_game_to_text = function () {
        return JSON.stringify({
            coordinateSystem: "Canvas origin is top-left; x increases right and y increases down.",
            access: state.access,
            mode: state.mode,
            sequenceHint: "COMMS feeds NAV; NAV must lock before TEST.",
            poweredSystems: state.powered.slice(),
            faultSystem: state.fault,
            trips: state.trips,
            certified: state.certified,
            siteNightMode: state.nightMode
        });
    };

    window.advanceTime = function () {
        if (state.access) drawSystems();
    };

    unlockPage();
})();
