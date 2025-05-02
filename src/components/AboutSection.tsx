import { mockProfileFull } from '@/data/mockProfileFull';

export function AboutSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
      <p className="text-gray-800 whitespace-pre-line leading-relaxed text-[15px]">{mockProfileFull.about}</p>
    </section>
  );
}
