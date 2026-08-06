const fs = require("fs");
const path = require("path");
const { imageDimensions } = require("./image-dimensions.cjs");

const root = path.resolve(__dirname, "..");
const sourceDirectory = fs.existsSync(path.join(root, "images", "photos", "source"))
    ? path.join(root, "images", "photos", "source")
    : path.join(root, "images", "photos");
const filenames = fs.readdirSync(sourceDirectory)
    .filter((filename) => /\.(?:jpe?g|png)$/i.test(filename))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));

const dimensions = Object.fromEntries(filenames.map((filename) => {
    const size = imageDimensions(path.join(sourceDirectory, filename));
    if (!size) throw new Error(`Could not read dimensions for ${filename}`);
    return [filename, size];
}));

fs.writeFileSync(
    path.join(root, "photos", "image-manifest.js"),
    `window.PHOTO_IMAGE_DIMENSIONS = ${JSON.stringify(dimensions, null, 4)};\n`
);

console.log(`Built image manifest with ${filenames.length} entries.`);
