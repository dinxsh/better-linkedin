import { mockProfileFull } from '@/data/mockProfileFull';

export function ProjectsSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Projects</h2>
      <div className="space-y-6">
        {mockProfileFull.projects.map(project => (
          <div key={project.name} className="flex gap-4">
            {project.images && project.images[0] && (
              <img src={project.images[0]} alt={project.name} className="h-12 w-12 rounded object-contain border border-gray-200" />
            )}
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-[15px]">{project.name}</div>
              <div className="text-gray-500 text-[13px]">{project.duration}</div>
              <div className="text-gray-800 mt-2 text-[15px] leading-relaxed">{project.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 px-2 py-0.5 rounded-full text-[13px] text-gray-800 border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 