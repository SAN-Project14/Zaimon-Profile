import React, { useState } from 'react';
import { FileText, Download, Briefcase, GraduationCap, Code, Gamepad2, CheckCircle2, ExternalLink, Printer, Sparkles, Terminal } from 'lucide-react';
import { personalInfo, experienceData, educationData, skillCategories, liveProjects, gameProjects, softwareProjects } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the static PDF doesn't exist yet, we also offer the in-app interactive printable view
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 5000);
  };

  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>CURRICULUM VITAE & QUALIFICATIONS</span>
        </div>
        <h2
          id="resume-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          MY RESUME
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Comprehensive overview of experience, game systems architecture, and engineering credentials.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a
            id="btn-download-resume"
            href={personalInfo.resumePath}
            download="Zaimon_Altamia_Resume.pdf"
            onClick={handleDownloadClick}
            className="px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-cyan-500 text-black hover:bg-cyan-400 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>

          <button
            type="button"
            onClick={onOpenResumeModal}
            className="px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 text-white hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10 hover:border-cyan-500/40 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>VIEW / PRINT FULL RESUME</span>
          </button>
        </div>

        {downloadNotice && (
          <div className="mt-3 p-3 rounded-xl bg-white/5 border border-cyan-500/40 text-cyan-300 text-xs font-mono-code max-w-md animate-in fade-in">
            📄 Triggered PDF download. You can also view or print the full interactive version above!
          </div>
        )}
      </div>

      {/* Main Resume Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Experience & Education */}
        <div className="lg:col-span-7 space-y-8">
          {/* Work Experience */}
          <div className="game-card-surface rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2.5 pb-3 border-b border-white/5">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              Work & Development Experience
            </h3>

            <div className="space-y-8 relative pl-4 sm:pl-6 border-l border-white/10">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-black" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-[11px] font-mono-code text-cyan-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 font-bold uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono-code text-gray-400 mb-3 font-semibold">
                    {exp.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="game-card-surface rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2.5 pb-3 border-b border-white/5">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Education & Foundation
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-heading font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono-code text-gray-400 font-bold uppercase">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono-code text-cyan-400 mb-2 font-semibold">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Project Highlights & Core Competencies */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Games & Featured Projects Summary */}
          <div className="game-card-surface rounded-2xl p-6 sm:p-7 backdrop-blur-sm">
            <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2 pb-3 border-b border-white/5">
              <Gamepad2 className="w-5 h-5 text-cyan-400" />
              Key Project Portfolio
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-cyan-300">
                    Aquarium Tycoon
                  </span>
                  <span className="text-[10px] font-mono-code text-cyan-400 font-bold uppercase">
                    LIVE GAME
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  16-bit pixel art aquarium simulation, economic balance algorithms, player progression.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-cyan-300">
                    SCRABBLE INFINITE
                  </span>
                  <span className="text-[10px] font-mono-code text-cyan-400 font-bold uppercase">
                    LIVE GAME
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Endless word arcade survival, dictionary API verification, multiplier chains.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-cyan-300">
                    Wave Finder (Physics)
                  </span>
                  <span className="text-[10px] font-mono-code text-cyan-400 font-bold uppercase">
                    PROTOTYPE
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  2D custom ripple force engine, momentum mechanics, continuous collision detection.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-cyan-300">
                    QR-Based Inventory System
                  </span>
                  <span className="text-[10px] font-mono-code text-cyan-400 font-bold uppercase">
                    SOFTWARE APP
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Camera QR scanning asset tracker with audit reports and stock alerts.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Skills Summary Box */}
          <div className="game-card-surface rounded-2xl p-6 sm:p-7 backdrop-blur-sm">
            <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2 pb-3 border-b border-white/5">
              <Code className="w-5 h-5 text-cyan-400" />
              Technical Competencies
            </h3>

            <div className="space-y-4 text-xs font-mono-code">
              <div>
                <span className="text-gray-400 block mb-1.5 uppercase font-bold text-[10px] tracking-wider">LANGUAGES & LIBS:</span>
                <div className="flex flex-wrap gap-1">
                  {['TypeScript', 'JavaScript', 'React', 'HTML5 Canvas', 'Vite', 'Tailwind CSS', 'Python', 'SQL'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-gray-400 block mb-1.5 uppercase font-bold text-[10px] tracking-wider">GAME DEV MECHANICS:</span>
                <div className="flex flex-wrap gap-1">
                  {['2D Physics', 'Collision Math', 'Kinematics', 'Level Pacing', 'Game HUDs', 'Rapid Prototyping'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
