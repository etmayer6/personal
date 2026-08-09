(() => {
    const canvas = document.getElementById("flight-sequence-canvas");
    const sequence = document.querySelector(".flight-sequence-track");

    if (!canvas || !sequence) return;

    const context = canvas.getContext("2d");
    // The source set includes alternate in-between renders with inconsistent
    // aircraft scale. The even cadence keeps the takeoff progression stable.
    const manifest = Array.from({ length: 25 }, (_, index) =>
        `frame-${String(index * 2).padStart(2, "0")}.jpg`
    );

    const frames = manifest.map((file) => {
        const image = new Image();
        image.decoding = "async";
        image.src = `../assets/home-flight-49-jpg/${file}`;
        return image;
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const subjectTarget = { x: 0.535, y: 0.53, span: 0.82 };
    const alignmentKeyframes = [
        { frame: 0, focusX: 0.535, focusY: 0.525, span: 0.852 },
        { frame: 4, focusX: 0.535, focusY: 0.518, span: 0.843 },
        { frame: 8, focusX: 0.527, focusY: 0.523, span: 0.836 },
        { frame: 12, focusX: 0.521, focusY: 0.529, span: 0.851 },
        { frame: 16, focusX: 0.521, focusY: 0.535, span: 0.842 },
        { frame: 20, focusX: 0.508, focusY: 0.541, span: 0.844 },
        { frame: 24, focusX: 0.529, focusY: 0.533, span: 0.832 },
        { frame: 28, focusX: 0.523, focusY: 0.5, span: 0.798 },
        { frame: 32, focusX: 0.536, focusY: 0.511, span: 0.809 },
        { frame: 36, focusX: 0.536, focusY: 0.508, span: 0.804 },
        { frame: 40, focusX: 0.537, focusY: 0.51, span: 0.803 },
        { frame: 44, focusX: 0.532, focusY: 0.536, span: 0.807 },
        { frame: 48, focusX: 0.535, focusY: 0.562, span: 0.798 }
    ];
    let scrollProgress = reduceMotion.matches ? 1 : 0;
    let targetScrollProgress = scrollProgress;
    let renderFrame = 0;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function lerp(start, end, amount) {
        return start + (end - start) * amount;
    }

    function alignmentForFrame(frameIndex) {
        const nextIndex = alignmentKeyframes.findIndex((keyframe) => keyframe.frame >= frameIndex);
        if (nextIndex === -1) return alignmentKeyframes[alignmentKeyframes.length - 1];
        if (nextIndex === 0) return alignmentKeyframes[0];

        const previous = alignmentKeyframes[nextIndex - 1];
        const next = alignmentKeyframes[nextIndex];
        const progress = (frameIndex - previous.frame) / (next.frame - previous.frame);
        return {
            focusX: lerp(previous.focusX, next.focusX, progress),
            focusY: lerp(previous.focusY, next.focusY, progress),
            span: lerp(previous.span, next.span, progress)
        };
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

    function drawImageFramed(image, alignment) {
        const fitScale = Math.min(
            canvas.width / image.naturalWidth,
            canvas.height / image.naturalHeight
        ) * 0.86;
        const stabilizationScale = subjectTarget.span / alignment.span;
        const drawWidth = image.naturalWidth * fitScale * stabilizationScale;
        const drawHeight = image.naturalHeight * fitScale * stabilizationScale;
        const drawX = canvas.width * subjectTarget.x - drawWidth * alignment.focusX;
        const drawY = canvas.height * subjectTarget.y - drawHeight * alignment.focusY;

        context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    }

    function draw(position) {
        if (!context) return;

        const maxIndex = frames.length - 1;
        const bounded = clamp(position, 0, maxIndex);
        const frameIndex = Math.round(bounded);
        const sourceFrameIndex = frameIndex * 2;
        const frame = frames[frameIndex];

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        if (frame.complete && frame.naturalWidth > 0) {
            context.globalAlpha = 1;
            drawImageFramed(frame, alignmentForFrame(sourceFrameIndex));
        }

        context.globalAlpha = 1;
    }

    function render() {
        const difference = targetScrollProgress - scrollProgress;
        if (!reduceMotion.matches && Math.abs(difference) > 0.0005) {
            scrollProgress += difference * 0.22;
        } else {
            scrollProgress = targetScrollProgress;
        }

        draw(scrollProgress * (frames.length - 1));

        if (!reduceMotion.matches && Math.abs(targetScrollProgress - scrollProgress) > 0.0005) {
            renderFrame = window.requestAnimationFrame(render);
        } else {
            renderFrame = 0;
        }
    }

    function scheduleRender() {
        if (renderFrame) return;
        renderFrame = window.requestAnimationFrame(render);
    }

    function updateScrollProgress() {
        if (reduceMotion.matches) {
            targetScrollProgress = 1;
            scrollProgress = targetScrollProgress;
            scheduleRender();
            return;
        }

        const bounds = sequence.getBoundingClientRect();
        const travel = Math.max(sequence.offsetHeight - window.innerHeight, 1);
        targetScrollProgress = clamp(-bounds.top / travel, 0, 1);
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
