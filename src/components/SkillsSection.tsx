import { mockProfileFull } from '@/data/mockProfileFull';

export function SkillsSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {mockProfileFull.skills.map(skill => (
          <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 border border-gray-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
