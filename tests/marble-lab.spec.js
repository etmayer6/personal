const { test, expect } = require("@playwright/test");

test("Marble Lab contacts rebound cleanly and show the impact", async ({ page }, testInfo) => {
    const pageErrors = [];
    const consoleErrors = [];
    page.on("pageerror", (error) => pageErrors.push(String(error)));
    page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
    });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.addInitScript(() => { window.requestAnimationFrame = () => 0; });
    await page.goto("/marble-lab/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).toHaveAttribute("data-demo-state", "ready");

    const contact = await page.evaluate(async () => {
        const [{ Simulation }, { Renderer }, { createMachine, R }] = await Promise.all([
            import("/marble-lab/physics.js"),
            import("/marble-lab/render.js"),
            import("/marble-lab/model.js")
        ]);
        const machine = createMachine("blank");
        const sim = new Simulation(machine);
        const ball = (id, x, vx) => ({
            id, x, y: 380, vx, vy: 0, r: R, color: "#508e98", status: "active",
            bellHits: new Set(), portalHits: 0, cooldowns: new Map(), trail: [], age: 0
        });
        sim.running = true;
        sim.balls = [ball(1, 500, 100), ball(2, 518, -100)];
        sim.tick(1 / 120);
        const effect = sim.effects.find((item) => item.type === "marble-hit");
        const [first, second] = sim.balls;
        const relativeAfter = (second.vx - first.vx) * effect.nx + (second.vy - first.vy) * effect.ny;

        const canvas = document.createElement("canvas");
        Object.assign(canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none" });
        const stage = document.querySelector("#lab-stage");
        stage.insertBefore(canvas, stage.querySelector(".stage-top"));
        const renderer = new Renderer(canvas);
        renderer.fit();
        renderer.draw(machine, sim);

        return { type: effect.type, impact: effect.impact, relativeAfter };
    });

    expect(contact.type).toBe("marble-hit");
    expect(contact.impact).toBeGreaterThan(150);
    expect(contact.relativeAfter).toBeGreaterThan(0);
    expect(contact.relativeAfter / contact.impact).toBeCloseTo(0.92, 2);
    await page.locator("#lab-stage").screenshot({ path: testInfo.outputPath("marble-contact.png") });
    expect(pageErrors, pageErrors.join("\n")).toEqual([]);
    expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
});
