const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceDirectory = fs.existsSync(path.join(root, "images", "photos", "source"))
    ? path.join(root, "images", "photos", "source")
    : path.join(root, "images", "photos");
const outputPath = path.join(root, "photos", "full-data.js");
const filenames = fs.readdirSync(sourceDirectory)
    .filter((filename) => /\.(?:jpe?g|png)$/i.test(filename))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));

const photos = filenames.map((filename, index) => {
    const stem = path.parse(filename).name;
    const preview = path.join(root, "images", "photos", "optimized", `${stem}-1440.webp`);
    if (!fs.existsSync(preview)) throw new Error(`Missing optimized preview for ${filename}`);
    return {
        src: `../images/photos/optimized/${stem}-1440.webp`,
        alt: `Archived photograph ${String(index + 1).padStart(2, "0")} from Ethan's full photo collection`
    };
});

fs.writeFileSync(
    outputPath,
    `window.PHOTOS_FULL_DECK = ${JSON.stringify(photos, null, 4)};\n`
);

console.log(`Built full photo deck with ${photos.length} entries.`);
