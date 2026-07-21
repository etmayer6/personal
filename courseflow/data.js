window.COURSEFLOW_DATA = {
    student: {
        name: "Avery Morgan",
        initials: "AM",
        email: "avery.morgan@iastate.edu",
        role: "Student",
        major: "Software Engineering",
        catalog: "2024-2025",
        graduation: "Spring 2027",
        targetCredits: 128,
        priorCredits: 49
    },
    modules: [
        { id: "flowchart", group: "PLAN", title: "Flowchart Dashboard", description: "Import progress and keep semester planning in one visual workspace.", image: "assets/feature-flowchart.svg", featured: true },
        { id: "catalog", group: "PLAN", title: "Course Catalog", description: "Search courses, inspect prerequisites, and add classes to your plan.", image: "assets/feature-catalog.svg" },
        { id: "majors", group: "PLAN", title: "Majors Browse", description: "Explore majors and compare their requirement structures.", image: "assets/feature-majors.svg" },
        { id: "current", group: "CURRENT SEMESTER", title: "Current Classes", description: "Review your active class schedule and personal events.", image: "assets/feature-current-classes.svg" },
        { id: "course-reviews", group: "EXPLORE", title: "Course Reviews", description: "Browse student feedback on workload, difficulty, and outcomes.", image: "assets/feature-course-reviews.svg" },
        { id: "professors", group: "EXPLORE", title: "Professor Reviews", description: "Compare instructors and read detailed student reviews.", image: "assets/feature-professors.svg" },
        { id: "badges", group: "PROFILE & SOCIAL", title: "Course Badges", description: "Track badges earned as courses are completed.", image: "assets/feature-badges.svg" },
        { id: "profile", group: "PROFILE & SOCIAL", title: "Profile", description: "View your major, target graduation, and account details.", image: "assets/feature-profile.svg" },
        { id: "settings", group: "PROFILE & SOCIAL", title: "Settings", description: "Adjust appearance and planning preferences.", image: "assets/feature-settings.svg" },
        { id: "games", group: "MORE", title: "Games", description: "Play the daily course puzzle and maintain your streak.", image: "assets/feature-games.svg" },
        { id: "dining", group: "MORE", title: "Dining Halls", description: "Compare sample menus around campus.", image: "assets/feature-dining.svg" }
    ],
    courses: [
        { id: "SE_1850", title: "Problem Solving in Software Engineering", credits: 3, department: "SE", level: "1000", terms: ["Fall", "Spring"], prerequisites: [], genEd: "", description: "Programming, teamwork, and software engineering problem-solving foundations." },
        { id: "COMS_2270", title: "Object-oriented Programming", credits: 4, department: "COMS", level: "2000", terms: ["Fall", "Spring", "Summer"], prerequisites: ["SE_1850"], genEd: "", description: "Object-oriented design and implementation using data abstraction and modularity." },
        { id: "COMS_2280", title: "Introduction to Data Structures", credits: 3, department: "COMS", level: "2000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2270"], genEd: "", description: "Linear and nonlinear data structures, algorithms, and complexity analysis." },
        { id: "COMS_2300", title: "Discrete Computational Structures", credits: 3, department: "COMS", level: "2000", terms: ["Fall", "Spring"], prerequisites: [], genEd: "", description: "Logic, sets, relations, graph theory, and proof techniques for computing." },
        { id: "CPRE_2810", title: "Digital Logic", credits: 4, department: "CPRE", level: "2000", terms: ["Fall", "Spring"], prerequisites: [], genEd: "", description: "Digital systems, combinational logic, sequential circuits, and hardware design." },
        { id: "MATH_1650", title: "Calculus I", credits: 4, department: "MATH", level: "1000", terms: ["Fall", "Spring", "Summer"], prerequisites: [], genEd: "Math", description: "Limits, derivatives, integrals, and applications of single-variable calculus." },
        { id: "ENGL_1500", title: "Critical Thinking and Communication", credits: 3, department: "ENGL", level: "1000", terms: ["Fall", "Spring"], prerequisites: [], genEd: "Communication", description: "Academic inquiry, research, and effective written communication." },
        { id: "SPCM_2120", title: "Fundamentals of Public Speaking", credits: 3, department: "SPCM", level: "2000", terms: ["Fall", "Spring", "Summer"], prerequisites: [], genEd: "Communication", description: "Audience-centered preparation and delivery of informative and persuasive speeches." },
        { id: "COMS_3090", title: "Software Development Practices", credits: 3, department: "COMS", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280"], genEd: "", description: "Team-based software development, version control, APIs, testing, and delivery." },
        { id: "SE_3190", title: "Construction of User Interfaces", credits: 3, department: "SE", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280"], genEd: "", description: "User interface architectures, usability, accessibility, and frontend implementation." },
        { id: "SE_3290", title: "Software Project Management", credits: 3, department: "SE", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280"], genEd: "", description: "Planning, estimation, risk, requirements, and coordination of software projects." },
        { id: "CPRE_3080", title: "Operating Systems", credits: 4, department: "CPRE", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280", "CPRE_2810"], genEd: "", description: "Processes, scheduling, memory, concurrency, file systems, and operating system design." },
        { id: "COMS_3110", title: "Design and Analysis of Algorithms", credits: 3, department: "COMS", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280", "COMS_2300"], genEd: "", description: "Algorithm design paradigms, correctness, complexity, and computational limits." },
        { id: "COMS_3630", title: "Introduction to Database Management Systems", credits: 3, department: "COMS", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_2280"], genEd: "", description: "Relational modeling, SQL, normalization, transactions, and database application design." },
        { id: "STAT_3300", title: "Probability and Statistics for Computer Science", credits: 3, department: "STAT", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["MATH_1650"], genEd: "Math", description: "Probability models, inference, regression, and applications in computing." },
        { id: "SE_3390", title: "Software Architecture and Design", credits: 3, department: "SE", level: "3000", terms: ["Fall", "Spring"], prerequisites: ["COMS_3090", "SE_3190"], genEd: "", description: "Architecture styles, quality attributes, design patterns, and technical tradeoffs." },
        { id: "SE_4090", title: "Software Requirements Engineering", credits: 3, department: "SE", level: "4000", terms: ["Fall"], prerequisites: ["SE_3290"], genEd: "", description: "Requirements elicitation, specification, traceability, validation, and change management." },
        { id: "CPRE_4180", title: "High Speed System Engineering Measurement and Testing", credits: 4, department: "CPRE", level: "4000", terms: ["Spring"], prerequisites: ["CPRE_3080"], genEd: "", description: "System measurement, automated testing, instrumentation, and validation techniques." },
        { id: "ENGL_3140", title: "Technical Communication", credits: 3, department: "ENGL", level: "3000", terms: ["Fall", "Spring", "Summer"], prerequisites: ["ENGL_1500"], genEd: "Communication", description: "Professional technical documents, visual communication, and collaborative writing." },
        { id: "SE_4910", title: "Senior Design Project I", credits: 2, department: "SE", level: "4000", terms: ["Fall", "Spring"], prerequisites: ["COMS_3090", "SE_3290"], genEd: "", description: "Team capstone planning, requirements, architecture, and initial implementation." },
        { id: "SE_4920", title: "Senior Design Project II", credits: 2, department: "SE", level: "4000", terms: ["Fall", "Spring"], prerequisites: ["SE_4910"], genEd: "", description: "Capstone implementation, validation, deployment, and final communication." },
        { id: "SE_4170", title: "Software Testing", credits: 3, department: "SE", level: "4000", terms: ["Spring"], prerequisites: ["COMS_3090"], genEd: "", description: "Test design, automation, coverage analysis, fault models, and verification strategy." },
        { id: "COMS_4350", title: "Algorithms for Large Data Sets", credits: 3, department: "COMS", level: "4000", terms: ["Fall"], prerequisites: ["COMS_3110"], genEd: "", description: "Scalable algorithms, probabilistic techniques, streaming data, and approximation." },
        { id: "COMS_4720", title: "Principles of Artificial Intelligence", credits: 3, department: "COMS", level: "4000", terms: ["Fall", "Spring"], prerequisites: ["COMS_3110", "STAT_3300"], genEd: "", description: "Search, knowledge representation, reasoning, and foundational machine intelligence." },
        { id: "CYBE_2340", title: "Legal, Professional, and Ethical Issues in Cyber Security", credits: 3, department: "CYBE", level: "2000", terms: ["Fall", "Spring"], prerequisites: [], genEd: "Humanities", description: "Professional responsibility, policy, privacy, and ethics for computing systems." }
    ],
    terms: [
        { id: "transfer", label: "Transfer Credit", term: "TRANSFER", year: 0, status: "COMPLETED", courses: ["MATH_1650", "ENGL_1500", "SPCM_2120"] },
        { id: "fall-2024", label: "FALL 2024", term: "FALL", year: 2024, status: "COMPLETED", courses: ["SE_1850", "CPRE_2810", "COMS_2300"] },
        { id: "spring-2025", label: "SPRING 2025", term: "SPRING", year: 2025, status: "COMPLETED", courses: ["COMS_2270", "CYBE_2340"] },
        { id: "fall-2025", label: "FALL 2025", term: "FALL", year: 2025, status: "COMPLETED", courses: ["COMS_2280", "STAT_3300", "ENGL_3140"] },
        { id: "spring-2026", label: "SPRING 2026", term: "SPRING", year: 2026, status: "IN PROGRESS", courses: ["COMS_3090", "SE_3290", "COMS_3630", "SE_3190"] },
        { id: "fall-2026", label: "FALL 2026", term: "FALL", year: 2026, status: "PLANNED", courses: ["SE_3390", "CPRE_3080", "SE_4090", "SE_4910"] },
        { id: "spring-2027", label: "SPRING 2027", term: "SPRING", year: 2027, status: "PLANNED", courses: ["COMS_3110", "CPRE_4180", "SE_4920"] }
    ],
    today: [
        { id: "s1", course: "COMS_3090", title: "Software Development Practices", time: "9:00 AM - 9:50 AM", start: 9, end: 9.83, location: "Coover 1012" },
        { id: "s2", course: "SE_3290", title: "Software Project Management", time: "11:00 AM - 12:15 PM", start: 11, end: 12.25, location: "Atanasoff 223" },
        { id: "s3", course: "COMS_3630", title: "Database Management Systems", time: "2:10 PM - 3:00 PM", start: 14.17, end: 15, location: "Pearson 2105" }
    ],
    requirements: [
        { name: "Software Engineering Core", total: 42, complete: 30 },
        { name: "Mathematics and Statistics", total: 16, complete: 12 },
        { name: "Engineering Basic Program", total: 24, complete: 24 },
        { name: "General Education", total: 21, complete: 18 },
        { name: "Technical Electives", total: 15, complete: 6 },
        { name: "Senior Design", total: 4, complete: 0 }
    ],
    majors: [
        { name: "Software Engineering", college: "College of Engineering", credits: 128, progress: 73, description: "Design, build, test, and evolve dependable software systems." },
        { name: "Computer Science", college: "Liberal Arts and Sciences", credits: 120, progress: 61, description: "Study computation, algorithms, systems, and software." },
        { name: "Computer Engineering", college: "College of Engineering", credits: 128, progress: 58, description: "Bridge computer hardware, embedded systems, and software." },
        { name: "Cyber Security Engineering", college: "College of Engineering", credits: 128, progress: 52, description: "Engineer resilient systems that protect data and infrastructure." }
    ],
    courseReviews: [
        { course: "COMS_3090", rating: 4.4, difficulty: 3.6, workload: 4.1, count: 38, quote: "The project is substantial, but it is the first class where the whole stack comes together." },
        { course: "SE_3190", rating: 4.6, difficulty: 3.1, workload: 3.7, count: 27, quote: "Practical UI work with enough freedom to build something you care about." },
        { course: "CPRE_3080", rating: 4.1, difficulty: 4.5, workload: 4.6, count: 44, quote: "Challenging labs. Start early and use office hours." },
        { course: "COMS_3630", rating: 4.3, difficulty: 3.4, workload: 3.2, count: 31, quote: "A useful introduction to SQL and designing databases beyond a toy example." }
    ],
    professors: [
        { id: "p1", name: "Dr. Jordan Lee", department: "Computer Science", rating: 4.7, clarity: 4.8, workload: 3.5, count: 24, courses: ["COMS 3090", "COMS 3630"], quote: "Clear expectations, thoughtful feedback, and excellent examples." },
        { id: "p2", name: "Prof. Maya Patel", department: "Software Engineering", rating: 4.5, clarity: 4.6, workload: 3.8, count: 19, courses: ["SE 3190", "SE 3290"], quote: "Connects every concept to a realistic team project." },
        { id: "p3", name: "Dr. Casey Nguyen", department: "Computer Engineering", rating: 4.2, clarity: 4.1, workload: 4.5, count: 33, courses: ["CPRE 3080", "CPRE 4180"], quote: "Demanding, but the labs make the systems concepts stick." },
        { id: "p4", name: "Prof. Riley Brooks", department: "English", rating: 4.6, clarity: 4.7, workload: 3.2, count: 16, courses: ["ENGL 3140"], quote: "Useful feedback and assignments that feel relevant to engineering." }
    ],
    badges: [
        { id: "b1", course: "COMS_2280", name: "Data Wrangler", rarity: "Rare", xp: 250, earned: true, color: "#2563eb" },
        { id: "b2", course: "SE_3190", name: "Interface Builder", rarity: "Epic", xp: 400, earned: true, color: "#dc2626" },
        { id: "b3", course: "COMS_3090", name: "Team Shipper", rarity: "Epic", xp: 400, earned: false, progress: 78, color: "#7c3aed" },
        { id: "b4", course: "CPRE_3080", name: "Kernel Curious", rarity: "Legendary", xp: 600, earned: false, progress: 22, color: "#d97706" },
        { id: "b5", course: "SE_4910", name: "Capstone Pioneer", rarity: "Legendary", xp: 700, earned: false, progress: 0, color: "#be123c" }
    ],
    dining: [
        { name: "Friley Windows", status: "Open until 8:00 PM", wait: "8 min", items: ["Smoked turkey melt", "Roasted vegetable bowl", "Tomato basil soup"] },
        { name: "Seasons Marketplace", status: "Open until 7:30 PM", wait: "12 min", items: ["Chicken tikka masala", "Build-your-own pasta", "Fresh fruit bar"] },
        { name: "Conversations", status: "Open until 8:00 PM", wait: "5 min", items: ["Street tacos", "Cilantro lime rice", "Churro bites"] }
    ]
};
