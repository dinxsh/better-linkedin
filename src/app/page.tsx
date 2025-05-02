import { Profile } from '../components/Profile';
import { AiInsights } from '../components/AiInsights';
import { mockProfile } from '../data/mockProfile';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Pathwise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Profile data={mockProfile} />
          <AiInsights />
        </div>
      </div>
    </main>
  );
}
