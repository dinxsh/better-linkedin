import { mockProfileFull } from '@/data/mockProfileFull';

export function Sidebar() {
  return (
    <aside className="space-y-4">
      {/* People Also Viewed */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <h3 className="text-md font-semibold text-gray-900 mb-2">People also viewed</h3>
        <ul className="space-y-3">
          {mockProfileFull.sidebar.peopleAlsoViewed.map(person => (
            <li key={person.name} className="flex items-center gap-3">
              <img src={person.avatarUrl} alt={person.name} className="h-8 w-8 rounded-full object-cover border" />
              <div>
                <div className="font-medium text-gray-800 text-sm leading-tight">{person.name}</div>
                <div className="text-xs text-gray-500">{person.headline}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Premium Profiles */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <h3 className="text-md font-semibold text-gray-900 mb-2">Explore Premium profiles</h3>
        <ul className="space-y-3">
          {mockProfileFull.sidebar.premiumProfiles.map(person => (
            <li key={person.name} className="flex items-center gap-3">
              <img src={person.avatarUrl} alt={person.name} className="h-8 w-8 rounded-full object-cover border" />
              <div>
                <div className="font-medium text-gray-800 text-sm leading-tight">{person.name}</div>
                <div className="text-xs text-gray-500">{person.headline}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
} 