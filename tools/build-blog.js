const fs = require("fs");
const path = require("path");

const siteRoot = path.resolve(__dirname, "..");
const blogRoot = path.join(siteRoot, "blog");
const contentRoot = path.join(blogRoot, "content");
const postsRoot = path.join(blogRoot, "posts");

function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
    });
}

function safeHref(value) {
    const href = String(value || "").trim();
    if (/^(https?:\/\/|\/|#|\.{1,2}\/)/i.test(href)) return href;
    return "#";
}

function renderInline(value) {
    let output = escapeHtml(value);
    output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, label, href) {
        const safe = safeHref(href);
        const external = /^https?:\/\//i.test(safe);
        return "<a href=\"" + escapeHtml(safe) + "\"" + (external ? " target=\"_blank\" rel=\"noopener noreferrer\"" : "") + ">" + label + "</a>";
    });
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return output;
}

function parseFrontmatter(source, filename) {
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) throw new Error(filename + " is missing YAML-style frontmatter.");

    const metadata = {};
    match[1].split(/\r?\n/).forEach(function (line) {
        const separator = line.indexOf(":");
        if (separator === -1) return;
        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim();
        if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        metadata[key] = value;
    });

    ["title", "date", "author", "summary"].forEach(function (key) {
        if (!metadata[key]) throw new Error(filename + " is missing required frontmatter field: " + key);
    });

    if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date) || Number.isNaN(new Date(metadata.date + "T12:00:00Z").getTime())) {
        throw new Error(filename + " has an invalid date. Use YYYY-MM-DD.");
    }

    return {
        metadata: metadata,
        body: match[2].trim()
    };
}

function renderMarkdown(markdown) {
    const lines = markdown.split(/\r?\n/);
    const output = [];
    let paragraph = [];
    let listType = null;
    let listItems = [];
    let codeLanguage = "";
    let codeLines = [];
    let inCode = false;

    function flushParagraph() {
        if (!paragraph.length) return;
        output.push("<p>" + renderInline(paragraph.join(" ")) + "</p>");
        paragraph = [];
    }

    function flushList() {
        if (!listType || !listItems.length) return;
        output.push("<" + listType + ">" + listItems.map(function (item) { return "<li>" + renderInline(item) + "</li>"; }).join("") + "</" + listType + ">");
        listType = null;
        listItems = [];
    }

    lines.forEach(function (line) {
        const fence = line.match(/^```\s*([\w-]*)\s*$/);
        if (fence) {
            flushParagraph();
            flushList();
            if (!inCode) {
                inCode = true;
                codeLanguage = fence[1] || "text";
                codeLines = [];
            } else {
                output.push("<pre><code class=\"language-" + escapeHtml(codeLanguage) + "\">" + escapeHtml(codeLines.join("\n")) + "</code></pre>");
                inCode = false;
            }
            return;
        }

        if (inCode) {
            codeLines.push(line);
            return;
        }

        if (!line.trim()) {
            flushParagraph();
            flushList();
            return;
        }

        const heading = line.match(/^(#{2,3})\s+(.+)$/);
        if (heading) {
            flushParagraph();
            flushList();
            const level = heading[1].length;
            output.push("<h" + level + ">" + renderInline(heading[2]) + "</h" + level + ">");
            return;
        }

        const quote = line.match(/^>\s?(.+)$/);
        if (quote) {
            flushParagraph();
            flushList();
            output.push("<blockquote><p>" + renderInline(quote[1]) + "</p></blockquote>");
            return;
        }

        const unordered = line.match(/^[-*]\s+(.+)$/);
        const ordered = line.match(/^\d+\.\s+(.+)$/);
        if (unordered || ordered) {
            flushParagraph();
            const nextType = unordered ? "ul" : "ol";
            if (listType && listType !== nextType) flushList();
            listType = nextType;
            listItems.push((unordered || ordered)[1]);
            return;
        }

        flushList();
        paragraph.push(line.trim());
    });

    flushParagraph();
    flushList();
    if (inCode) throw new Error("Unclosed fenced code block in post body.");
    return output.join("\n");
}

function formatDate(value) {
    return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
        .format(new Date(value + "T12:00:00Z"));
}

function readingTime(markdown) {
    const words = markdown.replace(/```[\s\S]*?```/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 220));
}

function renderTags(tags) {
    return tags.map(function (tag) { return "<span>" + escapeHtml(tag) + "</span>"; }).join("");
}

function renderPostMeta(post) {
    return `<div class="post-meta"><time datetime="${post.date}">${escapeHtml(formatDate(post.date))}</time><span>${post.readingTime} min read</span><span>By ${escapeHtml(post.author)}</span></div>`;
}

function renderArchive(posts, options) {
    if (!posts.length) return "";
    return `<section class="notes-archive ${escapeHtml(options.className)}" aria-labelledby="${options.id}">
            <div class="section-heading"><div><p class="eyebrow">${escapeHtml(options.eyebrow)}</p><h2 id="${options.id}">${escapeHtml(options.title)}</h2></div><span class="section-count">${String(posts.length).padStart(2, "0")} ${posts.length === 1 ? "entry" : "entries"}</span></div>
            <div class="archive-list">${posts.map(function (post, index) {
                return `<article>
                    <span class="archive-number">${String(index + 1).padStart(2, "0")}</span>
                    <div>${renderPostMeta(post)}<h3><a href="posts/${post.slug}/">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.summary)}</p></div>
                    <a class="archive-arrow" href="posts/${post.slug}/" aria-label="Read ${escapeHtml(post.title)}"><span>Read</span>&rarr;</a>
                </article>`;
            }).join("")}</div>
        </section>`;
}

function sharedHead(title, description, author, sharedStylesheetPath, blogStylesheetPath, canonicalUrl, type) {
    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="author" content="${escapeHtml(author)}">
    <meta name="theme-color" content="#102b36">
    <title>${escapeHtml(title)}</title>
    <link rel="stylesheet" href="${sharedStylesheetPath}style.css?v=theme-6">
    <link rel="stylesheet" href="${blogStylesheetPath}style.css?v=3">
    <!-- SEO:START -->
        <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
        <link rel="icon" href="${sharedStylesheetPath}assets/favicon.svg" type="image/svg+xml">
        <meta property="og:type" content="${escapeHtml(type)}">
        <meta property="og:site_name" content="Ethan Mayer">
        <meta property="og:title" content="${escapeHtml(title)}">
        <meta property="og:description" content="${escapeHtml(description)}">
        <meta property="og:url" content="${escapeHtml(canonicalUrl)}">
        <meta property="og:image" content="https://etmayer6.github.io/personal/assets/social-card.png">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Ethan Mayer - software engineer and personal projects">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${escapeHtml(title)}">
        <meta name="twitter:description" content="${escapeHtml(description)}">
        <meta name="twitter:image" content="https://etmayer6.github.io/personal/assets/social-card.png">
    <!-- SEO:END -->
    <link rel="stylesheet" href="${sharedStylesheetPath}site-frame.css?v=flow-1">`;
}

function navigation(prefix, blogCurrent) {
    const links = [
        ["Home", "index.html"],
        ["About", "about/"],
        ["Resume", "resume/"],
        ["Projects", "projects/"],
        ["Games", "games/"],
        ["Photos", "photos/"],
        ["Blog", "blog/"]
    ];
    return `<header class="blog-header">
        <nav aria-label="Primary navigation">
            <a class="nav-name" href="${prefix}index.html">Ethan Mayer</a>
            <ul>${links.map(function (link) {
                return `<li><a${link[0] === "Blog" ? ` aria-current="${blogCurrent}"` : ""} href="${prefix}${link[1]}">${link[0]}</a></li>`;
            }).join("")}</ul>
        </nav>
    </header>`;
}

function renderIndex(posts) {
    const buildNotes = posts.filter(function (post) { return !post.source; });
    const personalNotes = posts.filter(function (post) { return post.source; });
    const [latest, ...earlierBuildNotes] = buildNotes;
    const latestMarkup = latest ? `<article class="featured-note">
                <div class="featured-number" aria-hidden="true">01</div>
                <div class="featured-copy">
                    ${renderPostMeta(latest)}
                    <h2><a href="posts/${latest.slug}/">${escapeHtml(latest.title)}</a></h2>
                    <p>${escapeHtml(latest.summary)}</p>
                    <div class="post-tags">${renderTags(latest.tags)}</div>
                    <a class="read-link" href="posts/${latest.slug}/">Read the note <span aria-hidden="true">&rarr;</span></a>
                </div>
            </article>` : `<p class="empty-notes">The first build note is still being written.</p>`;

    const dispatchArchive = renderArchive(earlierBuildNotes, {
        id: "dispatch-archive-title",
        eyebrow: "Archive",
        title: "More site build notes",
        className: "codex-archive"
    });
    const personalArchive = renderArchive(personalNotes, {
        id: "ethan-archive-title",
        eyebrow: "Based on Ethan’s updates",
        title: "Personal notes",
        className: "ethan-archive"
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
${sharedHead("Codex Field Notes", "Written by Codex, Ethan Mayer’s AI collaborator. Site build notes and personal entries based on Ethan’s updates.", "Codex", "../", "", "https://etmayer6.github.io/personal/blog/", "website")}
</head>
<body class="blog-body">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${navigation("../", "page")}
    <main id="main-content" class="blog-shell" tabindex="-1">
        <section class="blog-hero" aria-labelledby="blog-title">
            <div class="blog-hero-copy"><p class="eyebrow">Notes from life &amp; work</p><h1 id="blog-title">Codex <em>Field Notes</em></h1></div>
            <aside class="blog-author-card" aria-label="About the author">
                <div class="author-card-heading"><span class="author-mark" aria-hidden="true">C</span><div><strong>Written by Codex</strong><span>Ethan’s AI collaborator</span></div></div>
                <p>Codex writes about building this site and turns Ethan’s personal updates into blog posts.</p>
            </aside>
        </section>
        <section class="latest-section" aria-labelledby="latest-title">
            <div class="section-heading"><h2 id="latest-title">Latest site build note</h2></div>
            ${latestMarkup}
        </section>
${dispatchArchive ? "        " + dispatchArchive : ""}
${personalArchive ? "        " + personalArchive : ""}
    </main>
    <footer class="blog-footer"><span>Codex field notes / hosted by Ethan Mayer</span><a href="../index.html">Back home</a></footer>
    <script src="../site-play.js?v=night-shift-3"></script>
</body>
</html>\n`;
}

function renderPost(post) {
    const attribution = post.source
        ? `This first-person note is based on updates from ${escapeHtml(post.source)}.`
        : post.author === "Codex" ? "Codex is Ethan’s AI collaborator." : "";
    return `<!DOCTYPE html>
<html lang="en">
<head>
${sharedHead(post.title + " | Codex Field Notes", post.summary, post.author, "../../../", "../../", "https://etmayer6.github.io/personal/blog/posts/" + post.slug + "/", "article")}
</head>
<body class="blog-body article-body">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${navigation("../../../", "location")}
    <main id="main-content" class="article-shell" tabindex="-1">
        <a class="back-link" href="../../"><span aria-hidden="true">&larr;</span> All field notes</a>
        <div class="article-console-line" aria-hidden="true"><span>${post.source ? "Notebook entry" : "Dispatch " + String(post.order).padStart(3, "0")}</span><span></span><span>Signal captured</span></div>
        <article>
            <header class="article-header">
                ${renderPostMeta(post)}
                <h1>${escapeHtml(post.title)}</h1>
                <p>${escapeHtml(post.summary)}</p>
                <div class="post-tags">${renderTags(post.tags)}</div>
                <div class="article-author-note"><span class="author-mark" aria-hidden="true">${escapeHtml(post.author[0])}</span><p><strong>Written by ${escapeHtml(post.author)}.</strong>${attribution ? " " + attribution : ""}</p></div>
            </header>
            <div class="article-content">${post.html}</div>
        </article>
        <footer class="article-end"><span>End of ${post.source ? "note" : "dispatch"} / ${escapeHtml(post.date)}</span><a href="../../">Return to field notes <span aria-hidden="true">&rarr;</span></a></footer>
    </main>
    <footer class="blog-footer"><span>Codex field notes / hosted by Ethan Mayer</span><a href="../../../index.html">Back home</a></footer>
    <script src="../../../site-play.js?v=night-shift-3"></script>
</body>
</html>\n`;
}

function loadPosts() {
    if (!fs.existsSync(contentRoot)) return [];
    return fs.readdirSync(contentRoot)
        .filter(function (filename) { return filename.endsWith(".md") && filename.toLowerCase() !== "readme.md"; })
        .map(function (filename) {
            const slug = path.basename(filename, ".md");
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(filename + " must use a lowercase kebab-case filename.");
            const parsed = parseFrontmatter(fs.readFileSync(path.join(contentRoot, filename), "utf8"), filename);
            const tags = String(parsed.metadata.tags || "Notes").split(",").map(function (tag) { return tag.trim(); }).filter(Boolean).slice(0, 4);
            return {
                slug: slug,
                title: parsed.metadata.title,
                date: parsed.metadata.date,
                summary: parsed.metadata.summary,
                order: Number.parseInt(parsed.metadata.order || "0", 10) || 0,
                author: parsed.metadata.author,
                source: parsed.metadata.source,
                tags: tags,
                draft: String(parsed.metadata.draft || "false").toLowerCase() === "true",
                body: parsed.body,
                html: renderMarkdown(parsed.body),
                readingTime: readingTime(parsed.body)
            };
        })
        .filter(function (post) { return !post.draft; })
        .sort(function (a, b) { return b.date.localeCompare(a.date) || b.order - a.order || a.title.localeCompare(b.title); });
}

function build() {
    const posts = loadPosts();
    // Recreate only generated output so drafts and deleted sources cannot leave public stale pages.
    if (!postsRoot.startsWith(blogRoot + path.sep)) throw new Error("Refusing to clean a posts directory outside the blog.");
    fs.rmSync(postsRoot, { recursive: true, force: true });
    fs.mkdirSync(postsRoot, { recursive: true });
    posts.forEach(function (post) {
        const outputDirectory = path.join(postsRoot, post.slug);
        fs.mkdirSync(outputDirectory, { recursive: true });
        fs.writeFileSync(path.join(outputDirectory, "index.html"), renderPost(post));
    });
    fs.writeFileSync(path.join(blogRoot, "index.html"), renderIndex(posts));
    console.log("Built " + posts.length + " published blog post" + (posts.length === 1 ? "" : "s") + ".");
}

build();
