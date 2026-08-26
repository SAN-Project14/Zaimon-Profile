import React from 'react';
import { Lightbulb, Wrench, Sparkles, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { timelineSteps } from '../data/portfolioData';

export const DevelopmentProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Rocket className="w-3.5 h-3.5" />
          <span>PRODUCTION PIPELINE & WORKFLOW</span>
        </div>
        <h2
          id="process-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          HOW I BUILD
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
          A systematic 4-phase methodology taking gameplay concepts from initial sketches to high-performance live releases.
        </p>
      </div>

      {/* 4-Step Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {timelineSteps.map((step, index) => {
          const isFirst = index === 0;
          const isLast = index === timelineSteps.length - 1;

          return (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="game-card-surface rounded-2xl p-6 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-3xl font-heading font-black text-cyan-400">
                    {step.number}
                  </span>

                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    {index === 0 && <Lightbulb className="w-5 h-5 text-cyan-400" />}
                    {index === 1 && <Wrench className="w-5 h-5 text-cyan-400" />}
                    {index === 2 && <Sparkles className="w-5 h-5 text-cyan-400" />}
                    {index === 3 && <Rocket className="w-5 h-5 text-cyan-400" />}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-heading font-bold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cyan-300 font-medium mb-4">
                  {step.description}
                </p>

                {/* Granular Task Checklist */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-cyan-400 mt-0.5">&bull;</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom connecting flow indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-gray-500 uppercase font-bold">
                <span>PHASE {step.number} // COMPLETE</span>
                {!isLast && <ArrowRight className="w-3.5 h-3.5 text-gray-600 hidden lg:block" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
