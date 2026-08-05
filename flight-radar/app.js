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

    const IOWA_BORDER = [
        [43.5017, -96.6397],
        [43.5017, -91.2000],
        [43.3600, -91.0900],
        [43.1600, -91.1200],
        [42.9200, -90.8200],
        [42.6500, -90.6500],
        [42.4200, -90.5900],
        [42.1800, -90.5700],
        [41.9200, -90.5800],
        [41.7000, -90.6000],
        [41.5000, -90.6600],
        [41.3400, -90.9300],
        [41.1200, -91.0800],
        [40.9000, -91.1300],
        [40.6800, -91.2200],
        [40.4800, -91.3600],
        [40.3750, -91.4300],
        [40.3750, -95.7600],
        [40.5000, -95.8200],
        [40.7200, -95.8800],
        [40.9800, -95.9700],
        [41.2400, -96.0600],
        [41.5000, -96.1600],
        [41.7600, -96.2600],
        [42.0200, -96.3600],
        [42.2800, -96.4700],
        [42.5500, -96.5600],
        [42.8200, -96.6100],
        [43.1200, -96.6300]
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
            state.lastUpdated = payload.now ? new Date(payload.now < 100000000000 ? payload.now * 1000 : payload.now) : new Date();
            setFeedStatus(flights.length ? "Live snapshot" : "Quiet sky", flights.length ? "success" : "quiet");
            elements.lastUpdated.textContent = "Updated " + formatUpdateTime(state.lastUpdated) + " local time";
            renderBoard();
            renderSelected();
        } catch (error) {
            setFeedStatus(state.aircraft.length ? "Using last snapshot" : "Feed unavailable", "error");
            elements.lastUpdated.textContent = state.lastUpdated ? "Last good snapshot " + formatUpdateTime(state.lastUpdated) : "The live feed could not be reached";
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
    renderSelected();
    scheduleRefresh();
    loadFlights();
}());
