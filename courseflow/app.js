(function () {
    "use strict";

    const DATA = window.COURSEFLOW_DATA;
    const STORAGE_KEY = "courseflow-faithful-demo-v1";
    const ROUTES = new Set(["home", "flowchart", "catalog", "majors", "current", "course-reviews", "professors", "badges", "games", "dining", "profile", "settings"]);
    const ICONS = {
        home: "&#8962;", flowchart: "&#8644;", catalog: "&#9638;", majors: "&#9776;", current: "&#128197;",
        "course-reviews": "&#128172;", professors: "&#9733;", badges: "&#11088;", games: "&#9201;", dining: "&#9749;", profile: "&#9786;"
    };
    const NAV_GROUPS = [
        { title: "Overview", routes: ["home"] },
        { title: "Plan", routes: ["flowchart", "catalog", "majors"] },
        { title: "Current Semester", routes: ["current"] },
        { title: "Explore", routes: ["course-reviews", "professors", "badges"] },
        { title: "More", routes: ["games", "dining", "profile"] }
    ];
    const ROUTE_LABELS = {
        home: "Home", flowchart: "Flowchart Dashboard", catalog: "Course Catalog", majors: "Majors Browse",
        current: "Current Classes", "course-reviews": "Course Reviews", professors: "Professor Reviews",
        badges: "Course Badges", games: "Games", dining: "Dining Halls", profile: "Profile", settings: "Settings"
    };
    const DEPT_COLORS = { SE: "#dc2626", COMS: "#2563eb", CPRE: "#7c3aed", MATH: "#0891b2", ENGL: "#d97706", SPCM: "#ea580c", STAT: "#059669", CYBE: "#475569" };

    const defaults = {
        terms: clone(DATA.terms),
        settings: { theme: "default", compact: false, notifications: true },
        customCourseReviews: [],
        customProfessorReviews: [],
        puzzleSolved: false
    };
    const saved = loadState();
    const state = {
        route: routeFromHash(),
        terms: saved.terms || defaults.terms,
        settings: Object.assign({}, defaults.settings, saved.settings || {}),
        customCourseReviews: saved.customCourseReviews || [],
        customProfessorReviews: saved.customProfessorReviews || [],
        puzzleSolved: Boolean(saved.puzzleSolved),
        flowPanel: "",
        showInsights: false,
        selectedCourse: null,
        catalog: { search: "", department: "", level: "" },
        selectedReviewCourse: DATA.courseReviews[0].course,
        selectedProfessor: DATA.professors[0].id
    };

    const main = document.getElementById("app-main");
    const nav = document.getElementById("primary-nav");
    const sidebar = document.getElementById("app-sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    const toast = document.getElementById("toast");
    const dialog = document.getElementById("app-dialog");
    const commandDialog = document.getElementById("command-dialog");
    let toastTimer = null;

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function loadState() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch (error) {
            return {};
        }
    }

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            terms: state.terms,
            settings: state.settings,
            customCourseReviews: state.customCourseReviews,
            customProfessorReviews: state.customProfessorReviews,
            puzzleSolved: state.puzzleSolved
        }));
    }

    function routeFromHash() {
        const route = location.hash.replace(/^#\/?/, "").split("?")[0];
        return ROUTES.has(route) ? route : "home";
    }

    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>'"]/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[char];
        });
    }

    function courseById(id) {
        return DATA.courses.find(function (course) { return course.id === id; });
    }

    function displayCode(id) {
        return String(id).replace("_", " ");
    }

    function deptColor(course) {
        return DEPT_COLORS[course.department] || "#64748b";
    }

    function creditsFor(ids) {
        return ids.reduce(function (sum, id) {
            const course = courseById(id);
            return sum + (course ? course.credits : 0);
        }, 0);
    }

    function planMetrics() {
        let completed = DATA.student.priorCredits;
        let inProgress = 0;
        let planned = 0;
        state.terms.forEach(function (term) {
            const credits = creditsFor(term.courses);
            if (term.status === "COMPLETED") completed += credits;
            if (term.status === "IN PROGRESS") inProgress += credits;
            if (term.status === "PLANNED") planned += credits;
        });
        const applied = Math.min(DATA.student.targetCredits, completed + inProgress);
        return { completed: completed, inProgress: inProgress, planned: planned, applied: applied, percent: Math.round(applied / DATA.student.targetCredits * 100) };
    }

    function coursePlacement(id) {
        return state.terms.find(function (term) { return term.courses.includes(id); }) || null;
    }

    function validatePlan() {
        const issues = [];
        const termIndex = new Map();
        state.terms.forEach(function (term, index) {
            term.courses.forEach(function (id) { termIndex.set(id, index); });
        });
        state.terms.forEach(function (term, index) {
            term.courses.forEach(function (id) {
                const course = courseById(id);
                if (!course) return;
                course.prerequisites.forEach(function (prerequisite) {
                    const prereqIndex = termIndex.get(prerequisite);
                    if (prereqIndex === undefined) {
                        issues.push(displayCode(id) + " is missing " + displayCode(prerequisite));
                    } else if (prereqIndex >= index) {
                        issues.push(displayCode(prerequisite) + " must come before " + displayCode(id));
                    }
                });
            });
        });
        return issues;
    }

    function applyPreferences() {
        document.documentElement.classList.remove("theme-ocean", "theme-forest", "compact-mode");
        if (state.settings.theme === "ocean") document.documentElement.classList.add("theme-ocean");
        if (state.settings.theme === "forest") document.documentElement.classList.add("theme-forest");
        if (state.settings.compact) document.documentElement.classList.add("compact-mode");
    }

    function navigate(route) {
        const next = ROUTES.has(route) ? route : "home";
        if (location.hash !== "#" + next) {
            location.hash = next;
            return;
        }
        state.route = next;
        render();
    }

    function renderNav() {
        nav.innerHTML = NAV_GROUPS.map(function (group) {
            const items = group.routes.map(function (route) {
                return "<button class=\"nav-item " + (state.route === route ? "is-active" : "") + "\" type=\"button\" data-route=\"" + route + "\">" +
                    "<span class=\"nav-icon\" aria-hidden=\"true\">" + ICONS[route] + "</span><span>" + ROUTE_LABELS[route] + "</span></button>";
            }).join("");
            return "<section class=\"nav-section\"><p class=\"nav-section-title\">" + group.title + "</p>" + items + "</section>";
        }).join("");
    }

    function pageHeading(kicker, title, description, actions) {
        return "<header class=\"page-heading\"><div><p class=\"eyebrow\">" + kicker + "</p><h1>" + title + "</h1><p>" + description + "</p></div>" +
            (actions ? "<div class=\"heading-actions\">" + actions + "</div>" : "") + "</header>";
    }

    function render() {
        renderNav();
        applyPreferences();
        const renderers = {
            home: renderHome, flowchart: renderFlowchart, catalog: renderCatalog, majors: renderMajors, current: renderCurrent,
            "course-reviews": renderCourseReviews, professors: renderProfessors, badges: renderBadges, games: renderGames,
            dining: renderDining, profile: renderProfile, settings: renderSettings
        };
        main.innerHTML = renderers[state.route]();
        main.focus({ preventScroll: true });
        closeSidebar();
    }

    function renderHome() {
        const metrics = planMetrics();
        const grouped = ["PLAN", "CURRENT SEMESTER", "EXPLORE", "PROFILE & SOCIAL", "MORE"];
        const today = new Date();
        const dateLabel = today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
        const modules = grouped.map(function (group) {
            const groupModules = DATA.modules.filter(function (module) { return module.group === group; });
            if (!groupModules.length) return "";
            const description = {
                PLAN: "Build and adjust your degree path.", "CURRENT SEMESTER": "Keep track of what is happening now.",
                EXPLORE: "Research courses and instructors.", "PROFILE & SOCIAL": "Your progress and CourseFlow identity.", MORE: "Helpful campus tools."
            }[group];
            return "<section class=\"module-section\"><div class=\"section-heading\"><div><h2>" + titleCase(group) + "</h2><p>" + description + "</p></div></div>" +
                "<div class=\"module-grid\">" + groupModules.map(moduleCard).join("") + "</div></section>";
        }).join("");
        const quickRoutes = ["home", "flowchart", "catalog", "current", "course-reviews", "professors", "badges", "profile"];
        return "<div class=\"page home-grid\"><section class=\"home-surface\"><div class=\"hero-copy\"><h1>Welcome back, Avery.</h1><p>Here's your schedule and planning tools for today.</p>" +
            "<section class=\"timeline-shell\"><div class=\"timeline-header\"><div><h2>Today's timeline</h2><p>" + dateLabel + "</p></div><span class=\"pill green\">3 classes scheduled</span></div>" + renderTimeline() + "</section></div>" + modules + "</section>" +
            "<aside class=\"card quick-panel\"><h2>Quick actions</h2><div class=\"quick-list\">" + quickRoutes.map(function (route) {
                return "<button class=\"quick-item " + (route === "home" ? "is-active" : "") + "\" type=\"button\" data-route=\"" + route + "\"><span aria-hidden=\"true\">" + ICONS[route] + "</span><span>" + ROUTE_LABELS[route] + "</span></button>";
            }).join("") + "</div><div class=\"progress-mini\"><header><strong>Degree progress</strong><span>" + metrics.percent + "%</span></header><div class=\"progress-bar\"><span style=\"width:" + metrics.percent + "%\"></span></div><p>" + metrics.applied + " of " + DATA.student.targetCredits + " credits applied</p></div></aside></div>";
    }

    function titleCase(value) {
        return value.toLowerCase().replace(/(^|\s|&)\w/g, function (char) { return char.toUpperCase(); });
    }

    function moduleCard(module) {
        return "<button class=\"module-card " + (module.featured ? "featured" : "") + "\" type=\"button\" data-route=\"" + module.id + "\">" +
            "<span class=\"module-arrow\" aria-hidden=\"true\">&#8599;</span><img src=\"" + module.image + "\" alt=\"\" loading=\"lazy\"><h3>" + module.title + "</h3><p>" + module.description + "</p></button>";
    }

    function renderTimeline() {
        return "<div class=\"timeline-board\"><div class=\"timeline-track\">" + DATA.today.map(function (entry) {
            const left = Math.max(0, (entry.start - 8) / 9 * 100);
            const width = Math.max(14, (entry.end - entry.start) / 9 * 100);
            return "<button class=\"timeline-event\" type=\"button\" data-course=\"" + entry.course + "\" style=\"left:" + left + "%;width:" + width + "%\"><strong>" + displayCode(entry.course) + "</strong><span>" + entry.time + "</span><span>" + entry.location + "</span></button>";
        }).join("") + "</div><div class=\"timeline-hours\"><span>8 AM</span><span>10 AM</span><span>12 PM</span><span>2 PM</span><span>4 PM</span><span>5 PM</span></div></div>";
    }

    function renderFlowchart() {
        const metrics = planMetrics();
        const issues = validatePlan();
        const planningTerms = state.terms.filter(function (term) { return term.status !== "COMPLETED"; });
        const termOptions = planningTerms.map(function (term, index) { return "<option value=\"" + term.id + "\" " + (index === 0 ? "selected" : "") + ">" + term.label + "</option>"; }).join("");
        const terms = state.terms.map(function (term) {
            const statusColor = term.status === "COMPLETED" ? "#059669" : term.status === "IN PROGRESS" ? "#2563eb" : "#94a3b8";
            return "<section class=\"term-node\" data-term=\"" + term.id + "\"><header class=\"term-node-header\"><h2>" + term.label + "</h2><span>" + creditsFor(term.courses) + " credits &middot; " + term.status + "</span></header>" +
                "<div class=\"term-courses\">" + term.courses.map(function (id) {
                    const course = courseById(id);
                    if (!course) return "";
                    return "<button class=\"course-node " + (state.selectedCourse === id ? "is-selected" : "") + "\" type=\"button\" draggable=\"true\" data-course=\"" + id + "\" data-drag-course=\"" + id + "\" style=\"--dept:" + deptColor(course) + ";--status:" + statusColor + "\"><em></em><strong>" + displayCode(id) + "</strong><span>" + course.title + "</span></button>";
                }).join("") + "</div></section>";
        }).join("");
        return "<div class=\"page\">" + pageHeading("Flowchart Dashboard", "Your degree plan", "Move courses between semesters, inspect dependencies, and review your progress.", "<button class=\"secondary-button\" type=\"button\" data-route=\"home\">Back to modules</button>") +
            "<div class=\"dashboard-shell\"><aside class=\"dashboard-controls\"><section class=\"card control-card\"><h2>Panels</h2>" +
            "<button class=\"secondary-button\" type=\"button\" data-flow-panel=\"scheduler\">Smart Scheduler</button><button class=\"secondary-button\" type=\"button\" data-flow-panel=\"catalog\">Mini Catalog</button><button class=\"secondary-button\" type=\"button\" data-route=\"catalog\">Course Catalog</button></section>" +
            "<section class=\"card control-card\"><h2>Insights</h2><button class=\"secondary-button\" type=\"button\" data-action=\"toggle-insights\">" + (state.showInsights ? "Hide" : "Show") + " degree progress</button></section>" +
            "<section class=\"card control-card\"><h2>Quick Edit</h2><label class=\"select-field\">Semester<select id=\"quick-term\">" + termOptions + "</select></label><label class=\"input-field\">Course code<input id=\"quick-course\" placeholder=\"e.g. SE_3390\"></label><button class=\"primary-button\" type=\"button\" data-action=\"quick-add\">Add course</button><button class=\"secondary-button\" type=\"button\" data-action=\"sample-import\">Load sample report</button></section></aside>" +
            "<section class=\"card flowchart-card\"><header class=\"flowchart-toolbar\"><div><h1>Primary Software Engineering Plan</h1><p>Drag courses to reschedule. Select a card for details.</p></div><div class=\"toolbar-tabs\"><button class=\"is-active\">Primary plan</button><button type=\"button\" data-action=\"alternate-plan\">+ Alternate</button></div></header>" +
            "<div class=\"flowchart-body\"><div class=\"flowchart-terms\">" + terms + "</div></div>" +
            renderFlowPanel() +
            "<section class=\"flowchart-insights " + (state.showInsights ? "is-open" : "") + "\"><div class=\"insight-card\"><span class=\"card-label\">Degree progress</span><strong>" + metrics.percent + "%</strong><div class=\"major-progress\"><span style=\"width:" + metrics.percent + "%\"></span></div><p>" + metrics.applied + " / " + DATA.student.targetCredits + " applied credits</p></div>" +
            "<div class=\"insight-card\"><span class=\"card-label\">Completed</span><strong>" + metrics.completed + "</strong><p>credits finished</p></div><div class=\"insight-card\"><span class=\"card-label\">In progress</span><strong>" + metrics.inProgress + "</strong><p>credits this term</p></div><div class=\"insight-card\"><span class=\"card-label\">Plan checks</span><strong>" + issues.length + "</strong><p>" + (issues[0] || "No prerequisite conflicts") + "</p></div></section></section></div></div>";
    }

    function renderFlowPanel() {
        if (!state.flowPanel) return "<div class=\"panel-drawer\"></div>";
        if (state.flowPanel === "catalog") {
            const available = DATA.courses.filter(function (course) { return !coursePlacement(course.id); }).slice(0, 6);
            return "<section class=\"panel-drawer is-open\"><div class=\"section-heading\"><div><h2>Mini Course Catalog</h2><p>Add an unscheduled course without leaving your flowchart.</p></div><button class=\"icon-button\" type=\"button\" data-flow-panel=\"\">&times;</button></div><div class=\"mini-catalog-grid\">" + available.map(function (course) {
                return "<article class=\"mini-course\"><strong>" + displayCode(course.id) + " &middot; " + course.credits + " cr</strong><p>" + course.title + "</p><button class=\"secondary-button\" type=\"button\" data-add-course=\"" + course.id + "\">Add to flowchart</button></article>";
            }).join("") + "</div></section>";
        }
        const suggestions = DATA.courses.filter(function (course) {
            return !coursePlacement(course.id) && course.prerequisites.every(function (id) { return Boolean(coursePlacement(id)); });
        }).slice(0, 4);
        return "<section class=\"panel-drawer is-open\"><div class=\"section-heading\"><div><h2>Smart Scheduler</h2><p>Suggested next courses based on completed and planned prerequisites.</p></div><button class=\"icon-button\" type=\"button\" data-flow-panel=\"\">&times;</button></div><div class=\"mini-catalog-grid\">" + suggestions.map(function (course) {
            return "<article class=\"mini-course\"><span class=\"pill green\">Prerequisites covered</span><p><strong>" + displayCode(course.id) + "</strong><br>" + course.title + "</p><button class=\"primary-button\" type=\"button\" data-add-course=\"" + course.id + "\">Schedule</button></article>";
        }).join("") + "</div></section>";
    }

    function filteredCourses() {
        const query = state.catalog.search.trim().toLowerCase();
        return DATA.courses.filter(function (course) {
            const matchesSearch = !query || (course.id + " " + course.title + " " + course.description + " " + course.genEd).toLowerCase().includes(query);
            const matchesDepartment = !state.catalog.department || course.department === state.catalog.department;
            const matchesLevel = !state.catalog.level || course.level === state.catalog.level;
            return matchesSearch && matchesDepartment && matchesLevel;
        });
    }

    function renderCatalog() {
        const courses = filteredCourses();
        const departments = Array.from(new Set(DATA.courses.map(function (course) { return course.department; }))).sort();
        return "<div class=\"page\">" + pageHeading("Course Catalog", "Browse courses", "Search by code, title, keyword, department, or level, then add a course directly to your flowchart.", "<button class=\"secondary-button\" type=\"button\" data-route=\"flowchart\">Back to Dashboard</button>") +
            "<div class=\"catalog-layout\"><aside class=\"card filter-panel\"><h2>Filter courses</h2><label class=\"filter-control\">Department<select id=\"catalog-department\"><option value=\"\">All departments</option>" + departments.map(function (dept) { return "<option value=\"" + dept + "\" " + (state.catalog.department === dept ? "selected" : "") + ">" + dept + "</option>"; }).join("") + "</select></label>" +
            "<div class=\"filter-control\"><span>Course level</span><div class=\"level-buttons\"><button class=\"" + (!state.catalog.level ? "is-active" : "") + "\" type=\"button\" data-level=\"\">All</button>" + ["1000", "2000", "3000", "4000"].map(function (level) { return "<button class=\"" + (state.catalog.level === level ? "is-active" : "") + "\" type=\"button\" data-level=\"" + level + "\">" + level.charAt(0) + "000</button>"; }).join("") + "</div></div>" +
            "<button class=\"secondary-button\" type=\"button\" data-action=\"clear-catalog\">Clear filters</button></aside>" +
            "<section class=\"catalog-main\"><div class=\"card catalog-hero\"><span class=\"card-label\">Course Catalog</span><label class=\"catalog-search\"><span aria-hidden=\"true\">&#8981;</span><input id=\"catalog-search\" type=\"search\" value=\"" + escapeHtml(state.catalog.search) + "\" placeholder=\"Search by course code, title, keyword, or gen ed\"></label><div class=\"result-bar\"><div><strong id=\"catalog-result-count\">" + courses.length + " courses found</strong><br><span>Showing all matching placeholder catalog records.</span></div><span id=\"catalog-active-filter\" class=\"pill red\" " + (state.catalog.search || state.catalog.department || state.catalog.level ? "" : "hidden") + ">Filters active</span></div></div>" +
            "<div class=\"course-list\">" + (courses.length ? courses.map(courseRow).join("") : "<div class=\"empty-state\">No courses match those filters.</div>") + "</div></section></div></div>";
    }

    function refreshCatalogResults() {
        const courses = filteredCourses();
        const list = document.querySelector(".course-list");
        const count = document.getElementById("catalog-result-count");
        const activeFilter = document.getElementById("catalog-active-filter");
        if (list) list.innerHTML = courses.length ? courses.map(courseRow).join("") : "<div class=\"empty-state\">No courses match those filters.</div>";
        if (count) count.textContent = courses.length + " courses found";
        if (activeFilter) activeFilter.hidden = !(state.catalog.search || state.catalog.department || state.catalog.level);
    }

    function courseRow(course) {
        const placement = coursePlacement(course.id);
        return "<article class=\"card course-row\"><div class=\"course-code\" style=\"--dept:" + deptColor(course) + "\">" + displayCode(course.id) + "</div><div class=\"course-info\"><h3>" + course.title + "</h3><p>" + course.description + "</p><div class=\"course-meta\"><span class=\"pill\">" + course.credits + " credits</span><span class=\"pill\">" + course.terms.join(" / ") + "</span>" + (course.prerequisites.length ? "<span class=\"pill\">Prereq: " + course.prerequisites.map(displayCode).join(", ") + "</span>" : "<span class=\"pill green\">No prerequisites</span>") + "</div></div><div class=\"course-actions\"><button class=\"secondary-button\" type=\"button\" data-course=\"" + course.id + "\">Details</button>" + (placement ? "<span class=\"pill green\">" + placement.label + "</span>" : "<button class=\"primary-button\" type=\"button\" data-add-course=\"" + course.id + "\">Add to plan</button>") + "</div></article>";
    }

    function renderCurrent() {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const todayIndex = Math.max(0, Math.min(4, new Date().getDay() - 1));
        return "<div class=\"page\">" + pageHeading("Current Semester", "Current classes", "Your imported class schedule and personal events in one weekly view.", "<button class=\"primary-button\" type=\"button\" data-action=\"add-event\">+ Add personal event</button>") +
            "<div class=\"stats-grid\"><article class=\"card stat-card\"><span class=\"card-label\">Active courses</span><strong>4</strong><p>12 credits in progress</p></article><article class=\"card stat-card\"><span class=\"card-label\">Next class</span><strong>11:00</strong><p>SE 3290 in Atanasoff</p></article><article class=\"card stat-card\"><span class=\"card-label\">Events today</span><strong>3</strong><p>Ends at 3:00 PM</p></article><article class=\"card stat-card\"><span class=\"card-label\">Open time</span><strong>2h 55m</strong><p>Between scheduled classes</p></article></div>" +
            "<div class=\"schedule-grid\"><section class=\"card week-card\"><div class=\"section-heading\"><div><h2>Weekly schedule</h2><p>Spring 2026</p></div><span class=\"pill green\">Schedule imported</span></div><div class=\"week-days\">" + days.map(function (day, index) {
                const entries = index === 1 || index === 3 ? DATA.today.slice(0, 2) : index === 0 || index === 2 ? DATA.today : [];
                return "<section class=\"day-column " + (index === todayIndex ? "is-today" : "") + "\"><h3>" + day + (index === todayIndex ? " &middot; Today" : "") + "</h3>" + entries.map(function (entry) { return "<button class=\"class-block\" type=\"button\" data-course=\"" + entry.course + "\"><strong>" + displayCode(entry.course) + "</strong><span>" + entry.time + "</span><span>" + entry.location + "</span></button>"; }).join("") + "</section>";
            }).join("") + "</div></section><aside class=\"card today-list\"><h2>Today's agenda</h2>" + DATA.today.map(function (entry) { return "<button class=\"today-entry\" type=\"button\" data-course=\"" + entry.course + "\"><time>" + entry.time.split(" - ")[0] + "</time><span><strong>" + displayCode(entry.course) + "</strong><span>" + entry.title + "</span><span>" + entry.location + "</span></span></button>"; }).join("") + "</aside></div></div>";
    }

    function renderMajors() {
        return "<div class=\"page\">" + pageHeading("Plan", "Majors Browse", "Compare placeholder Iowa State programs and inspect how your current courses overlap.", "<button class=\"secondary-button\" data-route=\"flowchart\">Open your flowchart</button>") +
            "<div class=\"major-grid\">" + DATA.majors.map(function (major, index) { return "<article class=\"card major-card\"><span class=\"pill " + (index === 0 ? "red" : "") + "\">" + (index === 0 ? "Current major" : major.college) + "</span><h2 style=\"margin-top:13px\">" + major.name + "</h2><p>" + major.description + "</p><div class=\"major-progress\"><span style=\"width:" + major.progress + "%\"></span></div><p><strong>" + major.progress + "% overlap</strong> &middot; " + major.credits + " credits</p><button class=\"secondary-button\" type=\"button\" data-major=\"" + index + "\">View requirements</button></article>"; }).join("") + "</div></div>";
    }

    function courseReviewWithCustom(base) {
        const custom = state.customCourseReviews.filter(function (review) { return review.course === base.course; });
        if (!custom.length) return base;
        const rating = (base.rating * base.count + custom.reduce(function (sum, review) { return sum + review.rating; }, 0)) / (base.count + custom.length);
        return Object.assign({}, base, { rating: Number(rating.toFixed(1)), count: base.count + custom.length, quote: custom[custom.length - 1].text });
    }

    function renderCourseReviews() {
        const reviews = DATA.courseReviews.map(courseReviewWithCustom);
        const selected = reviews.find(function (review) { return review.course === state.selectedReviewCourse; }) || reviews[0];
        const course = courseById(selected.course);
        return "<div class=\"page\">" + pageHeading("Explore", "Course Reviews", "Search courses and read student feedback about workload, difficulty, and outcomes.", "") +
            "<div class=\"split-layout\"><aside class=\"card list-panel\"><div class=\"list-panel-header\"><strong>Browse reviewed courses</strong><input id=\"review-search\" placeholder=\"Search courses\"></div><div class=\"select-list\" id=\"review-course-list\">" + reviews.map(function (review) { const item = courseById(review.course); return "<button class=\"select-row " + (review.course === selected.course ? "is-active" : "") + "\" type=\"button\" data-review-course=\"" + review.course + "\"><span><strong>" + displayCode(review.course) + "</strong><small>" + item.title + "</small></span><span class=\"rating\">&#9733; " + review.rating + "</span></button>"; }).join("") + "</div></aside>" +
            renderCourseReviewDetail(selected, course) + "</div></div>";
    }

    function renderCourseReviewDetail(review, course) {
        return "<section class=\"card detail-panel\"><div class=\"detail-hero\"><div><span class=\"pill red\">" + displayCode(course.id) + "</span><h2 style=\"margin-top:10px\">" + course.title + "</h2><p>" + course.credits + " credits &middot; " + course.terms.join(" and ") + "</p></div><div class=\"rating-large\"><strong>" + review.rating + "</strong><span>&#9733; &#9733; &#9733; &#9733; &#9734;</span><p>" + review.count + " reviews</p></div></div>" +
            "<div class=\"rating-metrics\"><div><span>Overall</span><strong>" + review.rating + "/5</strong></div><div><span>Difficulty</span><strong>" + review.difficulty + "/5</strong></div><div><span>Workload</span><strong>" + review.workload + "/5</strong></div></div><blockquote class=\"review-quote\">&ldquo;" + escapeHtml(review.quote) + "&rdquo;</blockquote>" +
            "<form class=\"review-form\" id=\"course-review-form\"><h3>Share your experience</h3><input type=\"hidden\" name=\"course\" value=\"" + course.id + "\"><div class=\"review-form-grid\"><label>Overall rating<input name=\"rating\" type=\"number\" min=\"1\" max=\"5\" value=\"5\" required></label><label>Difficulty<input name=\"difficulty\" type=\"number\" min=\"1\" max=\"5\" value=\"3\" required></label><label>Workload<input name=\"workload\" type=\"number\" min=\"1\" max=\"5\" value=\"3\" required></label></div><label>Review<textarea name=\"text\" required placeholder=\"What should another student know?\"></textarea></label><div><button class=\"primary-button\" type=\"submit\">Submit review</button></div></form></section>";
    }

    function professorWithCustom(base) {
        const custom = state.customProfessorReviews.filter(function (review) { return review.professor === base.id; });
        if (!custom.length) return base;
        const rating = (base.rating * base.count + custom.reduce(function (sum, review) { return sum + review.rating; }, 0)) / (base.count + custom.length);
        return Object.assign({}, base, { rating: Number(rating.toFixed(1)), count: base.count + custom.length, quote: custom[custom.length - 1].text });
    }

    function renderProfessors() {
        const professors = DATA.professors.map(professorWithCustom);
        const selected = professors.find(function (professor) { return professor.id === state.selectedProfessor; }) || professors[0];
        return "<div class=\"page\">" + pageHeading("Explore", "Professor Reviews", "Browse instructors and compare clarity, workload, and student feedback.", "") +
            "<div class=\"split-layout\"><aside class=\"card list-panel\"><div class=\"list-panel-header\"><strong>Search Professors</strong><input id=\"professor-search\" placeholder=\"Name or department\"></div><div class=\"select-list\" id=\"professor-list\">" + professors.map(function (professor) { return "<button class=\"select-row " + (professor.id === selected.id ? "is-active" : "") + "\" type=\"button\" data-professor=\"" + professor.id + "\"><span><strong>" + professor.name + "</strong><small>" + professor.department + "</small></span><span class=\"rating\">&#9733; " + professor.rating + "</span></button>"; }).join("") + "</div></aside>" + renderProfessorDetail(selected) + "</div></div>";
    }

    function renderProfessorDetail(professor) {
        return "<section class=\"card detail-panel\"><div class=\"detail-hero\"><div><span class=\"pill red\">" + professor.department + "</span><h2 style=\"margin-top:10px\">" + professor.name + "</h2><p>Teaches " + professor.courses.join(", ") + "</p></div><div class=\"rating-large\"><strong>" + professor.rating + "</strong><span>&#9733; &#9733; &#9733; &#9733; &#9734;</span><p>" + professor.count + " reviews</p></div></div><div class=\"rating-metrics\"><div><span>Overall</span><strong>" + professor.rating + "/5</strong></div><div><span>Clarity</span><strong>" + professor.clarity + "/5</strong></div><div><span>Workload</span><strong>" + professor.workload + "/5</strong></div></div><blockquote class=\"review-quote\">&ldquo;" + escapeHtml(professor.quote) + "&rdquo;</blockquote>" +
            "<form class=\"review-form\" id=\"professor-review-form\"><h3>Review this professor</h3><input type=\"hidden\" name=\"professor\" value=\"" + professor.id + "\"><div class=\"review-form-grid\"><label>Overall rating<input name=\"rating\" type=\"number\" min=\"1\" max=\"5\" value=\"5\" required></label><label>Clarity<input name=\"clarity\" type=\"number\" min=\"1\" max=\"5\" value=\"5\" required></label><label>Workload<input name=\"workload\" type=\"number\" min=\"1\" max=\"5\" value=\"3\" required></label></div><label>Review<textarea name=\"text\" required placeholder=\"Describe the class experience\"></textarea></label><div><button class=\"primary-button\" type=\"submit\">Submit review</button></div></form></section>";
    }

    function renderBadges() {
        const earned = DATA.badges.filter(function (badge) { return badge.earned; });
        const xp = earned.reduce(function (sum, badge) { return sum + badge.xp; }, 0);
        const spotlight = earned[earned.length - 1];
        return "<div class=\"page\">" + pageHeading("Profile & Social", "Badge Vault", "Complete courses to collect department-themed badges and build your CourseFlow profile.", "<span class=\"pill red\">" + earned.length + " of " + DATA.badges.length + " unlocked</span>") +
            "<div class=\"badge-hero\"><section class=\"card xp-card\"><span class=\"card-label\">Total experience</span><strong>" + xp + " XP</strong><p>Earned from completed courses in this placeholder progress report.</p><div class=\"progress-bar\"><span style=\"width:65%\"></span></div></section><section class=\"card spotlight-card\"><div class=\"badge-medal\" style=\"--badge:" + spotlight.color + "\">UI</div><div><span class=\"pill red\">Latest unlock &middot; " + spotlight.rarity + "</span><h2>" + spotlight.name + "</h2><p>Earned by completing " + displayCode(spotlight.course) + ". +" + spotlight.xp + " XP</p></div></section></div>" +
            "<div class=\"badge-grid\">" + DATA.badges.map(function (badge) { return "<article class=\"card badge-card " + (badge.earned ? "" : "is-locked") + "\"><div class=\"badge-medal\" style=\"--badge:" + badge.color + "\">" + badge.course.split("_")[0] + "</div><span class=\"pill\">" + badge.rarity + "</span><h3>" + badge.name + "</h3><p>" + displayCode(badge.course) + " &middot; +" + badge.xp + " XP</p>" + (!badge.earned ? "<div class=\"major-progress\"><span style=\"width:" + badge.progress + "%\"></span></div><p>" + badge.progress + "% progress</p>" : "<p class=\"pill green\" style=\"display:inline-flex\">Unlocked</p>") + "</article>"; }).join("") + "</div></div>";
    }

    function renderDining() {
        return "<div class=\"page\">" + pageHeading("More", "Dining Halls", "Compare today's placeholder campus menus before lunch or dinner.", "<span class=\"pill green\">3 locations open</span>") + "<div class=\"dining-grid\">" + DATA.dining.map(function (hall) { return "<article class=\"card dining-card\"><span class=\"pill green\">" + hall.status + "</span><h2 style=\"margin-top:13px\">" + hall.name + "</h2><p>Estimated line: <strong>" + hall.wait + "</strong></p><ul class=\"menu-list\">" + hall.items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul><button class=\"secondary-button\" type=\"button\" data-action=\"menu-toast\">View full menu</button></article>"; }).join("") + "</div></div>";
    }

    function renderGames() {
        const letters = state.puzzleSolved ? ["C", "O", "M", "S"] : ["C", "?", "M", "?"];
        return "<div class=\"page\">" + pageHeading("More", "Daily Course Puzzle", "Use the clues to identify today's mystery course and continue your streak.", "<span class=\"pill amber\">&#128293; 6 day streak</span>") + "<section class=\"card game-card\"><span class=\"card-label\">Puzzle #184</span><h2>Which department matches these clues?</h2><p>Algorithms &middot; Data structures &middot; Programming</p><div class=\"course-puzzle\">" + letters.map(function (letter) { return "<span class=\"" + (letter !== "?" ? "revealed" : "") + "\">" + letter + "</span>"; }).join("") + "</div>" + (state.puzzleSolved ? "<p class=\"pill green\">Solved! COMS was correct.</p>" : "<div class=\"choice-grid\"><button data-puzzle=\"CPRE\">CPRE</button><button data-puzzle=\"COMS\">COMS</button><button data-puzzle=\"SE\">SE</button><button data-puzzle=\"STAT\">STAT</button></div>") + "</section></div>";
    }

    function renderProfile() {
        const metrics = planMetrics();
        return "<div class=\"page\">" + pageHeading("Profile & Social", "Your profile", "The sample student identity used throughout this static CourseFlow demo.", "<button class=\"secondary-button\" data-route=\"settings\">Edit preferences</button>") + "<div class=\"profile-grid\"><section class=\"card profile-card\"><div class=\"profile-avatar\">" + DATA.student.initials + "</div><h2>" + DATA.student.name + "</h2><p>" + DATA.student.email + "</p><span class=\"pill red\">" + DATA.student.role + "</span><div class=\"major-progress\"><span style=\"width:" + metrics.percent + "%\"></span></div><p>" + metrics.percent + "% degree progress</p></section><section class=\"card profile-details\">" +
            profileDetail("Major", DATA.student.major) + profileDetail("Catalog year", DATA.student.catalog) + profileDetail("Target graduation", DATA.student.graduation) + profileDetail("Applied credits", metrics.applied + " of " + DATA.student.targetCredits) + profileDetail("Badges earned", DATA.badges.filter(function (badge) { return badge.earned; }).length) + profileDetail("Plan status", validatePlan().length ? "Needs review" : "On track") + "</section></div></div>";
    }

    function profileDetail(label, value) {
        return "<div class=\"profile-detail\"><span>" + label + "</span><strong>" + value + "</strong></div>";
    }

    function renderSettings() {
        return "<div class=\"page\">" + pageHeading("Profile & Social", "Settings", "Adjust this local demo without changing anything outside your browser.", "") + "<div class=\"settings-list\"><section class=\"card setting-row\"><div><h2>Theme accent</h2><p>Matches the appearance controls in the original CourseFlow app.</p></div><select id=\"theme-select\"><option value=\"default\" " + (state.settings.theme === "default" ? "selected" : "") + ">CourseFlow red</option><option value=\"ocean\" " + (state.settings.theme === "ocean" ? "selected" : "") + ">Ocean</option><option value=\"forest\" " + (state.settings.theme === "forest" ? "selected" : "") + ">Forest</option></select></section>" +
            settingToggle("Compact module cards", "Reduce spacing on the module home and app pages.", "compact", state.settings.compact) + settingToggle("Planning notifications", "Show reminders about schedule and prerequisite changes.", "notifications", state.settings.notifications) +
            "<section class=\"card setting-row\"><div><h2>Reset local demo</h2><p>Restore the original placeholder flowchart, reviews, badges, and preferences.</p></div><button class=\"danger-button\" type=\"button\" data-action=\"confirm-reset\">Reset everything</button></section></div></div>";
    }

    function settingToggle(title, description, setting, value) {
        return "<section class=\"card setting-row\"><div><h2>" + title + "</h2><p>" + description + "</p></div><button class=\"toggle " + (value ? "is-on" : "") + "\" type=\"button\" data-setting=\"" + setting + "\" role=\"switch\" aria-checked=\"" + value + "\"></button></section>";
    }

    function openCourseDialog(id) {
        const course = courseById(id);
        if (!course) return;
        state.selectedCourse = id;
        const placement = coursePlacement(id);
        openDialog("Course details", displayCode(id) + " &middot; " + course.title,
            "<div class=\"course-detail-grid\"><section class=\"detail-block\"><h3>About this course</h3><p>" + course.description + "</p></section><section class=\"detail-block\"><h3>Planning details</h3><p><strong>Credits:</strong> " + course.credits + "<br><strong>Offered:</strong> " + course.terms.join(", ") + "<br><strong>Prerequisites:</strong> " + (course.prerequisites.length ? course.prerequisites.map(displayCode).join(", ") : "None") + "<br><strong>Scheduled:</strong> " + (placement ? placement.label : "Not yet") + "</p></section></div><div class=\"dialog-actions\"><button class=\"secondary-button\" type=\"button\" data-route-dialog=\"course-reviews\" data-select-review=\"" + id + "\">View reviews</button>" + (!placement ? "<button class=\"primary-button\" type=\"button\" data-add-course=\"" + id + "\">Add to flowchart</button>" : "") + "</div>");
    }

    function openAddCourseDialog(id) {
        const course = courseById(id);
        if (!course) return;
        if (coursePlacement(id)) {
            showToast(displayCode(id) + " is already on your flowchart.");
            return;
        }
        openDialog("Add to CourseFlow", displayCode(id) + " &middot; " + course.title,
            "<p style=\"margin-top:0;color:var(--slate-600);font-size:11px\">Choose the semester where you want to place this course.</p><div class=\"term-options\">" + state.terms.filter(function (term) { return term.status !== "COMPLETED"; }).map(function (term) { return "<button class=\"term-option\" type=\"button\" data-place-course=\"" + id + "\" data-place-term=\"" + term.id + "\"><strong>" + term.label + "</strong><span>" + creditsFor(term.courses) + " credits currently</span></button>"; }).join("") + "</div>");
    }

    function openDialog(kicker, title, content) {
        document.getElementById("dialog-kicker").textContent = kicker;
        document.getElementById("dialog-title").innerHTML = title;
        document.getElementById("dialog-content").innerHTML = content;
        dialog.showModal();
    }

    function placeCourse(courseId, termId) {
        state.terms.forEach(function (term) {
            term.courses = term.courses.filter(function (id) { return id !== courseId; });
        });
        const target = state.terms.find(function (term) { return term.id === termId; });
        if (!target) return;
        target.courses.push(courseId);
        saveState();
        if (dialog.open) dialog.close();
        showToast(displayCode(courseId) + " added to " + target.label + ".");
        render();
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("is-visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2800);
    }

    function closeSidebar() {
        sidebar.classList.remove("is-open");
        scrim.classList.remove("is-open");
        document.getElementById("mobile-menu").setAttribute("aria-expanded", "false");
    }

    function openCommandPalette() {
        commandDialog.showModal();
        const input = document.getElementById("command-search");
        input.value = "";
        renderCommandResults("");
        requestAnimationFrame(function () { input.focus(); });
    }

    function renderCommandResults(query) {
        const normalized = query.trim().toLowerCase();
        const pages = Array.from(ROUTES).filter(function (route) { return ROUTE_LABELS[route].toLowerCase().includes(normalized); }).slice(0, 7).map(function (route) { return { type: "Page", label: ROUTE_LABELS[route], route: route }; });
        const courses = DATA.courses.filter(function (course) { return (course.id + " " + course.title).toLowerCase().includes(normalized); }).slice(0, 6).map(function (course) { return { type: "Course", label: displayCode(course.id) + " &middot; " + course.title, course: course.id }; });
        document.getElementById("command-results").innerHTML = pages.concat(courses).map(function (result) { return "<button class=\"command-result\" type=\"button\" " + (result.route ? "data-command-route=\"" + result.route + "\"" : "data-command-course=\"" + result.course + "\"") + "><strong>" + result.label + "</strong><span>" + result.type + "</span></button>"; }).join("");
    }

    document.addEventListener("click", function (event) {
        const target = event.target.closest("button, a");
        if (!target) return;
        if (target.dataset.route) { event.preventDefault(); navigate(target.dataset.route); return; }
        if (target.dataset.course) { openCourseDialog(target.dataset.course); return; }
        if (target.dataset.addCourse) { openAddCourseDialog(target.dataset.addCourse); return; }
        if (target.dataset.placeCourse) { placeCourse(target.dataset.placeCourse, target.dataset.placeTerm); return; }
        if (target.dataset.flowPanel !== undefined) { state.flowPanel = target.dataset.flowPanel; render(); return; }
        if (target.dataset.level !== undefined) { state.catalog.level = target.dataset.level; render(); return; }
        if (target.dataset.reviewCourse) { state.selectedReviewCourse = target.dataset.reviewCourse; render(); return; }
        if (target.dataset.professor) { state.selectedProfessor = target.dataset.professor; render(); return; }
        if (target.dataset.major !== undefined) { showMajorDialog(Number(target.dataset.major)); return; }
        if (target.dataset.puzzle) { handlePuzzle(target.dataset.puzzle); return; }
        if (target.dataset.setting) { state.settings[target.dataset.setting] = !state.settings[target.dataset.setting]; saveState(); render(); return; }
        if (target.dataset.commandRoute) { commandDialog.close(); navigate(target.dataset.commandRoute); return; }
        if (target.dataset.commandCourse) { commandDialog.close(); openCourseDialog(target.dataset.commandCourse); return; }
        if (target.dataset.routeDialog) {
            dialog.close();
            if (target.dataset.selectReview && DATA.courseReviews.some(function (review) { return review.course === target.dataset.selectReview; })) state.selectedReviewCourse = target.dataset.selectReview;
            navigate(target.dataset.routeDialog);
            return;
        }
        handleAction(target.dataset.action);
    });

    function handleAction(action) {
        if (!action) return;
        if (action === "toggle-insights") { state.showInsights = !state.showInsights; render(); }
        if (action === "clear-catalog") { state.catalog = { search: "", department: "", level: "" }; render(); }
        if (action === "quick-add") {
            const id = document.getElementById("quick-course").value.trim().toUpperCase().replace(/\s+/, "_");
            const term = document.getElementById("quick-term").value;
            if (!courseById(id)) { showToast("That course is not in the sample catalog."); return; }
            placeCourse(id, term);
        }
        if (action === "sample-import") { state.terms = clone(DATA.terms); saveState(); showToast("Sample progress report imported."); render(); }
        if (action === "alternate-plan") { showToast("Alternate plan created. This demo keeps the primary plan active."); }
        if (action === "add-event") { openEventDialog(); }
        if (action === "save-event") { showToast("Personal event added to your local schedule."); dialog.close(); }
        if (action === "menu-toast") { showToast("The full live menu requires the production CourseFlow API."); }
        if (action === "confirm-reset") { openResetDialog(); }
        if (action === "close-dialog") { dialog.close(); }
        if (action === "reset-now") { resetDemo(); }
    }

    function showMajorDialog(index) {
        const major = DATA.majors[index];
        const relevant = DATA.requirements.slice(0, index === 0 ? 6 : 4);
        openDialog("Major requirements", major.name,
            "<p style=\"margin-top:0;color:var(--slate-600);font-size:11px\">" + major.description + "</p><div class=\"term-options\">" + relevant.map(function (requirement) { const percent = Math.round(requirement.complete / requirement.total * 100); return "<div class=\"term-option\"><span><strong>" + requirement.name + "</strong><span>" + requirement.complete + " / " + requirement.total + " credits covered</span></span><span class=\"pill " + (percent === 100 ? "green" : "") + "\">" + percent + "%</span></div>"; }).join("") + "</div>");
    }

    function openEventDialog() {
        openDialog("Current Semester", "Add a personal event", "<div class=\"review-form\"><label>Event name<input value=\"Study group\"></label><div class=\"review-form-grid\"><label>Day<select><option>Tuesday</option><option>Wednesday</option><option>Thursday</option></select></label><label>Start time<input type=\"time\" value=\"16:00\"></label><label>End time<input type=\"time\" value=\"17:00\"></label></div><label>Location<input value=\"Parks Library\"></label><div class=\"dialog-actions\"><button class=\"primary-button\" type=\"button\" data-action=\"save-event\">Add event</button></div></div>");
    }

    function openResetDialog() {
        openDialog("Local demo", "Reset all placeholder data?", "<p style=\"margin-top:0;color:var(--slate-600);font-size:11px\">This restores the original sample flowchart and removes locally submitted reviews and preferences.</p><div class=\"dialog-actions\"><button class=\"secondary-button\" type=\"button\" data-action=\"close-dialog\">Keep changes</button><button class=\"danger-button\" type=\"button\" data-action=\"reset-now\">Reset demo</button></div>");
    }

    function resetDemo() {
        state.terms = clone(defaults.terms);
        state.settings = clone(defaults.settings);
        state.customCourseReviews = [];
        state.customProfessorReviews = [];
        state.puzzleSolved = false;
        localStorage.removeItem(STORAGE_KEY);
        if (dialog.open) dialog.close();
        showToast("CourseFlow demo restored.");
        render();
    }

    function handlePuzzle(answer) {
        if (answer === "COMS") {
            state.puzzleSolved = true;
            saveState();
            showToast("Correct! Your CourseFlow streak is now 6 days.");
            render();
        } else {
            showToast(answer + " is not today's department. Try another clue.");
        }
    }

    document.addEventListener("input", function (event) {
        if (event.target.id === "catalog-search") { state.catalog.search = event.target.value; refreshCatalogResults(); }
        if (event.target.id === "review-search") filterRows("#review-course-list .select-row", event.target.value);
        if (event.target.id === "professor-search") filterRows("#professor-list .select-row", event.target.value);
        if (event.target.id === "command-search") renderCommandResults(event.target.value);
    });

    document.addEventListener("change", function (event) {
        if (event.target.id === "catalog-department") { state.catalog.department = event.target.value; render(); }
        if (event.target.id === "theme-select") { state.settings.theme = event.target.value; saveState(); render(); }
    });

    function filterRows(selector, value) {
        const query = value.trim().toLowerCase();
        document.querySelectorAll(selector).forEach(function (row) { row.hidden = !row.textContent.toLowerCase().includes(query); });
    }

    document.addEventListener("submit", function (event) {
        if (event.target.id === "course-review-form") {
            event.preventDefault();
            const form = new FormData(event.target);
            state.customCourseReviews.push({ course: form.get("course"), rating: Number(form.get("rating")), difficulty: Number(form.get("difficulty")), workload: Number(form.get("workload")), text: String(form.get("text")) });
            saveState(); showToast("Your course review was saved locally."); render();
        }
        if (event.target.id === "professor-review-form") {
            event.preventDefault();
            const form = new FormData(event.target);
            state.customProfessorReviews.push({ professor: form.get("professor"), rating: Number(form.get("rating")), clarity: Number(form.get("clarity")), workload: Number(form.get("workload")), text: String(form.get("text")) });
            saveState(); showToast("Your professor review was saved locally."); render();
        }
    });

    document.addEventListener("dragstart", function (event) {
        const node = event.target.closest("[data-drag-course]");
        if (!node) return;
        event.dataTransfer.setData("text/courseflow-course", node.dataset.dragCourse);
        event.dataTransfer.effectAllowed = "move";
    });
    document.addEventListener("dragover", function (event) {
        const term = event.target.closest("[data-term]");
        if (!term) return;
        event.preventDefault();
        term.classList.add("drop-target");
    });
    document.addEventListener("dragleave", function (event) {
        const term = event.target.closest("[data-term]");
        if (term && !term.contains(event.relatedTarget)) term.classList.remove("drop-target");
    });
    document.addEventListener("drop", function (event) {
        const term = event.target.closest("[data-term]");
        if (!term) return;
        event.preventDefault();
        const course = event.dataTransfer.getData("text/courseflow-course");
        placeCourse(course, term.dataset.term);
    });

    document.getElementById("mobile-menu").addEventListener("click", function () {
        const open = sidebar.classList.toggle("is-open");
        scrim.classList.toggle("is-open", open);
        this.setAttribute("aria-expanded", String(open));
    });
    scrim.addEventListener("click", closeSidebar);
    document.getElementById("command-button").addEventListener("click", openCommandPalette);
    document.getElementById("notification-button").addEventListener("click", function () { showToast("Your sample plan has no new conflicts."); });
    document.getElementById("reset-demo").addEventListener("click", openResetDialog);
    window.addEventListener("hashchange", function () { state.route = routeFromHash(); render(); });
    window.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openCommandPalette(); }
    });

    applyPreferences();
    render();
}());
