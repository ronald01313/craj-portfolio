'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RHD Endgame Strategy',
    description: 'A comprehensive strategic framework aimed at eliminating Rheumatic Heart Disease through community-led prevention and sustainable treatment plans.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://rhd-strategy-01.vercel.app/'
  },
  {
    id: 5,
    title: 'Digital Menu Kiosk',
    description: 'A cutting-edge self-service kiosk application for modern dining, featuring real-time inventory synchronization, automated cart flows, and integrated checkout systems.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://kiosk-app-philippines.vercel.app/'
  },
  {
    id: 2,
    title: 'Insight & Analysis Platform',
    description: 'Advanced data-driven platform providing strategic insights and analytics for healthcare research and disease management globally.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
    technologies: ['TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: 'https://rhd-strategy-01.vercel.app/'
  },
  {
    id: 3,
    title: 'World Congress on RHD 2026',
    description: 'Digital platform for the global advocacy and collaboration event, connecting researchers and health professionals to share innovative RHD solutions.',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c951?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Next.js', 'GSAP', 'Sanity.io', 'Vercel'],
    link: 'https://rhd-strategy-01.vercel.app/'
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
              Strategic Impact
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-xl font-medium">
              Showcasing my commitment to developing digital solutions that drive global health strategy and research.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-foreground font-bold hover:text-purple-600 transition-colors group">
            View all work <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/40 backdrop-blur-md rounded-3xl border border-border overflow-hidden hover:border-purple-600/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.1)] flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl">
                        <Github className="w-6 h-6" />
                    </button>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl"
                    >
                        <ExternalLink className="w-6 h-6" />
                    </a>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col space-y-6">
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-black text-foreground group-hover:text-purple-600 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/20 group/btn"
                >
                  Explore Project
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Supporting component for the button icon
const ArrowRight = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default ProjectsSection;
