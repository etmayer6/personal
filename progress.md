Original prompt: Remove clutter from the games on the website. Right now they don’t look very good

## Current pass

- Removed the repeated game-page hero and footer around all three playable exports.
- Simplified Block Blast to one toolbar, three compact stats, one status line, and the board.
- Simplified Flight Sim to one four-action flight deck, one compact launch card, and optional advanced controls.
- Simplified Word Sort to four primary actions, the board, and a collapsed secondary-controls disclosure.
- Tightened all three mobile shells and verified the final 390px layouts visually.

## Verification

- `node --check` passes for all three exported JavaScript bundles.
- The required Playwright game client starts each game and returns synchronized `render_game_to_text` state.
- Desktop and 390px mobile screenshots were inspected for Block Blast, Flight Sim, and Word Sort.
- No browser console or page errors were recorded.

## TODO

- None for this cleanup pass.

## Pinpoint pass

- New request: create a GeoGuessr-style game that shows a world image and scores a map guess by distance.
- Built a dependency-free five-round game from local geotagged travel photos with progressive hints, canvas map controls, fullscreen, and deterministic test hooks.
- Added distance-based scoring with a 5,000-point round maximum and a 250-point cost per revealed hint.
- Added Pinpoint as the featured game on the Games page and updated the game count and card order.

## Pinpoint verification

- `node --check pinpoint/game.js` passes.
- The required Playwright game client can place a map pin, submit a guess, and read the synchronized result state.
- A 14 km test guess scored 4,718 points after one hint, and the next round reset correctly.
- Desktop and 390px mobile screenshots were inspected for both Pinpoint and the Games page.
- No browser console or page errors were recorded.

## Pinpoint TODO

- None for the initial game pass.

## Mapillary worldwide pass

- New request: keep Pinpoint free and use Mapillary for worldwide imagery.
- Added a browser-safe Mapillary client-token configuration file and a diverse worldwide region pool.
- Added asynchronous Mapillary image discovery, randomized selection, coordinate-based answers, generated geographic hints, visible attribution, and automatic local-photo fallbacks.
- Mapillary worldwide mode is configured with its browser-safe client token; the client secret is intentionally excluded from the repository.

## Mapillary verification

- The required Playwright game client passes against the no-token local fallback.
- Mocked Mapillary responses loaded five online rounds, exposed no answer before guessing, displayed attribution, scored results, reached the final summary, and started a replay.
- Five empty Mapillary region responses automatically produced five local fallback rounds.
- Desktop and 390px mobile Mapillary-mode screenshots were inspected.
- No browser console or page errors were recorded in the completed success/fallback test.

## Mapillary configuration

- The deployed static client uses only the Mapillary client access token.
- Never place the Mapillary client secret in this repository or any browser-delivered file.
- Updated discovery for Mapillary's current query limits by sampling small cells within curated high-coverage cities on six continents.
- Prefer standard perspective captures over panoramas to avoid distortion in the photo frame.

## Live Mapillary verification

- Two consecutive five-round browser runs loaded five Mapillary rounds with zero local fallbacks after the search-area update.
- Live imagery, attribution, answer links, hints, scoring, five-round progression, and final result state all passed with no console or page errors.
- The required game interaction client was rerun after the final image-quality filter, and desktop screenshots were visually inspected.

## Games navigation pass

- Added Games to every primary site navigation bar between Projects and Photos.
- The games hub, Pinpoint, Flight Sim, Block Blast, Word Sort, and Gremlin Dex now identify Games as their active section instead of Projects.
- Structural checks passed for all 14 primary navigation bars, including link order and active-state ownership.
- Desktop, 390px, and 320px browser screenshots were inspected; navigation has no clipping, overflow, console errors, or page errors.

## Pinpoint polish pass

- Enforced continent-diverse worldwide games instead of allowing one region to dominate all five rounds.
- Added an eight-second Mapillary request timeout, stronger landscape/quality filtering, and next-round image preloading.
- Added a compact imagery-source indicator, destination-aware image alt text, post-guess Mapillary deep links, and final score titles.

## Publish verification

- Pinpoint passed local fallback and mocked Mapillary success/failure runs, five-round completion, replay, fullscreen, hints, and scoring.
- Each worldwide sample contained five distinct continents and selected the high-quality landscape candidate.
- Home, Games, Block Blast, Flight Sim, and Word Sort returned HTTP 200 with no horizontal overflow.
- Desktop and 390px screenshots were inspected for Pinpoint and the Games hub.
- All changed game scripts pass `node --check`; browser QA recorded no console or page errors.
## Accurate Pinpoint map pass

- Replaced the hand-drawn continent silhouettes with bundled Natural Earth 1:110m topology, including accurate coastlines, islands, Antarctica, and country boundaries.
- Kept the existing equirectangular projection so map clicks, keyboard movement, scoring, and result lines retain exact longitude/latitude behavior.
- Added antimeridian-aware polygon and result-line rendering so geography and guesses wrap correctly at 180 degrees.

## Accurate map verification

- The required Playwright game client completed a click-and-submit round with `worldMapReady: true` and no runtime failure.
- Focused browser QA verified center projection, keyboard movement, dateline result wrapping, fullscreen toggling, and zero mobile horizontal overflow.
- Desktop, result, canvas-only, and 390px mobile screenshots were visually inspected with no console or page errors.
- No map-specific TODOs remain.

## Travel photo map pass

- Added a generated location record for every one of the 97 photos in the site gallery.
- Preserved 35 valid embedded EXIF coordinates and marked 62 camera-untagged photos as inferred from their contiguous trip sequence and visible landmarks.
- Kept the existing visited-place data separate from the new photo layer so overlapping gallery images can be grouped without adding marker clutter.
- Added photo/place layer controls, searchable photo cards, optimized thumbnail previews, and location popups.

## Travel photo map verification

- The data builder confirms one-to-one coverage for 97 gallery entries and checks that every optimized thumbnail exists.
- Browser QA verified nine grouped markers, all 97 photo cards, the 176-place legacy layer, layer toggling, filtering, popup previews, and country/region totals.
- Desktop, filtered-popup, and 390px mobile screenshots were visually inspected; mobile has no horizontal overflow.
- No browser console or page errors were recorded.

## Word Sort overhaul

- New request: substantially improve Word Sort's look, objective clarity, and overall play experience while removing clutter.
- Shortened and reorganized the canvas around three clear zones: draw pile, category crowns, and play columns.
- Replaced the six-item canvas footer with moves, completed sets, score, and one concise live status.
- Rebuilt the page shell around a three-step objective, compact progress, and a single action bar; duplicate source, crown, booster, mobile-note, and keyboard-reference panels are no longer presented.
- Preserved the existing deal generation, move rules, deterministic time hook, text-state output, and fullscreen behavior.

## Word Sort verification

- Syntax checks and two required Playwright game-client passes succeed after the presentation changes.
- Desktop and 390px title/gameplay screenshots were inspected with no console errors or horizontal overflow.
- Full interaction QA passes for start, hint, draw, undo, shuffle, clue placement, valid and invalid matches, loss, win, next deal, and mobile fullscreen enter/exit.
- Stable gameplay and win-state canvas captures were visually inspected after animations settled.
- No Word Sort TODOs remain for this overhaul.

## Block Blast overhaul

- New request: substantially improve Block Blast's visual quality, objective clarity, piece authenticity, and drag mechanics while removing clutter.
- Baseline review confirmed that pieces currently sit under the pointer during drag, invalid previews disappear, and the oversized tray cards compete with the board.
- Rebuilt the game around a denser board-first layout, expanded classic shape pool, bright beveled blocks, and a floating three-piece tray without oversized cards.
- Reorganized the page into one concise objective, three visible steps, score/best/lines stats, one live status, and only New Game and Fullscreen controls.
- Added snapped landing previews, line-completion highlights, persistent blocked feedback, and larger touch-specific lift so pieces and target cells stay visible above the finger.
- Preserved tap-to-select placement, keyboard tray shortcuts, scoring, line clears, combos, best score, deterministic time hooks, and fullscreen behavior.

## Block Blast verification

- JavaScript syntax checks, `git diff --check`, and the required Playwright game client pass on the final build.
- Focused QA passes mouse drag/release, blocked placement, touch drag/release, line clear, game over, and mobile fullscreen enter/exit with zero console or page errors.
- Desktop and 390px mobile title/gameplay screenshots plus drag, blocked, clear, and game-over states were visually inspected with no horizontal overflow.
- The touch test caught and verified a pointer-type argument fix so touch pieces now use the intended finger-safe lift rather than the mouse offset.
- No Block Blast TODOs remain for this overhaul.

## Website game synchronization

- Applied the verified Word Sort and Block Blast export bundles and page styles to the `main` website worktree.
- Updated both game-page headers so Games, rather than Projects, is marked as the current section.
- The required Playwright game client starts both website routes and returns synchronized gameplay state with no console-error artifacts.
- Desktop canvas captures and 390px full-page checks were inspected; both routes remain within the viewport with no horizontal overflow.

## Pinpoint map zoom

- Added a bounded 1x-8x camera with visible zoom controls, pointer-focused mouse-wheel zoom, touch pinch zoom, and drag-to-pan behavior.
- Preserved tap-to-place input by separating taps from drag and pinch gestures, and increased the coordinate readout to two-decimal precision.
- Added keyboard `+`, `-`, and `0` zoom controls; arrow-key guess adjustments now become finer as the map zoom increases.
- Reset the camera for each round and before answer reveal so the full guess-to-answer result remains visible.

## Pinpoint zoom verification

- JavaScript syntax and diff checks pass, and the required Playwright game client loads the updated world map and synchronized camera state.
- Deterministic browser QA passes zoom buttons, pointer-anchored wheel zoom, drag panning, precise tap placement, keyboard zoom, result reset, and synthetic touch pinch without accidental guesses.
- Zoomed desktop, desktop result, and 390px mobile screenshots were visually inspected with no browser errors or horizontal overflow.

## Gremlin icon refresh

- Replaced the scavenger hunt's letter `G` with a reusable inline SVG gremlin face while preserving the existing button hitbox and accessible clue label.
- Reused the same icon for all four animated Mayhem-mode swarm items so normal and released states share one visual identity.
- Browser QA confirms no leftover `G` text markers, four SVG swarm icons, a mobile hit target of at least 42px, and no console errors or horizontal overflow.
- Normal token, full-page Mayhem, and mobile screenshots were visually inspected at their rendered sizes.
