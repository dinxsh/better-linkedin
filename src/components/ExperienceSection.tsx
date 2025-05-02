import { mockProfileFull } from '@/data/mockProfileFull';

export function ExperienceSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
      <div className="space-y-6">
        {mockProfileFull.experience.map(exp => (
          <div key={exp.company + exp.role} className="flex gap-4">
            {exp.logoUrl && (
              <img src={exp.logoUrl} alt={exp.company} className="h-12 w-12 rounded object-contain border border-gray-200" />
            )}
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-[15px]">{exp.role}</div>
              <div className="text-gray-700 text-[15px]">{exp.company} <span className="text-gray-500">· {exp.duration}</span></div>
              <div className="text-gray-500 text-[13px]">{exp.location}</div>
              <div className="text-gray-800 mt-2 text-[15px] leading-relaxed">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 