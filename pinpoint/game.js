const ROUND_COUNT = 5;
const MAX_ROUND_SCORE = 5000;
const MAPILLARY_TIMEOUT_MS = 8000;

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
    { label: "Pacific Northwest, USA", country: "the United States", continent: "North America", bbox: [-123.4, 45.2, -121.7, 47.9] },
    { label: "Southern California, USA", country: "the United States", continent: "North America", bbox: [-118.8, 32.7, -116.8, 34.4] },
    { label: "Northeastern USA", country: "the United States", continent: "North America", bbox: [-75.2, 39.7, -71.0, 42.8] },
    { label: "Central Mexico", country: "Mexico", continent: "North America", bbox: [-100.4, 18.7, -97.8, 20.7] },
    { label: "Costa Rica", country: "Costa Rica", continent: "North America", bbox: [-85.9, 9.2, -83.4, 10.8] },
    { label: "Guatemala", country: "Guatemala", continent: "North America", bbox: [-91.6, 14.2, -89.7, 15.5] },
    { label: "Colombian Andes", country: "Colombia", continent: "South America", bbox: [-75.9, 3.7, -73.2, 6.9] },
    { label: "Ecuador", country: "Ecuador", continent: "South America", bbox: [-79.5, -2.8, -77.5, 0.2] },
    { label: "Peruvian Andes", country: "Peru", continent: "South America", bbox: [-77.4, -13.8, -70.5, -9.4] },
    { label: "Central Chile", country: "Chile", continent: "South America", bbox: [-72.0, -35.3, -70.0, -32.4] },
    { label: "Buenos Aires region, Argentina", country: "Argentina", continent: "South America", bbox: [-59.6, -35.4, -57.4, -33.6] },
    { label: "Southeastern Brazil", country: "Brazil", continent: "South America", bbox: [-47.2, -24.2, -42.8, -21.7] },
    { label: "Iceland", country: "Iceland", continent: "Europe", bbox: [-22.8, 63.7, -19.0, 65.4] },
    { label: "Ireland", country: "Ireland", continent: "Europe", bbox: [-9.7, 51.5, -6.0, 54.5] },
    { label: "Portugal", country: "Portugal", continent: "Europe", bbox: [-9.5, 37.0, -7.5, 41.5] },
    { label: "Northern Spain", country: "Spain", continent: "Europe", bbox: [-8.8, 41.5, 2.8, 43.6] },
    { label: "France", country: "France", continent: "Europe", bbox: [-1.8, 43.3, 6.9, 49.6] },
    { label: "Great Britain", country: "the United Kingdom", continent: "Europe", bbox: [-4.8, 50.3, 1.5, 56.0] },
    { label: "Benelux", country: "Belgium or the Netherlands", continent: "Europe", bbox: [2.6, 49.5, 7.2, 53.6] },
    { label: "Southern Norway", country: "Norway", continent: "Europe", bbox: [7.0, 58.2, 10.8, 61.0] },
    { label: "Central Sweden", country: "Sweden", continent: "Europe", bbox: [14.0, 56.2, 17.8, 60.8] },
    { label: "Southern Finland", country: "Finland", continent: "Europe", bbox: [22.0, 60.0, 26.5, 63.0] },
    { label: "Switzerland", country: "Switzerland", continent: "Europe", bbox: [6.2, 46.0, 9.8, 47.8] },
    { label: "Central Italy", country: "Italy", continent: "Europe", bbox: [9.0, 41.5, 13.5, 44.8] },
    { label: "The Balkans", country: "Croatia or Slovenia", continent: "Europe", bbox: [13.4, 44.0, 19.5, 46.9] },
    { label: "Greece", country: "Greece", continent: "Europe", bbox: [20.0, 37.0, 24.7, 41.2] },
    { label: "Morocco", country: "Morocco", continent: "Africa", bbox: [-9.8, 30.0, -3.0, 35.8] },
    { label: "Tunisia", country: "Tunisia", continent: "Africa", bbox: [8.0, 33.0, 11.4, 37.0] },
    { label: "Ghana", country: "Ghana", continent: "Africa", bbox: [-2.0, 5.0, 0.5, 7.7] },
    { label: "Central Kenya", country: "Kenya", continent: "Africa", bbox: [36.0, -2.2, 38.0, 0.5] },
    { label: "Uganda", country: "Uganda", continent: "Africa", bbox: [30.4, -0.8, 33.8, 2.0] },
    { label: "South Africa", country: "South Africa", continent: "Africa", bbox: [18.0, -34.8, 31.4, -25.0] },
    { label: "Jordan", country: "Jordan", continent: "Asia", bbox: [35.0, 29.3, 36.9, 32.6] },
    { label: "United Arab Emirates", country: "the United Arab Emirates", continent: "Asia", bbox: [54.7, 24.0, 56.2, 25.8] },
    { label: "Delhi region, India", country: "India", continent: "Asia", bbox: [76.7, 28.2, 77.8, 29.2] },
    { label: "Central Nepal", country: "Nepal", continent: "Asia", bbox: [83.0, 27.0, 86.0, 29.0] },
    { label: "Central Thailand", country: "Thailand", continent: "Asia", bbox: [99.9, 13.2, 101.1, 14.4] },
    { label: "Western Malaysia", country: "Malaysia", continent: "Asia", bbox: [101.2, 2.5, 102.2, 3.5] },
    { label: "Java, Indonesia", country: "Indonesia", continent: "Asia", bbox: [105.0, -8.8, 114.8, -5.8] },
    { label: "The Philippines", country: "the Philippines", continent: "Asia", bbox: [120.0, 7.0, 124.5, 18.5] },
    { label: "Taiwan", country: "Taiwan", continent: "Asia", bbox: [120.0, 21.8, 122.0, 25.4] },
    { label: "Japan", country: "Japan", continent: "Asia", bbox: [130.0, 31.0, 141.8, 41.0] },
    { label: "South Korea", country: "South Korea", continent: "Asia", bbox: [126.0, 34.0, 129.6, 38.0] },
    { label: "Southeastern Australia", country: "Australia", continent: "Oceania", bbox: [144.0, -38.8, 153.7, -27.0] },
    { label: "Southwestern Australia", country: "Australia", continent: "Oceania", bbox: [114.8, -35.2, 117.3, -31.0] },
    { label: "New Zealand", country: "New Zealand", continent: "Oceania", bbox: [166.0, -47.2, 178.5, -34.0] }
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
    const endpoint = new URL("https://graph.mapillary.com/images");
    endpoint.searchParams.set("access_token", mapillaryToken);
    endpoint.searchParams.set("bbox", region.bbox.join(","));
    endpoint.searchParams.set("fields", "id,geometry,computed_geometry,thumb_1024_url,thumb_2048_url,captured_at,compass_angle,is_pano,width,height,quality_score");
    endpoint.searchParams.set("limit", "100");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), MAPILLARY_TIMEOUT_MS);
    let payload;
    try {
        const response = await fetch(endpoint, { mode: "cors", signal: controller.signal });
        if (!response.ok) throw new Error(`Mapillary request failed with ${response.status}`);
        payload = await response.json();
    } finally {
        window.clearTimeout(timeout);
    }
    const candidates = (payload.data || []).filter((image) => {
        const geometry = image.computed_geometry || image.geometry;
        return image.thumb_1024_url && geometry && Array.isArray(geometry.coordinates);
    });
    if (!candidates.length) throw new Error("Mapillary returned no images for this region");

    const landscape = candidates.filter((image) => !image.width || !image.height || image.width >= image.height * 1.1);
    const qualityPool = landscape.filter((image) => image.quality_score == null || image.quality_score >= 0.35);
    const pool = qualityPool.length ? qualityPool : landscape.length ? landscape : candidates;
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

function project(lon, lat, width, height) {
    return {
        x: (lon + 180) / 360 * width,
        y: (90 - lat) / 180 * height
    };
}

function unproject(x, y, width, height) {
    return {
        lon: x / width * 360 - 180,
        lat: 90 - y / height * 180
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
        const point = project(lon + longitudeOffset, lat, width, height);
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
    for (const offset of [-360, 0, 360]) {
        if (maxLon + offset < -180 || minLon + offset > 180) continue;
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
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
        const y = project(0, lat, width, height).y;
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
        ctx.fillText(label, point.x, point.y);
    }

    if (state.mode === "result" && state.guess) {
        const guessPoint = project(state.guess.lon, state.guess.lat, width, height);
        const location = currentLocation();
        const actualPoint = project(location.lon, location.lat, width, height);
        let actualX = actualPoint.x;
        if (Math.abs(actualX - guessPoint.x) > width / 2) {
            actualX += actualX > guessPoint.x ? -width : width;
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
    mapInstructionEl.textContent = "Click anywhere to place your pin";
    mapInstructionEl.hidden = false;
    statusEl.textContent = state.source === "mapillary"
        ? "Worldwide image loaded. Study it, then place your pin."
        : "Study the photo, then place your pin.";
    updateHeader();
    drawMap();
    preloadNextRound();
}

function showSequenceLoading() {
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
    coordinateEl.textContent = `${Math.abs(state.guess.lat).toFixed(1)}°${state.guess.lat >= 0 ? "N" : "S"}, ${Math.abs(state.guess.lon).toFixed(1)}°${state.guess.lon >= 0 ? "E" : "W"}`;
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
    if (state.mode !== "guessing") return;
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * canvas.width;
    const y = (event.clientY - rect.top) / rect.height * canvas.height;
    const point = unproject(x, y, canvas.width, canvas.height);
    placeGuess(point.lat, point.lon);
    canvas.focus();
});

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
document.getElementById("new-game-button").addEventListener("click", startGame);
fullscreenButton.addEventListener("click", toggleFullscreen);

document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement === gameEl ? "Exit fullscreen" : "Fullscreen";
    window.setTimeout(resizeCanvas, 50);
});

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
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
    const step = event.shiftKey ? 10 : 2;
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
    sourcePillEl.textContent = "Loading world map";
    statusEl.textContent = "Loading accurate world boundaries...";
    await loadWorldMap();
    await startGame();
    requestAnimationFrame(resizeCanvas);
}

initializeGame();
