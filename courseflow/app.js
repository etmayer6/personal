(function () {
    "use strict";

    const data = window.COURSEFLOW_DEMO_DATA;
    if (!data) return;

    const STORAGE_KEY = "ethan-courseflow-static-demo-v1";
    const MAX_RECOMMENDED_CREDITS = 15;
    const categoryColors = {
        foundations: "#378e91",
        communication: "#bf812f",
        core: "#194f61",
        quality: "#c55a32",
        elective: "#3d7863",
        capstone: "#803d4a"
    };
    const categoryLabels = {
        foundations: "Foundation",
        communication: "Communication",
        core: "Software core",
        quality: "Quality and safety",
        elective: "Technical elective",
        capstone: "Capstone"
    };

    const coursesById = new Map(data.courses.map(function (course) {
        return [course.id, course];
    }));
    const scenariosById = new Map(data.scenarios.map(function (scenario) {
        return [scenario.id, scenario];
    }));

    const elements = {
        programLabel: document.getElementById("program-label"),
        programNote: document.getElementById("program-note"),
        scenarioSelect: document.getElementById("scenario-select"),
        resetButton: document.getElementById("reset-plan"),
        saveStatus: document.getElementById("save-status"),
        mappedPercent: document.getElementById("mapped-percent"),
        completedProgress: document.getElementById("completed-progress"),
        plannedProgress: document.getElementById("planned-progress"),
        creditSummary: document.getElementById("credit-summary"),
        completedCredits: document.getElementById("completed-credits"),
        plannedCredits: document.getElementById("planned-credits"),
        requirementCount: document.getElementById("requirement-count"),
        issueCount: document.getElementById("issue-count"),
        issueLabel: document.getElementById("issue-label"),
        catalogCount: document.getElementById("catalog-count"),
        searchInput: document.getElementById("course-search"),
        filters: document.getElementById("catalog-filters"),
        targetTerm: document.getElementById("target-term"),
        catalogList: document.getElementById("catalog-list"),
        planHealth: document.getElementById("plan-health"),
        semesterBoard: document.getElementById("semester-board"),
        addTermButton: document.getElementById("add-term"),
        inspector: document.getElementById("course-inspector-content"),
        requirementsSummary: document.getElementById("requirements-summary"),
        requirementsList: document.getElementById("requirements-list"),
        checksList: document.getElementById("checks-list"),
        toast: document.getElementById("courseflow-toast")
    };

    let state = loadState() || createScenarioState("balanced");
    let catalogFilter = "all";
    let searchQuery = "";
    let targetTermId = firstPlannedTermId();
    let toastTimeout = 0;
    let saveTimeout = 0;

    function cloneTerms(terms) {
        return terms.map(function (term) {
            return {
                id: term.id,
                label: term.label,
                status: term.status,
                courseIds: term.courseIds.slice()
            };
        });
    }

    function createScenarioState(scenarioId) {
        const scenario = scenariosById.get(scenarioId) || data.scenarios[0];
        return {
            version: 1,
            scenarioId: scenario.id,
            baseScenarioId: scenario.id,
            selectedCourseId: null,
            terms: cloneTerms(scenario.terms)
        };
    }

    function loadState() {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || !Array.isArray(parsed.terms) || parsed.version !== 1) return null;

            const usedTermIds = new Set();
            const terms = parsed.terms.map(function (term, index) {
                const id = String(term.id || "term-" + index);
                if (usedTermIds.has(id)) return null;
                usedTermIds.add(id);
                return {
                    id: id,
                    label: String(term.label || "Term " + (index + 1)),
                    status: term.status === "completed" ? "completed" : "planned",
                    courseIds: Array.isArray(term.courseIds)
                        ? term.courseIds.filter(function (courseId) { return coursesById.has(courseId); })
                        : []
                };
            }).filter(Boolean);

            if (!terms.length || !terms.some(function (term) { return term.status === "planned"; })) return null;
            return {
                version: 1,
                scenarioId: parsed.scenarioId === "custom" || scenariosById.has(parsed.scenarioId) ? parsed.scenarioId : "custom",
                baseScenarioId: scenariosById.has(parsed.baseScenarioId) ? parsed.baseScenarioId : "balanced",
                selectedCourseId: coursesById.has(parsed.selectedCourseId) ? parsed.selectedCourseId : null,
                terms: terms
            };
        } catch (error) {
            return null;
        }
    }

    function saveState() {
        elements.saveStatus.textContent = "Saving...";
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            window.clearTimeout(saveTimeout);
            saveTimeout = window.setTimeout(function () {
                elements.saveStatus.textContent = "Saved locally";
            }, 280);
        } catch (error) {
            elements.saveStatus.textContent = "Session only";
        }
    }

    function firstPlannedTermId() {
        const term = state.terms.find(function (item) { return item.status === "planned"; });
        return term ? term.id : "";
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function courseColor(course) {
        return categoryColors[course.category] || categoryColors.core;
    }

    function courseCredits(courseIds) {
        return courseIds.reduce(function (total, courseId) {
            const course = coursesById.get(courseId);
            return total + (course ? course.credits : 0);
        }, 0);
    }

    function getLocations() {
        const locations = new Map();
        state.terms.forEach(function (term, termIndex) {
            term.courseIds.forEach(function (courseId) {
                if (!locations.has(courseId)) locations.set(courseId, []);
                locations.get(courseId).push({ term: term, termIndex: termIndex });
            });
        });
        return locations;
    }

    function getUniquePlannedIds() {
        const ids = new Set();
        state.terms.forEach(function (term) {
            term.courseIds.forEach(function (courseId) { ids.add(courseId); });
        });
        return ids;
    }

    function analyzePlan() {
        const locations = getLocations();
        const issues = [];
        const issuesByCourse = new Map();

        function addIssue(issue) {
            issues.push(issue);
            if (issue.courseId) {
                if (!issuesByCourse.has(issue.courseId)) issuesByCourse.set(issue.courseId, []);
                issuesByCourse.get(issue.courseId).push(issue);
            }
        }

        locations.forEach(function (courseLocations, courseId) {
            if (courseLocations.length > 1) {
                const course = coursesById.get(courseId);
                addIssue({
                    type: "duplicate",
                    courseId: courseId,
                    title: course ? course.code : courseId,
                    message: "This course appears in more than one term."
                });
            }
        });

        state.terms.forEach(function (term, termIndex) {
            const credits = courseCredits(term.courseIds);
            if (term.status === "planned" && credits > MAX_RECOMMENDED_CREDITS) {
                addIssue({
                    type: "load",
                    termId: term.id,
                    title: term.label,
                    message: credits + " credits exceeds the recommended " + MAX_RECOMMENDED_CREDITS + "-credit load."
                });
            }

            term.courseIds.forEach(function (courseId) {
                const course = coursesById.get(courseId);
                if (!course || term.status === "completed") return;

                course.prerequisites.forEach(function (prerequisiteId) {
                    const prerequisite = coursesById.get(prerequisiteId);
                    const prerequisiteLocations = locations.get(prerequisiteId) || [];
                    const occursEarlier = prerequisiteLocations.some(function (location) {
                        return location.term.status === "completed" || location.termIndex < termIndex;
                    });
                    if (!occursEarlier) {
                        addIssue({
                            type: prerequisiteLocations.length ? "sequence" : "missing",
                            courseId: courseId,
                            title: course.code,
                            message: (prerequisite ? prerequisite.code : prerequisiteId) + " must be completed in an earlier term."
                        });
                    }
                });

                const termSeason = term.label.split(" ")[0];
                if ((termSeason === "Fall" || termSeason === "Spring") && course.terms.indexOf(termSeason) === -1) {
                    addIssue({
                        type: "availability",
                        courseId: courseId,
                        title: course.code,
                        message: "Sample data lists this course for " + course.terms.join(" or ") + " only."
                    });
                }
            });
        });

        return { issues: issues, issuesByCourse: issuesByCourse, locations: locations };
    }

    function requirementProgress() {
        const plannedIds = getUniquePlannedIds();
        const completedIds = new Set();
        state.terms.filter(function (term) { return term.status === "completed"; }).forEach(function (term) {
            term.courseIds.forEach(function (courseId) { completedIds.add(courseId); });
        });

        return data.requirements.map(function (requirement) {
            const mapped = requirement.courseIds.filter(function (courseId) { return plannedIds.has(courseId); }).length;
            const completed = requirement.courseIds.filter(function (courseId) { return completedIds.has(courseId); }).length;
            return {
                requirement: requirement,
                mapped: Math.min(mapped, requirement.minimum),
                completed: Math.min(completed, requirement.minimum),
                isMapped: mapped >= requirement.minimum,
                isCompleted: completed >= requirement.minimum
            };
        });
    }

    function planSnapshot() {
        const uniqueIds = getUniquePlannedIds();
        const completedIds = new Set();
        state.terms.filter(function (term) { return term.status === "completed"; }).forEach(function (term) {
            term.courseIds.forEach(function (courseId) { completedIds.add(courseId); });
        });
        const mappedCredits = courseCredits(Array.from(uniqueIds));
        const completedCredits = courseCredits(Array.from(completedIds));
        const requirements = requirementProgress();
        const analysis = analyzePlan();
        return {
            mappedCredits: mappedCredits,
            completedCredits: completedCredits,
            plannedCredits: Math.max(0, mappedCredits - completedCredits),
            mappedPercent: Math.min(100, Math.round(mappedCredits / data.program.targetCredits * 100)),
            requirements: requirements,
            mappedRequirements: requirements.filter(function (item) { return item.isMapped; }).length,
            analysis: analysis
        };
    }

    function renderScenarioSelect() {
        elements.scenarioSelect.innerHTML = data.scenarios.map(function (scenario) {
            return "<option value=\"" + escapeHtml(scenario.id) + "\">" + escapeHtml(scenario.name) + "</option>";
        }).join("") + "<option value=\"custom\" disabled>Custom plan</option>";
        elements.scenarioSelect.value = state.scenarioId;
    }

    function renderTargetTerms() {
        const plannedTerms = state.terms.filter(function (term) { return term.status === "planned"; });
        if (!plannedTerms.some(function (term) { return term.id === targetTermId; })) {
            targetTermId = plannedTerms.length ? plannedTerms[0].id : "";
        }
        elements.targetTerm.innerHTML = plannedTerms.map(function (term) {
            return "<option value=\"" + escapeHtml(term.id) + "\">" + escapeHtml(term.label) + "</option>";
        }).join("");
        elements.targetTerm.value = targetTermId;
    }

    function renderOverview(snapshot) {
        const target = data.program.targetCredits;
        const completedWidth = Math.min(100, snapshot.completedCredits / target * 100);
        const plannedWidth = Math.min(100 - completedWidth, snapshot.plannedCredits / target * 100);
        elements.mappedPercent.textContent = snapshot.mappedPercent + "%";
        elements.completedProgress.style.width = completedWidth + "%";
        elements.plannedProgress.style.width = plannedWidth + "%";
        elements.creditSummary.textContent = Math.min(snapshot.mappedCredits, target) + " of " + target + " credits mapped";
        elements.completedCredits.textContent = snapshot.completedCredits;
        elements.plannedCredits.textContent = snapshot.plannedCredits;
        elements.requirementCount.textContent = snapshot.mappedRequirements + "/" + data.requirements.length;
        elements.issueCount.textContent = snapshot.analysis.issues.length;
        elements.issueLabel.textContent = snapshot.analysis.issues.length === 0
            ? "all clear"
            : snapshot.analysis.issues.length === 1 ? "check to review" : "checks to review";
        elements.issueCount.parentElement.classList.toggle("has-issues", snapshot.analysis.issues.length > 0);
    }

    function renderCatalog(snapshot) {
        const plannedIds = getUniquePlannedIds();
        const completedIds = new Set();
        state.terms.filter(function (term) { return term.status === "completed"; }).forEach(function (term) {
            term.courseIds.forEach(function (courseId) { completedIds.add(courseId); });
        });

        const visibleCourses = data.courses.filter(function (course) {
            const matchesFilter = catalogFilter === "all" || course.category === catalogFilter;
            const haystack = (course.code + " " + course.title + " " + course.description).toLowerCase();
            return matchesFilter && haystack.indexOf(searchQuery) !== -1;
        });

        elements.catalogCount.textContent = visibleCourses.length + (visibleCourses.length === 1 ? " course" : " courses");
        if (!visibleCourses.length) {
            elements.catalogList.innerHTML = "<div class=\"catalog-empty\">No sample courses match that search.</div>";
            return;
        }

        elements.catalogList.innerHTML = visibleCourses.map(function (course) {
            const isCompleted = completedIds.has(course.id);
            const isPlanned = plannedIds.has(course.id);
            const status = isCompleted ? "Completed" : isPlanned ? "In plan" : "Available";
            const selectedClass = state.selectedCourseId === course.id ? " is-selected" : "";
            const plannedClass = isPlanned ? " is-planned" : "";
            return "<article class=\"catalog-course" + selectedClass + plannedClass + "\" " +
                "style=\"--course-color:" + courseColor(course) + "\" data-course-id=\"" + escapeHtml(course.id) + "\" " +
                (isPlanned ? "" : "draggable=\"true\"") + ">" +
                "<span class=\"catalog-course-accent\" aria-hidden=\"true\"></span>" +
                "<button class=\"catalog-course-main\" type=\"button\" data-action=\"select-course\" data-course-id=\"" + escapeHtml(course.id) + "\">" +
                    "<span class=\"catalog-course-code-row\"><span class=\"catalog-course-code\">" + escapeHtml(course.code) + "</span>" +
                    "<span class=\"catalog-course-credits\">" + course.credits + " CR</span></span>" +
                    "<span class=\"catalog-course-title\">" + escapeHtml(course.title) + "</span>" +
                    "<span class=\"catalog-course-status\">" + status + "</span>" +
                "</button>" +
                "<button class=\"catalog-add\" type=\"button\" data-action=\"add-course\" data-course-id=\"" + escapeHtml(course.id) + "\" " +
                    (isPlanned ? "disabled aria-label=\"Course is already in the plan\"" : "aria-label=\"Add " + escapeHtml(course.code) + " to selected term\"") + ">" +
                    (isPlanned ? "&#10003;" : "+") +
                "</button>" +
            "</article>";
        }).join("");
    }

    function renderPlannedCourse(courseId, term, termIndex, snapshot) {
        const course = coursesById.get(courseId);
        if (!course) return "";
        const isCompleted = term.status === "completed";
        const courseIssues = snapshot.analysis.issuesByCourse.get(courseId) || [];
        const selectedClass = state.selectedCourseId === courseId ? " is-selected" : "";
        const conflictClass = courseIssues.length ? " has-conflict" : "";
        const draggable = isCompleted ? "" : " draggable=\"true\"";
        const conflictBadge = courseIssues.length
            ? "<span class=\"conflict-dot\" title=\"Planning check\">!</span>"
            : "";

        const trailing = isCompleted
            ? "<span class=\"completed-tag\">Done</span>"
            : "<div class=\"planned-course-actions\">" +
                "<button type=\"button\" data-action=\"move-earlier\" data-course-id=\"" + escapeHtml(courseId) + "\" data-term-id=\"" + escapeHtml(term.id) + "\" " +
                    (termIndex <= 1 ? "disabled" : "") + " aria-label=\"Move " + escapeHtml(course.code) + " earlier\">&larr;</button>" +
                "<button type=\"button\" data-action=\"move-later\" data-course-id=\"" + escapeHtml(courseId) + "\" data-term-id=\"" + escapeHtml(term.id) + "\" " +
                    (termIndex >= state.terms.length - 1 ? "disabled" : "") + " aria-label=\"Move " + escapeHtml(course.code) + " later\">&rarr;</button>" +
                "<button type=\"button\" data-action=\"remove-course\" data-course-id=\"" + escapeHtml(courseId) + "\" data-term-id=\"" + escapeHtml(term.id) + "\" aria-label=\"Remove " + escapeHtml(course.code) + " from plan\">Remove</button>" +
              "</div>";

        return "<article class=\"planned-course" + selectedClass + conflictClass + "\" style=\"--course-color:" + courseColor(course) + "\" " +
            "data-course-id=\"" + escapeHtml(courseId) + "\" data-term-id=\"" + escapeHtml(term.id) + "\"" + draggable + ">" +
            "<span class=\"planned-course-accent\" aria-hidden=\"true\"></span>" +
            "<button class=\"planned-course-main\" type=\"button\" data-action=\"select-course\" data-course-id=\"" + escapeHtml(courseId) + "\">" +
                "<span class=\"planned-course-code\">" + escapeHtml(course.code) + conflictBadge + "</span>" +
                "<span class=\"planned-course-title\">" + escapeHtml(course.title) + "</span>" +
            "</button>" + trailing +
        "</article>";
    }

    function renderSemesters(snapshot) {
        elements.semesterBoard.innerHTML = state.terms.map(function (term, termIndex) {
            const credits = courseCredits(term.courseIds);
            const completedClass = term.status === "completed" ? " is-completed" : "";
            const heavyClass = credits > MAX_RECOMMENDED_CREDITS ? " is-heavy" : "";
            const helper = term.status === "completed" ? "Locked history" : term.courseIds.length + (term.courseIds.length === 1 ? " course" : " courses");
            const courseMarkup = term.courseIds.length
                ? term.courseIds.map(function (courseId) { return renderPlannedCourse(courseId, term, termIndex, snapshot); }).join("")
                : "<div class=\"semester-empty\">Drop a course here or use Add from the catalog.</div>";

            return "<section class=\"semester" + completedClass + "\" data-term-id=\"" + escapeHtml(term.id) + "\" data-term-status=\"" + term.status + "\">" +
                "<header class=\"semester-header\"><div><h3>" + escapeHtml(term.label) + "</h3><p>" + helper + "</p></div>" +
                "<span class=\"semester-credit" + heavyClass + "\">" + credits + " CR</span></header>" +
                "<div class=\"semester-courses\">" + courseMarkup + "</div>" +
            "</section>";
        }).join("");
    }

    function renderPlanHealth(snapshot) {
        const count = snapshot.analysis.issues.length;
        elements.planHealth.classList.toggle("has-issues", count > 0);
        elements.planHealth.classList.toggle("is-clear", count === 0);
        if (count === 0) {
            elements.planHealth.innerHTML = "<span class=\"health-icon\" aria-hidden=\"true\"></span>" +
                "<div><strong>Plan is ready</strong><p>Every prerequisite is scheduled before the course that needs it.</p></div>";
        } else {
            elements.planHealth.innerHTML = "<span class=\"health-icon\" aria-hidden=\"true\"></span>" +
                "<div><strong>" + count + (count === 1 ? " check needs" : " checks need") + " attention</strong>" +
                "<p>Move or add courses to resolve sequencing and availability conflicts.</p></div>";
        }
    }

    function renderInspector(snapshot) {
        const course = coursesById.get(state.selectedCourseId);
        if (!course) {
            elements.inspector.className = "inspector-empty";
            elements.inspector.innerHTML = "<span aria-hidden=\"true\">i</span><p>Select a course to inspect its prerequisites and availability.</p>";
            return;
        }

        const courseLocations = snapshot.analysis.locations.get(course.id) || [];
        const locationText = courseLocations.length
            ? courseLocations.map(function (location) { return location.term.label; }).join(", ")
            : "Not yet planned";
        const prerequisiteText = course.prerequisites.length
            ? course.prerequisites.map(function (courseId) {
                const prerequisite = coursesById.get(courseId);
                return prerequisite ? prerequisite.code : courseId;
            }).join(", ")
            : "None";

        elements.inspector.className = "inspector-course";
        elements.inspector.style.setProperty("--course-color", courseColor(course));
        elements.inspector.innerHTML = "<div class=\"inspector-course-header\"><div>" +
            "<span class=\"inspector-course-code\">" + escapeHtml(course.code) + "</span>" +
            "<h3>" + escapeHtml(course.title) + "</h3></div>" +
            "<span class=\"inspector-credit\">" + course.credits + " credits</span></div>" +
            "<p class=\"inspector-description\">" + escapeHtml(course.description) + "</p>" +
            "<dl class=\"inspector-meta\">" +
                "<div><dt>Requirement</dt><dd>" + escapeHtml(categoryLabels[course.category] || course.category) + "</dd></div>" +
                "<div><dt>Prerequisites</dt><dd>" + escapeHtml(prerequisiteText) + "</dd></div>" +
                "<div><dt>Sample terms</dt><dd>" + escapeHtml(course.terms.join(" / ")) + "</dd></div>" +
                "<div><dt>Current plan</dt><dd>" + escapeHtml(locationText) + "</dd></div>" +
            "</dl>";
    }

    function renderRequirements(snapshot) {
        elements.requirementsSummary.textContent = snapshot.mappedRequirements + " mapped";
        elements.requirementsList.innerHTML = snapshot.requirements.map(function (item) {
            const requirement = item.requirement;
            const mappedClass = item.isMapped ? " is-mapped" : "";
            const status = item.isCompleted ? "Complete" : item.isMapped ? "Planned" : "In progress";
            return "<article class=\"requirement" + mappedClass + "\" title=\"" + escapeHtml(requirement.description) + "\">" +
                "<span class=\"requirement-icon\" aria-hidden=\"true\">" + (item.isMapped ? "&#10003;" : item.mapped) + "</span>" +
                "<div class=\"requirement-copy\"><strong>" + escapeHtml(requirement.name) + "</strong><span>" + status + "</span></div>" +
                "<span class=\"requirement-count\">" + item.mapped + "/" + requirement.minimum + "</span>" +
            "</article>";
        }).join("");
    }

    function renderChecks(snapshot) {
        if (!snapshot.analysis.issues.length) {
            elements.checksList.innerHTML = "<p class=\"checks-empty\">No conflicts found</p>";
            return;
        }

        const shownIssues = snapshot.analysis.issues.slice(0, 6);
        elements.checksList.innerHTML = "<ul class=\"check-list\">" + shownIssues.map(function (issue) {
            return "<li class=\"check-item\"><strong>" + escapeHtml(issue.title) + "</strong>" + escapeHtml(issue.message) + "</li>";
        }).join("") + (snapshot.analysis.issues.length > shownIssues.length
            ? "<li class=\"check-item\"><strong>More checks</strong>" + (snapshot.analysis.issues.length - shownIssues.length) + " additional items are shown on their course cards.</li>"
            : "") + "</ul>";
    }

    function renderAll() {
        const snapshot = planSnapshot();
        renderScenarioSelect();
        renderTargetTerms();
        renderOverview(snapshot);
        renderCatalog(snapshot);
        renderPlanHealth(snapshot);
        renderSemesters(snapshot);
        renderInspector(snapshot);
        renderRequirements(snapshot);
        renderChecks(snapshot);
    }

    function markCustom() {
        state.scenarioId = "custom";
    }

    function commit(message) {
        markCustom();
        saveState();
        renderAll();
        announce(message);
    }

    function announce(message) {
        elements.toast.textContent = message;
        elements.toast.classList.add("is-visible");
        window.clearTimeout(toastTimeout);
        toastTimeout = window.setTimeout(function () {
            elements.toast.classList.remove("is-visible");
        }, 2800);
    }

    function selectCourse(courseId) {
        if (!coursesById.has(courseId)) return;
        state.selectedCourseId = courseId;
        saveState();
        renderCatalog(planSnapshot());
        renderSemesters(planSnapshot());
        renderInspector(planSnapshot());
    }

    function addCourse(courseId, termId) {
        const course = coursesById.get(courseId);
        const term = state.terms.find(function (item) { return item.id === termId; });
        if (!course || !term || term.status === "completed") return;
        if (getUniquePlannedIds().has(courseId)) {
            announce(course.code + " is already in the plan.");
            return;
        }
        term.courseIds.push(courseId);
        state.selectedCourseId = courseId;
        commit(course.code + " added to " + term.label + ".");
    }

    function removeCourse(courseId, termId) {
        const course = coursesById.get(courseId);
        const term = state.terms.find(function (item) { return item.id === termId; });
        if (!course || !term || term.status === "completed") return;
        term.courseIds = term.courseIds.filter(function (id) { return id !== courseId; });
        commit(course.code + " removed from " + term.label + ".");
    }

    function moveCourse(courseId, fromTermId, toTermId) {
        const course = coursesById.get(courseId);
        const fromTerm = state.terms.find(function (term) { return term.id === fromTermId; });
        const toTerm = state.terms.find(function (term) { return term.id === toTermId; });
        if (!course || !toTerm || toTerm.status === "completed") return;
        if (fromTerm && fromTerm.id === toTerm.id) return;

        if (fromTerm) {
            fromTerm.courseIds = fromTerm.courseIds.filter(function (id) { return id !== courseId; });
        } else if (getUniquePlannedIds().has(courseId)) {
            return;
        }
        toTerm.courseIds.push(courseId);
        state.selectedCourseId = courseId;
        commit(course.code + " moved to " + toTerm.label + ".");
    }

    function moveCourseByOffset(courseId, termId, offset) {
        const fromIndex = state.terms.findIndex(function (term) { return term.id === termId; });
        const toIndex = fromIndex + offset;
        if (fromIndex < 0 || toIndex < 0 || toIndex >= state.terms.length) return;
        moveCourse(courseId, termId, state.terms[toIndex].id);
    }

    function loadScenario(scenarioId, shouldAnnounce) {
        const scenario = scenariosById.get(scenarioId);
        if (!scenario) return;
        state = createScenarioState(scenario.id);
        targetTermId = firstPlannedTermId();
        saveState();
        renderAll();
        if (shouldAnnounce) announce(scenario.name + " loaded.");
    }

    function addTerm() {
        const plannedTerms = state.terms.filter(function (term) { return term.status === "planned"; });
        const lastTerm = plannedTerms[plannedTerms.length - 1];
        const match = lastTerm ? /^(Fall|Spring)\s+(\d{4})$/.exec(lastTerm.label) : null;
        let season = "Fall";
        let year = new Date().getFullYear();
        if (match) {
            season = match[1] === "Fall" ? "Spring" : "Fall";
            year = Number(match[2]) + (match[1] === "Fall" ? 1 : 0);
        }
        const id = season.toLowerCase() + "-" + year + "-" + Date.now();
        const term = { id: id, label: season + " " + year, status: "planned", courseIds: [] };
        state.terms.push(term);
        targetTermId = id;
        commit(term.label + " added to the plan.");
    }

    elements.programLabel.textContent = data.program.school + " / " + data.program.name;
    elements.programNote.textContent = data.program.note;

    elements.scenarioSelect.addEventListener("change", function () {
        loadScenario(elements.scenarioSelect.value, true);
    });

    elements.resetButton.addEventListener("click", function () {
        loadScenario(state.baseScenarioId || "balanced", true);
    });

    elements.addTermButton.addEventListener("click", addTerm);

    elements.searchInput.addEventListener("input", function () {
        searchQuery = elements.searchInput.value.trim().toLowerCase();
        renderCatalog(planSnapshot());
    });

    elements.targetTerm.addEventListener("change", function () {
        targetTermId = elements.targetTerm.value;
    });

    elements.filters.addEventListener("click", function (event) {
        const button = event.target.closest("button[data-filter]");
        if (!button) return;
        catalogFilter = button.dataset.filter;
        elements.filters.querySelectorAll("button").forEach(function (item) {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });
        renderCatalog(planSnapshot());
    });

    elements.catalogList.addEventListener("click", function (event) {
        const actionButton = event.target.closest("button[data-action]");
        if (!actionButton) return;
        const courseId = actionButton.dataset.courseId;
        if (actionButton.dataset.action === "select-course") selectCourse(courseId);
        if (actionButton.dataset.action === "add-course") addCourse(courseId, targetTermId);
    });

    elements.semesterBoard.addEventListener("click", function (event) {
        const actionButton = event.target.closest("button[data-action]");
        if (!actionButton) return;
        const action = actionButton.dataset.action;
        const courseId = actionButton.dataset.courseId;
        const termId = actionButton.dataset.termId;
        if (action === "select-course") selectCourse(courseId);
        if (action === "move-earlier") moveCourseByOffset(courseId, termId, -1);
        if (action === "move-later") moveCourseByOffset(courseId, termId, 1);
        if (action === "remove-course") removeCourse(courseId, termId);
    });

    document.addEventListener("dragstart", function (event) {
        const card = event.target.closest("[draggable=\"true\"][data-course-id]");
        if (!card || !event.dataTransfer) return;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/courseflow-course", card.dataset.courseId);
        event.dataTransfer.setData("text/courseflow-term", card.dataset.termId || "");
        window.setTimeout(function () { card.classList.add("is-dragging"); }, 0);
    });

    document.addEventListener("dragend", function (event) {
        const card = event.target.closest("[data-course-id]");
        if (card) card.classList.remove("is-dragging");
        document.querySelectorAll(".semester.is-drag-over").forEach(function (semester) {
            semester.classList.remove("is-drag-over");
        });
    });

    elements.semesterBoard.addEventListener("dragover", function (event) {
        const semester = event.target.closest(".semester[data-term-status=\"planned\"]");
        if (!semester) return;
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
        elements.semesterBoard.querySelectorAll(".semester").forEach(function (item) {
            item.classList.toggle("is-drag-over", item === semester);
        });
    });

    elements.semesterBoard.addEventListener("dragleave", function (event) {
        const semester = event.target.closest(".semester");
        if (semester && !semester.contains(event.relatedTarget)) semester.classList.remove("is-drag-over");
    });

    elements.semesterBoard.addEventListener("drop", function (event) {
        const semester = event.target.closest(".semester[data-term-status=\"planned\"]");
        if (!semester || !event.dataTransfer) return;
        event.preventDefault();
        const courseId = event.dataTransfer.getData("text/courseflow-course");
        const fromTermId = event.dataTransfer.getData("text/courseflow-term");
        semester.classList.remove("is-drag-over");
        if (fromTermId) moveCourse(courseId, fromTermId, semester.dataset.termId);
        else addCourse(courseId, semester.dataset.termId);
    });

    window.render_courseflow_to_text = function () {
        const snapshot = planSnapshot();
        return JSON.stringify({
            scenario: state.scenarioId,
            baseScenario: state.baseScenarioId,
            program: data.program.name,
            targetCredits: data.program.targetCredits,
            completedCredits: snapshot.completedCredits,
            plannedCredits: snapshot.plannedCredits,
            mappedPercent: snapshot.mappedPercent,
            mappedRequirements: snapshot.mappedRequirements,
            requirementCount: data.requirements.length,
            issues: snapshot.analysis.issues.map(function (issue) {
                return { type: issue.type, title: issue.title, message: issue.message };
            }),
            selectedCourse: state.selectedCourseId,
            terms: state.terms.map(function (term) {
                return { id: term.id, label: term.label, status: term.status, courseIds: term.courseIds.slice() };
            })
        });
    };

    window.__courseflow_demo = {
        loadScenario: function (scenarioId) { loadScenario(scenarioId, false); },
        addCourse: addCourse,
        moveCourse: moveCourse,
        reset: function () { loadScenario("balanced", false); }
    };

    renderAll();
})();
