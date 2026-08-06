(function () {
    "use strict";

    const fixtureSamples = [
        { time: "T+00.0", phase: "Setup", altitude: 0, airspeed: 0, heading: 274, navDeviation: 0, engineHealth: 100, fault: "ARMED", event: "Scenario loaded", detail: "SCN-ENG-03 setup is ready for the guided run.", type: "run" },
        { time: "T+04.0", phase: "Climb", altitude: 4200, airspeed: 148, heading: 274, navDeviation: 0.2, engineHealth: 100, fault: "NOMINAL", event: "Climb phase entered", detail: "The simulated aircraft emitted a normalized climb sample.", type: "phase" },
        { time: "T+08.0", phase: "Fault response", altitude: 5100, airspeed: 144, heading: 274, navDeviation: 0.2, engineHealth: 18, fault: "INJECTED", event: "Left-engine fault injected", detail: "The fixed fault step changed engine health in the fixture stream.", type: "fault" },
        { time: "T+12.0", phase: "Stabilized", altitude: 5550, airspeed: 132, heading: 273, navDeviation: 0.4, engineHealth: 18, fault: "CONTAINED", event: "Response state captured", detail: "The run reached the evidence capture state.", type: "phase" },
        { time: "T+16.0", phase: "Evidence", altitude: 5600, airspeed: 130, heading: 273, navDeviation: 0.4, engineHealth: 18, fault: "RECORDED", event: "Evidence package ready", detail: "The reporter attached source context to the final assertions.", type: "pass" }
    ];

    const phases = [
        { label: "Setup", note: "Load fixture" },
        { label: "Climb", note: "Emit state" },
        { label: "Fault response", note: "Inject fault" },
        { label: "Stabilized", note: "Check rules" },
        { label: "Evidence", note: "Report result" }
    ];

    const assertions = [
        { id: "REQ-ENG-01", phase: "Fault response", title: "Injected fault is visible", description: "Normalized telemetry records the engine state change.", start: 2, passAt: 2, observe: (sample) => `engine ${sample.engineHealth}% / ${sample.fault.toLowerCase()}` },
        { id: "REQ-PHASE-02", phase: "Stabilized", title: "Phase order is preserved", description: "The response state follows the injected fault without skipping a phase.", start: 3, passAt: 3, observe: (sample) => sample ? `phase ${sample.phase.toLowerCase()}` : "awaiting phase data" },
        { id: "REQ-EVID-03", phase: "Evidence", title: "Source context stays attached", description: "The final report keeps the sample, phase, and assertion together.", start: 4, passAt: 4, observe: (sample) => sample ? `${sample.time} / ${sample.phase.toLowerCase()}` : "awaiting evidence" },
        { id: "REQ-RUN-04", phase: "Evidence", title: "Run remains deterministic", description: "The same fixture sequence produces the same evidence shape.", start: 4, passAt: 4, observe: (sample) => sample ? `${fixtureSamples.length} fixed samples` : "awaiting run" }
    ];

    const nodes = {
        runStatus: document.querySelector("[data-role='run-status']"),
        runStep: document.querySelector("[data-role='run-step']"),
        runProgressLabel: document.querySelector("[data-role='run-progress-label']"),
        runProgress: document.querySelector("[data-role='run-progress']"),
        phaseTrack: document.querySelector("[data-role='phase-track']"),
        assertionList: document.querySelector("[data-role='assertion-list']"),
        evidenceCount: document.querySelector("[data-role='evidence-count']"),
        eventList: document.querySelector("[data-role='event-list']"),
        exportStatus: document.querySelector("[data-role='export-status']"),
        variation: document.querySelector("[data-role='variation']")
    };

    const telemetryNodes = new Map();
    document.querySelectorAll("[data-telemetry]").forEach((node) => telemetryNodes.set(node.dataset.telemetry, node));

    const motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
    const state = {
        cursor: -1,
        running: false,
        timer: null,
        events: []
    };

    function reset() {
        stop();
        state.cursor = -1;
        state.events = [{ time: "T+00.0", event: "Ready for run", detail: "The guided fixture is loaded. Press Run or advance one sample.", type: "run" }];
        render();
    }

    function stop() {
        if (state.timer !== null) {
            window.clearInterval(state.timer);
            state.timer = null;
        }
        state.running = false;
    }

    function startRun() {
        reset();
        state.running = true;
        advanceStep();
        if (motionQuery.matches) {
            while (state.cursor < fixtureSamples.length - 1) advanceStep();
            return;
        }
        state.timer = window.setInterval(() => {
            if (state.cursor >= fixtureSamples.length - 1) {
                stop();
                render();
                return;
            }
            advanceStep();
        }, 760);
    }

    function advanceStep() {
        if (state.cursor >= fixtureSamples.length - 1) {
            stop();
            return;
        }
        state.cursor += 1;
        const sample = currentSample();
        const actual = sampleWithVariation(sample);
        state.events.unshift({ time: actual.time, event: actual.event, detail: actual.detail, type: actual.type });
        if (state.cursor === fixtureSamples.length - 1) stop();
        render();
    }

    function currentSample() {
        return state.cursor >= 0 ? fixtureSamples[state.cursor] : null;
    }

    function sampleWithVariation(sample) {
        if (!sample || !nodes.variation?.checked || state.cursor < 3) return sample;
        return { ...sample, navDeviation: 3.6, event: state.cursor === 3 ? "Navigation deviation observed" : "Evidence package records deviation", detail: state.cursor === 3 ? "The optional stress input moves outside the fictional rule envelope." : "The reporter preserves the failed assertion and its source sample.", type: state.cursor === 3 ? "fail" : "fail" };
    }

    function statusForAssertion(assertion) {
        if (state.cursor < assertion.start) return "pending";
        if (nodes.variation?.checked && assertion.id === "REQ-PHASE-02" && state.cursor >= assertion.passAt) return "fail";
        if (state.cursor >= assertion.passAt) return "pass";
        return "active";
    }

    function render() {
        const sample = sampleWithVariation(currentSample());
        const runComplete = state.cursor === fixtureSamples.length - 1;
        const hasFailure = assertions.some((assertion) => statusForAssertion(assertion) === "fail");
        const status = runComplete ? (hasFailure ? "fail" : "pass") : state.cursor >= 0 ? "running" : "standby";
        const completed = assertions.filter((assertion) => ["pass", "fail"].includes(statusForAssertion(assertion))).length;

        if (nodes.runStatus) {
            nodes.runStatus.dataset.status = status;
            nodes.runStatus.textContent = status.toUpperCase();
        }
        if (nodes.runStep) nodes.runStep.textContent = sample ? `${sample.time} / ${sample.phase}` : "Awaiting run";
        if (nodes.runProgressLabel) nodes.runProgressLabel.textContent = `${Math.max(0, state.cursor + 1)} / ${fixtureSamples.length}`;
        if (nodes.runProgress) nodes.runProgress.style.width = `${Math.max(0, state.cursor + 1) / fixtureSamples.length * 100}%`;
        if (nodes.evidenceCount) nodes.evidenceCount.textContent = `${completed} / ${assertions.length}`;

        renderPhases();
        renderTelemetry(sample);
        renderAssertions(sample);
        renderEvents();
        if (nodes.exportStatus && !state.running) {
            nodes.exportStatus.textContent = runComplete ? "Summary includes final evidence." : "Ready for a run.";
        }
    }

    function renderPhases() {
        if (!nodes.phaseTrack) return;
        nodes.phaseTrack.replaceChildren();
        phases.forEach((phase, index) => {
            const item = document.createElement("li");
            item.className = "phase-step";
            const status = state.cursor < 0 || index > state.cursor ? "pending" : index === state.cursor ? "active" : "complete";
            item.dataset.status = status;
            const title = document.createElement("strong");
            title.textContent = phase.label;
            const note = document.createElement("small");
            note.textContent = status === "complete" ? "captured" : status === "active" ? "current" : phase.note;
            item.append(title, note);
            nodes.phaseTrack.append(item);
        });
    }

    function renderTelemetry(sample) {
        const values = sample ? {
            phase: sample.phase,
            time: sample.time,
            altitude: `${sample.altitude} ft`,
            airspeed: `${sample.airspeed} kt`,
            heading: `${sample.heading} deg`,
            navDeviation: `${sample.navDeviation.toFixed(1)} dot`,
            engineHealth: `${sample.engineHealth}%`,
            fault: sample.fault
        } : {
            phase: "Awaiting run",
            time: "--",
            altitude: "--",
            airspeed: "--",
            heading: "--",
            navDeviation: "--",
            engineHealth: "--",
            fault: "--"
        };
        telemetryNodes.forEach((node, key) => {
            node.textContent = values[key];
            node.dataset.state = key === "fault" && sample?.fault === "INJECTED" ? "fault" : key === "navDeviation" && sample?.navDeviation > 2 ? "caution" : "normal";
        });
    }

    function renderAssertions(sample) {
        if (!nodes.assertionList) return;
        nodes.assertionList.replaceChildren();
        assertions.forEach((assertion) => {
            const status = statusForAssertion(assertion);
            const row = document.createElement("article");
            row.className = "assertion-row";
            row.dataset.status = status;

            const badge = document.createElement("span");
            badge.className = "assertion-status";
            badge.textContent = status === "pending" ? "WAIT" : status.toUpperCase();

            const copy = document.createElement("div");
            copy.className = "assertion-copy";
            const title = document.createElement("strong");
            title.textContent = `${assertion.id} / ${assertion.phase}`;
            const description = document.createElement("p");
            description.textContent = status === "fail" ? "Navigation deviation exceeded the fictional 1.5 dot envelope." : assertion.description;
            const meta = document.createElement("div");
            meta.className = "assertion-meta";
            const timing = document.createElement("span");
            timing.textContent = status === "pass" ? `captured ${fixtureSamples[assertion.passAt].time}` : status === "fail" ? "evidence retained" : status === "active" ? "watching" : "awaiting phase";
            const observed = document.createElement("span");
            const evidenceSample = fixtureSamples[assertion.passAt] ? sampleWithVariation({ ...fixtureSamples[assertion.passAt] }) : sample;
            observed.textContent = status === "pending" ? "awaiting sample" : assertion.observe(evidenceSample || sample) || "awaiting sample";
            meta.append(timing, observed);
            const progress = document.createElement("div");
            progress.className = "assertion-progress";
            const fill = document.createElement("span");
            fill.style.width = status === "pass" || status === "fail" ? "100%" : status === "active" ? "55%" : "0%";
            progress.append(fill);
            copy.append(title, description, meta, progress);
            row.append(badge, copy);
            nodes.assertionList.append(row);
        });
    }

    function renderEvents() {
        if (!nodes.eventList) return;
        nodes.eventList.replaceChildren();
        state.events.slice(0, 8).forEach((event) => {
            const item = document.createElement("li");
            item.className = "event-row";
            item.dataset.type = event.type;
            const time = document.createElement("time");
            time.className = "event-time";
            time.textContent = event.time;
            const copy = document.createElement("div");
            copy.className = "event-copy";
            const title = document.createElement("strong");
            title.textContent = event.event;
            const detail = document.createElement("p");
            detail.textContent = event.detail;
            copy.append(title, detail);
            item.append(time, copy);
            nodes.eventList.append(item);
        });
    }

    function evidenceSnapshot() {
        const visibleSamples = fixtureSamples.slice(0, Math.max(0, state.cursor + 1)).map((sample, index) => {
            const item = sampleWithVariation({ ...sample });
            return { sequence: index + 1, ...item };
        });
        return {
            demo: {
                name: "Scenario Lab",
                runId: "DEMO-SCN-ENG-03",
                publicSafe: true,
                statement: "Fictional public-safe logic. No employer code, data, interfaces, or proprietary requirements are included."
            },
            scenario: {
                id: "SCN-ENG-03",
                title: "Engine fault on climb",
                setup: "Fictional twin-engine test vehicle / climb profile",
                faultInjection: "Left-engine health changes at fixed sample 03"
            },
            normalizedTelemetry: visibleSamples,
            assertions: assertions.map((assertion) => ({
                id: assertion.id,
                phase: assertion.phase,
                title: assertion.title,
                status: statusForAssertion(assertion),
                evidence: assertion.observe(fixtureSamples[assertion.passAt] || currentSample() || fixtureSamples[0])
            })),
            eventTimeline: state.events.slice().reverse(),
            note: "All values are fixture samples for a portfolio demonstration, not aircraft measurements."
        };
    }

    function exportEvidence() {
        const blob = new Blob([JSON.stringify(evidenceSnapshot(), null, 2)], { type: "application/json" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "scenario-lab-evidence-summary.json";
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => window.URL.revokeObjectURL(url), 0);
        if (nodes.exportStatus) nodes.exportStatus.textContent = "Download prepared locally.";
    }

    document.querySelectorAll("[data-action='run']").forEach((button) => button.addEventListener("click", startRun));
    document.querySelectorAll("[data-action='step']").forEach((button) => button.addEventListener("click", advanceStep));
    document.querySelectorAll("[data-action='reset']").forEach((button) => button.addEventListener("click", reset));
    document.querySelectorAll("[data-action='export']").forEach((button) => button.addEventListener("click", exportEvidence));
    nodes.variation?.addEventListener("change", () => {
        if (state.cursor >= 0) reset();
        render();
    });

    document.addEventListener("keydown", (event) => {
        if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
        if (event.key.toLowerCase() === "r") {
            event.preventDefault();
            startRun();
        } else if (event.key === "ArrowRight" || event.key === ".") {
            event.preventDefault();
            advanceStep();
        } else if (event.key === "Escape") {
            event.preventDefault();
            reset();
        }
    });

    window.render_scenario_lab_to_text = () => JSON.stringify({
        status: nodes.runStatus?.dataset.status || "standby",
        step: state.cursor + 1,
        sample: currentSample(),
        assertions: assertions.map((assertion) => ({ id: assertion.id, status: statusForAssertion(assertion) })),
        events: state.events.slice(0, 8)
    });
    window.advance_scenario_lab = advanceStep;
    window.reset_scenario_lab = reset;

    reset();
}());
