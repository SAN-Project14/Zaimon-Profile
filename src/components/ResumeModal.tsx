import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { personalInfo, experienceData, educationData, skillCategories, liveProjects, gameProjects, softwareProjects } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="bg-[#080808] text-gray-200 rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="font-mono-code text-xs text-gray-400 uppercase tracking-wider font-bold">
              CURRICULUM VITAE // {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs flex items-center gap-1.5 border border-white/10 hover:border-cyan-500/40 cursor-pointer transition-all"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline font-bold">Print</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Zaimon_Altamia_Resume.pdf"
              className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 cursor-pointer transition-all"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans">
          {/* Header Block */}
          <div>
            <h1 className="text-3xl font-heading font-black text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-mono-code text-cyan-400 mt-1 font-bold uppercase tracking-wider">
              Game Developer &bull; Software Programmer &bull; Creative Technologist
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono-code text-gray-400 mt-3 pt-3 border-t border-white/5">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-gray-500" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-gray-500" /> github.com/{personalInfo.githubUsername}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-gray-500" /> linkedin.com/in/{personalInfo.githubUsername}
              </span>
            </div>
          </div>

          {/* Professional Profile Statement */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-xs font-mono-code text-cyan-400 uppercase font-bold tracking-wider mb-2">
              EXECUTIVE PROFILE
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {personalInfo.bio} Focused on shipping playable, responsive game products with custom 2D kinematics, solid game architectures, and modern web software engineering.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5 mb-4 flex items-center justify-between">
              <span>WORK & DEVELOPMENT EXPERIENCE</span>
            </h3>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm font-heading font-bold text-white">
                      {exp.role} &mdash; <span className="text-gray-400 font-normal">{exp.organization}</span>
                    </h4>
                    <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase">{exp.period}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Shipped & Live Projects */}
          <div>
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5 mb-4">
              NOTABLE GAME & SOFTWARE PROJECTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {liveProjects.map((game) => (
                <div key={game.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-heading font-bold text-cyan-300">{game.title}</h4>
                    <span className="text-[9px] font-mono-code text-cyan-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-bold uppercase">LIVE</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">{game.description}</p>
                  <div className="text-[10px] font-mono-code text-gray-500 font-semibold">
                    Tech: {game.technologies.join(', ')}
                  </div>
                </div>
              ))}

              {gameProjects.slice(0, 2).map((game) => (
                <div key={game.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-heading font-bold text-cyan-300">{game.title}</h4>
                    <span className="text-[9px] font-mono-code text-cyan-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-bold uppercase">{game.status}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">{game.description}</p>
                  <div className="text-[10px] font-mono-code text-gray-500 font-semibold">
                    Tech: {game.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5 mb-3">
              TECHNICAL COMPETENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold uppercase block mb-1.5">{cat.title}:</span>
                  <div className="text-gray-300 text-[11px]">
                    {cat.skills.map((s) => s.name).join(' &bull; ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-white/5 mb-3">
              EDUCATION
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-wrap justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-white">{edu.degree}</span> &mdash; <span className="text-cyan-400">{edu.institution}</span>
                </div>
                <span className="font-mono-code text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
