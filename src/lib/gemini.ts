import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Helper function to generate content
export async function generateContent(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    return null;
  }
}

// Specific prompts for different features
export const prompts = {
  careerSummary: (profile: any) => `
    Generate a professional career summary for a LinkedIn profile based on the following information:
    Name: ${profile.name}
    Headline: ${profile.headline}
    Experience: ${JSON.stringify(profile.experience)}
    Education: ${JSON.stringify(profile.education)}
    Skills: ${profile.skills.join(', ')}
    
    Make it concise, professional, and highlight key achievements and expertise.
  `,
  
  skillSuggestion: (profile: any) => `
    Suggest the next most valuable skill to learn based on this profile:
    Current Skills: ${profile.skills.join(', ')}
    Experience: ${JSON.stringify(profile.experience)}
    Education: ${JSON.stringify(profile.education)}
    
    Consider market trends and career progression.
  `,
  
  outreachMessage: (profile: any, target: string) => `
    Generate a personalized LinkedIn connection request message for:
    My Profile: ${profile.name}, ${profile.headline}
    Target: ${target}
    
    Make it professional, concise, and personalized.
  `,
  
  jobTailoring: (profile: any, jobDesc: string) => `
    Tailor this job description to match the candidate's profile:
    Job Description: ${jobDesc}
    Candidate Profile: ${JSON.stringify(profile)}
    
    Highlight relevant experience and skills.
  `,
  
  coverLetter: (profile: any, jobDesc: string) => `
    Generate a cover letter for this job:
    Job Description: ${jobDesc}
    Candidate Profile: ${JSON.stringify(profile)}
    
    Make it professional and tailored to the role.
  `,
  
  learningPath: (profile: any, goal: string) => `
    Create a learning path to achieve this career goal:
    Current Profile: ${JSON.stringify(profile)}
    Goal: ${goal}
    
    Include specific skills, courses, and timeline.
  `,
  
  networkGap: (profile: any) => `
    Analyze this profile's network gaps:
    Profile: ${JSON.stringify(profile)}
    
    Suggest key roles/industries to connect with.
  `,
  
  careerTracker: (profile: any, goal: string) => `
    Create a career progress tracking plan:
    Current Profile: ${JSON.stringify(profile)}
    Goal: ${goal}
    
    Include milestones and checkpoints.
  `
}; 