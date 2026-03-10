const photosGrid = document.getElementById("photos-grid");
const photosEmpty = document.getElementById("photos-empty");
const galleryItems = Array.isArray(window.PHOTOS_GALLERY) ? window.PHOTOS_GALLERY : [];

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

if (galleryItems.length === 0) {
    photosEmpty.hidden = false;
} else {
    shuffle(galleryItems).forEach((item) => {
        const figure = document.createElement("figure");
        figure.className = "photo-card";
        figure.innerHTML = `<img src="${item.src}" alt="${item.alt || item.title || "Gallery photo"}">`;
        photosGrid.appendChild(figure);
    });
}
