# personal
Personal Projects

## Quality checks

Run the complete static-site quality suite with one command:

```bash
npm run check
```

This validates JavaScript and JSON syntax, local links and assets, duplicate HTML IDs, project registry counts, first renders, route responses, rendered internal links, accessibility basics, keyboard focus, dialog focus management, reduced motion, featured demo interactions, and horizontal overflow at 320px, 390px, 768px, and 1440px. The Playwright checks use deterministic fixtures and do not require private secrets or live API credentials.

Run `npm run audit:assets` for the tracked/deployable inventory, `npm run images:optimize` for cached WebP generation, and `npm run measure:performance -- --label local` for the representative transfer, request, LCP, CLS, and interaction report. See `docs/asset-performance.md` for the workflow and measured before/after results.

Run `npm run social:build` to regenerate the 1200x630 social preview from `assets/social-card.svg`, then run `npm run seo:build` after changing page titles, descriptions, or the public base URL. The SEO build updates canonical/Open Graph/Twitter metadata, `sitemap.xml`, and `robots.txt`; change `SITE_URL` in `tools/seo-config.cjs` when the site moves to a custom domain.
