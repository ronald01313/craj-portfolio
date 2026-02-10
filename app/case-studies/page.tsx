'use client';

import PageShell from '../components/PageShell';

export default function CaseStudies() {
  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
            Case <span className="text-purple-600">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In-depth analysis of our projects, from conception to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl bg-card border border-border aspect-[16/10]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 p-10 z-20 space-y-2">
                        <h3 className="text-3xl font-bold text-white">Case Study {i}</h3>
                        <p className="text-white/70">Exploring the challenges and solutions of project {i}.</p>
                        <button className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </PageShell>
  );
}
