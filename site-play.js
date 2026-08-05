(function () {
    "use strict";

    const scriptUrl = new URL(document.currentScript.src, window.location.href);
    const rootUrl = new URL("./", scriptUrl);
    const isPetStudio = document.body.classList.contains("pet-studio-body");
    const modeKey = "ethan-site-gremlin-mode";
    const huntKey = "ethan-site-hunt-progress";
    const nightUnlockKey = "ethan-site-night-shift-unlocked";
    const nightModeKey = "ethan-site-night-shift";
    const visitKey = "ethan-site-visit-log";
    const petKey = "ethan-site-custom-pet";
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
    let memoryPet = null;
    let progress = readProgress();
    let gremlinMode = readMode();
    let nightShiftUnlocked = readNightUnlock() || progress >= hunt.length;
    let nightShiftMode = readNightMode() && nightShiftUnlocked;
    const page = identifyPage();
    const toast = isPetStudio ? null : createToast();
    const dialog = isPetStudio ? document.createElement("dialog") : createDialog();
    const modeToggle = isPetStudio ? document.createElement("button") : createModeToggle();
    const nightShiftExit = isPetStudio ? document.createElement("button") : createNightShiftExit();
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
            if (key === petKey) {
                try {
                    memoryPet = JSON.parse(value);
                } catch (parseError) {
                    memoryPet = null;
                }
            }
        }
    }

    function storageRemove(key) {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            if (key === petKey) memoryPet = null;
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
            garage: "Garage Bay",
            "pet-studio": "Pet Studio"
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

    function sanitizePet(value) {
        if (!value || typeof value !== "object") return null;
        const name = String(value.name || "")
            .replace(/[^a-zA-Z0-9' !?.-]/g, "")
            .trim()
            .slice(0, 18);
        if (!name) return null;
        const species = ["cat", "dog", "fox", "dragon"].includes(value.species) ? value.species : "cat";
        const color = /^#[0-9a-f]{6}$/i.test(value.color) ? value.color : "#f2cb3f";
        const accent = /^#[0-9a-f]{6}$/i.test(value.accent) ? value.accent : "#e77952";
        const accessory = ["none", "scarf", "crown", "star"].includes(value.accessory) ? value.accessory : "none";
        return { name, species, color, accent, accessory };
    }

    function readPet() {
        const stored = storageGet(petKey);
        if (stored == null) return sanitizePet(memoryPet);
        try {
            return sanitizePet(JSON.parse(stored));
        } catch (error) {
            return null;
        }
    }

    function petMarkup(pet) {
        const creatures = {
            cat: `<path class="site-pet-ear" d="M18 28 14 10l14 10Zm28 0 4-18-14 10Z" fill="${pet.color}"/>
                <path class="site-pet-tail" d="M15 43C3 46 5 30 17 34" fill="none" stroke="${pet.color}" stroke-width="7" stroke-linecap="round"/>
                <ellipse class="site-pet-body" cx="32" cy="39" rx="18" ry="17" fill="${pet.color}"/>
                <ellipse class="site-pet-belly" cx="32" cy="44" rx="10" ry="8" fill="${pet.accent}" opacity="0.32"/>
                <path class="site-pet-detail" d="M19 45v7m26-7v7M17 37l-8-2m9 7-9 1m40-6 8-2m-9 7 9 1" fill="none" stroke-linecap="round"/>
                <circle class="site-pet-eye" cx="25" cy="35" r="2.2"/>
                <circle class="site-pet-eye" cx="39" cy="35" r="2.2"/>
                <path class="site-pet-detail" d="M29 41h6l-3 3Z" fill="${pet.accent}" stroke="none"/>
                <path class="site-pet-mouth" d="M29 44c2 2 4 2 6 0" fill="none" stroke="#102b36" stroke-width="1.6" stroke-linecap="round"/>`,
            dog: `<path class="site-pet-ear" d="M20 29C10 24 7 15 13 10c8 2 11 11 10 20Zm24 0c10-5 13-14 7-19-8 2-11 11-10 20Z" fill="${pet.color}"/>
                <path class="site-pet-tail" d="M48 40c13-6 13-16 4-17" fill="none" stroke="${pet.color}" stroke-width="7" stroke-linecap="round"/>
                <ellipse class="site-pet-body" cx="32" cy="40" rx="18" ry="16" fill="${pet.color}"/>
                <ellipse class="site-pet-belly" cx="32" cy="45" rx="11" ry="7" fill="${pet.accent}" opacity="0.34"/>
                <ellipse class="site-pet-muzzle" cx="32" cy="41" rx="8" ry="6" fill="${pet.accent}" opacity="0.82"/>
                <circle class="site-pet-eye" cx="25" cy="34" r="2.2"/>
                <circle class="site-pet-eye" cx="39" cy="34" r="2.2"/>
                <circle class="site-pet-nose" cx="32" cy="40" r="2.1" fill="#102b36"/>
                <path class="site-pet-detail" d="M20 48v5m24-5v5" fill="none" stroke-linecap="round"/>`,
            fox: `<path class="site-pet-ear" d="M18 28 12 7l17 14Zm28 0 6-21-17 14Z" fill="${pet.color}"/>
                <path class="site-pet-detail" d="m14 12 5 13 7-4Zm36 0-5 13-7-4Z" fill="${pet.accent}" stroke="none"/>
                <path class="site-pet-tail" d="M19 44C7 48 3 38 11 31l9 2Z" fill="${pet.color}"/>
                <path class="site-pet-detail" d="m10 37 9-4-5 9Z" fill="${pet.accent}" stroke="none"/>
                <path class="site-pet-body" d="M17 30c7-8 23-8 30 0l-3 19c-7 8-17 8-24 0Z" fill="${pet.color}"/>
                <path class="site-pet-belly" d="M27 42h10l-5 9Z" fill="${pet.accent}" opacity="0.76" stroke="none"/>
                <path class="site-pet-detail" d="M24 34 29 39m16-5-5 5" fill="none" stroke-linecap="round"/>
                <circle class="site-pet-eye" cx="25" cy="34" r="2.1"/>
                <circle class="site-pet-eye" cx="39" cy="34" r="2.1"/>
                <path class="site-pet-detail" d="m29 41 3 2 3-2" fill="none" stroke-linecap="round"/>`,
            dragon: `<path class="site-pet-wing" d="M20 31C10 29 5 22 7 12c8 2 14 8 17 16Zm24 0c10-2 15-9 13-19-8 2-14 8-17 16Z" fill="${pet.accent}"/>
                <path class="site-pet-ear" d="m23 23-5-11 10 6Zm18 0 5-11-10 6Z" fill="${pet.color}"/>
                <path class="site-pet-tail" d="M18 46C5 53 7 38 16 36" fill="none" stroke="${pet.color}" stroke-width="7" stroke-linecap="round"/>
                <path class="site-pet-detail" d="m12 45 5-5 4 4 4-5" fill="none" stroke="${pet.accent}" stroke-width="3" stroke-linecap="round"/>
                <path class="site-pet-body" d="M17 30c5-9 25-9 30 0l-3 20c-7 7-17 7-24 0Z" fill="${pet.color}"/>
                <path class="site-pet-belly" d="M27 36c3 3 7 3 10 0v14c-3 3-7 3-10 0Z" fill="${pet.accent}" opacity="0.54"/>
                <circle class="site-pet-eye" cx="25" cy="33" r="2.1"/>
                <circle class="site-pet-eye" cx="39" cy="33" r="2.1"/>
                <path class="site-pet-detail" d="M29 41h6m-5 5h4m-3-19 1-4 1 4" fill="none" stroke-linecap="round"/>`
        }[pet.species];
        const accessories = {
            none: "",
            scarf: `<path class="site-pet-accessory" d="M15 42c10 6 24 6 34 0l-2 8c-10 4-20 4-30 0Z" fill="${pet.accent}"/><path class="site-pet-accessory" d="M39 48h8v10h-8Z" fill="${pet.accent}"/>`,
            crown: `<path class="site-pet-accessory" d="m19 22 4-10 9 8 9-8 4 10Z" fill="${pet.accent}"/><path class="site-pet-accessory" d="M19 22h26v4H19Z" fill="${pet.accent}"/>`,
            star: `<path class="site-pet-accessory" d="m46 12 2 5 5 1-4 3 1 5-4-3-5 3 2-5-4-3 5-1Z" fill="${pet.accent}"/>`
        }[pet.accessory];
        return `${creatures}${accessories}`;
    }

    function createPetSvg(pet, compact) {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttribute("class", compact ? "site-pet-svg site-pet-svg-compact" : "site-pet-svg");
        icon.setAttribute("viewBox", "0 0 64 64");
        icon.setAttribute("aria-hidden", "true");
        icon.innerHTML = petMarkup(pet);
        return icon;
    }

    function ensurePetStyles() {
        if (document.querySelector("link[data-pet-styles]")) return;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.dataset.petStyles = "true";
        link.href = new URL("pet-companion.css?v=2", rootUrl).href;
        document.head.appendChild(link);
    }

    window.EthanSitePet = {
        key: petKey,
        sanitize: sanitizePet,
        createSvg: createPetSvg
    };

    function announce(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("is-visible");
        window.clearTimeout(announce.timeoutId);
        announce.timeoutId = window.setTimeout(function () {
            toast.classList.remove("is-visible");
        }, 3400);
    }

    function renderPetCompanion() {
        if (isPetStudio) return;
        const existing = document.querySelector(".site-pet-companion");
        if (existing) existing.remove();
        const pet = readPet();
        if (!pet) return;
        ensurePetStyles();

        const companion = document.createElement("button");
        companion.type = "button";
        companion.className = "site-pet-companion";
        companion.setAttribute("aria-label", "Open options for " + pet.name + ", your " + pet.species + " companion");
        companion.title = "Open options for " + pet.name;

        const name = document.createElement("span");
        name.className = "site-pet-companion-name";
        name.textContent = pet.name;

        const art = document.createElement("span");
        art.className = "site-pet-companion-art";
        art.appendChild(createPetSvg(pet, true));

        const hint = document.createElement("span");
        hint.className = "site-pet-companion-hint";
        hint.textContent = "options";

        companion.append(name, art, hint);
        companion.addEventListener("click", function () {
            showPetOptions(pet);
        });
        document.body.appendChild(companion);
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

    function showPetOptions(pet) {
        dialog.replaceChildren();

        const label = document.createElement("p");
        label.className = "site-play-dialog-label";
        label.textContent = "Companion options";

        const heading = document.createElement("h2");
        heading.textContent = pet.name + " is here.";

        const message = document.createElement("p");
        message.className = "site-play-dialog-copy";
        message.textContent = "Give your traveling buddy a new name, or send them home for now.";

        const field = document.createElement("label");
        field.className = "site-pet-option-field";
        field.textContent = "Name";

        const input = document.createElement("input");
        input.className = "site-pet-option-input";
        input.type = "text";
        input.maxLength = 18;
        input.value = pet.name;
        input.autocomplete = "off";
        field.appendChild(input);

        const actions = document.createElement("div");
        actions.className = "site-play-dialog-actions";
        addDialogButton(actions, "Save name", "site-play-primary", function () {
            const updated = sanitizePet({ ...pet, name: input.value });
            if (!updated) {
                input.setCustomValidity("Give your companion a name first.");
                input.reportValidity();
                return;
            }
            input.setCustomValidity("");
            storageSet(petKey, JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent("ethan-site-pet-updated"));
            closeDialog();
            announce(updated.name + " has a new name.");
        });
        addDialogButton(actions, "Keep exploring", "site-play-reset", closeDialog);
        addDialogButton(actions, "Release pet", "site-pet-release", function () {
            storageRemove(petKey);
            window.dispatchEvent(new CustomEvent("ethan-site-pet-updated"));
            closeDialog();
            announce(pet.name + " is resting. You can make a new companion anytime.");
        });

        dialog.append(label, heading, message, field, actions);
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
        input.focus();
        input.select();
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
        button.setAttribute("aria-label", "Toggle Gremlin Mode");
        button.setAttribute("aria-keyshortcuts", "Shift+G");
        button.title = "Toggle Gremlin Mode (Shift+G)";
        button.hidden = true;
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
        modeToggle.hidden = true;
        modeToggle.textContent = gremlinMode ? "Contain gremlins" : "Release gremlins";
        modeToggle.setAttribute("aria-pressed", String(gremlinMode));

        updateNavName();

        const existingSwarm = document.querySelector(".gremlin-swarm");
        if (gremlinMode) createSwarm();
        else if (existingSwarm) existingSwarm.remove();

        if (shouldAnnounce) {
            announce(gremlinMode
                ? "Gremlin Mode released. Press Shift+G again to contain it."
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

    function openNightShift() {
        if (!nightShiftUnlocked) {
            announce("Night Shift is still locked. Finish the scavenger hunt first.");
            return;
        }
        window.location.href = new URL("night-shift/", rootUrl).href;
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

        if (progress > 0 && progress < hunt.length) {
            const status = document.createElement("button");
            status.type = "button";
            status.className = "hunt-progress";
            status.textContent = "Hunt " + progress + "/" + hunt.length;
            status.addEventListener("click", showProgressDialog);
            document.body.appendChild(status);
        }

        modeToggle.hidden = true;
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

        const key = event.key.toLowerCase();
        if (event.shiftKey && key === "g") {
            event.preventDefault();
            setGremlinMode(!gremlinMode, true);
            return;
        }
        if (event.shiftKey && key === "n") {
            event.preventDefault();
            openNightShift();
            return;
        }

        if (event.key.length === 1) {
            typed = (typed + event.key.toLowerCase()).slice(-7);
            if (typed === "gremlin") {
                typed = "";
                setGremlinMode(!gremlinMode, true);
            }
        }
    });

    if (!isPetStudio) {
        window.addEventListener("ethan-site-pet-updated", renderPetCompanion);

        if (progress >= hunt.length) unlockNightShift();
        recordVisit();
        setGremlinMode(gremlinMode, false);
        setNightShiftMode(nightShiftMode, false);
        renderHunt();
        renderPetCompanion();
    }
})();
