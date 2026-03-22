const climbs = Array.isArray(window.GROGGY_CLIMBS) ? [...window.GROGGY_CLIMBS] : [];

const routesList = document.getElementById("routes-list");
const routesEmpty = document.getElementById("routes-empty");
const sortSelect = document.getElementById("sort-select");
const locationSelect = document.getElementById("location-select");
const relevanceSelect = document.getElementById("relevance-select");
const resultsStatus = document.getElementById("results-status");
const routesCount = document.getElementById("routes-count");
const peakCount = document.getElementById("peak-count");
const locationsCount = document.getElementById("locations-count");
const projectCount = document.getElementById("project-count");

function uniqueLocations(items) {
    return [...new Set(items.map((item) => item.location))].sort((a, b) => a.localeCompare(b));
}

function populateLocationFilter(items) {
    uniqueLocations(items).forEach((location) => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
}

function updateStats(items) {
    routesCount.textContent = items.length;
    peakCount.textContent = items.filter((item) => item.relevance === "Peak Match").length;
    locationsCount.textContent = uniqueLocations(items).length;
    projectCount.textContent = items.filter((item) => item.projectPick).length;
}

function sortClimbs(items, sortMode) {
    const copy = [...items];
    switch (sortMode) {
        case "location":
            return copy.sort((a, b) => {
                const locationCompare = a.location.localeCompare(b.location);
                if (locationCompare !== 0) {
                    return locationCompare;
                }
                return a.name.localeCompare(b.name);
            });
        case "grade":
            return copy.sort((a, b) => {
                if (b.gradeRank !== a.gradeRank) {
                    return b.gradeRank - a.gradeRank;
                }
                return a.name.localeCompare(b.name);
            });
        case "name":
            return copy.sort((a, b) => a.name.localeCompare(b.name));
        case "relevance":
        default:
            return copy.sort((a, b) => {
                if (b.relevanceRank !== a.relevanceRank) {
                    return b.relevanceRank - a.relevanceRank;
                }
                if (a.location !== b.location) {
                    return a.location.localeCompare(b.location);
                }
                return a.name.localeCompare(b.name);
            });
    }
}

function render(items) {
    routesList.innerHTML = "";
    routesEmpty.hidden = items.length !== 0;
    resultsStatus.textContent = `${items.length} route${items.length === 1 ? "" : "s"} shown`;

    items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "route-card";

        const tagMarkup = item.tags.map((tag) => `<span class="route-chip">${tag}</span>`).join("");
        const projectFlag = item.projectPick
            ? `<span class="route-flag">Project lane</span>`
            : "";

        card.innerHTML = `
            <div class="route-card-top">
                <div>
                    <p class="route-location">${item.location}</p>
                    <h3>${item.name}</h3>
                </div>
                <div class="route-grade-box">
                    <span>Grade</span>
                    <strong>${item.grade}</strong>
                </div>
            </div>
            <div class="route-meta">
                <span class="relevance-pill relevance-${item.relevance.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">${item.relevance}</span>
                <span class="route-area">${item.area}</span>
                ${projectFlag}
            </div>
            <p class="route-note">${item.note}</p>
            <div class="route-chip-row">${tagMarkup}</div>
            <a class="route-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel}</a>
        `;

        routesList.appendChild(card);
    });
}

function applyFilters() {
    const locationValue = locationSelect.value;
    const relevanceValue = relevanceSelect.value;
    const sortValue = sortSelect.value;

    const filtered = climbs.filter((item) => {
        const locationMatch = locationValue === "all" || item.location === locationValue;
        const relevanceMatch = relevanceValue === "all" || item.relevance === relevanceValue;
        return locationMatch && relevanceMatch;
    });

    render(sortClimbs(filtered, sortValue));
}

populateLocationFilter(climbs);
updateStats(climbs);
applyFilters();

[sortSelect, locationSelect, relevanceSelect].forEach((element) => {
    element.addEventListener("change", applyFilters);
});
