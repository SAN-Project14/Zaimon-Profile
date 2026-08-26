import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, Sparkles, Sliders, Activity, Zap, Shield, Target, Plus, Compass } from 'lucide-react';

interface PhysicsObject {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
  color: string;
  isTarget?: boolean;
  trail: { x: number; y: number; alpha: number }[];
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  speed: number;
  color: string;
  alpha: number;
}

interface SparkleParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

export const InteractivePlayground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Simulation controls state
  const [friction, setFriction] = useState(0.985);
  const [ripplePower, setRipplePower] = useState(18);
  const [gravityEnabled, setGravityEnabled] = useState(false);
  const [vectorLines, setVectorLines] = useState(true);
  const [activePreset, setActivePreset] = useState<'wave' | 'chaos' | 'target'>('wave');
  const [score, setScore] = useState(0);
  const [physicsStats, setPhysicsStats] = useState({ fps: 60, objects: 6, ripples: 0, kineticEnergy: 0 });

  // Refs for physics loop
  const objectsRef = useRef<PhysicsObject[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const sparklesRef = useRef<SparkleParticle[]>([]);
  const targetZoneRef = useRef({ x: 0, y: 0, radius: 36 });
  const animationFrameRef = useRef<number | null>(null);
  const nextIdRef = useRef(1);

  // Initialize objects based on preset
  const initSimulation = useCallback((preset: 'wave' | 'chaos' | 'target', width: number, height: number) => {
    ripplesRef.current = [];
    sparklesRef.current = [];
    const objs: PhysicsObject[] = [];

    // Target goal zone
    targetZoneRef.current = {
      x: width * 0.82,
      y: height * 0.5,
      radius: Math.min(width, height) * 0.08 + 15,
    };

    if (preset === 'wave') {
      // Main player puck on left
      objs.push({
        id: nextIdRef.current++,
        x: width * 0.2,
        y: height * 0.5,
        vx: 0,
        vy: 0,
        radius: 18,
        mass: 2.0,
        color: '#10b981',
        trail: [],
      });

      // Medium floating gems
      for (let i = 0; i < 4; i++) {
        objs.push({
          id: nextIdRef.current++,
          x: width * (0.35 + i * 0.1),
          y: height * (0.3 + (i % 2) * 0.4),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 12,
          mass: 1.0,
          color: '#06b6d4',
          trail: [],
        });
      }
    } else if (preset === 'chaos') {
      // Multiple dynamic bumper spheres
      const colors = ['#10b981', '#06b6d4', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];
      for (let i = 0; i < 10; i++) {
        objs.push({
          id: nextIdRef.current++,
          x: width * 0.2 + (i % 4) * (width * 0.15),
          y: height * 0.2 + Math.floor(i / 4) * (height * 0.25),
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius: Math.random() * 8 + 10,
          mass: 1.2,
          color: colors[i % colors.length],
          trail: [],
        });
      }
    } else if (preset === 'target') {
      // Target practice: Multiple pucks
      for (let i = 0; i < 3; i++) {
        objs.push({
          id: nextIdRef.current++,
          x: width * 0.15,
          y: height * (0.3 + i * 0.2),
          vx: 0,
          vy: 0,
          radius: 16,
          mass: 1.8,
          color: i === 0 ? '#10b981' : '#3b82f6',
          trail: [],
        });
      }
      for (let i = 0; i < 3; i++) {
        objs.push({
          id: nextIdRef.current++,
          x: width * 0.5,
          y: height * (0.25 + i * 0.25),
          vx: 0,
          vy: 0.8 * (i % 2 === 0 ? 1 : -1),
          radius: 14,
          mass: 3.0,
          color: '#f59e0b',
          trail: [],
        });
      }
    }

    objectsRef.current = objs;
  }, []);

  // Handle ripple creation on click or tap
  const spawnRipple = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;

    ripplesRef.current.push({
      x,
      y,
      radius: 5,
      maxRadius: 180,
      strength: ripplePower,
      speed: 5.5,
      color: '#10b981',
      alpha: 1.0,
    });

    // Spawn tiny launch sparkles
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      sparklesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * (Math.random() * 2 + 1),
        vy: Math.sin(angle) * (Math.random() * 2 + 1),
        alpha: 1,
        color: '#34d399',
        size: Math.random() * 2 + 1,
      });
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    spawnRipple(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      spawnRipple(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Add random new object
  const handleAddObject = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const colors = ['#10b981', '#06b6d4', '#3b82f6', '#f59e0b', '#ec4899', '#a855f7'];
    objectsRef.current.push({
      id: nextIdRef.current++,
      x: canvas.width * (0.2 + Math.random() * 0.6),
      y: canvas.height * (0.2 + Math.random() * 0.6),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 8 + 10,
      mass: Math.random() * 1.5 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: [],
    });
  };

  // Reset simulation
  const handleReset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setScore(0);
    initSimulation(activePreset, canvas.width, canvas.height);
  };

  const handleSelectPreset = (preset: 'wave' | 'chaos' | 'target') => {
    setActivePreset(preset);
    const canvas = canvasRef.current;
    if (canvas) {
      initSimulation(preset, canvas.width, canvas.height);
    }
  };

  // Setup main canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 460;
      targetZoneRef.current = {
        x: width * 0.82,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.08 + 15,
      };
    };

    window.addEventListener('resize', handleResize);
    initSimulation(activePreset, width, height);

    let lastTime = performance.now();
    let frameCounter = 0;
    let lastFpsTime = performance.now();

    const loop = (currentTime: number) => {
      frameCounter++;
      if (currentTime - lastFpsTime >= 500) {
        const currentFps = Math.round((frameCounter * 1000) / (currentTime - lastFpsTime));
        let totalEnergy = 0;
        objectsRef.current.forEach((o) => {
          totalEnergy += 0.5 * o.mass * (o.vx * o.vx + o.vy * o.vy);
        });

        setPhysicsStats({
          fps: currentFps,
          objects: objectsRef.current.length,
          ripples: ripplesRef.current.length,
          kineticEnergy: Math.round(totalEnergy * 10) / 10,
        });
        frameCounter = 0;
        lastFpsTime = currentTime;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background physics grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
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

      // 2. Draw Target Goal Zone
      const tz = targetZoneRef.current;
      ctx.save();
      const goalGrad = ctx.createRadialGradient(tz.x, tz.y, 5, tz.x, tz.y, tz.radius);
      goalGrad.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
      goalGrad.addColorStop(0.8, 'rgba(16, 185, 129, 0.08)');
      goalGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = goalGrad;
      ctx.beginPath();
      ctx.arc(tz.x, tz.y, tz.radius, 0, Math.PI * 2);
      ctx.fill();

      // Goal perimeter ring
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(tz.x, tz.y, tz.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Goal Center indicator
      ctx.fillStyle = '#10b981';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('🎯 TARGET GOAL', tz.x, tz.y - tz.radius - 8);
      ctx.restore();

      // 3. Update & Draw Ripples
      for (let rIdx = ripplesRef.current.length - 1; rIdx >= 0; rIdx--) {
        const r = ripplesRef.current[rIdx];
        r.radius += r.speed;
        r.alpha = 1.0 - r.radius / r.maxRadius;

        if (r.radius >= r.maxRadius || r.alpha <= 0) {
          ripplesRef.current.splice(rIdx, 1);
          continue;
        }

        // Draw Expanding Shockwave rings
        ctx.save();
        ctx.strokeStyle = `rgba(16, 185, 129, ${r.alpha * 0.7})`;
        ctx.lineWidth = Math.max(1, 4 * r.alpha);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Secondary subtle inner echo ring
        if (r.radius > 20) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${r.alpha * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 15, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();

        // Apply Ripple Kinetic Force to Physics Objects
        const objects = objectsRef.current;
        for (let oIdx = 0; oIdx < objects.length; oIdx++) {
          const obj = objects[oIdx];
          const dx = obj.x - r.x;
          const dy = obj.y - r.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Wave impact condition: distance is close to the current expanding wave radius
          const diff = Math.abs(dist - r.radius);
          if (diff < r.speed * 2) {
            const angle = Math.atan2(dy, dx);
            // Attenuated force equation: F = (strength / (dist + epsilon))
            const force = (r.strength * 0.65) / (1 + dist * 0.008) / obj.mass;
            obj.vx += Math.cos(angle) * force;
            obj.vy += Math.sin(angle) * force;

            // Spawn particle splash on impact
            for (let sp = 0; sp < 2; sp++) {
              sparklesRef.current.push({
                x: obj.x,
                y: obj.y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                alpha: 1,
                color: obj.color,
                size: Math.random() * 2 + 1,
              });
            }
          }
        }
      }

      // 4. Update & Draw Physics Objects
      const objects = objectsRef.current;
      for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];

        // Apply gravity if enabled
        if (gravityEnabled) {
          obj.vy += 0.18;
        }

        // Apply friction / viscous drag
        obj.vx *= friction;
        obj.vy *= friction;

        // Update position
        obj.x += obj.vx;
        obj.y += obj.vy;

        // Trail recording
        if (Math.abs(obj.vx) > 0.3 || Math.abs(obj.vy) > 0.3) {
          obj.trail.push({ x: obj.x, y: obj.y, alpha: 0.6 });
          if (obj.trail.length > 12) obj.trail.shift();
        } else if (obj.trail.length > 0) {
          obj.trail.shift();
        }

        // Draw Motion Trails
        for (let t = 0; t < obj.trail.length; t++) {
          const tp = obj.trail[t];
          const tProgress = (t + 1) / obj.trail.length;
          ctx.fillStyle = obj.color;
          ctx.globalAlpha = tProgress * 0.3;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, obj.radius * (0.3 + 0.4 * tProgress), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        // Boundary Collisions & Elastic Rebound
        const bounceDamping = 0.85;
        if (obj.x - obj.radius < 0) {
          obj.x = obj.radius;
          obj.vx = -obj.vx * bounceDamping;
        } else if (obj.x + obj.radius > width) {
          obj.x = width - obj.radius;
          obj.vx = -obj.vx * bounceDamping;
        }

        if (obj.y - obj.radius < 0) {
          obj.y = obj.radius;
          obj.vy = -obj.vy * bounceDamping;
        } else if (obj.y + obj.radius > height) {
          obj.y = height - obj.radius;
          obj.vy = -obj.vy * bounceDamping;
        }

        // Check if object entered Target Goal
        const distToGoal = Math.hypot(obj.x - tz.x, obj.y - tz.y);
        if (distToGoal < tz.radius - obj.radius * 0.5) {
          // Goal entered!
          setScore((prev) => prev + 100);
          // Spawn goal confetti fireworks
          for (let sp = 0; sp < 25; sp++) {
            const angle = Math.random() * Math.PI * 2;
            const spSpeed = Math.random() * 5 + 2;
            sparklesRef.current.push({
              x: tz.x,
              y: tz.y,
              vx: Math.cos(angle) * spSpeed,
              vy: Math.sin(angle) * spSpeed,
              alpha: 1.0,
              color: '#34d399',
              size: Math.random() * 3 + 2,
            });
          }
          // Reset object back to left
          obj.x = width * 0.15;
          obj.y = height * (0.3 + Math.random() * 0.4);
          obj.vx = 0;
          obj.vy = 0;
        }

        // Object-to-Object Elastic Collisions
        for (let j = i + 1; j < objects.length; j++) {
          const objB = objects[j];
          const dx = objB.x - obj.x;
          const dy = objB.y - obj.y;
          const dist = Math.hypot(dx, dy);
          const minDist = obj.radius + objB.radius;

          if (dist < minDist && dist > 0) {
            // Overlap correction
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            obj.x -= nx * overlap * 0.5;
            obj.y -= ny * overlap * 0.5;
            objB.x += nx * overlap * 0.5;
            objB.y += ny * overlap * 0.5;

            // Elastic momentum resolution
            const kx = obj.vx - objB.vx;
            const ky = obj.vy - objB.vy;
            const p = (2 * (nx * kx + ny * ky)) / (obj.mass + objB.mass);

            obj.vx -= p * objB.mass * nx * 0.95;
            obj.vy -= p * objB.mass * ny * 0.95;
            objB.vx += p * obj.mass * nx * 0.95;
            objB.vy += p * obj.mass * ny * 0.95;
          }
        }

        // Draw Object
        ctx.save();
        // Glow shadow
        ctx.shadowColor = obj.color;
        ctx.shadowBlur = 12;

        ctx.fillStyle = obj.color;
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner specular highlight
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(obj.x - obj.radius * 0.3, obj.y - obj.radius * 0.3, obj.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw Vector Velocity Line
        if (vectorLines && (Math.abs(obj.vx) > 0.2 || Math.abs(obj.vy) > 0.2)) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(obj.x, obj.y);
          ctx.lineTo(obj.x + obj.vx * 6, obj.y + obj.vy * 6);
          ctx.stroke();
        }
      }

      // 5. Draw Sparkle Particles
      for (let s = sparklesRef.current.length - 1; s >= 0; s--) {
        const sp = sparklesRef.current[s];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.alpha -= 0.025;

        if (sp.alpha <= 0) {
          sparklesRef.current.splice(s, 1);
          continue;
        }

        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [friction, ripplePower, gravityEnabled, vectorLines, activePreset, initSimulation]);

  return (
    <section
      id="playground"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>CANVAS PHYSICS ENGINE DEMO</span>
        </div>
        <h2
          id="playground-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter"
        >
          PLAYGROUND
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2">
          &ldquo;A small demonstration of gameplay programming and physics.&rdquo;
        </p>
        <p className="text-xs font-mono-code text-cyan-400 mt-1 font-bold">
          Click or tap anywhere on the canvas to generate kinetic ripple shockwaves!
        </p>
      </div>

      {/* Main Interactive Stage Container */}
      <div
        ref={containerRef}
        className="game-card-surface rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm"
      >
        {/* Top Controls & Telemetry HUD */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-white/5 font-mono-code text-xs">
          {/* Preset Selector */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-[11px] uppercase tracking-wider hidden sm:inline">ARENA:</span>
            <div className="inline-flex bg-black/40 p-1 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => handleSelectPreset('wave')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all uppercase tracking-wider ${
                  activePreset === 'wave'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Wave Finder
              </button>
              <button
                type="button"
                onClick={() => handleSelectPreset('chaos')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all uppercase tracking-wider ${
                  activePreset === 'chaos'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Chaos Bumper
              </button>
              <button
                type="button"
                onClick={() => handleSelectPreset('target')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all uppercase tracking-wider ${
                  activePreset === 'target'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Target Practice
              </button>
            </div>
          </div>

          {/* Real-time Telemetry */}
          <div className="flex items-center gap-3 text-[11px]">
            <div className="text-gray-400 hidden md:block">
              FPS: <span className="text-cyan-400 font-bold">{physicsStats.fps}</span>
            </div>
            <div className="text-gray-400">
              BODIES: <span className="text-white font-bold">{physicsStats.objects}</span>
            </div>
            <div className="text-gray-400">
              ENERGY: <span className="text-cyan-300 font-bold">{physicsStats.kineticEnergy}</span>
            </div>
            {score > 0 && (
              <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold animate-pulse">
                SCORE: {score}
              </div>
            )}
          </div>
        </div>

        {/* The Physics Canvas Screen */}
        <div className="relative w-full rounded-xl overflow-hidden bg-[#050505] border border-white/10 shadow-inner cursor-crosshair">
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onTouchStart={handleTouchStart}
            className="w-full block select-none touch-none"
            style={{ height: '460px' }}
          />

          {/* On-screen instruction helper overlay */}
          <div className="absolute top-3 left-3 pointer-events-none bg-black/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono-code text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>CLICK TO PULSE &bull; GUIDE PUCK INTO TARGET ZONE</span>
          </div>
        </div>

        {/* Bottom Interactive Physics Sliders & Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 pt-5 border-t border-white/5 font-mono-code text-xs">
          {/* Ripple Force Slider */}
          <div className="flex flex-col gap-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="flex justify-between text-gray-400">
              <span className="uppercase text-[10px] tracking-wider">RIPPLE FORCE:</span>
              <span className="text-cyan-400 font-bold">{ripplePower}</span>
            </div>
            <input
              type="range"
              min="8"
              max="35"
              step="1"
              value={ripplePower}
              onChange={(e) => setRipplePower(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Surface Friction Slider */}
          <div className="flex flex-col gap-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="flex justify-between text-gray-400">
              <span className="uppercase text-[10px] tracking-wider">FRICTION DAMP:</span>
              <span className="text-cyan-300 font-bold">{Math.round((1 - friction) * 1000) / 10}%</span>
            </div>
            <input
              type="range"
              min="0.95"
              max="0.998"
              step="0.002"
              value={friction}
              onChange={(e) => setFriction(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Feature Toggles */}
          <div className="flex items-center justify-between gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setGravityEnabled(!gravityEnabled)}
              className={`flex-1 py-1.5 px-2 rounded text-[11px] font-bold border transition-all uppercase tracking-wider ${
                gravityEnabled
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              GRAVITY: {gravityEnabled ? 'ON' : 'OFF'}
            </button>
            <button
              type="button"
              onClick={() => setVectorLines(!vectorLines)}
              className={`flex-1 py-1.5 px-2 rounded text-[11px] font-bold border transition-all uppercase tracking-wider ${
                vectorLines
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              VECTORS
            </button>
          </div>

          {/* Action Buttons: Spawn + Reset */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddObject}
              className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/40 font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              <Plus className="w-3.5 h-3.5 text-cyan-400" />
              <span>SPAWN BODY</span>
            </button>

            <button
              id="btn-reset-simulation"
              type="button"
              onClick={handleReset}
              className="py-2 px-3 rounded-xl bg-white/5 hover:bg-red-950/40 hover:border-red-500/40 text-gray-300 hover:text-red-300 border border-white/10 font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs uppercase tracking-wider"
              title="Reset Simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
