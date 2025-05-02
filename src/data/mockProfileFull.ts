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
  avatarUrl: "/avatar.jpg",
  name: "Dinesh Talwadker",
  headline: "Indie hacker building products, experimenting with crypto & AI Agents",
  location: "Ahmedabad, Gujarat, India",
  connections: 2923,
  about: `Hey there! I'm an indie hacker shipping impactful, community-driven products. Currently interning at Zerops, I work on full-stack development, creating technical documentation, manuals, and SDK starter recipes to simplify cloud deployment.\n\nPreviously, I built a shipments app at Delemate, featuring tracking, delivery estimates, payments, inventory management, and more.`,
  featured: [
    { title: "Projects & Open Source Contributions", type: "link", url: "#", image: "/featured1.png" },
    { title: "Thrilled to be a finalist at Startup Eummit Bootcamp by IITM", type: "post", url: "#", image: "/featured2.png" },
    { title: "WON OUR FIRST NATIONAL HACKATHON", type: "post", url: "#", image: "/featured3.png" }
  ],
  experience: [
    {
      role: "Co-Founder",
      company: "Sanity Esports",
      duration: "Oct 2023 - Present · 1 yr 8 mos",
      location: "India · Remote",
      description: "Leading teams to build a tournament management platform for gamers.",
      logoUrl: "/sanity.png"
    },
    {
      role: "Software Engineer (Intern)",
      company: "Zerops",
      duration: "Nov 2024 - Jan 2025 · 3 mos",
      location: "Prague, Czechia · Remote",
      description: "Full stack development, writing technical blogs, documentation and creating starter recipes (SDKs).",
      logoUrl: "/zerops.png"
    },
    {
      role: "Founding Software Engineer",
      company: "DeleMate",
      duration: "Nov 2023 - Aug 2024 · 10 mos",
      location: "Hyderabad, Telangana, India · Remote",
      description: "Shipped a cross platform app & backend including live-tracking, chats/groups, order deliveries and estimation.",
      logoUrl: "/delemate.png"
    }
  ],
  education: [
    {
      school: "Gujarat Technological University (GTU)",
      degree: "Bachelor of Technology",
      field: "Computer Science, Data Science",
      duration: "2020 - 2024",
      logoUrl: "/gtu.png"
    },
    {
      school: "SAL COLLEGE OF ENGINEERING (I13)",
      degree: "Bachelor of Technology",
      field: "Computer Science, Data Science",
      duration: "2020 - 2024",
      logoUrl: "/sal.png"
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
      images: ["/aarogya1.png"]
    },
    {
      name: "DataCrypt",
      duration: "Sep 2024 - Sep 2024",
      description: "End to end cryptography library implementation in JS.",
      skills: ["REST APIs", "Analytical Skills"],
      images: ["/datacrypt1.png"]
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
      { name: "Alapan Das", headline: "J-SDE @Nature Technologies || CS Senior 25 || Fine Tuning...", avatarUrl: "/alapan.png" },
      { name: "Aniket Pandey", headline: "Student Entrepreneur | Building Sanity Gaming | VC...", avatarUrl: "/aniket.png" }
    ],
    premiumProfiles: [
      { name: "Alapana Mandapaka", headline: "Certified Carnatic Music Educator | Nurturing Talent...", avatarUrl: "/alapana.png" },
      { name: "shridevi inremani", headline: "Teacher at Teaching", avatarUrl: "/shridevi.png" }
    ]
  }
}; 