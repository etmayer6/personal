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

## Pinpoint photo zoom

- New request: make the challenge image zoomable with interaction parity to the world map.
- Added bounded 1x-8x photo zoom, pointer-focused wheel zoom, pinch zoom, drag panning, visible controls, and photo-focused keyboard controls.
- Photo framing now resets at the start of every round, while captions, loading state, and attribution remain fixed above the moving image.
- Added resize and fullscreen bounding so transformed photos cannot expose empty edges after the layout changes size.

## Pinpoint photo zoom verification

- Desktop browser QA passed zoom buttons, cursor-focused wheel zoom, bounded drag panning, reset, photo-focused keyboard zoom, and independent photo/map controls.
- Synthetic two-pointer QA reached 2.03x without changing the map camera, and advancing to the next round reset the photo to 1x with centered offsets.
- Desktop and 390px mobile screenshots were visually inspected; mobile has no horizontal overflow or overlap between photo instructions and zoom controls.
- Browser QA recorded no console or page errors.

## CourseFlow static demo

- New request: replace CourseFlow's external-only project link with a usable static portfolio demo backed by placeholder data.
- Added a dependency-free CourseFlow route with a fictional Software Engineering curriculum, three sample plan states, local browser persistence, catalog search and filters, and an accessible course inspector.
- Added semester planning through catalog add buttons, drag-and-drop, and move/remove controls, plus automatic prerequisite, course-availability, duplicate, and credit-load checks.
- Added live degree-map progress and requirement coverage, while retaining the original capstone website as a clearly secondary project link.
- Updated the homepage and Projects page to lead with the new interactive demo.
- Browser QA identified undersized mobile course controls; catalog add buttons and semester move/remove targets were enlarged before final responsive verification.

## CourseFlow demo verification

- JavaScript syntax and diff checks pass for the new static route and portfolio link updates.
- Browser QA passes all three sample scenarios, catalog filtering, course inspection, add/remove controls, drag-and-drop term moves, term creation, reset behavior, and local-storage restoration after reload.
- Validation QA passes prerequisite sequencing, missing prerequisites, sample term availability, and overloaded credit checks; resolving or removing a conflict updates the plan immediately.
- Desktop, conflict, tablet, and 390px mobile states were visually inspected, including the lower semester board and catalog rather than only the page header.
- CourseFlow, Home, and Projects have no horizontal overflow at tested breakpoints, and browser QA recorded no console or page errors.

## CourseFlow faithful rebuild

- Replaced the first generic planning demo with a static single-page version modeled directly on the original CourseFlow React application in `Senior_Design`.
- Recreated the original fixed header, CourseFlow branding, grouped navigation, module dashboard, daily timeline, flowchart workspace, catalog, current classes, majors, reviews, badges, games, dining, profile, and settings views.
- Added shared browser-local placeholder state so catalog scheduling, flowchart drag-and-drop, quick edits, degree insights, reviews, preferences, the daily puzzle, command search, and demo reset work together without a backend.
- Reused the original CourseFlow logo and feature artwork while clearly labeling the experience as a portfolio demo with fictional data.

## CourseFlow rebuild verification

- JavaScript syntax checks and `git diff --check` pass, and every core page asset returns HTTP 200 from the static server.
- Browser QA passes semester placement and restoration, live multi-word catalog filtering with retained input focus, local review submission, both reset-dialog paths, and mobile navigation.
- Desktop and 390px layouts were visually inspected; the phone layout keeps the planning controls readable and contains the wide flowchart within its own scrolling canvas.
- Browser QA recorded no console errors.

## Gremlin Hub diet tracker demo

- Recreated the private Gremlin Hub diet tracker as a public, dependency-free `diet-tracker/` experience using fictional data and generated meal artwork.
- Preserved the original photo-first workflow with local photo preview, staged analysis feedback, nutrition estimates, detected ingredients, editing, protected deletion, filtering, and browser-local persistence.
- Added a responsive daily macro dashboard, calorie progress ring, and seven-day energy chart that update from the meal history.
- Removed private infrastructure details and replaced Ollama-backed analysis with clearly labeled deterministic demo estimates.
- Connected the Projects archive card to the interactive demo and updated the open/private project totals.

## Diet tracker verification

- JavaScript syntax and diff checks pass, with all page, script, stylesheet, and generated meal assets available from the static route.
- Browser QA passes sample analysis, aggregate updates, ingredient expansion, estimate editing, protected deletion, reset cancellation and confirmation, and persistence after reload.
- Desktop and 390px dashboard, capture, and meal-history states were visually inspected with no console errors.

## Gremlin Hub receipt meal planner demo

- Recreated the private receipt-to-recipe workflow as a public, dependency-free `meal-planner/` demo with two generated fictional grocery receipts.
- Preserved the production pipeline structure: receipt preparation, OCR cleanup, purchased-product normalization, usable ingredient inference, recipe fit ranking, missing-item disclosure, pantry assumptions, and saved analysis history.
- Added planning-style controls, staged browser-only processing, result tabs, meal-type filtering, expandable recipe steps, OCR copy support, custom receipt preview, and browser-local persistence.
- Shared the Gremlin Hub visual shell with the Diet Tracker while giving receipt planning its original amber accent and a denser evidence-oriented workspace.
- Linked the Projects archive card to the demo and updated the open/private project totals.

## Receipt planner verification

- JavaScript syntax and diff checks pass, and all page, script, stylesheet, and generated receipt assets resolve from the static route.
- Browser QA passes alternate receipt selection, vegetarian planning, pipeline result updates, recipe expansion and filtering, purchased-item and OCR tabs, copying, saved-history loading, reload persistence, and both reset paths.
- Desktop recipe results and 390px overview, receipt input, and pantry states were visually inspected with no console errors.

## Gremlin Hub childhood timeline demo

- Recreated the private archive-review workflow as a public, dependency-free `childhood-timeline/` demo using eight entirely fictional events.
- Preserved the useful engineering concepts: archive extraction, deduplication, theme classification, evidence confidence, relative chronology, human review, and structured-record inspection.
- Added search, theme, source, evidence-type, confidence, and chronology controls plus browser-local re-review flags.
- Removed real names, exact dates, locations, media, excerpts, source platforms, and original links; dates use relative archive-year buckets and sources use generic labels.
- Linked the Projects archive card to the interactive demo and updated the open/private project totals.

## Childhood timeline verification

- JavaScript syntax and diff checks pass, and the page, script, stylesheet, and Projects route resolve from the static server.
- Browser QA passes combined filters, chronology switching, event selection, safe structured-record viewing, re-review persistence, reset behavior, and project-card navigation.
- Desktop and 390px hero, filters, timeline, evidence, method, and privacy-audit states were visually inspected with no console errors or horizontal overflow.
- A focused privacy scan confirms that known private source terms do not appear in the public demo files.

## Night Shift secret experience

- Added a gated `night-shift/` control room that unlocks permanently after all five scavenger marks are recovered, while still allowing the hunt itself to be reset and replayed.
- Extended the shared site layer with browser-local visit history, an after-hours identity, a persistent Night Shift visual mode, and a single visible exit control while the mode is active.
- Added a fictional COMMS-to-NAV-to-TEST power-routing diagnostic with dependency clues, bus-trip feedback, canvas instrumentation, deterministic state output, replay support, and a persistent Gremlin Systems Operator badge.
- Added a local-only shift report, project codenames, incident records, radar treatment, and a read-only maintenance terminal without exposing private data or adding a public navigation link.
- Fixed the final scavenger mark by observing late-mounted Flight Sim content and targeting its current React header instead of the removed legacy host.
- Added the shared Night Shift script to the newer CourseFlow and Gremlin Hub demos and cache-busted existing shared script references.

## Night Shift verification

- The required web-game harness captures the locked route and text state with no error artifact; browser QA then covers the complete five-page unlock path and delayed Flight Sim mark.
- Interaction QA passes locked access, wrong-order trips, ordered recovery, certification, replay, terminal commands, global activation, persistence, global exit, hunt reset with retained unlock, and combined Gremlin/Night Shift modes.
- Desktop gate, hero, tripped panel, completed panel, badge, terminal, homepage, and Projects states plus 390px hero and diagnostic states were visually inspected.
- Mobile controls remain separated, the sticky-header anchor offset is correct, the canvas scales within the viewport, and browser QA records no console errors.

## Gremlin Garage diagnostic bay

- New request: implement the Garage Diagnostic Bay on the personal site.
- Reimagined the private Gremlin Hub car issue tracker as a public-safe, dependency-free `garage/` product demo using a fictional Apex GT prototype.
- Added an original SVG vehicle schematic with five selectable system zones, calculated health scores, severity and history filters, a staged full-system scan, and simulated telemetry.
- Preserved the useful service workflow with browser-local add, edit, resolve, reopen, delete, reset, and JSON export controls.
- Linked the demo from the Projects workbench, updated project totals, added Night Shift's Project Pitlane incident, and included Garage Bay in local visit reporting.

## Garage diagnostic bay TODO

- None for the initial Garage Diagnostic Bay pass.

## Garage diagnostic bay verification

- `node --check` passes for the new demo and the updated shared site script; `git diff --check` reports no whitespace errors.
- Browser QA passes the full scan sequence, hotspot isolation, severity and history filtering, health recalculation, issue resolution, issue creation, and persistence in a fresh tab.
- The required web-game harness completes a scan against a clean browser profile, returns synchronized `render_game_to_text` state, and records no console errors.
- Desktop and 390px mobile hero, diagnostic schematic, service queue, and add-finding dialog views were inspected with no horizontal overflow.
- Projects reports 13 builds and includes the Garage card; the Night Shift incident log includes the new Project Pitlane route.

## Custom 404 recovery page

- New request: implement a fun and cool 404 page.
- Added a self-contained `404.html` so GitHub Pages can render the design for missing routes without depending on asset paths that may break on nested URLs.
- Built a Gremlin Systems navigation-failure console with clear Home, Projects, Games, and Photos recovery routes plus a three-hit routing-gremlin containment interaction.
- Added keyboard-accessible controls, reduced-motion support, requested-path reporting, a replay state, and path-aware links that work at either a custom-domain root or the `/personal/` GitHub Pages project path.

## Custom 404 TODO

- None for the initial custom 404 pass.

## Custom 404 verification

- Inline JavaScript compilation, project-root route cases, and `git diff --check` pass.
- Browser QA passes all three containment hits, target repositioning, the restored-signal completion state, accessibility-label updates, and replay.
- Desktop and 390px mobile error, radar, containment, and footer states were visually inspected with no horizontal overflow.
- Browser logs contain no errors or warnings; recovery links resolve correctly at the site root, and the route helper covers both root-hosted and `/personal/` GitHub Pages paths.

## 404 recovered-transmission easter egg

- Added a hidden Rickroll link to the custom 404 recovery console.
- The subtle `Recovered transmission` link appears only after all three gremlin containment hits, opens safely in a new tab, and hides again when the challenge is replayed.

## Lightweight field-notes blog

- Replaced the empty Blog placeholder with a compact editorial index and long-form article layout that shares the site's navigation and Night Shift behavior.
- Added a dependency-free Markdown publishing pipeline in `tools/build-blog.js`, including frontmatter validation, draft support, tags, reading times, archive ordering, and core Markdown formatting.
- Added `blog/README.md` as a durable Codex authoring brief: Ethan can provide rough updates in ordinary language, while Codex drafts from verified facts, protects private details, publishes the source, and checks the result.
- Published the short introductory post `Opening the notebook` and linked Blog from the standard site navigation, homepage off-clock section, 404 recovery links, and local visit history.

## Lightweight field-notes blog TODO

- None for the initial lightweight blog pass.

## Lightweight field-notes blog verification

- `node --check` passes for the blog generator and shared site script; `git diff --check` reports no whitespace errors.
- The generator builds one published Markdown source into the blog index and its nested article page, and safely clears stale generated posts before each build.
- Browser QA passes archive-to-article navigation, relative stylesheet loading, homepage integration, and the rebuilt output with no console errors or warnings.
- Desktop and 390px mobile index and article layouts were inspected with no horizontal overflow; all six primary navigation links fit at the mobile breakpoint.
- Blog navigation is present across all 19 standard pages, and the homepage includes a direct field-notes link.

## Plant-cloning blog post

- Published `Cloning plants, minus the science-fiction lab` as the newest field note.
- Kept the post intentionally general because no plant species, equipment, techniques, quantities, or outcomes were supplied.
- The two-post blog index now promotes the plant-cloning note and moves `Opening the notebook` into the earlier-notes archive.

## Plant-cloning blog post verification

- The blog generator builds two published posts.
- Mobile browser QA confirms the updated index and article render without horizontal overflow and with no console errors or warnings.
- The generated article contains six paragraphs and the expected Outside work and Experiments tags.

## Basketball blog post

- Published `Playing basketball lately` as a short field note about life away from software work.
- Kept the note intentionally broad because no location, teammates, schedule, competition, or game results were supplied.
- Added deterministic same-day post ordering so the newest note remains featured without assigning an inaccurate date.

## Basketball blog post verification

- The blog generator builds three published posts and features the basketball entry first.
- Mobile and desktop browser checks confirm the article renders without horizontal overflow.
- The generated article contains six paragraphs and the expected Outside work and Basketball tags.

## Interstate-travel blog post

- Published `A few state lines later` as a general field note about traveling to different states.
- Avoided inventing states, dates, routes, companions, or activities that were not supplied.
- Used same-day order 4 so the travel entry appears as the newest featured note.

## Interstate-travel blog post verification

- The blog generator builds four published posts and features the travel entry first.
- Mobile and desktop browser checks confirm the article renders without horizontal overflow.
- The generated article contains six paragraphs and the expected Travel and Outside work tags.

## Flight Sim realism UI pass

- New request: begin improving Flight Sim realism with a focused UI overhaul.
- Reframed the game as an N172GM approach-training console with a technical mission header, avionics status bar, tactile controls, instrument-style HUD readouts, and a structured preflight briefing.
- Preserved the existing WebGL scene, flight model, cameras, flight director, autopilot, and approach logic.
- Added stable CSS hooks around the screen, HUD, briefing, status message, and toolbar so the exported game can be maintained without rewriting its simulation code.
- Kept the deterministic game-state hooks available across React lifecycle cleanup so automated flight checks remain reliable.

## Flight Sim realism UI TODO

- None for the initial realism-focused UI pass.

## Flight Sim realism UI verification

- The required Playwright game client completed two deterministic flight iterations with synchronized state and no console or page errors.
- Right-bank and pitch-up inputs changed roll from 3.2 to 7.7 degrees and pitch from -0.6 to 2.0 degrees while remaining in stable active flight.
- Desktop start, active chase, active cockpit, and expanded-control states were visually inspected.
- The 390px briefing fits completely inside the display, all primary controls remain available, the compact HUD avoids desktop overlay collisions, and horizontal overflow is absent.
- `node --check` and `git diff --check` pass for the updated flight-sim files.

## Lightweight flight scenario lab

- Used the local Scenario project as architectural inspiration while keeping employer-specific integrations and data out of the public site.
- Added three selectable, deterministic sorties: Stabilized Visual, Crosswind Correction, and Engine Power Loss.
- Connected scenario selection to the real browser flight model: the crosswind profile adds a sustained lateral wind, while the emergency profile triggers a timed power loss with reduced thrust and RPM.
- Added a static Scenario Monitor Engine that evaluates telemetry-driven phases and assertions, records first-failure evidence, and reports standby, running, pass, or fail states.
- Added live IAS, altitude, vertical speed, bank, cross-track deviation, wind, engine health, and G-load telemetry alongside requirement and event streams.
- Reframed the project card as Flight Scenario Lab so the portfolio description matches the expanded experience.

## Lightweight flight scenario lab TODO

- None for the initial public-safe scenario demonstrator.

## Lightweight flight scenario lab verification

- The required Playwright game client completed deterministic crosswind and engine-loss runs with no console or page errors.
- The crosswind run produced 15.4 kt of wind; the engine-loss run triggered at 13.0 simulated seconds and exposed 12% engine health plus the emergency flight message.
- The page-level regression pass confirmed all three selectors, scenario-specific preflight copy, disabled selection during active flight, monitor phase advancement, and a passing engine-fault detection assertion.
- Full-page desktop and 390px mobile captures were visually inspected with no horizontal overflow or dead space between the simulator and monitor.
- `node --check` and `git diff --check` pass for the scenario monitor and exported simulator bundle.

## Flight scenario engine v2

- Added startup validation for duplicate scenario and assertion identifiers, unknown phases, invalid timing modes, missing evaluators, and non-positive phase or assertion durations.
- Added telemetry integrity monitoring for missing signals, unknown aircraft modes, stale packets, and non-monotonic simulation time.
- Added a distinct `INVALID` lifecycle result so corrupted test evidence is not misreported as pilot or aircraft failure.
- Added phase timeouts, complete transition records, active phase age, sample count, monitor frequency, and maximum telemetry gap tracking.
- Expanded assertion evidence with observed values, captured telemetry, pass/fail timestamps, live timing progress, and first-failure context.
- Added deterministic manual-update and catalog-validation hooks for regression testing without changing the public gameplay flow.
- Upgraded the monitor with a data-link health indicator, phase timeline, assertion progress bars, observed values, and caution-state telemetry.

## Flight scenario engine v2 verification

- Catalog validation passes for all three public scenarios.
- A synthetic stabilized approach completes all three phases and all six requirements with a `PASS` verdict.
- A crosswind run exceeds the bank limit and returns `FAIL` with `WND-102` plus the captured observation `bank 50.0 deg / limit +/-42`.
- Stale, reversed, and missing telemetry produce `INVALID` with three distinct integrity reasons while monitoring remains active.
- Holding the engine-loss scenario in its armed phase beyond 18 seconds produces `INVALID` and marks the phase timeout in the timeline.
- The real rendered engine-loss flight reaches Forced glide, detects the 12% power state, passes `ENG-101`, and records no integrity faults.
- Required Playwright game-client and page-level tests report no console errors; the 390px monitor has no horizontal overflow.

## Flight simulator visual overhaul

- Upgraded the WebGL renderer with warmer directional lighting, sky/ground ambient response, longer-distance atmospheric haze, gamma-balanced output, and per-object unlit, fog, and emissive controls.
- Added a camera-following gradient sky dome, visible sun, wind-drifting rounded cloud clusters, and clearer depth separation without changing flight physics or telemetry.
- Expanded the airport environment with runway edge lines, threshold stripes, touchdown-zone markings, scaled edge lights, green and red threshold/end lights, approach strobes, and emissive PAPI fixtures.
- Added emissive red, green, white, and landing lights to the imported aircraft while preserving the existing model and fallback rendering path.
- Replaced blank cockpit gauge circles with state-driven IAS, altitude, attitude, heading, and vertical-speed instrument faces and needles.

## Flight simulator visual verification

- The required Playwright game client completed repeated deterministic chase-view input runs with synchronized flight state and no console or page errors.
- Desktop chase and cockpit captures were visually inspected at both initial intercept and close runway range; sky banding and oversized legacy light fixtures found during QA were corrected and re-tested.
- The 390px full-page flight and Scenario Monitor layout was visually inspected with `scrollWidth === clientWidth` and no horizontal overflow.
- `node --check` passes for the exported simulator and Scenario Monitor bundles, and `git diff --check` reports no whitespace errors.

## Flight simulator visual TODO

- None for this visual pass.
