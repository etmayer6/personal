(function () {
    "use strict";

    const API_URL = "https://api.airplanes.live/v2/point/42.03/-93.5/250";
    const REFRESH_MS = 60000;
    const MAP_AIRCRAFT_LIMIT = 180;
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
        [43.3400, -91.0700],
        [43.0200, -91.1500],
        [42.6800, -90.6500],
        [42.3500, -90.5000],
        [41.9500, -90.7300],
        [41.6500, -90.8000],
        [41.2500, -91.0500],
        [40.6000, -91.5800],
        [40.3750, -95.7600],
        [40.5800, -96.0500],
        [41.0000, -96.3200],
        [41.5500, -96.6100],
        [42.1000, -96.6500],
        [42.6500, -96.5800],
        [43.1000, -96.6000]
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
        signalCount: document.getElementById("signal-count"),
        feedStatus: document.getElementById("feed-status"),
        lastUpdated: document.getElementById("last-updated"),
        statVisible: document.getElementById("stat-visible"),
        statIowa: document.getElementById("stat-iowa"),
        statHigh: document.getElementById("stat-high"),
        selectedCallsign: document.getElementById("selected-callsign"),
        selectedType: document.getElementById("selected-type"),
        selectedPosition: document.getElementById("selected-position"),
        selectedAltitude: document.getElementById("selected-altitude"),
        selectedSpeed: document.getElementById("selected-speed"),
        selectedTrack: document.getElementById("selected-track"),
        listCount: document.getElementById("list-count"),
        aircraftList: document.getElementById("aircraft-list"),
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

    function renderStats() {
        const overIowa = state.aircraft.filter(function (aircraft) { return aircraft.overIowa; }).length;
        const highAltitude = state.aircraft.filter(function (aircraft) {
            return aircraft.altitude !== null && aircraft.altitude >= 30000;
        }).length;
        elements.signalCount.textContent = state.aircraft.length;
        elements.statVisible.textContent = state.aircraft.length;
        elements.statIowa.textContent = overIowa;
        elements.statHigh.textContent = highAltitude;
        elements.listCount.textContent = state.aircraft.length;
    }

    function renderSelected() {
        const aircraft = state.aircraft.find(function (item) { return item.id === state.selectedId; });
        if (!aircraft) {
            state.selectedId = null;
            elements.selectedCallsign.textContent = "None selected";
            elements.selectedType.textContent = "Choose a marker or flight below.";
            elements.selectedPosition.textContent = "--";
            elements.selectedAltitude.textContent = "--";
            elements.selectedSpeed.textContent = "--";
            elements.selectedTrack.textContent = "--";
            return;
        }

        elements.selectedCallsign.textContent = aircraft.callsign;
        elements.selectedType.textContent = aircraft.type + (aircraft.overIowa ? " / over Iowa" : " / in range");
        elements.selectedPosition.textContent = formatPosition(aircraft);
        elements.selectedAltitude.textContent = formatAltitude(aircraft);
        elements.selectedSpeed.textContent = formatSpeed(aircraft);
        elements.selectedTrack.textContent = formatTrack(aircraft);
    }

    function selectAircraft(id) {
        state.selectedId = id;
        renderBoard();
        renderList();
        renderSelected();
    }

    function renderBoard() {
        elements.aircraftLayer.replaceChildren();
        const plottedAircraft = state.aircraft.slice(0, MAP_AIRCRAFT_LIMIT);
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

    function renderList() {
        elements.aircraftList.replaceChildren();
        if (!state.aircraft.length) {
            const empty = document.createElement("li");
            empty.className = "empty-list";
            empty.textContent = "No aircraft with a current position.";
            elements.aircraftList.appendChild(empty);
            return;
        }

        state.aircraft.slice(0, 40).forEach(function (aircraft) {
            const item = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "aircraft-row" + (aircraft.overIowa ? " is-over-iowa" : "") + (aircraft.id === state.selectedId ? " is-selected" : "");
            button.setAttribute("aria-label", "Select " + aircraft.callsign);
            button.addEventListener("click", function () { selectAircraft(aircraft.id); });

            const icon = document.createElement("span");
            icon.className = "row-icon";
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = "↑";
            icon.style.transform = "rotate(" + aircraft.track.toFixed(1) + "deg)";

            const main = document.createElement("span");
            main.className = "row-main";
            const callsign = document.createElement("strong");
            callsign.textContent = aircraft.callsign;
            const type = document.createElement("small");
            type.textContent = aircraft.type;
            main.append(callsign, type);

            const meta = document.createElement("span");
            meta.className = "row-meta";
            meta.textContent = aircraft.overIowa ? "IOWA" : formatAltitude(aircraft);
            button.append(icon, main, meta);
            item.appendChild(button);
            elements.aircraftList.appendChild(item);
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
            renderStats();
            renderBoard();
            renderList();
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
    renderStats();
    renderSelected();
    scheduleRefresh();
    loadFlights();
}());
