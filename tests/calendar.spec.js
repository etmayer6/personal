const { test, expect } = require("@playwright/test");

for (const viewport of [
    { name: "desktop", width: 1280, height: 900 },
    { name: "mobile", width: 390, height: 844 }
]) {
    test(`calendar builds a private scheduling note at ${viewport.name} width`, async ({ page }) => {
        const consoleErrors = [];
        page.on("console", message => {
            if (message.type() === "error") consoleErrors.push(message.text());
        });

        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto("/calendar/");

        await expect(page.locator("body")).toHaveAttribute("data-demo-state", "ready");
        await expect(page.getByRole("heading", { name: "Bring two good options." })).toBeVisible();
        await expect(page.locator("#plan-timezone")).not.toHaveValue("");

        await page.getByText("Project chat", { exact: true }).click();
        await page.locator("#plan-duration").selectOption("60");
        await page.locator("#plan-date-a").fill("2027-02-14");
        await page.locator("#plan-window-a").selectOption("morning");
        await page.locator("#plan-date-b").fill("2027-02-16");
        await page.locator("#plan-window-b").selectOption("evening");

        const summary = page.locator("#plan-summary");
        await expect(summary).toContainText("talk through a project for an hour");
        await expect(summary).toContainText("Sunday, Feb 14, 9–11 AM");
        await expect(summary).toContainText("Tuesday, Feb 16, 6–8 PM");

        await page.getByRole("button", { name: "Copy scheduling note" }).click();
        await expect(page.locator("#plan-feedback")).toContainText(/Copied|copy it manually/);

        await page.getByRole("button", { name: "Start over" }).click();
        await expect(summary).toContainText("catch up for 45 minutes");
        await expect(summary).not.toContainText("Feb 14");

        const dimensions = await page.locator("html").evaluate(element => ({
            clientWidth: element.clientWidth,
            scrollWidth: element.scrollWidth
        }));
        expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
        expect(consoleErrors).toEqual([]);
    });
}
