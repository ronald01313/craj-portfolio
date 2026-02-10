'use client';

import PageShell from '../components/PageShell';

export default function About() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
          About <span className="text-cyan-500">CRAJ</span>
        </h1>
        <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
          We are a team of visionary developers and designers dedicated to pushing the boundaries of digital experiences. Our mission is to create technology that is not only functional but also magical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Innovation</h3>
                <p className="text-muted-foreground">Always exploring new technologies and techniques.</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Quality</h3>
                <p className="text-muted-foreground">Precision in every pixel and line of code.</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Passion</h3>
                <p className="text-muted-foreground">We love what we do and it shows in our work.</p>
            </div>
        </div>
      </div>
    </PageShell>
  );
}
