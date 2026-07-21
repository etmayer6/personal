const ROUND_COUNT = 5;
const MAX_ROUND_SCORE = 5000;
const MAPILLARY_TIMEOUT_MS = 5000;
const MAPILLARY_SEARCH_ATTEMPTS = 6;
const MAPILLARY_CELL_SIZE = 0.003;
const MIN_MAP_ZOOM = 1;
const MAX_MAP_ZOOM = 8;
const MAP_ZOOM_FACTOR = 1.5;

const localLocations = [
    {
        image: "../images/photos/optimized/P1020464-960.webp",
        imageSmall: "../images/photos/optimized/P1020464-480.webp",
        answer: "Ames, Iowa, USA",
        lat: 42.0275,
        lon: -93.6464,
        hints: [
            "Snow and broad deciduous trees point to a cold continental climate.",
            "The formal campus architecture belongs to a Midwestern university town.",
            "This is in the U.S. state of Iowa."
        ]
    },
    {
        image: "../images/photos/optimized/P1020534-960.webp",
        imageSmall: "../images/photos/optimized/P1020534-480.webp",
        answer: "Ames, Iowa, USA",
        lat: 42.0112,
        lon: -93.6379,
        hints: [
            "A heavy winter storm narrows this to the colder half of North America.",
            "The illuminated garden is in a U.S. college town.",
            "Look near the center of Iowa."
        ]
    },
    {
        image: "../images/photos/optimized/P1020612-960.webp",
        imageSmall: "../images/photos/optimized/P1020612-480.webp",
        answer: "Isla Mujeres, Mexico",
        lat: 21.2372,
        lon: -86.735,
        hints: [
            "Spanish text, palms, and an outdoor court suggest the tropical Americas.",
            "This location is on a small Caribbean island.",
            "The island sits just off Mexico's Yucatan Peninsula."
        ]
    },
    {
        image: "../images/photos/optimized/P1020888-960.webp",
        imageSmall: "../images/photos/optimized/P1020888-480.webp",
        answer: "El Boqueron, El Salvador",
        lat: 13.734,
        lon: -89.286,
        hints: [
            "Lush vegetation fills the walls of a volcanic crater.",
            "This highland landmark overlooks a Central American capital.",
            "The country is El Salvador."
        ]
    },
    {
        image: "../images/photos/optimized/P1020902-960.webp",
        imageSmall: "../images/photos/optimized/P1020902-480.webp",
        answer: "San Salvador, El Salvador",
        lat: 13.7328,
        lon: -89.2759,
        hints: [
            "Tropical plants meet a paved mountain road with yellow center markings.",
            "The terrain is volcanic and the region is Central American.",
            "This road is in the hills above San Salvador."
        ]
    },
    {
        image: "../images/photos/optimized/P1020918-960.webp",
        imageSmall: "../images/photos/optimized/P1020918-480.webp",
        answer: "Lake Coatepeque, El Salvador",
        lat: 13.8834,
        lon: -89.5255,
        hints: [
            "Dense tropical hills rise directly behind a lakeside settlement.",
            "The lake occupies a volcanic caldera in Central America.",
            "This is Lake Coatepeque in El Salvador."
        ]
    },
    {
        image: "../images/photos/optimized/P1020929-960.webp",
        imageSmall: "../images/photos/optimized/P1020929-480.webp",
        answer: "Lake Coatepeque, El Salvador",
        lat: 13.883,
        lon: -89.5267,
        hints: [
            "A warm, forested crater lake surrounds this dock.",
            "This is west of a Central American capital.",
            "The country is El Salvador."
        ]
    }
];

const worldRegions = [
    { label: "Seattle, USA", country: "the United States", continent: "North America", bbox: [-122.38, 47.58, -122.28, 47.66] },
    { label: "San Francisco, USA", country: "the United States", continent: "North America", bbox: [-122.46, 37.74, -122.38, 37.82] },
    { label: "New York City, USA", country: "the United States", continent: "North America", bbox: [-74.02, 40.70, -73.94, 40.78] },
    { label: "Mexico City, Mexico", country: "Mexico", continent: "North America", bbox: [-99.18, 19.39, -99.10, 19.47] },
    { label: "Montreal, Canada", country: "Canada", continent: "North America", bbox: [-73.62, 45.48, -73.54, 45.56] },
    { label: "Bogota, Colombia", country: "Colombia", continent: "South America", bbox: [-74.10, 4.61, -74.02, 4.69] },
    { label: "Quito, Ecuador", country: "Ecuador", continent: "South America", bbox: [-78.54, -0.24, -78.46, -0.16] },
    { label: "Lima, Peru", country: "Peru", continent: "South America", bbox: [-77.08, -12.09, -77.00, -12.01] },
    { label: "Santiago, Chile", country: "Chile", continent: "South America", bbox: [-70.69, -33.48, -70.61, -33.40] },
    { label: "Buenos Aires, Argentina", country: "Argentina", continent: "South America", bbox: [-58.42, -34.64, -58.34, -34.56] },
    { label: "Sao Paulo, Brazil", country: "Brazil", continent: "South America", bbox: [-46.68, -23.59, -46.60, -23.51] },
    { label: "London, United Kingdom", country: "the United Kingdom", continent: "Europe", bbox: [-0.17, 51.49, -0.09, 51.57] },
    { label: "Paris, France", country: "France", continent: "Europe", bbox: [2.31, 48.83, 2.39, 48.91] },
    { label: "Lisbon, Portugal", country: "Portugal", continent: "Europe", bbox: [-9.18, 38.70, -9.10, 38.78] },
    { label: "Madrid, Spain", country: "Spain", continent: "Europe", bbox: [-3.74, 40.38, -3.66, 40.46] },
    { label: "Amsterdam, Netherlands", country: "the Netherlands", continent: "Europe", bbox: [4.86, 52.34, 4.94, 52.42] },
    { label: "Rome, Italy", country: "Italy", continent: "Europe", bbox: [12.46, 41.87, 12.54, 41.95] },
    { label: "Oslo, Norway", country: "Norway", continent: "Europe", bbox: [10.70, 59.89, 10.78, 59.97] },
    { label: "Athens, Greece", country: "Greece", continent: "Europe", bbox: [23.69, 37.95, 23.77, 38.03] },
    { label: "Cape Town, South Africa", country: "South Africa", continent: "Africa", bbox: [18.39, -33.96, 18.47, -33.88] },
    { label: "Nairobi, Kenya", country: "Kenya", continent: "Africa", bbox: [36.78, -1.32, 36.86, -1.24] },
    { label: "Accra, Ghana", country: "Ghana", continent: "Africa", bbox: [-0.24, 5.52, -0.16, 5.60] },
    { label: "Tunis, Tunisia", country: "Tunisia", continent: "Africa", bbox: [10.14, 36.78, 10.22, 36.86] },
    { label: "Marrakech, Morocco", country: "Morocco", continent: "Africa", bbox: [-8.02, 31.59, -7.94, 31.67] },
    { label: "Kampala, Uganda", country: "Uganda", continent: "Africa", bbox: [32.54, 0.28, 32.62, 0.36] },
    { label: "Tokyo, Japan", country: "Japan", continent: "Asia", bbox: [139.72, 35.65, 139.80, 35.73] },
    { label: "Seoul, South Korea", country: "South Korea", continent: "Asia", bbox: [126.94, 37.53, 127.02, 37.61] },
    { label: "Taipei, Taiwan", country: "Taiwan", continent: "Asia", bbox: [121.50, 25.01, 121.58, 25.09] },
    { label: "Bangkok, Thailand", country: "Thailand", continent: "Asia", bbox: [100.48, 13.72, 100.56, 13.80] },
    { label: "Singapore", country: "Singapore", continent: "Asia", bbox: [103.81, 1.27, 103.89, 1.35] },
    { label: "Manila, Philippines", country: "the Philippines", continent: "Asia", bbox: [120.96, 14.56, 121.04, 14.64] },
    { label: "Delhi, India", country: "India", continent: "Asia", bbox: [77.18, 28.58, 77.26, 28.66] },
    { label: "Dubai, United Arab Emirates", country: "the United Arab Emirates", continent: "Asia", bbox: [55.24, 25.18, 55.32, 25.26] },
    { label: "Sydney, Australia", country: "Australia", continent: "Oceania", bbox: [151.17, -33.90, 151.25, -33.82] },
    { label: "Melbourne, Australia", country: "Australia", continent: "Oceania", bbox: [144.92, -37.85, 145.00, -37.77] },
    { label: "Brisbane, Australia", country: "Australia", continent: "Oceania", bbox: [153.00, -27.50, 153.08, -27.42] },
    { label: "Auckland, New Zealand", country: "New Zealand", continent: "Oceania", bbox: [174.72, -36.89, 174.80, -36.81] },
    { label: "Wellington, New Zealand", country: "New Zealand", continent: "Oceania", bbox: [174.74, -41.32, 174.82, -41.24] },
    { label: "Perth, Australia", country: "Australia", continent: "Oceania", bbox: [115.82, -31.99, 115.90, -31.91] }
];

const mapillaryToken = String(window.PINPOINT_MAPILLARY_TOKEN || "").trim();
const WORLD_MAP_URL = "world-110m.json";
const worldMap = {
    land: [],
    countries: [],
    ready: false
};

const gameEl = document.getElementById("pinpoint-game");
const canvas = document.getElementById("world-map");
const ctx = canvas.getContext("2d");
const imageEl = document.getElementById("location-image");
const loadingEl = document.getElementById("image-loading");
const roundValueEl = document.getElementById("round-value");
const scoreValueEl = document.getElementById("score-value");
const hintValueEl = document.getElementById("hint-value");
const statusEl = document.getElementById("game-status");
const photoLabelEl = document.getElementById("photo-label");
const photoCreditEl = document.getElementById("photo-credit");
const sourcePillEl = document.getElementById("source-pill");
const coordinateEl = document.getElementById("coordinate-readout");
const mapInstructionEl = document.getElementById("map-instruction");
const zoomOutButton = document.getElementById("map-zoom-out");
const zoomResetButton = document.getElementById("map-zoom-reset");
const zoomInButton = document.getElementById("map-zoom-in");
const zoomValueEl = document.getElementById("map-zoom-value");
const hintBoxEl = document.getElementById("hint-box");
const hintTextEl = document.getElementById("hint-text");
const hintButton = document.getElementById("hint-button");
const guessButton = document.getElementById("guess-button");
const resultEl = document.getElementById("round-result");
const answerTitleEl = document.getElementById("answer-title");
const answerDetailEl = document.getElementById("answer-detail");
const roundScoreEl = document.getElementById("round-score");
const nextButton = document.getElementById("next-button");
const fullscreenButton = document.getElementById("fullscreen-button");

const state = {
    mode: "loading",
    sequence: [],
    roundIndex: 0,
    totalScore: 0,
    hintCount: 0,
    guess: null,
    distanceKm: null,
    roundScore: null,
    source: "local",
    generation: 0,
    mapillaryFailures: 0
};

const mapView = {
    zoom: MIN_MAP_ZOOM,
    centerLon: 0,
    centerLat: 0
};

const mapGesture = {
    pointers: new Map(),
    moved: false,
    pinched: false
};

function shuffledLocations() {
    const grouped = new Map();
    for (const location of localLocations) {
        const group = grouped.get(location.answer) || [];
        group.push(location);
        grouped.set(location.answer, group);
    }
    const copy = [...grouped.values()].map((group) => group[Math.floor(Math.random() * group.length)]);
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, ROUND_COUNT);
}

function shuffledCopy(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function balancedRegions() {
    const byContinent = new Map();
    for (const region of worldRegions) {
        const regions = byContinent.get(region.continent) || [];
        regions.push(region);
        byContinent.set(region.continent, regions);
    }
    return shuffledCopy([...byContinent.entries()])
        .slice(0, ROUND_COUNT)
        .map(([, regions]) => regions[Math.floor(Math.random() * regions.length)]);
}

function regionHints(region, lat) {
    const hemisphere = lat >= 0 ? "Northern" : "Southern";
    const latitude = Math.abs(lat);
    const latitudeBand = latitude < 23.5 ? "tropical latitudes" : latitude < 50 ? "the world's middle latitudes" : "the higher latitudes";
    return [
        `This camera is in the ${hemisphere} Hemisphere, within ${latitudeBand}.`,
        `This round is somewhere in ${region.continent}.`,
        `The image was captured in ${region.country}.`
    ];
}

async function fetchMapillaryRound(region) {
    const [minLon, minLat, maxLon, maxLat] = region.bbox;

    for (let attempt = 0; attempt < MAPILLARY_SEARCH_ATTEMPTS; attempt += 1) {
        const width = Math.min(MAPILLARY_CELL_SIZE, maxLon - minLon);
        const height = Math.min(MAPILLARY_CELL_SIZE, maxLat - minLat);
        const west = minLon + Math.random() * Math.max(0, maxLon - minLon - width);
        const south = minLat + Math.random() * Math.max(0, maxLat - minLat - height);
        const endpoint = new URL("https://graph.mapillary.com/images");
        endpoint.searchParams.set("access_token", mapillaryToken);
        endpoint.searchParams.set("bbox", [west, south, west + width, south + height].join(","));
        endpoint.searchParams.set("fields", "id,geometry,computed_geometry,thumb_1024_url,thumb_2048_url,captured_at,compass_angle,is_pano,width,height,quality_score");
        endpoint.searchParams.set("limit", "24");

        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), MAPILLARY_TIMEOUT_MS);
        let payload;
        try {
            const response = await fetch(endpoint, { mode: "cors", signal: controller.signal });
            if (!response.ok) continue;
            payload = await response.json();
        } catch (error) {
            if (error.name === "AbortError") continue;
            throw error;
        } finally {
            window.clearTimeout(timeout);
        }

        const candidates = (payload.data || []).filter((image) => {
            const geometry = image.computed_geometry || image.geometry;
            return image.thumb_1024_url && geometry && Array.isArray(geometry.coordinates);
        });
        if (!candidates.length) continue;

        const standardImages = candidates.filter((image) => !image.is_pano);
        const perspectivePool = standardImages.length ? standardImages : candidates;
        const landscape = perspectivePool.filter((image) => !image.width || !image.height || image.width >= image.height * 1.1);
        const qualityPool = landscape.filter((image) => image.quality_score == null || image.quality_score >= 0.35);
        const pool = qualityPool.length ? qualityPool : landscape.length ? landscape : perspectivePool;
        const image = pool[Math.floor(Math.random() * pool.length)];
        const geometry = image.computed_geometry || image.geometry;
        const [lon, lat] = geometry.coordinates;
        return {
            image: image.thumb_2048_url || image.thumb_1024_url,
            imageSmall: image.thumb_1024_url,
            imageId: image.id,
            answer: region.label,
            lat,
            lon,
            hints: regionHints(region, lat),
            source: "mapillary"
        };
    }

    throw new Error("Mapillary returned no images after six local searches");
}

async function buildWorldwideSequence() {
    const regions = balancedRegions();
    const localFallbacks = shuffledLocations();
    const results = await Promise.all(regions.map(async (region, index) => {
        try {
            return { location: await fetchMapillaryRound(region), fallback: false };
        } catch (error) {
            console.warn(`Pinpoint used a local fallback for ${region.label}:`, error.message);
            return { location: localFallbacks[index], fallback: true };
        }
    }));
    return {
        sequence: shuffledCopy(results.map((result) => result.location)),
        failures: results.filter((result) => result.fallback).length
    };
}

function currentLocation() {
    return state.sequence[state.roundIndex];
}

function normalizeLongitude(lon) {
    let normalized = lon;
    while (normalized < -180) normalized += 360;
    while (normalized > 180) normalized -= 360;
    return normalized;
}

function constrainMapView() {
    mapView.zoom = Math.max(MIN_MAP_ZOOM, Math.min(MAX_MAP_ZOOM, mapView.zoom));
    mapView.centerLon = normalizeLongitude(mapView.centerLon);
    const latitudeLimit = 90 - 90 / mapView.zoom;
    mapView.centerLat = Math.max(-latitudeLimit, Math.min(latitudeLimit, mapView.centerLat));
}

function project(lon, lat, width, height, wrapToView = true) {
    const displayLon = wrapToView
        ? mapView.centerLon + normalizeLongitude(lon - mapView.centerLon)
        : lon;
    return {
        x: width / 2 + (displayLon - mapView.centerLon) / 360 * width * mapView.zoom,
        y: height / 2 + (mapView.centerLat - lat) / 180 * height * mapView.zoom
    };
}

function unproject(x, y, width, height) {
    return {
        lon: normalizeLongitude(mapView.centerLon + (x - width / 2) / width * 360 / mapView.zoom),
        lat: Math.max(-90, Math.min(90, mapView.centerLat - (y - height / 2) / height * 180 / mapView.zoom))
    };
}

function updateZoomControls() {
    zoomValueEl.textContent = `${Number(mapView.zoom.toFixed(1))}x`;
    zoomOutButton.disabled = mapView.zoom <= MIN_MAP_ZOOM;
    zoomInButton.disabled = mapView.zoom >= MAX_MAP_ZOOM;
}

function setMapZoom(nextZoom, anchorX = canvas.width / 2, anchorY = canvas.height / 2) {
    const before = unproject(anchorX, anchorY, canvas.width, canvas.height);
    mapView.zoom = nextZoom;
    constrainMapView();
    const after = unproject(anchorX, anchorY, canvas.width, canvas.height);
    mapView.centerLon = normalizeLongitude(mapView.centerLon + normalizeLongitude(before.lon - after.lon));
    mapView.centerLat += before.lat - after.lat;
    constrainMapView();
    updateZoomControls();
    drawMap();
}

function panMap(deltaX, deltaY, redraw = true) {
    if (mapView.zoom <= MIN_MAP_ZOOM) return;
    mapView.centerLon = normalizeLongitude(mapView.centerLon - deltaX / canvas.width * 360 / mapView.zoom);
    mapView.centerLat += deltaY / canvas.height * 180 / mapView.zoom;
    constrainMapView();
    if (redraw) drawMap();
}

function resetMapView(redraw = true) {
    mapView.zoom = MIN_MAP_ZOOM;
    mapView.centerLon = 0;
    mapView.centerLat = 0;
    updateZoomControls();
    if (redraw) drawMap();
}

function canvasPoint(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (clientX - rect.left) / rect.width * canvas.width,
        y: (clientY - rect.top) / rect.height * canvas.height
    };
}

function decodeWorldTopology(topology) {
    const transform = topology.transform;
    const arcCache = new Map();

    function decodeArc(index) {
        const arcIndex = index < 0 ? ~index : index;
        if (!arcCache.has(arcIndex)) {
            let x = 0;
            let y = 0;
            const points = topology.arcs[arcIndex].map(([deltaX, deltaY]) => {
                if (!transform) return [deltaX, deltaY];
                x += deltaX;
                y += deltaY;
                return [
                    x * transform.scale[0] + transform.translate[0],
                    y * transform.scale[1] + transform.translate[1]
                ];
            });
            arcCache.set(arcIndex, points);
        }
        const points = arcCache.get(arcIndex);
        return index < 0 ? [...points].reverse() : points;
    }

    function stitchRing(arcIndexes) {
        const ring = [];
        arcIndexes.forEach((arcIndex, index) => {
            const arc = decodeArc(arcIndex);
            ring.push(...(index === 0 ? arc : arc.slice(1)));
        });
        return ring;
    }

    function polygonsFromGeometry(geometry) {
        if (geometry.type === "Polygon") {
            return [geometry.arcs.map(stitchRing)];
        }
        if (geometry.type === "MultiPolygon") {
            return geometry.arcs.map((polygon) => polygon.map(stitchRing));
        }
        if (geometry.type === "GeometryCollection") {
            return geometry.geometries.flatMap(polygonsFromGeometry);
        }
        return [];
    }

    return {
        land: polygonsFromGeometry(topology.objects.land),
        countries: polygonsFromGeometry(topology.objects.countries)
    };
}

async function loadWorldMap() {
    try {
        const response = await fetch(WORLD_MAP_URL);
        if (!response.ok) throw new Error(`World map request failed with ${response.status}`);
        const geometry = decodeWorldTopology(await response.json());
        worldMap.land = geometry.land;
        worldMap.countries = geometry.countries;
        worldMap.ready = true;
    } catch (error) {
        console.warn("Pinpoint could not load its world boundary data:", error.message);
    }
}

function unwrappedRing(ring) {
    if (!ring.length) return ring;
    const points = [[ring[0][0], ring[0][1]]];
    for (let index = 1; index < ring.length; index += 1) {
        let lon = ring[index][0];
        const previousLon = points[index - 1][0];
        while (lon - previousLon > 180) lon -= 360;
        while (lon - previousLon < -180) lon += 360;
        points.push([lon, ring[index][1]]);
    }
    return points;
}

function traceRing(ring, width, height, longitudeOffset = 0) {
    const points = unwrappedRing(ring);
    points.forEach(([lon, lat], index) => {
        const point = project(lon + longitudeOffset, lat, width, height, false);
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
}

function tracePolygon(polygon, width, height) {
    const firstRing = unwrappedRing(polygon[0] || []);
    if (!firstRing.length) return;
    const longitudes = firstRing.map(([lon]) => lon);
    const minLon = Math.min(...longitudes);
    const maxLon = Math.max(...longitudes);
    for (const offset of [-720, -360, 0, 360, 720]) {
        const left = project(minLon + offset, 0, width, height, false).x;
        const right = project(maxLon + offset, 0, width, height, false).x;
        if (right < 0 || left > width) continue;
        for (const ring of polygon) traceRing(ring, width, height, offset);
    }
}

function drawGeography(polygons, width, height, fill) {
    for (const polygon of polygons) {
        ctx.beginPath();
        tracePolygon(polygon, width, height);
        if (fill) ctx.fill("evenodd");
        ctx.stroke();
    }
}

function drawPin(point, color, label) {
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.fillStyle = color;
    ctx.strokeStyle = "#fffdf8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -9, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-5, -3);
    ctx.lineTo(0, 8);
    ctx.lineTo(5, -3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#102b36";
    ctx.font = "800 11px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, 0, -25);
    ctx.restore();
}

function drawMap() {
    const width = canvas.width;
    const height = canvas.height;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#b9dadd");
    gradient.addColorStop(1, "#d8e7e2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(25, 79, 97, 0.14)";
    ctx.lineWidth = 1;
    for (let lon = -150; lon <= 150; lon += 30) {
        const x = project(lon, 0, width, height).x;
        if (x < 0 || x > width) continue;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
        const y = project(0, lat, width, height).y;
        if (y < 0 || y > height) continue;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    ctx.fillStyle = "#d9cda9";
    ctx.strokeStyle = "#806f52";
    ctx.lineWidth = 1.5;
    drawGeography(worldMap.land, width, height, true);

    ctx.strokeStyle = "rgba(128, 111, 82, 0.45)";
    ctx.lineWidth = 0.65;
    drawGeography(worldMap.countries, width, height, false);

    ctx.fillStyle = "rgba(255, 253, 248, 0.72)";
    ctx.font = "800 10px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    const labels = [
        ["NORTH AMERICA", -105, 46], ["SOUTH AMERICA", -60, -20],
        ["EUROPE", 17, 53], ["AFRICA", 19, 4], ["ASIA", 88, 47], ["AUSTRALIA", 134, -25]
    ];
    for (const [label, lon, lat] of labels) {
        const point = project(lon, lat, width, height);
        if (point.x < 0 || point.x > width || point.y < 0 || point.y > height) continue;
        ctx.fillText(label, point.x, point.y);
    }

    if (state.mode === "result" && state.guess) {
        const guessPoint = project(state.guess.lon, state.guess.lat, width, height);
        const location = currentLocation();
        const actualPoint = project(location.lon, location.lat, width, height);
        let actualX = actualPoint.x;
        const worldPixelWidth = width * mapView.zoom;
        if (Math.abs(actualX - guessPoint.x) > worldPixelWidth / 2) {
            actualX += actualX > guessPoint.x ? -worldPixelWidth : worldPixelWidth;
        }
        ctx.strokeStyle = "rgba(16, 43, 54, 0.72)";
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 7]);
        ctx.beginPath();
        ctx.moveTo(guessPoint.x, guessPoint.y);
        ctx.lineTo(actualX, actualPoint.y);
        ctx.stroke();
        ctx.setLineDash([]);
        drawPin(actualPoint, "#e4ad46", "Answer");
    }

    if (state.guess) {
        drawPin(project(state.guess.lon, state.guess.lat, width, height), "#c55a32", "Guess");
    }
}

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(320, Math.round(rect.width * dpr));
    const height = Math.round(width / 2);
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
    drawMap();
}

function haversineKm(a, b) {
    const toRad = (degrees) => degrees * Math.PI / 180;
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);
    const deltaLat = toRad(b.lat - a.lat);
    const deltaLon = toRad(b.lon - a.lon);
    const h = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function formatDistance(distance) {
    return distance < 10 ? `${distance.toFixed(1)} km away` : `${Math.round(distance).toLocaleString()} km away`;
}

function updateHeader() {
    roundValueEl.textContent = `${state.roundIndex + 1} / ${ROUND_COUNT}`;
    scoreValueEl.textContent = state.totalScore.toLocaleString();
    hintValueEl.textContent = `${state.hintCount} / 3`;
    photoLabelEl.textContent = `Round ${state.roundIndex + 1}`;
}

function preloadNextRound() {
    const nextLocation = state.sequence[state.roundIndex + 1];
    if (!nextLocation) return;
    const preload = new Image();
    preload.src = nextLocation.imageSmall || nextLocation.image;
}

function loadRound() {
    const location = currentLocation();
    resetMapView(false);
    state.mode = "guessing";
    state.source = location.source || "local";
    state.hintCount = 0;
    state.guess = null;
    state.distanceKm = null;
    state.roundScore = null;
    imageEl.classList.remove("loaded");
    loadingEl.hidden = false;
    loadingEl.textContent = "Loading location...";
    if (state.source === "mapillary") {
        imageEl.srcset = `${location.imageSmall} 1024w, ${location.image} 2048w`;
        imageEl.sizes = "(max-width: 980px) 100vw, 58vw";
        sourcePillEl.textContent = "Mapillary worldwide";
    } else {
        imageEl.srcset = `${location.imageSmall} 480w, ${location.image} 960w`;
        imageEl.sizes = "(max-width: 980px) 100vw, 58vw";
        sourcePillEl.textContent = mapillaryToken ? "Local fallback" : "Local collection";
    }
    imageEl.src = location.image;
    imageEl.alt = "Location challenge photo";
    photoCreditEl.hidden = state.source !== "mapillary";
    photoCreditEl.href = "https://www.mapillary.com/";
    photoCreditEl.textContent = "Image via Mapillary";
    hintBoxEl.hidden = true;
    resultEl.hidden = true;
    hintButton.disabled = false;
    hintButton.textContent = "Use a hint";
    guessButton.disabled = true;
    guessButton.hidden = false;
    coordinateEl.textContent = "No pin yet";
    mapInstructionEl.textContent = "Click to pin | Scroll or pinch to zoom | Drag to pan";
    mapInstructionEl.hidden = false;
    statusEl.textContent = state.source === "mapillary"
        ? "Worldwide image loaded. Study it, then place your pin."
        : "Study the photo, then place your pin.";
    updateHeader();
    drawMap();
    preloadNextRound();
}

function showSequenceLoading() {
    resetMapView(false);
    state.mode = "loading";
    state.sequence = [];
    state.roundIndex = 0;
    state.totalScore = 0;
    state.hintCount = 0;
    state.guess = null;
    state.distanceKm = null;
    state.roundScore = null;
    state.mapillaryFailures = 0;
    imageEl.removeAttribute("src");
    imageEl.removeAttribute("srcset");
    imageEl.classList.remove("loaded");
    photoCreditEl.hidden = true;
    loadingEl.hidden = false;
    loadingEl.textContent = "Finding five worldwide locations...";
    sourcePillEl.textContent = "Finding locations";
    resultEl.hidden = true;
    hintBoxEl.hidden = true;
    hintButton.disabled = true;
    guessButton.disabled = true;
    guessButton.hidden = false;
    roundValueEl.textContent = `1 / ${ROUND_COUNT}`;
    scoreValueEl.textContent = "0";
    hintValueEl.textContent = "0 / 3";
    coordinateEl.textContent = "No pin yet";
    mapInstructionEl.hidden = false;
    mapInstructionEl.textContent = "Locations are loading";
    statusEl.textContent = "Searching Mapillary's worldwide photo coverage...";
    drawMap();
}

async function startGame() {
    const generation = state.generation + 1;
    state.generation = generation;
    if (mapillaryToken) {
        showSequenceLoading();
        const worldwide = await buildWorldwideSequence();
        if (state.generation !== generation) return;
        state.sequence = worldwide.sequence;
        state.mapillaryFailures = worldwide.failures;
    } else {
        state.sequence = shuffledLocations();
        state.roundIndex = 0;
        state.totalScore = 0;
        state.mapillaryFailures = 0;
    }
    loadRound();
}

function placeGuess(lat, lon) {
    if (state.mode !== "guessing") return;
    state.guess = {
        lat: Math.max(-89.5, Math.min(89.5, lat)),
        lon: Math.max(-180, Math.min(180, lon))
    };
    coordinateEl.textContent = `${Math.abs(state.guess.lat).toFixed(2)}°${state.guess.lat >= 0 ? "N" : "S"}, ${Math.abs(state.guess.lon).toFixed(2)}°${state.guess.lon >= 0 ? "E" : "W"}`;
    guessButton.disabled = false;
    mapInstructionEl.hidden = true;
    statusEl.textContent = "Pin placed. Lock it in when you are ready.";
    drawMap();
}

function useHint() {
    if (state.mode !== "guessing" || state.hintCount >= 3) return;
    state.hintCount += 1;
    hintTextEl.textContent = currentLocation().hints[state.hintCount - 1];
    hintBoxEl.hidden = false;
    hintValueEl.textContent = `${state.hintCount} / 3`;
    hintButton.textContent = state.hintCount === 3 ? "No hints left" : "Another hint";
    hintButton.disabled = state.hintCount === 3;
    statusEl.textContent = `Hint ${state.hintCount} revealed. Each hint costs 250 points.`;
}

function submitGuess() {
    if (state.mode !== "guessing" || !state.guess) return;
    const location = currentLocation();
    state.distanceKm = haversineKm(state.guess, location);
    const baseScore = Math.round(MAX_ROUND_SCORE * Math.exp(-state.distanceKm / 2200));
    state.roundScore = Math.max(0, baseScore - state.hintCount * 250);
    state.totalScore += state.roundScore;
    state.mode = "result";
    resetMapView(false);
    answerTitleEl.textContent = location.answer;
    answerDetailEl.textContent = `${formatDistance(state.distanceKm)} · ${state.hintCount ? `${state.hintCount * 250} point hint penalty` : "No hint penalty"}`;
    roundScoreEl.textContent = state.roundScore.toLocaleString();
    resultEl.hidden = false;
    guessButton.hidden = true;
    hintButton.disabled = true;
    nextButton.textContent = state.roundIndex === ROUND_COUNT - 1 ? "See final score" : "Next round";
    mapInstructionEl.hidden = true;
    scoreValueEl.textContent = state.totalScore.toLocaleString();
    statusEl.textContent = `${location.answer}. ${formatDistance(state.distanceKm)}.`;
    imageEl.alt = `Location challenge photo from ${location.answer}`;
    if (location.source === "mapillary") {
        photoCreditEl.href = `https://www.mapillary.com/app/?pKey=${encodeURIComponent(location.imageId)}&focus=photo`;
        photoCreditEl.textContent = "View on Mapillary";
    }
    drawMap();
}

function scoreRating(percentage) {
    if (percentage >= 85) return "Master cartographer";
    if (percentage >= 65) return "Seasoned explorer";
    if (percentage >= 40) return "Sharp-eyed traveler";
    if (percentage >= 20) return "Curious wanderer";
    return "Lost, but learning";
}

function showFinalScore() {
    state.mode = "complete";
    const maximum = ROUND_COUNT * MAX_ROUND_SCORE;
    const percentage = Math.round(state.totalScore / maximum * 100);
    answerTitleEl.textContent = "Expedition complete";
    answerDetailEl.textContent = `${state.totalScore.toLocaleString()} of ${maximum.toLocaleString()} points · ${scoreRating(percentage)}`;
    roundScoreEl.textContent = percentage;
    resultEl.querySelector(".result-score span").textContent = "percent";
    nextButton.textContent = "Play again";
    statusEl.textContent = `Final score: ${state.totalScore.toLocaleString()} points.`;
}

function nextRound() {
    if (state.mode === "complete") {
        resultEl.querySelector(".result-score span").textContent = "points";
        startGame();
        return;
    }
    if (state.roundIndex === ROUND_COUNT - 1) {
        showFinalScore();
        return;
    }
    state.roundIndex += 1;
    loadRound();
}

function toggleFullscreen() {
    if (document.fullscreenElement === gameEl) {
        document.exitFullscreen();
    } else if (gameEl.requestFullscreen) {
        gameEl.requestFullscreen();
    }
}

canvas.addEventListener("pointerdown", (event) => {
    if (state.mode === "loading") return;
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    mapGesture.pointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
        startX: event.clientX,
        startY: event.clientY
    });
    if (mapGesture.pointers.size === 1) {
        mapGesture.moved = false;
        mapGesture.pinched = false;
    } else {
        mapGesture.moved = true;
        mapGesture.pinched = true;
    }
    canvas.focus();
});

canvas.addEventListener("pointermove", (event) => {
    const tracked = mapGesture.pointers.get(event.pointerId);
    if (!tracked) return;
    event.preventDefault();
    const previousPointers = new Map([...mapGesture.pointers].map(([id, point]) => [id, { ...point }]));
    tracked.x = event.clientX;
    tracked.y = event.clientY;

    if (mapGesture.pointers.size === 1) {
        const previous = previousPointers.get(event.pointerId);
        if (Math.hypot(tracked.x - tracked.startX, tracked.y - tracked.startY) > 4) {
            mapGesture.moved = true;
            canvas.classList.add("is-panning");
        }
        if (mapGesture.moved && mapView.zoom > MIN_MAP_ZOOM) {
            const rect = canvas.getBoundingClientRect();
            panMap(
                (tracked.x - previous.x) / rect.width * canvas.width,
                (tracked.y - previous.y) / rect.height * canvas.height
            );
        }
        return;
    }

    const current = [...mapGesture.pointers.values()].slice(0, 2);
    const previous = [...previousPointers.values()].slice(0, 2);
    const currentMidpoint = {
        x: (current[0].x + current[1].x) / 2,
        y: (current[0].y + current[1].y) / 2
    };
    const previousMidpoint = {
        x: (previous[0].x + previous[1].x) / 2,
        y: (previous[0].y + previous[1].y) / 2
    };
    const currentDistance = Math.hypot(current[0].x - current[1].x, current[0].y - current[1].y);
    const previousDistance = Math.hypot(previous[0].x - previous[1].x, previous[0].y - previous[1].y);
    const rect = canvas.getBoundingClientRect();
    panMap(
        (currentMidpoint.x - previousMidpoint.x) / rect.width * canvas.width,
        (currentMidpoint.y - previousMidpoint.y) / rect.height * canvas.height,
        false
    );
    const anchor = canvasPoint(currentMidpoint.x, currentMidpoint.y);
    setMapZoom(mapView.zoom * currentDistance / Math.max(1, previousDistance), anchor.x, anchor.y);
});

function finishMapPointer(event, cancelled = false) {
    const tracked = mapGesture.pointers.get(event.pointerId);
    if (!tracked) return;
    const shouldPlace = !cancelled
        && mapGesture.pointers.size === 1
        && !mapGesture.moved
        && !mapGesture.pinched
        && state.mode === "guessing";
    mapGesture.pointers.delete(event.pointerId);
    canvas.releasePointerCapture?.(event.pointerId);
    if (shouldPlace) {
        const point = canvasPoint(event.clientX, event.clientY);
        const coordinates = unproject(point.x, point.y, canvas.width, canvas.height);
        placeGuess(coordinates.lat, coordinates.lon);
    }
    if (mapGesture.pointers.size === 0) {
        mapGesture.moved = false;
        mapGesture.pinched = false;
        canvas.classList.remove("is-panning");
    } else {
        mapGesture.moved = true;
    }
}

canvas.addEventListener("pointerup", (event) => finishMapPointer(event));
canvas.addEventListener("pointercancel", (event) => finishMapPointer(event, true));

canvas.addEventListener("wheel", (event) => {
    if (state.mode === "loading") return;
    event.preventDefault();
    const anchor = canvasPoint(event.clientX, event.clientY);
    const factor = event.deltaY < 0 ? MAP_ZOOM_FACTOR : 1 / MAP_ZOOM_FACTOR;
    setMapZoom(mapView.zoom * factor, anchor.x, anchor.y);
}, { passive: false });

imageEl.addEventListener("load", () => {
    loadingEl.hidden = true;
    imageEl.classList.add("loaded");
});

imageEl.addEventListener("error", () => {
    const location = currentLocation();
    if (location && location.source === "mapillary") {
        state.mapillaryFailures += 1;
        state.sequence[state.roundIndex] = shuffledLocations()[0];
        statusEl.textContent = "That online image was unavailable, so a local challenge was substituted.";
        loadRound();
        return;
    }
    loadingEl.textContent = "This location photo could not be loaded.";
});

hintButton.addEventListener("click", useHint);
guessButton.addEventListener("click", submitGuess);
nextButton.addEventListener("click", nextRound);
zoomOutButton.addEventListener("click", () => setMapZoom(mapView.zoom / MAP_ZOOM_FACTOR));
zoomInButton.addEventListener("click", () => setMapZoom(mapView.zoom * MAP_ZOOM_FACTOR));
zoomResetButton.addEventListener("click", () => resetMapView());
document.getElementById("new-game-button").addEventListener("click", startGame);
fullscreenButton.addEventListener("click", toggleFullscreen);

document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement === gameEl ? "Exit fullscreen" : "Fullscreen";
    window.setTimeout(resizeCanvas, 50);
});

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "+" || key === "=") {
        event.preventDefault();
        setMapZoom(mapView.zoom * MAP_ZOOM_FACTOR);
        return;
    }
    if (key === "-" || key === "_") {
        event.preventDefault();
        setMapZoom(mapView.zoom / MAP_ZOOM_FACTOR);
        return;
    }
    if (key === "0") {
        event.preventDefault();
        resetMapView();
        return;
    }
    if (key === "f") {
        event.preventDefault();
        toggleFullscreen();
        return;
    }
    if (key === "h") {
        event.preventDefault();
        useHint();
        return;
    }
    if (key === "enter") {
        event.preventDefault();
        if (state.mode === "guessing") submitGuess();
        else if (state.mode === "result" || state.mode === "complete") nextRound();
        return;
    }
    if (!["arrowleft", "arrowright", "arrowup", "arrowdown"].includes(key) || state.mode !== "guessing") return;
    event.preventDefault();
    const guess = state.guess || { lat: 0, lon: 0 };
    const step = (event.shiftKey ? 10 : 2) / mapView.zoom;
    if (key === "arrowleft") guess.lon -= step;
    if (key === "arrowright") guess.lon += step;
    if (key === "arrowup") guess.lat += step;
    if (key === "arrowdown") guess.lat -= step;
    if (guess.lon < -180) guess.lon += 360;
    if (guess.lon > 180) guess.lon -= 360;
    placeGuess(guess.lat, guess.lon);
});

window.addEventListener("resize", resizeCanvas);
window.render_game_to_text = () => JSON.stringify({
    coordinateSystem: { map: "equirectangular", longitude: "-180 west to 180 east", latitude: "-90 south to 90 north" },
    mapView: {
        zoom: Number(mapView.zoom.toFixed(2)),
        centerLon: Number(mapView.centerLon.toFixed(2)),
        centerLat: Number(mapView.centerLat.toFixed(2))
    },
    mode: state.mode,
    imageSource: state.source,
    worldMapReady: worldMap.ready,
    mapillaryConfigured: Boolean(mapillaryToken),
    mapillaryFallbacks: state.mapillaryFailures,
    round: state.roundIndex + 1,
    rounds: ROUND_COUNT,
    score: state.totalScore,
    hintsUsed: state.hintCount,
    guess: state.guess,
    answer: state.mode === "result" || state.mode === "complete" ? {
        label: currentLocation().answer,
        lat: currentLocation().lat,
        lon: currentLocation().lon
    } : null,
    distanceKm: state.distanceKm,
    roundScore: state.roundScore,
    canSubmit: state.mode === "guessing" && Boolean(state.guess)
});
window.advanceTime = () => drawMap();
window.__pinpoint_debug_guess = (lat, lon) => placeGuess(Number(lat), Number(lon));
window.__pinpoint_debug_sample_regions = () => balancedRegions().map(({ continent, label }) => ({ continent, label }));

async function initializeGame() {
    resetMapView(false);
    sourcePillEl.textContent = "Loading world map";
    statusEl.textContent = "Loading accurate world boundaries...";
    await loadWorldMap();
    await startGame();
    requestAnimationFrame(resizeCanvas);
}

initializeGame();
