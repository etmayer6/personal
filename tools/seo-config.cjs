const SITE_URL = "https://etmayer6.github.io/personal";
const SITE_NAME = "Ethan Mayer";
const SOCIAL_IMAGE = `${SITE_URL}/assets/social-card.png`;
const CANONICAL_OVERRIDES = new Map([
    ["/scenario-lab/", "/flight-sim/"]
]);

// These routes are intentionally reachable by URL but should not compete with
// the public portfolio pages in search results.
const NO_INDEX_ROUTES = new Set([
    "/404.html",
    "/calendar/",
    "/gremlindex/",
    "/molly/",
    "/night-shift/",
    "/scenario-lab/"
]);

module.exports = {
    CANONICAL_OVERRIDES,
    NO_INDEX_ROUTES,
    SITE_NAME,
    SITE_URL,
    SOCIAL_IMAGE
};
