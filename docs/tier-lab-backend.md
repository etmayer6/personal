# Tier Lab online publishing

Tier Lab keeps its original local autosave and JSON import/export. Online publishing uses the site's Supabase project and stores a public snapshot that friends can open with a link.

## Setup

- `supabase/migrations/20261002000000_tier_lists.sql` creates the `public.tier_lists` table and its row-level security policies.
- `tier-lab/supabase-config.js` contains the project URL and its browser-safe publishable key. Never put a Supabase secret/service-role key in the website.
- Supabase Auth's site URL and redirect allowlist must include the GitHub Pages Tier Lab route. The project used for this setup also allows the local preview routes on ports 8123 and 4175.

The table is readable without signing in because every row represents a list that its owner chose to publish. Inserts, edits, and deletes require authentication and an `owner_id` matching the signed-in user. RLS stays enabled; do not grant anonymous write access.

The site owner can create an account or sign in from the Tier Lab sidebar. Email confirmation may be required before the first sign-in. A published list is read-only for everyone else; they can remix it into a separate local list.

The project's built-in email sender is limited to addresses on the Supabase organization team and two messages per hour. That's enough for the site owner's initial setup, but public account registration for friends would require configuring a custom SMTP provider; viewing shared lists does not.
