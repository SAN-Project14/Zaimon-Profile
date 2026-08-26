import React from 'react';
import { Code2, QrCode, GraduationCap, FileCode, CheckCircle2, ArrowUpRight, Github, ExternalLink, Info, Layers, Terminal } from 'lucide-react';
import { softwareProjects } from '../data/portfolioData';
import { SoftwareProject } from '../types';

interface SoftwareProjectsProps {
  onSelectProject: (project: SoftwareProject) => void;
}

export const SoftwareProjects: React.FC<SoftwareProjectsProps> = ({ onSelectProject }) => {
  return (
    <section
      id="software-projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>FULL-STACK & SYSTEM APPLICATIONS</span>
        </div>
        <h2
          id="software-projects-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          SOFTWARE & WEB PROJECTS
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Beyond game systems: scalable web applications, automated business tools, and responsive digital products.
        </p>
      </div>

      {/* Grid of Software Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {softwareProjects.map((project) => {
          const isQR = project.id === 'qr-inventory';
          const isExam = project.id === 'exam-training';
          const isDoc = project.id === 'document-management';

          return (
            <div
              key={project.id}
              id={`software-card-${project.id}`}
              className="game-card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative backdrop-blur-sm"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                      {isQR && <QrCode className="w-4 h-4" />}
                      {isExam && <GraduationCap className="w-4 h-4 text-cyan-400" />}
                      {isDoc && <FileCode className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono-code text-gray-400 block uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-white/5 text-gray-300 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono-code text-cyan-400 mb-4 font-semibold">
                  {project.subtitle}
                </div>

                {/* Problem Solved Callout */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 mb-4 text-xs text-gray-300">
                  <span className="font-mono-code text-[10px] text-cyan-400 uppercase font-bold tracking-wider block mb-0.5">
                    PROBLEM SOLVED:
                  </span>
                  <p className="text-gray-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && (
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono-code text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  id={`btn-view-software-${project.id}`}
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-cyan-500/40 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VIEW DETAILS</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10 hover:border-cyan-500/40"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
