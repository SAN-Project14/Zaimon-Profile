import React from 'react';
import { Gamepad, Layers, ArrowUpRight, Sparkles, Terminal, Activity, Compass, Cpu, Info } from 'lucide-react';
import { gameProjects } from '../data/portfolioData';
import { GameProject } from '../types';

interface GameProjectsProps {
  onSelectProject: (project: GameProject) => void;
}

export const GameProjects: React.FC<GameProjectsProps> = ({ onSelectProject }) => {
  return (
    <section
      id="game-projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Gamepad className="w-3.5 h-3.5" />
          <span>PROTOTYPES & GAMEPLAY MECHANICS</span>
        </div>
        <h2
          id="game-projects-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          GAME DEVELOPMENT
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Experimental gameplay systems, custom 2D physics simulations, and deceptive level design concepts.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gameProjects.map((project) => {
          const isWaveFinder = project.id === 'wave-finder';
          const isNotThisLevel = project.id === 'not-this-level';
          const isFishFood = project.id === 'fish-food-arena';

          return (
            <div
              key={project.id}
              id={`game-proto-card-${project.id}`}
              className="game-card-surface rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Top status & badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold border ${
                      project.status === 'PROTOTYPE'
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {project.status === 'PROTOTYPE' ? 'PROTOTYPE' : 'DEVELOPMENT'}
                  </span>
                  <span className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Stylized Concept Graphic */}
                <div className="w-full h-40 rounded-xl bg-[#080808] border border-white/10 mb-5 relative overflow-hidden flex flex-col items-center justify-center p-4 group-hover:border-cyan-500/30 transition-colors">
                  <div className="absolute inset-0 bg-game-grid opacity-15" />
                  
                  {isWaveFinder && (
                    <div className="text-center relative z-10">
                      <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
                      </div>
                      <span className="text-xs font-mono-code text-blue-300 font-bold uppercase tracking-wider">
                        KINETIC RIPPLE ENGINE
                      </span>
                    </div>
                  )}

                  {isNotThisLevel && (
                    <div className="text-center relative z-10">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        <span className="text-lg font-heading font-black text-amber-400">⚠️</span>
                      </div>
                      <span className="text-xs font-mono-code text-amber-300 font-bold uppercase tracking-wider">
                        SUBVERSIVE TRAP MECHANICS
                      </span>
                    </div>
                  )}

                  {isFishFood && (
                    <div className="text-center relative z-10">
                      <div className="w-12 h-12 mx-auto rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                        <span className="text-lg font-heading font-black text-pink-400">🎯</span>
                      </div>
                      <span className="text-xs font-mono-code text-pink-300 font-bold uppercase tracking-wider">
                        FLUID DRAG & BOIDS AI
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 text-[9px] font-mono-code text-gray-500 font-bold uppercase">
                    CANVAS 2D
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-mono-code text-cyan-400 mb-3 font-semibold">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Gameplay Concepts tags */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono-code text-gray-400 uppercase tracking-widest block mb-1.5 font-bold">
                    GAMEPLAY CONCEPTS:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.gameplayConcepts.slice(0, 4).map((concept) => (
                      <span
                        key={concept}
                        className="text-[10px] font-mono-code text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                      >
                        {concept}
                      </span>
                    ))}
                    {project.gameplayConcepts.length > 4 && (
                      <span className="text-[10px] font-mono-code text-cyan-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                        +{project.gameplayConcepts.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono-code text-gray-400 bg-black/40 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  id={`btn-view-details-${project.id}`}
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-white/5 text-white hover:bg-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>
                    {project.status === 'PROTOTYPE' ? 'VIEW DETAILS' : 'VIEW PROJECT'}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
