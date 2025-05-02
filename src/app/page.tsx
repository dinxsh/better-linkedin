"use client";

import { useState } from 'react';
import { LinkedInNavbar } from '@/components/LinkedInNavbar';
import { ProfileHeaderFull } from '@/components/ProfileHeaderFull';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Sidebar } from '@/components/Sidebar';
import { ToggleButton } from '@/components/ToggleButton';

export default function MainProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <LinkedInNavbar />
      <main className={`min-h-screen bg-gray-100 py-8 transition-all duration-300 ${sidebarOpen ? 'sm:pr-[380px] overflow-hidden' : ''}`}>
        <div className={`container mx-auto px-4 ${sidebarOpen ? 'pointer-events-none opacity-60' : ''} transition-all duration-300`}>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <section>
              <ProfileHeaderFull />
              <AboutSection />
              <ExperienceSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
            </section>
          </div>
        </div>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <ToggleButton isOpen={sidebarOpen} onClick={() => setSidebarOpen(o => !o)} />
      </main>
    </>
  );
}
