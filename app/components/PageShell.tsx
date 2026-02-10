'use client';

import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import LightRays from './background_2/LightRays';

interface PageShellProps {
  children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        <LightRays className="opacity-20 dark:opacity-50" />
      </div>
      
      <Navbar />

      <main className="relative z-10 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageShell;
