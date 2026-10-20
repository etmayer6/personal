(function () {
    const config = window.APARTMENTS_CONFIG || {};
    const dataUrl = String(config.dataUrl || "data/listings.json").trim();

    const searchInput = document.getElementById("search-input");
    const maxAllInInput = document.getElementById("max-all-in-input");
    const maxCommuteInput = document.getElementById("max-commute-input");
    const goodFitOnlyInput = document.getElementById("good-fit-only-input");
    const statusText = document.getElementById("status-text");
    const listingCountText = document.getElementById("listing-count-text");
    const ethanTopPicks = document.getElementById("ethan-top-picks");
    const listingsGrid = document.getElementById("listings-grid");
    const errorBox = document.getElementById("error-box");
    const comparisonGrid = document.getElementById("comparison-grid");
    const comparisonCount = document.getElementById("comparison-count");
    const comparisonFeedback = document.getElementById("comparison-feedback");
    const clearComparisonButton = document.getElementById("clear-comparison");
    const ethanTopPickConfigs = [
        {
            matchUrl: "https://www.wattsgroupiowa.com/plan/sinclair-on-16th/sinclair-on-16th-layout-1a",
            fallback: {
                id: "ethan-top-pick-sinclair-on-16th",
                title: "Sinclair on 16th Layout 1A | Watts Group",
                source: "wattsgroupiowa.com",
                url: "https://www.wattsgroupiowa.com/plan/sinclair-on-16th/sinclair-on-16th-layout-1a",
                location: "Sinclair on 16th",
                availabilityLabel: "Pinned pick",
                availabilityBucket: "available_now",
                summaryText: "Watts Group floor plan link for Ethan's Sinclair on 16th pick.",
                hideDefaultFlags: true
            },
            matcherGroups: [["sinclair", "16th"], ["watts", "sinclair"]]
        },
        {
            matcherGroups: [["broad", "main", "7th"], ["1107", "7th", "marion"]]
        },
        {
            matcherGroups: [["hidden", "creek"]]
        }
    ];

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

    const FALLBACK_ROWS = [
        {
            id: "fixture-hiawatha-one",
            title: "Example one-bedroom near Hiawatha",
            source: "Sample listing",
            url: "",
            location: "Hiawatha, Iowa",
            price: 1140,
            beds: 1,
            baths: 1,
            sqft: 752,
            commuteMin: 15,
            washerDryer: 1,
            dishwasher: 1,
            parking: 1,
            petFriendly: null,
            monthlyFees: 0,
            deposit: null,
            applicationFee: null,
            availableAt: null,
            status: "fixture",
            updatedAt: 1780000000000
        },
        {
            id: "fixture-marion-two",
            title: "Example two-bedroom in Marion",
            source: "Sample listing",
            url: "",
            location: "Marion, Iowa",
            price: 1280,
            beds: 2,
            baths: 1,
            sqft: 980,
            commuteMin: 18,
            washerDryer: 1,
            dishwasher: 1,
            parking: 1,
            petFriendly: 1,
            monthlyFees: 0,
            deposit: null,
            applicationFee: null,
            availableAt: null,
            status: "fixture",
            updatedAt: 1780000000000
        },
        {
            id: "fixture-cedar-rapids-loft",
            title: "Example loft with flexible commute",
            source: "Sample listing",
            url: "",
            location: "Cedar Rapids, Iowa",
            price: 1050,
            beds: 1,
            baths: 1,
            sqft: 710,
            commuteMin: 25,
            washerDryer: 1,
            dishwasher: null,
            parking: 1,
            petFriendly: 1,
            monthlyFees: 0,
            deposit: null,
            applicationFee: null,
            availableAt: null,
            status: "fixture",
            updatedAt: 1780000000000
        }
    ];

    let rows = [];
    let bootInFlight = false;
    const comparisonKey = "ethan-apartment-comparison-v1";
    let comparisonIds = [];

    try {
        const savedComparison = JSON.parse(localStorage.getItem(comparisonKey) || "[]");
        if (Array.isArray(savedComparison)) {
            comparisonIds = savedComparison.map(String).slice(0, 3);
        }
    } catch (error) {
        comparisonIds = [];
    }

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

    function saveComparison() {
        try {
            localStorage.setItem(comparisonKey, JSON.stringify(comparisonIds));
        } catch (error) {
            comparisonFeedback.textContent = "This comparison will last for this visit, but browser storage is unavailable.";
        }
    }

    function setComparisonFeedback(message) {
        comparisonFeedback.textContent = message || "";
    }

    function availabilityVariant(bucket) {
        if (bucket === "available_now") return "good";
        if (bucket === "stale" || bucket === "unavailable") return "bad";
        return "warn";
    }

    function buildSummaryText(item) {
        if (item.summaryText) return item.summaryText;

        const parts = [];
        if (item.location) parts.push(item.location);
        if (item.price != null) parts.push("rent " + fmtMoney(item.price));
        if (item.allInMonthly != null) parts.push("all-in " + fmtMoney(item.allInMonthly));
        if (item.commuteMin != null) parts.push(item.commuteMin + "m commute");

        return parts.length ? parts.join(" | ") : "Details pending";
    }

    function renderCards(target, items, emptyText, emptyAction) {
        target.innerHTML = "";

        if (!items.length) {
            const empty = document.createElement("div");
            empty.className = "empty-state";

            const copy = document.createElement("p");
            copy.textContent = emptyText || "No listings matched your filters.";
            empty.appendChild(copy);

            if (emptyAction) {
                const action = document.createElement("button");
                action.type = "button";
                action.className = "empty-action";
                action.textContent = emptyAction.label;
                action.addEventListener("click", emptyAction.onClick);
                empty.appendChild(action);
            }

            target.appendChild(empty);
            return;
        }

        items.forEach(function (item) {
            const card = document.createElement("article");
            card.className = "listing-card";
            if (comparisonIds.includes(String(item.id))) card.classList.add("is-compared");

            const title = document.createElement("h3");
            title.textContent = item.title;
            card.appendChild(title);

            const meta = document.createElement("div");
            meta.className = "listing-meta";
            if (item.fit != null) {
                meta.appendChild(createPill("Fit " + item.fit, item.fit >= prefs.goodFitThreshold ? "good" : ""));
            }
            if (item.availabilityLabel) {
                meta.appendChild(createPill(item.availabilityLabel, availabilityVariant(item.availabilityBucket)));
            }
            if (item.source) meta.appendChild(createPill(item.source));
            if (meta.childElementCount) {
                card.appendChild(meta);
            }

            const summary = document.createElement("div");
            summary.textContent = buildSummaryText(item);
            card.appendChild(summary);

            if (!item.hideDefaultFlags) {
                const flags = document.createElement("div");
                flags.className = "listing-flags";
                flags.appendChild(createPill("W/D: " + triText(item.washerDryer)));
                flags.appendChild(createPill("DW: " + triText(item.dishwasher)));
                flags.appendChild(createPill("Parking: " + triText(item.parking)));
                flags.appendChild(createPill("Pets: " + triText(item.petFriendly)));
                flags.appendChild(createPill("Available: " + fmtDate(item.availableAt)));
                card.appendChild(flags);
            }

            if (item.blockers && item.blockers.length) {
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
            if (item.id != null && item.fit != null) {
                const compare = document.createElement("button");
                const isSelected = comparisonIds.includes(String(item.id));
                compare.type = "button";
                compare.className = "compare-toggle";
                compare.textContent = isSelected ? "Comparing" : "Compare";
                compare.setAttribute("aria-pressed", String(isSelected));
                compare.setAttribute("aria-label", (isSelected ? "Remove " : "Compare ") + item.title);
                compare.addEventListener("click", function () {
                    toggleComparison(String(item.id));
                });
                links.appendChild(compare);
            }
            card.appendChild(links);

            target.appendChild(card);
        });
    }

    function metricValue(items, key, direction) {
        const values = items.map(function (item) {
            return item[key];
        }).filter(function (value) {
            return value != null && Number.isFinite(value);
        });
        if (items.length < 2 || !values.length) return null;
        return direction === "max" ? Math.max.apply(null, values) : Math.min.apply(null, values);
    }

    function appendFact(list, label, value, best) {
        const row = document.createElement("div");
        const term = document.createElement("dt");
        const detail = document.createElement("dd");
        term.textContent = label;
        detail.textContent = value;
        if (best) {
            detail.classList.add("best-value");
            const marker = document.createElement("span");
            marker.className = "best-marker";
            marker.textContent = "Best";
            detail.appendChild(marker);
        }
        row.append(term, detail);
        list.appendChild(row);
    }

    function renderComparison(pool) {
        const byId = new Map(pool.map(function (item) {
            return [String(item.id), item];
        }));
        const validIds = comparisonIds.filter(function (id) {
            return byId.has(id);
        });
        if (validIds.length !== comparisonIds.length) {
            comparisonIds = validIds;
            saveComparison();
        }

        const items = comparisonIds.map(function (id) {
            return byId.get(id);
        });
        comparisonCount.textContent = items.length + " of 3 selected";
        clearComparisonButton.disabled = items.length === 0;
        comparisonGrid.replaceChildren();

        if (!items.length) {
            const empty = document.createElement("div");
            empty.className = "comparison-empty";
            empty.textContent = "Your comparison is empty. Pick the places that deserve a closer look.";
            comparisonGrid.appendChild(empty);
            return;
        }

        const best = {
            fit: metricValue(items, "fit", "max"),
            allInMonthly: metricValue(items, "allInMonthly", "min"),
            commuteMin: metricValue(items, "commuteMin", "min"),
            moveInCash: metricValue(items, "moveInCash", "min"),
            sqft: metricValue(items, "sqft", "max")
        };

        items.forEach(function (item) {
            const card = document.createElement("article");
            card.className = "comparison-card";

            const header = document.createElement("header");
            const title = document.createElement("h3");
            title.textContent = item.title;
            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "comparison-remove";
            remove.textContent = "Remove";
            remove.setAttribute("aria-label", "Remove " + item.title + " from comparison");
            remove.addEventListener("click", function () {
                toggleComparison(String(item.id));
            });
            header.append(title, remove);
            card.appendChild(header);

            const fitVisual = document.createElement("div");
            fitVisual.className = "fit-visual";
            const fitLabel = document.createElement("div");
            const fitName = document.createElement("span");
            const fitValue = document.createElement("strong");
            fitName.textContent = "Fit score";
            fitValue.textContent = item.fit + " / 100";
            if (item.fit === best.fit) {
                const marker = document.createElement("span");
                marker.className = "best-marker";
                marker.textContent = "Best";
                fitValue.appendChild(marker);
            }
            fitLabel.append(fitName, fitValue);
            const track = document.createElement("span");
            track.className = "fit-track";
            const fill = document.createElement("span");
            fill.style.width = item.fit + "%";
            track.appendChild(fill);
            fitVisual.append(fitLabel, track);
            card.appendChild(fitVisual);

            const facts = document.createElement("dl");
            facts.className = "comparison-facts";
            const monthlyDelta = item.allInMonthly == null ? "" : prefs.maxAllIn - item.allInMonthly;
            const monthlyText = item.allInMonthly == null
                ? "Unknown"
                : fmtMoney(item.allInMonthly) + " · " + fmtMoney(Math.abs(monthlyDelta)) + (monthlyDelta >= 0 ? " under limit" : " over limit");
            const space = [
                item.beds == null ? null : item.beds + " bed",
                item.baths == null ? null : item.baths + " bath",
                item.sqft == null ? null : item.sqft.toLocaleString() + " sq ft"
            ].filter(Boolean).join(" · ") || "Unknown";
            const essentials = [
                "W/D " + triText(item.washerDryer),
                "DW " + triText(item.dishwasher),
                "Parking " + triText(item.parking),
                "Pets " + triText(item.petFriendly)
            ].join(" · ");
            const concerns = item.blockers && item.blockers.length ? item.blockers.join(" · ") : "No scored concerns";

            appendFact(facts, "Monthly", monthlyText, item.allInMonthly != null && item.allInMonthly === best.allInMonthly);
            appendFact(facts, "Commute", item.commuteMin == null ? "Unknown" : item.commuteMin + " minutes", item.commuteMin != null && item.commuteMin === best.commuteMin);
            appendFact(facts, "Move-in cash", item.moveInCash == null ? "Unknown" : fmtMoney(item.moveInCash), item.moveInCash != null && item.moveInCash === best.moveInCash);
            appendFact(facts, "Space", space, item.sqft != null && item.sqft === best.sqft);
            appendFact(facts, "Essentials", essentials, false);
            appendFact(facts, "Availability", item.availabilityLabel || "Unknown", false);
            appendFact(facts, "Watch for", concerns, false);
            card.appendChild(facts);
            comparisonGrid.appendChild(card);
        });
    }

    function toggleComparison(id) {
        const index = comparisonIds.indexOf(id);
        if (index >= 0) {
            comparisonIds.splice(index, 1);
            setComparisonFeedback("");
        } else if (comparisonIds.length >= 3) {
            setComparisonFeedback("Three finalists are already lined up. Remove one before adding another.");
            return;
        } else {
            comparisonIds.push(id);
            setComparisonFeedback(comparisonIds.length === 1 ? "First finalist added. Pick one or two more to reveal the tradeoffs." : "Comparison updated.");
        }
        saveComparison();
        render();
    }

    function pickCuratedListings(items) {
        const usedIds = new Set();

        return ethanTopPickConfigs.map(function (config) {
            const match = items.find(function (item) {
                if (usedIds.has(item.id)) return false;

                const haystack = [item.title, item.location, item.source, item.url]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                if (config.matchUrl && item.url === config.matchUrl) {
                    return true;
                }

                return (config.matcherGroups || []).some(function (terms) {
                    return terms.every(function (term) {
                        return haystack.indexOf(term) >= 0;
                    });
                });
            });

            if (match) {
                usedIds.add(match.id);
                return match;
            }

            return config.fallback || null;
        }).filter(Boolean);
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
        const curatedPicks = pickCuratedListings(enriched);
        const comparisonPool = enriched.concat(curatedPicks).filter(function (item, index, items) {
            return item.id != null && item.fit != null && items.findIndex(function (candidate) {
                return String(candidate.id) === String(item.id);
            }) === index;
        });

        listingCountText.textContent = visible.length + " listings";
        renderCards(ethanTopPicks, curatedPicks, "Top picks are unavailable right now.");
        renderCards(listingsGrid, visible, "No listings match this cut.", {
            label: "Clear filters",
            onClick: resetFilters
        });
        renderComparison(comparisonPool);
        document.body.dataset.demoState = visible.length ? "ready" : "empty";
    }

    function resetFilters() {
        searchInput.value = "";
        maxAllInInput.value = "1300";
        maxCommuteInput.value = "20";
        goodFitOnlyInput.checked = true;
        render();
    }

    function showError(message, actionLabel, action) {
        errorBox.replaceChildren();
        const copy = document.createElement("span");
        copy.textContent = message;
        errorBox.appendChild(copy);
        if (actionLabel && action) {
            const retry = document.createElement("button");
            retry.type = "button";
            retry.className = "error-retry";
            retry.textContent = actionLabel;
            retry.addEventListener("click", action);
            errorBox.appendChild(retry);
        }
        errorBox.classList.remove("hidden");
    }

    function clearError() {
        errorBox.replaceChildren();
        errorBox.classList.add("hidden");
    }

    function attachEvents() {
        [searchInput, maxAllInInput, maxCommuteInput, goodFitOnlyInput].forEach(function (el) {
            el.addEventListener("input", render);
            el.addEventListener("change", render);
        });
        clearComparisonButton.addEventListener("click", function () {
            comparisonIds = [];
            setComparisonFeedback("Comparison cleared.");
            saveComparison();
            render();
        });
    }

    async function boot() {
        if (bootInFlight) return;
        bootInFlight = true;
        document.body.dataset.demoState = "loading";

        if (!dataUrl) {
            statusText.textContent = "Sample shortlist ready";
            rows = FALLBACK_ROWS.slice();
            render();
            showError("Live listings are taking the day off, so here are three fictional places to test the board with.", "Try live listings again", boot);
            bootInFlight = false;
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
            statusText.textContent = "Listings loaded";
            render();
        } catch (error) {
            rows = FALLBACK_ROWS.slice();
            statusText.textContent = "Sample shortlist ready";
            render();
            showError("Live listings are out of reach right now, so the board is using three fictional places instead.", "Try live listings again", boot);
        } finally {
            bootInFlight = false;
        }
    }

    attachEvents();
    boot();
})();
