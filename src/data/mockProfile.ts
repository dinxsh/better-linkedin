export interface ProfileData {
  name: string;
  title: string;
  location: string;
  experience: { role: string; company: string; duration: string }[];
}

export const mockProfile: ProfileData = {
  name: "John Doe",
  title: "Senior Frontend Developer",
  location: "San Francisco, CA",
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      duration: "2020 - Present"
    },
    {
      role: "Frontend Developer",
      company: "Startup Inc",
      duration: "2018 - 2020"
    }
  ]
}; 