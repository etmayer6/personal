(function () {
    "use strict";

    const storageKey = "gremlin-garage-demo-v1";
    const systems = ["powertrain", "electrical", "chassis", "brakes", "safety"];
    const systemLabels = {
        powertrain: "Powertrain",
        electrical: "Electrical",
        chassis: "Chassis",
        brakes: "Brakes",
        safety: "Safety"
    };
    const severityLabels = {
        info: "Monitor",
        warn: "Watch",
        critical: "Critical"
    };
    const severityPenalty = { info: 5, warn: 12, critical: 28 };
    const systemMetrics = {
        powertrain: "Oil pressure 42 psi",
        electrical: "Charge rate 14.2 V",
        chassis: "Ride height stable",
        brakes: "Pad depth 7 mm",
        safety: "All restraints online"
    };
    const scanMessages = {
        powertrain: "Reading powertrain control modules...",
        electrical: "Checking voltage and charging buses...",
        chassis: "Comparing suspension and pressure sensors...",
        brakes: "Validating wheel-speed channels...",
        safety: "Polling restraint and occupant systems..."
    };
    const defaultIssues = [
        {
            id: "finding-brake-signal",
            title: "Front-right wheel speed signal",
            system: "brakes",
            severity: "critical",
            status: "open",
            notes: "Intermittent dropout recorded during the last low-speed test.",
            createdAt: "2026-07-19T14:20:00.000Z"
        },
        {
            id: "finding-voltage-drift",
            title: "12 V battery voltage drift",
            system: "electrical",
            severity: "warn",
            status: "open",
            notes: "Resting voltage is near the lower edge of the preferred range.",
            createdAt: "2026-07-17T09:40:00.000Z"
        },
        {
            id: "finding-tire-pressure",
            title: "Front-left pressure below target",
            system: "chassis",
            severity: "warn",
            status: "open",
            notes: "Pressure is 3 psi below the prototype road-test specification.",
            createdAt: "2026-07-15T18:05:00.000Z"
        },
        {
            id: "finding-idle-adaptation",
            title: "Cold-start idle adaptation",
            system: "powertrain",
            severity: "info",
            status: "open",
            notes: "Monitor the next three cold starts before scheduling work.",
            createdAt: "2026-07-12T12:15:00.000Z"
        },
        {
            id: "finding-occupant-calibration",
            title: "Passenger occupant sensor calibration",
            system: "safety",
            severity: "info",
            status: "resolved",
            notes: "Calibration completed and verified against the reference load.",
            createdAt: "2026-07-08T16:30:00.000Z"
        }
    ];

    const elements = {
        scanButton: document.getElementById("scan-button"),
        exportButton: document.getElementById("export-button"),
        resetButton: document.getElementById("reset-button"),
        clearSystem: document.getElementById("clear-system"),
        vehicleStage: document.getElementById("vehicle-stage"),
        scanOverlay: document.getElementById("scan-overlay"),
        scanTitle: document.getElementById("scan-title"),
        scanStatus: document.getElementById("scan-status"),
        scanProgress: document.getElementById("scan-progress"),
        healthScore: document.getElementById("health-score"),
        openCount: document.getElementById("open-count"),
        findingsTitle: document.getElementById("findings-title"),
        findingsList: document.getElementById("findings-list"),
        healthGrid: document.getElementById("health-grid"),
        showResolved: document.getElementById("show-resolved"),
        addIssueButton: document.getElementById("add-issue-button"),
        dialog: document.getElementById("finding-dialog"),
        dialogClose: document.getElementById("dialog-close"),
        form: document.getElementById("finding-form"),
        dialogTitle: document.querySelector("#finding-dialog h2"),
        title: document.getElementById("finding-title"),
        system: document.getElementById("finding-system"),
        severity: document.getElementById("finding-severity"),
        notes: document.getElementById("finding-notes"),
        saveButton: document.querySelector("#finding-form .save-button"),
        toast: document.getElementById("garage-toast")
    };

    let issues = loadIssues();
    let activeSystem = "all";
    let activeSeverity = "all";
    let editingId = null;
    let scanning = false;
    let scanStep = -1;
    let toastTimer = 0;

    function cloneDefaults() {
        return defaultIssues.map(function (issue) { return Object.assign({}, issue); });
    }

    function loadIssues() {
        try {
            const value = JSON.parse(window.localStorage.getItem(storageKey));
            if (Array.isArray(value) && value.every(isValidIssue)) return value;
        } catch (error) {
            // Storage is optional; the demo still works with in-memory data.
        }
        return cloneDefaults();
    }

    function isValidIssue(issue) {
        return issue && typeof issue.id === "string" && typeof issue.title === "string" &&
            systems.indexOf(issue.system) !== -1 && ["info", "warn", "critical"].indexOf(issue.severity) !== -1 &&
            ["open", "resolved"].indexOf(issue.status) !== -1;
    }

    function saveIssues() {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(issues));
        } catch (error) {
            showToast("Changes are active for this visit, but browser storage is unavailable.");
        }
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
        });
    }

    function formatDate(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return "Demo log";
        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
    }

    function getOpenIssues(system) {
        return issues.filter(function (issue) {
            return issue.status === "open" && (!system || issue.system === system);
        });
    }

    function getSystemHealth(system) {
        const penalty = getOpenIssues(system).reduce(function (total, issue) {
            return total + severityPenalty[issue.severity];
        }, 0);
        return Math.max(48, 100 - penalty);
    }

    function getSystemStatus(system) {
        const open = getOpenIssues(system);
        if (open.some(function (issue) { return issue.severity === "critical"; })) return "critical";
        if (open.some(function (issue) { return issue.severity === "warn"; })) return "watch";
        return "nominal";
    }

    function getFleetHealth() {
        const sum = systems.reduce(function (total, system) { return total + getSystemHealth(system); }, 0);
        return Math.round(sum / systems.length);
    }

    function render() {
        renderTelemetry();
        renderHotspots();
        renderFindings();
        renderHealth();
    }

    function renderTelemetry() {
        elements.healthScore.textContent = getFleetHealth() + "%";
        const open = getOpenIssues();
        elements.openCount.textContent = String(open.length);
        elements.openCount.setAttribute("aria-label", open.length + " open findings");
    }

    function renderHotspots() {
        document.querySelectorAll(".system-hotspot").forEach(function (hotspot) {
            const system = hotspot.dataset.system;
            const count = getOpenIssues(system).length;
            const status = getSystemStatus(system);
            hotspot.classList.toggle("is-active", system === activeSystem);
            hotspot.classList.toggle("is-watch", status === "watch");
            hotspot.classList.toggle("is-critical", status === "critical");
            const countLabel = hotspot.querySelector("[data-system-count]");
            if (countLabel) countLabel.textContent = count + (count === 1 ? " finding" : " findings");
        });
        elements.clearSystem.hidden = activeSystem === "all";
    }

    function renderFindings() {
        const visible = issues.filter(function (issue) {
            if (!elements.showResolved.checked && issue.status === "resolved") return false;
            if (activeSystem !== "all" && issue.system !== activeSystem) return false;
            if (activeSeverity !== "all" && issue.severity !== activeSeverity) return false;
            return true;
        }).sort(function (a, b) {
            const severityRank = { critical: 0, warn: 1, info: 2 };
            if (a.status !== b.status) return a.status === "open" ? -1 : 1;
            if (severityRank[a.severity] !== severityRank[b.severity]) return severityRank[a.severity] - severityRank[b.severity];
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        const heading = activeSystem === "all" ? "Findings" : systemLabels[activeSystem];
        elements.findingsTitle.childNodes[0].nodeValue = heading + " ";

        if (!visible.length) {
            elements.findingsList.innerHTML = "<div class=\"empty-findings\"><div><strong>No findings in this view</strong><p>Adjust the filters or add a new service record for this system.</p></div></div>";
            return;
        }

        elements.findingsList.innerHTML = visible.map(function (issue) {
            const resolved = issue.status === "resolved";
            return "<article class=\"finding-card" + (resolved ? " is-resolved" : "") + "\" data-severity=\"" + issue.severity + "\">" +
                "<div class=\"finding-topline\"><span>" + escapeHtml(severityLabels[issue.severity]) + "</span><time>" + escapeHtml(formatDate(issue.createdAt)) + "</time></div>" +
                "<h3>" + escapeHtml(issue.title) + "</h3>" +
                "<p>" + escapeHtml(issue.notes || "No technician notes added.") + "</p>" +
                "<div class=\"finding-meta\"><span>" + escapeHtml(systemLabels[issue.system]) + "</span><span>" + (resolved ? "Closed" : "Open") + "</span></div>" +
                "<div class=\"finding-actions\"><button type=\"button\" data-action=\"resolve\" data-id=\"" + escapeHtml(issue.id) + "\">" + (resolved ? "Reopen" : "Mark resolved") + "</button><button type=\"button\" data-action=\"edit\" data-id=\"" + escapeHtml(issue.id) + "\">Edit</button><button class=\"delete-finding\" type=\"button\" data-action=\"delete\" data-id=\"" + escapeHtml(issue.id) + "\">Delete</button></div>" +
                "</article>";
        }).join("");
    }

    function renderHealth() {
        elements.healthGrid.innerHTML = systems.map(function (system) {
            const health = getSystemHealth(system);
            const status = getSystemStatus(system);
            return "<button class=\"health-card" + (system === activeSystem ? " is-active" : "") + "\" type=\"button\" data-system=\"" + system + "\" data-status=\"" + status + "\">" +
                "<span>" + systemLabels[system] + "</span>" +
                "<strong>" + health + "%</strong>" +
                "<div class=\"health-meter\"><i style=\"width:" + health + "%\"></i></div>" +
                "<small>" + systemMetrics[system] + "</small>" +
                "</button>";
        }).join("");
    }

    function selectSystem(system) {
        activeSystem = system === activeSystem ? "all" : system;
        render();
        if (activeSystem !== "all") {
            showToast(systemLabels[activeSystem] + " isolated. Service queue updated.");
        }
    }

    function setSeverityFilter(severity) {
        activeSeverity = severity;
        document.querySelectorAll(".filter-button").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.severity === severity);
        });
        renderFindings();
    }

    function openDialog(issue) {
        editingId = issue ? issue.id : null;
        elements.dialogTitle.textContent = issue ? "Edit finding" : "Add a finding";
        elements.saveButton.innerHTML = issue ? "Save changes <span aria-hidden=\"true\">&rarr;</span>" : "Add to service queue <span aria-hidden=\"true\">&rarr;</span>";
        elements.title.value = issue ? issue.title : "";
        elements.system.value = issue ? issue.system : (activeSystem === "all" ? "powertrain" : activeSystem);
        elements.severity.value = issue ? issue.severity : "warn";
        elements.notes.value = issue ? issue.notes : "";
        if (typeof elements.dialog.showModal === "function") elements.dialog.showModal();
        else elements.dialog.setAttribute("open", "");
        window.setTimeout(function () { elements.title.focus(); }, 0);
    }

    function closeDialog() {
        editingId = null;
        if (typeof elements.dialog.close === "function") elements.dialog.close();
        else elements.dialog.removeAttribute("open");
    }

    function saveFinding(event) {
        event.preventDefault();
        const title = elements.title.value.trim();
        if (!title) {
            elements.title.focus();
            return;
        }

        if (editingId) {
            const issue = issues.find(function (item) { return item.id === editingId; });
            if (issue) {
                issue.title = title;
                issue.system = elements.system.value;
                issue.severity = elements.severity.value;
                issue.notes = elements.notes.value.trim();
            }
            showToast("Finding updated in the local service log.");
        } else {
            issues.unshift({
                id: "finding-" + Date.now(),
                title: title,
                system: elements.system.value,
                severity: elements.severity.value,
                status: "open",
                notes: elements.notes.value.trim(),
                createdAt: new Date().toISOString()
            });
            showToast("Finding added to the local service queue.");
        }

        saveIssues();
        closeDialog();
        render();
    }

    function handleFindingAction(event) {
        const button = event.target.closest("button[data-action]");
        if (!button) return;
        const issue = issues.find(function (item) { return item.id === button.dataset.id; });
        if (!issue) return;

        if (button.dataset.action === "resolve") {
            issue.status = issue.status === "resolved" ? "open" : "resolved";
            saveIssues();
            render();
            showToast(issue.status === "resolved" ? "Finding closed. Fleet health recalculated." : "Finding returned to the service queue.");
            return;
        }

        if (button.dataset.action === "edit") {
            openDialog(issue);
            return;
        }

        if (button.dataset.action === "delete" && window.confirm("Delete this fictional service finding?")) {
            issues = issues.filter(function (item) { return item.id !== issue.id; });
            saveIssues();
            render();
            showToast("Finding removed from the local service log.");
        }
    }

    function delay(milliseconds) {
        return new Promise(function (resolve) { window.setTimeout(resolve, milliseconds); });
    }

    async function runScan() {
        if (scanning) return;
        scanning = true;
        scanStep = 0;
        elements.scanButton.disabled = true;
        elements.scanButton.lastChild.textContent = "Scanning";
        elements.scanOverlay.hidden = false;
        elements.vehicleStage.classList.add("is-scanning");
        const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const stepDelay = reducedMotion ? 80 : 620;

        for (let index = 0; index < systems.length; index += 1) {
            scanStep = index;
            const system = systems[index];
            const hotspot = document.querySelector(".system-hotspot[data-system=\"" + system + "\"]");
            elements.scanTitle.textContent = "Scanning " + systemLabels[system];
            elements.scanStatus.textContent = scanMessages[system];
            elements.scanProgress.style.width = ((index + 1) / systems.length * 100) + "%";
            hotspot.classList.add("is-scanning");
            await delay(stepDelay);
            hotspot.classList.remove("is-scanning");
        }

        scanStep = systems.length;
        elements.scanTitle.textContent = "Scan complete";
        elements.scanStatus.textContent = getOpenIssues().length + " open findings across " + systems.length + " vehicle systems.";
        await delay(reducedMotion ? 100 : 850);
        elements.vehicleStage.classList.remove("is-scanning");
        elements.scanOverlay.hidden = true;
        elements.scanProgress.style.width = "0";
        elements.scanButton.disabled = false;
        elements.scanButton.lastChild.textContent = "Run full scan";
        scanning = false;
        scanStep = -1;
        showToast("Diagnostic scan complete. No new fictional findings detected.");
    }

    function exportLog() {
        const payload = {
            vehicle: "Apex GT / Prototype 04",
            exportedAt: new Date().toISOString(),
            fictionalDemo: true,
            fleetHealth: getFleetHealth(),
            findings: issues
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "apex-gt-diagnostic-log.json";
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        showToast("Fictional diagnostic log exported as JSON.");
    }

    function resetDemo() {
        if (!window.confirm("Reset all Garage Diagnostic Bay demo changes?")) return;
        issues = cloneDefaults();
        activeSystem = "all";
        activeSeverity = "all";
        elements.showResolved.checked = false;
        document.querySelectorAll(".filter-button").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.severity === "all");
        });
        try { window.localStorage.removeItem(storageKey); } catch (error) { /* No-op. */ }
        render();
        showToast("Garage demo returned to its original fictional data.");
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        toastTimer = window.setTimeout(function () { elements.toast.classList.remove("is-visible"); }, 3200);
    }

    document.querySelectorAll(".system-hotspot").forEach(function (button) {
        button.addEventListener("click", function () { selectSystem(button.dataset.system); });
    });
    document.querySelectorAll(".filter-button").forEach(function (button) {
        button.addEventListener("click", function () { setSeverityFilter(button.dataset.severity); });
    });
    elements.healthGrid.addEventListener("click", function (event) {
        const card = event.target.closest(".health-card[data-system]");
        if (card) selectSystem(card.dataset.system);
    });
    elements.findingsList.addEventListener("click", handleFindingAction);
    elements.showResolved.addEventListener("change", renderFindings);
    elements.clearSystem.addEventListener("click", function () { activeSystem = "all"; render(); });
    elements.addIssueButton.addEventListener("click", function () { openDialog(null); });
    elements.dialogClose.addEventListener("click", closeDialog);
    elements.dialog.addEventListener("click", function (event) { if (event.target === elements.dialog) closeDialog(); });
    elements.form.addEventListener("submit", saveFinding);
    elements.scanButton.addEventListener("click", runScan);
    elements.exportButton.addEventListener("click", exportLog);
    elements.resetButton.addEventListener("click", resetDemo);

    window.render_garage_to_text = function () {
        return JSON.stringify({
            view: activeSystem,
            severityFilter: activeSeverity,
            showingHistory: elements.showResolved.checked,
            fleetHealth: getFleetHealth(),
            scanning: scanning,
            scanSystem: scanStep >= 0 && scanStep < systems.length ? systems[scanStep] : null,
            openFindings: getOpenIssues().map(function (issue) {
                return { id: issue.id, system: issue.system, severity: issue.severity, title: issue.title };
            }),
            visibleFindingCount: elements.findingsList.querySelectorAll(".finding-card").length,
            dialogOpen: elements.dialog.hasAttribute("open")
        });
    };
    window.render_game_to_text = window.render_garage_to_text;
    window.advanceTime = function () {};

    render();
}());
