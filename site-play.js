(function () {
    "use strict";

    const scriptUrl = new URL(document.currentScript.src, window.location.href);
    const rootUrl = new URL("./", scriptUrl);
    const modeKey = "ethan-site-gremlin-mode";
    const huntKey = "ethan-site-hunt-progress";
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
            host: ".flight-site-copy",
            title: "Containment failed",
            clue: "You found every mark. Gremlin Mode is now yours."
        }
    ];

    let memoryProgress = 0;
    let memoryMode = false;
    let progress = readProgress();
    let gremlinMode = readMode();
    const page = identifyPage();
    const toast = createToast();
    const dialog = createDialog();
    const modeToggle = createModeToggle();
    const originalNavName = document.querySelector(".nav-name");

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

    function createSwarm() {
        if (document.querySelector(".gremlin-swarm")) return;
        const swarm = document.createElement("div");
        swarm.className = "gremlin-swarm";
        swarm.setAttribute("aria-hidden", "true");
        for (let index = 0; index < 4; index += 1) {
            const gremlin = document.createElement("span");
            gremlin.textContent = "G";
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

        if (originalNavName) {
            originalNavName.textContent = gremlinMode ? "Ethan Mayhem" : originalName;
        }

        const existingSwarm = document.querySelector(".gremlin-swarm");
        if (gremlinMode) createSwarm();
        else if (existingSwarm) existingSwarm.remove();

        if (shouldAnnounce) {
            announce(gremlinMode
                ? "Gremlin Mode released. Type gremlin again to contain it."
                : "Gremlins contained. Mostly.");
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
        document.querySelectorAll(".scavenger-token, .hunt-progress").forEach(function (element) {
            element.remove();
        });

        if (progress > 0) {
            const status = document.createElement("button");
            status.type = "button";
            status.className = "hunt-progress";
            status.textContent = progress >= hunt.length ? "Hunt complete" : "Hunt " + progress + "/" + hunt.length;
            status.addEventListener("click", showProgressDialog);
            document.body.appendChild(status);
        }

        modeToggle.hidden = !gremlinMode && progress < hunt.length;
        if (progress >= hunt.length) return;

        const current = hunt[progress];
        if (page !== current.page) return;
        const host = document.querySelector(current.host);
        if (!host) return;

        host.classList.add("scavenger-host");
        const token = document.createElement("button");
        token.type = "button";
        token.className = "scavenger-token";
        token.textContent = "G";
        token.title = "This was not here before.";
        token.setAttribute("aria-label", "Open scavenger hunt clue " + (progress + 1));
        token.addEventListener("click", function () {
            const found = current;
            progress += 1;
            storageSet(huntKey, String(progress));
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

    setGremlinMode(gremlinMode, false);
    renderHunt();
})();
