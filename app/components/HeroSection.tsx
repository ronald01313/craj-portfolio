'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-10 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} />
            Innovating the digital frontier
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl xl:text-9xl font-black text-foreground leading-[0.9] tracking-tighter"
            >
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Excellence.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed"
            >
              CRAJ is a creative studio at the intersection of design and technology, building high-performance experiences that resonate.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
          >
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-transparent border-2 border-border text-foreground rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-card transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stats/Trust Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-12 grid grid-cols-3 gap-8 border-t border-border/50 max-w-md mx-auto lg:mx-0"
          >
            <div>
              <div className="text-3xl font-black text-foreground">50+</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-foreground">12</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Awards</div>
            </div>
            <div>
              <div className="text-3xl font-black text-foreground">100%</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Success</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 mix-blend-overlay" />
            <img
              src="/portfolio-hero.png"
              alt="Creative Vision"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-32 h-32 bg-card border border-border rounded-2xl shadow-xl z-20 flex items-center justify-center p-6 hidden md:flex"
          >
            <div className="w-full h-full bg-cyan-500/20 rounded-lg animate-pulse" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-card border border-border rounded-2xl shadow-xl z-20 hidden md:block"
          >
             <div className="p-6 space-y-3">
                <div className="h-2 w-1/2 bg-muted rounded" />
                <div className="h-2 w-full bg-muted rounded" />
                <div className="h-2 w-3/4 bg-muted rounded" />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
