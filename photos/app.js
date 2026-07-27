const photosGallery = document.getElementById("photos-gallery");
const photosEmpty = document.getElementById("photos-empty");
const photosStatus = document.getElementById("photos-status");
const viewButtons = [...document.querySelectorAll("[data-gallery-mode]")];
const galleryItems = Array.isArray(window.PHOTOS_GALLERY) ? window.PHOTOS_GALLERY : [];
const galleryChapters = Array.isArray(window.PHOTO_CHAPTERS) ? window.PHOTO_CHAPTERS : [];
const fullDeckItems = Array.isArray(window.PHOTOS_FULL_DECK) ? window.PHOTOS_FULL_DECK : [];
const curatedBySource = new Map(galleryItems.map((item) => [item.src, item]));
const eagerPhotoCount = 3;

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getOptimizedPhotoPath(source, width) {
    const filename = source.split("/").pop() || "";
    const stem = filename.replace(/\.[^.]+$/, "");
    return `../images/photos/optimized/${stem}-${width}.webp`;
}

function createResponsiveImage(item, index, isWide = false) {
    const image = document.createElement("img");
    const smallSource = getOptimizedPhotoPath(item.src, 480);
    const largeSource = getOptimizedPhotoPath(item.src, 960);

    image.src = smallSource;
    image.srcset = `${smallSource} 480w, ${largeSource} 960w`;
    image.sizes = isWide
        ? "(max-width: 700px) calc(100vw - 24px), (max-width: 1000px) calc(100vw - 40px), 1100px"
        : "(max-width: 700px) calc(100vw - 24px), (max-width: 900px) calc((100vw - 58px) / 2), 560px";
    image.alt = item.alt || "Photograph from Ethan's collection";
    image.loading = index < eagerPhotoCount ? "eager" : "lazy";
    image.decoding = "async";

    if (index === 0) {
        image.fetchPriority = "high";
    }

    image.addEventListener("error", () => {
        image.removeAttribute("srcset");
        image.removeAttribute("sizes");
        image.src = item.src;
    }, { once: true });

    return image;
}

function createPhotoCard(item, index, featured = false) {
    const figure = document.createElement("figure");
    const media = document.createElement("div");
    const caption = document.createElement("figcaption");
    const sequence = document.createElement("span");
    const captionCopy = document.createElement("div");
    const metadata = document.createElement("p");
    const title = document.createElement("h3");
    const note = document.createElement("p");

    figure.className = featured ? "photo-card photo-card--featured" : "photo-card";
    media.className = "photo-media";
    media.appendChild(createResponsiveImage(item, index, featured));

    caption.className = "photo-caption";
    sequence.className = "photo-sequence";
    sequence.textContent = String(index + 1).padStart(2, "0");
    metadata.className = "photo-metadata";
    metadata.textContent = [item.location, item.date].filter(Boolean).join(" / ");
    title.textContent = item.title;
    note.className = "photo-note";
    note.textContent = item.caption;

    captionCopy.append(metadata, title, note);
    caption.append(sequence, captionCopy);
    figure.append(media, caption);
    return figure;
}

function createArchiveCard(item, index) {
    const curated = curatedBySource.get(item.src);
    const record = curated ? { ...item, alt: curated.alt } : item;
    const figure = document.createElement("figure");
    const sequence = document.createElement("span");

    figure.className = "deck-card";
    figure.appendChild(createResponsiveImage(record, index));
    sequence.className = "deck-sequence";
    sequence.textContent = String(index + 1).padStart(2, "0");
    sequence.setAttribute("aria-hidden", "true");
    figure.appendChild(sequence);
    return figure;
}

function createChapterHeading(chapter, count) {
    const heading = document.createElement("header");
    const copy = document.createElement("div");
    const eyebrow = document.createElement("p");
    const title = document.createElement("h2");
    const note = document.createElement("p");
    const countLabel = document.createElement("span");

    heading.className = "photo-chapter-heading";
    eyebrow.className = "eyebrow";
    eyebrow.textContent = chapter.eyebrow;
    title.id = `chapter-${chapter.id}`;
    title.textContent = chapter.title;
    note.className = "chapter-note";
    note.textContent = chapter.note;
    countLabel.className = "chapter-count";
    countLabel.textContent = `${String(count).padStart(2, "0")} frames`;

    copy.append(eyebrow, title);
    heading.append(copy, note, countLabel);
    return heading;
}

function renderJournal() {
    const fragment = document.createDocumentFragment();
    let photoIndex = 0;

    galleryChapters.forEach((chapter) => {
        const chapterItems = galleryItems.filter((item) => item.chapter === chapter.id);
        const featuredItem = chapterItems.find((item) => item.src === chapter.feature) || chapterItems[0];
        const orderedItems = [
            featuredItem,
            ...chapterItems.filter((item) => item !== featuredItem)
        ].filter(Boolean);

        if (orderedItems.length === 0) return;

        const section = document.createElement("section");
        const grid = document.createElement("div");
        section.className = "photo-chapter";
        section.setAttribute("aria-labelledby", `chapter-${chapter.id}`);
        grid.className = "photos-grid";
        section.appendChild(createChapterHeading(chapter, orderedItems.length));

        orderedItems.forEach((item, chapterIndex) => {
            grid.appendChild(createPhotoCard(item, photoIndex, chapterIndex === 0));
            photoIndex += 1;
        });

        section.appendChild(grid);
        fragment.appendChild(section);
    });

    photosGallery.replaceChildren(fragment);
    photosStatus.textContent = `${galleryItems.length} selected photographs across ${galleryChapters.length} chapters.`;
}

function renderFullDeck(randomize = false) {
    const items = randomize ? shuffle(fullDeckItems) : [...fullDeckItems];
    const section = document.createElement("section");
    const grid = document.createElement("div");
    const heading = createChapterHeading({
        id: randomize ? "shuffle" : "archive",
        eyebrow: randomize ? "Playful mode" : "Every original frame",
        title: randomize ? "The shuffled archive" : "The full archive",
        note: randomize
            ? "All 97 photographs, remixed into a different route each time."
            : "The complete deck in stable file order, including the quieter and stranger frames."
    }, items.length);

    section.className = "photo-chapter photo-deck";
    section.setAttribute("aria-labelledby", `chapter-${randomize ? "shuffle" : "archive"}`);
    grid.className = "full-deck-grid";
    items.forEach((item, index) => grid.appendChild(createArchiveCard(item, index)));
    section.append(heading, grid);
    photosGallery.replaceChildren(section);
    photosStatus.textContent = randomize
        ? `${items.length} photographs in a fresh random order.`
        : `${items.length} photographs in the complete archive.`;
}

function setGalleryMode(mode) {
    viewButtons.forEach((button) => {
        const isActive = button.dataset.galleryMode === mode;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    if (mode === "archive") {
        renderFullDeck(false);
    } else if (mode === "shuffle") {
        renderFullDeck(true);
    } else {
        renderJournal();
    }
}

viewButtons.forEach((button) => {
    button.addEventListener("click", () => setGalleryMode(button.dataset.galleryMode));
});

if (galleryItems.length === 0) {
    photosEmpty.hidden = false;
    photosStatus.textContent = "No photographs are currently published.";
} else {
    setGalleryMode("journal");
}
