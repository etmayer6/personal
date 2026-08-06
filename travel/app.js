const leaflet = window.L || null;
const map = leaflet ? leaflet.map("travel-map", {
    worldCopyJump: true,
    minZoom: 2
}).setView([20, 10], 2) : null;

if (map) {
    leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
}

const placesListEl = document.getElementById("places-list");
const searchInputEl = document.getElementById("search-input");
const placesCountEl = document.getElementById("places-count");
const photosCountEl = document.getElementById("photos-count");
const countriesCountEl = document.getElementById("countries-count");
const regionsCountEl = document.getElementById("regions-count");
const statusEl = document.getElementById("travel-status");
const listTitleEl = document.getElementById("list-title");
const viewButtons = [...document.querySelectorAll("[data-view]")];
const mapFallbackEl = document.getElementById("travel-map-fallback");
const mapRetryEl = document.getElementById("travel-map-retry");
const recoveryEl = document.getElementById("travel-recovery");
const retryDataEl = document.getElementById("travel-retry-data");
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const FALLBACK_DATA = {
    count: 3,
    places: [
        { label: "Ames, Iowa, United States", lat: 42.0308, lon: -93.6319, addedAt: 1767225600000 },
        { label: "Punta Sur, Isla Mujeres, Mexico", lat: 21.2018, lon: -86.7116, addedAt: 1767225600000 },
        { label: "El Boqueron, El Salvador", lat: 13.734, lon: -89.286, addedAt: 1767225600000 }
    ],
    countries: [{ code: "US" }, { code: "MX" }, { code: "SV" }],
    admin1: [{ label: "Iowa" }, { label: "Quintana Roo" }, { label: "San Salvador" }]
};

const FALLBACK_PHOTOS = {
    count: 3,
    photos: [
        { id: "fixture-ames", title: "Winter campus walk", image: "../images/photos/optimized/P1020464-480.webp", fullImage: "../images/photos/optimized/P1020464-1440.webp", width: 1440, height: 1080, label: "Ames, Iowa, United States", lat: 42.0275, lon: -93.6464, countryCode: "US", region: "Iowa", coordinateSource: "inferred" },
        { id: "fixture-isla", title: "Caribbean shoreline", image: "../images/photos/optimized/G0019814-480.webp", fullImage: "../images/photos/optimized/G0019814-1440.webp", width: 1440, height: 1080, label: "Punta Sur, Isla Mujeres, Mexico", lat: 21.2018, lon: -86.7116, countryCode: "MX", region: "Quintana Roo", coordinateSource: "inferred" },
        { id: "fixture-volcano", title: "Volcanic highland", image: "../images/photos/optimized/P1020888-480.webp", fullImage: "../images/photos/optimized/P1020888-1440.webp", width: 1440, height: 1080, label: "El Boqueron, El Salvador", lat: 13.734, lon: -89.286, countryCode: "SV", region: "San Salvador", coordinateSource: "inferred" }
    ]
};

let allPlaces = [];
let allPhotos = [];
let filteredPlaces = [];
let filteredPhotos = [];
let markers = [];
let activeIndex = -1;
let activeView = "photos";
let photoMarkerByLabel = new Map();
let photoImageObserver = null;

function loadDeferredPhotoImage(image) {
    const source = image.dataset.src;
    if (!source) return;
    image.src = source;
    delete image.dataset.src;
}

function observePhotoImages() {
    photoImageObserver?.disconnect();
    const deferredImages = [...placesListEl.querySelectorAll("img[data-src]")];
    if (!deferredImages.length) return;

    if (!("IntersectionObserver" in window)) {
        deferredImages.forEach(loadDeferredPhotoImage);
        return;
    }

    photoImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            loadDeferredPhotoImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, { rootMargin: "240px 0px" });
    deferredImages.forEach((image) => photoImageObserver.observe(image));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

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
    photoMarkerByLabel = new Map();
}

function groupedPhotos(items) {
    const groups = new Map();
    for (const photo of items) {
        const group = groups.get(photo.label) || {
            label: photo.label,
            latTotal: 0,
            lonTotal: 0,
            photos: []
        };
        group.latTotal += photo.lat;
        group.lonTotal += photo.lon;
        group.photos.push(photo);
        groups.set(photo.label, group);
    }
    return [...groups.values()].map((group) => ({
        label: group.label,
        lat: group.latTotal / group.photos.length,
        lon: group.lonTotal / group.photos.length,
        photos: group.photos
    }));
}

function photoPopup(group, selectedId = null) {
    const selected = group.photos.find((photo) => photo.id === selectedId);
    const ordered = selected
        ? [selected, ...group.photos.filter((photo) => photo.id !== selected.id)]
        : group.photos;
    const previewPhotos = ordered.slice(0, 6);
    const previews = previewPhotos.map((photo) => `
        <a href="${escapeHtml(photo.fullImage)}" target="_blank" rel="noreferrer" title="Open ${escapeHtml(photo.title)}">
            <img src="${escapeHtml(photo.image)}" alt="${escapeHtml(photo.title)}" loading="lazy" width="${photo.width || 1440}" height="${photo.height || 1080}" sizes="86px">
        </a>
    `).join("");
    const remaining = Math.max(0, group.photos.length - previewPhotos.length);
    return `
        <div class="photo-map-popup">
            <strong>${escapeHtml(group.label)}</strong>
            <span>${group.photos.length} gallery ${group.photos.length === 1 ? "photo" : "photos"}</span>
            <div class="photo-popup-grid">${previews}</div>
            ${remaining ? `<small>+${remaining} more in the photo list</small>` : ""}
        </div>
    `;
}

function renderPhotoMarkers() {
    if (!map) return [];
    const bounds = [];
    for (const group of groupedPhotos(filteredPhotos)) {
        const marker = leaflet.circleMarker([group.lat, group.lon], {
            radius: Math.min(12, 6 + Math.sqrt(group.photos.length)),
            color: "#8f3f24",
            weight: 2,
            fillColor: "#e78555",
            fillOpacity: 0.9
        }).addTo(map);

        marker.bindPopup(photoPopup(group), { maxWidth: 310, minWidth: 220 });
        photoMarkerByLabel.set(group.label, { marker, group });
        markers.push(marker);
        bounds.push([group.lat, group.lon]);
    }
    return bounds;
}

function renderPlaceMarkers() {
    if (!map) return [];
    const bounds = [];

    filteredPlaces.forEach((place, index) => {
        const marker = leaflet.circleMarker([place.lat, place.lon], {
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
    return bounds;
}

function renderMarkers() {
    if (!map) {
        mapFallbackEl.hidden = false;
        return;
    }
    mapFallbackEl.hidden = true;
    clearMarkers();
    const bounds = activeView === "photos" ? renderPhotoMarkers() : renderPlaceMarkers();

    if (bounds.length) {
        map.fitBounds(bounds, { padding: [28, 28], maxZoom: 5 });
    }
}

function renderPlacesList() {
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

function renderPhotosList() {
    filteredPhotos.forEach((photo, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `place-card photo-card${index === activeIndex ? " active" : ""}`;
        card.innerHTML = `
            <img src="${transparentPixel}" data-src="${escapeHtml(photo.image)}" alt="" loading="lazy" width="${photo.width || 1440}" height="${photo.height || 1080}" sizes="86px">
            <span class="photo-card-copy">
                <strong>${escapeHtml(photo.label)}</strong>
                <span>${escapeHtml(photo.title)}</span>
                <span class="coordinate-source ${photo.coordinateSource}">${photo.coordinateSource === "exif" ? "EXIF GPS" : "Trip inferred"}</span>
            </span>
        `;
        card.addEventListener("click", () => setActivePhoto(index));
        placesListEl.appendChild(card);
    });
}

function renderList() {
    placesListEl.innerHTML = "";
    const items = activeView === "photos" ? filteredPhotos : filteredPlaces;
    if (!items.length) {
        document.body.dataset.demoState = "empty";
        statusEl.dataset.state = "empty";
        placesListEl.innerHTML = `<div class="place-card">No ${activeView} matched your search. Try clearing the search or switching views.</div>`;
        return;
    }
    if (activeView === "photos") renderPhotosList();
    else renderPlacesList();
    observePhotoImages();
}

function setActivePlace(index) {
    activeIndex = index;
    renderList();
    const place = filteredPlaces[index];
    const marker = markers[index];
    if (!place || !marker || !map) return;
    map.flyTo([place.lat, place.lon], Math.max(map.getZoom(), 5), { duration: 0.8 });
    marker.openPopup();
}

function setActivePhoto(index) {
    activeIndex = index;
    renderList();
    const photo = filteredPhotos[index];
    const markerEntry = photoMarkerByLabel.get(photo?.label);
    if (!photo || !markerEntry || !map) return;
    const { marker, group } = markerEntry;
    marker.setPopupContent(photoPopup(group, photo.id));
    map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 7), { duration: 0.8 });
    marker.openPopup();
}

function updateStatus() {
    if (activeView === "photos") {
        const exact = filteredPhotos.filter((photo) => photo.coordinateSource === "exif").length;
        statusEl.textContent = `${filteredPhotos.length} photos | ${exact} with EXIF GPS`;
    } else {
        statusEl.textContent = `${filteredPlaces.length} places loaded`;
    }
    statusEl.dataset.state = "ready";
    document.body.dataset.demoState = "ready";
}

function applySearch() {
    const q = searchInputEl.value.trim().toLowerCase();
    filteredPlaces = allPlaces.filter((place) => place.label.toLowerCase().includes(q));
    filteredPhotos = allPhotos.filter((photo) =>
        `${photo.title} ${photo.label}`.toLowerCase().includes(q)
    );
    const items = activeView === "photos" ? filteredPhotos : filteredPlaces;
    activeIndex = items.length ? 0 : -1;
    renderMarkers();
    renderList();
    updateStatus();
}

function setView(view) {
    if (!["photos", "places"].includes(view)) return;
    activeView = view;
    activeIndex = -1;
    for (const button of viewButtons) {
        button.setAttribute("aria-pressed", String(button.dataset.view === activeView));
    }
    listTitleEl.textContent = activeView === "photos" ? "Gallery Photos" : "Visited Places";
    searchInputEl.placeholder = activeView === "photos" ? "Search photos or locations" : "Search places";
    renderMarkers();
    renderList();
    updateStatus();
}

function renderTravelData(data, photoData, offline = false) {
    allPlaces = Array.isArray(data.places) ? data.places : [];
    allPhotos = Array.isArray(photoData.photos) ? photoData.photos : [];
    filteredPlaces = allPlaces.slice();
    filteredPhotos = allPhotos.slice();

    placesCountEl.textContent = String(data.count ?? allPlaces.length);
    photosCountEl.textContent = String(photoData.count ?? allPhotos.length);
    const countries = new Set([
        ...(data.countries || []).map((country) => country.code),
        ...allPhotos.map((photo) => photo.countryCode)
    ]);
    const regions = new Set([
        ...(data.admin1 || []).map((region) => region.label),
        ...allPhotos.map((photo) => photo.region)
    ]);
    countriesCountEl.textContent = String(countries.size);
    regionsCountEl.textContent = String(regions.size);

    recoveryEl.hidden = !offline;
    statusEl.textContent = offline ? "Offline fixture ready" : "Travel data ready";
    statusEl.dataset.state = offline ? "offline" : "ready";
    renderMarkers();
    renderList();
    updateStatus();
    if (offline) {
        statusEl.textContent = "Offline fixture ready";
        statusEl.dataset.state = "offline";
    }
}

async function init() {
    document.body.dataset.demoState = "loading";
    statusEl.dataset.state = "loading";
    try {
        const [placesResponse, photosResponse] = await Promise.all([
            fetch("data/places.json"),
            fetch("data/photos.json")
        ]);
        if (!placesResponse.ok) throw new Error(`Failed to load places (${placesResponse.status})`);
        if (!photosResponse.ok) throw new Error(`Failed to load photos (${photosResponse.status})`);
        const [data, photoData] = await Promise.all([
            placesResponse.json(),
            photosResponse.json()
        ]);

        renderTravelData(data, photoData);
    } catch (err) {
        renderTravelData(FALLBACK_DATA, FALLBACK_PHOTOS, true);
    }
}

searchInputEl.addEventListener("input", applySearch);
viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
retryDataEl.addEventListener("click", init);
mapRetryEl.addEventListener("click", () => window.location.reload());

init();
