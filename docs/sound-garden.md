# Sound Garden

User request: “New up lets do the sound garden where we place objects that produce musical patterns, creating a little animated composition.”

A local-first musical playground at `/sound-garden/`. No account, paid service, third-party sample library or new backend schema is required. Existing Pocket Worlds work is preserved.

## Compose

- Plant bellflowers (glass-like additive bells), wind reeds (triangle/sine plucks), bass stones (warm synth bass), seed drums (pitch-swept percussion), and shaker ferns (filtered deterministic noise).
- Each object has an editable 16-step pattern, loudness and mute. Up to 24 objects, one per garden space. Rhythm presets include steady beats, offbeats, syncopation, sparse notes and eighth notes.
- Drag an object across the garden to shift its start phase; drag along the depth axis to change its pentatonic note. Percussion is unpitched. All pitched objects share the chosen C/D/F/G/A major or minor pentatonic scale.
- Set tempo (50–160 BPM), swing (0–40%), mood, key and monitoring volume. A 25 ms lookahead scheduler uses the audio clock, schedules notes 100 ms ahead, and drives the visual beat/ripple events from those same timestamps. Edits reschedule from the next step, not an unrelated second clock.
- Play is always opt-in. Opening a shared composition never starts audio. Pause/restart cancel scheduled voices with short gain fades. Master mute leaves the visual transport running. Hiding or leaving the page stops playback.
- 1–5 choose an instrument, 6 chooses Move; arrows select a garden space, Enter plants/selects, Delete removes the selected object, Space plays/pauses, F toggles fullscreen, Ctrl/Cmd Z and Ctrl/Cmd Shift Z undo/redo. Shortcuts only run with canvas focus. Object chips and rhythm buttons provide ordinary keyboard-accessible editing.
- Reduced motion removes decorative swaying/bouncing and expanding ripples; restrained beat highlights still show which sound is playing.

## Keep and share

Draft autosave and six named snapshots are local to the browser. Clear/new/open/import actions disclose replacement of the draft. Saving a seventh snapshot asks before dropping the oldest. Export JSON for portable editable backups. Shared URL fragments contain validated snapshots; recipient edits do not replace their own local draft until they save/keep a copy. Later sender edits don't change an old link. Same-page hash navigation is handled.

Download WAV uses the same voices and swing timing in an OfflineAudioContext: two bars at 44.1 kHz, stereo 16-bit PCM, followed by 1.25 seconds of ring-out. It is a recording with a tail, not a gapless loop file. Monitoring mute does not mute the export; the volume slider sets its level. Empty/silent gardens are not exported. No audio is recorded from a microphone or uploaded.

Unavailable Web Audio produces an explicit visual-only playback status. Denied/full storage suggests exporting; invalid JSON/share data does not replace the current composition. WAV export reports unsupported offline rendering rather than claiming success.

## Integration and artwork

Projects playable workbench (Play filter and Surprise), Games, homepage Outside Work, favorites/played/Continue state, route/project registries, sitemap and social/canonical metadata. There are now 25 projects and 10 listed games. Travel Map remains featured; Resume is untouched.

Card illustration generated with the built-in image-generation tool. Source: `projects/assets/sound-garden-card.png`. Final shared web asset: `projects/assets/optimized/sound-garden-card-960.webp` (960×640). The playable instruments and animation are code-native Canvas2D, not a generated bitmap.

Final prompt:

> Use case: stylized-concept. Asset type: landscape website game/project card artwork for Sound Garden, a miniature music-making browser toy. Subject: a small rectangular isometric garden bed with a few sculptural musical plants: warm coral and golden bell-shaped flowers on slender green stems, teal hollow reeds, smooth rose-colored resonant stones, a tiny terracotta seed-pod drum, and soft sage fern leaves. Delicate concentric golden sound ripples connect the objects as if the garden is quietly playing. Style: polished clay-like miniature 3D diorama with clean simple forms, restrained low-poly details, soft shadows and tactile matte materials. Composition: entire compact garden centered, elevated three-quarter view, wide 3:2 landscape frame, generous breathing room. Background warm ivory and pale peach, muted sage foliage, teal reeds, honey-gold and terracotta accents. Mood: cozy, playful, calm afternoon light. Constraints: no text, no logos, no UI, no people, no grand piano or full-size instruments, no watermark, no elaborate fantasy architecture.

Optimization: `node tools/optimize-images.cjs --only projects/assets/sound-garden-card.png`.

## Verification

Final combined run: 132/132 browser checks passed, covering Sound Garden, Pocket Worlds, first render, site quality and existing project behavior. Syntax/static validation and whitespace checks pass. Final desktop, phone, catalog and bundled-client screenshots were visually reviewed.

`tests/sound-garden.spec.js` covers opt-in real audio scheduling; pause/mute; instruments, rhythm presets and levels; pointer relocation and occupied spots; keyboard/undo; scale/tempo/swing; deterministic transport; local persistence and draft-isolated sharing; actual WAV samples and all five synthesis voices; import/export/caps and malformed inputs; audio/storage fallback; fullscreen/dialog focus; catalog/homepage/favorite/Continue behavior; narrow touch layouts. Required bundled game-client runs capture gameplay screenshots and state. Additional first-render/site-quality/project and Pocket Worlds regressions protect the rest of the site.

Runtime hooks: `render_game_to_text()`, `advanceTime(ms)` and read-only `soundGarden.snapshot()/cellScreen()/audioDiagnostics()`. Manual-time stepping intentionally stops physical audio scheduling and advances the visual transport deterministically for tests; normal playback always uses the real audio clock.
