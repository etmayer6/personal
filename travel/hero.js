(() => {
    let image = document.getElementById('travel-hero-image');
    const caption = document.getElementById('travel-scene-caption');
    const status = document.getElementById('travel-hero-status');
    const buttons = [...document.querySelectorAll('[data-travel-scene]')];
    if (!image || !caption || !status || !buttons.length) return;

    const scenes = {
        coast: { file: 'GOPR9752', caption: 'Isla Mujeres, Mexico', alt: 'Turquoise Caribbean water and palm trees framed by a thatched palapa on Isla Mujeres', position: 'center 54%' },
        crater: { file: 'P1020888', caption: 'El Boquerón, El Salvador', alt: 'Green forest covering the volcanic crater at El Boquerón in El Salvador', position: 'center 52%' },
        home: { file: 'P1020464', caption: 'Ames, Iowa', alt: 'Snow-covered campus paths and a brick building in Ames, Iowa', position: 'center 50%' }
    };
    let current = 'coast';
    let request = 0;

    async function selectScene(id) {
        const version = ++request;
        if (!scenes[id] || id === current) return;
        const scene = scenes[id];
        const source = `../images/photos/optimized/${scene.file}-1440.webp`;
        const srcset = [480, 960, 1440].map(size => `../images/photos/optimized/${scene.file}-${size}.webp ${size}w`).join(', ');
        const preload = new Image();
        preload.sizes = image.sizes;
        preload.srcset = srcset;
        preload.src = source;
        try {
            await preload.decode();
            if (version !== request) return;
            // Keep the previous scene until the selected photograph is decoded.
            preload.id = image.id;
            preload.width = image.width;
            preload.height = image.height;
            preload.decoding = 'async';
            preload.alt = scene.alt;
            preload.style.setProperty('--travel-scene-position', scene.position);
            image.replaceWith(preload);
            image = preload;
            caption.textContent = scene.caption;
            buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.travelScene === id)));
            current = id;
            status.textContent = `Showing ${scene.caption}.`;
        } catch {
            if (version === request) status.textContent = 'That photograph could not load. The previous scene is still here; try again.';
        }
    }
    buttons.forEach(button => button.addEventListener('click', () => selectScene(button.dataset.travelScene)));
})();
