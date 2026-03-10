const photosGrid = document.getElementById("photos-grid");
const photosEmpty = document.getElementById("photos-empty");
const galleryItems = Array.isArray(window.PHOTOS_GALLERY) ? window.PHOTOS_GALLERY : [];

if (galleryItems.length === 0) {
    photosEmpty.hidden = false;
} else {
    galleryItems.forEach((item) => {
        const figure = document.createElement("figure");
        figure.className = `photo-card${item.featured ? " featured" : ""}`;
        figure.innerHTML = `
            <img src="${item.src}" alt="${item.alt || item.title || "Gallery photo"}">
            <figcaption>
                ${item.tag ? `<span class="photo-tag">${item.tag}</span>` : ""}
                <strong>${item.title || "Untitled photo"}</strong>
            </figcaption>
        `;
        photosGrid.appendChild(figure);
    });
}
