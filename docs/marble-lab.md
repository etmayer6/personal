# Marble Lab

User request: fully implement a tactile tabletop marble contraption game end to end, integrated with the personal site's playable projects.

## Play and build

Open `/marble-lab/`. The starter switchback is ready: Run releases three marbles, routes them through a funnel, rings a bell and catches them. Free build has eleven part types: wooden ramps, brass funnels, spring bumpers, conveyors, magnets, portals, bells, switches, gates, pivoting dominoes and catch cups. The marble release can move too.

Choose a part, click the table to place it, drag an existing part to move it. The inspector edits physical rotation, size and strength where applicable. Portal pairs are numbered, automatically matched on placement, and validated to contain no more than two parts. An unpaired portal stays inert with a clear inspector status. Editing resets the run so the next experiment starts consistently.

Run/Pause, Reset, extra marble releases, quarter-speed slow motion and 2× speed, trails, a 25-unit snap grid, camera pan/zoom/fit, follow and next-marble controls, and fullscreen are implemented. Extra releases are additive to the queued batch, with a maximum of 40 marbles per run. Reduced motion keeps the physics and follow camera functional but removes decorative belt motion and expanding reaction ripples.

Canvas-focused keyboard controls: arrows move the placement cursor; Enter places/selects; A selects Ramp; V selects Move; Q/E rotates; D duplicates; Delete/Backspace removes; Space runs/pauses; R resets; F toggles fullscreen; Ctrl/Cmd Z undoes and Shift redoes. Shift-drag pans; the wheel and +/− zoom. Placed-part buttons expose selection to keyboard users. Native share/new dialogs contain focus and return it to the trigger.

## Physics and challenges

`physics.js` uses a deterministic 120 Hz fixed step, adaptive spatial substeps, gravity, damping, capsule rail contacts, equal-mass marble collisions and bounded velocity. It is a playful 2D simulation, not an engineering-grade rigid-body model. Inclined ramps guide marbles; conveyors apply tangential motion; magnets attract or repel in a circular field; bumpers add an outward impulse; directional portal exits rotate velocity. Bells and switches are pass-through sensors. A switch latches all gates open until Reset. Dominoes rotate around their pivot after impact and transfer tipping motion to neighbors. A run waits for moving dominoes to settle and ends when all released marbles are caught or missed; marbles expire after 30 simulated seconds if stuck.

Three challenges persist local completion badges:

- Five-piece finish: catch all three using at most five added pieces.
- Ring, then land: all three must ring the fixed bell before reaching the cup, with at most four added pieces.
- Special delivery: all three must traverse a portal before reaching the cup beyond the divider, with at most six added pieces.

Fixed source/cup/sensor/divider geometry and allowed parts/budgets are validated on import and share decoding. Challenge releases are limited to three. Every challenge has a tested winning layout; the portal challenge is also tested entirely through visible placement controls. These are local puzzles, not competitive or server-verified achievements.

## Persistence and exports

Local draft autosaving and six named machine snapshots use guarded browser storage. Save prompts before replacing the oldest slot or an existing name. Open/import/new/mode changes disclose draft replacement. Blocked storage shows an honest warning, while play and exports remain usable. There are no accounts, paid services, uploads or new backend tables.

Share encodes a validated UTF-8 snapshot in `#machine=…`; recipients start paused and do not overwrite their draft until Keep a copy or Save. Same-page hash navigation works. Names and imported values are rendered with text nodes. JSON import/export transports the same versioned model, with finite/bounded coordinates and values, unique IDs, 60-part cap, 60 KB file cap and bounded share payloads. Exported PNGs capture the whole table at the current physics state, not a replay video. Revoked Blob URLs avoid retaining downloads in memory.

Sound is off by default. A button gesture unlocks native Web Audio; impacts and bell sensors create bounded synthesized chimes. No microphone, recordings or external samples are used. Sound can be disabled; pausing, resetting and hiding the tab stop active voices, and hidden tabs pause physics.

## Site integration and artwork

Included in Projects (Play filter and Surprise), Games, homepage Outside Work, shared favorite/played/Continue behavior, route/project test registries, sitemap and canonical/social metadata. The site now lists 26 projects and 11 games. Existing Pocket Worlds and Sound Garden additions are preserved; Resume is unchanged.

Card artwork was generated with the built-in image-generation tool, then inspected and optimized. Original: `projects/assets/marble-lab-card.png`. Production asset: `projects/assets/optimized/marble-lab-card-960.webp` (960 × 640). The runtime machine is entirely native Canvas2D; the illustration is only catalog/social artwork.

Final generation prompt:

> Use case: stylized-concept. Asset type: landscape website game and project card illustration for Marble Lab, a playful browser contraption sandbox. Subject: a compact tactile tabletop marble machine, curved and straight wooden ramps held on small wooden blocks, colorful teal and amber glass marbles rolling along the tracks, a brass funnel, coral bumper, tiny brass bell, and a receiving cup. Style: polished miniature 3D diorama, soft matte wood with fine grain, translucent glossy glass, brushed brass, simple clean toy forms. Composition: complete machine centered in a wide 3:2 landscape frame, elevated three-quarter view, generous breathing room, warm ivory and pale peach studio background. Mood: cozy, inventive, playful afternoon light, soft grounded shadows. Palette: honey wood, muted sage, teal glass, terracotta and brass. Constraints: no text, no logos, no UI, no people, no watermark, no elaborate fantasy architecture, no clutter outside the machine.

## Verification

Final combined browser run: **154/154 passed** (27 first-render, 68 site-quality, 20 Marble Lab, 13 Sound Garden, 12 Pocket Worlds, 14 existing project-behavior). Syntax validation passes for 81 JS/JSON files. Static validation passes for 49 HTML files, 42 stylesheets, 69 scripts and 26 projects. Whitespace checks pass. Desktop, phone, follow-camera, all three challenge outcomes, catalog artwork and bundled-client gameplay screenshots/state were reviewed. Production artwork is 55,440 bytes.

Twenty focused Playwright checks cover the starter catch path, paused/finished/reset outcomes, placement/rotation/size/strength, duplication/removal/history, dragging/snapping/source count, portal pair validity, challenge restrictions/failure/three wins, physical mechanism effects/fast contacts/determinism, camera/follow/slow motion/fullscreen, local saving and draft-isolated sharing, JSON/PNG exports, invalid payloads, real opt-in audio, hidden-tab pause, storage/audio denial, dialog focus, catalog/favorites/Continue integration and 320/390/768px touch layouts.

Runtime diagnostics: `render_game_to_text()`, deterministic `advanceTime(ms)`, and read-only `marbleLab.snapshot()/state()/pointScreen()`. Manual test stepping suppresses physical chimes and takes over timing; normal Run uses the live animation clock. The required bundled game client captures gameplay state/screenshots. Artifacts are outside the repository in `C:/Codex/marble-qa`.
