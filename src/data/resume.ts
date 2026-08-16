export const profile = {
  name: "Anujesh Yadav",
  role: "Frontend Developer",
  stack: "React.js · Next.js · TypeScript",
  location: "Indore, MP, India",
  relocate: "Open to relocate",
  phone: "+91 70004-20819",
  phoneHref: "+917000420819",
  email: "sanujeshyadav@gmail.com",
  linkedin: "https://linkedin.com/in/anujesh-yadav",
  github: "https://github.com/anujeshyadav",
  resumeUrl: "/assets/anujesh-yadav-resume.pdf",
  photo: "/assets/profile-photo.png",
  yearsExperience: "4+",
  currentTitle: "Senior Software Engineer (Frontend)",
  currentCompany: "BitCot Technology",
  summary:
    "Frontend Developer with 4+ years building performant, scalable web applications with React.js and Next.js. Strong in JavaScript (ES6+), TypeScript, modern state management, and component-based architecture, with a focus on performance optimization, responsive UI, and clean, maintainable code. Career changer with an MBA and a strong operations background who transitioned into software development and was recognized as Star Performer of the Year (BitCot, 2025).",
} as const;

export const roleTicker = [
  "Frontend Developer",
  "React.js & Next.js Engineer",
  "Performance-focused UI Builder",
  "Career Changer, Now Star Performer",
];

export const stats = [
  { label: "Years of experience", value: "4+", countUp: true },
  { label: "Page load improvement led", value: "~30%", countUp: true },
  { label: "User engagement lift delivered", value: "~15%", countUp: true },
  { label: "Star Performer of the Year", value: "2025", countUp: false },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "React Hook Form",
    ],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SCSS / Sass", "Bootstrap", "Responsive Design"],
  },
  {
    category: "State & Data",
    items: [
      "Redux Toolkit",
      "Context API",
      "REST APIs",
      "GraphQL (Query / Mutation)",
      "Firebase",
      "Supabase",
      "Socket.io",
    ],
  },
  {
    category: "Web & Performance",
    items: [
      "HTML5",
      "CSS3",
      "PWA",
      "Service Workers",
      "Web Workers",
      "SSR",
      "Lazy Loading",
      "Memoization",
      "JWT",
      "Webpack",
      "Vite",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Postman"],
  },
  {
    category: "Tools & CI/CD",
    items: [
      "Git",
      "Bitbucket",
      "GitHub Actions",
      "Jira",
      "Confluence",
      "Figma",
    ],
  },
  {
    category: "Practices",
    items: ["Code Reviews", "Cross-functional Collaboration"],
  },
];

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "bitcot",
    role: "Senior Software Engineer (Frontend)",
    company: "BitCot Technology",
    location: "Indore",
    period: "Nov 2024 – Present",
    current: true,
    bullets: [
      "Led development of a scalable web application in React.js/Next.js, improving page load times by ~30% through lazy loading, memoization, and code splitting.",
      "Increased user engagement by ~15% by delivering responsive, performant UI and refining the front-end experience.",
      "Partnered with backend teams to design and integrate efficient GraphQL schemas for cleaner data flow.",
      "Delivered multiple production features as a key frontend engineer; awarded Star Performer of the Year 2025.",
    ],
  },
  {
    id: "sveltose",
    role: "React.js Developer",
    company: "Sveltose Technology",
    companyNote: "Jupitech",
    location: "Indore",
    period: "Oct 2022 – Oct 2024",
    bullets: [
      "Built and shipped UI features for the EightLive product and 6+ projects, owning component development and REST/GraphQL API integration.",
      "Developed strong foundations in React, Next.js, and TypeScript through PoCs and production features.",
      "Managed application state with Redux and Context API to improve data flow and user experience.",
      "Diagnosed and resolved cross-browser compatibility issues, significantly improving site stability.",
    ],
  },
];

export interface ProfessionalProject {
  id: string;
  name: string;
  subtitle?: string;
  stack: string[];
  bullets: string[];
}

export const professionalProjects: ProfessionalProject[] = [
  {
    id: "evolus-admin-portal",
    name: "Evolus Admin Portal",
    stack: ["Next.js", "TypeScript", "GraphQL", "AWS Cognito", "Bootstrap"],
    bullets: [
      "Enterprise admin console built with Next.js 15, React 19, and TypeScript, managing user roles, feature flags, and marketing campaigns.",
      "Built an AI-powered Campaign Autofill feature using Anthropic Claude SDK, reducing campaign data entry time from 30 minutes to under 5 minutes.",
      "Integrated AWS Cognito (Amplify SDK) for secure authentication and RBAC; used Apollo Client for GraphQL API communication with JWT-based auth cookies.",
    ],
  },
  {
    id: "pathfinder",
    name: "Pathfinder",
    subtitle: "College Counseling Platform",
    stack: ["Next.js", "TypeScript", "Firebase", "Redux Toolkit", "Stream.io"],
    bullets: [
      "Multi-role college admissions platform with separate portals for Students, Counselors, and Admins built using Next.js (App Router), React, and TypeScript.",
      "Implemented real-time chat via Firebase Firestore and live video/audio consulting rooms using Stream.io SDK; built session booking with timezone conversion and token-based payments.",
      "Automated CI/CD pipeline with Jenkins, Docker, AWS ECR, and blue-green deployments via AWS ECS & CodeDeploy across staging and production environments.",
    ],
  },
  {
    id: "lsr",
    name: "LSR",
    subtitle: "Medical Imaging & Spinal Analysis Platform",
    stack: ["Next.js", "TypeScript", "CornerstoneJS", "Redux Toolkit", "Firebase"],
    bullets: [
      "Clinical diagnostics platform for spinal analysis built with Next.js, React 18, and TypeScript; integrated CornerstoneJS v4 and dicom-parser for browser-based DICOM X-ray rendering.",
      "Engineered custom HTML5 canvas overlays for real-time biomechanics annotations (Cobb angles, Pelvic Tilt, FSU/Wedge angles) with coordinate transformation algorithms to preserve annotations across image resize, rotate, and zoom.",
      "Established secure authentication and role-based access control (RBAC) using Firebase Auth & Admin SDK with custom Next.js middleware, enforcing granular permissions for Administrators, Analysts, and Investigators.",
    ],
  },
  {
    id: "evolus-international",
    name: "Evolus International",
    subtitle: "User Profile & Access Management",
    stack: ["Next.js", "TypeScript", "DocCheck", "GraphQL"],
    bullets: [
      "Building profile management for multiple user types (Buyer, Non-Buyer, HCP, and Non-HCP) with distinct access levels, profile flows, and tailored landing experiences per role.",
      "Integrated DocCheck for secure HCP identity verification and login, enabling compliant access to restricted healthcare professional content and features.",
    ],
  },
  {
    id: "monarch",
    name: "Monarch",
    subtitle: "Legacy Admin Panel UI Overhaul",
    stack: ["React.js", "Responsive Design", "Kiro", "Claude"],
    bullets: [
      "Overhauled the UI of Monarch, the main admin panel of an ~8-year-old React.js codebase, where components had drifted out of alignment and overlapped across pages on mobile devices.",
      "Used Kiro alongside Claude to rebuild responsive layouts targeted at mobile and high-resolution breakpoints, restoring a clean, non-overlapping UI without impacting the existing desktop experience.",
    ],
  },
  {
    id: "pwa-capacitor-poc",
    name: "PWA Mobile App",
    subtitle: "Capacitor.js Feasibility POC",
    stack: ["React", "Capacitor.js", "PWA", "iOS & Android"],
    bullets: [
      "Built a cross-platform PWA using Capacitor.js to evaluate feasibility of deploying a single React codebase as a native-like app on both iOS and Android for a client.",
      "Tested native device capabilities (camera, storage, push notifications) via Capacitor plugins and assessed PWA performance, offline support, and app store distribution viability.",
    ],
  },
  {
    id: "figma-code-ui-audit",
    name: "Figma-to-Code UI Audit",
    subtitle: "Design-Code Parity Initiative",
    stack: ["React.js", "Figma", "Responsive Design"],
    bullets: [
      "Connecting Figma designs directly with the codebase to systematically identify UI gaps between design specs and the shipped implementation.",
      "Correcting layout, spacing, and responsive inconsistencies uncovered through the Figma-code comparison to bring the UI back in line with the intended design.",
    ],
  },
];

export interface EarlierRole {
  role: string;
  company: string;
  period: string;
}

export const earlierCareer: EarlierRole[] = [
  { role: "Track Maintainer", company: "Indian Railways", period: "2019 – 2021" },
  { role: "Coordinator", company: "AIMS Job Hub", period: "2016 – 2017" },
  { role: "Operations In-charge", company: "Vivek Engineering & Electricals", period: "2015" },
  { role: "Business Operations", company: "Reliance Jio", period: "2014 – 2015" },
  { role: "Apprentice Engineer", company: "BSNL", period: "2013 – 2014" },
  { role: "Line Operator", company: "MPSEB", period: "2013" },
];

export const earlierCareerNote =
  "Before moving into software development, held operations, telecom, and field-engineering roles — building strong analytical, coordination, and stakeholder-management skills that now show up in how I scope and ship frontend work.";

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export const education: EducationEntry[] = [
  { degree: "MBA, Marketing Management", school: "IMS, DAVV, Indore", period: "2017 – 2019" },
  {
    degree: "B.E., Electronics & Communication",
    school: "Truba College of Engineering & Technology, Indore",
    period: "2009 – 2013",
  },
];

export const awards = ["Star Performer of the Year — BitCot, Indore, 2025"];

export const languages = ["English", "Hindi"];
