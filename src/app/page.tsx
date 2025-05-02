import { Header } from "@/components/Header";
import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { profileData } from "@/data/profileData";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F2EF]">
      <Header />

      <main className="container max-w-5xl px-4 pt-6 pb-12 mx-auto">
        {/* Main Content */}
        <div className="flex flex-col space-y-4">
          <ProfileHeader profile={profileData} />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Main Column */}
            <div className="space-y-4 md:col-span-2">
              <AboutSection about={profileData.about} />
              <HighlightsSection highlights={profileData.highlights} />
              <SkillsSection skills={profileData.skills} />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">People also viewed</h2>
                {/* Placeholder content */}
                <div className="mt-2 text-sm text-gray-500">
                  Connect with similar professionals in your industry.
                </div>
              </div>

              <div className="sticky top-20 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">People you may know</h2>
                {/* Placeholder content */}
                <div className="mt-2 text-sm text-gray-500">
                  Grow your network by connecting with relevant professionals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 bg-white border-t border-gray-200">
        <div className="container flex flex-wrap items-center justify-between max-w-5xl px-4 mx-auto text-sm text-gray-500">
          <div>© 2023 LinkedIn Corporation</div>
          <div className="flex space-x-4">
            <a href="/" className="hover:underline">About</a>
            <a href="/" className="hover:underline">Accessibility</a>
            <a href="/" className="hover:underline">User Agreement</a>
            <a href="/" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
