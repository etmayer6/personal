(function () {
    "use strict";

    const STORAGE_KEY = "ethan-childhood-timeline-demo-flags-v1";
    const events = [
        {
            id: "fixture-01", year: 1, era: "Early years", title: "First day with an oversized backpack", category: "School", source: "Archive A", certainty: "direct", score: 93, glyph: "AB", color: "#d4a46f",
            summary: "A short archive note marks the subject's first school morning and the backpack chosen for the occasion.",
            details: "The classifier found a direct subject reference, a first-day phrase, and a school theme. A reviewer kept the event because the context was explicit, then replaced the calendar date and every identifying detail for this fixture.",
            excerpt: "First morning at the new school. The backpack looked almost as tall as its very proud owner.",
            tags: ["first day", "school", "milestone"], record: "A-014"
        },
        {
            id: "fixture-02", year: 3, era: "Early years", title: "Rainy afternoon cardboard city", category: "Family", source: "Archive B", certainty: "context", score: 78, glyph: "BX", color: "#8aa6a2",
            summary: "A context-only entry describes a living-room project assembled during a long rainy weekend.",
            details: "The source did not name the subject directly, so the event remains labeled as confirmed context rather than direct evidence. In the private workflow, a person must verify this relationship before the event can be accepted.",
            excerpt: "Rain changed the weekend plans, so the floor became a cardboard city with roads, bridges, and a very ambitious airport.",
            tags: ["family", "creative", "weekend"], record: "B-031"
        },
        {
            id: "fixture-03", year: 5, era: "Grade school", title: "First team season wrap-up", category: "Sports", source: "Archive A", certainty: "direct", score: 90, glyph: "TM", color: "#86a979",
            summary: "A season-end post records a first year on a youth team and a new willingness to keep practicing.",
            details: "Sports terms, a direct subject reference, and a clear season-ending phrase produced a high relevance score. The public fixture omits the sport, team, result, and location.",
            excerpt: "The first season is officially complete. The best part was seeing practice turn into confidence week by week.",
            tags: ["sports", "team", "practice"], record: "A-067"
        },
        {
            id: "fixture-04", year: 8, era: "Grade school", title: "Science fair at the kitchen table", category: "School", source: "Archive B", certainty: "direct", score: 95, glyph: "SF", color: "#7398ad",
            summary: "An archive caption follows a small experiment from a crowded kitchen table to a school display board.",
            details: "The post contains direct evidence, a school event, and multiple matching project terms. Deduplication merged two captures of the same record and kept the longer source text.",
            excerpt: "The experiment finally worked after dinner. The display board still needed labels, but the kitchen-table test was a success.",
            tags: ["school", "project", "science"], record: "B-102"
        },
        {
            id: "fixture-05", year: 10, era: "Middle years", title: "A long weekend near the water", category: "Trip", source: "Archive A", certainty: "context", score: 84, glyph: "TR", color: "#7b9aa9",
            summary: "A generalized travel record preserves the memory of a quiet family weekend while removing the destination.",
            details: "This context event passed review because its surrounding archive records established who attended. The public-safe transformation removes the place, travel dates, route, and original media.",
            excerpt: "A slow weekend near the water: skipped stones, borrowed board games, and no schedule beyond dinner.",
            tags: ["trip", "family", "outdoors"], record: "A-141"
        },
        {
            id: "fixture-06", year: 12, era: "Teen years", title: "A new key on the kitchen counter", category: "Milestone", source: "Archive B", certainty: "direct", score: 92, glyph: "KY", color: "#c18a68",
            summary: "A milestone post marks a first step toward independence without retaining the exact date or place.",
            details: "The private classifier recognized milestone language and a direct mention. For this portfolio fixture, the specific license type, age, vehicle, and location are intentionally absent.",
            excerpt: "A new key landed on the kitchen counter today. Equal parts excitement, responsibility, and very careful first turns.",
            tags: ["milestone", "independence", "family"], record: "B-176"
        },
        {
            id: "fixture-07", year: 15, era: "Teen years", title: "Graduation cap beside the breakfast dishes", category: "Milestone", source: "Archive A", certainty: "direct", score: 95, glyph: "GR", color: "#b28aaf",
            summary: "A graduation-day record captures a transition while withholding the school, date, and ceremony details.",
            details: "The source includes a direct reference and strong milestone terms. The publication gate keeps only a generalized narrative and an archive-relative position.",
            excerpt: "The cap was waiting beside the breakfast dishes. A strange, ordinary beginning to a very big day.",
            tags: ["graduation", "school", "milestone"], record: "A-214"
        },
        {
            id: "fixture-08", year: 17, era: "Young adult", title: "Boxes in a first new place", category: "Transition", source: "Archive B", certainty: "context", score: 82, glyph: "MV", color: "#9a9271",
            summary: "A context record closes the sample timeline with a move and the beginning of a more independent chapter.",
            details: "The original private workflow can join context across nearby records. This fictional example demonstrates that capability without revealing an address, city, household members, or actual chronology.",
            excerpt: "The boxes arrived before the furniture. By sunset, one lamp and a borrowed chair were enough to make the place feel new.",
            tags: ["transition", "home", "independence"], record: "B-248"
        }
    ];

    const elements = {
        themeButtons: document.getElementById("theme-buttons"),
        search: document.getElementById("timeline-search"),
        source: document.getElementById("source-filter"),
        certainty: document.getElementById("certainty-filter"),
        score: document.getElementById("score-filter"),
        scoreOutput: document.getElementById("score-output"),
        filteredCount: document.getElementById("filtered-count"),
        clearFilters: document.getElementById("clear-filters"),
        sortButton: document.getElementById("sort-button"),
        timelineList: document.getElementById("timeline-list"),
        evidencePanel: document.getElementById("evidence-panel"),
        resetButton: document.getElementById("reset-button"),
        recordDialog: document.getElementById("record-dialog"),
        recordJson: document.getElementById("record-json"),
        toast: document.getElementById("app-toast")
    };

    const filters = { search: "", theme: "all", source: "all", certainty: "all", minScore: 70, order: "asc" };
    let selectedId = events[events.length - 1].id;
    let flagged = loadFlags();
    let toastTimer = 0;

    function loadFlags() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
            return Array.isArray(parsed) ? new Set(parsed.filter(function (id) { return events.some(function (event) { return event.id === id; }); })) : new Set();
        } catch (error) {
            return new Set();
        }
    }

    function saveFlags() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(flagged)));
        } catch (error) {
            showToast("Review flags are available for this visit only.");
        }
    }

    function renderThemeButtons() {
        const themes = ["all"].concat(Array.from(new Set(events.map(function (event) { return event.category; }))));
        elements.themeButtons.innerHTML = themes.map(function (theme) {
            return "<button class=\"theme-button " + (filters.theme === theme ? "is-active" : "") + "\" type=\"button\" data-theme=\"" + escapeHtml(theme) + "\">" + (theme === "all" ? "All" : escapeHtml(theme)) + "</button>";
        }).join("");
    }

    function filteredEvents() {
        const query = filters.search.trim().toLowerCase();
        return events.filter(function (event) {
            const haystack = [event.title, event.summary, event.details, event.category, event.source].concat(event.tags).join(" ").toLowerCase();
            return (!query || haystack.includes(query)) &&
                (filters.theme === "all" || event.category === filters.theme) &&
                (filters.source === "all" || event.source === filters.source) &&
                (filters.certainty === "all" || event.certainty === filters.certainty) &&
                event.score >= filters.minScore;
        }).sort(function (a, b) { return filters.order === "asc" ? a.year - b.year : b.year - a.year; });
    }

    function render() {
        renderThemeButtons();
        const visible = filteredEvents();
        if (!visible.some(function (event) { return event.id === selectedId; })) selectedId = visible.length ? visible[0].id : "";
        elements.scoreOutput.textContent = filters.minScore;
        elements.filteredCount.textContent = visible.length;
        elements.sortButton.dataset.order = filters.order;
        elements.sortButton.innerHTML = (filters.order === "asc" ? "Oldest first" : "Newest first") + " <span aria-hidden=\"true\">" + (filters.order === "asc" ? "&darr;" : "&uarr;") + "</span>";
        renderTimeline(visible);
        renderEvidence(events.find(function (event) { return event.id === selectedId; }) || null);
    }

    function renderTimeline(visible) {
        if (!visible.length) {
            elements.timelineList.innerHTML = "<div class=\"empty-timeline\"><strong>No moments match</strong><p>Lower the confidence threshold or clear a filter.</p></div>";
            return;
        }
        elements.timelineList.innerHTML = visible.map(function (event) {
            const active = event.id === selectedId;
            return "<button class=\"timeline-event " + (active ? "is-active" : "") + "\" type=\"button\" data-event=\"" + event.id + "\"><span class=\"timeline-dot\" style=\"--event-color:" + event.color + "\"></span><span class=\"event-meta\"><time>Archive year " + String(event.year).padStart(2, "0") + "</time><span class=\"event-pill " + (event.certainty === "direct" ? "direct" : "") + "\">" + (event.certainty === "direct" ? "Direct" : "Context") + "</span><span class=\"event-pill\">" + escapeHtml(event.category) + "</span></span><h4>" + escapeHtml(event.title) + "</h4><p>" + escapeHtml(event.summary) + "</p></button>";
        }).join("");
    }

    function renderEvidence(event) {
        if (!event) {
            elements.evidencePanel.innerHTML = "<div class=\"empty-timeline\"><strong>No event selected</strong><p>Adjust the filters to restore a public-safe record.</p></div>";
            return;
        }
        const isFlagged = flagged.has(event.id);
        elements.evidencePanel.innerHTML = "<div class=\"evidence-visual\" style=\"--visual-bg:" + event.color + "2b\"><span class=\"visual-glyph\">" + escapeHtml(event.glyph) + "</span></div><div class=\"evidence-body\"><div class=\"evidence-heading\"><p class=\"section-kicker\">" + escapeHtml(event.era) + " / Archive year " + String(event.year).padStart(2, "0") + "</p><h3>" + escapeHtml(event.title) + "</h3><p>" + escapeHtml(event.details) + "</p></div><div class=\"evidence-meta\"><span>" + escapeHtml(event.category) + "</span><span>" + escapeHtml(event.source) + "</span><span>" + (event.certainty === "direct" ? "Direct subject evidence" : "Confirmed context") + "</span></div><div class=\"confidence-block\"><div class=\"confidence-copy\"><span>Evidence confidence</span><strong>" + event.score + " / 100</strong></div><div class=\"confidence-track\"><i style=\"width:" + event.score + "%\"></i></div></div><div class=\"source-evidence\"><span>Fictional source excerpt</span><blockquote>&ldquo;" + escapeHtml(event.excerpt) + "&rdquo;</blockquote></div><div class=\"redaction-note\"><span>PUBLIC</span><p>Exact date, names, place, media, author identity, and original link are intentionally absent. This excerpt was written for the demo.</p></div><div class=\"evidence-actions\"><button type=\"button\" data-action=\"record\" data-id=\"" + event.id + "\">View structured record</button><button class=\"" + (isFlagged ? "is-reviewed" : "") + "\" type=\"button\" data-action=\"flag\" data-id=\"" + event.id + "\">" + (isFlagged ? "Flagged for re-review" : "Flag for re-review") + "</button></div></div>";
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char];
        });
    }

    function openRecord(event) {
        const publicRecord = {
            id: event.id,
            relativeYear: event.year,
            era: event.era,
            title: event.title,
            summary: event.summary,
            category: event.category,
            evidenceType: event.certainty,
            confidence: event.score,
            sourceAlias: event.source,
            tags: event.tags,
            privacy: {
                fictionalFixture: true,
                namesRemoved: true,
                exactDateRemoved: true,
                locationsRemoved: true,
                sourceLinkRemoved: true,
                originalMediaRemoved: true
            }
        };
        elements.recordJson.textContent = JSON.stringify(publicRecord, null, 2);
        elements.recordDialog.showModal();
    }

    function clearFilters() {
        filters.search = "";
        filters.theme = "all";
        filters.source = "all";
        filters.certainty = "all";
        filters.minScore = 70;
        elements.search.value = "";
        elements.source.value = "all";
        elements.certainty.value = "all";
        elements.score.value = "70";
        render();
    }

    function resetView() {
        clearFilters();
        filters.order = "asc";
        selectedId = events[events.length - 1].id;
        flagged = new Set();
        localStorage.removeItem(STORAGE_KEY);
        render();
        showToast("Public-safe timeline view restored.");
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        toastTimer = window.setTimeout(function () { elements.toast.classList.remove("is-visible"); }, 2700);
    }

    elements.search.addEventListener("input", function (event) { filters.search = event.target.value; render(); });
    elements.source.addEventListener("change", function (event) { filters.source = event.target.value; render(); });
    elements.certainty.addEventListener("change", function (event) { filters.certainty = event.target.value; render(); });
    elements.score.addEventListener("input", function (event) { filters.minScore = Number(event.target.value); render(); });
    elements.clearFilters.addEventListener("click", clearFilters);
    elements.resetButton.addEventListener("click", resetView);
    elements.sortButton.addEventListener("click", function () { filters.order = filters.order === "asc" ? "desc" : "asc"; render(); });

    elements.themeButtons.addEventListener("click", function (event) {
        const button = event.target.closest("[data-theme]");
        if (!button) return;
        filters.theme = button.dataset.theme;
        render();
    });

    elements.timelineList.addEventListener("click", function (event) {
        const button = event.target.closest("[data-event]");
        if (!button) return;
        selectedId = button.dataset.event;
        render();
    });

    elements.evidencePanel.addEventListener("click", function (event) {
        const button = event.target.closest("[data-action]");
        if (!button) return;
        const selected = events.find(function (item) { return item.id === button.dataset.id; });
        if (!selected) return;
        if (button.dataset.action === "record") openRecord(selected);
        if (button.dataset.action === "flag") {
            if (flagged.has(selected.id)) flagged.delete(selected.id); else flagged.add(selected.id);
            saveFlags();
            renderEvidence(selected);
            showToast(flagged.has(selected.id) ? "Record flagged for another private review." : "Review flag removed.");
        }
    });

    document.querySelectorAll(".hub-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelectorAll(".hub-nav a").forEach(function (item) { item.classList.remove("is-active"); });
            link.classList.add("is-active");
        });
    });

    render();
}());
