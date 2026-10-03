# Garage Bay

A single fictional, low-poly Apex GT coupe, configurable in a native WebGL workshop and driveable on a stadium circuit or measured drag strip. No downloads, accounts, paid services, or external model dependencies are needed.

## Controls

- Workshop: drag to orbit, scroll to zoom, or select a camera preset. Auto orbit is optional.
- Drive: W / up accelerates; S / down brakes, then reverses. A/D or left/right steer. Space is the handbrake.
- R restarts, P pauses, C switches chase/hood cameras, F toggles fullscreen, Escape exits fullscreen. Phone buttons support press-and-hold and release on cancellation.
- Sound is opt-in. Leaving the driving mode, pausing, switching tabs, or reaching the strip end silences the engine.

## Handling and timing

`model.js` uses SI units and a fixed 120 Hz update. Power-limited acceleration, tire traction, aerodynamic/rolling drag, speed-sensitive bicycle steering, lateral saturation, body pitch/roll, and off-road resistance are simplified gameplay models, not real vehicle specifications. Tires change grip and mass; engines change power and mass; stiffness changes response and body movement; lowering slightly reduces roll and increases grip. Race power also adds a rear wing.

The circuit requires four ordered checkpoints and a forward start-line crossing. Driving on grass invalidates that lap. The strip measures 0–60 mph and a 402.336 m quarter mile with threshold interpolation. Leaving the strip invalidates the run; the runoff stops the vehicle and keeps its results visible until restart. Bests are stored separately for each handling configuration, excluding paint and lighting.

## Saved and shared builds

- Up to eight builds live in `garage-bay-builds-v2` in localStorage. Existing `gremlin-garage-visualizer-v1` settings are read and validated without deleting the legacy record.
- Build links use a versioned, validated URL fragment containing only configuration. They work on GitHub Pages and in another browser without a backend. Loading a link does not overwrite saved cars.
- Lap/drag records remain in this browser; they are not public leaderboards. Cloud garages and authenticated records would be a separate Supabase integration, not a hidden dependency of this release.
- Invalid links, corrupt storage, storage write failures, unavailable WebGL, and WebGL context loss have visible recovery paths. No untrusted link content is inserted as HTML.

## Rendering and verification

`render.js` adapts Flight Sim's native WebGL transform/lighting pipeline and smooth chase-camera approach into an independent module. Flight Sim itself is unchanged. The scene uses procedural geometry rather than an AI-generated image so orbiting, steering, wheel rotation, paint, and suspension stay coherent in 3D.

`window.render_game_to_text()` / `render_garage_to_text()` expose synchronized state. `window.advanceTime(ms)` advances deterministic fixed steps for the bundled web-game client. `tests/garage-drive.spec.js` covers configuration, sharing between browsers, driving controls, sound, timing, lap rules, storage failures, touch, fullscreen, and screenshots.
