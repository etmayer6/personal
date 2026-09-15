const { test, expect } = require("@playwright/test");

const boardState = {
    tool: "select",
    color: "#102b36",
    strokeWidth: 4,
    fill: false,
    showGrid: true,
    zoom: 1,
    shapes: [
        { id: 1, type: "note", text: "Weekend idea", x: 250, y: 300, w: 270, h: 70, color: "#102b36", strokeWidth: 3, noteFill: "#fff1a8" },
        { id: 2, type: "note", text: "Invite friends", x: 1030, y: 300, w: 270, h: 70, color: "#102b36", strokeWidth: 3, noteFill: "#d7f2ea" }
    ]
};

async function boardPoint(canvas, x, y) {
    const bounds = await canvas.boundingBox();
    return {
        x: bounds.x + x / 1600 * bounds.width,
        y: bounds.y + y / 950 * bounds.height
    };
}

for (const viewport of [
    { name: "desktop", width: 1280, height: 900 },
    { name: "mobile", width: 390, height: 844 }
]) {
    test(`whiteboard connectors remain attached at ${viewport.name} width`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.addInitScript((savedState) => {
            window.localStorage.setItem("ethan-site-whiteboard-v1", JSON.stringify(savedState));
        }, boardState);
        await page.goto("/whiteboard/");

        const canvas = page.locator("#whiteboard-canvas");
        await expect(canvas).toBeVisible();
        await expect(page.locator("[data-tool='line']")).toHaveAttribute("title", "Connect two objects (L)");
        await page.locator("[data-tool='line']").click();

        const source = await boardPoint(canvas, 385, 335);
        const target = await boardPoint(canvas, 1165, 335);
        await page.mouse.move(source.x, source.y);
        await page.mouse.down();
        await page.mouse.move(target.x, target.y, { steps: 8 });
        await page.mouse.up();

        await expect(page.locator("#board-status")).toHaveText("Ideas linked. Move either object and the connector will follow.");
        const linked = await page.evaluate(() => JSON.parse(window.localStorage.getItem("ethan-site-whiteboard-v1")));
        const connector = linked.shapes.find((shape) => shape.type === "line");
        expect(connector.fromId).toBe(1);
        expect(connector.toId).toBe(2);

        await page.locator("[data-tool='select']").click();
        const movedSource = await boardPoint(canvas, 535, 435);
        await page.mouse.move(source.x, source.y);
        await page.mouse.down();
        await page.mouse.move(movedSource.x, movedSource.y, { steps: 8 });
        await page.mouse.up();

        const moved = await page.evaluate(() => JSON.parse(window.localStorage.getItem("ethan-site-whiteboard-v1")));
        const movedConnector = moved.shapes.find((shape) => shape.type === "line");
        expect(movedConnector.fromId).toBe(1);
        expect(movedConnector.toId).toBe(2);
        expect(movedConnector.x1).toBeGreaterThan(connector.x1 + 40);
        expect(movedConnector.y1).toBeGreaterThan(connector.y1 + 40);

        const bodyWidth = await page.locator("body").evaluate((element) => element.scrollWidth);
        expect(bodyWidth).toBeLessThanOrEqual(viewport.width + 1);
    });
}
