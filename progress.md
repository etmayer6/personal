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
