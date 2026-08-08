const fs = require("fs");
const path = require("path");
const { CANONICAL_OVERRIDES, NO_INDEX_ROUTES, SITE_NAME, SITE_URL, SOCIAL_IMAGE } = require("./seo-config.cjs");

const SITE_ROOT = path.resolve(__dirname, "..");
const SEO_START = "<!-- SEO:START -->";
const SEO_END = "<!-- SEO:END -->";
const DEFAULT_DESCRIPTION = `${SITE_NAME}'s personal site: software engineering work, browser experiments, photos, and field notes.`;

function walk(directory, files = []) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.isDirectory() && [".git", "node_modules", "output"].includes(entry.name)) continue;
        const filePath = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(filePath, files);
        else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) files.push(filePath);
    }
    return files;
}

function routeForFile(filePath) {
    const relative = path.relative(SITE_ROOT, filePath).replaceAll(path.sep, "/");
    if (relative === "index.html") return "/";
    if (relative === "404.html") return "/404.html";
    if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
    return `/${relative}`;
}

function decodeEntities(value) {
    return value
        .replaceAll("&amp;", "&")
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'")
        .replaceAll("&apos;", "'")
        .replaceAll("&middot;", "·")
        .replaceAll("&ndash;", "-")
        .replaceAll("&mdash;", "-")
        .replaceAll("&rsquo;", "'")
        .replaceAll("&ldquo;", '"')
        .replaceAll("&rdquo;", '"')
        .replaceAll("&nearr;", "↗")
        .replaceAll("&rarr;", "->");
}

function escapeAttribute(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function extractTitle(source) {
    const match = source.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
    return decodeEntities((match?.[1] || SITE_NAME).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
}

function extractDescription(source) {
    const tag = source.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)?.[0];
    const match = tag?.match(/\bcontent=(['"])(.*?)\1/i);
    return decodeEntities((match?.[2] || DEFAULT_DESCRIPTION).replace(/\s+/g, " ").trim());
}

function relativeAsset(filePath, assetPath) {
    return path.relative(path.dirname(filePath), assetPath).replaceAll(path.sep, "/");
}

function buildMetadata(filePath, source) {
    const route = routeForFile(filePath);
    const title = extractTitle(source);
    const description = extractDescription(source);
    const isNotFound = route === "/404.html";
    const noIndex = NO_INDEX_ROUTES.has(route);
    const canonicalRoute = CANONICAL_OVERRIDES.get(route) || route;
    const iconHref = relativeAsset(filePath, path.join(SITE_ROOT, "assets", "favicon.svg"));
    const canonical = `${SITE_URL}${canonicalRoute}`;
    const values = {
        canonical: escapeAttribute(canonical),
        description: escapeAttribute(description),
        iconHref: escapeAttribute(iconHref),
        image: escapeAttribute(SOCIAL_IMAGE),
        siteName: escapeAttribute(SITE_NAME),
        title: escapeAttribute(title)
    };
    const lines = [SEO_START];
    if (!isNotFound) lines.push(`    <link rel="canonical" href="${values.canonical}">`);
    lines.push(`    <link rel="icon" href="${values.iconHref}" type="image/svg+xml">`);
    lines.push(`    <meta property="og:type" content="${route.startsWith("/blog/posts/") ? "article" : "website"}">`);
    lines.push(`    <meta property="og:site_name" content="${values.siteName}">`);
    lines.push(`    <meta property="og:title" content="${values.title}">`);
    lines.push(`    <meta property="og:description" content="${values.description}">`);
    if (!isNotFound) lines.push(`    <meta property="og:url" content="${values.canonical}">`);
    lines.push(`    <meta property="og:image" content="${values.image}">`);
    lines.push('    <meta property="og:image:type" content="image/png">');
    lines.push('    <meta property="og:image:width" content="1200">');
    lines.push('    <meta property="og:image:height" content="630">');
    lines.push('    <meta property="og:image:alt" content="Ethan Mayer - software engineer and personal projects">');
    lines.push('    <meta name="twitter:card" content="summary_large_image">');
    lines.push(`    <meta name="twitter:title" content="${values.title}">`);
    lines.push(`    <meta name="twitter:description" content="${values.description}">`);
    lines.push(`    <meta name="twitter:image" content="${values.image}">`);
    if (noIndex) lines.push('    <meta name="robots" content="noindex, follow">');
    lines.push(SEO_END);
    return lines.join("\n");
}

function applyMetadata(filePath) {
    const source = fs.readFileSync(filePath, "utf8");
    const metadata = buildMetadata(filePath, source);
    const marker = new RegExp(`\\s*${SEO_START}[\\s\\S]*?${SEO_END}`, "i");
    const updated = marker.test(source)
        ? source.replace(marker, `\n    ${metadata.replaceAll("\n", "\n    ")}`)
        : source.replace(/<\/head>/i, `    ${metadata.replaceAll("\n", "\n    ")}\n</head>`);
    if (updated !== source) fs.writeFileSync(filePath, updated);
    return routeForFile(filePath);
}

function buildSitemap(routes) {
    const urls = routes
        .filter((route) => !NO_INDEX_ROUTES.has(route))
        .sort()
        .map((route) => `    <url>\n        <loc>${SITE_URL}${route}</loc>\n    </url>`)
        .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const htmlFiles = walk(SITE_ROOT);
const routes = htmlFiles.map(applyMetadata);
fs.writeFileSync(path.join(SITE_ROOT, "sitemap.xml"), buildSitemap(routes));
fs.writeFileSync(
    path.join(SITE_ROOT, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
);
console.log(`SEO metadata updated for ${htmlFiles.length} HTML files; sitemap contains ${routes.filter((route) => !NO_INDEX_ROUTES.has(route)).length} routes.`);
