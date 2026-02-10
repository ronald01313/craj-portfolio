'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  portfolioUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Anthony Esquilona',
    role: 'Lead Developer',
    image: '/anthony.png',
    bio: 'Full-stack developer with 8+ years of experience in modern web technologies and cloud architecture.',
    portfolioUrl: 'https://eskiworks-6550e.web.app/'
  },
  {
    id: 2,
    name: 'Alphy Balatucan',
    role: 'UI/UX Designer',
    image: '/alphy.jpg',
    bio: 'Creative designer passionate about user-centered design, visual storytelling, and motion graphics.',
    portfolioUrl: 'https://alphypeng.github.io/currentportfolio/portfolio.html'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'Backend Engineer',
    image: '/team3.jpg',
    bio: 'Backend specialist focused on scalable architectures, performance optimization, and API design.',
    portfolioUrl: '#'
  },
  {
    id: 4,
    name: 'Emma Davis',
    role: 'Project Manager',
    image: '/team4.jpg',
    bio: 'Agile project manager ensuring smooth delivery, team collaboration, and client satisfaction.',
    portfolioUrl: '#'
  },
  {
    id: 5,
    name: 'Ronald Dimatangal',
    role: 'DevOps Engineer',
    image: '/profile.jpeg',
    bio: 'Infrastructure expert managing cloud deployments, CI/CD pipelines, and security protocols.',
    portfolioUrl: 'https://rhd-portfolio.vercel.app/'
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Our Talented Team
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Meet the innovators and visionaries driving our success through creative excellence and technical mastery.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card/40 backdrop-blur-md rounded-2xl border border-border overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-sm"
            >
              <div className="aspect-[4/5] overflow-hidden relative bg-muted/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <a 
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                        View Portfolio <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase text-xs">
                      {member.role}
                    </p>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {member.bio}
                </p>
                <div className="pt-2 md:hidden">
                    <a 
                      href={member.portfolioUrl}
                      className="inline-flex items-center gap-2 text-cyan-500 font-bold text-sm uppercase tracking-wider hover:underline"
                    >
                        Visit Portfolio <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
