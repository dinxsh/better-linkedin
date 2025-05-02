export interface ProfileData {
  name: string;
  verified: boolean;
  headline: string;
  location: string;
  connections: number;
  profileViews: number;
  company: {
    name: string;
    logo: string;
  }[];
  education: {
    institution: string;
    logo: string;
  }[];
  about: string;
  highlights: {
    title: string;
    description: string;
    icon?: string;
  }[];
  skills: string[];
  coverImage: string;
  profileImage: string;
}

export const profileData: ProfileData = {
  name: "Alex Johnson",
  verified: true,
  headline: "Senior Software Engineer at TechCorp | Full Stack Developer | Cloud Solutions Architect",
  location: "San Francisco Bay Area",
  connections: 500,
  profileViews: 247,
  company: [
    {
      name: "TechCorp",
      logo: "https://ext.same-assets.com/3547751777/817599583.svg",
    },
  ],
  education: [
    {
      institution: "Stanford University",
      logo: "https://ext.same-assets.com/3547751777/817599583.svg",
    },
  ],
  about: `Over the past decade, I've been dedicated to building scalable software solutions that solve real-world problems.

With expertise in full-stack development, I specialize in React, Node.js, and cloud architecture on AWS. I've led teams that delivered mission-critical applications serving millions of users.

My approach combines technical excellence with a deep understanding of user needs and business goals. I believe that the best engineering solutions emerge when we center human experience in our development process.

I'm passionate about mentoring junior developers and contributing to open source projects that advance the tech community.

Currently looking for new opportunities where I can leverage my experience to drive innovation and create meaningful impact.`,
  highlights: [
    {
      title: "TechCorp's Annual Developer Conference",
      description: "Alex was a featured speaker at this event",
      icon: "🎤",
    },
    {
      title: "Published 'Modern Cloud Architecture Patterns'",
      description: "Technical publication with over 10,000 readers",
      icon: "📚",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "AWS",
    "System Design",
    "Team Leadership",
    "Cloud Architecture",
    "CI/CD",
  ],
  coverImage: "https://images.unsplash.com/photo-1496389395181-e5fdd5c0315e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
};
