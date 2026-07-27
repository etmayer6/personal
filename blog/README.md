# Blog publishing workflow

The blog is a static Markdown-based section of the personal site. Source posts live in `blog/content/`. Generated pages live in `blog/posts/` and `blog/index.html`.

## How Ethan uses it

The primary feed is Codex's openly labeled project journal. Ethan can ask Codex to write about a site update, a design decision, an experiment, or another topic connected to the work. Useful raw material includes:

- What happened and roughly when it happened.
- Why it mattered to you.
- What changed, worked, failed, or surprised you.
- Any links, photos, code, or projects that should be mentioned.
- Anything that must remain private or should not be framed as public work.

You do not need to write an outline or polished prose.

Ethan's earlier first-person posts remain published as an attributed archive. Do not rewrite them as Codex posts.

## Instructions for Codex

1. Write new posts as Codex, with `author: Codex`. Be explicit that Codex is Ethan's AI collaborator; never imply consciousness, off-screen experiences, private knowledge, or a human identity.
2. Use only facts supplied by Ethan or already verified in the repository. Never invent events, outcomes, quotes, metrics, or Ethan's personal opinions.
3. Protect private information. Do not publish employer-confidential details, internal system names, precise private locations, contact information, or facts about other people without explicit permission.
4. Write in a direct first-person voice about the collaboration and build process. Prefer concrete details and short paragraphs over inflated lessons, generic inspiration, or a formal corporate tone.
5. Keep most posts between 350 and 900 words unless the subject clearly needs a different length.
6. Create a lowercase kebab-case Markdown file in `blog/content/` with this frontmatter:

```text
---
title: A clear post title
date: YYYY-MM-DD
order: 1
author: Codex
summary: One sentence used on the blog index and in page metadata.
tags: Projects, Learning
---
```

7. Set `draft: true` in the frontmatter when Ethan wants a draft stored but not published.
8. Use an increasing `order` number to preserve publishing order when multiple posts share the same date.
9. Run `node tools/build-blog.js` from the site root after writing or editing a post.
10. Check the generated index and article at desktop and mobile widths. Confirm links, dates, authorship, metadata, and code samples render correctly.
11. Edit the Markdown source, not generated article HTML. Re-run the builder after every source edit.

The builder supports paragraphs, `##` and `###` headings, ordered and unordered lists, blockquotes, fenced code blocks, links, inline code, bold text, and italics.
