import React, { useState } from 'react';
import { Terminal, Code, Gamepad2, Layers, Wrench, Sparkles, CheckCircle, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL & TOOLCHAIN</span>
        </div>
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          TECHNICAL SKILLS
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          Structured competencies across game physics, interactive web engineering, and modern development workflows.
        </p>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer uppercase font-bold tracking-wider ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-black shadow-sm'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer uppercase font-bold tracking-wider ${
                selectedCategory === cat.title
                  ? 'bg-cyan-500 text-black shadow-sm'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => {
          const isGame = category.title.includes('Game');
          const isProg = category.title.includes('Programming');
          const isSoft = category.title.includes('Software');
          const isTool = category.title.includes('Tools');

          return (
            <div
              key={category.title}
              id={`skill-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="game-card-surface rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    {isProg && <Code className="w-5 h-5" />}
                    {isGame && <Gamepad2 className="w-5 h-5 text-cyan-400" />}
                    {isSoft && <Layers className="w-5 h-5 text-cyan-400" />}
                    {isTool && <Wrench className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono-code text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider font-bold">
                  {category.skills.length} SKILLS
                </span>
              </div>

              {/* Skills Badges Matrix */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-xs font-mono-code text-gray-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[9px] text-gray-400 bg-black/50 px-1.5 py-0.5 rounded ml-1 border border-white/5">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
