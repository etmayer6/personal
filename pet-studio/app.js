(function () {
    "use strict";

    const petKey = "ethan-site-custom-pet";
    const form = document.getElementById("pet-form");
    const nameInput = document.getElementById("pet-name");
    const colorInput = document.getElementById("pet-color");
    const accentInput = document.getElementById("pet-accent");
    const previewArt = document.getElementById("pet-preview-art");
    const previewName = document.getElementById("pet-preview-name");
    const previewSpecies = document.getElementById("pet-preview-species");
    const previewTrait = document.getElementById("pet-preview-trait");
    const previewStatus = document.getElementById("pet-preview-status");
    const builderStatus = document.getElementById("builder-status");
    const releaseButton = document.getElementById("release-pet");
    const defaults = {
        name: "",
        species: "cat",
        color: "#f2cb3f",
        accent: "#e77952",
        accessory: "none"
    };
    const speciesTraits = {
        cat: "Quietly curious",
        dog: "Ready for anything",
        fox: "Clever and bright",
        dragon: "Small but mighty"
    };
    let pet = loadPet();

    function cleanName(value) {
        return String(value || "")
            .replace(/[^a-zA-Z0-9' !?.-]/g, "")
            .trim()
            .slice(0, 18);
    }

    function loadPet() {
        try {
            const stored = JSON.parse(window.localStorage.getItem(petKey) || "null");
            const clean = window.EthanSitePet && window.EthanSitePet.sanitize(stored);
            return clean ? clean : { ...defaults };
        } catch (error) {
            return { ...defaults };
        }
    }

    function persistPet() {
        try {
            window.localStorage.setItem(petKey, JSON.stringify(pet));
        } catch (error) {
            // The preview remains usable if storage is unavailable.
        }
        window.dispatchEvent(new CustomEvent("ethan-site-pet-updated"));
    }

    function updateChoiceButtons() {
        document.querySelectorAll("[data-species]").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.species === pet.species));
        });
        document.querySelectorAll("[data-accessory]").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.accessory === pet.accessory));
        });
    }

    function renderPreview() {
        previewArt.replaceChildren();
        const cleanPreview = window.EthanSitePet && window.EthanSitePet.sanitize({
            name: pet.name || "Preview",
            species: pet.species,
            color: pet.color,
            accent: pet.accent,
            accessory: pet.accessory
        });
        if (cleanPreview && window.EthanSitePet) previewArt.appendChild(window.EthanSitePet.createSvg(cleanPreview, false));
        previewName.textContent = pet.name || "Unnamed friend";
        previewSpecies.textContent = pet.species.toUpperCase();
        previewTrait.textContent = speciesTraits[pet.species];
        previewStatus.textContent = pet.name ? "Companion ready" : "Draft companion";
        colorInput.value = pet.color;
        accentInput.value = pet.accent;
        nameInput.value = pet.name;
        updateChoiceButtons();
        releaseButton.hidden = !pet.name;
    }

    function setStatus(message) {
        builderStatus.textContent = message;
    }

    function renderNameDetails() {
        previewName.textContent = pet.name || "Unnamed friend";
        previewStatus.textContent = pet.name ? "Companion ready" : "Draft companion";
        releaseButton.hidden = !pet.name;
    }

    nameInput.addEventListener("input", function () {
        // Keep the in-progress name when another control re-renders the preview.
        pet.name = cleanName(nameInput.value);
        renderNameDetails();
    });

    document.querySelectorAll("[data-species]").forEach(function (button) {
        button.addEventListener("click", function () {
            pet.name = cleanName(nameInput.value);
            pet.species = button.dataset.species;
            renderPreview();
            setStatus("A " + pet.species + " feels right.");
        });
    });

    document.querySelectorAll("[data-accessory]").forEach(function (button) {
        button.addEventListener("click", function () {
            pet.accessory = button.dataset.accessory;
            renderPreview();
            setStatus(pet.accessory === "none" ? "No accessory. Pure personality." : "The " + pet.accessory + " is a good look.");
        });
    });

    colorInput.addEventListener("input", function () {
        pet.color = colorInput.value;
        renderPreview();
    });

    accentInput.addEventListener("input", function () {
        pet.accent = accentInput.value;
        renderPreview();
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = cleanName(nameInput.value);
        if (!name) {
            setStatus("Give your companion a name first.");
            nameInput.focus();
            return;
        }
        pet.name = name;
        persistPet();
        renderPreview();
        setStatus(pet.name + " is coming with you. Check the corner as you explore.");
    });

    releaseButton.addEventListener("click", function () {
        window.localStorage.removeItem(petKey);
        pet = { ...defaults };
        window.dispatchEvent(new CustomEvent("ethan-site-pet-updated"));
        renderPreview();
        setStatus("Your companion is resting. Build a new friend whenever you want.");
    });

    renderPreview();
})();
