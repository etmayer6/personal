(function () {
    "use strict";

    const STORAGE_KEY = "word-sort-story-progress-v1";
    const LEVEL_COUNT = 8;
    const campaign = document.getElementById("wordsort-campaign");
    const count = document.getElementById("wordsort-campaign-count");
    const status = document.getElementById("wordsort-campaign-status");
    const buttons = Array.from(document.querySelectorAll("[data-word-level]"));

    if (!campaign || !buttons.length) return;

    function emptyProgress() {
        return { unlocked: 0, cleared: [], parCleared: [], bestScores: {}, bestMovesLeft: {} };
    }

    function readProgress() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
            if (!saved || typeof saved !== "object") return emptyProgress();
            return {
                unlocked: Math.max(0, Math.min(LEVEL_COUNT - 1, Math.floor(Number(saved.unlocked) || 0))),
                cleared: Array.isArray(saved.cleared) ? [...new Set(saved.cleared.filter((level) => Number.isInteger(level) && level >= 0 && level < LEVEL_COUNT))] : [],
                parCleared: Array.isArray(saved.parCleared) ? [...new Set(saved.parCleared.filter((level) => Number.isInteger(level) && level >= 0 && level < LEVEL_COUNT))] : [],
                bestScores: saved.bestScores && typeof saved.bestScores === "object" ? saved.bestScores : {},
                bestMovesLeft: saved.bestMovesLeft && typeof saved.bestMovesLeft === "object" ? saved.bestMovesLeft : {}
            };
        } catch (error) {
            return emptyProgress();
        }
    }

    let progress = readProgress();
    let lastLevel = 0;
    let lastWinKey = "";

    function saveProgress() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            // The story run still works when storage is unavailable.
        }
    }

    function parTargetFor(level) {
        const button = buttons.find((item) => Number(item.dataset.wordLevel) === level);
        return Math.max(0, Math.floor(Number(button?.dataset.wordPar) || 0));
    }

    function setStatus(message, state) {
        if (status.textContent !== message) status.textContent = message;
        if (status.dataset.state !== state) status.dataset.state = state;
    }

    function dealLabel(level) {
        return `Deal ${String(level + 1).padStart(2, "0")}`;
    }

    function readyMessage(level) {
        const target = parTargetFor(level);
        const nextStep = level < LEVEL_COUNT - 1
            ? "Any clear still opens the next deal."
            : "Any clear completes the story.";
        return `Move par: finish ${dealLabel(level)} with ${target} or more moves left for a lantern pin. ${nextStep}`;
    }

    function renderMenu(activeLevel) {
        const cleared = new Set(progress.cleared);
        const pins = new Set(progress.parCleared);
        count.textContent = `${cleared.size} / ${LEVEL_COUNT} cleared | ${pins.size} / ${LEVEL_COUNT} pins`;
        buttons.forEach((button) => {
            const level = Number(button.dataset.wordLevel);
            const parTarget = parTargetFor(level);
            const isCleared = cleared.has(level);
            const hasPin = pins.has(level);
            const bestScore = Math.max(0, Number(progress.bestScores[level]) || 0);
            const bestMovesLeft = Math.max(0, Number(progress.bestMovesLeft[level]) || 0);

            button.disabled = level > progress.unlocked;
            button.classList.toggle("is-cleared", isCleared);
            button.classList.toggle("is-current", level === activeLevel);
            button.classList.toggle("is-par-cleared", hasPin);
            if (level === activeLevel) button.setAttribute("aria-current", "step");
            else button.removeAttribute("aria-current");

            const label = button.querySelector("span");
            if (label) label.dataset.mark = isCleared ? "cleared" : "";
            const bestLabel = button.querySelector("[data-word-best]");
            if (bestLabel) bestLabel.textContent = bestScore ? `${bestScore.toLocaleString()} pts` : "";

            const dealName = label ? label.textContent.trim() : dealLabel(level);
            const completion = isCleared ? "cleared" : button.disabled ? "locked" : "open";
            const par = parTarget ? `, par: finish with at least ${parTarget} moves left${hasPin ? ", lantern pin earned" : ", optional lantern pin"}` : "";
            const best = bestScore ? `, best score ${bestScore}` : "";
            const bestFinish = bestMovesLeft ? `, best finish with ${bestMovesLeft} moves remaining` : "";
            button.setAttribute("aria-label", `${dealLabel(level)}, ${dealName}, ${completion}${par}${best}${bestFinish}`);
        });
    }

    function readGameState() {
        if (typeof window.render_game_to_text !== "function") return null;
        try {
            return JSON.parse(window.render_game_to_text());
        } catch (error) {
            return null;
        }
    }

    function recordWin(game) {
        const wasCleared = progress.cleared.includes(lastLevel);
        if (!wasCleared) progress.cleared.push(lastLevel);

        const score = Math.max(0, Number(game.score) || 0);
        progress.bestScores[lastLevel] = Math.max(Number(progress.bestScores[lastLevel]) || 0, score);

        const movesLeft = Math.max(0, Math.floor(Number(game.movesLeft) || 0));
        progress.bestMovesLeft[lastLevel] = Math.max(Number(progress.bestMovesLeft[lastLevel]) || 0, movesLeft);
        const parTarget = parTargetFor(lastLevel);
        const earnedPin = parTarget > 0 && movesLeft >= parTarget;
        if (earnedPin && !progress.parCleared.includes(lastLevel)) progress.parCleared.push(lastLevel);

        progress.unlocked = Math.max(progress.unlocked, Math.min(lastLevel + 1, LEVEL_COUNT - 1));
        saveProgress();

        const allDealsCleared = new Set(progress.cleared).size === LEVEL_COUNT;
        if (allDealsCleared) {
            const pinCount = new Set(progress.parCleared).size;
            setStatus(`Story complete: all ${LEVEL_COUNT} deals cleared and ${pinCount} lantern pins earned. Generated mixes are waiting after the final crown.`, "earned");
        } else if (earnedPin) {
            setStatus(`${dealLabel(lastLevel)} cleared with ${movesLeft} moves left. Lantern pin earned; ${dealLabel(lastLevel + 1)} is open.`, "earned");
        } else {
            const nextDeal = lastLevel < LEVEL_COUNT - 1 ? ` ${dealLabel(lastLevel + 1)} is open.` : "";
            setStatus(`${dealLabel(lastLevel)} cleared with ${movesLeft} moves left; par was ${parTarget}. Replay for the lantern pin.${nextDeal}`, "cleared");
        }
    }

    function updateLivePar(game) {
        const movesLeft = Math.max(0, Math.floor(Number(game.movesLeft) || 0));
        const target = parTargetFor(lastLevel);
        if (!target) {
            setStatus(readyMessage(lastLevel), "ready");
            return;
        }

        const roomToSpend = movesLeft - target;
        if (roomToSpend < 0) {
            setStatus(`Par missed (${movesLeft} left; ${target} needed). Keep sorting: any clear still opens the next deal.`, "missed");
        } else if (roomToSpend <= 3) {
            const cue = roomToSpend === 0
                ? "Any further move drops the pin."
                : `You can spend ${roomToSpend} more move${roomToSpend === 1 ? "" : "s"} and keep it.`;
            setStatus(`Par is close: ${movesLeft} moves left, ${target} needed. ${cue}`, "close");
        } else {
            setStatus(`${movesLeft} moves left. Keep ${target} in reserve for the lantern pin.`, "safe");
        }
    }

    function sync() {
        const game = readGameState();
        if (!game) {
            window.setTimeout(sync, 200);
            return;
        }

        campaign.hidden = false;
        lastLevel = Math.max(0, Math.min(LEVEL_COUNT - 1, Number(game.levelNumber || 1) - 1));

        if (game.dealType === "curated" && game.mode === "won") {
            const winKey = `${lastLevel}:${game.score}:${game.movesLeft}`;
            if (winKey !== lastWinKey) {
                recordWin(game);
                lastWinKey = winKey;
            }
        } else if (game.dealType === "curated" && game.mode === "playing") {
            lastWinKey = "";
            updateLivePar(game);
        } else if (game.dealType === "generated") {
            lastWinKey = "";
            setStatus("Story deals complete | keep sorting with an endless stream of generated mixes.", "ready");
        } else if (game.mode === "lost") {
            lastWinKey = "";
            const target = parTargetFor(lastLevel);
            setStatus(`This deal can be replayed. The ${target}-move lantern par is optional; any clear opens the next deal.`, "lost");
        } else {
            lastWinKey = "";
            setStatus(readyMessage(lastLevel), "ready");
        }

        renderMenu(lastLevel);
        window.setTimeout(sync, 350);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const level = Number(button.dataset.wordLevel);
            if (level > progress.unlocked || typeof window.__wordsort_debug_set_level !== "function") return;
            window.__wordsort_debug_set_level(level);
            lastLevel = level;
            lastWinKey = "";
            setStatus(readyMessage(level), "ready");
            renderMenu(level);
        });
    });

    renderMenu(0);
    setStatus(readyMessage(0), "ready");
    sync();
}());
