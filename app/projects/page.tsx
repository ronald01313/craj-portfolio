'use client';

import PageShell from '../components/PageShell';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
  return (
    <PageShell>
      <div className="pt-24">
        <ProjectsSection />
      </div>
    </PageShell>
  );
}
