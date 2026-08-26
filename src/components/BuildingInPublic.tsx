import React from 'react';
import { Github, GitBranch, GitCommit, Star, Terminal, ExternalLink, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { personalInfo, liveProjects, gameProjects, softwareProjects } from '../data/portfolioData';

export const BuildingInPublic: React.FC = () => {
  const allProjects = [...liveProjects, ...gameProjects, ...softwareProjects];

  const languages = [
    { name: 'TypeScript / JavaScript', percentage: 65, color: '#3178c6' },
    { name: 'React / HTML5 Canvas', percentage: 22, color: '#10b981' },
    { name: 'CSS3 / Tailwind', percentage: 8, color: '#38bdf8' },
    { name: 'Python / Backend', percentage: 5, color: '#f59e0b' },
  ];

  return (
    <section
      id="building-in-public"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
        </div>
        <h2
          id="building-in-public-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          BUILDING IN PUBLIC
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Direct repository feeds, source code architectures, and continuous open development iterations.
        </p>
      </div>

      {/* GitHub Overview Box & Language Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Left: GitHub Profile Card */}
        <div className="lg:col-span-4 game-card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white/5 text-white border border-white/10">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg">
                  @{personalInfo.githubUsername}
                </h3>
                <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider">
                  Active Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Open source game prototypes, browser-based physics simulators, and web application repositories.
            </p>

            <div className="space-y-3 text-xs font-mono-code text-gray-400 border-t border-white/5 pt-4">
              <div className="flex justify-between">
                <span>REPOSITORIES:</span>
                <span className="text-gray-200">{allProjects.length}+ Published</span>
              </div>
              <div className="flex justify-between">
                <span>PRIMARY ENGINE:</span>
                <span className="text-cyan-400">React + HTML5 Canvas</span>
              </div>
              <div className="flex justify-between">
                <span>CI/CD PIPELINE:</span>
                <span className="text-cyan-300">Vercel Automation</span>
              </div>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>

        {/* Right: Language Distribution & Activity Highlights */}
        <div className="lg:col-span-8 game-card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <h3 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Codebase Distribution & Telemetry
              </h3>
              <span className="text-xs font-mono-code text-gray-400 uppercase tracking-wider font-bold">
                LATEST COMMITS
              </span>
            </div>

            {/* Language Progress Bar */}
            <div className="mb-6">
              <div className="flex h-3 w-full rounded-full overflow-hidden bg-black/40 border border-white/10 mb-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-code">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-gray-300 truncate">{lang.name}</span>
                    <span className="text-gray-500 font-bold">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300 pt-4 border-t border-white/5">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono-code text-[11px] text-cyan-400 block mb-1 font-bold uppercase tracking-wider">
                  PHYSICS SIMULATION CODE:
                </span>
                <p className="text-gray-400 leading-snug">
                  Pure vector math, elastic collisions, and attenuated ripple impulse propagation algorithms.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono-code text-[11px] text-cyan-300 block mb-1 font-bold uppercase tracking-wider">
                  STATE & LIFECYCLE:
                </span>
                <p className="text-gray-400 leading-snug">
                  Decoupled game logic loops running at 60 FPS synchronized with modern reactive UI overlays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allProjects.slice(0, 3).map((proj) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono-code text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.id}
                  </span>
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10 uppercase font-bold">
                  {proj.status}
                </span>
              </div>

              <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono-code text-gray-400">
              <span>{proj.technologies[0]}</span>
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold uppercase"
                >
                  <span>Code</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
