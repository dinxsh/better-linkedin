import { LinkedInNavbar } from '@/components/LinkedInNavbar';
import { ProfileHeaderFull } from '@/components/ProfileHeaderFull';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Sidebar } from '@/components/Sidebar';

export default function MainProfilePage() {
  return (
    <>
      <LinkedInNavbar />
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <section>
              <ProfileHeaderFull />
              <AboutSection />
              <ExperienceSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
            </section>
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
