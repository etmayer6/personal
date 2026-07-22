(function () {
    "use strict";

    const STORAGE_KEY = "ethan-diet-tracker-demo-v1";
    const GOALS = { calories: 2300, protein: 160, carbs: 260, fat: 75 };
    const templates = [
        {
            id: "breakfast",
            type: "Breakfast",
            title: "Berry yogurt oat bowl",
            image: "assets/breakfast.svg",
            notes: "Quick breakfast before work.",
            items: ["Greek yogurt", "rolled oats", "blueberries", "almonds"],
            nutrition: { calories: 420, protein: 28, carbs: 52, fat: 12, fiber: 8 },
            confidence: 91
        },
        {
            id: "bowl",
            type: "Lunch",
            title: "Chicken avocado grain bowl",
            image: "assets/bowl.svg",
            notes: "Filling lunch with a good mix of textures.",
            items: ["grilled chicken", "brown rice", "greens", "avocado"],
            nutrition: { calories: 640, protein: 48, carbs: 69, fat: 19, fiber: 11 },
            confidence: 88
        },
        {
            id: "salmon",
            type: "Dinner",
            title: "Salmon, potatoes, and greens",
            image: "assets/salmon.svg",
            notes: "Dinner at home after the gym.",
            items: ["roasted salmon", "baby potatoes", "broccoli", "olive oil"],
            nutrition: { calories: 710, protein: 51, carbs: 56, fat: 31, fiber: 9 },
            confidence: 90
        }
    ];

    const elements = {
        todayLabel: document.getElementById("today-label"),
        calorieRing: document.getElementById("calorie-ring"),
        calorieTotal: document.getElementById("calorie-total"),
        calorieRemaining: document.getElementById("calorie-remaining"),
        mealCount: document.getElementById("meal-count"),
        macroList: document.getElementById("macro-list"),
        weekChart: document.getElementById("week-chart"),
        mealList: document.getElementById("meal-list"),
        mealFilter: document.getElementById("meal-filter"),
        mealForm: document.getElementById("meal-form"),
        mealPhoto: document.getElementById("meal-photo"),
        mealType: document.getElementById("meal-type"),
        description: document.getElementById("meal-description"),
        notes: document.getElementById("meal-notes"),
        photoStage: document.getElementById("photo-stage"),
        photoPreview: document.getElementById("photo-preview"),
        photoPlaceholder: document.getElementById("photo-placeholder"),
        choosePhoto: document.getElementById("choose-photo"),
        samplePhoto: document.getElementById("sample-photo"),
        analyzeButton: document.getElementById("analyze-button"),
        analysisLayer: document.getElementById("analysis-layer"),
        analysisLabel: document.getElementById("analysis-label"),
        resetButton: document.getElementById("reset-button"),
        confirmReset: document.getElementById("confirm-reset"),
        resetDialog: document.getElementById("reset-dialog"),
        editDialog: document.getElementById("edit-dialog"),
        editForm: document.getElementById("edit-form"),
        toast: document.getElementById("app-toast")
    };

    let state = loadState();
    let pendingPhoto = null;
    let sampleIndex = 0;
    let expandedId = null;
    let pendingDeleteId = null;
    let toastTimer = 0;

    function atLocalTime(dayOffset, hour, minute) {
        const date = new Date();
        date.setHours(hour, minute, 0, 0);
        date.setDate(date.getDate() + dayOffset);
        return date.toISOString();
    }

    function createDefaultState() {
        return {
            meals: [
                mealFromTemplate(templates[2], atLocalTime(0, 19, 10)),
                mealFromTemplate(templates[1], atLocalTime(0, 12, 25)),
                mealFromTemplate(templates[0], atLocalTime(0, 7, 45))
            ],
            previousDays: [1860, 2210, 1940, 2460, 2130, 2020]
        };
    }

    function mealFromTemplate(template, createdAt) {
        return {
            id: template.id + "-" + new Date(createdAt).getTime(),
            createdAt: createdAt,
            type: template.type,
            description: template.title,
            notes: template.notes,
            image: template.image,
            items: template.items.slice(),
            nutrition: Object.assign({}, template.nutrition),
            confidence: template.confidence
        };
    }

    function loadState() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (parsed && Array.isArray(parsed.meals) && Array.isArray(parsed.previousDays)) return parsed;
        } catch (error) {
            // The demo remains usable when browser storage is unavailable or malformed.
        }
        return createDefaultState();
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            return true;
        } catch (error) {
            showToast("This meal is available for this visit, but the photo was too large to save locally.");
            return false;
        }
    }

    function isToday(value) {
        const date = new Date(value);
        const today = new Date();
        return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
    }

    function todayMeals() {
        return state.meals.filter(function (meal) { return isToday(meal.createdAt); });
    }

    function totalsFor(meals) {
        return meals.reduce(function (total, meal) {
            total.calories += Number(meal.nutrition.calories) || 0;
            total.protein += Number(meal.nutrition.protein) || 0;
            total.carbs += Number(meal.nutrition.carbs) || 0;
            total.fat += Number(meal.nutrition.fat) || 0;
            return total;
        }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
    }

    function render() {
        const meals = todayMeals();
        const totals = totalsFor(meals);
        const caloriePercent = Math.min(1, totals.calories / GOALS.calories);
        elements.todayLabel.textContent = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
        elements.calorieTotal.textContent = formatNumber(totals.calories);
        const calorieDifference = Math.abs(GOALS.calories - totals.calories);
        elements.calorieRemaining.textContent = formatNumber(calorieDifference) + (totals.calories > GOALS.calories ? " over target" : " remaining");
        elements.calorieRing.style.setProperty("--progress", Math.round(caloriePercent * 360) + "deg");
        elements.mealCount.textContent = meals.length + (meals.length === 1 ? " meal" : " meals");
        renderMacros(totals);
        renderWeek(totals.calories);
        renderMeals();
    }

    function renderMacros(totals) {
        const rows = [
            { key: "protein", label: "Protein", unit: "g", color: "var(--mint)" },
            { key: "carbs", label: "Carbs", unit: "g", color: "var(--amber)" },
            { key: "fat", label: "Fat", unit: "g", color: "var(--coral)" }
        ];
        elements.macroList.innerHTML = rows.map(function (row) {
            const value = totals[row.key];
            const percent = Math.min(100, Math.round(value / GOALS[row.key] * 100));
            return "<div class=\"macro-row\"><span>" + row.label + "</span><div class=\"macro-track\"><i style=\"width:" + percent + "%;--macro-color:" + row.color + "\"></i></div><strong>" + value + " / " + GOALS[row.key] + row.unit + "</strong></div>";
        }).join("");
    }

    function renderWeek(todayCalories) {
        const values = state.previousDays.slice(-6).concat(todayCalories);
        const max = Math.max(2600, Math.max.apply(Math, values));
        elements.weekChart.innerHTML = values.map(function (value, index) {
            const date = new Date();
            date.setDate(date.getDate() - (6 - index));
            const label = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
            const height = Math.max(4, Math.round(value / max * 78));
            return "<div class=\"day-bar " + (index === 6 ? "is-today" : "") + "\" title=\"" + label + ": " + formatNumber(value) + " calories\"><i style=\"height:" + height + "px\"></i><span>" + label + "</span></div>";
        }).join("");
    }

    function renderMeals() {
        const onlyToday = elements.mealFilter.value === "today";
        const meals = state.meals
            .filter(function (meal) { return !onlyToday || isToday(meal.createdAt); })
            .slice()
            .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });

        if (!meals.length) {
            elements.mealList.innerHTML = "<div class=\"empty-meals\"><strong>No meals in this view</strong><p>Add a photo above or switch the history filter.</p></div>";
            return;
        }

        elements.mealList.innerHTML = meals.map(function (meal) {
            const nutrition = meal.nutrition;
            const expanded = expandedId === meal.id;
            const confirming = pendingDeleteId === meal.id;
            return "<article class=\"meal-card " + (expanded ? "is-expanded" : "") + "\">" +
                "<div class=\"meal-photo\"><img src=\"" + safeImage(meal.image) + "\" alt=\"" + escapeHtml(meal.description) + "\" loading=\"lazy\"><span class=\"meal-type\">" + escapeHtml(meal.type) + "</span></div>" +
                "<div class=\"meal-content\"><div class=\"meal-topline\"><div><h4>" + escapeHtml(meal.description) + "</h4><p class=\"meal-time\">" + formatMealTime(meal.createdAt) + " &middot; Browser-local estimate</p></div><span class=\"confidence\">" + Math.round(meal.confidence) + "% confidence</span></div>" +
                "<div class=\"nutrition-grid\"><div style=\"--nutrient:var(--mint)\"><strong>" + nutrition.calories + "</strong><span>Calories</span></div><div style=\"--nutrient:var(--blue)\"><strong>" + nutrition.protein + "g</strong><span>Protein</span></div><div style=\"--nutrient:var(--amber)\"><strong>" + nutrition.carbs + "g</strong><span>Carbs</span></div><div style=\"--nutrient:var(--coral)\"><strong>" + nutrition.fat + "g</strong><span>Fat</span></div></div>" +
                (meal.notes ? "<p class=\"meal-notes\">" + escapeHtml(meal.notes) + "</p>" : "") +
                "<div class=\"meal-details\">" + meal.items.map(function (item) { return "<span>" + escapeHtml(item) + "</span>"; }).join("") + "</div>" +
                "<div class=\"meal-actions\"><button class=\"meal-action\" type=\"button\" data-action=\"toggle\" data-id=\"" + meal.id + "\">" + (expanded ? "Hide items" : "Detected items") + "</button><button class=\"meal-action\" type=\"button\" data-action=\"edit\" data-id=\"" + meal.id + "\">Edit estimate</button><button class=\"meal-action delete\" type=\"button\" data-action=\"delete\" data-id=\"" + meal.id + "\">" + (confirming ? "Confirm delete" : "Delete") + "</button></div></div></article>";
        }).join("");
    }

    function safeImage(value) {
        const image = String(value || "");
        if (image.indexOf("assets/") === 0 || image.indexOf("data:image/") === 0) return escapeHtml(image);
        return "assets/bowl.svg";
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char];
        });
    }

    function formatNumber(value) {
        return new Intl.NumberFormat("en-US").format(Math.round(value));
    }

    function formatMealTime(value) {
        const date = new Date(value);
        const day = isToday(value) ? "Today" : new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
        return day + " at " + new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date);
    }

    function setPhoto(image, sampleId) {
        pendingPhoto = { image: image, sampleId: sampleId || null };
        elements.photoPreview.src = image;
        elements.photoPreview.hidden = false;
        elements.photoPlaceholder.hidden = true;
    }

    function clearPhoto() {
        pendingPhoto = null;
        elements.photoPreview.removeAttribute("src");
        elements.photoPreview.hidden = true;
        elements.photoPlaceholder.hidden = false;
        elements.mealPhoto.value = "";
    }

    function useSamplePhoto() {
        const template = templates[sampleIndex % templates.length];
        sampleIndex += 1;
        setPhoto(template.image, template.id);
        elements.mealType.value = template.type;
        if (!elements.description.value.trim()) elements.description.value = template.title;
        if (!elements.notes.value.trim()) elements.notes.value = template.notes;
        showToast("Sample plate ready for demo analysis.");
    }

    async function handlePhoto(file) {
        if (!file || !file.type.startsWith("image/")) {
            showToast("Choose an image file to continue.");
            return;
        }
        elements.choosePhoto.textContent = "Preparing...";
        elements.choosePhoto.disabled = true;
        try {
            const image = await resizeImage(file);
            setPhoto(image, null);
            if (!elements.description.value.trim()) elements.description.value = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
            showToast("Photo added. The demo is ready to analyze it.");
        } catch (error) {
            showToast("That image could not be opened. Try another file.");
        } finally {
            elements.choosePhoto.textContent = "Choose photo";
            elements.choosePhoto.disabled = false;
        }
    }

    function resizeImage(file) {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function () {
                const image = new Image();
                image.onerror = reject;
                image.onload = function () {
                    const max = 720;
                    const scale = Math.min(1, max / Math.max(image.width, image.height));
                    const canvas = document.createElement("canvas");
                    canvas.width = Math.max(1, Math.round(image.width * scale));
                    canvas.height = Math.max(1, Math.round(image.height * scale));
                    const context = canvas.getContext("2d");
                    context.fillStyle = "#101a20";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL("image/jpeg", 0.76));
                };
                image.src = String(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }

    function selectEstimate(description, type) {
        const text = (description + " " + type).toLowerCase();
        if (pendingPhoto && pendingPhoto.sampleId) return templates.find(function (template) { return template.id === pendingPhoto.sampleId; }) || templates[1];
        if (/salmon|fish|potato|dinner/.test(text)) return templates[2];
        if (/oat|yogurt|berry|breakfast/.test(text)) return templates[0];
        return templates[1];
    }

    function adjustedNutrition(template, description) {
        if (pendingPhoto && pendingPhoto.sampleId) return Object.assign({}, template.nutrition);
        const hash = Array.from(description).reduce(function (sum, char) { return sum + char.charCodeAt(0); }, 0);
        const factor = 0.92 + (hash % 17) / 100;
        return {
            calories: Math.round(template.nutrition.calories * factor / 10) * 10,
            protein: Math.round(template.nutrition.protein * factor),
            carbs: Math.round(template.nutrition.carbs * factor),
            fat: Math.round(template.nutrition.fat * factor),
            fiber: Math.round(template.nutrition.fiber * factor)
        };
    }

    async function analyzeMeal(event) {
        event.preventDefault();
        if (!pendingPhoto) {
            showToast("Choose a photo or sample plate first.");
            elements.choosePhoto.focus();
            return;
        }

        const phases = ["Preparing image...", "Detecting meal components...", "Estimating portions...", "Building nutrition summary..."];
        elements.analysisLayer.hidden = false;
        elements.analyzeButton.disabled = true;
        const indicators = elements.analysisLayer.querySelectorAll(".analysis-steps i");
        indicators.forEach(function (indicator) { indicator.classList.remove("is-complete"); });

        for (let index = 0; index < phases.length; index += 1) {
            elements.analysisLabel.textContent = phases[index];
            if (index > 0) indicators[index - 1].classList.add("is-complete");
            await delay(index === 0 ? 420 : 500);
        }
        indicators[indicators.length - 1].classList.add("is-complete");

        const description = elements.description.value.trim();
        const template = selectEstimate(description, elements.mealType.value);
        const meal = {
            id: "meal-" + Date.now(),
            createdAt: new Date().toISOString(),
            type: elements.mealType.value,
            description: description || template.title,
            notes: elements.notes.value.trim(),
            image: pendingPhoto.image,
            items: template.items.slice(),
            nutrition: adjustedNutrition(template, description || template.title),
            confidence: pendingPhoto.sampleId ? template.confidence : 84
        };
        state.meals.unshift(meal);
        saveState();
        elements.analysisLayer.hidden = true;
        elements.analyzeButton.disabled = false;
        elements.mealForm.reset();
        elements.mealType.value = "Lunch";
        clearPhoto();
        pendingDeleteId = null;
        render();
        showToast("Meal analyzed and added to today's log.");
        document.getElementById("history").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function delay(milliseconds) {
        return new Promise(function (resolve) { window.setTimeout(resolve, milliseconds); });
    }

    function openEditDialog(id) {
        const meal = state.meals.find(function (entry) { return entry.id === id; });
        if (!meal) return;
        document.getElementById("edit-id").value = meal.id;
        document.getElementById("edit-description").value = meal.description;
        document.getElementById("edit-calories").value = meal.nutrition.calories;
        document.getElementById("edit-protein").value = meal.nutrition.protein;
        document.getElementById("edit-carbs").value = meal.nutrition.carbs;
        document.getElementById("edit-fat").value = meal.nutrition.fat;
        document.getElementById("edit-notes").value = meal.notes || "";
        elements.editDialog.showModal();
        document.getElementById("edit-description").focus();
    }

    function saveEdit(event) {
        event.preventDefault();
        const id = document.getElementById("edit-id").value;
        const meal = state.meals.find(function (entry) { return entry.id === id; });
        if (!meal) return;
        meal.description = document.getElementById("edit-description").value.trim();
        meal.notes = document.getElementById("edit-notes").value.trim();
        meal.nutrition.calories = Number(document.getElementById("edit-calories").value);
        meal.nutrition.protein = Number(document.getElementById("edit-protein").value);
        meal.nutrition.carbs = Number(document.getElementById("edit-carbs").value);
        meal.nutrition.fat = Number(document.getElementById("edit-fat").value);
        meal.confidence = Math.min(meal.confidence, 80);
        saveState();
        elements.editDialog.close();
        render();
        showToast("Meal estimate updated.");
    }

    function handleMealAction(button) {
        const id = button.dataset.id;
        if (button.dataset.action === "toggle") {
            expandedId = expandedId === id ? null : id;
            pendingDeleteId = null;
            renderMeals();
        }
        if (button.dataset.action === "edit") {
            pendingDeleteId = null;
            openEditDialog(id);
        }
        if (button.dataset.action === "delete") {
            if (pendingDeleteId !== id) {
                pendingDeleteId = id;
                renderMeals();
                showToast("Select Confirm delete to remove this meal.");
                return;
            }
            state.meals = state.meals.filter(function (meal) { return meal.id !== id; });
            pendingDeleteId = null;
            if (expandedId === id) expandedId = null;
            saveState();
            render();
            showToast("Meal removed from the local demo.");
        }
    }

    function resetDemo() {
        state = createDefaultState();
        expandedId = null;
        pendingDeleteId = null;
        localStorage.removeItem(STORAGE_KEY);
        elements.mealFilter.value = "today";
        elements.mealForm.reset();
        elements.mealType.value = "Lunch";
        clearPhoto();
        render();
        showToast("Sample meals restored.");
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        toastTimer = window.setTimeout(function () { elements.toast.classList.remove("is-visible"); }, 2800);
    }

    elements.choosePhoto.addEventListener("click", function () { elements.mealPhoto.click(); });
    elements.samplePhoto.addEventListener("click", useSamplePhoto);
    elements.mealPhoto.addEventListener("change", function (event) { handlePhoto(event.target.files && event.target.files[0]); });
    elements.mealForm.addEventListener("submit", analyzeMeal);
    elements.mealFilter.addEventListener("change", renderMeals);
    elements.editForm.addEventListener("submit", saveEdit);
    elements.resetButton.addEventListener("click", function () { elements.resetDialog.showModal(); });
    elements.confirmReset.addEventListener("click", resetDemo);
    elements.mealList.addEventListener("click", function (event) {
        const button = event.target.closest("[data-action]");
        if (button) handleMealAction(button);
    });

    ["dragenter", "dragover"].forEach(function (name) {
        elements.photoStage.addEventListener(name, function (event) { event.preventDefault(); elements.photoStage.classList.add("is-dragging"); });
    });
    ["dragleave", "drop"].forEach(function (name) {
        elements.photoStage.addEventListener(name, function (event) { event.preventDefault(); elements.photoStage.classList.remove("is-dragging"); });
    });
    elements.photoStage.addEventListener("drop", function (event) {
        const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
        handlePhoto(file);
    });

    document.querySelectorAll(".hub-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelectorAll(".hub-nav a").forEach(function (item) { item.classList.remove("is-active"); });
            link.classList.add("is-active");
        });
    });

    render();
}());
