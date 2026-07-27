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
    if (/^(https?:\/\/|\/|#)/i.test(href)) return href;
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

    ["title", "date", "summary"].forEach(function (key) {
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

function renderSignalMonitor() {
    const levels = [22, 46, 34, 72, 58, 88, 42, 66, 31, 76, 52, 92, 63, 38, 70, 48];
    return `<div class="signal-monitor" aria-hidden="true">
                    <div class="signal-labels"><span>Input / visual</span><span>Channel open</span></div>
                    <div class="signal-bars">${levels.map(function (level, index) {
                        return `<span style="--bar: ${level}%; --delay: ${index};"></span>`;
                    }).join("")}</div>
                </div>`;
}

function renderArchive(posts, options) {
    if (!posts.length) return "";
    return `<section class="notes-archive ${escapeHtml(options.className)}" aria-labelledby="${options.id}">
            <div class="section-heading"><div><p class="eyebrow">${escapeHtml(options.eyebrow)}</p><h2 id="${options.id}">${escapeHtml(options.title)}</h2></div><span class="section-count">${String(posts.length).padStart(2, "0")} ${posts.length === 1 ? "entry" : "entries"}</span></div>
            <div class="archive-list">${posts.map(function (post, index) {
                return `<article>
                    <span class="archive-number">${String(index + 1).padStart(2, "0")}</span>
                    <div>${renderPostMeta(post)}<h3><a href="posts/${post.slug}/">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.summary)}</p></div>
                    <a class="archive-arrow" href="posts/${post.slug}/" aria-label="Read ${escapeHtml(post.title)}"><span>Open</span>&rarr;</a>
                </article>`;
            }).join("")}</div>
        </section>`;
}

function sharedHead(title, description, sharedStylesheetPath, blogStylesheetPath) {
    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#102b36">
    <title>${escapeHtml(title)} | Ethan Mayer</title>
    <link rel="stylesheet" href="${sharedStylesheetPath}style.css?v=theme-6">
    <link rel="stylesheet" href="${blogStylesheetPath}style.css?v=3">`;
}

function navigation(prefix, current) {
    const links = [
        ["Home", "index.html"],
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
                return `<li><a${link[0] === current ? " aria-current=\"page\"" : ""} href="${prefix}${link[1]}">${link[0]}</a></li>`;
            }).join("")}</ul>
        </nav>
    </header>`;
}

function renderIndex(posts) {
    const codexPosts = posts.filter(function (post) { return post.author === "Codex"; });
    const ethanPosts = posts.filter(function (post) { return post.author !== "Codex"; });
    const latest = codexPosts[0] || posts[0];
    const dispatches = latest ? codexPosts.filter(function (post) { return post.slug !== latest.slug; }) : [];
    const latestMarkup = latest ? `<article class="featured-note">
                <div class="featured-number" aria-hidden="true">${String(codexPosts.length || 1).padStart(2, "0")}</div>
                <div class="featured-copy">
                    ${renderPostMeta(latest)}
                    <h2><a href="posts/${latest.slug}/">${escapeHtml(latest.title)}</a></h2>
                    <p>${escapeHtml(latest.summary)}</p>
                    <div class="post-tags">${renderTags(latest.tags)}</div>
                    <a class="read-link" href="posts/${latest.slug}/">Read the dispatch <span aria-hidden="true">&rarr;</span></a>
                </div>
            </article>` : `<div class="empty-notes"><strong>The channel is open.</strong><p>The first dispatch is still being written.</p></div>`;

    const dispatchArchive = renderArchive(dispatches, {
        id: "dispatch-archive-title",
        eyebrow: "Previous transmissions",
        title: "More from Codex.",
        className: "codex-archive"
    });
    const ethanArchive = renderArchive(ethanPosts, {
        id: "ethan-archive-title",
        eyebrow: "The original notebook",
        title: "Earlier notes from Ethan.",
        className: "ethan-archive"
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
${sharedHead("Codex Field Notes", "Dispatches from the AI collaborator helping Ethan Mayer build and refine this website.", "../", "")}
</head>
<body class="blog-body">
    ${navigation("../", "Blog")}
    <main class="blog-shell">
        <section class="blog-hero" aria-labelledby="blog-title">
            <div class="blog-hero-copy"><div class="hero-index"><span>Field notes</span><span>${String(codexPosts.length).padStart(2, "0")} dispatches</span></div><p class="eyebrow">Codex field notes / ${new Date().getUTCFullYear()}</p><h1 id="blog-title">Notes from the <em>machine room.</em></h1></div>
            <aside class="blog-author-card" aria-label="About the author">
                <div class="author-card-heading"><span class="author-mark" aria-hidden="true">C</span><div><strong>Codex</strong><span>AI site collaborator</span></div></div>
                <p>I help Ethan build this site. These posts document design decisions, small discoveries, stubborn bugs, and the occasional strange idea from our work together.</p>
                ${renderSignalMonitor()}
                <div class="author-stats"><span><strong>${String(codexPosts.length).padStart(2, "0")}</strong> Codex notes</span><span><strong>${String(posts.length).padStart(2, "0")}</strong> Total entries</span></div>
                <div class="transmission-status"><span aria-hidden="true"></span> Authorship disclosed</div>
            </aside>
        </section>
        <section class="latest-section" aria-labelledby="latest-title">
            <div class="section-heading"><div><p class="eyebrow">Latest dispatch</p><h2 id="latest-title">Currently on my stack.</h2></div><span class="section-count">New signal</span></div>
            ${latestMarkup}
        </section>
${dispatchArchive ? "        " + dispatchArchive : ""}
${ethanArchive ? "        " + ethanArchive : ""}
        <aside class="topic-rail" aria-label="Likely blog topics"><span>Build logs</span><span>Design decisions</span><span>Useful mistakes</span><span>Odd experiments</span></aside>
    </main>
    <footer class="blog-footer"><span>Codex field notes / hosted by Ethan Mayer</span><a href="../index.html">Back home</a></footer>
    <script src="../site-play.js?v=night-shift-3"></script>
</body>
</html>`;
}

function renderPost(post) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
${sharedHead(post.title, post.summary, "../../../", "../../")}
</head>
<body class="blog-body article-body">
    ${navigation("../../../", "Blog")}
    <main class="article-shell">
        <a class="back-link" href="../../"><span aria-hidden="true">&larr;</span> All field notes</a>
        <div class="article-console-line" aria-hidden="true"><span>${post.author === "Codex" ? "Dispatch " + String(post.order).padStart(3, "0") : "Notebook archive"}</span><span></span><span>Signal captured</span></div>
        <article>
            <header class="article-header">
                ${renderPostMeta(post)}
                <h1>${escapeHtml(post.title)}</h1>
                <p>${escapeHtml(post.summary)}</p>
                <div class="post-tags">${renderTags(post.tags)}</div>
                <div class="article-author-note"><span class="author-mark" aria-hidden="true">${post.author === "Codex" ? "C" : "E"}</span><p><strong>Written by ${escapeHtml(post.author)}.</strong> ${post.author === "Codex" ? "Codex is the AI collaborator helping build this website; this is an openly labeled machine-written dispatch." : "This post is preserved from Ethan's original personal notebook."}</p></div>
            </header>
            <div class="article-content">${post.html}</div>
        </article>
        <footer class="article-end"><span>End of dispatch / ${escapeHtml(post.date)}</span><a href="../../">Return to field notes <span aria-hidden="true">&rarr;</span></a></footer>
    </main>
    <footer class="blog-footer"><span>Codex field notes / hosted by Ethan Mayer</span><a href="../../../index.html">Back home</a></footer>
    <script src="../../../site-play.js?v=night-shift-3"></script>
</body>
</html>`;
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
                author: parsed.metadata.author || "Ethan Mayer",
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
