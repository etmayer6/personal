(function () {
    "use strict";

    const scriptUrl = new URL(document.currentScript.src, window.location.href);
    const rootUrl = new URL("./", scriptUrl);
    const modeKey = "ethan-site-gremlin-mode";
    const huntKey = "ethan-site-hunt-progress";
    const nightUnlockKey = "ethan-site-night-shift-unlocked";
    const nightModeKey = "ethan-site-night-shift";
    const visitKey = "ethan-site-visit-log";
    const originalName = "Ethan Mayer";
    const hunt = [
        {
            page: "home",
            host: ".hero-portrait",
            title: "The first mark",
            clue: "The next mark is filed with the work.",
            next: "projects/"
        },
        {
            page: "projects",
            host: ".project-tally",
            title: "The project index",
            clue: "The next mark developed somewhere among the photographs.",
            next: "photos/"
        },
        {
            page: "photos",
            host: ".photos-intro",
            title: "The photo journal",
            clue: "Three browser games are waiting for a player.",
            next: "games/"
        },
        {
            page: "games",
            host: ".game-flight",
            title: "The arcade",
            clue: "Follow the runway. The final mark is near the approach.",
            next: "flight-sim/"
        },
        {
            page: "flight",
            host: "#flight-sim-root .workHubHeader",
            title: "Containment failed",
            clue: "You found every mark. Gremlin Mode is now yours."
        }
    ];

    let memoryProgress = 0;
    let memoryMode = false;
    let memoryNightUnlocked = false;
    let memoryNightMode = false;
    let memoryVisits = [];
    let progress = readProgress();
    let gremlinMode = readMode();
    let nightShiftUnlocked = readNightUnlock() || progress >= hunt.length;
    let nightShiftMode = readNightMode() && nightShiftUnlocked;
    const page = identifyPage();
    const toast = createToast();
    const dialog = createDialog();
    const modeToggle = createModeToggle();
    const nightShiftExit = createNightShiftExit();
    const originalNavName = document.querySelector(".nav-name");
    let huntHostObserver = null;

    function identifyPage() {
        const classes = document.body.classList;
        if (classes.contains("home-body")) return "home";
        if (classes.contains("projects-body")) return "projects";
        if (classes.contains("photos-body")) return "photos";
        if (classes.contains("games-body")) return "games";
        if (classes.contains("flight-site-body")) return "flight";
        return "other";
    }

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
            if (key === huntKey) memoryProgress = Number(value) || 0;
            if (key === modeKey) memoryMode = value === "true";
            if (key === nightUnlockKey) memoryNightUnlocked = value === "true";
            if (key === nightModeKey) memoryNightMode = value === "true";
            if (key === visitKey) {
                try {
                    memoryVisits = JSON.parse(value);
                } catch (parseError) {
                    memoryVisits = [];
                }
            }
        }
    }

    function readProgress() {
        const stored = storageGet(huntKey);
        const value = stored == null ? memoryProgress : Number(stored);
        return Math.max(0, Math.min(hunt.length, Number.isFinite(value) ? value : 0));
    }

    function readMode() {
        const stored = storageGet(modeKey);
        return stored == null ? memoryMode : stored === "true";
    }

    function readNightUnlock() {
        const stored = storageGet(nightUnlockKey);
        return stored == null ? memoryNightUnlocked : stored === "true";
    }

    function readNightMode() {
        const stored = storageGet(nightModeKey);
        return stored == null ? memoryNightMode : stored === "true";
    }

    function recordVisit() {
        const routeLabels = {
            home: "Home",
            resume: "Resume",
            projects: "Projects",
            games: "Games",
            photos: "Photos",
            blog: "Blog",
            "flight-sim": "Flight Sim",
            pinpoint: "Pinpoint",
            "block-blast": "Block Blast",
            "word-sort": "Word Sort",
            travel: "Travel Map",
            apartments: "Apartment Hunt",
            "groggy-climbs": "Groggy Climbs",
            courseflow: "CourseFlow",
            "diet-tracker": "Diet Tracker",
            "meal-planner": "Meal Planner",
            "childhood-timeline": "Timeline",
            garage: "Garage Bay"
        };
        const currentUrl = new URL(window.location.href);
        const rootPath = rootUrl.pathname.endsWith("/") ? rootUrl.pathname : rootUrl.pathname + "/";
        const relativePath = currentUrl.pathname.startsWith(rootPath)
            ? currentUrl.pathname.slice(rootPath.length)
            : currentUrl.pathname.replace(/^\/+/, "");
        const route = relativePath.split("/").filter(Boolean)[0] || "home";
        if (!routeLabels[route]) return;

        let visits = memoryVisits;
        const stored = storageGet(visitKey);
        if (stored) {
            try {
                visits = JSON.parse(stored);
            } catch (error) {
                visits = [];
            }
        }
        if (!Array.isArray(visits)) visits = [];
        visits = visits.filter(function (entry) {
            return entry && entry.route !== route;
        });
        visits.push({ route: route, label: routeLabels[route] });
        storageSet(visitKey, JSON.stringify(visits.slice(-12)));
    }

    function createToast() {
        const element = document.createElement("div");
        element.className = "site-play-toast";
        element.setAttribute("role", "status");
        element.setAttribute("aria-live", "polite");
        document.body.appendChild(element);
        return element;
    }

    function announce(message) {
        toast.textContent = message;
        toast.classList.add("is-visible");
        window.clearTimeout(announce.timeoutId);
        announce.timeoutId = window.setTimeout(function () {
            toast.classList.remove("is-visible");
        }, 3400);
    }

    function createDialog() {
        const element = document.createElement("dialog");
        element.className = "site-play-dialog";
        element.addEventListener("click", function (event) {
            if (event.target === element) closeDialog();
        });
        document.body.appendChild(element);
        return element;
    }

    function closeDialog() {
        if (typeof dialog.close === "function") dialog.close();
        else dialog.removeAttribute("open");
    }

    function addDialogButton(container, label, className, action) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = className;
        button.textContent = label;
        button.addEventListener("click", action);
        container.appendChild(button);
        return button;
    }

    function showDialog(title, copy, nextPath, complete) {
        dialog.replaceChildren();

        const label = document.createElement("p");
        label.className = "site-play-dialog-label";
        label.textContent = complete ? "Scavenger hunt complete" : "Scavenger hunt";

        const heading = document.createElement("h2");
        heading.textContent = title;

        const message = document.createElement("p");
        message.className = "site-play-dialog-copy";
        message.textContent = copy;

        const actions = document.createElement("div");
        actions.className = "site-play-dialog-actions";

        if (nightShiftUnlocked || complete) {
            const nightLink = document.createElement("a");
            nightLink.href = new URL("night-shift/", rootUrl).href;
            nightLink.textContent = "Report for night shift";
            nightLink.className = "site-play-night-link";
            actions.appendChild(nightLink);
        }

        if (nextPath) {
            const link = document.createElement("a");
            link.href = new URL(nextPath, rootUrl).href;
            link.textContent = "Follow the clue";
            actions.appendChild(link);
        }

        addDialogButton(actions, complete ? "Release gremlins" : "Keep looking", "site-play-primary", function () {
            if (complete) setGremlinMode(true, true);
            closeDialog();
        });

        if (progress > 0) {
            addDialogButton(actions, "Reset hunt", "site-play-reset", function () {
                progress = 0;
                storageSet(huntKey, "0");
                setGremlinMode(false, false);
                renderHunt();
                closeDialog();
                announce("Scavenger hunt reset. The first mark is back on the homepage.");
            });
        }

        dialog.append(label, heading, message, actions);
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
    }

    function createModeToggle() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gremlin-mode-toggle";
        button.addEventListener("click", function () {
            setGremlinMode(!gremlinMode, true);
        });
        document.body.appendChild(button);
        return button;
    }

    function createNightShiftExit() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "night-shift-exit";
        button.textContent = "End Night Shift";
        button.addEventListener("click", function () {
            setNightShiftMode(false, true);
        });
        document.body.appendChild(button);
        return button;
    }

    function createGremlinIcon() {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttribute("class", "gremlin-icon");
        icon.setAttribute("viewBox", "0 0 64 64");
        icon.setAttribute("aria-hidden", "true");
        icon.innerHTML = `
            <path class="gremlin-icon-face" d="M22 19 5 8l6 24 7 2c-1 3-1 7 0 10 2 8 8 13 14 13s12-5 14-13c1-3 1-7 0-10l7-2 6-24-17 11c-3-2-7-3-10-3s-7 1-10 3Z"/>
            <path class="gremlin-icon-detail" d="m10 13 12 9-8 5-4-14Zm44 0-12 9 8 5 4-14ZM20 31l10-4-3 9-7-5Zm24 0-10-4 3 9 7-5Z"/>
            <path class="gremlin-icon-detail" d="M25 42c4 3 10 3 14 0-1 7-13 7-14 0Z"/>
            <path class="gremlin-icon-tooth" d="m28 43 2 4 2-4 2 4 2-4c-2 1-6 1-8 0Z"/>
            <circle class="gremlin-icon-eye" cx="25" cy="32" r="1.8"/>
            <circle class="gremlin-icon-eye" cx="39" cy="32" r="1.8"/>
        `;
        return icon;
    }

    function createSwarm() {
        if (document.querySelector(".gremlin-swarm")) return;
        const swarm = document.createElement("div");
        swarm.className = "gremlin-swarm";
        swarm.setAttribute("aria-hidden", "true");
        for (let index = 0; index < 4; index += 1) {
            const gremlin = document.createElement("span");
            gremlin.appendChild(createGremlinIcon());
            swarm.appendChild(gremlin);
        }
        document.body.appendChild(swarm);
    }

    function setGremlinMode(active, shouldAnnounce) {
        gremlinMode = Boolean(active);
        storageSet(modeKey, String(gremlinMode));
        document.body.classList.toggle("gremlin-mode", gremlinMode);
        modeToggle.hidden = !gremlinMode && progress < hunt.length;
        modeToggle.textContent = gremlinMode ? "Contain gremlins" : "Release gremlins";
        modeToggle.setAttribute("aria-pressed", String(gremlinMode));

        updateNavName();

        const existingSwarm = document.querySelector(".gremlin-swarm");
        if (gremlinMode) createSwarm();
        else if (existingSwarm) existingSwarm.remove();

        if (shouldAnnounce) {
            announce(gremlinMode
                ? "Gremlin Mode released. Type gremlin again to contain it."
                : "Gremlins contained. Mostly.");
        }
    }

    function updateNavName() {
        if (!originalNavName) return;
        if (nightShiftMode) originalNavName.textContent = "Ethan After Hours";
        else if (gremlinMode) originalNavName.textContent = "Ethan Mayhem";
        else originalNavName.textContent = originalName;
    }

    function unlockNightShift() {
        nightShiftUnlocked = true;
        storageSet(nightUnlockKey, "true");
    }

    function setNightShiftMode(active, shouldAnnounce) {
        nightShiftMode = Boolean(active) && nightShiftUnlocked;
        storageSet(nightModeKey, String(nightShiftMode));
        document.body.classList.toggle("night-shift-mode", nightShiftMode);
        nightShiftExit.hidden = !nightShiftMode;
        nightShiftExit.setAttribute("aria-pressed", String(nightShiftMode));
        updateNavName();

        if (shouldAnnounce) {
            announce(nightShiftMode
                ? "Night Shift active. The facility is running after hours."
                : "Night Shift ended. Daylight systems restored.");
        }
    }

    function showProgressDialog() {
        if (progress >= hunt.length) {
            showDialog(hunt[hunt.length - 1].title, hunt[hunt.length - 1].clue, null, true);
            return;
        }
        const lastFound = hunt[Math.max(0, progress - 1)];
        showDialog(lastFound.title, lastFound.clue, lastFound.next, false);
    }

    function renderHunt() {
        if (huntHostObserver) {
            huntHostObserver.disconnect();
            huntHostObserver = null;
        }
        document.querySelectorAll(".scavenger-token, .hunt-progress").forEach(function (element) {
            element.remove();
        });

        if (progress > 0) {
            const status = document.createElement("button");
            status.type = "button";
            status.className = "hunt-progress";
            status.textContent = progress >= hunt.length ? "Night Shift unlocked" : "Hunt " + progress + "/" + hunt.length;
            status.addEventListener("click", showProgressDialog);
            document.body.appendChild(status);
        } else if (nightShiftUnlocked) {
            const entry = document.createElement("button");
            entry.type = "button";
            entry.className = "hunt-progress night-shift-entry";
            entry.textContent = "Night Shift";
            entry.addEventListener("click", function () {
                window.location.href = new URL("night-shift/", rootUrl).href;
            });
            document.body.appendChild(entry);
        }

        modeToggle.hidden = !gremlinMode && progress < hunt.length;
        if (progress >= hunt.length) return;

        const current = hunt[progress];
        if (page !== current.page) return;
        const host = document.querySelector(current.host);
        if (!host) {
            huntHostObserver = new MutationObserver(function () {
                if (!document.querySelector(current.host)) return;
                huntHostObserver.disconnect();
                huntHostObserver = null;
                renderHunt();
            });
            huntHostObserver.observe(document.body, { childList: true, subtree: true });
            return;
        }

        host.classList.add("scavenger-host");
        const token = document.createElement("button");
        token.type = "button";
        token.className = "scavenger-token";
        token.appendChild(createGremlinIcon());
        token.title = "This was not here before.";
        token.setAttribute("aria-label", "Open scavenger hunt clue " + (progress + 1));
        token.addEventListener("click", function () {
            const found = current;
            progress += 1;
            storageSet(huntKey, String(progress));
            if (progress >= hunt.length) unlockNightShift();
            renderHunt();
            if (progress >= hunt.length) {
                setGremlinMode(true, false);
                showDialog(found.title, found.clue, null, true);
            } else {
                showDialog(found.title, found.clue, found.next, false);
            }
        });
        host.appendChild(token);
    }

    let typed = "";
    document.addEventListener("keydown", function (event) {
        const target = event.target;
        const isTyping = target instanceof HTMLElement &&
            (target.matches("input, textarea, select") || target.isContentEditable);
        if (isTyping || event.ctrlKey || event.metaKey || event.altKey) return;

        if (event.key.length === 1) {
            typed = (typed + event.key.toLowerCase()).slice(-7);
            if (typed === "gremlin") {
                typed = "";
                setGremlinMode(!gremlinMode, true);
            }
        }
    });

    if (progress >= hunt.length) unlockNightShift();
    recordVisit();
    setGremlinMode(gremlinMode, false);
    setNightShiftMode(nightShiftMode, false);
    renderHunt();
})();
