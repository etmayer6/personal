# Pocket Worlds

Request: “Yeah lets do pocket worlds, make sure to full integrate it into the projects and game pages and everything.”

A free, local-first miniature island sandbox at `/pocket-worlds/`. The island is a live Canvas2D projection of a 24×24 heightfield, not a generated picture. No WebGL, library CDN, account, paid API, or Supabase schema change is required.

## Play

- Raise/lower terrain, carve water, plant trees, place cottages and paths, or erase placed objects. One-tile and 3×3 brushes; up to 50 undo snapshots.
- Drag to paint; Look around or right-drag rotates. Alt/right-drag pans; wheel and zoom buttons zoom. Recenter restores the initial view.
- 1–8 select tools; arrows move a tile cursor; Enter edits it; Space toggles growth; F toggles fullscreen. Ctrl/Cmd Z undoes; Ctrl/Cmd Shift Z redoes. Keyboard controls are active when the canvas has focus.
- Sun, rain, snow and night change the scene. Rain accelerates tree maturation/spreading; snow and night slow it. Growth can run at 1× or 4×. Pausing stops simulation, not gentle visual atmosphere; reduced-motion preference freezes decorative movement.
- Wooded cove, ring island, or open water starting points. Raise open-water tiles several times to bring land above sea level. Cottages and paths always occupy one tile.

## Keeping and sharing

The draft autosaves locally. Six named snapshots are kept in this browser; saving a seventh asks before replacing the oldest. New/open/import actions explain that they replace the current draft. Export JSON for a portable backup or PNG for a postcard.

Share links carry a bounded, versioned world snapshot in the URL fragment. The recipient can edit it, but their existing local draft is untouched until they explicitly save/keep a copy. Later sender edits don't change an already-shared snapshot. Links work directly on GitHub Pages without backend routes. Same-page hash navigation is supported. Tree ages are rounded to hundredths in links; JSON exports preserve full precision.

No cloud gallery, public account or multiplayer is claimed. Saves are local and may be removed by clearing browser data. Invalid import/link data does not replace the current world; denied/full storage offers export instead of claiming a successful save. Caps: 180 trees and 48 cottages.

## Site integration

Projects playable workbench and Play filter; Games catalog; homepage Outside Work link; favorites, played status and Continue shortcut; route/project test registries; sitemap; canonical/social metadata and descriptive card alt text. Travel Map remains featured. Resume is unchanged.

## Artwork

Generated using the built-in image-generation tool. Source: `projects/assets/pocket-worlds-card.png`. Optimized shared card: `projects/assets/optimized/pocket-worlds-card-960.webp` (960×640). Used on both catalogs and social previews. Rendered island geometry remains code-native.

Final prompt:

> Use case: stylized-concept. Asset type: landscape website project/game card artwork for Pocket Worlds, an actual miniature island-building toy. Subject: a compact low-poly island with faceted grassy hills, a small winding blue river, clusters of conical evergreen trees, three tiny warm-white cottages with terracotta pitched roofs and glowing windows, surrounded by calm teal water. Style: polished miniature 3D diorama, charming but restrained, crisp geometry, clay-like matte materials. Composition: entire island centered in a wide landscape frame with generous breathing room, elevated three-quarter/isometric view, clean teal-green backdrop. Palette: deep teal water, sage and moss greenery, pale sand beaches, cream cottages, warm terracotta roofs. Lighting: gentle late-afternoon sun, soft shadows and a few delicate clouds. The setting should be believable as a small editable browser world, not an elaborate fantasy city. Constraints: no text, no logos, no watermark, no UI, no people, no floating rocks, no giant castle. Landscape aspect ratio approximately 3:2.

Asset-only optimization: `node tools/optimize-images.cjs --only projects/assets/pocket-worlds-card.png` (existing default batch behavior is unchanged).

## Verification

`tests/pocket-worlds.spec.js` covers keyboard and pointer painting, brush/stroke behavior, undo/redo, camera, simulation/pause/weather, local persistence, shared-draft isolation, import/export/postcards, malformed input, storage denial, catalogs/favorites/Continue, fullscreen/dialog focus, and narrow touch layouts. The bundled develop-web-game client is also run with screenshots and text-state inspection.
