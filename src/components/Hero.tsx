import React, { useEffect, useRef, useState } from 'react';
import { Play, Code, ArrowDown, Sparkles, Terminal, Activity, Compass, Cpu, Gamepad2, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for game developer mesh
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 30), 45);
    const colors = ['#22d3ee', '#06b6d4', '#3b82f6', '#94a3b8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const render = (time: number) => {
      frameCount++;
      if (time - lastFpsUpdate > 500) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw subtle coordinate grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#22d3ee';
            ctx.globalAlpha = (1 - dist / 110) * 0.12;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Background Interactive Mesh Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Radial vignette glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-radial-vignette pointer-events-none" />

      {/* Floating HUD Telemetry (Game Engine aesthetic) */}
      <div className="absolute top-24 right-6 hidden md:flex flex-col items-end gap-1.5 font-mono-code text-[11px] text-gray-500 bg-white/5 backdrop-blur-md p-3.5 rounded-xl border border-white/10 pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-gray-200 font-semibold">RUNTIME: ONLINE</span>
        </div>
        <div className="text-gray-400">
          TICK: <span className="text-cyan-400">{fps} FPS</span> &bull; MS: 16.6ms
        </div>
        <div className="text-gray-400">
          POS: <span className="text-cyan-300">{mousePos.x}X, {mousePos.y}Y</span>
        </div>
        <div className="text-gray-500 text-[10px]">
          STATE: 2 LIVE &bull; 3 PROTOTYPES
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div
          id="hero-status-indicator"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{personalInfo.availabilityStatus}</span>
        </div>

        {/* Primary Heading */}
        <div className="relative mb-3">
          <h2 className="text-cyan-500 font-mono-code text-xs sm:text-sm tracking-[0.3em] font-bold uppercase mb-2">
            Game Developer & Programmer
          </h2>
          <h1
            id="hero-main-heading"
            className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white uppercase leading-[0.95]"
          >
            I TURN IDEAS<br />
            INTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-600">PRODUCTS.</span>
          </h1>
        </div>

        {/* Secondary Headline */}
        <h2
          id="hero-secondary-headline"
          className="text-base sm:text-xl font-heading font-semibold text-gray-300 tracking-normal max-w-2xl mt-4 mb-4"
        >
          I BUILD GAMES, SOFTWARE, AND INTERACTIVE EXPERIENCES.
        </h2>

        {/* Supporting Text */}
        <p
          id="hero-supporting-text"
          className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed mb-8"
        >
          I design and develop interactive games, software applications, and digital experiences — from initial concepts and mechanics to polished, deployable products.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          <button
            id="hero-btn-view-games"
            type="button"
            onClick={() => scrollToSection('live-games')}
            className="w-full sm:w-auto bg-cyan-500 text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all cursor-pointer group shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          >
            <Gamepad2 className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            <span>VIEW MY GAMES &rarr;</span>
          </button>

          <button
            id="hero-btn-explore-work"
            type="button"
            onClick={() => scrollToSection('software-projects')}
            className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm cursor-pointer"
          >
            <Code className="w-4 h-4 text-cyan-400" />
            <span>EXPLORE WORK</span>
          </button>
        </div>

        {/* Core Philosophy / Statement Block */}
        <div
          id="hero-philosophy-banner"
          className="w-full max-w-2xl p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden text-left"
        >
          <div className="border-l-2 border-cyan-500/40 pl-5">
            <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-widest block font-bold mb-1">
              DEVELOPER PHILOSOPHY
            </span>
            <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
              &ldquo;{personalInfo.statement}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] font-mono-code uppercase tracking-widest text-gray-500 group-hover:text-cyan-300">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
      </button>
    </section>
  );
};
