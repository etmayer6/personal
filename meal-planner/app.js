(function () {
    "use strict";

    const STORAGE_KEY = "ethan-receipt-meal-planner-demo-v1";
    const fixtures = {
        fresh: {
            id: "fresh",
            store: "Fresh Market",
            image: "assets/fresh-market-receipt.svg",
            summary: "A flexible mix of protein, grains, vegetables, and taco-night staples with strong overlap across four practical meals.",
            receiptText: [
                "FRESH MARKET", "118 OAK STREET", "AMES, IA 50010", "", "CHICKEN BREAST 2.1 LB    12.58", "BROWN RICE 2 LB           4.49", "BLACK BEANS x2            2.58", "FLOUR TORTILLAS           3.79", "AVOCADO x2                2.50", "BELL PEPPER 3CT           4.29", "BABY SPINACH              3.49", "ROMA TOMATOES             2.73", "LIMES x4                  2.00", "LARGE EGGS                3.89", "GREEK YOGURT              5.29", "CHEDDAR SHRED             3.99", "", "SUBTOTAL                 51.62", "TAX                       1.03", "TOTAL                    52.65"
            ].join("\n"),
            items: [
                item("Chicken breast", "2.1 lb", "Protein", "chicken breast", 97), item("Brown rice", "2 lb", "Grain", "brown rice", 96), item("Black beans", "2 cans", "Pantry", "black beans", 95), item("Flour tortillas", "1 pack", "Bakery", "tortillas", 94), item("Avocados", "2", "Produce", "avocado", 96), item("Bell peppers", "3", "Produce", "bell pepper", 93), item("Baby spinach", "1 bag", "Produce", "spinach", 95), item("Roma tomatoes", "1.4 lb", "Produce", "tomatoes", 91), item("Limes", "4", "Produce", "lime", 96), item("Large eggs", "12", "Dairy", "eggs", 98), item("Greek yogurt", "32 oz", "Dairy", "Greek yogurt", 92), item("Cheddar", "8 oz", "Dairy", "cheddar cheese", 94)
            ],
            recipes: [
                recipe("Chicken fajita rice bowls", "Dinner", "Build smoky chicken and pepper bowls over rice with beans, avocado, and lime.", ["chicken breast", "brown rice", "black beans", "bell pepper", "avocado", "lime"], ["cilantro"], ["oil", "salt", "pepper"], ["Cook the brown rice until tender.", "Sear sliced chicken and peppers with oil, salt, and pepper.", "Warm the beans and assemble bowls with avocado and lime."], 96, true, false),
                recipe("Black bean breakfast tacos", "Breakfast", "Crisp tortillas filled with eggs, beans, cheddar, tomato, and avocado.", ["eggs", "black beans", "tortillas", "cheddar cheese", "tomatoes", "avocado"], [], ["oil", "salt", "pepper"], ["Warm the beans and tortillas.", "Soft-scramble the eggs and fold in cheddar.", "Fill each tortilla and finish with tomato and avocado."], 94, true, true),
                recipe("Spinach tomato frittata", "Breakfast", "A one-pan egg bake that turns the produce and cheddar into easy leftovers.", ["eggs", "spinach", "tomatoes", "cheddar cheese"], [], ["oil", "salt", "pepper"], ["Wilt spinach and tomatoes in an oven-safe skillet.", "Pour in beaten, seasoned eggs and top with cheddar.", "Bake until the center is just set, then slice."], 90, false, true),
                recipe("Creamy lime chicken wraps", "Lunch", "Tangy yogurt-lime chicken wraps with spinach and avocado.", ["chicken breast", "tortillas", "Greek yogurt", "lime", "spinach", "avocado"], ["garlic"], ["salt", "pepper"], ["Cook and slice the chicken.", "Mix yogurt, lime, salt, and pepper into a quick sauce.", "Layer tortillas with spinach, chicken, sauce, and avocado."], 88, true, false)
            ]
        },
        neighborhood: {
            id: "neighborhood",
            store: "Neighborhood Grocer",
            image: "assets/neighborhood-receipt.svg",
            summary: "A Mediterranean-leaning basket with enough fish, vegetables, pasta, and legumes for several dinners and a flexible lunch.",
            receiptText: [
                "NEIGHBORHOOD GROCER", "LOCAL FOOD, EVERY DAY", "DES MOINES, IA", "", "ATLANTIC SALMON 1.4LB    15.39", "GOLD POTATOES 3LB         4.79", "BROCCOLI CROWNS           3.16", "LEMONS x3                 2.25", "PENNE PASTA               2.49", "PARMESAN WEDGE            6.19", "MUSHROOMS 8OZ             3.29", "CHICKPEAS x2              2.98", "SPRING GREENS             4.49", "SOURDOUGH LOAF            5.49", "", "SUBTOTAL                 50.52", "TAX                       1.01", "TOTAL                    51.53"
            ].join("\n"),
            items: [
                item("Atlantic salmon", "1.4 lb", "Protein", "salmon", 97), item("Gold potatoes", "3 lb", "Produce", "potatoes", 96), item("Broccoli crowns", "1.2 lb", "Produce", "broccoli", 95), item("Lemons", "3", "Produce", "lemon", 98), item("Penne pasta", "16 oz", "Grain", "penne", 97), item("Parmesan wedge", "6 oz", "Dairy", "Parmesan", 95), item("Mushrooms", "8 oz", "Produce", "mushrooms", 96), item("Chickpeas", "2 cans", "Pantry", "chickpeas", 97), item("Spring greens", "1 box", "Produce", "mixed greens", 91), item("Sourdough loaf", "1", "Bakery", "sourdough", 94)
            ],
            recipes: [
                recipe("Sheet-pan lemon salmon", "Dinner", "Roast salmon, potatoes, and broccoli together with bright lemon.", ["salmon", "potatoes", "broccoli", "lemon"], ["dill"], ["oil", "salt", "pepper"], ["Parboil or microwave the potatoes until barely tender.", "Arrange potatoes and broccoli on a sheet pan and roast for 12 minutes.", "Add salmon and lemon, then roast until the fish flakes."], 97, true, false),
                recipe("Mushroom Parmesan penne", "Dinner", "Savory mushrooms and Parmesan turn pantry pasta into a fast dinner.", ["penne", "mushrooms", "Parmesan"], ["garlic"], ["oil", "salt", "pepper"], ["Boil penne and reserve a cup of pasta water.", "Brown the mushrooms in oil until deeply golden.", "Toss pasta with mushrooms, Parmesan, and enough pasta water to coat."], 91, false, true),
                recipe("Crispy chickpea chopped salad", "Lunch", "Warm spiced chickpeas over greens with lemon and sourdough croutons.", ["chickpeas", "mixed greens", "lemon", "sourdough"], [], ["oil", "salt", "pepper"], ["Toast chickpeas in a skillet until crisp.", "Cube and toast the sourdough with a little oil.", "Toss greens with lemon, then add chickpeas and croutons."], 89, true, true),
                recipe("Potato broccoli hash", "Breakfast", "A crisp vegetable hash that uses the hearty produce without extra shopping.", ["potatoes", "broccoli", "mushrooms"], ["eggs"], ["oil", "salt", "pepper"], ["Dice potatoes and cook until golden and tender.", "Add mushrooms and chopped broccoli; cook until browned.", "Serve as-is or top with eggs if available."], 82, false, true)
            ]
        }
    };

    function item(name, quantity, category, ingredient, confidence) {
        return { name: name, quantity: quantity, category: category, ingredient: ingredient, confidence: confidence };
    }

    function recipe(title, type, summary, used, missing, staples, steps, confidence, highProtein, vegetarian) {
        return { title: title, type: type, summary: summary, used: used, missing: missing, staples: staples, steps: steps, confidence: confidence, highProtein: highProtein, vegetarian: vegetarian };
    }

    const elements = {
        receiptImage: document.getElementById("receipt-image"),
        receiptReady: document.getElementById("receipt-ready"),
        receiptFile: document.getElementById("receipt-file"),
        chooseReceipt: document.getElementById("choose-receipt"),
        sampleReceipt: document.getElementById("sample-receipt"),
        planStyle: document.getElementById("plan-style"),
        notes: document.getElementById("planner-notes"),
        analyze: document.getElementById("analyze-receipt"),
        savedCount: document.getElementById("saved-count"),
        savedList: document.getElementById("saved-list"),
        resultTitle: document.getElementById("results-title"),
        resultSummary: document.getElementById("result-summary"),
        resultTiming: document.getElementById("result-timing"),
        resultStats: document.getElementById("result-stats"),
        ingredientCount: document.getElementById("ingredient-count"),
        ingredientShelf: document.getElementById("ingredient-shelf"),
        recipeType: document.getElementById("recipe-type"),
        recipeList: document.getElementById("recipe-list"),
        itemCount: document.getElementById("item-count"),
        itemTable: document.getElementById("item-table"),
        ocrText: document.getElementById("ocr-text"),
        copyOcr: document.getElementById("copy-ocr"),
        pipelineCurtain: document.getElementById("pipeline-curtain"),
        pipelineLabel: document.getElementById("pipeline-label"),
        pipelineDetail: document.getElementById("pipeline-detail"),
        resetButton: document.getElementById("reset-button"),
        resetDialog: document.getElementById("reset-dialog"),
        confirmReset: document.getElementById("confirm-reset"),
        toast: document.getElementById("app-toast")
    };

    let state = loadState();
    let selectedEntryId = state.entries[0].id;
    let pendingFixtureId = "fresh";
    let pendingImage = fixtures.fresh.image;
    let sampleIndex = 0;
    let activeTab = "overview";
    let expandedRecipe = null;
    let toastTimer = 0;

    function entry(id, fixtureId, dayOffset, style, notes) {
        const date = new Date();
        date.setHours(18, 30, 0, 0);
        date.setDate(date.getDate() + dayOffset);
        return { id: id, fixtureId: fixtureId, createdAt: date.getTime(), style: style, notes: notes || "" };
    }

    function createDefaultState() {
        return {
            entries: [
                entry("sample-fresh", "fresh", 0, "quick", "I have garlic, hot sauce, and olive oil."),
                entry("sample-neighborhood", "neighborhood", -6, "protein", "Prefer dinners that also make good leftovers.")
            ]
        };
    }

    function loadState() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (parsed && Array.isArray(parsed.entries) && parsed.entries.length) return parsed;
        } catch (error) {
            // Fall back to fictional fixtures when storage is unavailable or malformed.
        }
        return createDefaultState();
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
            showToast("This analysis is available for this visit, but browser storage is unavailable.");
        }
    }

    function selectedEntry() {
        return state.entries.find(function (saved) { return saved.id === selectedEntryId; }) || state.entries[0];
    }

    function buildAnalysis(saved) {
        const fixture = fixtures[saved.fixtureId] || fixtures.fresh;
        let recipes = fixture.recipes.slice();
        if (saved.style === "vegetarian") recipes = recipes.filter(function (candidate) { return candidate.vegetarian; });
        if (saved.style === "protein") recipes.sort(function (a, b) { return Number(b.highProtein) - Number(a.highProtein) || b.confidence - a.confidence; });
        if (saved.style === "quick") recipes.sort(function (a, b) { return a.steps.length - b.steps.length || b.confidence - a.confidence; });
        return {
            fixture: fixture,
            title: saved.style === "vegetarian" ? "Vegetarian ideas from this haul" : saved.style === "protein" ? "Protein-forward meal options" : "A flexible weeknight haul",
            summary: fixture.summary + (saved.notes ? " Pantry context: " + saved.notes : ""),
            items: fixture.items,
            ingredients: fixture.items.map(function (purchased) { return { name: purchased.ingredient, quantity: purchased.quantity, confidence: Math.max(72, purchased.confidence - 2) }; }),
            recipes: recipes
        };
    }

    function render() {
        const saved = selectedEntry();
        const analysis = buildAnalysis(saved);
        elements.resultTitle.textContent = analysis.title;
        elements.resultSummary.textContent = analysis.summary;
        elements.resultTiming.textContent = saved.id.indexOf("sample-") === 0 ? "2.4s simulated" : "New browser-local run";
        elements.resultStats.innerHTML = [
            ["Store", analysis.fixture.store], ["Receipt lines", analysis.items.length], ["Ingredients", analysis.ingredients.length], ["Recipe ideas", analysis.recipes.length]
        ].map(function (stat) { return "<div class=\"result-stat\"><span>" + escapeHtml(stat[0]) + "</span><strong>" + escapeHtml(stat[1]) + "</strong></div>"; }).join("");
        elements.ingredientCount.textContent = analysis.ingredients.length + " inferred";
        elements.ingredientShelf.innerHTML = analysis.ingredients.map(function (ingredient) {
            return "<div class=\"ingredient-chip\"><span>" + escapeHtml(ingredient.name) + "</span><small>" + ingredient.confidence + "%</small></div>";
        }).join("");
        elements.itemCount.textContent = analysis.items.length + " lines";
        elements.itemTable.innerHTML = "<div class=\"item-row is-header\"><span>Product</span><span>Ingredient</span><span>Quantity</span><span>Confidence</span></div>" + analysis.items.map(function (purchased) {
            return "<div class=\"item-row\"><strong>" + escapeHtml(purchased.name) + "</strong><span>" + escapeHtml(purchased.ingredient) + "</span><span>" + escapeHtml(purchased.quantity) + "</span><small>" + purchased.confidence + "%</small></div>";
        }).join("");
        elements.ocrText.textContent = analysis.fixture.receiptText;
        renderRecipes(analysis.recipes);
        renderHistory();
        markPipelineComplete();
    }

    function renderRecipes(recipes) {
        const filter = elements.recipeType.value;
        const visible = recipes.filter(function (candidate) { return filter === "all" || candidate.type === filter; });
        if (!visible.length) {
            elements.recipeList.innerHTML = "<div class=\"recipe-empty\">No " + escapeHtml(filter.toLowerCase()) + " ideas match this planning style.</div>";
            return;
        }
        elements.recipeList.innerHTML = visible.map(function (candidate, index) {
            const expanded = expandedRecipe === candidate.title;
            const usedLabel = candidate.used.length + " receipt ingredients";
            return "<article class=\"recipe-card " + (expanded ? "is-expanded" : "") + "\"><div class=\"recipe-summary\"><span class=\"recipe-rank\">0" + (index + 1) + "</span><div class=\"recipe-copy\"><h4>" + escapeHtml(candidate.title) + "</h4><p>" + escapeHtml(candidate.summary) + "</p></div><div class=\"recipe-score\"><strong>" + candidate.confidence + "% fit</strong><span>" + escapeHtml(candidate.type) + "</span></div></div>" +
                "<div class=\"recipe-meta\"><span>" + usedLabel + "</span>" + candidate.staples.map(function (staple) { return "<span>Pantry: " + escapeHtml(staple) + "</span>"; }).join("") + candidate.missing.map(function (missing) { return "<span class=\"missing\">Need: " + escapeHtml(missing) + "</span>"; }).join("") + "</div>" +
                "<div class=\"recipe-actions\"><button class=\"recipe-toggle\" type=\"button\" data-recipe=\"" + escapeHtml(candidate.title) + "\">" + (expanded ? "Hide steps" : "View steps") + "</button></div><div class=\"recipe-steps\">" + candidate.steps.map(function (step, stepIndex) { return "<div class=\"recipe-step\"><span>" + (stepIndex + 1) + "</span><p>" + escapeHtml(step) + "</p></div>"; }).join("") + "</div></article>";
        }).join("");
    }

    function renderHistory() {
        elements.savedCount.textContent = state.entries.length;
        elements.savedList.innerHTML = state.entries.map(function (saved) {
            const fixture = fixtures[saved.fixtureId] || fixtures.fresh;
            const analysis = buildAnalysis(saved);
            return "<button class=\"saved-entry " + (saved.id === selectedEntryId ? "is-active" : "") + "\" type=\"button\" data-entry=\"" + saved.id + "\"><strong>" + escapeHtml(fixture.store) + "</strong><span>" + formatDate(saved.createdAt) + "</span><small>" + analysis.ingredients.length + " ingredients &middot; " + analysis.recipes.length + " recipes</small></button>";
        }).join("");
    }

    function formatDate(value) {
        return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value));
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char];
        });
    }

    function switchSample() {
        sampleIndex += 1;
        const fixture = sampleIndex % 2 ? fixtures.neighborhood : fixtures.fresh;
        pendingFixtureId = fixture.id;
        pendingImage = fixture.image;
        elements.receiptImage.src = fixture.image;
        elements.receiptImage.alt = "Fictional " + fixture.store + " grocery receipt";
        elements.receiptReady.textContent = fixture.store;
        showToast(fixture.store + " sample receipt selected.");
    }

    async function handleReceipt(file) {
        if (!file || !file.type.startsWith("image/")) {
            showToast("Choose an image file to continue.");
            return;
        }
        elements.chooseReceipt.disabled = true;
        elements.chooseReceipt.textContent = "Preparing...";
        try {
            pendingImage = await resizeImage(file);
            pendingFixtureId = null;
            elements.receiptImage.src = pendingImage;
            elements.receiptImage.alt = "Selected grocery receipt preview";
            elements.receiptReady.textContent = "Custom image";
            showToast("Receipt prepared for the demo OCR pipeline.");
        } catch (error) {
            showToast("That receipt image could not be opened.");
        } finally {
            elements.chooseReceipt.disabled = false;
            elements.chooseReceipt.textContent = "Choose receipt";
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
                    const maxWidth = 900;
                    const maxHeight = 1400;
                    const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
                    const canvas = document.createElement("canvas");
                    canvas.width = Math.max(1, Math.round(image.width * scale));
                    canvas.height = Math.max(1, Math.round(image.height * scale));
                    const context = canvas.getContext("2d");
                    context.fillStyle = "#ffffff";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL("image/jpeg", 0.78));
                };
                image.src = String(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }

    async function runPipeline() {
        if (!pendingImage) {
            showToast("Choose a receipt or sample first.");
            return;
        }
        const phases = [
            { key: "prepare", label: "Preparing receipt image...", detail: "Checking orientation and receipt length" },
            { key: "ocr", label: "Reading grocery lines...", detail: "Separating products from totals and store metadata" },
            { key: "ingredients", label: "Building a usable pantry...", detail: "Normalizing products into cooking ingredients" },
            { key: "recipes", label: "Ranking realistic recipes...", detail: "Scoring overlap, missing items, and planning style" }
        ];
        elements.pipelineCurtain.hidden = false;
        elements.analyze.disabled = true;
        document.querySelector(".receipt-preview").classList.add("is-scanning");
        resetPipelineMarks();
        for (let index = 0; index < phases.length; index += 1) {
            setPipelinePhase(phases[index].key, index);
            elements.pipelineLabel.textContent = phases[index].label;
            elements.pipelineDetail.textContent = phases[index].detail;
            await delay(index === 0 ? 420 : 520);
        }

        const fixtureId = pendingFixtureId || customFixtureFromContext();
        const saved = {
            id: "analysis-" + Date.now(),
            fixtureId: fixtureId,
            createdAt: Date.now(),
            style: elements.planStyle.value,
            notes: elements.notes.value.trim()
        };
        state.entries.unshift(saved);
        selectedEntryId = saved.id;
        saveState();
        elements.pipelineCurtain.hidden = true;
        elements.analyze.disabled = false;
        document.querySelector(".receipt-preview").classList.remove("is-scanning");
        expandedRecipe = null;
        switchTab("overview");
        render();
        showToast("Receipt parsed and meal ideas saved locally.");
        document.getElementById("results").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function customFixtureFromContext() {
        const source = elements.notes.value + elements.receiptImage.alt;
        const hash = Array.from(source).reduce(function (sum, char) { return sum + char.charCodeAt(0); }, 0);
        return hash % 2 ? "neighborhood" : "fresh";
    }

    function resetPipelineMarks() {
        document.querySelectorAll(".planner-pipeline [data-phase]").forEach(function (phase) { phase.classList.remove("is-active", "is-complete"); });
    }

    function setPipelinePhase(key, index) {
        document.querySelectorAll(".planner-pipeline [data-phase]").forEach(function (phase, phaseIndex) {
            phase.classList.toggle("is-active", phase.dataset.phase === key);
            phase.classList.toggle("is-complete", phaseIndex < index);
        });
    }

    function markPipelineComplete() {
        document.querySelectorAll(".planner-pipeline [data-phase]").forEach(function (phase) { phase.classList.remove("is-active"); phase.classList.add("is-complete"); });
    }

    function delay(milliseconds) {
        return new Promise(function (resolve) { window.setTimeout(resolve, milliseconds); });
    }

    function switchTab(tab) {
        activeTab = tab;
        document.querySelectorAll("[data-tab]").forEach(function (button) {
            const active = button.dataset.tab === tab;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-selected", String(active));
        });
        document.querySelectorAll(".result-panel").forEach(function (panel) { panel.hidden = panel.id !== "panel-" + tab; });
    }

    async function copyOcrText() {
        try {
            await navigator.clipboard.writeText(elements.ocrText.textContent);
            showToast("Parsed receipt text copied.");
        } catch (error) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(elements.ocrText);
            selection.removeAllRanges();
            selection.addRange(range);
            showToast("Receipt text selected. Use Ctrl+C to copy it.");
        }
    }

    function resetDemo() {
        state = createDefaultState();
        selectedEntryId = state.entries[0].id;
        pendingFixtureId = "fresh";
        pendingImage = fixtures.fresh.image;
        sampleIndex = 0;
        expandedRecipe = null;
        elements.receiptImage.src = fixtures.fresh.image;
        elements.receiptImage.alt = "Fictional Fresh Market grocery receipt";
        elements.receiptReady.textContent = "Demo ready";
        elements.planStyle.value = "quick";
        elements.notes.value = "";
        elements.recipeType.value = "all";
        localStorage.removeItem(STORAGE_KEY);
        switchTab("overview");
        render();
        showToast("Sample receipt analyses restored.");
    }

    function showToast(message) {
        window.clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        toastTimer = window.setTimeout(function () { elements.toast.classList.remove("is-visible"); }, 2800);
    }

    elements.chooseReceipt.addEventListener("click", function () { elements.receiptFile.click(); });
    elements.sampleReceipt.addEventListener("click", switchSample);
    elements.receiptFile.addEventListener("change", function (event) { handleReceipt(event.target.files && event.target.files[0]); event.target.value = ""; });
    elements.analyze.addEventListener("click", runPipeline);
    elements.recipeType.addEventListener("change", function () { renderRecipes(buildAnalysis(selectedEntry()).recipes); });
    elements.copyOcr.addEventListener("click", copyOcrText);
    elements.resetButton.addEventListener("click", function () { elements.resetDialog.showModal(); });
    elements.confirmReset.addEventListener("click", resetDemo);

    elements.savedList.addEventListener("click", function (event) {
        const button = event.target.closest("[data-entry]");
        if (!button) return;
        selectedEntryId = button.dataset.entry;
        expandedRecipe = null;
        elements.recipeType.value = "all";
        switchTab("overview");
        render();
        showToast("Saved analysis loaded.");
    });

    elements.recipeList.addEventListener("click", function (event) {
        const button = event.target.closest("[data-recipe]");
        if (!button) return;
        expandedRecipe = expandedRecipe === button.dataset.recipe ? null : button.dataset.recipe;
        renderRecipes(buildAnalysis(selectedEntry()).recipes);
    });

    document.querySelectorAll("[data-tab]").forEach(function (button) { button.addEventListener("click", function () { switchTab(button.dataset.tab); }); });
    document.querySelectorAll(".hub-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.querySelectorAll(".hub-nav a").forEach(function (item) { item.classList.remove("is-active"); });
            link.classList.add("is-active");
        });
    });

    ["dragenter", "dragover"].forEach(function (name) {
        document.querySelector(".receipt-preview").addEventListener(name, function (event) { event.preventDefault(); event.currentTarget.classList.add("is-scanning"); });
    });
    ["dragleave", "drop"].forEach(function (name) {
        document.querySelector(".receipt-preview").addEventListener(name, function (event) { event.preventDefault(); event.currentTarget.classList.remove("is-scanning"); });
    });
    document.querySelector(".receipt-preview").addEventListener("drop", function (event) {
        const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
        handleReceipt(file);
    });

    render();
}());
