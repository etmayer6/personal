const fs = require("fs");
const path = require("path");

const SITE_ROOT = path.resolve(__dirname, "..");

const primaryNavigation = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about/" },
    { label: "Resume", path: "/resume/" },
    { label: "Projects", path: "/projects/" },
    { label: "Games", path: "/games/" },
    { label: "Photos", path: "/photos/" },
    { label: "Blog", path: "/blog/" }
];

const interactiveMetadata = {
    "/courseflow/": { name: "CourseFlow", marker: "CourseFlow", ready: ".page" },
    "/word-sort/": { name: "Word Sort", marker: "Word Sort", ready: "#word-sort-root", featured: true },
    "/apartments/": { name: "Apartment Hunt", marker: "Apartment Hunt", ready: ".listing-card" },
    "/travel/": { name: "Travel Map", marker: "Places I Have Been", ready: ".place-card" },
    "/block-blast/": { name: "Block Blast", marker: "Block Blast", ready: "#block-blast-root" },
    "/groggy-climbs/": { name: "Groggy Climbs", marker: "Recommended Routes", ready: ".route-card" },
    "/diet-tracker/": { name: "Diet Tracker", marker: "A calmer way to log a meal", ready: "#meal-list" },
    "/meal-planner/": { name: "Receipt Meal Planner", marker: "Receipt Meal Planner", ready: "#recipe-list" },
    "/childhood-timeline/": { name: "Childhood Timeline", marker: "Childhood Timeline", ready: ".timeline-event" },
    "/garage/": { name: "Garage", marker: "Put the whole machine", ready: ".finding-card" },
    "/flight-radar/": { name: "Iowa Skywatch", marker: "Iowa Skywatch", ready: ".aircraft-marker" },
    "/whiteboard/": { name: "Idea Whiteboard", marker: "Idea Whiteboard", ready: "#whiteboard-canvas" },
    "/pet-studio/": { name: "Pet Studio", marker: "Pet Studio", ready: "#pet-form" },
    "/pinpoint/": { name: "Pinpoint", marker: "Pinpoint", ready: "#location-image" },
    "/conway/": { name: "Conway", marker: "Conway", ready: "#life-canvas" },
    "/aquarium/": { name: "Mola Mola", marker: "mola mola", ready: "#aquarium-canvas" },
    "/gremlin-lab/": { name: "Gremlin Physics Lab", marker: "Make a mess.", ready: "#lab-canvas" },
    "/flight-sim/": { name: "Flight Sim", marker: "Choose a flight condition", ready: "#flight-sim-root" },
    "/flight-sequence/": { name: "Flight Sequence", marker: "Flight sequence.", ready: "#flight-sequence-canvas" },
    "/calendar/": { name: "Calendar", marker: "Make a little time.", ready: "main" },
    "/night-shift/": { name: "Night Shift", marker: "The doors stay locked", ready: "main" }
};

const redirectMetadata = {
    "/scenario-lab/": { name: "Scenario Lab", target: "/flight-sim/" }
};

// This is the small registry the portfolio page currently expresses in HTML.
// Keeping it beside the checks lets tests catch stale project totals and links.
const projectRegistry = [
    { name: "CourseFlow", path: "/courseflow/", featured: true },
    { name: "Flight Scenario Lab", path: "/flight-sim/", featured: true },
    { name: "Word Sort Solitaire", path: "/word-sort/", featured: true },
    { name: "Travel Map", path: "/travel/" },
    { name: "Block Blast", path: "/block-blast/" },
    { name: "Diet Tracker", path: "/diet-tracker/" },
    { name: "Receipt Meal Planner", path: "/meal-planner/" },
    { name: "Childhood Timeline", path: "/childhood-timeline/" },
    { name: "Iowa Skywatch", path: "/flight-radar/" },
    { name: "Idea Whiteboard", path: "/whiteboard/" },
    { name: "Pet Studio", path: "/pet-studio/" },
    { name: "Pinpoint", path: "/pinpoint/" },
    { name: "Conway's Game of Life", path: "/conway/" },
    { name: "Mola Mola", path: "/aquarium/" },
    { name: "Gremlin Physics Lab", path: "/gremlin-lab/" },
    { name: "Root / Shift", path: "/plant-to-ape/" },
    { name: "Apartment Hunt", path: "/apartments/" },
    { name: "Groggy Climbs", path: "/groggy-climbs/" },
    { name: "Zulip", href: "https://github.com/etmayer6/zulip", external: true },
    { name: "SE / COM S 319", href: "https://github.com/etmayer6/secoms319", external: true },
    { name: "Garage Diagnostic Bay", path: "/garage/" }
];

function routeFromIndex(filePath) {
    const relative = path.relative(SITE_ROOT, filePath).replaceAll(path.sep, "/");
    const directory = path.posix.dirname(relative);
    return directory === "." ? "/" : `/${directory}/`;
}

function discoverIndexRoutes(directory = SITE_ROOT) {
    const ignoredDirectories = new Set([".git", "node_modules", "output"]);
    const routes = [];

    function visit(currentDirectory) {
        for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
            if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
            const entryPath = path.join(currentDirectory, entry.name);
            if (entry.isDirectory()) {
                visit(entryPath);
            } else if (entry.isFile() && entry.name.toLowerCase() === "index.html") {
                routes.push(routeFromIndex(entryPath));
            }
        }
    }

    visit(directory);
    return [...new Set(routes)].sort();
}

function routeName(routePath) {
    if (routePath === "/") return "Home";
    return routePath
        .split("/")
        .filter(Boolean)
        .at(-1)
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

const redirectRoutes = Object.entries(redirectMetadata).map(([routePath, metadata]) => ({
    path: routePath,
    ...metadata,
    redirect: true
}));

const publicRoutes = discoverIndexRoutes()
    .concat("/404.html")
    .filter((routePath) => !redirectMetadata[routePath])
    .map((routePath) => ({
    path: routePath,
    name: interactiveMetadata[routePath]?.name || routeName(routePath),
    ...(interactiveMetadata[routePath] || {}),
    interactive: Boolean(interactiveMetadata[routePath])
    }));

const interactiveRoutes = Object.entries(interactiveMetadata).map(([routePath, metadata]) => ({
    path: routePath,
    ...metadata,
    interactive: true
}));

module.exports = {
    SITE_ROOT,
    primaryNavigation,
    interactiveMetadata,
    interactiveRoutes,
    redirectRoutes,
    projectRegistry,
    publicRoutes,
    discoverIndexRoutes
};
