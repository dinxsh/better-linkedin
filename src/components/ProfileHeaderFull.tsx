import { mockProfileFull } from '@/data/mockProfileFull';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

export function ProfileHeaderFull() {
  const profile = mockProfileFull;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden relative">
      {/* Cover Image */}
      <div className="relative h-40 md:h-56 bg-[#dbeafe]">
        <img
          src={profile.coverImageUrl}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {/* Avatar - Overlapping */}
        <div className="absolute left-8 -bottom-12 md:left-16">
          <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-white shadow-lg">
            <img src={profile.avatarUrl} alt={profile.name} className="h-full w-full rounded-full object-cover" />
          </Avatar>
        </div>
      </div>
      {/* Main Info */}
      <div className="pt-16 md:pt-20 px-6 md:px-12 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{profile.name}</h1>
          <div className="text-gray-700 mt-1 text-base md:text-lg">{profile.headline}</div>
          <div className="flex flex-wrap gap-2 text-gray-500 text-sm mt-2 items-center">
            <span>{profile.location}</span>
            <span className="mx-1">·</span>
            <span>{profile.connections}&#43; connections</span>
          </div>
          {/* Company/Education Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {profile.experience.slice(0,1).map(exp => (
              <span key={exp.company} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 border border-gray-200">
                {exp.logoUrl && <img src={exp.logoUrl} alt={exp.company} className="h-5 w-5 rounded-full" />}
                {exp.company}
              </span>
            ))}
            {profile.education.slice(0,1).map(edu => (
              <span key={edu.school} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 border border-gray-200">
                {edu.logoUrl && <img src={edu.logoUrl} alt={edu.school} className="h-5 w-5 rounded-full" />}
                {edu.school}
              </span>
            ))}
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2 mt-6 md:mt-0">
          <Button className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full px-6 font-semibold">Message</Button>
          <Button variant="outline" className="rounded-full border-gray-300 px-6 font-semibold">More</Button>
        </div>
      </div>
    </div>
  );
} 