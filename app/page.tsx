'use client';

import PageShell from './components/PageShell';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';

export default function Home() {
  return (
    <PageShell>
      <div className="space-y-24 md:space-y-48 pb-20">
        <HeroSection />
        
        <div id="projects" className="scroll-mt-32">
            <ProjectsSection />
        </div>

        <div id="team" className="scroll-mt-32">
            <TeamSection />
        </div>
      </div>
    </PageShell>
  );
}
