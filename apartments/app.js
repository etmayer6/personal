(function () {
    const config = window.APARTMENTS_CONFIG || {};
    const dataUrl = String(config.dataUrl || "data/listings.json").trim();

    const searchInput = document.getElementById("search-input");
    const maxAllInInput = document.getElementById("max-all-in-input");
    const maxCommuteInput = document.getElementById("max-commute-input");
    const goodFitOnlyInput = document.getElementById("good-fit-only-input");
    const statusText = document.getElementById("status-text");
    const listingCountText = document.getElementById("listing-count-text");
    const topMatches = document.getElementById("top-matches");
    const listingsGrid = document.getElementById("listings-grid");
    const errorBox = document.getElementById("error-box");

    const DAY = 24 * 60 * 60 * 1000;
    const prefs = {
        maxRent: 1100,
        maxAllIn: 1300,
        maxCommute: 20,
        monthlyIncome: 4200,
        moveInCashCap: 2800,
        goodFitThreshold: 72,
        requireWasherDryer: true,
        requireDishwasher: true,
        requireParking: false,
        requirePetFriendly: false
    };

    let rows = [];

    function fmtMoney(n) {
        if (n == null) return "-";
        return n.toLocaleString(undefined, {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        });
    }

    function fmtDate(ts) {
        if (ts == null) return "-";
        const d = new Date(ts);
        return Number.isFinite(d.getTime()) ? d.toLocaleDateString() : "-";
    }

    function triText(v) {
        if (v === 1) return "yes";
        if (v === 0) return "no";
        return "unknown";
    }

    function allIn(row) {
        if (row.price == null && row.monthlyFees == null) return null;
        return (row.price || 0) + (row.monthlyFees || 0);
    }

    function moveInCash(row) {
        if (row.price == null && row.deposit == null && row.applicationFee == null) return null;
        return (row.price || 0) + (row.deposit || 0) + (row.applicationFee || 0);
    }

    function availabilityFor(row) {
        const now = Date.now();
        if (row.status === "leased" || row.status === "rejected") {
            return { bucket: "unavailable", label: "Unavailable" };
        }
        if (row.availableAt != null) {
            if (row.availableAt <= now + 2 * DAY) return { bucket: "available_now", label: "Available now" };
            if (row.availableAt <= now + 21 * DAY) return { bucket: "available_soon", label: "Available soon" };
            return { bucket: "available_soon", label: "Future availability" };
        }
        if (now - row.updatedAt > 45 * DAY) return { bucket: "stale", label: "Stale listing" };
        return { bucket: "unknown", label: "Availability unknown" };
    }

    function score(row) {
        let fit = 45;
        const blockers = [];
        const total = allIn(row);
        const moveIn = moveInCash(row);
        const availability = availabilityFor(row);

        if (row.price != null && row.price <= prefs.maxRent) fit += 12;
        if (row.price != null && row.price > prefs.maxRent) blockers.push("high rent");
        if (total != null && total <= prefs.maxAllIn) fit += 18;
        if (total != null && total > prefs.maxAllIn) blockers.push("high all-in");
        if (row.commuteMin != null && row.commuteMin <= prefs.maxCommute) fit += 15;
        if (row.commuteMin != null && row.commuteMin > prefs.maxCommute) blockers.push("long commute");
        if (moveIn != null && moveIn <= prefs.moveInCashCap) fit += 8;
        if (moveIn != null && moveIn > prefs.moveInCashCap) blockers.push("high move-in");
        if (prefs.requireWasherDryer && row.washerDryer === 0) blockers.push("no W/D");
        if (prefs.requireDishwasher && row.dishwasher === 0) blockers.push("no dishwasher");
        if (prefs.requireParking && row.parking === 0) blockers.push("no parking");
        if (prefs.requirePetFriendly && row.petFriendly === 0) blockers.push("not pet-friendly");
        if (total != null && prefs.monthlyIncome > 0) {
            const pct = Math.round((total / prefs.monthlyIncome) * 100);
            if (pct <= 30) fit += 8;
            if (pct > 35) blockers.push(pct + "% income");
        }
        if (availability.bucket === "available_now") fit += 8;
        if (availability.bucket === "available_soon") fit += 4;
        if (availability.bucket === "unknown") blockers.push("availability unknown");
        if (availability.bucket === "stale") blockers.push("stale");
        if (availability.bucket === "unavailable") blockers.push("unavailable");
        if (row.rating != null) fit += Math.round(row.rating);
        if (row.status === "rejected" || row.status === "leased") fit = 0;

        fit = Math.max(0, Math.min(100, fit));

        return {
            fit: fit,
            blockers: blockers,
            allInMonthly: total,
            moveInCash: moveIn,
            availabilityLabel: availability.label,
            availabilityBucket: availability.bucket
        };
    }

    function createPill(text, variant) {
        const span = document.createElement("span");
        span.className = "pill" + (variant ? " " + variant : "");
        span.textContent = text;
        return span;
    }

    function renderCards(target, items) {
        target.innerHTML = "";

        if (!items.length) {
            const empty = document.createElement("p");
            empty.textContent = "No listings matched your filters.";
            target.appendChild(empty);
            return;
        }

        items.forEach(function (item) {
            const card = document.createElement("article");
            card.className = "listing-card";

            const title = document.createElement("h3");
            title.textContent = item.title;
            card.appendChild(title);

            const meta = document.createElement("div");
            meta.className = "listing-meta";
            meta.appendChild(createPill("Fit " + item.fit, item.fit >= prefs.goodFitThreshold ? "good" : ""));
            meta.appendChild(createPill(item.availabilityLabel, item.availabilityBucket === "available_now" ? "good" : item.availabilityBucket === "stale" || item.availabilityBucket === "unavailable" ? "bad" : "warn"));
            if (item.source) meta.appendChild(createPill(item.source));
            card.appendChild(meta);

            const summary = document.createElement("div");
            summary.textContent =
                (item.location || "Location unknown") +
                " | rent " + fmtMoney(item.price) +
                " | all-in " + fmtMoney(item.allInMonthly) +
                (item.commuteMin != null ? " | " + item.commuteMin + "m commute" : "");
            card.appendChild(summary);

            const flags = document.createElement("div");
            flags.className = "listing-flags";
            flags.appendChild(createPill("W/D: " + triText(item.washerDryer)));
            flags.appendChild(createPill("DW: " + triText(item.dishwasher)));
            flags.appendChild(createPill("Parking: " + triText(item.parking)));
            flags.appendChild(createPill("Pets: " + triText(item.petFriendly)));
            flags.appendChild(createPill("Available: " + fmtDate(item.availableAt)));
            card.appendChild(flags);

            if (item.blockers.length) {
                const blockers = document.createElement("div");
                blockers.className = "listing-flags";
                item.blockers.forEach(function (blocker) {
                    blockers.appendChild(createPill(blocker, "bad"));
                });
                card.appendChild(blockers);
            }

            const links = document.createElement("div");
            links.className = "listing-links";
            if (item.url) {
                const open = document.createElement("a");
                open.href = item.url;
                open.target = "_blank";
                open.rel = "noopener noreferrer";
                open.textContent = "Open listing";
                links.appendChild(open);
            }
            if (item.location) {
                const maps = document.createElement("a");
                maps.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(item.location);
                maps.target = "_blank";
                maps.rel = "noopener noreferrer";
                maps.textContent = "Open map";
                links.appendChild(maps);
            }
            card.appendChild(links);

            target.appendChild(card);
        });
    }

    function render() {
        const query = String(searchInput.value || "").trim().toLowerCase();
        prefs.maxAllIn = Number(maxAllInInput.value) || 0;
        prefs.maxCommute = Number(maxCommuteInput.value) || 0;

        const enriched = rows.map(function (row) {
            return Object.assign({}, row, score(row));
        }).sort(function (a, b) {
            return b.fit - a.fit;
        });

        const visible = enriched.filter(function (row) {
            if (goodFitOnlyInput.checked && row.fit < prefs.goodFitThreshold) return false;
            if (!query) return true;
            const hay = [row.title, row.location, row.source, row.url].join(" ").toLowerCase();
            return hay.indexOf(query) >= 0;
        });

        listingCountText.textContent = visible.length + " listings";
        renderCards(topMatches, visible.slice(0, 3));
        renderCards(listingsGrid, visible);
    }

    function showError(message) {
        errorBox.textContent = message;
        errorBox.classList.remove("hidden");
    }

    function clearError() {
        errorBox.textContent = "";
        errorBox.classList.add("hidden");
    }

    function attachEvents() {
        [searchInput, maxAllInInput, maxCommuteInput, goodFitOnlyInput].forEach(function (el) {
            el.addEventListener("input", render);
            el.addEventListener("change", render);
        });
    }

    async function boot() {
        attachEvents();

        if (!dataUrl) {
            statusText.textContent = "Set apartments/config.js with your listings JSON path.";
            showError("This page is ready, but apartments/config.js still has a blank dataUrl.");
            return;
        }

        statusText.textContent = "Loading listings...";
        clearError();

        try {
            const response = await fetch(dataUrl);
            if (!response.ok) {
                throw new Error("Listings file returned " + response.status);
            }
            const data = await response.json();
            rows = Array.isArray(data.listings) ? data.listings : [];
            statusText.textContent = "Loaded static apartment snapshot";
            render();
        } catch (error) {
            statusText.textContent = "Listing data unavailable";
            showError(String(error && error.message ? error.message : error));
        }
    }

    boot();
})();
