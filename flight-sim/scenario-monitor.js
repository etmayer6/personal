(function () {
    "use strict";

    const terminalModes = new Set(["landed", "crashed"]);
    const activeModes = new Set(["flying", "rollout"]);
    const knownModes = new Set(["title", "flying", "rollout", "landed", "crashed"]);
    const telemetryStaleAfterS = 2.5;

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
                { id: "intercept", label: "Initial intercept", timeoutS: 45, enter: (s) => s.mode === "flying", exit: (s) => s.gatesCleared >= 1 || terminalModes.has(s.mode) },
                { id: "final", label: "Final approach", timeoutS: 55, enter: (s) => s.gatesCleared >= 1 && s.mode === "flying", exit: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Landing and rollout", timeoutS: 45, enter: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                hold("APR-101", "intercept", "Airspeed remains inside the approach envelope.", (s) => s.speedKts >= 120 && s.speedKts <= 220, 1.5, (s) => `IAS ${whole(s.speedKts)} kt / envelope 120-220`),
                hold("APR-102", "intercept", "Bank angle remains controlled near the ground.", (s) => Math.abs(s.rollDeg) <= 35, 1.5, (s) => `bank ${decimal(s.rollDeg)} deg / limit +/-35`),
                hold("APR-201", "final", "Lateral deviation remains within 2.5 dots.", (s) => Math.abs(s.localizerDots) <= 2.5, 1, (s) => `XTK ${decimal(s.localizerDots, 2)} dot / limit +/-2.50`),
                holdFor("APR-202", "final", "Stall-free flight is sustained for five seconds.", (s) => !s.stall, 5, (s) => `${s.stall ? "stall detected" : "stall clear"} / AOA protected`),
                within("APR-301", "landing", "Runway contact occurs before the landing window closes.", (s) => ["rollout", "landed"].includes(s.mode), 45, (s) => `aircraft state ${s.mode}`),
                terminal("APR-302", "landing", "Aircraft reaches a controlled full stop.", (s) => s.mode === "landed", (s) => `terminal state ${s.mode}`)
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
                { id: "wind-entry", label: "Wind encounter", timeoutS: 45, enter: (s) => s.mode === "flying", exit: (s) => s.gatesCleared >= 1 || terminalModes.has(s.mode) },
                { id: "correction", label: "Lateral correction", timeoutS: 55, enter: (s) => s.gatesCleared >= 1 && s.mode === "flying", exit: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Crosswind landing", timeoutS: 45, enter: (s) => s.gatesCleared >= 3 || ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                within("WND-101", "wind-entry", "The commanded crosswind is observed in telemetry.", (s) => s.windKts >= 10, 3, (s) => `wind ${decimal(s.windKts)} kt / minimum 10`),
                hold("WND-102", "wind-entry", "Bank stays below 42 degrees during the encounter.", (s) => Math.abs(s.rollDeg) <= 42, 1.5, (s) => `bank ${decimal(s.rollDeg)} deg / limit +/-42`),
                within("WND-201", "correction", "Localizer deviation is recovered inside 1.5 dots.", (s) => Math.abs(s.localizerDots) <= 1.5, 20, (s) => `XTK ${decimal(s.localizerDots, 2)} dot / target +/-1.50`),
                holdFor("WND-202", "correction", "Coordinated, stall-free flight is sustained.", (s) => !s.stall && Math.abs(s.slip) <= 0.28, 5, (s) => `slip ${decimal(s.slip, 2)} / stall ${s.stall ? "yes" : "no"}`),
                terminal("WND-301", "landing", "Crosswind sortie ends at a controlled full stop.", (s) => s.mode === "landed", (s) => `terminal state ${s.mode}`)
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
                { id: "armed", label: "Fault armed", timeoutS: 18, enter: (s) => s.mode === "flying", exit: (s) => s.faultActive || terminalModes.has(s.mode) },
                { id: "forced-glide", label: "Forced glide", timeoutS: 70, enter: (s) => s.faultActive && s.mode === "flying", exit: (s) => ["rollout", "landed", "crashed"].includes(s.mode) },
                { id: "landing", label: "Emergency landing", timeoutS: 45, enter: (s) => ["rollout", "landed", "crashed"].includes(s.mode), exit: (s) => terminalModes.has(s.mode) }
            ],
            assertions: [
                within("ENG-101", "armed", "Scheduled engine-power loss is observed by the monitor.", (s) => s.faultActive && s.engineHealth <= 0.2, 15, (s) => `engine ${whole(s.engineHealth * 100)}% / fault ${s.faultActive ? "active" : "armed"}`),
                hold("ENG-201", "forced-glide", "Airspeed remains above the low-energy threshold.", (s) => s.speedKts >= 105, 1, (s) => `IAS ${whole(s.speedKts)} kt / minimum 105`),
                hold("ENG-202", "forced-glide", "The aircraft remains below the stall boundary.", (s) => !s.stall, 1, (s) => s.stall ? "stall boundary exceeded" : "stall boundary clear"),
                hold("ENG-203", "forced-glide", "Bank remains within the emergency maneuvering envelope.", (s) => Math.abs(s.rollDeg) <= 45, 1, (s) => `bank ${decimal(s.rollDeg)} deg / limit +/-45`),
                terminal("ENG-301", "landing", "Forced landing reaches a controlled full stop.", (s) => s.mode === "landed", (s) => `terminal state ${s.mode}`)
            ]
        }
    ];

    const query = new URLSearchParams(window.location.search);
    const requestedScenario = query.get("scenario");
    const initialScenario = scenarios.some((scenario) => scenario.id === requestedScenario) ? requestedScenario : scenarios[0].id;
    const catalogValidation = validateCatalog(scenarios);

    window.flightScenarioCatalog = scenarios;
    window.flightScenarioSelection = initialScenario;

    const optionsRoot = document.querySelector("[data-role='scenario-options']");
    const monitorResult = document.querySelector("[data-role='monitor-result']");
    const monitorScenario = document.querySelector("[data-role='monitor-scenario']");
    const monitorPhase = document.querySelector("[data-role='monitor-phase']");
    const monitorElapsed = document.querySelector("[data-role='monitor-elapsed']");
    const monitorEvidence = document.querySelector("[data-role='monitor-evidence']");
    const monitorLink = document.querySelector("[data-role='monitor-link']");
    const phaseTrack = document.querySelector("[data-role='phase-track']");
    const assertionList = document.querySelector("[data-role='assertion-list']");
    const eventStream = document.querySelector("[data-role='event-stream']");
    const telemetryNodes = new Map();

    document.querySelectorAll("[data-telemetry]").forEach((node) => {
        telemetryNodes.set(node.getAttribute("data-telemetry"), node);
    });

    class ScenarioMonitorEngine {
        constructor(catalog, validation) {
            this.catalog = catalog;
            this.catalogValidation = validation;
            this.selected = catalog.find((scenario) => scenario.id === window.flightScenarioSelection) || catalog[0];
            this.lastSample = null;
            this.reset();
        }

        select(id) {
            const next = this.catalog.find((scenario) => scenario.id === id);
            if (!next || this.runActive) return false;
            this.selected = next;
            window.flightScenarioSelection = next.id;
            this.reset();
            renderScenarioOptions();
            this.render();
            syncPreflightCopy();
            return true;
        }

        reset() {
            const validationIssues = this.validationIssues();
            this.status = validationIssues.length ? "invalid" : "standby";
            this.runActive = false;
            this.phaseIndex = 0;
            this.currentPhase = null;
            this.phaseEnteredAt = null;
            this.runStartedAt = null;
            this.lastElapsed = 0;
            this.previousElapsed = null;
            this.sampleCount = 0;
            this.sampleRateHz = 0;
            this.maxTelemetryGapS = 0;
            this.firstFailure = null;
            this.invalidReasons = validationIssues.slice();
            this.events = [];
            this.transitions = [];
            this.assertions = new Map(this.selected.assertions.map((spec) => [spec.id, createAssertionRuntime(spec)]));
            this.addEvent("system", "Scenario loaded", `${this.selected.code} / ${this.selected.title}`, 0);
            validationIssues.slice(0, 3).forEach((reason) => this.addEvent("invalid", "Definition invalid", reason, 0));
        }

        validationIssues() {
            return this.catalogValidation.issues
                .filter((issue) => issue.scenarioId === this.selected.id || issue.scenarioId === "catalog")
                .map((issue) => `${issue.path}: ${issue.message}`);
        }

        isActive() {
            return this.runActive && this.lastSample && (activeModes.has(this.lastSample.mode) || terminalModes.has(this.lastSample.mode));
        }

        update(rawState) {
            const sample = normalizeState(rawState);
            this.lastSample = sample;
            renderTelemetry(sample);

            if (sample.scenarioId !== this.selected.id && sample.mode !== "title") return;

            if (sample.mode === "title") {
                if (this.runActive || !["standby", "invalid"].includes(this.status) || this.lastElapsed !== 0) {
                    this.reset();
                    renderScenarioOptions();
                    this.render();
                }
                return;
            }

            if (activeModes.has(sample.mode) && !this.runActive) {
                this.start(sample);
            } else if (this.runActive) {
                this.ingestTelemetry(sample);
            }

            if (!this.runActive) {
                this.render();
                return;
            }

            this.enterNextPhase(sample);
            this.evaluateAssertions(sample);
            this.advanceCompletedPhases(sample);
            this.checkPhaseTimeout(sample);

            if (terminalModes.has(sample.mode)) this.finish(sample);
            this.render();
        }

        start(sample) {
            const validationIssues = this.validationIssues();
            this.status = validationIssues.length ? "invalid" : "running";
            this.runActive = true;
            this.phaseIndex = 0;
            this.currentPhase = null;
            this.phaseEnteredAt = null;
            this.runStartedAt = 0;
            this.lastElapsed = 0;
            this.previousElapsed = null;
            this.sampleCount = 0;
            this.sampleRateHz = 0;
            this.maxTelemetryGapS = 0;
            this.firstFailure = null;
            this.invalidReasons = validationIssues.slice();
            this.events = [];
            this.transitions = [];
            this.assertions.forEach(resetAssertionRuntime);
            this.ingestTelemetry(sample);
            this.addEvent("run", "Run started", `${this.selected.code} monitoring live telemetry`, sample.elapsedS);
            this.enterNextPhase(sample);
            renderScenarioOptions();
        }

        ingestTelemetry(sample) {
            sample.missingSignals.forEach((signal) => {
                this.invalidate(`Missing or invalid telemetry signal: ${signal}`, sample.elapsedS);
            });
            if (!knownModes.has(sample.mode)) this.invalidate(`Unknown aircraft mode: ${sample.mode}`, sample.elapsedS);

            if (this.previousElapsed !== null) {
                const delta = sample.elapsedS - this.previousElapsed;
                if (delta < -0.05) {
                    this.invalidate(`Telemetry time is non-monotonic (${decimal(this.previousElapsed, 2)}s to ${decimal(sample.elapsedS, 2)}s).`, sample.elapsedS);
                } else if (delta > telemetryStaleAfterS) {
                    this.invalidate(`Telemetry stale: ${decimal(delta, 2)}s since previous sample.`, sample.elapsedS);
                }
                if (delta > 0.001) {
                    const instantaneousRate = 1 / delta;
                    this.sampleRateHz = this.sampleRateHz === 0 ? instantaneousRate : this.sampleRateHz * 0.78 + instantaneousRate * 0.22;
                    this.maxTelemetryGapS = Math.max(this.maxTelemetryGapS, delta);
                }
            }

            this.previousElapsed = sample.elapsedS;
            this.lastElapsed = sample.elapsedS;
            this.sampleCount += 1;
        }

        invalidate(reason, elapsedS) {
            if (this.invalidReasons.includes(reason)) return;
            this.invalidReasons.push(reason);
            this.status = "invalid";
            this.addEvent("invalid", "Run invalid", reason, elapsedS);
        }

        enterNextPhase(sample) {
            if (this.currentPhase || this.phaseIndex >= this.selected.phases.length) return false;
            const phase = this.selected.phases[this.phaseIndex];
            if (!this.evaluateCondition(phase.enter, sample, `phase ${phase.id} entry`)) return false;
            this.currentPhase = phase;
            this.phaseEnteredAt = sample.elapsedS;
            this.transitions.push({ id: phase.id, label: phase.label, enteredAtS: sample.elapsedS, exitedAtS: null, timedOut: false });
            this.assertions.forEach((runtime) => {
                if (runtime.spec.phase === phase.id && runtime.status === "pending") runtime.status = "active";
            });
            this.addEvent("phase", "Phase entered", phase.label, sample.elapsedS);
            return true;
        }

        evaluateAssertions(sample) {
            if (!this.currentPhase || this.phaseEnteredAt === null) return;
            const phaseAge = Math.max(0, sample.elapsedS - this.phaseEnteredAt);
            this.assertions.forEach((runtime) => {
                if (runtime.status !== "active" || runtime.spec.phase !== this.currentPhase.id) return;
                const condition = this.evaluateCondition(runtime.spec.test, sample, `assertion ${runtime.spec.id}`);
                const spec = runtime.spec;
                runtime.observed = this.observe(spec, sample);
                runtime.lastCondition = condition;

                if (spec.mode === "within") {
                    runtime.progress = condition ? 1 : clamp(phaseAge / spec.seconds, 0, 1);
                    runtime.timing = condition ? "condition captured" : `${decimal(Math.max(0, spec.seconds - phaseAge), 1)}s remaining`;
                    if (condition && phaseAge <= spec.seconds) this.pass(runtime, sample);
                    else if (phaseAge > spec.seconds) this.fail(runtime, sample, `condition not true within ${spec.seconds}s`);
                    return;
                }

                if (spec.mode === "hold-for") {
                    if (condition) {
                        if (runtime.trueSince === null) runtime.trueSince = sample.elapsedS;
                        const heldFor = Math.max(0, sample.elapsedS - runtime.trueSince);
                        runtime.progress = clamp(heldFor / spec.seconds, 0, 1);
                        runtime.timing = `${decimal(heldFor, 1)} / ${spec.seconds}s held`;
                        if (heldFor >= spec.seconds) this.pass(runtime, sample);
                    } else {
                        runtime.trueSince = null;
                        runtime.progress = 0;
                        runtime.timing = "hold timer reset";
                    }
                    return;
                }

                if (spec.mode === "hold") {
                    runtime.progress = condition ? 1 : clamp(1 - phaseAge / Math.max(spec.graceS, 0.1), 0, 1);
                    runtime.timing = condition ? "continuous monitor" : `${decimal(Math.max(0, spec.graceS - phaseAge), 1)}s grace`;
                    if (!condition && phaseAge > spec.graceS) this.fail(runtime, sample, "condition left the approved envelope");
                    return;
                }

                runtime.progress = condition ? 1 : 0;
                runtime.timing = condition ? "terminal state captured" : "awaiting terminal state";
                if (spec.mode === "terminal" && condition) this.pass(runtime, sample);
            });
        }

        advanceCompletedPhases(sample) {
            let transitions = 0;
            while (this.currentPhase && transitions < this.selected.phases.length) {
                const shouldExit = this.evaluateCondition(this.currentPhase.exit, sample, `phase ${this.currentPhase.id} exit`);
                if (!shouldExit) break;
                const completed = this.currentPhase;
                this.finishPhaseAssertions(completed.id, sample);
                const transition = this.transitions[this.transitions.length - 1];
                if (transition && transition.id === completed.id) transition.exitedAtS = sample.elapsedS;
                this.addEvent("phase", "Phase complete", completed.label, sample.elapsedS);
                this.phaseIndex += 1;
                this.currentPhase = null;
                this.phaseEnteredAt = null;
                transitions += 1;
                if (!this.enterNextPhase(sample)) break;
                this.evaluateAssertions(sample);
            }
        }

        checkPhaseTimeout(sample) {
            if (!this.currentPhase || this.phaseEnteredAt === null) return;
            const phaseAge = sample.elapsedS - this.phaseEnteredAt;
            if (phaseAge <= this.currentPhase.timeoutS) return;
            const transition = this.transitions[this.transitions.length - 1];
            if (transition?.timedOut) return;
            if (transition) transition.timedOut = true;
            this.invalidate(`Phase '${this.currentPhase.label}' timed out after ${this.currentPhase.timeoutS}s.`, sample.elapsedS);
        }

        finishPhaseAssertions(phaseId, sample) {
            this.assertions.forEach((runtime) => {
                if (runtime.spec.phase !== phaseId || runtime.status !== "active") return;
                if (runtime.spec.mode === "hold") this.pass(runtime, sample);
                else this.fail(runtime, sample, "phase ended before requirement was satisfied");
            });
        }

        finish(sample) {
            if (!this.runActive) return;
            if (this.currentPhase) {
                this.finishPhaseAssertions(this.currentPhase.id, sample);
                this.invalidate(`Phase '${this.currentPhase.label}' did not exit before run completion.`, sample.elapsedS);
            }
            this.assertions.forEach((runtime) => {
                if (["pending", "active"].includes(runtime.status)) this.fail(runtime, sample, "run ended before requirement was evaluated");
            });
            const hasFailure = Array.from(this.assertions.values()).some((runtime) => runtime.status === "fail");
            if (this.invalidReasons.length) this.status = "invalid";
            else this.status = sample.mode === "landed" && !hasFailure ? "pass" : "fail";
            this.runActive = false;
            const detail = this.invalidReasons[0] || (this.firstFailure ? `${this.firstFailure.id}: ${this.firstFailure.reason}` : sample.mode);
            this.addEvent(this.status, this.status === "pass" ? "Run passed" : this.status === "invalid" ? "Run invalid" : "Run failed", detail, sample.elapsedS);
            renderScenarioOptions();
        }

        pass(runtime, sample) {
            if (["pass", "fail"].includes(runtime.status)) return;
            runtime.status = "pass";
            runtime.progress = 1;
            runtime.passedAt = sample.elapsedS;
            runtime.evidence = captureEvidence(runtime, sample);
            this.addEvent("pass", `${runtime.spec.id} passed`, runtime.evidence.observed, sample.elapsedS);
        }

        fail(runtime, sample, reason) {
            if (["pass", "fail"].includes(runtime.status)) return;
            runtime.status = "fail";
            runtime.reason = reason;
            runtime.failedAt = sample.elapsedS;
            runtime.evidence = captureEvidence(runtime, sample);
            if (!this.firstFailure) {
                this.firstFailure = {
                    id: runtime.spec.id,
                    phase: runtime.spec.phase,
                    reason: reason,
                    elapsedS: sample.elapsedS,
                    observed: runtime.evidence.observed
                };
            }
            this.addEvent("fail", `${runtime.spec.id} failed`, `${reason} / ${runtime.evidence.observed}`, sample.elapsedS);
        }

        evaluateCondition(condition, sample, label) {
            try {
                return Boolean(condition(sample));
            } catch (error) {
                this.invalidate(`Unable to evaluate ${label}: ${error instanceof Error ? error.message : String(error)}`, sample.elapsedS);
                return false;
            }
        }

        observe(spec, sample) {
            try {
                return spec.observe ? spec.observe(sample) : defaultObservation(sample);
            } catch (error) {
                this.invalidate(`Unable to capture ${spec.id} evidence: ${error instanceof Error ? error.message : String(error)}`, sample.elapsedS);
                return "observation unavailable";
            }
        }

        addEvent(type, title, detail, elapsedS) {
            this.events.unshift({ type: type, title: title, detail: detail, elapsedS: elapsedS });
            this.events = this.events.slice(0, 14);
        }

        snapshot() {
            const assertions = Array.from(this.assertions.values()).map((runtime) => ({
                id: runtime.spec.id,
                phase: runtime.spec.phase,
                mode: runtime.spec.mode,
                description: runtime.spec.description,
                status: runtime.status,
                reason: runtime.reason,
                observed: runtime.observed,
                timing: runtime.timing,
                progress: Number(runtime.progress.toFixed(3)),
                passedAtS: runtime.passedAt,
                failedAtS: runtime.failedAt,
                evidence: runtime.evidence
            }));
            return {
                engineVersion: 2,
                scenarioId: this.selected.id,
                scenario: this.selected.title,
                status: this.status,
                runActive: this.runActive,
                phase: this.currentPhase ? this.currentPhase.id : null,
                phaseLabel: this.currentPhase ? this.currentPhase.label : null,
                phaseAgeS: this.currentPhase && this.phaseEnteredAt !== null ? Number((this.lastElapsed - this.phaseEnteredAt).toFixed(2)) : 0,
                elapsedS: this.lastElapsed,
                firstFailure: this.firstFailure,
                invalidReasons: this.invalidReasons.slice(),
                dataLink: {
                    quality: this.invalidReasons.length ? "invalid" : this.lastSample ? "valid" : "waiting",
                    sampleCount: this.sampleCount,
                    rateHz: Number(this.sampleRateHz.toFixed(2)),
                    maxGapS: Number(this.maxTelemetryGapS.toFixed(2))
                },
                assertions: assertions,
                phases: this.selected.phases.map((phase, index) => {
                    const transition = this.transitions.find((item) => item.id === phase.id);
                    return {
                        id: phase.id,
                        label: phase.label,
                        timeoutS: phase.timeoutS,
                        status: transition?.exitedAtS !== null && transition?.exitedAtS !== undefined ? "complete" : this.currentPhase?.id === phase.id ? "active" : index < this.phaseIndex ? "complete" : "pending",
                        enteredAtS: transition?.enteredAtS ?? null,
                        exitedAtS: transition?.exitedAtS ?? null,
                        timedOut: transition?.timedOut ?? false
                    };
                }),
                events: this.events.slice()
            };
        }

        render() {
            renderMonitor(this);
        }
    }

    const engine = new ScenarioMonitorEngine(scenarios, catalogValidation);

    function createAssertionRuntime(spec) {
        return {
            spec: spec,
            status: "pending",
            reason: "",
            trueSince: null,
            passedAt: null,
            failedAt: null,
            progress: 0,
            timing: timingDescription(spec),
            observed: "awaiting phase data",
            lastCondition: null,
            evidence: null
        };
    }

    function resetAssertionRuntime(runtime) {
        const reset = createAssertionRuntime(runtime.spec);
        Object.assign(runtime, reset);
    }

    function hold(id, phase, description, test, graceS, observe) {
        return { id: id, phase: phase, description: description, test: test, mode: "hold", graceS: graceS || 0, observe: observe };
    }

    function holdFor(id, phase, description, test, seconds, observe) {
        return { id: id, phase: phase, description: description, test: test, mode: "hold-for", seconds: seconds, observe: observe };
    }

    function within(id, phase, description, test, seconds, observe) {
        return { id: id, phase: phase, description: description, test: test, mode: "within", seconds: seconds, observe: observe };
    }

    function terminal(id, phase, description, test, observe) {
        return { id: id, phase: phase, description: description, test: test, mode: "terminal", observe: observe };
    }

    function validateCatalog(catalog) {
        const issues = [];
        const ids = new Set();
        const codes = new Set();
        catalog.forEach((scenario, index) => {
            if (ids.has(scenario.id)) issues.push(issue("catalog", `scenarios[${index}].id`, `Duplicate scenario id '${scenario.id}'.`));
            if (codes.has(scenario.code)) issues.push(issue("catalog", `scenarios[${index}].code`, `Duplicate scenario code '${scenario.code}'.`));
            ids.add(scenario.id);
            codes.add(scenario.code);
            issues.push(...validateScenario(scenario, index));
        });
        return { valid: issues.length === 0, issues: issues };
    }

    function validateScenario(scenario, scenarioIndex) {
        const issues = [];
        const root = `scenarios[${scenarioIndex}]`;
        if (!scenario.id) issues.push(issue(scenario.id, `${root}.id`, "Scenario id is required."));
        if (!scenario.title) issues.push(issue(scenario.id, `${root}.title`, "Scenario title is required."));
        if (!Array.isArray(scenario.phases) || !scenario.phases.length) issues.push(issue(scenario.id, `${root}.phases`, "At least one phase is required."));
        if (!Array.isArray(scenario.assertions) || !scenario.assertions.length) issues.push(issue(scenario.id, `${root}.assertions`, "At least one assertion is required."));

        const phaseIds = new Set();
        (scenario.phases || []).forEach((phase, index) => {
            const path = `${root}.phases[${index}]`;
            if (phaseIds.has(phase.id)) issues.push(issue(scenario.id, `${path}.id`, `Duplicate phase id '${phase.id}'.`));
            phaseIds.add(phase.id);
            if (!(phase.timeoutS > 0)) issues.push(issue(scenario.id, `${path}.timeoutS`, "Phase timeout must be greater than zero."));
            if (typeof phase.enter !== "function" || typeof phase.exit !== "function") issues.push(issue(scenario.id, path, "Phase entry and exit evaluators are required."));
        });

        const assertionIds = new Set();
        (scenario.assertions || []).forEach((assertion, index) => {
            const path = `${root}.assertions[${index}]`;
            if (assertionIds.has(assertion.id)) issues.push(issue(scenario.id, `${path}.id`, `Duplicate assertion id '${assertion.id}'.`));
            assertionIds.add(assertion.id);
            if (!phaseIds.has(assertion.phase)) issues.push(issue(scenario.id, `${path}.phase`, `Unknown phase '${assertion.phase}'.`));
            if (!["within", "hold-for", "hold", "terminal"].includes(assertion.mode)) issues.push(issue(scenario.id, `${path}.mode`, `Unknown timing mode '${assertion.mode}'.`));
            if (["within", "hold-for"].includes(assertion.mode) && !(assertion.seconds > 0)) issues.push(issue(scenario.id, `${path}.seconds`, "Assertion duration must be greater than zero."));
            if (assertion.mode === "hold" && assertion.graceS < 0) issues.push(issue(scenario.id, `${path}.graceS`, "Assertion grace period cannot be negative."));
            if (typeof assertion.test !== "function") issues.push(issue(scenario.id, `${path}.test`, "Assertion evaluator is required."));
        });
        return issues;
    }

    function issue(scenarioId, path, message) {
        return { scenarioId: scenarioId || "catalog", path: path, message: message };
    }

    function normalizeState(raw) {
        const source = raw && typeof raw === "object" ? raw : {};
        const missingSignals = [];
        const mode = requiredString(source, ["mode"], "mode", missingSignals, "unknown");
        const scenarioId = requiredString(source, ["scenario", "id"], "scenario.id", missingSignals, window.flightScenarioSelection);
        const nextObjective = requiredString(source, ["nextObjective"], "nextObjective", missingSignals, "unknown");
        return {
            mode: mode,
            scenarioId: scenarioId,
            elapsedS: requiredNumber(source, ["scenario", "elapsedS"], "scenario.elapsedS", missingSignals, 0),
            engineHealth: requiredNumber(source, ["scenario", "engineHealth"], "scenario.engineHealth", missingSignals, 1),
            faultActive: requiredBoolean(source, ["scenario", "faultActive"], "scenario.faultActive", missingSignals, false),
            speedKts: requiredNumber(source, ["plane", "speedKts"], "plane.speedKts", missingSignals, 0),
            altitudeAgl: requiredNumber(source, ["plane", "altitudeAgl"], "plane.altitudeAgl", missingSignals, 0),
            verticalSpeedFpm: requiredNumber(source, ["plane", "verticalVelocityFpm"], "plane.verticalVelocityFpm", missingSignals, 0),
            rollDeg: requiredNumber(source, ["plane", "roll"], "plane.roll", missingSignals, 0),
            slip: requiredNumber(source, ["plane", "slip"], "plane.slip", missingSignals, 0),
            gLoad: requiredNumber(source, ["plane", "gLoad"], "plane.gLoad", missingSignals, 1),
            stall: requiredBoolean(source, ["plane", "stall"], "plane.stall", missingSignals, false),
            localizerDots: requiredNumber(source, ["approach", "localizerDots"], "approach.localizerDots", missingSignals, 0),
            windKts: requiredNumber(source, ["wind", "speedKts"], "wind.speedKts", missingSignals, 0),
            gatesCleared: gatesCleared(nextObjective),
            nextObjective: nextObjective,
            score: optionalNumber(source, ["score"], 0),
            missingSignals: Array.from(new Set(missingSignals))
        };
    }

    function requiredNumber(source, path, label, missing, fallback) {
        const value = readPath(source, path);
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) {
            missing.push(label);
            return fallback;
        }
        return parsed;
    }

    function optionalNumber(source, path, fallback) {
        const parsed = Number(readPath(source, path));
        return Number.isFinite(parsed) ? parsed : fallback;
    }

    function requiredString(source, path, label, missing, fallback) {
        const value = readPath(source, path);
        if (typeof value !== "string" || !value.trim()) {
            missing.push(label);
            return fallback;
        }
        return value;
    }

    function requiredBoolean(source, path, label, missing, fallback) {
        const value = readPath(source, path);
        if (typeof value !== "boolean") {
            missing.push(label);
            return fallback;
        }
        return value;
    }

    function readPath(source, path) {
        return path.reduce((value, key) => value && typeof value === "object" ? value[key] : undefined, source);
    }

    function gatesCleared(nextObjective) {
        if (nextObjective === "Gate Bravo") return 1;
        if (nextObjective === "Gate Charlie") return 2;
        if (nextObjective === "runway touchdown") return 3;
        return 0;
    }

    function captureEvidence(runtime, sample) {
        return {
            elapsedS: Number(sample.elapsedS.toFixed(2)),
            phase: runtime.spec.phase,
            observed: runtime.observed || defaultObservation(sample),
            telemetry: {
                speedKts: Number(sample.speedKts.toFixed(1)),
                altitudeAgl: Number(sample.altitudeAgl.toFixed(1)),
                verticalSpeedFpm: Math.round(sample.verticalSpeedFpm),
                rollDeg: Number(sample.rollDeg.toFixed(1)),
                localizerDots: Number(sample.localizerDots.toFixed(2)),
                windKts: Number(sample.windKts.toFixed(1)),
                engineHealth: Number(sample.engineHealth.toFixed(2)),
                stall: sample.stall,
                mode: sample.mode
            }
        };
    }

    function defaultObservation(sample) {
        return `IAS ${whole(sample.speedKts)} kt / bank ${decimal(sample.rollDeg)} deg / XTK ${decimal(sample.localizerDots, 2)} dot`;
    }

    function timingDescription(spec) {
        if (spec.mode === "within") return `within ${spec.seconds}s`;
        if (spec.mode === "hold-for") return `hold ${spec.seconds}s`;
        if (spec.mode === "hold") return "continuous";
        return "terminal";
    }

    function renderScenarioOptions() {
        if (!optionsRoot) return;
        optionsRoot.replaceChildren();
        scenarios.forEach((scenario) => {
            const button = document.createElement("button");
            const selected = scenario.id === engine.selected.id;
            button.type = "button";
            button.className = "scenario-option";
            button.dataset.scenarioId = scenario.id;
            button.dataset.difficulty = scenario.difficulty.toLowerCase();
            button.setAttribute("role", "radio");
            button.setAttribute("aria-checked", String(selected));
            button.disabled = engine.runActive;
            if (selected) button.classList.add("is-selected");

            const top = document.createElement("span");
            top.className = "scenario-option-top";
            const code = document.createElement("span");
            code.textContent = scenario.code;
            const difficulty = document.createElement("span");
            difficulty.textContent = scenario.difficulty;
            top.append(code, difficulty);
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
        const failed = snapshot.assertions.filter((item) => item.status === "fail").length;
        monitorResult.dataset.status = snapshot.status;
        monitorResult.querySelector("strong").textContent = snapshot.status.toUpperCase();
        monitorScenario.textContent = runtimeEngine.selected.code;
        monitorPhase.textContent = snapshot.phaseLabel || (snapshot.status === "standby" ? "Awaiting flight" : snapshot.runActive ? "Awaiting phase" : "Run complete");
        monitorElapsed.textContent = `${snapshot.elapsedS.toFixed(1)} s`;
        monitorEvidence.textContent = failed ? `${passed}P / ${failed}F` : `${passed} / ${snapshot.assertions.length}`;
        if (monitorLink) {
            monitorLink.textContent = snapshot.status === "standby" ? "READY" : snapshot.dataLink.quality === "invalid" ? "FAULT" : snapshot.dataLink.rateHz > 0 ? `${snapshot.dataLink.rateHz.toFixed(1)} Hz` : "SYNC";
            monitorLink.dataset.quality = snapshot.dataLink.quality;
        }

        renderPhaseTrack(snapshot);
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
            const meta = document.createElement("div");
            meta.className = "assertion-meta";
            const timing = document.createElement("span");
            timing.textContent = runtime.timing;
            const observed = document.createElement("span");
            observed.textContent = runtime.evidence?.observed || runtime.observed;
            meta.append(timing, observed);
            const progress = document.createElement("div");
            progress.className = "assertion-progress";
            const fill = document.createElement("span");
            fill.style.width = `${clamp(runtime.progress, 0, 1) * 100}%`;
            progress.append(fill);
            copy.append(title, description, meta, progress);
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

    function renderPhaseTrack(snapshot) {
        if (!phaseTrack) return;
        phaseTrack.replaceChildren();
        snapshot.phases.forEach((phase, index) => {
            const step = document.createElement("div");
            step.className = "phase-step";
            step.dataset.status = phase.timedOut ? "invalid" : phase.status;
            const marker = document.createElement("span");
            marker.className = "phase-marker";
            marker.textContent = String(index + 1).padStart(2, "0");
            const copy = document.createElement("div");
            const title = document.createElement("strong");
            title.textContent = phase.label;
            const timing = document.createElement("span");
            if (phase.timedOut) timing.textContent = "timeout";
            else if (phase.status === "complete") timing.textContent = `${decimal(phase.enteredAtS, 1)}-${decimal(phase.exitedAtS, 1)}s`;
            else if (phase.status === "active") timing.textContent = `${snapshot.phaseAgeS.toFixed(1)} / ${phase.timeoutS}s`;
            else timing.textContent = `limit ${phase.timeoutS}s`;
            copy.append(title, timing);
            step.append(marker, copy);
            phaseTrack.append(step);
        });
    }

    function renderTelemetry(sample) {
        setTelemetry("speed", `${Math.round(sample.speedKts)} kt`, sample.speedKts < 105 ? "caution" : "normal");
        setTelemetry("altitude", `${Math.round(sample.altitudeAgl)} m`, "normal");
        setTelemetry("vertical-speed", `${signed(Math.round(sample.verticalSpeedFpm))} fpm`, Math.abs(sample.verticalSpeedFpm) > 1200 ? "caution" : "normal");
        setTelemetry("roll", `${signed(sample.rollDeg.toFixed(1))} deg`, Math.abs(sample.rollDeg) > 42 ? "caution" : "normal");
        setTelemetry("localizer", `${signed(sample.localizerDots.toFixed(2))} dot`, Math.abs(sample.localizerDots) > 2.5 ? "caution" : "normal");
        setTelemetry("wind", `${sample.windKts.toFixed(1)} kt`, sample.windKts >= 10 ? "active" : "normal");
        setTelemetry("engine", `${Math.round(sample.engineHealth * 100)}%`, sample.engineHealth < 0.25 ? "caution" : "normal");
        setTelemetry("g-load", `${sample.gLoad.toFixed(2)} G`, sample.gLoad > 2.5 ? "caution" : "normal");
    }

    function setTelemetry(key, value, state) {
        const node = telemetryNodes.get(key);
        if (!node) return;
        node.textContent = value;
        if (node.parentElement) node.parentElement.dataset.state = state;
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

    function decimal(value, digits) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed.toFixed(digits ?? 1) : "--";
    }

    function whole(value) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? Math.round(parsed) : "--";
    }

    function clamp(value, minimum, maximum) {
        return Math.max(minimum, Math.min(maximum, value));
    }

    function pollFlightState() {
        try {
            if (typeof window.render_game_to_text !== "function") return;
            engine.update(JSON.parse(window.render_game_to_text()));
            syncPreflightCopy();
        } catch (error) {
            engine.invalidate(`Telemetry packet rejected: ${error instanceof Error ? error.message : String(error)}`, engine.lastElapsed);
            engine.render();
            console.error("Scenario monitor update failed.", error);
        }
    }

    const observer = new MutationObserver(syncPreflightCopy);
    const flightRoot = document.getElementById("flight-sim-root");
    if (flightRoot) observer.observe(flightRoot, { childList: true, subtree: true });

    window.select_flight_scenario = (id) => engine.select(id);
    window.reset_scenario_monitor = () => {
        engine.reset();
        engine.render();
        renderScenarioOptions();
        return engine.snapshot();
    };
    window.update_scenario_monitor = (rawState) => {
        engine.update(rawState);
        return engine.snapshot();
    };
    window.render_scenario_monitor_to_text = () => JSON.stringify(engine.snapshot());
    window.validate_flight_scenarios = () => ({ valid: catalogValidation.valid, issues: catalogValidation.issues.slice() });

    engine.render();
    renderScenarioOptions();
    if (query.get("monitor") !== "manual") window.setInterval(pollFlightState, 120);
}());
