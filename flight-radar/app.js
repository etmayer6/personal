(function () {
    "use strict";

    const API_URL = "https://api.airplanes.live/v2/point/42.03/-93.5/250";
    const REFRESH_MS = 60000;
    const MAP_AIRCRAFT_LIMIT = 64;
    const MAP_IOWA_LIMIT = 48;
    const SVG_NS = "http://www.w3.org/2000/svg";
    const MAP_WIDTH = 1000;
    const MAP_HEIGHT = 640;
    const MAP_BOUNDS = {
        minLat: 38.2,
        maxLat: 45.7,
        minLon: -99.5,
        maxLon: -87.4
    };
    const OFFLINE_AIRCRAFT = [
        { hex: "fixture01", flight: "FIX101", desc: "Fictional regional jet", lat: 42.03, lon: -93.63, alt_baro: 18000, gs: 312, track: 82 },
        { hex: "fixture02", flight: "FIX202", desc: "Fictional turboprop", lat: 41.74, lon: -94.21, alt_baro: 9200, gs: 188, track: 145 },
        { hex: "fixture03", flight: "FIX303", desc: "Fictional business jet", lat: 42.62, lon: -92.45, alt_baro: 24000, gs: 368, track: 258 },
        { hex: "fixture04", flight: "FIX404", desc: "Fictional training aircraft", lat: 41.32, lon: -93.05, alt_baro: 4200, gs: 104, track: 28 },
        { hex: "fixture05", flight: "FIX505", desc: "Fictional cargo aircraft", lat: 43.24, lon: -96.12, alt_baro: 31000, gs: 425, track: 96 }
    ];

    // Simplified from the official State of Iowa boundary service. Keeping the
    // geometry local makes the map accurate without adding a runtime map API.
    const IOWA_BORDER = [
        [40.591, -92.638],
        [40.571, -94.548],
        [40.585, -95.766],
        [40.604, -95.748],
        [40.648, -95.777],
        [40.677, -95.842],
        [40.733, -95.889],
        [40.778, -95.835],
        [40.863, -95.848],
        [40.891, -95.809],
        [40.931, -95.839],
        [40.978, -95.83],
        [41.001, -95.867],
        [41.035, -95.859],
        [41.061, -95.883],
        [41.088, -95.862],
        [41.157, -95.883],
        [41.175, -95.841],
        [41.2, -95.928],
        [41.232, -95.911],
        [41.299, -95.928],
        [41.3, -95.905],
        [41.28, -95.913],
        [41.274, -95.903],
        [41.295, -95.872],
        [41.317, -95.883],
        [41.321, -95.923],
        [41.345, -95.957],
        [41.368, -95.929],
        [41.394, -95.938],
        [41.456, -95.923],
        [41.481, -96.016],
        [41.513, -95.993],
        [41.544, -96.005],
        [41.545, -96.023],
        [41.517, -96.049],
        [41.541, -96.095],
        [41.578, -96.081],
        [41.615, -96.118],
        [41.653, -96.095],
        [41.686, -96.122],
        [41.705, -96.073],
        [41.739, -96.106],
        [41.794, -96.065],
        [41.821, -96.108],
        [41.849, -96.11],
        [41.901, -96.161],
        [41.921, -96.136],
        [41.943, -96.144],
        [41.971, -96.129],
        [41.978, -96.187],
        [42.008, -96.193],
        [42, -96.241],
        [42.029, -96.222],
        [42.052, -96.275],
        [42.116, -96.271],
        [42.171, -96.35],
        [42.212, -96.36],
        [42.23, -96.324],
        [42.257, -96.33],
        [42.35, -96.417],
        [42.405, -96.416],
        [42.442, -96.382],
        [42.474, -96.385],
        [42.494, -96.477],
        [42.519, -96.493],
        [42.555, -96.477],
        [42.561, -96.499],
        [42.575, -96.486],
        [42.615, -96.511],
        [42.614, -96.531],
        [42.63, -96.516],
        [42.661, -96.543],
        [42.672, -96.579],
        [42.683, -96.575],
        [42.705, -96.63],
        [42.726, -96.625],
        [42.736, -96.639],
        [42.755, -96.619],
        [42.769, -96.636],
        [42.793, -96.595],
        [42.837, -96.582],
        [42.837, -96.551],
        [42.884, -96.543],
        [42.892, -96.526],
        [42.904, -96.543],
        [42.924, -96.541],
        [42.958, -96.499],
        [42.98, -96.521],
        [43.01, -96.492],
        [43.04, -96.521],
        [43.064, -96.461],
        [43.093, -96.462],
        [43.12, -96.436],
        [43.152, -96.468],
        [43.222, -96.477],
        [43.223, -96.559],
        [43.239, -96.572],
        [43.258, -96.553],
        [43.27, -96.586],
        [43.296, -96.589],
        [43.305, -96.527],
        [43.336, -96.535],
        [43.385, -96.521],
        [43.434, -96.594],
        [43.45, -96.603],
        [43.481, -96.581],
        [43.5, -96.599],
        [43.501, -91.218],
        [43.458, -91.233],
        [43.413, -91.2],
        [43.353, -91.207],
        [43.314, -91.106],
        [43.254, -91.058],
        [43.127, -91.179],
        [42.908, -91.146],
        [42.869, -91.08],
        [42.751, -91.065],
        [42.685, -90.948],
        [42.635, -90.708],
        [42.538, -90.643],
        [42.515, -90.636],
        [42.477, -90.653],
        [42.44, -90.567],
        [42.416, -90.555],
        [42.355, -90.443],
        [42.324, -90.416],
        [42.277, -90.43],
        [42.226, -90.393],
        [42.166, -90.236],
        [42.129, -90.199],
        [42.121, -90.166],
        [42.043, -90.164],
        [41.999, -90.14],
        [41.956, -90.164],
        [41.911, -90.153],
        [41.844, -90.182],
        [41.808, -90.181],
        [41.747, -90.307],
        [41.697, -90.314],
        [41.646, -90.344],
        [41.588, -90.343],
        [41.565, -90.414],
        [41.524, -90.459],
        [41.524, -90.557],
        [41.461, -90.661],
        [41.455, -90.847],
        [41.422, -90.928],
        [41.434, -90.981],
        [41.415, -91.046],
        [41.307, -91.075],
        [41.242, -91.114],
        [41.166, -91.042],
        [41.159, -90.993],
        [41.099, -90.948],
        [40.951, -90.953],
        [40.921, -90.965],
        [40.904, -91.005],
        [40.822, -91.093],
        [40.671, -91.122],
        [40.637, -91.186],
        [40.638, -91.254],
        [40.611, -91.347],
        [40.558, -91.403],
        [40.542, -91.406],
        [40.496, -91.364],
        [40.388, -91.382],
        [40.382, -91.484],
        [40.405, -91.482],
        [40.412, -91.526],
        [40.458, -91.526],
        [40.467, -91.576],
        [40.507, -91.62],
        [40.54, -91.619],
        [40.557, -91.688],
        [40.581, -91.686],
        [40.614, -91.729],
        [40.591, -92.638]
    ];

    const AIRPORTS = [
        { code: "KDSM", name: "Des Moines", lat: 41.534, lon: -93.663 },
        { code: "KMCW", name: "Mason City", lat: 43.157, lon: -93.331 },
        { code: "KCID", name: "Cedar Rapids", lat: 41.884, lon: -91.711 },
        { code: "KDBQ", name: "Dubuque", lat: 42.402, lon: -90.709 },
        { code: "KSUX", name: "Sioux City", lat: 42.402, lon: -96.384 },
        { code: "KOTM", name: "Ottumwa", lat: 41.106, lon: -92.448 }
    ];

    const elements = {
        refreshButton: document.getElementById("refresh-button"),
        feedStatus: document.getElementById("feed-status"),
        lastUpdated: document.getElementById("last-updated"),
        selectedCallsign: document.getElementById("selected-callsign"),
        selectedType: document.getElementById("selected-type"),
        selectedPosition: document.getElementById("selected-position"),
        selectedAltitude: document.getElementById("selected-altitude"),
        selectedSpeed: document.getElementById("selected-speed"),
        selectedTrack: document.getElementById("selected-track"),
        iowaShape: document.getElementById("iowa-shape"),
        iowaLabel: document.getElementById("iowa-label"),
        airportLayer: document.getElementById("airport-layer"),
        aircraftLayer: document.getElementById("aircraft-layer")
    };

    const state = {
        aircraft: [],
        selectedId: null,
        lastUpdated: null,
        source: "fixture",
        requestInFlight: false,
        timer: null
    };

    function svgElement(tagName, attributes) {
        const element = document.createElementNS(SVG_NS, tagName);
        Object.entries(attributes).forEach(function (entry) {
            element.setAttribute(entry[0], entry[1]);
        });
        return element;
    }

    function project(lat, lon) {
        const x = ((lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * MAP_WIDTH;
        const y = ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * MAP_HEIGHT;
        return { x: x, y: y };
    }

    function setMapBackdrop() {
        const points = IOWA_BORDER.map(function (point) {
            const projected = project(point[0], point[1]);
            return projected.x.toFixed(1) + "," + projected.y.toFixed(1);
        }).join(" ");
        elements.iowaShape.setAttribute("d", "M " + points.replaceAll(" ", " L ") + " Z");
        const label = project(42.1, -93.45);
        elements.iowaLabel.setAttribute("x", label.x.toFixed(1));
        elements.iowaLabel.setAttribute("y", label.y.toFixed(1));

        elements.airportLayer.replaceChildren();
        AIRPORTS.forEach(function (airport) {
            const point = project(airport.lat, airport.lon);
            const group = svgElement("g", { transform: "translate(" + point.x.toFixed(1) + " " + point.y.toFixed(1) + ")" });
            group.appendChild(svgElement("circle", { cx: 0, cy: 0, r: 4 }));
            const label = svgElement("text", { x: 8, y: 4 });
            label.textContent = airport.code;
            group.appendChild(label);
            elements.airportLayer.appendChild(group);
        });
    }

    function isInsideIowa(lat, lon) {
        let inside = false;
        for (let index = 0, previous = IOWA_BORDER.length - 1; index < IOWA_BORDER.length; previous = index, index += 1) {
            const current = IOWA_BORDER[index];
            const prior = IOWA_BORDER[previous];
            const intersects = ((current[1] > lon) !== (prior[1] > lon)) &&
                (lat < ((prior[0] - current[0]) * (lon - current[1])) / (prior[1] - current[1]) + current[0]);
            if (intersects) {
                inside = !inside;
            }
        }
        return inside;
    }

    function finiteNumber(value) {
        return typeof value === "number" && Number.isFinite(value) ? value : null;
    }

    function normalizeAircraft(raw) {
        const position = raw.lastPosition || {};
        const lat = finiteNumber(raw.lat) ?? finiteNumber(position.lat);
        const lon = finiteNumber(raw.lon) ?? finiteNumber(position.lon);
        if (lat === null || lon === null) {
            return null;
        }

        const altitude = typeof raw.alt_baro === "number" ? raw.alt_baro : null;
        const callsign = String(raw.flight || raw.r || raw.hex || "UNKNOWN").trim() || "UNKNOWN";
        const id = String(raw.hex || callsign).trim();
        const track = finiteNumber(raw.track) ?? 0;
        return {
            id: id,
            callsign: callsign,
            type: String(raw.desc || raw.t || "Unknown aircraft").trim(),
            lat: lat,
            lon: lon,
            altitude: altitude,
            ground: raw.alt_baro === "ground",
            speed: finiteNumber(raw.gs),
            track: (track + 360) % 360,
            seen: finiteNumber(raw.seen_pos) ?? finiteNumber(raw.seen) ?? null,
            overIowa: isInsideIowa(lat, lon)
        };
    }

    function formatAltitude(aircraft) {
        if (aircraft.ground) {
            return "GROUND";
        }
        if (aircraft.altitude === null) {
            return "--";
        }
        return Math.round(aircraft.altitude).toLocaleString() + " FT";
    }

    function formatSpeed(aircraft) {
        return aircraft.speed === null ? "--" : Math.round(aircraft.speed).toLocaleString() + " KT";
    }

    function formatTrack(aircraft) {
        return String(Math.round(aircraft.track)).padStart(3, "0") + " deg";
    }

    function formatPosition(aircraft) {
        return aircraft.lat.toFixed(2) + ", " + aircraft.lon.toFixed(2);
    }

    function setFeedStatus(label, status) {
        elements.feedStatus.textContent = label;
        elements.feedStatus.dataset.state = status;
        document.body.dataset.demoState = status === "loading"
            ? "loading"
            : status === "offline"
                ? "offline"
                : status === "error"
                    ? "error"
                    : "ready";
    }

    function renderSelected() {
        const aircraft = state.aircraft.find(function (item) { return item.id === state.selectedId; });
        if (!aircraft) {
            state.selectedId = null;
            elements.selectedCallsign.textContent = "None selected";
            elements.selectedType.textContent = "Click a marker on the map to see its details.";
            elements.selectedPosition.textContent = "--";
            elements.selectedAltitude.textContent = "--";
            elements.selectedSpeed.textContent = "--";
            elements.selectedTrack.textContent = "--";
            return;
        }

        elements.selectedCallsign.textContent = aircraft.callsign;
        elements.selectedType.textContent = aircraft.type + (aircraft.overIowa ? " / over Iowa" : " / regional view");
        elements.selectedPosition.textContent = formatPosition(aircraft);
        elements.selectedAltitude.textContent = formatAltitude(aircraft);
        elements.selectedSpeed.textContent = formatSpeed(aircraft);
        elements.selectedTrack.textContent = formatTrack(aircraft);
    }

    function aircraftForMap() {
        const overIowa = state.aircraft.filter(function (aircraft) { return aircraft.overIowa; }).slice(0, MAP_IOWA_LIMIT);
        const nearby = state.aircraft.filter(function (aircraft) { return !aircraft.overIowa; }).slice(0, MAP_AIRCRAFT_LIMIT - overIowa.length);
        return overIowa.concat(nearby);
    }

    function selectAircraft(id) {
        state.selectedId = id;
        renderBoard();
        renderSelected();
    }

    function renderBoard() {
        elements.aircraftLayer.replaceChildren();
        const plottedAircraft = aircraftForMap();
        const selectedAircraft = state.aircraft.find(function (aircraft) { return aircraft.id === state.selectedId; });
        if (selectedAircraft && !plottedAircraft.some(function (aircraft) { return aircraft.id === selectedAircraft.id; })) {
            plottedAircraft.push(selectedAircraft);
        }

        plottedAircraft.forEach(function (aircraft) {
            const point = project(aircraft.lat, aircraft.lon);
            const group = svgElement("g", {
                class: "aircraft-marker" + (aircraft.overIowa ? " is-over-iowa" : "") + (aircraft.id === state.selectedId ? " is-selected" : ""),
                transform: "translate(" + point.x.toFixed(1) + " " + point.y.toFixed(1) + ") rotate(" + aircraft.track.toFixed(1) + ")",
                role: "button",
                tabindex: "0",
                "aria-label": aircraft.callsign + ", " + aircraft.type + ", " + formatAltitude(aircraft)
            });
            group.appendChild(svgElement("circle", { class: "aircraft-glow", cx: 0, cy: 0, r: 22 }));
            group.appendChild(svgElement("path", {
                class: "aircraft-shape",
                d: "M 0 -15 L 3 -4 L 10 5 L 3 4 L 0 16 L -3 4 L -10 5 L -3 -4 Z"
            }));
            if (aircraft.id === state.selectedId) {
                const label = svgElement("text", { class: "aircraft-label", x: 0, y: 29, transform: "rotate(" + (-aircraft.track).toFixed(1) + ")" });
                label.textContent = aircraft.callsign;
                group.appendChild(label);
            }
            group.addEventListener("click", function () { selectAircraft(aircraft.id); });
            group.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectAircraft(aircraft.id);
                }
            });
            elements.aircraftLayer.appendChild(group);
        });
    }

    function formatUpdateTime(date) {
        return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
    }

    async function loadFlights() {
        if (state.requestInFlight) {
            return;
        }
        state.requestInFlight = true;
        elements.refreshButton.disabled = true;
        elements.refreshButton.textContent = "Refreshing...";
        if (!state.aircraft.length) {
            setFeedStatus("Scanning airspace", "loading");
        }

        try {
            const response = await fetch(API_URL, {
                cache: "no-store",
                headers: { Accept: "application/json" }
            });
            if (!response.ok) {
                throw new Error("Feed returned " + response.status);
            }
            const payload = await response.json();
            const flights = (Array.isArray(payload.ac) ? payload.ac : [])
                .map(normalizeAircraft)
                .filter(Boolean)
                .sort(function (first, second) {
                    return Number(second.overIowa) - Number(first.overIowa) || (second.altitude || 0) - (first.altitude || 0);
                });
            state.aircraft = flights;
            state.source = "live";
            state.selectedId = flights[0] ? flights[0].id : null;
            state.lastUpdated = payload.now ? new Date(payload.now < 100000000000 ? payload.now * 1000 : payload.now) : new Date();
            setFeedStatus(flights.length ? "Live snapshot" : "Quiet sky", flights.length ? "success" : "quiet");
            elements.lastUpdated.textContent = "Updated " + formatUpdateTime(state.lastUpdated) + " local time";
            renderBoard();
            renderSelected();
        } catch (error) {
            const hasLastSnapshot = state.aircraft.length > 0 && state.source === "live";
            if (!hasLastSnapshot) {
                state.aircraft = OFFLINE_AIRCRAFT.map(normalizeAircraft).filter(Boolean);
                state.selectedId = state.aircraft[0] ? state.aircraft[0].id : null;
            }
            if (hasLastSnapshot) {
                setFeedStatus("Using last live snapshot", "error");
                elements.lastUpdated.textContent = "Live feed refresh failed; showing the last good snapshot";
            } else {
                state.source = "fixture";
                setFeedStatus("Offline fixture / feed unavailable", "offline");
                elements.lastUpdated.textContent = "Deterministic fixture shown; live feed could not be reached";
            }
            renderBoard();
            renderSelected();
        } finally {
            state.requestInFlight = false;
            elements.refreshButton.disabled = false;
            elements.refreshButton.textContent = "Refresh feed";
        }
    }

    function scheduleRefresh() {
        window.clearInterval(state.timer);
        state.timer = window.setInterval(function () {
            if (document.visibilityState === "visible") {
                loadFlights();
            }
        }, REFRESH_MS);
    }

    elements.refreshButton.addEventListener("click", loadFlights);
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            loadFlights();
        }
    });

    setMapBackdrop();
    state.aircraft = OFFLINE_AIRCRAFT.map(normalizeAircraft).filter(Boolean);
    state.selectedId = state.aircraft[0] ? state.aircraft[0].id : null;
    setFeedStatus("Fixture ready / checking live feed", "offline");
    renderBoard();
    renderSelected();
    scheduleRefresh();
    loadFlights();
}());
