const fs = require("fs");

function jpegDimensions(buffer) {
    if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;

    let offset = 2;
    while (offset + 4 < buffer.length) {
        if (buffer[offset] !== 0xff) {
            offset += 1;
            continue;
        }

        const marker = buffer[offset + 1];
        offset += 2;
        if (marker === 0xd8 || marker === 0xd9) continue;
        if (offset + 2 > buffer.length) return null;

        const segmentLength = buffer.readUInt16BE(offset);
        if (segmentLength < 2 || offset + segmentLength > buffer.length) return null;
        const isStartOfFrame = (marker >= 0xc0 && marker <= 0xc3)
            || (marker >= 0xc5 && marker <= 0xc7)
            || (marker >= 0xc9 && marker <= 0xcb)
            || (marker >= 0xcd && marker <= 0xcf);

        if (isStartOfFrame && segmentLength >= 7) {
            return {
                height: buffer.readUInt16BE(offset + 3),
                width: buffer.readUInt16BE(offset + 5)
            };
        }
        offset += segmentLength;
    }
    return null;
}

function pngDimensions(buffer) {
    if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") return null;
    return {
        width: buffer.readUInt32BE(16),
        height: buffer.readUInt32BE(20)
    };
}

function webpDimensions(buffer) {
    if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
        return null;
    }

    const chunk = buffer.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
        return {
            width: buffer.readUInt16LE(26) & 0x3fff,
            height: buffer.readUInt16LE(28) & 0x3fff
        };
    }
    if (chunk === "VP8L" && buffer.length >= 25) {
        const bits = buffer.readUInt32LE(21);
        return {
            width: (bits & 0x3fff) + 1,
            height: ((bits >>> 14) & 0x3fff) + 1
        };
    }
    if (chunk === "VP8X" && buffer.length >= 30) {
        return {
            width: 1 + buffer[24] + (buffer[25] << 8) + (buffer[26] << 16),
            height: 1 + buffer[27] + (buffer[28] << 8) + (buffer[29] << 16)
        };
    }
    return null;
}

function imageDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    const extension = filePath.toLowerCase().split(".").pop();
    if (extension === "jpg" || extension === "jpeg") return jpegDimensions(buffer);
    if (extension === "png") return pngDimensions(buffer);
    if (extension === "webp") return webpDimensions(buffer);
    return null;
}

module.exports = { imageDimensions };
