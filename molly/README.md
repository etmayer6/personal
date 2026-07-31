# Molly Studio content guide

The public page lives at `/personal/molly/`. It is intentionally not linked from the main personal-site navigation.

## Add real work

Edit `data.js`. Each shop entry supports:

- `title`, `category`, `medium`, `size`, `year`, `status`, and `description`
- `price` as a number, or `null` while pricing is unavailable
- `image` as a path relative to `molly/index.html`, such as `images/my-painting.webp`
- `artClass` as the colorful fallback shown until an image is supplied

Archive and school-project entries use the same `image` fallback behavior.

Keep optimized artwork images in `molly/images/`. WebP files around 1600 pixels on their longest side are a practical starting point for this layout.

## Open sales

Set `contactEmail` in `data.js` to Molly's public sales email. The inquiry bag will then open a prepared email containing the selected artwork. Until an email is configured, it copies the inquiry text and clearly identifies the store as a preview.

Direct checkout links can be added later after Molly chooses a payment provider. Do not put payment secrets or private API keys in this static repository.
