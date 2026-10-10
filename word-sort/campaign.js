(function () {
    "use strict";

    const STORAGE_KEY = "word-sort-story-progress-v1";
    const LEVEL_COUNT = 8;
    const campaign = document.getElementById("wordsort-campaign");
    const count = document.getElementById("wordsort-campaign-count");
    const status = document.getElementById("wordsort-campaign-status");
    const buttons = Array.from(document.querySelectorAll("[data-word-level]"));

    if (!campaign || !buttons.length) return;

    function readProgress() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
            if (!saved || typeof saved !== "object") return { unlocked: 0, cleared: [], bestScores: {} };
            return {
                unlocked: Math.max(0, Math.min(LEVEL_COUNT - 1, Math.floor(Number(saved.unlocked) || 0))),
                cleared: Array.isArray(saved.cleared) ? saved.cleared.filter((level) => Number.isInteger(level) && level >= 0 && level < LEVEL_COUNT) : [],
                bestScores: saved.bestScores && typeof saved.bestScores === "object" ? saved.bestScores : {}
            };
        } catch (error) {
            return { unlocked: 0, cleared: [], bestScores: {} };
        }
    }

    let progress = readProgress();
    let lastLevel = 0;

    function saveProgress() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            // The story run still works when storage is unavailable.
        }
    }

    function renderMenu(activeLevel) {
        const cleared = new Set(progress.cleared);
        count.textContent = `${cleared.size} / ${LEVEL_COUNT} cleared`;
        buttons.forEach((button) => {
            const level = Number(button.dataset.wordLevel);
            button.disabled = level > progress.unlocked;
            button.classList.toggle("is-cleared", cleared.has(level));
            button.classList.toggle("is-current", level === activeLevel);
            if (level === activeLevel) button.setAttribute("aria-current", "step");
            else button.removeAttribute("aria-current");
            const label = button.querySelector("span");
            if (label) label.dataset.mark = cleared.has(level) ? "cleared" : "";
            const bestScore = Math.max(0, Number(progress.bestScores[level]) || 0);
            const bestLabel = button.querySelector("[data-word-best]");
            if (bestLabel) bestLabel.textContent = bestScore ? `${bestScore.toLocaleString()} pts` : "";
            const dealName = label ? label.textContent.trim() : `Deal ${level + 1}`;
            const completion = cleared.has(level) ? "cleared" : button.disabled ? "locked" : "open";
            button.setAttribute("aria-label", `Deal ${String(level + 1).padStart(2, "0")}, ${dealName}, ${completion}${bestScore ? `, best score ${bestScore}` : ""}`);
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

    function sync() {
        const game = readGameState();
        if (!game) {
            window.setTimeout(sync, 200);
            return;
        }
        campaign.hidden = false;
        lastLevel = Math.max(0, Math.min(LEVEL_COUNT - 1, Number(game.levelNumber || 1) - 1));

        if (game.dealType === "curated" && game.mode === "won") {
            const wasCleared = progress.cleared.includes(lastLevel);
            if (!wasCleared) progress.cleared.push(lastLevel);
            const score = Math.max(0, Number(game.score) || 0);
            progress.bestScores[lastLevel] = Math.max(Number(progress.bestScores[lastLevel]) || 0, score);
            progress.unlocked = Math.max(progress.unlocked, Math.min(lastLevel + 1, LEVEL_COUNT - 1));
            saveProgress();
            status.textContent = lastLevel === LEVEL_COUNT - 1 && progress.cleared.length === LEVEL_COUNT
                ? "Story complete. Every authored deal is yours to replay; generated mixes are waiting after the final crown."
                : `Deal ${String(lastLevel + 1).padStart(2, "0")} cleared · ${lastLevel < LEVEL_COUNT - 1 ? "the next deal is open" : "the story is complete"}. Hints point to a legal move and explain its connection.`;
        } else if (game.dealType === "generated") {
            status.textContent = "Story deals complete · keep sorting with an endless stream of generated mixes.";
        } else if (game.mode === "lost") {
            status.textContent = "This deal can be replayed any time. Use Hint when you want a nudge toward a legal move.";
        }

        renderMenu(lastLevel);
        window.setTimeout(sync, 350);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const level = Number(button.dataset.wordLevel);
            if (level > progress.unlocked || typeof window.__wordsort_debug_set_level !== "function") return;
            window.__wordsort_debug_set_level(level);
            status.textContent = `Deal ${String(level + 1).padStart(2, "0")} selected · clear it to record your best and open the next deal.`;
            renderMenu(level);
        });
    });

    renderMenu(0);
    sync();
}());
