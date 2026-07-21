const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const gallerySource = fs.readFileSync(path.join(root, "photos", "data.js"), "utf8");
const filenames = [...gallerySource.matchAll(/src:\s*"\.\.\/images\/photos\/([^"]+)"/g)]
    .map((match) => match[1]);

const locations = {
    marion: {
        label: "Marion, Iowa, United States",
        lat: 42.0342,
        lon: -91.5977,
        country: "United States",
        countryCode: "US",
        region: "Iowa"
    },
    ames: {
        label: "Ames, Iowa, United States",
        lat: 42.0266,
        lon: -93.6465,
        country: "United States",
        countryCode: "US",
        region: "Iowa"
    },
    cancun: {
        label: "Cancun International Airport, Mexico",
        lat: 21.0365,
        lon: -86.8771,
        country: "Mexico",
        countryCode: "MX",
        region: "Quintana Roo"
    },
    islaMujeres: {
        label: "Isla Mujeres, Mexico",
        lat: 21.2372,
        lon: -86.735,
        country: "Mexico",
        countryCode: "MX",
        region: "Quintana Roo"
    },
    puntaSur: {
        label: "Punta Sur, Isla Mujeres, Mexico",
        lat: 21.2018,
        lon: -86.7116,
        country: "Mexico",
        countryCode: "MX",
        region: "Quintana Roo"
    },
    elBoqueron: {
        label: "El Boqueron, El Salvador",
        lat: 13.734,
        lon: -89.286,
        country: "El Salvador",
        countryCode: "SV",
        region: "San Salvador"
    },
    sanSalvador: {
        label: "San Salvador, El Salvador",
        lat: 13.6929,
        lon: -89.2182,
        country: "El Salvador",
        countryCode: "SV",
        region: "San Salvador"
    },
    lakeCoatepeque: {
        label: "Lake Coatepeque, El Salvador",
        lat: 13.8834,
        lon: -89.5255,
        country: "El Salvador",
        countryCode: "SV",
        region: "Santa Ana"
    },
    suchitoto: {
        label: "Suchitoto, El Salvador",
        lat: 13.938,
        lon: -89.013,
        country: "El Salvador",
        countryCode: "SV",
        region: "Cuscatlan"
    }
};

const exactCoordinates = {
    "P1020274.JPG": [42.043875, -91.57511944444444],
    "P1020278.JPG": [42.04376944444444, -91.57494444444444],
    "P1020288.JPG": [42.04816944444444, -91.58341944444444],
    "P1020382.JPG": [42.018966666666664, -93.65826944444446],
    "P1020406.JPG": [42.02019444444444, -93.65475277777779],
    "P1020407.JPG": [42.02045833333333, -93.65466388888889],
    "P1020409.JPG": [42.02052777777778, -93.65471111111111],
    "P1020415.JPG": [42.02083611111111, -93.66198611111112],
    "P1020466.JPG": [42.020938888888885, -93.66171111111112],
    "P1020475.JPG": [42.02417222222222, -93.64908333333334],
    "P1020500.JPG": [42.02090277777778, -93.66045277777778],
    "P1020502.JPG": [42.02088611111111, -93.66171944444444],
    "P1020534.JPG": [42.01118888888889, -93.63787500000001],
    "P1020550.JPG": [42.01240833333333, -93.63793055555556],
    "P1020697.JPG": [21.255366666666667, -86.74524444444445],
    "P1020884.JPG": [13.730447222222223, -89.27604166666667],
    "P1020885.JPG": [13.730447222222223, -89.27604166666667],
    "P1020887.JPG": [13.730925000000001, -89.27221666666667],
    "P1020888.JPG": [13.730969444444444, -89.27639444444445],
    "P1020892.JPG": [13.734074999999999, -89.27940277777778],
    "P1020895.JPG": [13.732180555555555, -89.27763888888889],
    "P1020899.JPG": [13.731669444444444, -89.27709166666666],
    "P1020902.JPG": [13.732819444444445, -89.27594444444445],
    "P1020905.JPG": [13.731719444444444, -89.275925],
    "P1020906.JPG": [13.731669444444444, -89.27559166666667],
    "P1020909.JPG": [13.73226388888889, -89.27460277777777],
    "P1020911.JPG": [13.732627777777777, -89.27340833333334],
    "P1020915.JPG": [13.883333333333333, -89.52553055555555],
    "P1020918.JPG": [13.88335, -89.52546944444444],
    "P1020920.JPG": [13.88341111111111, -89.52555833333334],
    "P1020923.JPG": [13.883327777777778, -89.52541944444444],
    "P1020929.JPG": [13.883022222222223, -89.52667222222222],
    "P1020933.JPG": [13.883802777777777, -89.52740277777778],
    "P1020943.JPG": [13.93801388888889, -89.01256111111111],
    "P1020946.JPG": [13.937625, -89.0132]
};

function assignedLocation(filename) {
    if (filename.startsWith("G") && filename.endsWith(".JPG")) return locations.puntaSur;
    if (filename.startsWith("592404102_")) return locations.marion;

    const match = filename.match(/^P102(\d{4})\.JPG$/);
    if (!match) throw new Error(`No travel location rule for ${filename}`);
    const number = Number(match[1]);

    if (number <= 303) return locations.marion;
    if (number <= 566) return locations.ames;
    if (number === 572) return locations.cancun;
    if (number <= 697) return locations.islaMujeres;
    if (number <= 872) return locations.ames;
    if (number <= 888) return locations.elBoqueron;
    if (number <= 911) return locations.sanSalvador;
    if (number <= 938) return locations.lakeCoatepeque;
    return locations.suchitoto;
}

const photos = filenames.map((filename) => {
    const location = assignedLocation(filename);
    const exact = exactCoordinates[filename];
    const stem = path.parse(filename).name;
    const thumbnail = path.join(root, "images", "photos", "optimized", `${stem}-480.webp`);
    if (!fs.existsSync(thumbnail)) throw new Error(`Missing optimized thumbnail for ${filename}`);

    return {
        id: stem,
        filename,
        title: stem.replaceAll("_", " "),
        image: `../images/photos/optimized/${stem}-480.webp`,
        fullImage: `../images/photos/${filename}`,
        label: location.label,
        lat: exact ? exact[0] : location.lat,
        lon: exact ? exact[1] : location.lon,
        country: location.country,
        countryCode: location.countryCode,
        region: location.region,
        coordinateSource: exact ? "exif" : "inferred"
    };
});

if (photos.length !== filenames.length || new Set(photos.map((photo) => photo.filename)).size !== filenames.length) {
    throw new Error("Travel photo export does not have one-to-one gallery coverage");
}

const output = {
    count: photos.length,
    exactCount: photos.filter((photo) => photo.coordinateSource === "exif").length,
    inferredCount: photos.filter((photo) => photo.coordinateSource === "inferred").length,
    locationCount: new Set(photos.map((photo) => photo.label)).size,
    photos
};

fs.writeFileSync(
    path.join(root, "travel", "data", "photos.json"),
    `${JSON.stringify(output, null, 2)}\n`
);

console.log(`Mapped ${output.count} gallery photos across ${output.locationCount} locations (${output.exactCount} EXIF, ${output.inferredCount} inferred).`);
