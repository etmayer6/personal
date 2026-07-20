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
- Mapillary mode still needs a free client access token in `pinpoint/mapillary-config.js`; the game remains fully playable without it.

## Mapillary verification

- The required Playwright game client passes against the no-token local fallback.
- Mocked Mapillary responses loaded five online rounds, exposed no answer before guessing, displayed attribution, scored results, reached the final summary, and started a replay.
- Five empty Mapillary region responses automatically produced five local fallback rounds.
- Desktop and 390px mobile Mapillary-mode screenshots were inspected.
- No browser console or page errors were recorded in the completed success/fallback test.

## Mapillary TODO

- Add the free Mapillary client token to `pinpoint/mapillary-config.js` to enable worldwide rounds on the deployed site.

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
