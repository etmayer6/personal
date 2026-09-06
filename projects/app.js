(() => {
    const cards = document.querySelectorAll(".feature-card, .archive-card");
    const interactiveSelector = "a, button, input, select, textarea, [contenteditable='true']";
    const filterButtons = [...document.querySelectorAll("[data-project-filter]")];
    const filterStatus = document.querySelector("[data-project-filter-status]");
    const surpriseButton = document.querySelector("[data-project-surprise]");
    const filterableCards = [...document.querySelectorAll(".archive-grid:not(.archive-grid-reference) .archive-card")];

    cards.forEach((card) => {
        const destination = card.querySelector("a[href]");
        if (!destination) return;

        const heading = card.querySelector("h3");
        card.tabIndex = 0;
        card.setAttribute("role", "link");
        if (heading) card.setAttribute("aria-label", `Open ${heading.textContent.trim()}`);

        const openDestination = () => {
            if (destination.target === "_blank") {
                destination.click();
                return;
            }
            window.location.assign(destination.href);
        };

        card.addEventListener("click", (event) => {
            if (event.target.closest(interactiveSelector)) return;
            openDestination();
        });

        card.addEventListener("keydown", (event) => {
            if (event.target !== card || !["Enter", " "].includes(event.key)) return;
            event.preventDefault();
            openDestination();
        });
    });

    const applyFilter = (filter) => {
        let visibleCount = 0;
        filterableCards.forEach((card) => {
            const visible = filter === "all" || card.dataset.projectKind === filter;
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });

        filterButtons.forEach((button) => {
            const active = button.dataset.projectFilter === filter;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        if (filterStatus) {
            filterStatus.textContent = filter === "all"
                ? `All ${filterableCards.length} interactive doors are open.`
                : `${visibleCount} ${filter} project${visibleCount === 1 ? "" : "s"} ready.`;
        }
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => applyFilter(button.dataset.projectFilter));
    });

    surpriseButton?.addEventListener("click", () => {
        const visibleCards = filterableCards.filter((card) => !card.hidden);
        const card = visibleCards[Math.floor(Math.random() * visibleCards.length)];
        const destination = card?.querySelector("a[href]");
        destination?.click();
    });
})();
