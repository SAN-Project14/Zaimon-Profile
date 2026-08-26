import React from 'react';
import { Play, ExternalLink, Sparkles, Terminal, Gamepad2, Info, ArrowUpRight, CheckCircle2, ShieldCheck, Flame, Waves } from 'lucide-react';
import { liveProjects } from '../data/portfolioData';
import { LiveGame } from '../types';

interface LiveGamesProps {
  onSelectProject: (project: LiveGame) => void;
}

export const LiveGames: React.FC<LiveGamesProps> = ({ onSelectProject }) => {
  return (
    <section
      id="live-games"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Glow background accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>INSTANTLY DEPLOYED & PLAYABLE</span>
        </div>
        <h2
          id="live-games-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter"
        >
          PLAY MY GAMES
        </h2>
        <p className="text-cyan-400 font-heading text-lg sm:text-xl font-semibold mt-2">
          &ldquo;Don't just look at my work. Play it.&rdquo;
        </p>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          These projects are currently deployed online and can be played directly from this portfolio.
        </p>
      </div>

      {/* Live Game Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {liveProjects.map((game, index) => {
          const isAquarium = game.id === 'aquarium-tycoon';

          return (
            <div
              key={game.id}
              id={`live-game-card-${game.id}`}
              className="group rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(34,211,238,0.15)] relative overflow-hidden backdrop-blur-sm"
            >
              {/* Top Accent line & ambient glow */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-80"
                style={{
                  backgroundImage: isAquarium
                    ? 'linear-gradient(to right, #06b6d4, #3b82f6)'
                    : 'linear-gradient(to right, #22c55e, #eab308)',
                }}
              />

              <div>
                {/* Header Status & Genre */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-pulse" />
                      LIVE
                    </span>
                    <span className="text-xs font-mono-code text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {game.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono-code text-gray-500 hidden sm:block uppercase tracking-wider">
                    PROD // WEB BUILD
                  </span>
                </div>

                {/* Visual Game Stage / Mockup Preview */}
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-6 bg-[#080808] border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  {/* Stylized Game Scene Simulation / Illustration */}
                  {isAquarium ? (
                    <div className="w-full h-full relative bg-gradient-to-b from-[#041a2f] via-[#032a4a] to-[#011425] flex flex-col justify-between p-4 overflow-hidden">
                      {/* Aquarium water ripple & bubble effects */}
                      <div className="absolute inset-0 bg-game-grid opacity-10" />
                      <div className="absolute top-2 right-4 flex items-center gap-1.5 text-[10px] font-mono-code bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded">
                        <Waves className="w-3 h-3 animate-pulse" />
                        <span>TANK: LEVEL 4 &bull; $14,250</span>
                      </div>

                      {/* Pixel Art Fish silhouettes */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center">
                        <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                          <div className="text-4xl mb-2 filter drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                            🐠 🐡 🪸
                          </div>
                          <div className="font-heading font-extrabold text-xl text-cyan-300 tracking-wider uppercase">
                            Aquarium Tycoon
                          </div>
                          <p className="text-xs text-cyan-200/80 font-mono-code mt-1">
                            16-Bit Pixel Simulation & Economy
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-cyan-300/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-cyan-900/40">
                        <span>FPS: 60 &bull; VER: 1.2.0</span>
                        <span>CLICK &bull; BUILD &bull; SCALE</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative bg-gradient-to-b from-[#0f172a] via-[#111c2e] to-[#070d18] flex flex-col justify-between p-4 overflow-hidden">
                      {/* Scrabble tile grid visual */}
                      <div className="absolute inset-0 bg-dot-matrix opacity-25" />
                      <div className="absolute top-2 right-4 flex items-center gap-1.5 text-[10px] font-mono-code bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 rounded">
                        <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
                        <span>COMBO x4 &bull; 8,920 PTS</span>
                      </div>

                      {/* Scrabble Tiles Visual */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center">
                        <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                          <div className="flex justify-center gap-1.5 mb-2.5">
                            {['W', 'O', 'R', 'D', 'S'].map((letter, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded bg-amber-100 text-slate-950 font-heading font-extrabold text-base flex items-center justify-center shadow-md border-b-2 border-amber-400 relative"
                              >
                                {letter}
                                <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono-code text-slate-700">
                                  {i + 1}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="font-heading font-extrabold text-xl text-emerald-400 tracking-wider uppercase">
                            SCRABBLE INFINITE
                          </div>
                          <p className="text-xs text-emerald-200/80 font-mono-code mt-1">
                            Endless Vocabulary Survival & Arcade Run
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 flex justify-between items-center text-[10px] font-mono-code text-emerald-300/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-emerald-900/40">
                        <span>DICTIONARY API VERIFIED</span>
                        <span>TIMER PRESSURE: ACTIVE</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Quick Summary */}
                  <div className="absolute inset-0 bg-[#050505]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-mono-code text-cyan-400 uppercase font-semibold">
                        KEY MECHANICS:
                      </span>
                      <p className="text-xs text-gray-200 leading-relaxed max-w-sm">
                        {game.gameplayHighlight}
                      </p>
                      <div className="text-[11px] font-mono-code text-cyan-300 pt-1">
                        Click &ldquo;PLAY NOW&rdquo; to launch in new window
                      </div>
                    </div>
                  </div>
                </div>

                {/* Game Title & Subtitle */}
                <div className="mb-3">
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {game.title}
                  </h3>
                  <div className="text-sm font-medium text-cyan-400 font-mono-code">
                    {game.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {game.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {game.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono-code text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: PLAY NOW and VIEW PROJECT */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/5">
                <a
                  id={`btn-play-${game.id}`}
                  href={game.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider bg-cyan-500 text-black hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  <Play className="w-4 h-4 fill-black text-black" />
                  <span>PLAY NOW &rarr;</span>
                </a>

                <button
                  id={`btn-view-${game.id}`}
                  type="button"
                  onClick={() => onSelectProject(game)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                >
                  <Info className="w-4 h-4 text-cyan-400" />
                  <span>VIEW PROJECT</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
