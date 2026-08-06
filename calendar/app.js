(function () {
    "use strict";

    const embed = document.getElementById("calendly-embed");
    const placeholder = document.getElementById("schedule-placeholder");
    const status = document.getElementById("schedule-status");
    const directLink = document.getElementById("schedule-direct-link");
    const configuredUrl = window.SITE_CALENDLY_URL || embed.dataset.calendlyUrl || "";
    const calendlyUrl = normalizeCalendlyUrl(configuredUrl);

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

    if (!calendlyUrl) {
        setDemoState("empty");
        setStatus("No public Calendly link configured.");
        return;
    }

    loadWidget();
})();
