const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    timeout: 30000,
    expect: { timeout: 5000 },
    fullyParallel: true,
    workers: 2,
    reporter: "list",
    use: {
        baseURL: "http://127.0.0.1:4175",
        reducedMotion: "reduce",
        trace: "retain-on-failure"
    }
});
