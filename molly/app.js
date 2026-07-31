(function () {
    "use strict";

    const data = window.MOLLY_STUDIO_DATA;
    if (!data) return;

    const shopGrid = document.querySelector("#shop-grid");
    const filterList = document.querySelector("#shop-filters");
    const collectionCount = document.querySelector("#collection-count");
    const archiveWall = document.querySelector("#archive-wall");
    const projectList = document.querySelector("#project-list");
    const bagButton = document.querySelector("#bag-button");
    const bagCount = document.querySelector("#bag-count");
    const bagDialog = document.querySelector("#bag-dialog");
    const bagItems = document.querySelector("#bag-items");
    const bagStatus = document.querySelector("#bag-status");
    const artDialog = document.querySelector("#art-dialog");
    const artDialogArt = document.querySelector("#dialog-art");
    const storageKey = "molly-studio-inquiry-bag";

    let activeFilter = "All";
    let activeArtworkId = "";
    let bag = loadBag();

    function loadBag() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
            return Array.isArray(saved) ? saved.filter(function (id) {
                return data.artworks.some(function (artwork) { return artwork.id === id; });
            }) : [];
        } catch (error) {
            return [];
        }
    }

    function saveBag() {
        window.localStorage.setItem(storageKey, JSON.stringify(bag));
        updateBagCount();
    }

    function updateBagCount() {
        bagCount.textContent = String(bag.length);
        bagCount.setAttribute("aria-label", bag.length + (bag.length === 1 ? " item" : " items"));
    }

    function addArtworkVisual(element, item, label) {
        element.classList.add("placeholder-art", item.artClass);
        if (item.image) {
            element.classList.add("has-image");
            const image = document.createElement("img");
            image.src = item.image;
            image.alt = label;
            image.loading = "lazy";
            element.appendChild(image);
        } else {
            const marker = document.createElement("span");
            marker.textContent = "Preview slot";
            element.appendChild(marker);
        }
    }

    function createArtworkCard(artwork, index) {
        const card = document.createElement("article");
        card.className = "art-card reveal";
        card.style.setProperty("--reveal-delay", (index % 3) * 70 + "ms");

        const visualButton = document.createElement("button");
        visualButton.className = "art-visual";
        visualButton.type = "button";
        visualButton.setAttribute("aria-label", "View details for " + artwork.title);
        addArtworkVisual(visualButton, artwork, artwork.title);
        visualButton.addEventListener("click", function () { openArtwork(artwork.id, visualButton); });

        const serial = document.createElement("span");
        serial.className = "art-serial";
        serial.textContent = String(index + 1).padStart(2, "0");
        visualButton.appendChild(serial);

        const copy = document.createElement("div");
        copy.className = "art-card-copy";
        copy.innerHTML =
            "<div><p>" + artwork.category + " / " + artwork.year + "</p>" +
            "<h3>" + artwork.title + "</h3></div>" +
            "<span>" + (artwork.price ? "$" + artwork.price : "Details soon") + "</span>";

        const actions = document.createElement("div");
        actions.className = "art-card-actions";

        const detailsButton = document.createElement("button");
        detailsButton.type = "button";
        detailsButton.textContent = "View work";
        detailsButton.addEventListener("click", function () { openArtwork(artwork.id, detailsButton); });

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "save-button";
        addButton.textContent = bag.includes(artwork.id) ? "Saved" : "Save to inquiry";
        addButton.setAttribute("aria-pressed", String(bag.includes(artwork.id)));
        addButton.addEventListener("click", function () {
            toggleBagItem(artwork.id);
            renderShop();
        });

        actions.append(detailsButton, addButton);
        card.append(visualButton, copy, actions);
        return card;
    }

    function renderShop() {
        const filtered = data.artworks.filter(function (artwork) {
            return activeFilter === "All" || artwork.category === activeFilter;
        });
        shopGrid.replaceChildren();
        filtered.forEach(function (artwork, index) {
            shopGrid.appendChild(createArtworkCard(artwork, index));
        });
        collectionCount.textContent = filtered.length + (filtered.length === 1 ? " work" : " works");
        observeReveals();
    }

    function renderFilters() {
        const categories = ["All"].concat(Array.from(new Set(data.artworks.map(function (artwork) {
            return artwork.category;
        }))));
        categories.forEach(function (category) {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = category;
            button.className = category === activeFilter ? "is-active" : "";
            button.setAttribute("aria-pressed", String(category === activeFilter));
            button.addEventListener("click", function () {
                activeFilter = category;
                Array.from(filterList.children).forEach(function (filterButton) {
                    const isActive = filterButton === button;
                    filterButton.classList.toggle("is-active", isActive);
                    filterButton.setAttribute("aria-pressed", String(isActive));
                });
                renderShop();
            });
            filterList.appendChild(button);
        });
    }

    function renderArchive() {
        data.archive.forEach(function (item, index) {
            const figure = document.createElement("figure");
            figure.className = "archive-piece archive-piece-" + ((index % 7) + 1) + " reveal";
            const visual = document.createElement("div");
            addArtworkVisual(visual, item, item.label);
            const caption = document.createElement("figcaption");
            caption.innerHTML = "<span>" + String(index + 1).padStart(2, "0") + "</span>" + item.label;
            figure.append(visual, caption);
            archiveWall.appendChild(figure);
        });
    }

    function renderProjects() {
        data.projects.forEach(function (project) {
            const article = document.createElement("article");
            article.className = "project-card reveal";

            const visual = document.createElement("div");
            visual.className = "project-visual";
            addArtworkVisual(visual, project, project.title);

            const copy = document.createElement("div");
            copy.className = "project-copy";
            copy.innerHTML =
                "<div class=\"project-meta\"><span>Project " + project.number + "</span><span>" + project.course + "</span></div>" +
                "<h3>" + project.title + "</h3>" +
                "<p>" + project.summary + "</p>" +
                "<strong>" + project.stage + "</strong>";

            article.append(visual, copy);
            projectList.appendChild(article);
        });
    }

    function openArtwork(id, trigger) {
        const artwork = data.artworks.find(function (item) { return item.id === id; });
        if (!artwork) return;
        activeArtworkId = id;
        artDialog.returnFocusTo = trigger;
        artDialogArt.className = "dialog-art";
        artDialogArt.replaceChildren();
        addArtworkVisual(artDialogArt, artwork, artwork.title);
        document.querySelector("#art-dialog-meta").textContent = artwork.category + " / " + artwork.year;
        document.querySelector("#art-dialog-title").textContent = artwork.title;
        document.querySelector("#art-dialog-description").textContent = artwork.description;
        document.querySelector("#art-dialog-medium").textContent = artwork.medium;
        document.querySelector("#art-dialog-size").textContent = artwork.size;
        document.querySelector("#art-dialog-status").textContent = artwork.status;
        updateDialogAddButton();
        artDialog.showModal();
    }

    function updateDialogAddButton() {
        const button = document.querySelector("#art-dialog-add");
        const isSaved = bag.includes(activeArtworkId);
        button.textContent = isSaved ? "Remove from inquiry bag" : "Add to inquiry bag";
        button.setAttribute("aria-pressed", String(isSaved));
    }

    function toggleBagItem(id) {
        if (bag.includes(id)) {
            bag = bag.filter(function (savedId) { return savedId !== id; });
        } else {
            bag.push(id);
        }
        saveBag();
        renderBag();
        updateDialogAddButton();
    }

    function renderBag() {
        bagItems.replaceChildren();
        bagStatus.textContent = "";
        if (!bag.length) {
            const empty = document.createElement("p");
            empty.className = "empty-bag";
            empty.textContent = "No work saved yet. Close the bag and browse the shop shelf.";
            bagItems.appendChild(empty);
            return;
        }

        bag.forEach(function (id) {
            const artwork = data.artworks.find(function (item) { return item.id === id; });
            if (!artwork) return;
            const item = document.createElement("div");
            item.className = "bag-item";
            item.innerHTML =
                "<div class=\"bag-swatch placeholder-art " + artwork.artClass + "\" aria-hidden=\"true\"></div>" +
                "<div><strong>" + artwork.title + "</strong><span>" + artwork.category + " / " + artwork.status + "</span></div>";
            const remove = document.createElement("button");
            remove.type = "button";
            remove.textContent = "Remove";
            remove.setAttribute("aria-label", "Remove " + artwork.title + " from inquiry bag");
            remove.addEventListener("click", function () { toggleBagItem(artwork.id); });
            item.appendChild(remove);
            bagItems.appendChild(item);
        });
    }

    function buildInquiryText() {
        const selected = bag.map(function (id) {
            return data.artworks.find(function (artwork) { return artwork.id === id; });
        }).filter(Boolean);
        return [
            "Hello Molly,",
            "",
            "I would like to ask about:",
            selected.map(function (artwork) { return "- " + artwork.title + " (" + artwork.category + ")"; }).join("\n"),
            "",
            "Please let me know about availability, pricing, and delivery.",
            "",
            "Thank you!"
        ].join("\n");
    }

    async function prepareInquiry() {
        if (!bag.length) {
            bagStatus.textContent = "Add at least one work before preparing an inquiry.";
            return;
        }

        const inquiry = buildInquiryText();
        if (data.contactEmail) {
            window.location.href = "mailto:" + encodeURIComponent(data.contactEmail) +
                "?subject=" + encodeURIComponent("Artwork inquiry") +
                "&body=" + encodeURIComponent(inquiry);
            return;
        }

        try {
            await navigator.clipboard.writeText(inquiry);
            bagStatus.textContent = "Inquiry copied. Molly's contact link will be added before the shop opens.";
        } catch (error) {
            bagStatus.textContent = "Copying is unavailable in this browser. Molly's contact link will be added before the shop opens.";
        }
    }

    let revealObserver;
    function observeReveals() {
        const elements = document.querySelectorAll(".reveal:not(.is-visible)");
        if (!("IntersectionObserver" in window)) {
            elements.forEach(function (element) { element.classList.add("is-visible"); });
            return;
        }
        if (!revealObserver) {
            revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.12 });
        }
        elements.forEach(function (element) { revealObserver.observe(element); });
    }

    renderFilters();
    renderShop();
    renderArchive();
    renderProjects();
    renderBag();
    updateBagCount();
    observeReveals();

    bagButton.addEventListener("click", function () {
        renderBag();
        bagDialog.showModal();
    });
    document.querySelector("#bag-close").addEventListener("click", function () { bagDialog.close(); });
    document.querySelector("#art-dialog-close").addEventListener("click", function () { artDialog.close(); });
    document.querySelector("#art-dialog-add").addEventListener("click", function () {
        toggleBagItem(activeArtworkId);
        renderShop();
    });
    document.querySelector("#prepare-inquiry").addEventListener("click", prepareInquiry);
    document.querySelector("#clear-bag").addEventListener("click", function () {
        bag = [];
        saveBag();
        renderBag();
        renderShop();
    });

    [artDialog, bagDialog].forEach(function (dialog) {
        dialog.addEventListener("click", function (event) {
            if (event.target === dialog) dialog.close();
        });
        dialog.addEventListener("close", function () {
            if (dialog.returnFocusTo && dialog.returnFocusTo.isConnected) dialog.returnFocusTo.focus();
        });
    });
}());
