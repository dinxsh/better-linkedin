import { mockProfileFull } from '@/data/mockProfileFull';

export function EducationSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
      <div className="space-y-6">
        {mockProfileFull.education.map(edu => (
          <div key={edu.school} className="flex gap-4">
            {edu.logoUrl && (
              <img src={edu.logoUrl} alt={edu.school} className="h-12 w-12 rounded object-contain border" />
            )}
            <div>
              <div className="font-semibold text-gray-900">{edu.school}</div>
              <div className="text-gray-700">{edu.degree}, {edu.field}</div>
              <div className="text-gray-500 text-sm">{edu.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 