(function () {
    "use strict";

    const terminalModes = new Set(["landed", "crashed"]);

    const scenarios = [
        {
            id: "stabilized-approach",
            code: "SCN-APR-01",
            title: "Stabilized Visual",
            difficulty: "Standard",
            summary: "Fly the three-gate profile, capture centerline, and complete a full-stop landing.",
            launchMessage: "Stabilized visual active. Fly the gates, manage energy, and touch down on centerline.",
            profile: ["3 gates / full stop", "Nominal power", "Light variable wind"],
            phases: [
                { id: "intercept", label: "Initial intercept", enter: (s) => s.mode === "flying", exit: (s) => s.gatesCleared >= 1 || terminalModes.has(s.mode) },
                { id: "final", label: "Final approach", enter: (s) => s.gatesCleared >= 1 && s.mode === "flying", exit: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Landing and rollout", enter: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                hold("APR-101", "intercept", "Airspeed remains inside the approach envelope.", (s) => s.speedKts >= 120 && s.speedKts <= 220, 1.5),
                hold("APR-102", "intercept", "Bank angle remains controlled near the ground.", (s) => Math.abs(s.rollDeg) <= 35, 1.5),
                hold("APR-201", "final", "Lateral deviation remains within 2.5 dots.", (s) => Math.abs(s.localizerDots) <= 2.5, 1),
                holdFor("APR-202", "final", "No stall condition is sustained for five seconds.", (s) => !s.stall, 5),
                within("APR-301", "landing", "Runway contact occurs before the landing window closes.", (s) => ["rollout", "landed"].includes(s.mode), 45),
                terminal("APR-302", "landing", "Aircraft reaches a controlled full stop.", (s) => s.mode === "landed")
            ]
        },
        {
            id: "crosswind-correction",
            code: "SCN-WIND-02",
            title: "Crosswind Correction",
            difficulty: "Advanced",
            summary: "Counter a strong left drift, regain the localizer, and hold alignment through touchdown.",
            launchMessage: "Crosswind scenario active. Correct the left drift and protect the runway centerline.",
            profile: ["14 kt crosswind", "Nominal power", "Centerline recovery"],
            phases: [
                { id: "wind-entry", label: "Wind encounter", enter: (s) => s.mode === "flying", exit: (s) => s.gatesCleared >= 1 || terminalModes.has(s.mode) },
                { id: "correction", label: "Lateral correction", enter: (s) => s.gatesCleared >= 1 && s.mode === "flying", exit: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Crosswind landing", enter: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                within("WND-101", "wind-entry", "The commanded crosswind is observed in telemetry.", (s) => s.windKts >= 10, 3),
                hold("WND-102", "wind-entry", "Bank stays below 42 degrees during the encounter.", (s) => Math.abs(s.rollDeg) <= 42, 1.5),
                within("WND-201", "correction", "Localizer deviation is recovered inside 1.5 dots.", (s) => Math.abs(s.localizerDots) <= 1.5, 20),
                holdFor("WND-202", "correction", "Coordinated, stall-free flight is sustained.", (s) => !s.stall && Math.abs(s.slip) <= 0.28, 5),
                terminal("WND-301", "landing", "Crosswind sortie ends at a controlled full stop.", (s) => s.mode === "landed")
            ]
        },
        {
            id: "engine-power-loss",
            code: "SCN-ENG-03",
            title: "Engine Power Loss",
            difficulty: "Emergency",
            summary: "A timed power loss interrupts the approach. Preserve energy and glide to the runway.",
            launchMessage: "Engine-loss scenario armed. Fly the profile and be ready to transition to best glide.",
            profile: ["Failure at 12 s", "12% residual power", "Glide to runway"],
            phases: [
                { id: "armed", label: "Fault armed", enter: (s) => s.mode === "flying", exit: (s) => s.faultActive || terminalModes.has(s.mode) },
                { id: "forced-glide", label: "Forced glide", enter: (s) => s.faultActive && s.mode === "flying", exit: (s) => ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Emergency landing", enter: (s) => ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                within("ENG-101", "armed", "Scheduled engine-power loss is observed by the monitor.", (s) => s.faultActive && s.engineHealth <= 0.2, 15),
                hold("ENG-201", "forced-glide", "Airspeed remains above the low-energy threshold.", (s) => s.speedKts >= 105, 1),
                hold("ENG-202", "forced-glide", "The aircraft remains below the stall boundary.", (s) => !s.stall, 1),
                hold("ENG-203", "forced-glide", "Bank remains within the emergency maneuvering envelope.", (s) => Math.abs(s.rollDeg) <= 45, 1),
                terminal("ENG-301", "landing", "Forced landing reaches a controlled full stop.", (s) => s.mode === "landed")
            ]
        }
    ];

    const requestedScenario = new URLSearchParams(window.location.search).get("scenario");
    const initialScenario = scenarios.some((scenario) => scenario.id === requestedScenario) ? requestedScenario : scenarios[0].id;

    window.flightScenarioCatalog = scenarios;
    window.flightScenarioSelection = initialScenario;

    const optionsRoot = document.querySelector("[data-role='scenario-options']");
    const monitorResult = document.querySelector("[data-role='monitor-result']");
    const monitorScenario = document.querySelector("[data-role='monitor-scenario']");
    const monitorPhase = document.querySelector("[data-role='monitor-phase']");
    const monitorElapsed = document.querySelector("[data-role='monitor-elapsed']");
    const monitorEvidence = document.querySelector("[data-role='monitor-evidence']");
    const assertionList = document.querySelector("[data-role='assertion-list']");
    const eventStream = document.querySelector("[data-role='event-stream']");
    const telemetryNodes = new Map();

    document.querySelectorAll("[data-telemetry]").forEach((node) => {
        telemetryNodes.set(node.getAttribute("data-telemetry"), node);
    });

    class ScenarioMonitorEngine {
        constructor(catalog) {
            this.catalog = catalog;
            this.selected = catalog.find((scenario) => scenario.id === window.flightScenarioSelection) || catalog[0];
            this.lastSample = null;
            this.reset();
        }

        select(id) {
            const next = this.catalog.find((scenario) => scenario.id === id);
            if (!next || this.isActive()) return false;
            this.selected = next;
            window.flightScenarioSelection = next.id;
            this.reset();
            renderScenarioOptions();
            this.render();
            syncPreflightCopy();
            return true;
        }

        reset() {
            this.status = "standby";
            this.phaseIndex = 0;
            this.currentPhase = null;
            this.phaseEnteredAt = null;
            this.runStartedAt = null;
            this.lastElapsed = 0;
            this.firstFailure = null;
            this.events = [];
            this.assertions = new Map(this.selected.assertions.map((spec) => [spec.id, {
                spec: spec,
                status: "pending",
                reason: "",
                trueSince: null,
                passedAt: null,
                failedAt: null
            }]));
            this.addEvent("system", "Scenario loaded", `${this.selected.code} / ${this.selected.title}`, 0);
        }

        isActive() {
            return this.status === "running" && this.lastSample && ["flying", "rollout"].includes(this.lastSample.mode);
        }

        update(rawState) {
            const sample = normalizeState(rawState);
            this.lastSample = sample;
            renderTelemetry(sample);

            if (sample.scenarioId !== this.selected.id && sample.mode !== "title") return;

            if (sample.mode === "title") {
                if (this.status !== "standby") {
                    this.reset();
                    renderScenarioOptions();
                    this.render();
                }
                return;
            }

            if (["flying", "rollout"].includes(sample.mode) && (this.status === "standby" || sample.elapsedS + 0.05 < this.lastElapsed)) {
                this.start(sample);
            }

            if (this.status !== "running") {
                this.render();
                return;
            }

            this.lastElapsed = sample.elapsedS;
            this.enterNextPhase(sample);
            this.evaluateAssertions(sample);
            this.exitPhaseIfNeeded(sample);

            if (terminalModes.has(sample.mode)) this.finish(sample);
            this.render();
        }

        start(sample) {
            this.status = "running";
            this.phaseIndex = 0;
            this.currentPhase = null;
            this.phaseEnteredAt = null;
            this.runStartedAt = sample.elapsedS;
            this.lastElapsed = sample.elapsedS;
            this.firstFailure = null;
            this.events = [];
            this.assertions.forEach((runtime) => {
                runtime.status = "pending";
                runtime.reason = "";
                runtime.trueSince = null;
                runtime.passedAt = null;
                runtime.failedAt = null;
            });
            this.addEvent("run", "Run started", `${this.selected.code} monitoring live telemetry`, sample.elapsedS);
            this.enterNextPhase(sample);
            renderScenarioOptions();
        }

        enterNextPhase(sample) {
            if (this.currentPhase || this.phaseIndex >= this.selected.phases.length) return;
            const phase = this.selected.phases[this.phaseIndex];
            if (!phase.enter(sample)) return;
            this.currentPhase = phase;
            this.phaseEnteredAt = sample.elapsedS;
            this.assertions.forEach((runtime) => {
                if (runtime.spec.phase === phase.id && runtime.status === "pending") runtime.status = "active";
            });
            this.addEvent("phase", "Phase entered", phase.label, sample.elapsedS);
        }

        evaluateAssertions(sample) {
            if (!this.currentPhase || this.phaseEnteredAt === null) return;
            const phaseAge = sample.elapsedS - this.phaseEnteredAt;
            this.assertions.forEach((runtime) => {
                if (runtime.status !== "active" || runtime.spec.phase !== this.currentPhase.id) return;
                const condition = Boolean(runtime.spec.test(sample));
                const spec = runtime.spec;

                if (spec.mode === "within") {
                    if (condition && phaseAge <= spec.seconds) this.pass(runtime, sample.elapsedS);
                    else if (phaseAge > spec.seconds) this.fail(runtime, sample.elapsedS, `condition not true within ${spec.seconds}s`);
                    return;
                }

                if (spec.mode === "hold-for") {
                    if (condition) {
                        if (runtime.trueSince === null) runtime.trueSince = sample.elapsedS;
                        if (sample.elapsedS - runtime.trueSince >= spec.seconds) this.pass(runtime, sample.elapsedS);
                    } else {
                        runtime.trueSince = null;
                    }
                    return;
                }

                if (spec.mode === "hold") {
                    if (!condition && phaseAge > spec.graceS) this.fail(runtime, sample.elapsedS, "condition left the approved envelope");
                    return;
                }

                if (spec.mode === "terminal" && condition) this.pass(runtime, sample.elapsedS);
            });
        }

        exitPhaseIfNeeded(sample) {
            if (!this.currentPhase || !this.currentPhase.exit(sample)) return;
            this.finishPhaseAssertions(this.currentPhase.id, sample.elapsedS);
            this.addEvent("phase", "Phase complete", this.currentPhase.label, sample.elapsedS);
            this.phaseIndex += 1;
            this.currentPhase = null;
            this.phaseEnteredAt = null;
            this.enterNextPhase(sample);
            this.evaluateAssertions(sample);
        }

        finishPhaseAssertions(phaseId, elapsedS) {
            this.assertions.forEach((runtime) => {
                if (runtime.spec.phase !== phaseId || runtime.status !== "active") return;
                if (runtime.spec.mode === "hold") this.pass(runtime, elapsedS);
                else this.fail(runtime, elapsedS, "phase ended before requirement was satisfied");
            });
        }

        finish(sample) {
            if (this.status !== "running") return;
            if (this.currentPhase) this.finishPhaseAssertions(this.currentPhase.id, sample.elapsedS);
            this.assertions.forEach((runtime) => {
                if (["pending", "active"].includes(runtime.status)) this.fail(runtime, sample.elapsedS, "run ended before requirement was evaluated");
            });
            const hasFailure = Array.from(this.assertions.values()).some((runtime) => runtime.status === "fail");
            this.status = sample.mode === "landed" && !hasFailure ? "pass" : "fail";
            this.addEvent(this.status, this.status === "pass" ? "Run passed" : "Run failed", this.firstFailure ? `${this.firstFailure.id}: ${this.firstFailure.reason}` : sample.mode, sample.elapsedS);
            renderScenarioOptions();
        }

        pass(runtime, elapsedS) {
            if (["pass", "fail"].includes(runtime.status)) return;
            runtime.status = "pass";
            runtime.passedAt = elapsedS;
            this.addEvent("pass", `${runtime.spec.id} passed`, runtime.spec.description, elapsedS);
        }

        fail(runtime, elapsedS, reason) {
            if (["pass", "fail"].includes(runtime.status)) return;
            runtime.status = "fail";
            runtime.reason = reason;
            runtime.failedAt = elapsedS;
            if (!this.firstFailure) this.firstFailure = { id: runtime.spec.id, reason: reason };
            this.addEvent("fail", `${runtime.spec.id} failed`, reason, elapsedS);
        }

        addEvent(type, title, detail, elapsedS) {
            this.events.unshift({ type: type, title: title, detail: detail, elapsedS: elapsedS });
            this.events = this.events.slice(0, 9);
        }

        snapshot() {
            return {
                scenarioId: this.selected.id,
                scenario: this.selected.title,
                status: this.status,
                phase: this.currentPhase ? this.currentPhase.id : null,
                phaseLabel: this.currentPhase ? this.currentPhase.label : null,
                elapsedS: this.lastElapsed,
                firstFailure: this.firstFailure,
                assertions: Array.from(this.assertions.values()).map((runtime) => ({
                    id: runtime.spec.id,
                    phase: runtime.spec.phase,
                    status: runtime.status,
                    reason: runtime.reason
                })),
                events: this.events.slice()
            };
        }

        render() {
            renderMonitor(this);
        }
    }

    const engine = new ScenarioMonitorEngine(scenarios);

    function hold(id, phase, description, test, graceS) {
        return { id: id, phase: phase, description: description, test: test, mode: "hold", graceS: graceS || 0 };
    }

    function holdFor(id, phase, description, test, seconds) {
        return { id: id, phase: phase, description: description, test: test, mode: "hold-for", seconds: seconds };
    }

    function within(id, phase, description, test, seconds) {
        return { id: id, phase: phase, description: description, test: test, mode: "within", seconds: seconds };
    }

    function terminal(id, phase, description, test) {
        return { id: id, phase: phase, description: description, test: test, mode: "terminal" };
    }

    function normalizeState(raw) {
        const plane = raw.plane || {};
        const approach = raw.approach || {};
        const wind = raw.wind || {};
        const scenario = raw.scenario || {};
        return {
            mode: raw.mode || "title",
            scenarioId: scenario.id || window.flightScenarioSelection,
            elapsedS: number(scenario.elapsedS, 0),
            engineHealth: number(scenario.engineHealth, 1),
            faultActive: Boolean(scenario.faultActive),
            speedKts: number(plane.speedKts, 0),
            altitudeAgl: number(plane.altitudeAgl, 0),
            verticalSpeedFpm: number(plane.verticalVelocityFpm, 0),
            rollDeg: number(plane.roll, 0),
            slip: number(plane.slip, 0),
            gLoad: number(plane.gLoad, 1),
            stall: Boolean(plane.stall),
            localizerDots: number(approach.localizerDots, 0),
            windKts: number(wind.speedKts, 0),
            gatesCleared: gatesCleared(raw.nextObjective),
            nextObjective: raw.nextObjective || "Gate Alpha",
            score: number(raw.score, 0)
        };
    }

    function gatesCleared(nextObjective) {
        if (nextObjective === "Gate Bravo") return 1;
        if (nextObjective === "Gate Charlie") return 2;
        if (nextObjective === "runway touchdown") return 3;
        return 0;
    }

    function renderScenarioOptions() {
        if (!optionsRoot) return;
        optionsRoot.replaceChildren();
        scenarios.forEach((scenario) => {
            const button = document.createElement("button");
            const active = scenario.id === engine.selected.id;
            button.type = "button";
            button.className = "scenario-option";
            button.dataset.scenarioId = scenario.id;
            button.dataset.difficulty = scenario.difficulty.toLowerCase();
            button.setAttribute("role", "radio");
            button.setAttribute("aria-checked", String(active));
            button.disabled = engine.isActive();
            if (active) button.classList.add("is-selected");

            const top = document.createElement("span");
            top.className = "scenario-option-top";
            top.innerHTML = `<span>${scenario.code}</span><span>${scenario.difficulty}</span>`;
            const title = document.createElement("strong");
            title.textContent = scenario.title;
            const summary = document.createElement("span");
            summary.className = "scenario-option-summary";
            summary.textContent = scenario.summary;
            button.append(top, title, summary);
            button.addEventListener("click", () => engine.select(scenario.id));
            optionsRoot.append(button);
        });
    }

    function renderMonitor(runtimeEngine) {
        if (!monitorResult) return;
        const snapshot = runtimeEngine.snapshot();
        const passed = snapshot.assertions.filter((item) => item.status === "pass").length;
        monitorResult.dataset.status = snapshot.status;
        monitorResult.querySelector("strong").textContent = snapshot.status.toUpperCase();
        monitorScenario.textContent = runtimeEngine.selected.code;
        monitorPhase.textContent = snapshot.phaseLabel || (snapshot.status === "standby" ? "Awaiting flight" : "Run complete");
        monitorElapsed.textContent = `${snapshot.elapsedS.toFixed(1)} s`;
        monitorEvidence.textContent = `${passed} / ${snapshot.assertions.length}`;

        assertionList.replaceChildren();
        runtimeEngine.assertions.forEach((runtime) => {
            const row = document.createElement("div");
            row.className = "assertion-row";
            row.dataset.status = runtime.status;
            const status = document.createElement("span");
            status.className = "assertion-status";
            status.textContent = statusLabel(runtime.status);
            const copy = document.createElement("div");
            const title = document.createElement("strong");
            title.textContent = `${runtime.spec.id} / ${phaseLabel(runtimeEngine.selected, runtime.spec.phase)}`;
            const description = document.createElement("p");
            description.textContent = runtime.reason || runtime.spec.description;
            copy.append(title, description);
            row.append(status, copy);
            assertionList.append(row);
        });

        eventStream.replaceChildren();
        runtimeEngine.events.forEach((event) => {
            const row = document.createElement("div");
            row.className = "event-row";
            row.dataset.type = event.type;
            const time = document.createElement("time");
            time.textContent = `T+${number(event.elapsedS, 0).toFixed(1)}`;
            const copy = document.createElement("div");
            const title = document.createElement("strong");
            title.textContent = event.title;
            const detail = document.createElement("p");
            detail.textContent = event.detail;
            copy.append(title, detail);
            row.append(time, copy);
            eventStream.append(row);
        });

    }

    function renderTelemetry(sample) {
        setTelemetry("speed", `${Math.round(sample.speedKts)} kt`);
        setTelemetry("altitude", `${Math.round(sample.altitudeAgl)} m`);
        setTelemetry("vertical-speed", `${signed(Math.round(sample.verticalSpeedFpm))} fpm`);
        setTelemetry("roll", `${signed(sample.rollDeg.toFixed(1))} deg`);
        setTelemetry("localizer", `${signed(sample.localizerDots.toFixed(2))} dot`);
        setTelemetry("wind", `${sample.windKts.toFixed(1)} kt`);
        setTelemetry("engine", `${Math.round(sample.engineHealth * 100)}%`);
        setTelemetry("g-load", `${sample.gLoad.toFixed(2)} G`);
    }

    function setTelemetry(key, value) {
        const node = telemetryNodes.get(key);
        if (node) node.textContent = value;
    }

    function syncPreflightCopy() {
        const card = document.querySelector(".preflight-card");
        if (!card) return;
        const kicker = card.querySelector(".preflight-kicker");
        if (!kicker || !kicker.textContent.toLowerCase().includes("preflight")) return;
        const title = card.querySelector(".preflight-title");
        const description = card.querySelector(".preflight-description");
        const profileValues = card.querySelectorAll(".preflight-profile > div > div:last-child");
        if (title && title.textContent !== engine.selected.title) title.textContent = engine.selected.title;
        if (description && description.textContent !== engine.selected.summary) description.textContent = engine.selected.summary;
        profileValues.forEach((node, index) => {
            const value = engine.selected.profile[index] || "--";
            if (node.textContent !== value) node.textContent = value;
        });
    }

    function statusLabel(status) {
        return { pending: "WAIT", active: "LIVE", pass: "PASS", fail: "FAIL" }[status] || status.toUpperCase();
    }

    function phaseLabel(scenario, phaseId) {
        return scenario.phases.find((phase) => phase.id === phaseId)?.label || phaseId;
    }

    function signed(value) {
        const text = String(value);
        return Number(value) > 0 ? `+${text}` : text;
    }

    function number(value, fallback) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : fallback;
    }

    function pollFlightState() {
        try {
            if (typeof window.render_game_to_text !== "function") return;
            engine.update(JSON.parse(window.render_game_to_text()));
            syncPreflightCopy();
        } catch (error) {
            console.error("Scenario monitor update failed.", error);
        }
    }

    const observer = new MutationObserver(syncPreflightCopy);
    const flightRoot = document.getElementById("flight-sim-root");
    if (flightRoot) observer.observe(flightRoot, { childList: true, subtree: true });

    window.select_flight_scenario = (id) => engine.select(id);
    window.render_scenario_monitor_to_text = () => JSON.stringify(engine.snapshot());

    engine.render();
    renderScenarioOptions();
    window.setInterval(pollFlightState, 120);
}());
