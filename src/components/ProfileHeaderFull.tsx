import { mockProfileFull } from '@/data/mockProfileFull';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

export function ProfileHeaderFull() {
  const profile = mockProfileFull;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden relative">
      {/* Cover Image (placeholder color) */}
      <div className="relative h-40 md:h-56 bg-blue-100">
        {/* Optionally add a cover image here */}
      </div>
      {/* Avatar */}
      <div className="absolute left-8 -top-16 border-4 border-white rounded-full shadow-lg">
        <Avatar className="h-32 w-32">
          <img src={profile.avatarUrl} alt={profile.name} className="h-32 w-32 rounded-full object-cover" />
        </Avatar>
      </div>
      {/* Main Info */}
      <div className="pt-20 px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
            <div className="text-gray-700 mt-1">{profile.headline}</div>
            <div className="flex flex-wrap gap-2 text-gray-500 text-sm mt-2 items-center">
              <span>{profile.location}</span>
              <span className="mx-1">•</span>
              <span>{profile.connections}+ connections</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Message</Button>
            <Button variant="outline" className="rounded-full border-gray-300">More</Button>
          </div>
        </div>
        {/* Company/Education Chips */}
        <div className="flex flex-wrap gap-3 mt-4">
          {profile.experience.slice(0,1).map(exp => (
            <div key={exp.company} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
              {exp.logoUrl && <img src={exp.logoUrl} alt={exp.company} className="h-5 w-5 rounded-full" />}
              <span>{exp.company}</span>
            </div>
          ))}
          {profile.education.slice(0,1).map(edu => (
            <div key={edu.school} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
              {edu.logoUrl && <img src={edu.logoUrl} alt={edu.school} className="h-5 w-5 rounded-full" />}
              <span>{edu.school}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 