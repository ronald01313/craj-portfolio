'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-card/40 backdrop-blur-md border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-2xl font-black text-foreground tracking-tighter">CRAJ</h2>
            <p className="text-muted-foreground text-sm font-medium">
              © {new Date().getFullYear()} CRAJ Portfolio. Built with passion and precision.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
            >
              Terms of Service
            </a>
            <a
              href="mailto:contact@craj.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
