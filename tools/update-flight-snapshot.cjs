const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "flight-radar", "live.json");
const SOURCES = [
    {
        provider: "ADSB.lol",
        url: "https://api.adsb.lol/v2/point/42.03/-93.5/250"
    },
    {
        provider: "adsb.fi",
        url: "https://opendata.adsb.fi/api/v3/lat/42.03/lon/-93.5/dist/250"
    }
];
const AIRCRAFT_FIELDS = [
    "hex", "type", "flight", "r", "t", "desc", "alt_baro", "gs", "track", "lat", "lon", "seen_pos", "seen"
];

function trimAircraft(raw) {
    if (!raw || !Number.isFinite(raw.lat) || !Number.isFinite(raw.lon)) {
        return null;
    }

    return AIRCRAFT_FIELDS.reduce(function (aircraft, field) {
        if (raw[field] !== undefined) aircraft[field] = raw[field];
        return aircraft;
    }, {});
}

async function fetchSnapshot(source) {
    const response = await fetch(source.url, {
        headers: {
            Accept: "application/json",
            "User-Agent": "EthanMayer-IowaSkywatch/1.0 (+https://etmayer6.github.io/personal/flight-radar/)"
        },
        signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) {
        throw new Error(source.provider + " returned " + response.status);
    }

    const payload = await response.json();
    if (!Array.isArray(payload.ac)) {
        throw new Error(source.provider + " returned an invalid aircraft list");
    }

    return {
        provider: source.provider,
        updatedAt: new Date().toISOString(),
        ac: payload.ac.map(trimAircraft).filter(Boolean)
    };
}

async function main() {
    let lastError;
    for (const source of SOURCES) {
        try {
            const snapshot = await fetchSnapshot(source);
            const temporaryPath = OUTPUT_PATH + ".tmp";
            fs.writeFileSync(temporaryPath, JSON.stringify(snapshot, null, 2) + "\n");
            fs.renameSync(temporaryPath, OUTPUT_PATH);
            console.log(`Wrote ${snapshot.ac.length} aircraft from ${snapshot.provider} to ${path.relative(ROOT, OUTPUT_PATH)}.`);
            return;
        } catch (error) {
            lastError = error;
            console.warn(`${source.provider} unavailable: ${error.message}`);
        }
    }

    throw lastError || new Error("No aircraft snapshot source is configured");
}

main().catch(function (error) {
    console.error(error.message);
    process.exitCode = 1;
});
