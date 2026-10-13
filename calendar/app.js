(function () {
    "use strict";

    const embed = document.getElementById("calendly-embed");
    const placeholder = document.getElementById("schedule-placeholder");
    const status = document.getElementById("schedule-status");
    const directLink = document.getElementById("schedule-direct-link");
    const plannerForm = document.getElementById("schedule-planner-form");
    const duration = document.getElementById("plan-duration");
    const timezone = document.getElementById("plan-timezone");
    const dateA = document.getElementById("plan-date-a");
    const dateB = document.getElementById("plan-date-b");
    const windowA = document.getElementById("plan-window-a");
    const windowB = document.getElementById("plan-window-b");
    const summary = document.getElementById("plan-summary");
    const copyButton = document.getElementById("copy-plan");
    const feedback = document.getElementById("plan-feedback");
    const configuredUrl = window.SITE_CALENDLY_URL || embed.dataset.calendlyUrl || "";
    const calendlyUrl = normalizeCalendlyUrl(configuredUrl);
    const windowLabels = {
        morning: "9–11 AM",
        lunch: "11:30 AM–1:30 PM",
        afternoon: "2–5 PM",
        evening: "6–8 PM"
    };

    function normalizeCalendlyUrl(value) {
        if (!value) return "";
        try {
            const url = new URL(value);
            if (url.protocol !== "https:" || !/(^|\.)calendly\.com$/i.test(url.hostname)) return "";
            return url.href;
        } catch (error) {
            return "";
        }
    }

    function setStatus(message) {
        status.textContent = message;
    }

    function setDemoState(value) {
        document.body.dataset.demoState = value;
    }

    function toInputDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function nextPlanningDay(offset) {
        const date = new Date();
        date.setHours(12, 0, 0, 0);
        date.setDate(date.getDate() + offset);
        while (date.getDay() === 0) date.setDate(date.getDate() + 1);
        return date;
    }

    function formatDate(value) {
        if (!value) return "another day";
        const parts = value.split("-").map(Number);
        const date = new Date(parts[0], parts[1] - 1, parts[2], 12);
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric"
        }).format(date);
    }

    function selectedPurpose() {
        return plannerForm.querySelector('input[name="plan-purpose"]:checked').value;
    }

    function durationLabel() {
        return duration.value === "60" ? "an hour" : `${duration.value} minutes`;
    }

    function updatePlan() {
        summary.textContent = `Hey Ethan — I’d love to ${selectedPurpose()} for ${durationLabel()}. I can do ${formatDate(dateA.value)}, ${windowLabels[windowA.value]}, or ${formatDate(dateB.value)}, ${windowLabels[windowB.value]} (${timezone.value}). Would either work?`;
        feedback.textContent = "";
    }

    function initializePlanner() {
        const today = toInputDate(new Date());
        dateA.min = today;
        dateB.min = today;
        dateA.defaultValue = toInputDate(nextPlanningDay(1));
        dateB.defaultValue = toInputDate(nextPlanningDay(3));
        dateA.value = dateA.defaultValue;
        dateB.value = dateB.defaultValue;
        timezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";
        updatePlan();
    }

    function fallbackCopy(text) {
        const field = document.createElement("textarea");
        field.value = text;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Copy command was not available.");
    }

    async function copyPlan() {
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
                await navigator.clipboard.writeText(summary.textContent);
            } else {
                fallbackCopy(summary.textContent);
            }
            feedback.textContent = "Copied — paste it into your usual chat with Ethan.";
            copyButton.textContent = "Copied";
            window.setTimeout(() => {
                copyButton.textContent = "Copy scheduling note";
            }, 1800);
        } catch (error) {
            feedback.textContent = "Select the note above and copy it manually.";
        }
    }

    function showConfiguredState() {
        setDemoState("ready");
        placeholder.hidden = true;
        directLink.hidden = false;
        directLink.href = calendlyUrl;
        setStatus("Choose a time that works for you.");
    }

    function showLoadError() {
        setDemoState("error");
        placeholder.hidden = false;
        placeholder.innerHTML = "<span class=\"placeholder-mark\" aria-hidden=\"true\">!</span><p class=\"eyebrow\">Booking page unavailable</p><h2>Open the calendar directly.</h2><p>Calendly could not load inside the page right now. Your scheduling link is still available in a new tab.</p><a href=\"" + calendlyUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\">Open booking page <span aria-hidden=\"true\">&nearr;</span></a>";
        directLink.hidden = false;
        directLink.href = calendlyUrl;
        setStatus("Use the direct booking link if the embed does not load.");
    }

    function initWidget() {
        if (!window.Calendly || typeof window.Calendly.initInlineWidget !== "function") {
            showLoadError();
            return;
        }
        showConfiguredState();
        window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: embed
        });
    }

    function loadWidget() {
        setDemoState("loading");
        if (document.querySelector("script[data-calendly-widget]")) {
            initWidget();
            return;
        }
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.dataset.calendlyWidget = "true";
        script.addEventListener("load", initWidget, { once: true });
        script.addEventListener("error", showLoadError, { once: true });
        document.head.appendChild(script);
    }

    window.addEventListener("message", function (event) {
        if (event.origin !== "https://calendly.com") return;
        if (event.data && event.data.event === "calendly.event_scheduled") {
            setStatus("Booked. Calendly is sending the invite now.");
        }
    });

    plannerForm.addEventListener("input", updatePlan);
    plannerForm.addEventListener("change", updatePlan);
    plannerForm.addEventListener("reset", function () {
        window.setTimeout(updatePlan);
    });
    copyButton.addEventListener("click", copyPlan);

    initializePlanner();

    if (!calendlyUrl) {
        setDemoState("ready");
        setStatus("Build a note with two times that work for you.");
        return;
    }

    loadWidget();
})();
