window.COURSEFLOW_DEMO_DATA = {
    program: {
        name: "Software Engineering B.S.",
        school: "Northstar University",
        targetCredits: 45,
        note: "Fictional sample curriculum for portfolio demonstration only."
    },
    courses: [
        {
            id: "SE101",
            code: "SE 101",
            title: "Software Engineering Foundations",
            credits: 3,
            category: "foundations",
            prerequisites: [],
            terms: ["Fall", "Spring"],
            description: "Introduces software lifecycles, team practices, and the structure of engineered software systems."
        },
        {
            id: "COMS101",
            code: "COM S 101",
            title: "Programming I",
            credits: 3,
            category: "foundations",
            prerequisites: [],
            terms: ["Fall", "Spring"],
            description: "Problem solving, control flow, data structures, and programming fundamentals."
        },
        {
            id: "MATH151",
            code: "MATH 151",
            title: "Applied Calculus",
            credits: 3,
            category: "foundations",
            prerequisites: [],
            terms: ["Fall", "Spring"],
            description: "Differential and integral calculus with applications to computing and engineering."
        },
        {
            id: "ENGL150",
            code: "ENGL 150",
            title: "Critical Communication",
            credits: 3,
            category: "communication",
            prerequisites: [],
            terms: ["Fall", "Spring"],
            description: "Clear written communication, research, and argument for technical and public audiences."
        },
        {
            id: "SPCM212",
            code: "SP CM 212",
            title: "Professional Communication",
            credits: 3,
            category: "communication",
            prerequisites: ["ENGL150"],
            terms: ["Fall", "Spring"],
            description: "Presentations, design reviews, and collaborative communication in professional settings."
        },
        {
            id: "SE210",
            code: "SE 210",
            title: "Object-Oriented Design",
            credits: 3,
            category: "core",
            prerequisites: ["SE101", "COMS101"],
            terms: ["Fall", "Spring"],
            description: "Design patterns, modularity, testability, and maintainable object-oriented systems."
        },
        {
            id: "SE220",
            code: "SE 220",
            title: "Software Requirements",
            credits: 3,
            category: "core",
            prerequisites: ["SE101"],
            terms: ["Fall", "Spring"],
            description: "Elicitation, specification, traceability, validation, and management of software requirements."
        },
        {
            id: "COMS230",
            code: "COM S 230",
            title: "Data Structures",
            credits: 3,
            category: "core",
            prerequisites: ["COMS101", "MATH151"],
            terms: ["Fall", "Spring"],
            description: "Data organization, algorithmic tradeoffs, complexity, and implementation techniques."
        },
        {
            id: "SE310",
            code: "SE 310",
            title: "Software Architecture",
            credits: 3,
            category: "core",
            prerequisites: ["SE210", "COMS230"],
            terms: ["Spring"],
            description: "Architectural styles, quality attributes, interfaces, and system-level design decisions."
        },
        {
            id: "SE320",
            code: "SE 320",
            title: "Software Verification",
            credits: 3,
            category: "quality",
            prerequisites: ["SE210"],
            terms: ["Fall", "Spring"],
            description: "Automated testing, coverage, reviews, static analysis, and verification strategy."
        },
        {
            id: "SE330",
            code: "SE 330",
            title: "Software System Safety",
            credits: 3,
            category: "quality",
            prerequisites: ["SE220"],
            terms: ["Spring"],
            description: "Hazard analysis, safety requirements, assurance cases, and risk-informed design."
        },
        {
            id: "SE340",
            code: "SE 340",
            title: "Human-Centered Software",
            credits: 3,
            category: "elective",
            prerequisites: ["SE220"],
            terms: ["Fall"],
            description: "Usability research, interaction design, accessibility, and iterative product evaluation."
        },
        {
            id: "SE350",
            code: "SE 350",
            title: "Distributed Systems",
            credits: 3,
            category: "elective",
            prerequisites: ["SE310"],
            terms: ["Fall", "Spring"],
            description: "Concurrency, messaging, reliability, and tradeoffs in distributed software systems."
        },
        {
            id: "SE360",
            code: "SE 360",
            title: "Applied Machine Intelligence",
            credits: 3,
            category: "elective",
            prerequisites: ["COMS230"],
            terms: ["Spring"],
            description: "Practical model development, evaluation, and integration into software products."
        },
        {
            id: "SE490",
            code: "SE 490",
            title: "Capstone Studio I",
            credits: 3,
            category: "capstone",
            prerequisites: ["SE310", "SE320", "SE330"],
            terms: ["Fall"],
            description: "Team-based product discovery, architecture, planning, and an initial working release."
        },
        {
            id: "SE491",
            code: "SE 491",
            title: "Capstone Studio II",
            credits: 3,
            category: "capstone",
            prerequisites: ["SE490"],
            terms: ["Spring"],
            description: "Product completion, validation, delivery, and communication of engineering outcomes."
        }
    ],
    requirements: [
        {
            id: "foundations",
            name: "Technical foundations",
            description: "Complete all three foundation courses.",
            courseIds: ["SE101", "COMS101", "MATH151"],
            minimum: 3
        },
        {
            id: "communication",
            name: "Communication",
            description: "Complete both communication courses.",
            courseIds: ["ENGL150", "SPCM212"],
            minimum: 2
        },
        {
            id: "core",
            name: "Software core",
            description: "Complete the four-course software core.",
            courseIds: ["SE210", "SE220", "COMS230", "SE310"],
            minimum: 4
        },
        {
            id: "quality",
            name: "Quality and safety",
            description: "Complete verification and system safety.",
            courseIds: ["SE320", "SE330"],
            minimum: 2
        },
        {
            id: "electives",
            name: "Technical electives",
            description: "Choose any two technical electives.",
            courseIds: ["SE340", "SE350", "SE360"],
            minimum: 2
        },
        {
            id: "capstone",
            name: "Capstone sequence",
            description: "Complete both capstone studios in order.",
            courseIds: ["SE490", "SE491"],
            minimum: 2
        }
    ],
    scenarios: [
        {
            id: "balanced",
            name: "Balanced pathway",
            description: "A complete, prerequisite-safe plan.",
            terms: [
                { id: "completed", label: "Completed", status: "completed", courseIds: ["SE101", "COMS101", "MATH151", "ENGL150", "SPCM212"] },
                { id: "fall-2026", label: "Fall 2026", status: "planned", courseIds: ["SE210", "SE220", "COMS230"] },
                { id: "spring-2027", label: "Spring 2027", status: "planned", courseIds: ["SE310", "SE320", "SE330"] },
                { id: "fall-2027", label: "Fall 2027", status: "planned", courseIds: ["SE340", "SE350", "SE490"] },
                { id: "spring-2028", label: "Spring 2028", status: "planned", courseIds: ["SE491"] }
            ]
        },
        {
            id: "needs-work",
            name: "Plan with conflicts",
            description: "A sample with sequencing issues to resolve.",
            terms: [
                { id: "completed", label: "Completed", status: "completed", courseIds: ["SE101", "COMS101", "MATH151"] },
                { id: "fall-2026", label: "Fall 2026", status: "planned", courseIds: ["SE310", "SE220", "SE490"] },
                { id: "spring-2027", label: "Spring 2027", status: "planned", courseIds: ["SE210", "COMS230", "SE320"] },
                { id: "fall-2027", label: "Fall 2027", status: "planned", courseIds: ["SE330", "SE340", "SE350"] },
                { id: "spring-2028", label: "Spring 2028", status: "planned", courseIds: ["SE491"] }
            ]
        },
        {
            id: "clean-start",
            name: "Build your own",
            description: "Start from completed foundation work.",
            terms: [
                { id: "completed", label: "Completed", status: "completed", courseIds: ["SE101", "COMS101", "MATH151", "ENGL150", "SPCM212"] },
                { id: "fall-2026", label: "Fall 2026", status: "planned", courseIds: [] },
                { id: "spring-2027", label: "Spring 2027", status: "planned", courseIds: [] },
                { id: "fall-2027", label: "Fall 2027", status: "planned", courseIds: [] },
                { id: "spring-2028", label: "Spring 2028", status: "planned", courseIds: [] }
            ]
        }
    ]
};
