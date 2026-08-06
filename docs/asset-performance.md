# Asset Performance Audit

Measured 2026-08-05 local time with the repository static server, Chromium via Playwright, a 1440 x 900 viewport, and reduced motion enabled. The measurements are a deterministic deployed-equivalent, not a claim about live GitHub Pages performance. External map, flight, Mapillary, and CDN requests are blocked so the local fallback paths are measured consistently.

## Inventory

The initial audit found 485 existing tracked static files totaling 620.52 MB. The largest contributors were the original gallery JPEGs, generated QA screenshots under `output/`, and the nine Root / Shift PNG frames. After the cleanup, the audit reports:

- Git-tracked payload: 334 files / 13.82 MB.
- Deployable candidate: 467 files / 39.10 MB, excluding ignored source originals and performance reports.
- Images: 318 deployable files; zero gallery originals, zero missing 480px or 960px alternatives, zero duplicate groups, and zero likely-unused image files.
- Root / Shift artwork: nine public 1440px WebP frames totaling 784,512 bytes; the original PNGs remain only in the ignored source directory.
- CourseFlow logo: `courseflow/assets/logo-640.webp`, 13,202 bytes, replacing the 285 KB PNG.

Largest tracked files:

- `flight-sim/assets/flight-sim-export.js` - 1.20 MB.
- `word-sort/assets/word-sort-export.js` - 418.3 KB.
- `block-blast/assets/block-blast-export.js` - 372.9 KB.
- `images/photos/optimized/P1020771-960.webp` - 253.1 KB.
- `images/photos/optimized/P1020884-960.webp` - 231.6 KB.

Largest deployable files:

- `flight-sim/assets/flight-sim-export.js` - 1.20 MB.
- `images/photos/optimized/P1020771-1440.webp` - 655.9 KB.
- `images/photos/optimized/P1020884-1440.webp` - 632.7 KB.
- `images/photos/optimized/P1020799-1440.webp` - 621.8 KB.
- `images/photos/optimized/P1020803-1440.webp` - 616.8 KB.

The audit also checks every HTML asset reference, local fetch target, duplicate image hash, gallery derivative, and page-level asset list. The JSON form is available with `npm run audit:assets -- --json`.

The remaining shared `site-play.js` load is intentional: it powers the site-wide companion behavior. It is not a photo or demo dependency and was not removed speculatively. Photos loads its curated metadata, full-deck metadata, dimensions manifest, and app; the full deck is metadata only, while image bytes are deferred. Travel loads both JSON indexes because the map, search, and list all need coordinates, but its thumbnails are hydrated near the viewport. Flight Sim's 1.26 MB export is currently the largest route-specific script and is required by the playable simulation. No route-local script or data file was identified as safely removable after reference checks.

## Before And After

Transfer size is the sum of local resource transfer sizes for the representative route. Interaction is the elapsed time for one scripted representative action after initialization, so it is a lightweight responsiveness proxy rather than a field INP measurement.

| Route | Transfer before -> after | Requests before -> after | LCP ms before -> after | CLS before -> after | Interaction ms before -> after |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home | 7,238,726 -> 129,210 | 4 -> 4 | 328 -> 132 | 0 -> 0 | n/a |
| Photos | 3,186,306 -> 745,858 | 47 -> 16 | 128 -> 96 | 0.002 -> 0 | 104 -> 69 |
| Projects | 91,023 -> 91,023 | 4 -> 4 | 108 -> 116 | 0 -> 0 | n/a |
| Travel Map | 792,200 -> 266,536 | 40 -> 12 | 60 -> 68 | 0 -> 0 | 88 -> 76 |
| Pinpoint | 329,458 -> 329,458 | 10 -> 10 | 112 -> 116 | 0.0001 -> 0 | 65 -> 68 |
| Block Blast | 446,416 -> 446,416 | 6 -> 6 | 140 -> 156 | 0 -> 0 | 353 -> 330 |
| Flight Sim | 1,410,828 -> 1,410,828 | 7 -> 7 | 128 -> 92 | 0.0006 -> 0.0006 | 599 -> 674 |
| CourseFlow | 460,685 -> 188,719 | 17 -> 17 | 160 -> 124 | 0 -> 0 | 112 -> 121 |
| **Representative total** | **13,955,642 -> 3,608,048** | **135 -> 76** | | | |

The largest transfer reductions are from the homepage portrait, the photo gallery's deferred WebP images, the travel thumbnails, and the CourseFlow logo. LCP and interaction values vary between local runs, so the table reports the observed run rather than claiming every route became faster.

## Image Workflow

### New gallery photo

1. Put the original JPEG or PNG in `images/photos/source/`. This directory is intentionally ignored and is for local regeneration only.
2. Add the public-safe description, location, chapter, and date to `photos/data.js`.
3. Run `npm run images:optimize` to create cached 480px, 960px, and 1440px WebP derivatives.
4. Run `npm run photos:manifest`, `node tools/build-photo-full-deck.js`, and `node tools/build-travel-photo-data.js`.
5. Run `npm run audit:assets` and `npm run check` before committing the generated derivatives and metadata.

The optimizer skips outputs newer than their source. Use `npm run images:optimize -- --force` only when intentionally rebuilding every derivative.

### Project or demo artwork

Prefer SVG for interface artwork and WebP for raster artwork. Keep an original in a route-local ignored `source/` directory, add a route-specific optimizer job when the image needs resizing, and reference only the generated public asset. Give HTML images explicit `width` and `height`; canvas demos should set their canvas dimensions and use an appropriately sized frame derivative.

## Repeatable Commands

```bash
npm run audit:assets
npm run images:optimize
npm run measure:performance -- --label local
npm run check
```
