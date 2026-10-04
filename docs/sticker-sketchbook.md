# Sticker Sketchbook

A shared paper album at `/sketchbook/`, listed under Projects → Make and linked from the homepage. This is a community contribution tool, not another game. The original local Idea Whiteboard stays unchanged and private to each browser.

## Interaction

- Choose one of twelve original code-native illustrations and five inks. A private preview never appears on the shared page until the server confirms a contribution.
- The server assigns an isolated, permuted slot on a twelve-sticker page. Visitors cannot choose position, size, rotation, adjacency, layering, or background.
- Browse earlier/latest pages, copy a page link, and export a real PNG. Shared pages refresh once a minute only while visible and connected; manual refresh is available.
- A browser guest pass can post three stickers per UTC day, sixty seconds apart. Undo soft-hides only that pass's own sticker without reclaiming its slot or allowance.
- Network failure preserves the selection and last loaded page. A persistent request UUID makes retries idempotent, including after reload. No fake public sample contributions are seeded.

## Backend and deployment

Activation status (2026-10-03): local implementation and PostgreSQL checks are complete, but the cloud migration has **not** been applied. The live read-only endpoint still returns `PGRST202` (missing function). Chrome browser automation could not connect to the user's signed-in session; the available in-app Supabase tab is still on sign-in. Apply the saved migration after obtaining a usable authenticated session, then verify the live RPCs. Do not claim shared publishing is live until that step is complete.

The page reuses the browser-safe project URL and publishable key in `tier-lab/supabase-config.js`. No service-role key, management credential, AI key, email, or database password is included. The existing Tier Lab sessions and auth configuration are not changed. Anonymous Supabase Auth accounts are not needed.

Apply `supabase/migrations/20261003000000_sticker_sketchbook.sql` to the existing Supabase project using the SQL Editor (or an already-authorized migration workflow). It is transactional and rerunnable. It creates only the sketchbook's new private schema, three tables, and four constrained public RPCs:

| RPC | Purpose |
| --- | --- |
| `sketchbook_read(p_page)` | Safe public album metadata and one page of approved sticker IDs/inks. `-1` requests latest. |
| `sketchbook_guest()` | Issue a random guest capability; store only its SHA-256 digest. |
| `sketchbook_place(p_token,p_sticker,p_ink,p_request)` | Validate choices, lock and enforce quotas, assign a slot, return a receipt. |
| `sketchbook_undo(p_token,p_id)` | Soft-hide an owned sticker; cannot remove another guest's contribution. |

Tables are in an unexposed private schema with RLS enabled and all direct anon/authenticated privileges revoked. Definer functions use an empty search path. Public reads expose neither guest hashes nor request IDs. The guest token is a narrowly scoped browser capability, not a Supabase administrator credential.

The initial site displays an honest unavailable state if the migration has not been applied; it does not pretend local storage is a live community. Once installed, verify `sketchbook_read` returns a page, then verify a contribution is visible in an independent browser and cooldown/unsafe-input requests are refused. Do not expose the private schema in the Data API settings.

## Cost and abuse limits

No paid service, vision/moderation API, billing change, storage upload, SMTP service, or subscription is required. Existing free hosting/database quotas still apply; this is not unlimited capacity.

Server-enforced bounds: 60 new passes/hour, 200/day, 12,000 passes total, 300 contributions/day (including subsequently hidden stickers), and 6,000 total contribution slots. Limits fail closed, preserving readable pages. Creating fresh browser passes can bypass the per-pass limit, but not the shared caps. Bots can exhaust the shared caps; this deliberately avoids claiming CAPTCHA-grade identity protection or perfect moderation.

Approved artwork and separate slots remove the unrestricted user-content channel. This substantially reduces offensive-content opportunities but is not an absolute guarantee against objectionable interpretations or coordinated abuse. There is no public freeform text, nickname, URL, SVG, image upload, or drawing input. Changing the sticker catalog requires editing both the frontend catalog and the database allowlists.

## Owner controls

Use the authenticated Supabase SQL Editor, not a public client-side admin flag. Pause new contributions reversibly:

```sql
update sketchbook_private.settings set accepting = false where singleton;
```

Resume by setting `accepting = true`. For a specific known contribution UUID, soft-hide or restore it (inspect the exact row first):

```sql
select id, sticker, ink, position, hidden
from sketchbook_private.stickers where id = '<contribution-uuid>'::uuid;
update sketchbook_private.stickers set hidden = true
where id = '<contribution-uuid>'::uuid;
```

Restoring sets `hidden = false`. Never reset the sequence/counters to recycle removed spaces. Guest passes are not public and should not be pasted into logs or shared links.

## Verification

`tests/sketchbook.spec.js` covers previews/drafts, shared viewing, idempotent network retries, constrained payloads, hostile response filtering, cooldown-preserving undo, pagination, disconnection/recovery, server refusal handling, pause, PNG output, site discovery, and screenshots at 320/390/768/1440 px.

`tools/check-sketchbook-db.cjs` executes the real SQL migration in a disposable PostgreSQL/PGlite runtime, including rerun, raw-table denial under both public roles, invalid/null inputs, wrong capabilities, retries, ownership, cooldowns, daily rollover, page slot uniqueness, global caps and pause/full behavior. Install the free test-only runtime outside the repository; it is not a production dependency:

```text
node tools/check-sketchbook-db.cjs C:/Codex/sketchbook-qa/sql-runtime/node_modules/@electric-sql/pglite
node tools/run-playwright.cjs tests/sketchbook.spec.js --workers=1
```

Browser fixtures are clearly test-only and are never loaded by the live site. Local SQL tests do not prove the cloud migration is installed; cloud activation must be verified separately.
