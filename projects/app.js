(() => {
    const cards = document.querySelectorAll(".feature-card, .archive-card");
    const interactiveSelector = "a, button, input, select, textarea, [contenteditable='true']";

    cards.forEach((card) => {
        const destination = card.querySelector("a[href]");
        if (!destination) return;

        const heading = card.querySelector("h3");
        card.tabIndex = 0;
        card.setAttribute("role", "link");
        if (heading) card.setAttribute("aria-label", `Open ${heading.textContent.trim()}`);

        const openDestination = () => destination.click();

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
})();
