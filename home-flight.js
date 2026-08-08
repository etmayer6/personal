(() => {
    const canvas = document.getElementById("home-flight-canvas");
    const sequence = document.querySelector(".home-flight-sequence");

    if (!canvas || !sequence) return;

    const context = canvas.getContext("2d");
    const manifest = [
        "frame-00-runway.jpg",
        "frame-01-runway-roll-01.jpg",
        "frame-02-runway-roll-02.jpg",
        "frame-03-runway-roll-03.jpg",
        "frame-04-roll.jpg",
        "frame-05-roll-rotation-01.jpg",
        "frame-06-roll-rotation-02.jpg",
        "frame-07-roll-rotation-03.jpg",
        "frame-08-rotation.jpg",
        "frame-09-rotation-airborne-01.jpg",
        "frame-10-rotation-airborne-02.jpg",
        "frame-11-rotation-airborne-03.jpg",
        "frame-12-airborne.jpg",
        "frame-13-airborne-climb-01.jpg",
        "frame-14-airborne-climb-02.jpg",
        "frame-15-airborne-climb-03.jpg",
        "frame-16-climb.jpg",
        "frame-17-climb-clouds-01.jpg",
        "frame-18-climb-clouds-02.jpg",
        "frame-19-climb-clouds-03.jpg",
        "frame-20-clouds.jpg",
        "frame-21-clouds-cruise-01.jpg",
        "frame-22-clouds-cruise-02.jpg",
        "frame-23-clouds-cruise-03.jpg",
        "frame-24-cruise.jpg"
    ];

    const frames = manifest.map((file) => {
        const image = new Image();
        image.decoding = "async";
        image.src = `assets/home-flight-25-jpg/${file}`;
        return image;
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollProgress = reduceMotion.matches ? 1 : 0;
    let renderFrame = 0;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function resizeCanvas() {
        const bounds = canvas.getBoundingClientRect();
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        const width = Math.max(Math.round(bounds.width * pixelRatio), 1);
        const height = Math.max(Math.round(bounds.height * pixelRatio), 1);

        if (canvas.width === width && canvas.height === height) return;

        canvas.width = width;
        canvas.height = height;
    }

    function drawImageCover(image) {
        const imageRatio = image.naturalWidth / image.naturalHeight;
        const canvasRatio = canvas.width / canvas.height;
        let sourceWidth = image.naturalWidth;
        let sourceHeight = image.naturalHeight;
        let sourceX = 0;
        let sourceY = 0;

        if (imageRatio > canvasRatio) {
            sourceWidth = image.naturalHeight * canvasRatio;
            sourceX = (image.naturalWidth - sourceWidth) / 2;
        } else {
            sourceHeight = image.naturalWidth / canvasRatio;
            sourceY = (image.naturalHeight - sourceHeight) / 2;
        }

        context.drawImage(
            image,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    }

    function draw(position) {
        if (!context) return;

        const maxIndex = frames.length - 1;
        const bounded = clamp(position, 0, maxIndex);
        const frame = frames[Math.round(bounded)];

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#06131a";
        context.fillRect(0, 0, canvas.width, canvas.height);

        if (frame.complete && frame.naturalWidth > 0) {
            context.globalAlpha = 1;
            drawImageCover(frame);
        }

        context.globalAlpha = 1;
    }

    function render() {
        renderFrame = 0;
        draw(scrollProgress * (frames.length - 1));
    }

    function scheduleRender() {
        if (renderFrame) return;
        renderFrame = window.requestAnimationFrame(render);
    }

    function updateScrollProgress() {
        if (reduceMotion.matches) {
            scrollProgress = 1;
            scheduleRender();
            return;
        }

        const bounds = sequence.getBoundingClientRect();
        const travel = Math.max(sequence.offsetHeight - window.innerHeight, 1);
        scrollProgress = clamp(-bounds.top / travel, 0, 1);
        scheduleRender();
    }

    function handleResize() {
        resizeCanvas();
        updateScrollProgress();
    }

    frames.forEach((image) => {
        image.addEventListener("load", scheduleRender, { once: true });
    });

    reduceMotion.addEventListener("change", updateScrollProgress);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", handleResize);
    resizeCanvas();
    updateScrollProgress();
})();
