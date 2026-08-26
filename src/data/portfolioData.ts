import { LiveGame, GameProject, SoftwareProject, SkillCategory, TimelineStep, DevStat, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: "Zaimon Altamia",
  title: "Game Developer & Programmer",
  roles: ["Game Developer", "Programmer", "Creative Technologist"],
  location: "Available Worldwide / Remote",
  availabilityStatus: "AVAILABLE FOR DEVELOPMENT & COLLABORATION",
  email: "zaimonaltamia@gmail.com",
  github: "https://github.com/zaimonaltamia",
  githubUsername: "zaimonaltamia",
  linkedin: "https://linkedin.com/in/zaimonaltamia",
  resumePath: "/resume.pdf",
  bio: `I am a Game Developer and Software Programmer specialized in turning conceptual ideas into playable, polished digital products. My focus bridges rapid prototyping with solid software architecture — crafting physics-driven gameplay systems, intuitive game UI/UX, responsive web applications, and resilient codebases.`,
  statement: "I don't just build projects — I turn ideas into playable and usable products.",
  pillars: [
    { title: "BUILD", description: "Architecting game systems, clean software logic, and performant web apps." },
    { title: "PLAY", description: "Creating interactive experiences designed to be played and tested in real-time." },
    { title: "CREATE", description: "Iterating through gameplay mechanics, level design, and creative technology." }
  ]
};

export const devStats: DevStat[] = [
  { value: "10+", label: "Projects Completed", subtext: "Games & software web apps" },
  { value: "Multiple", label: "Game Prototypes", subtext: "Mechanics & physics simulations" },
  { value: "2+", label: "Live Web Games", subtext: "Playable in browser right now" },
  { value: "∞", label: "Ideas to Build", subtext: "Constantly prototyping & evolving" },
];

export const liveProjects: LiveGame[] = [
  {
    id: "aquarium-tycoon",
    title: "Aquarium Tycoon",
    subtitle: "16-Bit Pixel Art Simulation",
    category: "Simulation / Management",
    description: "A pixel-art aquarium simulation game where players build and manage their own aquarium, interact with aquatic life, and grow their virtual aquatic business.",
    longDescription: "Aquarium Tycoon immerses players in managing an aquatic ecosystem. From balancing water quality, food supplies, and tank upgrades to unlocking exotic fish species and customer satisfaction dynamics, the game models business progression mechanics through an engaging pixel-art web interface.",
    technologies: ["React", "JavaScript", "HTML5 Canvas", "State Management", "Vercel"],
    status: "LIVE",
    liveUrl: "https://aquarium-tycoon-lsc1htgez-sans19.vercel.app/",
    githubUrl: "https://github.com/zaimonaltamia/aquarium-tycoon",
    image: "/assets/images/aquarium-tycoon.png",
    accentColor: "#06b6d4",
    gameplayHighlight: "Economy simulation, species discovery, inventory systems, customer flow logic.",
    controls: ["Mouse click / tap to purchase upgrades", "Drag to navigate aquarium tanks", "Interactive fish feeding & tank cleaning"],
    features: [
      "Dynamic revenue loop with fish happiness & visitors",
      "Multiple fish species with custom behavioral parameters",
      "Interactive decoration & tank capacity management",
      "Browser persistence for aquarium progress"
    ]
  },
  {
    id: "scrabble-infinite",
    title: "SCRABBLE INFINITE",
    subtitle: "Endless Vocabulary Survival",
    category: "Word / Arcade / Survival",
    description: "An endless word-based survival game where players create words to continue their run and challenge their vocabulary.",
    longDescription: "A high-intensity hybrid of classic tile-based anagram mechanics and endless arcade survival. Players must rapidly form valid words under escalating timer pressure, utilizing bonus multipliers, chain combos, and strategic letter conservation to achieve high scores.",
    technologies: ["React", "JavaScript", "API Integration", "CSS3 Animation", "Vercel"],
    status: "LIVE",
    liveUrl: "https://scrabble-infinite.vercel.app/",
    githubUrl: "https://github.com/zaimonaltamia/scrabble-infinite",
    image: "/assets/images/scrabble-infinite.png",
    accentColor: "#10b981",
    gameplayHighlight: "Dictionary API validation, timer acceleration curve, multiplier mechanics.",
    controls: ["Keyboard typing or letter tile clicking", "Enter to submit word", "Space to shuffle unused rack tiles"],
    features: [
      "Real-time dictionary API validation & phonetic scoring",
      "Escalating arcade timer system with frenzy bonuses",
      "Dynamic tile bag distribution algorithm",
      "Combo streak tracking & high-score leaderboards"
    ]
  }
];

export const gameProjects: GameProject[] = [
  {
    id: "wave-finder",
    title: "Wave Finder",
    subtitle: "Physics-Driven Ripple Arcade",
    category: "Physics / Arcade",
    description: "Physics-based 2D arcade game where players use controlled ripple impacts to move a puck toward a goal.",
    longDescription: "Wave Finder transforms fluid dynamics into an arcade mechanic. Rather than moving the player puck directly, the player clicks or taps on the water canvas to generate kinetic shockwaves. The force of each ripple attenuates over distance and transfers vector momentum to the puck, requiring precision timing and ricochet planning.",
    technologies: ["React", "JavaScript", "HTML5 Canvas", "Custom Vector Physics"],
    status: "PROTOTYPE",
    githubUrl: "https://github.com/zaimonaltamia/wave-finder",
    image: "/assets/images/wave-finder.png",
    accentColor: "#3b82f6",
    gameplayConcepts: [
      "Kinetic Ripple Shockwaves",
      "Vector Momentum & Drag",
      "Friction & Surface Resistance",
      "Continuous Collision Detection",
      "Elastic Wall Bounces",
      "Obstacle Deflection Gates"
    ],
    prototypeNotes: "Core ripple force transfer formula: F = (RippleStrength / (distance + epsilon)) * normalVector. Implemented in 60fps canvas loop with dampening."
  },
  {
    id: "not-this-level",
    title: "NOT THIS LEVEL!",
    subtitle: "Troll-Style Puzzle Platformer",
    category: "Puzzle / Platformer",
    description: "A troll-style platformer featuring traps, unexpected mechanics, moving platforms, glitches, and deceptive level design.",
    longDescription: "Inspired by subversive puzzle platformers, each room appears identical on the surface but changes the underlying game rules — inverted gravity, invisible spike triggers, fake UI buttons, reversed control schemas, or audio cues that solve the riddle. The player must think outside the screen to escape.",
    technologies: ["React", "Vite", "JavaScript", "HTML5 Engine"],
    status: "DEVELOPMENT",
    githubUrl: "https://github.com/zaimonaltamia/not-this-level",
    image: "/assets/images/not-this-level.png",
    accentColor: "#f59e0b",
    gameplayConcepts: [
      "Subversive Level Design",
      "Deceptive Trap Triggers",
      "Dynamic Physics Modifiers",
      "Glitched Collision Planes",
      "Meta-Game UI Mechanics",
      "State-Driven Progression"
    ],
    prototypeNotes: "Features modular level logic engines allowing custom condition hooks per room (e.g. key press count, button hover overrides, window resize triggers)."
  },
  {
    id: "fish-food-arena",
    title: "Fish Food Arena",
    subtitle: "Aquatic Target Physics Arcade",
    category: "Arcade / Physics",
    description: "A physics-based arcade game centered around throwing fish food and interacting with aquatic targets.",
    longDescription: "Players gauge trajectory, launch angle, and water buoyancy to toss food pellets into roving fish schools. Incorporates drag coefficients as pellets enter the water column and dynamic flocking behavior (boids algorithm) for the target fish entities.",
    technologies: ["JavaScript", "HTML5 Canvas", "Web Technologies", "Math Physics"],
    status: "PROTOTYPE",
    githubUrl: "https://github.com/zaimonaltamia/fish-food-arena",
    image: "/assets/images/fish-food-arena.png",
    accentColor: "#ec4899",
    gameplayConcepts: [
      "Trajectory & Parabolic Arc",
      "Water Buoyancy & Viscous Drag",
      "Flocking / Boids Fish AI",
      "Multi-Tier Target Multipliers",
      "Particle Feeding Splashes",
      "Combo Timing Chains"
    ],
    prototypeNotes: "Combines 2-phase physics (air projectile curve transitioning into viscous fluid drag upon water surface intersection)."
  }
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: "qr-inventory",
    title: "QR-Based Inventory Management System",
    subtitle: "Asset Tracking & QR Operations",
    category: "Full-Stack Web Application",
    description: "A web-based inventory management application using QR codes for fast item cataloging, stock movement tracking, and automated audits.",
    longDescription: "Designed to eliminate manual stock counting errors, this system provides camera-based QR scanning directly in mobile and desktop browsers. Features live stock level alerts, batch check-in/check-out logs, supplier directory, and CSV/PDF audit report generation.",
    problemSolved: "Replaced slow manual pen-and-paper asset tracking with instantaneous camera QR scanning and real-time stock reconciliation.",
    technologies: ["React", "TypeScript", "HTML5 Camera API", "QR Code Engine", "REST APIs", "Tailwind CSS"],
    status: "DEVELOPMENT",
    liveDemoUrl: "",
    githubUrl: "https://github.com/zaimonaltamia/qr-inventory-system",
    accentColor: "#10b981",
    features: [
      "In-browser instant QR code generation & label printing",
      "High-speed camera barcode/QR scanner integration",
      "Real-time low stock threshold alerts & notifications",
      "Audit trail logs tracking every item movement & user timestamp"
    ],
    architectureHighlights: [
      "Client-side video stream processing via BarcodeDetector API",
      "Optimistic UI updates for high-volume inventory checkouts",
      "Structured relational data schema for products, locations, and transactions"
    ]
  },
  {
    id: "exam-training",
    title: "Examination Training Application",
    subtitle: "Practice Simulation & Analytics",
    category: "EdTech / Web Application",
    description: "A web application designed for professional examination preparation, timed mock assessments, and granular performance analytics.",
    longDescription: "An interactive assessment platform built to simulate real certification test environments. Provides randomized question banks, timed simulation modes, flag-for-review navigation, detailed explanation breakdowns, and competency matrix heatmaps.",
    problemSolved: "Enables candidates to identify knowledge gaps through realistic timed testing conditions and deep question-by-question analytics.",
    technologies: ["React", "TypeScript", "Vite", "Local Storage / State", "Tailwind CSS"],
    status: "DEVELOPMENT",
    liveDemoUrl: "",
    githubUrl: "https://github.com/zaimonaltamia/exam-training-app",
    accentColor: "#8b5cf6",
    features: [
      "Simulated timed exam mode with realistic countdown timers",
      "Question randomization and multi-format answer support",
      "Comprehensive score report with domain-specific breakdowns",
      "Review mode with verified explanations and reference links"
    ],
    architectureHighlights: [
      "Modular test state machine managing in-flight progress & answer persistence",
      "Client-side analytics engine calculating percentile rankings and category proficiencies"
    ]
  },
  {
    id: "document-management",
    title: "Document Management / Generation Software",
    subtitle: "Template Engine & Document Automation",
    category: "Enterprise Utility",
    description: "A web-based system for creating, managing, and automatically generating structured documents from dynamic schemas.",
    longDescription: "A productivity software suite empowering teams to design template schemas with custom dynamic variables, conditional text blocks, and table repeats, followed by instant one-click compilation into print-ready PDF and formatted HTML exports.",
    problemSolved: "Eliminates repetitive manual copy-pasting for contracts, invoices, and technical documentation via reusable dynamic schemas.",
    technologies: ["React", "JavaScript", "HTML5 Canvas / PDF Generation", "Template Parsing", "CSS Paged Media"],
    status: "DEVELOPMENT",
    liveDemoUrl: "",
    githubUrl: "https://github.com/zaimonaltamia/doc-generation-system",
    accentColor: "#f97316",
    features: [
      "Visual template builder with mustache/variable syntax highlighting",
      "Real-time side-by-side preview with mock payload injection",
      "High-fidelity client-side PDF export with custom page margins",
      "Document versioning and template export/import capabilities"
    ],
    architectureHighlights: [
      "AST-based template token parser for conditional rendering",
      "Web Worker background rendering for heavy document compilations"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages, runtimes, and engineering frameworks.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Tailwind", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "SQL", level: "Proficient" }
    ]
  },
  {
    title: "Game Development",
    description: "Gameplay systems, physics simulation, and interactive game architecture.",
    skills: [
      { name: "Gameplay Programming", level: "Core" },
      { name: "2D Game Development", level: "Core" },
      { name: "Game Physics & Kinematics", level: "Core" },
      { name: "Collision Detection (AABB/SAT)", level: "Core" },
      { name: "Game Mechanics Design", level: "Core" },
      { name: "Level Design & Pacing", level: "Core" },
      { name: "Game UI & State HUDs", level: "Core" },
      { name: "Animation & Sprite Loops", level: "Core" },
      { name: "Interactive Systems", level: "Core" },
      { name: "Rapid Game Prototyping", level: "Core" }
    ]
  },
  {
    title: "Software Development",
    description: "Full-stack application patterns, architecture, and user interfaces.",
    skills: [
      { name: "React Applications", level: "Advanced" },
      { name: "Responsive Web Engineering", level: "Advanced" },
      { name: "REST API Integration", level: "Advanced" },
      { name: "Database Integration", level: "Proficient" },
      { name: "UI/UX System Implementation", level: "Advanced" },
      { name: "State Machine Architecture", level: "Advanced" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Developer toolchains, version control, and continuous deployment.",
    skills: [
      { name: "Visual Studio Code", level: "Advanced" },
      { name: "Git & Version Control", level: "Advanced" },
      { name: "GitHub Workflows", level: "Advanced" },
      { name: "Vercel Cloud Deployment", level: "Advanced" },
      { name: "Browser DevTools & Profiling", level: "Advanced" }
    ]
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    number: "01",
    title: "IDEA",
    description: "Concept development and gameplay planning.",
    details: [
      "Defining the core gameplay loop and hook",
      "Drafting mechanics, system rules, and constraints",
      "Sketching game flow, UI wireframes, and control schemas"
    ]
  },
  {
    number: "02",
    title: "PROTOTYPE",
    description: "Build the core mechanic and test whether it is fun.",
    details: [
      "Rapidly coding the fundamental interaction model in 24-48 hours",
      "Testing physics feel, response latency, and control responsiveness",
      "Iterating on core dynamics before adding cosmetic layers"
    ]
  },
  {
    number: "03",
    title: "POLISH",
    description: "Improve gameplay, visuals, controls, physics, UI, and user experience.",
    details: [
      "Fine-tuning collision tolerances, particle juice, and audio feedback",
      "Refining responsive UI, HUD overlays, and level transitions",
      "Optimizing rendering loops and eliminating frame drops"
    ]
  },
  {
    number: "04",
    title: "DEPLOY",
    description: "Test, optimize, deploy, and continue improving the product.",
    details: [
      "Cross-browser stress testing across mobile and desktop viewports",
      "Automated CI/CD deployment pipelines on Vercel",
      "Gathering player telemetry and continuously rolling out improvements"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2023 — PRESENT",
    role: "Game & Software Developer",
    organization: "Independent Development / Projects",
    description: "Designing, programming, and deploying interactive 2D web games, physics systems, and full-stack software applications.",
    highlights: [
      "Shipped and deployed live playable games including Aquarium Tycoon and SCRABBLE INFINITE.",
      "Engineered bespoke 2D physics engines and canvas ripple vector mechanics in vanilla JavaScript and React.",
      "Built production-ready software tools including QR inventory systems and exam simulators."
    ]
  },
  {
    period: "2021 — 2023",
    role: "Front-End & Interactive Developer",
    organization: "Software & Web Engineering",
    description: "Developed modern, responsive user interfaces and interactive components with clean TypeScript architectures.",
    highlights: [
      "Implemented modular UI components and reusable state management paradigms.",
      "Integrated third-party REST APIs and real-time data visualizers."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    period: "2019 — 2023",
    degree: "Bachelor of Science in Information Technology / Computer Science",
    institution: "University Studies",
    details: "Focus on Software Engineering, Object-Oriented Programming, Algorithm Design, Data Structures, and Web Technologies."
  }
];
