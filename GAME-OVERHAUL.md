# Game overhaul

Original prompt: A lot of the game pages like block blast and word sort are visually laid out poorly, the games themselves don't play smoothly. I want you to do a big rehaul of these games to professionalize them to a higher standard.

## Baseline findings — September 6, 2026

- Both supplied desktop screenshots cut off the lower play area. Block Blast's piece tray and start control are below the visible screen; Word Sort's lower tableau is below it.
- The source games live in `C:/Codex/Gremlin_Hub/clawd-ui/apps/web/src/components/BlockBlastPage.tsx` and `WordSolitairePage.tsx`. The public site consumes standalone exports. Changes must be verified in the public wrapper as well as the source app.
- Block Blast currently budgets a fixed 980-pixel canvas height on ordinary desktop windows, independent of viewport height. That creates a concrete first-screen usability problem.
- The public Block Blast wrapper reorders children using `nth-of-type` selectors. This depends on the component's internal markup and must be replaced with explicit layout hooks.
- Existing changes in both repositories belong to the user and must be preserved.

## Acceptance checks

- At desktop and phone sizes, starting a game, reading the board, selecting pieces/cards, and reaching essential controls work without searching below the board.
- Word Sort card labels remain readable; layout changes must not merely shrink the entire tall canvas to illegible text.
- Block Blast supports accurate drag previews, valid placement, rejected placement, cancellation, line clearing, scoring, and restart.
- Word Sort supports drawing, selecting, dragging, moving clue stacks, category completion, undo/restart, and end states with understandable feedback.
- Fullscreen and resize preserve input coordinates and progress.
- Verify actual screenshots and `render_game_to_text` state using the web-game browser client, then rebuild and test the public exports.

## Status

First public layout pass implemented in `game-layout.css`. Desktop uses a control column beside a viewport-height board; phone controls wrap above the board. Both public HTML entrypoints load it. Corrected Word Sort's misleading four-by-four loading instructions.

Browser checks at 1280x800 and 390x844: both games start, no page errors or horizontal overflow; entire boards fit in the viewport after reducing mobile chrome. Screenshots and state are in `C:/Codex/Gremlin_Hub/clawd-ui/output/overhaul-layout`. The existing web-game action client also ran on both public pages.

## Source and interaction pass

- Preserved the newer public game implementations as buildable `BlockBlastGame.jsx` and `WordSortGame.jsx` modules in the existing web project. Public export entrypoints now use those modules. Original older components remain intact. The recovered modules still need naming/dead-code cleanup before they are pleasant to maintain.
- Word Sort has a dedicated phone layout with full-width category slots, wider cards, larger wrapped text, and matching hit areas. Icon-only cards retain their puzzle icons. Its canvas animations no longer clone game state and rerender the React controls every frame; elapsed time uses the animation timestamp.
- Block Blast now detects drag movement using screen coordinates. A stationary finger can no longer be treated as a drag when status text changes the canvas position. Tray taps select without placing. Removed delayed phone auto-scroll and stabilized status height. Added lost-capture cleanup and native-fullscreen Escape handling.
- Both public exports rebuilt successfully. The web TypeScript/build gate passed after Word Sort recovery; another build covers the Block Blast source addition.
- `tools/overhaul-word-interactions.cjs` passes touch clue placement, matching-word movement, draw/undo, resize persistence, fullscreen entry/exit, and zero idle control mutations.
- `tools/overhaul-block-interactions.cjs` passes repeated tray taps, board taps, mouse drag, line clear, Escape deselection, gameover/restart, and fullscreen on 390px and 1280px viewports.
- Required game-client runs and screenshots are in the web project's `output/overhaul-block-source`, `output/overhaul-word-readable`, and `output/overhaul-*-interactions` folders.

## Final verification — September 6, 2026

- `tools/finish-game-audit.cjs` passes Word Sort won/lost recovery, a real three-card foundation stack move, invalid-move stability, and phone/desktop screenshots.
- The final required web-game action-client runs pass against both public exports; fresh state JSON and screenshots are in `output/finish-game-audit/word-client` and `output/finish-game-audit/block-client`.
- The final interaction regression remains green after the audit-script cleanup, and the full `npm run build -w @clawd/web` gate passes (`tsc -b` plus Vite production build).
- Visual inspection confirms the board, controls, and tray/tableau are visible and readable at 390x844 and 1280x800. No deployment was performed.

The focused Block Blast and Word Sort overhaul is complete. Future polish can include naming cleanup in the recovered export modules, additional narrow/landscape snapshots, and applying the same layout audit to other game pages; these are follow-up improvements rather than blockers for the completed pass.
