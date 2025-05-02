export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  logoUrl?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  duration: string;
  logoUrl?: string;
}

export interface License {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Project {
  name: string;
  duration: string;
  description: string;
  skills: string[];
  images?: string[];
}

export interface Volunteering {
  role: string;
  org: string;
  duration: string;
  description: string;
}

export interface Organization {
  name: string;
  role: string;
  duration: string;
  description: string;
}

export interface Interest {
  name: string;
  type: string;
}

export interface ProfileDataFull {
  coverImageUrl: string;
  avatarUrl: string;
  name: string;
  headline: string;
  location: string;
  connections: number;
  about: string;
  featured: { title: string; type: string; url: string; image?: string }[];
  experience: Experience[];
  education: Education[];
  licenses: License[];
  projects: Project[];
  volunteering: Volunteering[];
  skills: string[];
  organizations: Organization[];
  interests: Interest[];
  sidebar: {
    peopleAlsoViewed: { name: string; headline: string; avatarUrl: string }[];
    premiumProfiles: { name: string; headline: string; avatarUrl: string }[];
  };
}

export const mockProfileFull: ProfileDataFull = {
  coverImageUrl: "https://media.licdn.com/dms/image/v2/D4D16AQFR-NKYSQ8Lag/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732320574744?e=1751500800&v=beta&t=8xxHCZdEg4GKKUNTXbdi92OuQOnEV8C_bEtGkZrF2iA", // Unsplash office
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5635AQHPXVgYJZSvfw/profile-framedphoto-shrink_800_800/B56ZY0.wLnGsAg-/0/1744645588109?e=1746824400&v=beta&t=k2jvZJPtHdUOY1DaSvdrGILJHvBfe9WEPctsI7ohB0E", // Placeholder avatar
  name: "Dinesh Talwadker",
  headline: "Indie hacker building products, experimenting with crypto & AI Agents",
  location: "Ahmedabad, Gujarat, India",
  connections: 2923,
  about: `Hey there! I'm an indie hacker shipping impactful, community-driven products. Currently interning at Zerops, I work on full-stack development, creating technical documentation, manuals, and SDK starter recipes to simplify cloud deployment.\n\nPreviously, I built a shipments app at Delemate, featuring tracking, delivery estimates, payments, inventory management, and more.`,
  featured: [
    { title: "Projects & Open Source Contributions", type: "link", url: "#", image: "https://placehold.co/80x80" },
    { title: "Thrilled to be a finalist at Startup Eummit Bootcamp by IITM", type: "post", url: "#", image: "https://placehold.co/80x80" },
    { title: "WON OUR FIRST NATIONAL HACKATHON", type: "post", url: "#", image: "https://placehold.co/80x80" }
  ],
  experience: [
    {
      role: "Co-Founder",
      company: "Sanity Esports",
      duration: "Oct 2023 - Present · 1 yr 8 mos",
      location: "India · Remote",
      description: "Leading teams to build a tournament management platform for gamers.",
      logoUrl: "https://placehold.co/48x48"
    },
    {
      role: "Software Engineer (Intern)",
      company: "Zerops",
      duration: "Nov 2024 - Jan 2025 · 3 mos",
      location: "Prague, Czechia · Remote",
      description: "Full stack development, writing technical blogs, documentation and creating starter recipes (SDKs).",
      logoUrl: "https://placehold.co/48x48"
    },
    {
      role: "Founding Software Engineer",
      company: "DeleMate",
      duration: "Nov 2023 - Aug 2024 · 10 mos",
      location: "Hyderabad, Telangana, India · Remote",
      description: "Shipped a cross platform app & backend including live-tracking, chats/groups, order deliveries and estimation.",
      logoUrl: "https://placehold.co/48x48"
    }
  ],
  education: [
    {
      school: "Gujarat Technological University (GTU)",
      degree: "Bachelor of Technology",
      field: "Computer Science, Data Science",
      duration: "2020 - 2024",
      logoUrl: "https://placehold.co/48x48"
    },
    {
      school: "SAL COLLEGE OF ENGINEERING (I13)",
      degree: "Bachelor of Technology",
      field: "Computer Science, Data Science",
      duration: "2020 - 2024",
      logoUrl: "https://placehold.co/48x48"
    }
  ],
  licenses: [
    {
      name: "Artificial Intelligence and the future of work",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: "#"
    },
    {
      name: "Introduction to Web Development",
      issuer: "Udemy",
      date: "2022",
      credentialUrl: "#"
    }
  ],
  projects: [
    {
      name: "aarogya",
      duration: "Oct 2024 - Oct 2024",
      description: "Health, meal plan, workouts & nutrition tracking app with an AI coach.",
      skills: ["React Native", "React.js"],
      images: ["https://placehold.co/48x48"]
    },
    {
      name: "DataCrypt",
      duration: "Sep 2024 - Sep 2024",
      description: "End to end cryptography library implementation in JS.",
      skills: ["REST APIs", "Analytical Skills"],
      images: ["https://placehold.co/48x48"]
    }
  ],
  volunteering: [
    {
      role: "Bot Developer Intern",
      org: "ZNotes",
      duration: "Jan 2023 - Jun 2023 · 6 mos",
      description: "Contributed to message logging, moderation, economy & special features for the znotes discord bot serving 43K users."
    }
  ],
  skills: [
    "JavaScript", "React.js", "Python (Programming Language)", "Full-Stack Development", "Software Development"
  ],
  organizations: [
    {
      name: "Girlscript Summer Of Code",
      role: "Open Source Mentor & Core Team",
      duration: "May 2024 - Nov 2024",
      description: "Code reviews for over 100+ pull requests, mentored 100+ contributors."
    },
    {
      name: "Fiverr.com",
      role: "Developer Freelancer",
      duration: "Apr 2022 - Aug 2023",
      description: "Worked with multiple clients to deliver quality production-ready software."
    }
  ],
  interests: [
    { name: "Ashutosh Pandey", type: "Top Voice" },
    { name: "Shreyaa Kapoor", type: "Top Voice" }
  ],
  sidebar: {
    peopleAlsoViewed: [
      { name: "Alapan Das", headline: "J-SDE @Nature Technologies || CS Senior 25 || Fine Tuning...", avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg" },
      { name: "Aniket Pandey", headline: "Student Entrepreneur | Building Sanity Gaming | VC...", avatarUrl: "https://randomuser.me/api/portraits/men/34.jpg" }
    ],
    premiumProfiles: [
      { name: "Alapana Mandapaka", headline: "Certified Carnatic Music Educator | Nurturing Talent...", avatarUrl: "https://randomuser.me/api/portraits/women/35.jpg" },
      { name: "shridevi inremani", headline: "Teacher at Teaching", avatarUrl: "https://randomuser.me/api/portraits/women/36.jpg" }
    ]
  }
}; 