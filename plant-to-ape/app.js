(() => {
    const canvas = document.getElementById("root-shift-canvas");
    const sequence = document.querySelector(".root-shift-sequence");
    const frameCount = document.getElementById("root-shift-frame-count");
    const stageIndex = document.getElementById("root-shift-stage-index");
    const stageName = document.getElementById("root-shift-stage-name");
    const stageDetail = document.getElementById("root-shift-stage-detail");
    const progressBar = document.getElementById("root-shift-progress-bar");

    if (!canvas || !sequence) return;

    const context = canvas.getContext("2d");
    const manifest = [
        { file: "assets/optimized/frame-00-seedling-1440.webp", name: "Seedling", detail: "small beginnings" },
        { file: "assets/optimized/frame-01-unfurling-1440.webp", name: "Unfurling", detail: "the first shift" },
        { file: "assets/optimized/frame-02-sapling-1440.webp", name: "Sapling", detail: "finding a shape" },
        { file: "assets/optimized/frame-03-branching-form-1440.webp", name: "Branching form", detail: "arms from the stem" },
        { file: "assets/optimized/frame-04-rooted-figure-1440.webp", name: "Rooted figure", detail: "a body takes hold" },
        { file: "assets/optimized/frame-05-emerging-ape-1440.webp", name: "Emerging ape", detail: "the face appears" },
        { file: "assets/optimized/frame-06-leafy-guardian-1440.webp", name: "Leafy guardian", detail: "plant and animal overlap" },
        { file: "assets/optimized/frame-07-settling-ape-1440.webp", name: "Settling", detail: "the roots let go" },
        { file: "assets/optimized/frame-08-ape-1440.webp", name: "Ape", detail: "the form settles" }
    ];

    const frames = manifest.map((item) => {
        const image = new Image();
        image.decoding = "async";
        image.src = item.file;
        return image;
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollProgress = reduceMotion.matches ? 1 : 0;
    let renderFrame = 0;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function updateLabels(position) {
        const index = Math.round(position);
        const item = manifest[index];
        const paddedIndex = String(index + 1).padStart(2, "0");
        frameCount.textContent = `${paddedIndex} / ${String(manifest.length).padStart(2, "0")}`;
        stageIndex.textContent = paddedIndex;
        stageName.textContent = item.name;
        stageDetail.textContent = item.detail;
        progressBar.style.width = `${Math.round((position / (manifest.length - 1)) * 100)}%`;
    }

    function draw(position) {
        if (!context) return;

        const maxIndex = frames.length - 1;
        const bounded = clamp(position, 0, maxIndex);
        const lowerIndex = Math.floor(bounded);
        const upperIndex = Math.min(lowerIndex + 1, maxIndex);
        const blend = bounded - lowerIndex;
        const lower = frames[lowerIndex];
        const upper = frames[upperIndex];

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#03080b";
        context.fillRect(0, 0, canvas.width, canvas.height);

        if (lower.complete && lower.naturalWidth > 0) {
            context.globalAlpha = 1;
            context.drawImage(lower, 0, 0, canvas.width, canvas.height);
        }

        if (upper !== lower && upper.complete && upper.naturalWidth > 0) {
            context.globalAlpha = blend;
            context.drawImage(upper, 0, 0, canvas.width, canvas.height);
        }

        context.globalAlpha = 1;
        updateLabels(bounded);
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

    frames.forEach((image) => {
        image.addEventListener("load", scheduleRender, { once: true });
    });

    reduceMotion.addEventListener("change", updateScrollProgress);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();
})();
