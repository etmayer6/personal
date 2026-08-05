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
    const saveButton = document.getElementById("save-pet");
    const randomizeButton = document.getElementById("randomize-pet");
    const releaseButton = document.getElementById("release-pet");
    const defaults = {
        name: "",
        species: "cat",
        color: "#f2cb3f",
        accent: "#e77952",
        accessory: "none"
    };
    const speciesDetails = {
        cat: {
            trait: "Quietly curious",
            detail: "soft paws, sharp instincts",
            color: "#f2cb3f",
            accent: "#e77952"
        },
        dog: {
            trait: "Ready for anything",
            detail: "big heart, bigger zoomies",
            color: "#c9a47e",
            accent: "#75d8c4"
        },
        fox: {
            trait: "Clever and bright",
            detail: "quick feet, strange ideas",
            color: "#e77952",
            accent: "#f2cb3f"
        },
        dragon: {
            trait: "Small but mighty",
            detail: "tiny wings, dramatic entrances",
            color: "#75d8c4",
            accent: "#e77952"
        }
    };
    const palettes = [
        { color: "#f2cb3f", accent: "#e77952" },
        { color: "#75d8c4", accent: "#102b36" },
        { color: "#e77952", accent: "#f4f0e8" },
        { color: "#90b7d0", accent: "#102b36" },
        { color: "#c9a47e", accent: "#75d8c4" }
    ];
    const accessories = ["none", "scarf", "crown", "star"];
    let committedPet = loadStoredPet();
    let pet = committedPet ? { ...committedPet } : { ...defaults };

    function cleanName(value) {
        return String(value || "")
            .replace(/[^a-zA-Z0-9' !?.-]/g, "")
            .trim()
            .slice(0, 18);
    }

    function loadStoredPet() {
        try {
            const stored = JSON.parse(window.localStorage.getItem(petKey) || "null");
            const clean = window.EthanSitePet && window.EthanSitePet.sanitize(stored);
            return clean || null;
        } catch (error) {
            return null;
        }
    }

    function isSamePet(first, second) {
        if (!first || !second) return false;
        return ["name", "species", "color", "accent", "accessory"].every(function (key) {
            return first[key] === second[key];
        });
    }

    function isDirty() {
        return committedPet ? !isSamePet(pet, committedPet) : Boolean(pet.name);
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

    function updateSaveControls() {
        const saved = Boolean(committedPet);
        const dirty = isDirty();
        const stateKey = !pet.name ? "draft" : saved && !dirty ? "saved" : saved ? "dirty" : "ready";
        const stateLabel = {
            draft: "Draft companion",
            saved: "Companion ready",
            dirty: "Unsaved design",
            ready: "Ready to save"
        }[stateKey];
        previewStatus.textContent = stateLabel;
        previewStatus.dataset.state = stateKey;
        releaseButton.hidden = !saved;
        saveButton.innerHTML = (saved ? "Update companion" : "Bring pet along") + " <span aria-hidden=\"true\">&rarr;</span>";
    }

    function renderSpeciesChoices() {
        document.querySelectorAll("[data-species]").forEach(function (button) {
            const species = speciesDetails[button.dataset.species];
            const art = button.querySelector(".builder-choice-art");
            if (!species || !art || !window.EthanSitePet) return;
            art.replaceChildren(window.EthanSitePet.createSvg({
                name: "Preview",
                species: button.dataset.species,
                color: species.color,
                accent: species.accent,
                accessory: "none"
            }, true));
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
        previewArt.setAttribute("aria-label", "Preview of " + (pet.name || "unnamed") + " the " + pet.species);
        previewName.textContent = pet.name || "Unnamed friend";
        previewSpecies.textContent = pet.species.toUpperCase();
        previewTrait.textContent = speciesDetails[pet.species].trait + " / " + speciesDetails[pet.species].detail;
        previewStatus.textContent = pet.name ? "Companion ready" : "Draft companion";
        colorInput.value = pet.color;
        accentInput.value = pet.accent;
        if (document.activeElement !== nameInput) nameInput.value = pet.name;
        updateChoiceButtons();
        updateSaveControls();
    }

    function setStatus(message) {
        builderStatus.textContent = message;
    }

    function renderNameDetails() {
        previewName.textContent = pet.name || "Unnamed friend";
        previewArt.setAttribute("aria-label", "Preview of " + (pet.name || "unnamed") + " the " + pet.species);
        updateSaveControls();
    }

    nameInput.addEventListener("input", function () {
        // Keep the in-progress name when another control re-renders the preview.
        pet.name = cleanName(nameInput.value);
        renderNameDetails();
        setStatus(pet.name ? (committedPet ? "Name changed. Update the companion when ready." : "Name set. Keep designing or bring them along.") : "Give your companion a name when you are ready.");
    });

    document.querySelectorAll("[data-species]").forEach(function (button) {
        button.addEventListener("click", function () {
            pet.name = cleanName(nameInput.value);
            pet.species = button.dataset.species;
            renderPreview();
            setStatus(speciesDetails[pet.species].trait + ". Tweak the design or save it.");
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
        setStatus("New body palette selected.");
    });

    accentInput.addEventListener("input", function () {
        pet.accent = accentInput.value;
        renderPreview();
        setStatus("New markings selected.");
    });

    randomizeButton.addEventListener("click", function () {
        const speciesKeys = Object.keys(speciesDetails);
        pet.species = speciesKeys[Math.floor(Math.random() * speciesKeys.length)];
        const palette = palettes[Math.floor(Math.random() * palettes.length)];
        pet.color = palette.color;
        pet.accent = palette.accent;
        pet.accessory = accessories[Math.floor(Math.random() * accessories.length)];
        renderPreview();
        setStatus("A new idea appeared. Tweak it or save it when it feels right.");
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
        committedPet = { ...pet };
        renderPreview();
        setStatus(pet.name + " is saved and ready to explore. Check the corner as you roam.");
    });

    releaseButton.addEventListener("click", function () {
        window.localStorage.removeItem(petKey);
        committedPet = null;
        pet = { ...defaults };
        window.dispatchEvent(new CustomEvent("ethan-site-pet-updated"));
        renderPreview();
        setStatus("Your companion is resting. Build a new friend whenever you want.");
    });

    renderSpeciesChoices();
    renderPreview();
    setStatus(committedPet ? committedPet.name + " is ready. Tweak the design or update the companion." : "Design a friend, then send them exploring.");
})();
