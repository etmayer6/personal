const photosGallery = document.getElementById("photos-gallery");
const photosEmpty = document.getElementById("photos-empty");
const photosStatus = document.getElementById("photos-status");
const viewButtons = [...document.querySelectorAll("[data-gallery-mode]")];
const photoViewer = document.getElementById("photo-viewer");
const photoViewerStage = document.getElementById("photo-viewer-stage");
const photoViewerImage = document.getElementById("photo-viewer-image");
const photoViewerPosition = document.getElementById("photo-viewer-position");
const photoViewerTitle = document.getElementById("photo-viewer-title");
const photoViewerPrevious = document.getElementById("photo-viewer-previous");
const photoViewerNext = document.getElementById("photo-viewer-next");
const photoViewerClose = document.getElementById("photo-viewer-close");
const galleryItems = Array.isArray(window.PHOTOS_GALLERY) ? window.PHOTOS_GALLERY : [];
const galleryChapters = Array.isArray(window.PHOTO_CHAPTERS) ? window.PHOTO_CHAPTERS : [];
const fullDeckItems = Array.isArray(window.PHOTOS_FULL_DECK) ? window.PHOTOS_FULL_DECK : [];
const photoDimensions = window.PHOTO_IMAGE_DIMENSIONS || {};
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const curatedBySource = new Map(galleryItems.map((item) => [getPhotoKey(item.src), item]));
const eagerPhotoCount = 3;
let activeViewerItems = [];
let activeViewerIndex = 0;
let lastViewerTrigger = null;
let swipeStartX = null;
let photoImageObserver = null;

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
    const stem = filename.replace(/\.[^.]+$/, "").replace(/-(?:480|960|1440)$/, "");
    return `../images/photos/optimized/${stem}-${width}.webp`;
}

function getPhotoKey(source) {
    const filename = source.split("/").pop() || source;
    return filename.replace(/\.[^.]+$/, "").toLowerCase();
}

function getPhotoSize(source) {
    return photoDimensions[getPhotoKey(source)] || { width: 1440, height: 1080 };
}

function loadDeferredPhotoImage(image) {
    const source = image.dataset.photoSrc;
    const sourceSet = image.dataset.photoSrcset;
    const sizes = image.dataset.photoSizes;
    if (!source) return;
    if (sourceSet) image.srcset = sourceSet;
    if (sizes) image.sizes = sizes;
    image.src = source;
    delete image.dataset.photoSrc;
    delete image.dataset.photoSrcset;
    delete image.dataset.photoSizes;
}

function observePhotoImages() {
    photoImageObserver?.disconnect();
    const deferredImages = [...photosGallery.querySelectorAll("img[data-photo-src]")];
    if (!deferredImages.length) return;

    if (!("IntersectionObserver" in window)) {
        deferredImages.forEach(loadDeferredPhotoImage);
        return;
    }

    photoImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            loadDeferredPhotoImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, { rootMargin: "320px 0px" });
    deferredImages.forEach((image) => photoImageObserver.observe(image));
}

function createResponsiveImage(item, index, isWide = false) {
    const image = document.createElement("img");
    const smallSource = getOptimizedPhotoPath(item.src, 480);
    const largeSource = getOptimizedPhotoPath(item.src, 960);
    const previewSource = getOptimizedPhotoPath(item.src, 1440);
    const sizes = isWide
        ? "(max-width: 700px) calc(100vw - 24px), (max-width: 1000px) calc(100vw - 40px), 1100px"
        : "(max-width: 700px) calc(100vw - 24px), (max-width: 900px) calc((100vw - 58px) / 2), 560px";
    const dimensions = getPhotoSize(item.src);

    image.dataset.photoSrc = smallSource;
    image.dataset.photoSrcset = `${smallSource} 480w, ${largeSource} 960w, ${previewSource} 1440w`;
    image.dataset.photoSizes = sizes;
    image.alt = item.alt || "Photograph from Ethan's collection";
    image.width = dimensions.width;
    image.height = dimensions.height;
    image.loading = index < eagerPhotoCount ? "eager" : "lazy";
    image.decoding = "async";

    if (index < eagerPhotoCount) {
        loadDeferredPhotoImage(image);
    } else {
        image.src = transparentPixel;
    }

    if (index === 0) {
        image.fetchPriority = "high";
    }

    image.addEventListener("error", () => {
        if (image.src.endsWith("-480.webp")) {
            image.removeAttribute("srcset");
            image.sizes = sizes;
            image.src = previewSource;
        }
    }, { once: true });

    return image;
}

function getViewerRecord(item, index) {
    const curated = curatedBySource.get(getPhotoKey(item.src));
    if (curated) {
        return { ...item, ...curated, src: item.src };
    }

    return {
        ...item,
        title: `Archive frame ${String(index + 1).padStart(2, "0")}`
    };
}

function getViewerLabel(item, index) {
    return item.title || `archive frame ${String(index + 1).padStart(2, "0")}`;
}

function createViewerButton(item, index) {
    const button = document.createElement("button");
    button.className = "photo-open-button";
    button.type = "button";
    button.setAttribute("aria-label", `View ${getViewerLabel(item, index)} fullscreen`);
    button.innerHTML = "<span aria-hidden=\"true\">&#x26F6;</span><span>Fullscreen</span>";
    button.addEventListener("click", () => openPhotoViewer(index, button));
    return button;
}

function updatePhotoViewer() {
    const item = activeViewerItems[activeViewerIndex];
    if (!item) return;

    const digits = Math.max(2, String(activeViewerItems.length).length);
    const position = String(activeViewerIndex + 1).padStart(digits, "0");
    const total = String(activeViewerItems.length).padStart(digits, "0");
    const smallSource = getOptimizedPhotoPath(item.src, 480);
    const largeSource = getOptimizedPhotoPath(item.src, 960);
    const previewSource = getOptimizedPhotoPath(item.src, 1440);
    const dimensions = getPhotoSize(item.src);
    const previousIndex = (activeViewerIndex - 1 + activeViewerItems.length) % activeViewerItems.length;
    const nextIndex = (activeViewerIndex + 1) % activeViewerItems.length;

    photoViewerPosition.textContent = `${position} / ${total}`;
    photoViewerTitle.textContent = item.title || `Archive frame ${position}`;
    photoViewerImage.alt = item.alt || "Photograph from Ethan's collection";
    photoViewerImage.width = dimensions.width;
    photoViewerImage.height = dimensions.height;
    photoViewerImage.onerror = () => {
        photoViewerImage.onerror = null;
        photoViewerImage.removeAttribute("srcset");
        photoViewerImage.removeAttribute("sizes");
        photoViewerImage.src = largeSource;
    };
    photoViewerImage.srcset = `${smallSource} 480w, ${largeSource} 960w, ${previewSource} 1440w`;
    photoViewerImage.sizes = "100vw";
    photoViewerImage.src = previewSource;

    photoViewerPrevious.setAttribute(
        "aria-label",
        `Previous photo: ${getViewerLabel(activeViewerItems[previousIndex], previousIndex)}`
    );
    photoViewerNext.setAttribute(
        "aria-label",
        `Next photo: ${getViewerLabel(activeViewerItems[nextIndex], nextIndex)}`
    );

    [previousIndex, nextIndex].forEach((index) => {
        const preload = new Image();
        preload.src = getOptimizedPhotoPath(activeViewerItems[index].src, 1440);
    });
}

function showPhotoViewerIndex(index) {
    if (activeViewerItems.length === 0) return;
    activeViewerIndex = (index + activeViewerItems.length) % activeViewerItems.length;
    updatePhotoViewer();
}

function openPhotoViewer(index, trigger) {
    if (activeViewerItems.length === 0) return;
    lastViewerTrigger = trigger;
    showPhotoViewerIndex(index);
    if (!photoViewer.open) {
        photoViewer.showModal();
    }
    photoViewerClose.focus();
}

function restorePhotoViewerFocus() {
    const trigger = lastViewerTrigger;
    lastViewerTrigger = null;
    const fallback = document.querySelector("header nav a, main a, main button");
    const target = trigger && trigger.isConnected ? trigger : fallback;
    if (!target) return;
    window.requestAnimationFrame(() => target.focus());
}

photoViewer.addEventListener("close", restorePhotoViewerFocus);

function closePhotoViewer() {
    if (photoViewer.open) photoViewer.close();
    else restorePhotoViewerFocus();
}

function createPhotoCard(item, index, featured = false) {
    const figure = document.createElement("figure");
    const media = document.createElement("div");
    const caption = document.createElement("figcaption");
    const sequence = document.createElement("span");
    const title = document.createElement("h3");

    figure.className = featured ? "photo-card photo-card--featured" : "photo-card";
    media.className = "photo-media";
    media.append(createResponsiveImage(item, index, featured), createViewerButton(item, index));

    caption.className = "photo-caption";
    sequence.className = "photo-sequence";
    sequence.textContent = String(index + 1).padStart(2, "0");
    title.textContent = item.title;

    caption.append(sequence, title);
    figure.append(media, caption);
    return figure;
}

function createArchiveCard(item, index) {
    const record = getViewerRecord(item, index);
    const figure = document.createElement("figure");
    const sequence = document.createElement("span");

    figure.className = "deck-card";
    figure.append(createResponsiveImage(record, index), createViewerButton(record, index));
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
    activeViewerItems = [];

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
            activeViewerItems.push(item);
            grid.appendChild(createPhotoCard(item, photoIndex, chapterIndex === 0));
            photoIndex += 1;
        });

        section.appendChild(grid);
        fragment.appendChild(section);
    });

    photosGallery.replaceChildren(fragment);
    observePhotoImages();
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
    activeViewerItems = items.map((item, index) => getViewerRecord(item, index));
    items.forEach((item, index) => grid.appendChild(createArchiveCard(item, index)));
    section.append(heading, grid);
    photosGallery.replaceChildren(section);
    observePhotoImages();
    photosStatus.textContent = randomize
        ? `${items.length} photographs in a fresh random order.`
        : `${items.length} photographs in the complete archive.`;
}

function setGalleryMode(mode) {
    closePhotoViewer();
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

photoViewerPrevious.addEventListener("click", () => showPhotoViewerIndex(activeViewerIndex - 1));
photoViewerNext.addEventListener("click", () => showPhotoViewerIndex(activeViewerIndex + 1));
photoViewerClose.addEventListener("click", closePhotoViewer);

photoViewer.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePhotoViewer();
});

photoViewer.addEventListener("close", () => {
    if (lastViewerTrigger && lastViewerTrigger.isConnected) {
        lastViewerTrigger.focus();
    }
    lastViewerTrigger = null;
});

photoViewer.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        const focusable = [...photoViewer.querySelectorAll("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
            .filter((element) => !element.disabled && element.getAttribute("aria-hidden") !== "true");
        if (!focusable.length) {
            event.preventDefault();
            photoViewerClose.focus();
            return;
        }
        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey
            ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
            : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
        event.preventDefault();
        focusable[nextIndex].focus();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPhotoViewerIndex(activeViewerIndex - 1);
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showPhotoViewerIndex(activeViewerIndex + 1);
    } else if (event.key === "Home") {
        event.preventDefault();
        showPhotoViewerIndex(0);
    } else if (event.key === "End") {
        event.preventDefault();
        showPhotoViewerIndex(activeViewerItems.length - 1);
    } else if (event.key === "Escape") {
        event.preventDefault();
        closePhotoViewer();
    }
});

photoViewerStage.addEventListener("touchstart", (event) => {
    swipeStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });

photoViewerStage.addEventListener("touchend", (event) => {
    if (swipeStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? swipeStartX;
    const distance = endX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(distance) < 55) return;
    showPhotoViewerIndex(activeViewerIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

if (galleryItems.length === 0) {
    photosEmpty.hidden = false;
    photosStatus.textContent = "No photographs are currently published.";
} else {
    setGalleryMode("journal");
}
