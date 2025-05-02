import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import type { ProfileData } from "@/data/profileData";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 md:h-60">
        <img
          src={profile.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white bg-opacity-80 hover:bg-white hover:bg-opacity-90 rounded-full h-8 w-8"
          >
            <PencilIcon className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
        {/* LinkedIn Logo */}
        <div className="absolute right-3 bottom-3">
          <LinkedInGoldLogo />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="relative px-4 pt-0 pb-5 md:px-8">
        {/* Profile Image */}
        <div className="absolute -top-16 left-4 md:left-8 border-4 border-white rounded-full">
          <Avatar className="h-32 w-32">
            <AvatarImage src={profile.profileImage} alt={profile.name} />
            <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-end mt-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9"
          >
            <PencilIcon className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        {/* Name and Headline */}
        <div className="mt-16">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
            {profile.verified && (
              <VerifiedIcon className="h-5 w-5 text-gray-500" />
            )}
          </div>
          <p className="text-gray-700 mt-1">{profile.headline}</p>

          {/* Location and Contact */}
          <div className="flex items-center text-gray-500 mt-2">
            <span>{profile.location}</span>
            <span className="mx-1">•</span>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Contact info</a>
          </div>

          {/* Connections */}
          <div className="mt-1">
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
              {profile.connections}+ connections
            </a>
          </div>
        </div>

        {/* Company and Education */}
        <div className="mt-3 space-y-2">
          {profile.company.map((company, index) => (
            <div key={`company-${index}`} className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={company.logo} alt={company.name} />
                <AvatarFallback>{company.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-gray-700">{company.name}</span>
            </div>
          ))}

          {profile.education.map((edu, index) => (
            <div key={`edu-${index}`} className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={edu.logo} alt={edu.institution} />
                <AvatarFallback>{edu.institution[0]}</AvatarFallback>
              </Avatar>
              <span className="text-gray-700">{edu.institution}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Open to</Button>
          <Button variant="outline" className="rounded-full border-gray-300">Add profile section</Button>
          <Button variant="outline" className="rounded-full border-gray-300">More</Button>
        </div>
      </div>
    </div>
  );
}

// Helper function to get initials
function getInitials(name: string): string {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

// Icon components
function PencilIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.4 16L5.2 12.6l1.4-1.4 4 4 8-8 1.4 1.4-10 10z" />
    </svg>
  );
}

function LinkedInGoldLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#D4AF37"
      className="w-6 h-6"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}
