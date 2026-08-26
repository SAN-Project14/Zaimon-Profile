import React from 'react';
import { Terminal, Gamepad2, Code2, Sparkles, Cpu, Layers, Award, CheckCircle2, User, Globe, ArrowRight } from 'lucide-react';
import { personalInfo, devStats } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>IDENTITY & BACKGROUND</span>
        </div>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          ABOUT ME
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Transforming complex logic, physics formulas, and design ideas into interactive playable products.
        </p>
      </div>

      {/* Main Grid: Avatar/Profile Card & Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left: Professional Profile Card / Avatar Area */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div
            id="about-profile-card"
            className="game-card-surface p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Corner Decorative HUD accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-gray-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DEV_ID // ZA-2026</span>
              </div>
              <span className="text-[10px] font-mono-code text-cyan-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider">
                FULL-STACK &bull; 2D PHYSICS
              </span>
            </div>

            {/* Profile Avatar Graphic */}
            <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-1 border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.1)] group">
              <div className="w-full h-full rounded-xl bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-matrix opacity-20" />
                <Gamepad2 className="w-14 h-14 text-cyan-400 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="text-[10px] font-mono-code text-gray-400 mt-2 z-10 font-bold uppercase tracking-wider">
                  DEVELOPER
                </span>
              </div>
            </div>

            {/* Profile Identifiers */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-bold text-white">
                {personalInfo.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                {personalInfo.roles.map((role) => (
                  <span
                    key={role}
                    className="text-xs font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Skills highlights */}
            <div className="space-y-2 text-xs font-mono-code text-gray-300 border-t border-white/5 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">ENGINE / STACK:</span>
                <span className="text-cyan-400 font-semibold">React &bull; TS &bull; Canvas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">CORE FOCUS:</span>
                <span className="text-white font-semibold">Gameplay Mechanics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">LOCATION:</span>
                <span className="text-gray-300">Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Core Pillars (BUILD / PLAY / CREATE) */}
          <div className="grid grid-cols-3 gap-3">
            {personalInfo.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/40 transition-colors backdrop-blur-sm"
              >
                <div className="text-cyan-400 font-heading font-black text-sm tracking-wider">
                  {pillar.title}
                </div>
                <p className="text-[10px] text-gray-400 mt-1 leading-snug">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Concise Biography & Focus Areas */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="game-card-surface p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">Engineering Fun:</span> From Logic to Gameplay
            </h3>
            
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                {personalInfo.bio}
              </p>
              <p className="text-gray-400">
                I thrive on the intersection of <strong className="text-gray-200">gameplay systems</strong>, <strong className="text-gray-200">physics-based mechanics</strong>, and <strong className="text-gray-200">responsive web engineering</strong>. Whether crafting an economy simulation like <em>Aquarium Tycoon</em>, an adrenaline arcade word runner like <em>SCRABBLE INFINITE</em>, or business software tools, every project is engineered with clean structure, performance profiling, and accessible player controls.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/5">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>2D Custom Physics & Kinetic Collisions</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Game Economy & Progression Systems</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Full-Stack Web Software & Tools</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Modern React / TypeScript Architecture</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Intuitive UI/UX & Responsive Controls</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Rapid Prototyping & Continuous Deployment</span>
              </div>
            </div>
          </div>

          {/* Development Statistics Grid */}
          <div
            id="about-stats-grid"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {devStats.map((stat, idx) => (
              <div
                key={stat.label}
                id={`stat-card-${idx}`}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all text-center flex flex-col justify-center backdrop-blur-sm"
              >
                <div className="text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">
                  {stat.label}
                </div>
                {stat.subtext && (
                  <div className="text-[9px] text-gray-400 font-mono-code mt-0.5">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
