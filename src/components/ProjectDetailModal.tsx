import React, { useEffect } from 'react';
import { X, Play, ExternalLink, Github, CheckCircle2, Gamepad2, Code, Layers, Sparkles, Terminal, Shield, ArrowRight } from 'lucide-react';
import { BaseProject, LiveGame, GameProject, SoftwareProject } from '../types';

interface ProjectDetailModalProps {
  project: BaseProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const liveGame = project.status === 'LIVE' ? (project as LiveGame) : null;
  const gameProj = (project as GameProject).gameplayConcepts ? (project as GameProject) : null;
  const softProj = (project as SoftwareProject).problemSolved ? (project as SoftwareProject) : null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="bg-[#090909] rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-cyan-500/40 cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code font-bold border uppercase tracking-wider ${
              project.status === 'LIVE'
                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                : project.status === 'PROTOTYPE'
                ? 'bg-white/5 text-cyan-300 border-white/10'
                : 'bg-white/5 text-gray-300 border-white/10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {project.status}
          </span>
          <span className="text-xs font-mono-code text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 uppercase font-bold">
            {project.category}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-heading font-black text-white mb-1 tracking-tight">
          {project.title}
        </h2>
        <div className="text-sm font-mono-code text-cyan-400 mb-6 font-bold uppercase tracking-wider">
          {project.subtitle}
        </div>

        {/* Detailed Long Description */}
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed mb-6">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Problem Solved Callout for Software */}
        {softProj && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
            <span className="text-xs font-mono-code text-cyan-400 uppercase font-bold tracking-wider block mb-1">
              PROBLEM SOLVED:
            </span>
            <p className="text-sm text-gray-200 leading-relaxed">
              {softProj.problemSolved}
            </p>
          </div>
        )}

        {/* Controls & Gameplay Specs for Live / Game Projects */}
        {liveGame?.controls && (
          <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-xs font-mono-code text-cyan-300 uppercase font-bold tracking-wider block mb-2">
              PLAYER CONTROLS & INTERACTION:
            </span>
            <div className="space-y-1.5">
              {liveGame.controls.map((ctrl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                  <Gamepad2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{ctrl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gameplay Concepts / Physics Formulas */}
        {gameProj && (
          <div className="mb-6">
            <span className="text-xs font-mono-code text-gray-400 uppercase font-bold tracking-wider block mb-2">
              CORE GAMEPLAY & PHYSICS MECHANICS:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {gameProj.gameplayConcepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono-code text-cyan-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                >
                  {concept}
                </span>
              ))}
            </div>
            {gameProj.prototypeNotes && (
              <p className="text-xs text-gray-400 mt-2 font-mono-code italic bg-black/40 p-2.5 rounded border border-white/5">
                Formula / Architecture: {gameProj.prototypeNotes}
              </p>
            )}
          </div>
        )}

        {/* Features Checklist */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <span className="text-xs font-mono-code text-gray-400 uppercase font-bold tracking-wider block mb-2">
              KEY ARCHITECTURE & FEATURES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack Tags */}
        <div className="mb-8">
          <span className="text-xs font-mono-code text-gray-400 uppercase font-bold tracking-wider block mb-2">
            TECHNOLOGY STACK:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono-code text-gray-200 bg-white/5 px-3 py-1 rounded-md border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/5">
          {liveGame && (
            <a
              href={liveGame.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-cyan-500 text-black hover:bg-cyan-400 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>PLAY LIVE GAME &rarr;</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white transition-all flex items-center gap-2 border border-white/10 hover:border-cyan-500/40"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Code</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 text-gray-400 hover:text-white transition-all border border-white/10 hover:border-cyan-500/40 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
