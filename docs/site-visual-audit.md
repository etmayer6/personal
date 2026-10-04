# Visual flow audit — October 3, 2026

## Scope

Rendered 47 routes at 1440 × 1000, inspected six contact sheets, and reviewed full-page captures of Home, About, Projects, Games and Blog. Rechecked the changed landing pages individually at desktop, 768 px and 390 px. Resume was excluded from visual changes; its HTML hash was compared before and after. Actual game mechanics, saved data, backend configuration and private project access were left alone.

The direction is still cream paper, dark teal, rust accents, editorial serif headings and playful project imagery. This is a place to explore, not a generic hiring portfolio. Existing pictures were effective; layout and hierarchy were the higher-value fixes.

## High-priority findings and fixes

| Finding | Resolution |
| --- | --- |
| Newly added projects had light headers, different navigation sizes and inconsistent selected states. | A last-loaded, scoped `site-frame.css` gives all 39 primary-navigation pages the same 68 px desktop frame, spacing, colors and focus treatment. Compact app headers stay compact. Resume does not load this stylesheet. |
| Projects gave CourseFlow most of the space and squeezed Flight Sim and Travel Map into narrow half-cards. | Three equal, image-first cards with 210 px artwork, legible titles and aligned primary actions. Removed redundant CourseFlow instructions. The project index remains at the bottom as requested. |
| The games catalog alternated enormous features and cramped side cards. Pinpoint's status text was nearly invisible against its light background. | One three-column catalog for all eleven games, consistent image and text areas, smaller hover movement and readable status colors. Favorites, remembered progress and launch links are unchanged. |
| Homepage discovery repeated nine links in an oversized dark panel. | Four destinations instead of a second project index; equal-sized featured cards, shorter descriptions, smaller vertical gaps and Projects as the first hero action. Individual toys remain discoverable from Projects and Games. |
| Blog introductions and its featured post displaced the actual reading choices. Faux signal bars and duplicate totals created noise. | Smaller hero and featured-title scale, less padding and shallower decorative shadows. Removed fake telemetry and duplicate totals, but retained explicit AI authorship and all articles. |
| Photos delayed the images behind excess chapter spacing and had no direct route back to the map. | Tighter chapter headers and a Travel Map link in the gallery toolbar. Titles-only captions and the gallery's dark identity remain. |
| Photos moved focus to the site header on initial render and every mode change. | Closing an already-closed dialog now does nothing. One close handler restores focus only after an actual viewer session. Keyboard users keep focus on the selected gallery mode. |
| The shared sketchbook was advertised as ready for contributions while the real album showed unavailable during the audit. | Homepage and Projects explicitly identify it as a preview and invite trying the sticker tray. No fake community artwork was added, and no backend or billing changes were made. |

## Observed desktop results

At 1440 px, full-page captures measured the following heights (content and all destinations retained, except deliberately removed duplicate discovery links and decoration):

| Page | Before | After |
| --- | ---: | ---: |
| Home | 3030 px | 2385 px |
| Games | 4616 px | 2544 px |
| Blog | 3742 px | 3143 px |
| About | 1957 px | 1765 px |
| Photos | 4775 px | 4313 px |
| Projects | 6091 px | 5636 px |

The reduction is mostly excess framing, not smaller body text. Game status labels were increased to 11 px and made fully opaque.

## Verification and follow-ups

`tests/site-flow.spec.js` checks the shared navigation across every eligible route, featured card geometry, all eleven game cards and their status colors, persistent favorites, homepage destinations, clear AI authorship, and gallery focus/map discovery. It runs with `npm run test:quality` and the existing CI quality workflow. Entrance animations are allowed to settle before geometry is measured.

The broader suites cover first renders, four-width overflow, keyboard focus/dialogs, project filters, whole-card navigation, saved configurations, flight controls, travel layers and shared-feature behavior. Supabase fixtures in those tests are test-only and do not prove the real shared album is activated.

The static/syntax checkers now exclude Playwright's generated reports and traces. These copies of pages have relocated relative URLs and were producing false broken-link failures when validation ran alongside browser tests; source pages are still checked normally.

Remaining work is feature readiness rather than more landing-page decoration: verify and activate the shared sketchbook backend before removing its preview labels; review stale listing/data sources separately. Some dense engineering tools intentionally retain their own product-like interface. They should not be made to look like identical landing pages.

Local visual evidence is saved outside the repository at `C:/Codex/site-flow-qa/`: `before/`, `after/` (all-route contact sheets) and `final/` (individual landing-page screenshots and measurements). Changes are local; this audit did not commit or push.
