// ─────────────────────────────────────────────────────────────────────────────
// Centralized portfolio content for Dharshini Ganesh.
// Edit this file to update copy across the entire site.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Dharshini Ganesh",
  initials: "DG",
  tagline: "Building Intelligent Software with AI, Cloud & Data",
  rotatingTaglines: [
    "Building Intelligent Software with AI, Cloud & Data",
    "Transforming Ideas into Intelligent Software",
    "Engineering Scalable Digital Solutions",
    "Passionate about AI, Cloud & Full Stack Development",
    "Learning · Building · Growing",
  ],
  roles: [
    "Software Engineer",
    "Cloud Enthusiast",
    "Machine Learning Developer",
    "Full Stack Developer",
  ],
  status: "Computer Science and Business Systems Graduate",
  location: "Tiruppur, Tamil Nadu, India",
  availability: "Open to Opportunities",
  email: "dg.dharshini24@gmail.com",
  linkedin: "https://linkedin.com/in/dharshini-g-256015249",
  github: "https://github.com/Dhars-hini",
  leetcode: "https://leetcode.com/u/Dharshini_Ganesh/",
  resumeUrl: "/Resume.pdf",
  photo: "/assets/hero.png",
};

export const aboutMe = {
  paragraphs: [
    "Hi, I'm Dharshini Ganesh — a Computer Science and Business Systems graduate with a strong focus on full-stack development, cloud computing, AI-based solutions, and ERP automation.",
    "I enjoy building scalable software that solves real-world business challenges. Passionate about leveraging modern technologies to develop innovative solutions that create meaningful impact.",
    "My long-term vision is to work with globally recognised technology companies, contribute to innovative products, and continuously evolve as a software engineer.",
  ],
  quickFacts: [
    { label: "Based in", value: "Tamil Nadu, India" },
    { label: "Degree", value: "B.Tech CSBS, 2022–2026" },
    { label: "CGPA", value: "8.02" },
    { label: "Languages", value: "English, Tamil, Japanese (learning)" },
  ],
  careerObjective:
    "Aspiring Software Engineer skilled in full-stack development, cloud computing, AI-based solutions, and ERP automation — with a strong focus on building scalable and efficient software applications. Passionate about leveraging modern technologies to develop innovative solutions for real-world challenges.",
};

export const education = {
  degree: "B.Tech — Computer Science and Business Systems",
  institution: "K.S. Rangasamy College of Technology",
  note: "Autonomous · Affiliated to Anna University, Chennai",
  duration: "June 2022 – June 2026",
  cgpa: "8.02",
};

export type JourneyStage = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

// Trimmed to 7 key milestones as requested
export const journey: JourneyStage[] = [
  {
    id: "pivot",
    icon: "🔄",
    title: "From Medicine to Engineering",
    description:
      "After appearing for NEET with a dream of becoming a doctor, financial challenges reshaped my path. Engineering counselling led me to Computer Science — a pivot that changed everything.",
  },
  {
    id: "first-laptop",
    icon: "💻",
    title: "First Laptop & First Code",
    description:
      "My father's gift of my first laptop was the real starting point. I wrote my first C program, struggled, debugged, and slowly fell in love with the process of building things from scratch.",
  },
  {
    id: "leadership",
    icon: "🎓",
    title: "Class Representative & Student Leader",
    description:
      "Took on the Class Representative role and led student initiatives — developing communication, collaboration, and accountability alongside my technical growth.",
  },
  {
    id: "projects",
    icon: "🚀",
    title: "Machine Learning & Full Stack Projects",
    description:
      "Built SmartSpin (ML textile optimization), a Blood Bank Management System, and File Uploader — applying real algorithms to real problems across Python, Django, and the MERN stack.",
  },
  {
    id: "internships",
    icon: "🏢",
    title: "Industry Internships",
    description:
      "Interned at Cube AI building an AI-powered ERP with React and Django, optimizing backend APIs by 30%. Completed Zscaler's cybersecurity virtual program on cloud security and Zero Trust.",
  },
  {
    id: "cloud-ai",
    icon: "☁️",
    title: "Cloud Computing & AI Certifications",
    description:
      "Earned NPTEL Cloud Computing Elite Certification and became a FutureSkills Prime Ambassador recognised by MeitY–NASSCOM. Deepening expertise in AWS, ML, and data analytics.",
  },
  {
    id: "future",
    icon: "🌏",
    title: "Global Vision & Japan Dream",
    description:
      "Learning Japanese and preparing for a global software engineering career. Long-term goal: contribute to world-class technology companies, and eventually build a technology company of my own.",
  },
];

export type SkillCategory = {
  category: string;
  icon: string;
  description: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages for backend logic and scripting",
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    category: "Web Technologies",
    icon: "LayoutGrid",
    description: "Full stack web development frameworks",
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "Django"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Cloud infrastructure and deployment",
    skills: ["AWS EC2", "AWS S3", "AWS RDS"],
  },
  {
    category: "AI & Machine Learning",
    icon: "Sparkles",
    description: "Predictive models and data science libraries",
    skills: ["Scikit-learn", "Random Forest", "Linear Regression", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    category: "Database",
    icon: "Database",
    description: "Relational and document data stores",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Business intelligence and reporting",
    skills: ["Microsoft Excel", "Power BI", "Power Query", "SQL", "Microsoft Dynamics 365"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Development environment and productivity tools",
    skills: ["VS Code", "Postman", "GitHub"],
  },
];

export type Project = {
  id: string;
  name: string;
  summary: string;
  tags: string[];
  status: "Completed" | "In Progress";
  problem: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "smartspin",
    name: "SmartSpin",
    summary:
      "ML-based decision support system for textile spinning mills to predict material waste and improve production efficiency.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Linear Regression", "Pandas"],
    status: "Completed",
    problem:
      "Textile spinning mills face significant waste and inefficiency due to lack of predictive tooling for production planning.",
    highlights: [
      "Applied Random Forest and Linear Regression to predict material waste and production outcomes",
      "Designed an analytics dashboard for visualising predictions and production trends",
      "Focused on reducing waste and optimising mill throughput as the core business value",
    ],
    githubUrl: "https://github.com/Dhars-hini/textileai-erp",
  },
  {
    id: "ev-charging",
    name: "AI-Powered EV Charging Fault Detection",
    summary:
      "An AI-driven system that detects faults in EV charging infrastructure with real-time monitoring and alerting.",
    tags: ["AI", "Python", "Fault Detection", "Cloud", "Dashboard"],
    status: "Completed",
    problem:
      "EV charging stations are prone to undetected faults that reduce reliability and increase downtime for drivers.",
    highlights: [
      "Built fault detection logic to flag anomalies in real-time charging behaviour",
      "Designed a monitoring dashboard with an automated alerting flow for detected faults",
      "Explored cloud deployment for scalable real-time monitoring",
    ],
    githubUrl: "https://github.com/Dhars-hini/-ev-charging-system",
  },
  {
    id: "blood-bank",
    name: "Blood Bank Management System",
    summary:
      "A Django web application for managing blood donors, patients, and requests with a full admin dashboard.",
    tags: ["Django", "Python", "MySQL", "Authentication", "Admin Dashboard"],
    status: "Completed",
    problem:
      "Blood banks often rely on manual record-keeping, leading to inefficiencies in donor management and request tracking.",
    highlights: [
      "Implemented donor and patient management with authentication and role-based access",
      "Built a blood request workflow with real-time availability tracking",
      "Designed a responsive admin dashboard for operational oversight",
    ],
    githubUrl: "https://github.com/Dhars-hini/bloodbank-management-system",
  },
  {
    id: "file-uploader",
    name: "File Uploader Management System",
    summary:
      "A secure, lightweight MERN stack application for file upload, preview, and deletion.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Completed",
    problem:
      "Teams needed a simple, self-hosted file management solution with secure access and preview capabilities.",
    highlights: [
      "Built JWT authentication with secure file storage and access control",
      "Implemented upload, preview, and delete workflows with responsive UI",
      "Optimised for performance with minimal dependencies",
    ],
    githubUrl: "https://github.com/Dhars-hini/fileshare.",
  },
  {
    id: "music-uploader",
    name: "Music Uploading System",
    summary:
      "A full stack application for uploading, organising, and streaming media files with a responsive interface.",
    tags: ["Full Stack", "Media Upload", "Database", "React"],
    status: "Completed",
    problem:
      "Independent musicians needed a lightweight platform to upload and manage their music without large platform dependencies.",
    highlights: [
      "Built full frontend, backend, and database layers for media management",
      "Designed a responsive interface for upload, browse, and playback",
      "Structured for future enhancements including playlists and search",
    ],
    githubUrl: "https://github.com/Dhars-hini/musicify-frontend",
  },
];

export type Internship = {
  company: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  focus: string[];
  githubUrl?: string;
};

export const internships: Internship[] = [
  {
    company: "Cube AI",
    role: "Web Development Intern",
    period: "Sept 2025 – Oct 2025",
    type: "On-site",
    summary:
      "Developed an AI-powered ERP web application using React and Django, integrating an advanced analytics dashboard with automated report generation.",
    achievements: [
      "Optimised backend APIs and database performance, reducing response time by 30%",
      "Built automated report generation pipeline integrated into the ERP",
      "Delivered analytics dashboard for real-time business insights",
    ],
    focus: ["React", "Django", "ERP", "Analytics Dashboard", "Backend Optimisation", "Report Generation"],
    githubUrl: "https://github.com/Dhars-hini/cube-erp",
  },
  {
    company: "Zscaler",
    role: "Cybersecurity Virtual Intern",
    period: "Apr 2025 – Jun 2025",
    type: "Virtual",
    summary:
      "Completed the Fundamentals of Cybersecurity (EDU-102) training by Zscaler Training, with hands-on lab assessments on cloud security and Zero Trust.",
    achievements: [
      "Completed hands-on labs focused on cloud security and Zero Trust network concepts",
      "Gained practical exposure to enterprise security workflows and secure network access",
      "Earned certification upon completion of the structured programme",
    ],
    focus: ["Cloud Security", "Zero Trust", "Cybersecurity Fundamentals", "Hands-on Labs", "Enterprise Security"],
    githubUrl: "https://github.com/Dhars-hini/Zscaler-Intern.git",
  },
];

export const certifications = [
  {
    name: "Cloud Computing — Elite Certification",
    organization: "NPTEL",
    year: "2024",
    badge: "elite",
  },
  {
    name: "FutureSkills Prime Ambassador",
    organization: "MeitY–NASSCOM",
    year: "2023",
    badge: "ambassador",
  },
  {
    name: "Digital 101 Certified",
    organization: "FutureSkills Prime",
    year: "2023",
    badge: "certified",
  },
  {
    name: "Cybersecurity Fundamentals (EDU-102)",
    organization: "Zscaler Training",
    year: "2025",
    badge: "security",
  },
  {
    name: "AWS Learning Programme",
    organization: "Amazon Web Services",
    year: "2024",
    badge: "cloud",
  },
];

export const achievements = [
  { title: "FutureSkills Prime Ambassador", detail: "Recognised by MeitY–NASSCOM for digital skills advocacy" },
  { title: "Class Representative", detail: "Led class coordination and student communication throughout B.Tech" },
  { title: "NPTEL Elite Certification", detail: "Top performer in Cloud Computing national online course" },
  { title: "Hackathon Participant", detail: "Built and presented projects under real-time competition conditions" },
  { title: "Technical Event Participation", detail: "Active participant in workshops, seminars, and tech events" },
  { title: "Digital 101 Certified", detail: "Certified in digital literacy by FutureSkills Prime (2023)" },
];

export const futureGoals = [
  { step: "01", title: "Software Engineer", description: "Build scalable, production-grade software" },
  { step: "02", title: "Cloud Engineer", description: "Master AWS, GCP, and cloud-native architecture" },
  { step: "03", title: "ML Engineer", description: "Deploy intelligent models at scale" },
  { step: "04", title: "Global Tech Company", description: "Contribute to world-class engineering teams" },
  { step: "05", title: "Work in Japan", description: "Build a career in Japan's technology industry" },
  { step: "06", title: "Tech Entrepreneur", description: "Found and lead a technology company" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const siteMeta = {
  title: "Dharshini Ganesh — Software Engineer | AI · Cloud · Full Stack",
  description:
    "Portfolio of Dharshini Ganesh — Software Engineer skilled in full-stack development, cloud computing, AI-based solutions, and ERP automation. Open to opportunities.",
  keywords: [
    "Dharshini Ganesh",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Django Developer",
    "Python Developer",
    "Java Developer",
    "AWS",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Cloud Computing",
    "Portfolio",
    "Tamil Nadu",
    "India",
  ],
  url: "https://dharshini.dev",
};
