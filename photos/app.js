const photosGrid = document.getElementById("photos-grid");
const photosEmpty = document.getElementById("photos-empty");
const galleryItems = Array.isArray(window.PHOTOS_GALLERY) ? window.PHOTOS_GALLERY : [];
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

if (galleryItems.length === 0) {
    photosEmpty.hidden = false;
} else {
    shuffle(galleryItems).forEach((item, index) => {
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        const smallSource = getOptimizedPhotoPath(item.src, 480);
        const largeSource = getOptimizedPhotoPath(item.src, 960);

        figure.className = "photo-card";
        image.src = smallSource;
        image.srcset = `${smallSource} 480w, ${largeSource} 960w`;
        image.sizes = "(max-width: 600px) calc(100vw - 24px), (max-width: 900px) calc((100vw - 62px) / 2), 380px";
        image.alt = item.alt || item.title || "Gallery photo";
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

        figure.appendChild(image);
        photosGrid.appendChild(figure);
    });
}
