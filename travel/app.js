const map = L.map("travel-map", {
    worldCopyJump: true,
    minZoom: 2
}).setView([20, 10], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const placesListEl = document.getElementById("places-list");
const searchInputEl = document.getElementById("search-input");
const placesCountEl = document.getElementById("places-count");
const countriesCountEl = document.getElementById("countries-count");
const regionsCountEl = document.getElementById("regions-count");
const updatedAtEl = document.getElementById("updated-at");
const statusEl = document.getElementById("travel-status");

let allPlaces = [];
let filteredPlaces = [];
let markers = [];
let activeIndex = -1;

function formatDate(ts) {
    if (!ts) return "Unknown";
    const d = new Date(ts);
    return Number.isFinite(d.getTime()) ? d.toLocaleDateString() : "Unknown";
}

function clearMarkers() {
    for (const marker of markers) {
        marker.remove();
    }
    markers = [];
}

function renderMarkers() {
    clearMarkers();
    const bounds = [];

    filteredPlaces.forEach((place, index) => {
        const marker = L.circleMarker([place.lat, place.lon], {
            radius: 6,
            color: "#143b63",
            weight: 2,
            fillColor: "#7fc8a9",
            fillOpacity: 0.85
        }).addTo(map);

        marker.bindPopup(`<strong>${place.label}</strong><br>Added ${formatDate(place.addedAt)}`);
        marker.on("click", () => setActivePlace(index));
        markers.push(marker);
        bounds.push([place.lat, place.lon]);
    });

    if (bounds.length) {
        map.fitBounds(bounds, { padding: [28, 28], maxZoom: 5 });
    }
}

function renderList() {
    placesListEl.innerHTML = "";

    if (!filteredPlaces.length) {
        placesListEl.innerHTML = "<div class=\"place-card\">No places matched your search.</div>";
        return;
    }

    filteredPlaces.forEach((place, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `place-card${index === activeIndex ? " active" : ""}`;
        card.innerHTML = `
            <strong>${place.label}</strong>
            <span>${place.lat.toFixed(3)}, ${place.lon.toFixed(3)}</span>
            <span>Added ${formatDate(place.addedAt)}</span>
        `;
        card.addEventListener("click", () => setActivePlace(index));
        placesListEl.appendChild(card);
    });
}

function setActivePlace(index) {
    activeIndex = index;
    renderList();
    const place = filteredPlaces[index];
    const marker = markers[index];
    if (!place || !marker) return;
    map.flyTo([place.lat, place.lon], Math.max(map.getZoom(), 5), { duration: 0.8 });
    marker.openPopup();
}

function applySearch() {
    const q = searchInputEl.value.trim().toLowerCase();
    filteredPlaces = allPlaces.filter((place) => place.label.toLowerCase().includes(q));
    activeIndex = filteredPlaces.length ? 0 : -1;
    renderMarkers();
    renderList();
}

async function init() {
    try {
        const res = await fetch("data/places.json");
        if (!res.ok) throw new Error(`Failed to load places (${res.status})`);
        const data = await res.json();

        allPlaces = Array.isArray(data.places) ? data.places : [];
        filteredPlaces = allPlaces.slice();

        placesCountEl.textContent = String(data.count ?? allPlaces.length);
        countriesCountEl.textContent = String(data.stats?.countries ?? 0);
        regionsCountEl.textContent = String(data.stats?.admin1 ?? 0);
        updatedAtEl.textContent = formatDate(data.exportedAt);
        statusEl.textContent = `${allPlaces.length} places loaded`;

        renderMarkers();
        renderList();
        if (filteredPlaces.length) {
            setActivePlace(0);
        }
    } catch (err) {
        console.error(err);
        statusEl.textContent = "Could not load travel data";
        placesListEl.innerHTML = `<div class="place-card">${String(err.message || err)}</div>`;
    }
}

searchInputEl.addEventListener("input", applySearch);

init();
