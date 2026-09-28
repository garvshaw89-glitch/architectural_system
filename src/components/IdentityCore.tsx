import React, { useState, useEffect, useRef } from 'react';

interface IdentityCoreProps {
  interactive?: boolean;
  size?: 'compact' | 'medium' | 'large';
  onStateChange?: (state: string) => void;
}

const CORE_STATES = ['G', 'GARV', 'AI', 'CLOUD', 'CODE', 'SYSTEM'];

export const IdentityCore: React.FC<IdentityCoreProps> = ({
  interactive = true,
  size = 'large',
  onStateChange
}) => {
  const [stateIndex, setStateIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentState = CORE_STATES[stateIndex];

  // Auto morph cycle (Cinematic 1200ms morphing every 3.2s)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setStateIndex((prev) => (prev + 1) % CORE_STATES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Safely notify parent of state changes outside render
  useEffect(() => {
    if (onStateChange) {
      onStateChange(CORE_STATES[stateIndex]);
    }
  }, [stateIndex, onStateChange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const dimensionClasses = {
    compact: 'w-48 h-48',
    medium: 'w-64 h-64',
    large: 'w-80 h-80 sm:w-96 sm:h-96'
  }[size];

  return (
    <div className="flex flex-col items-center select-none">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative ${dimensionClasses} flex items-center justify-center cursor-pointer group`}
        onClick={() => {
          setStateIndex((prev) => (prev + 1) % CORE_STATES.length);
        }}
      >
        {/* Ambient Backlight Glow (10% Accent budget) */}
        <div 
          className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#5B8CFF]/15 via-[#7C5CFF]/20 to-transparent blur-3xl transition-transform duration-700 pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) scale(${isHovered ? 1.15 : 1})`
          }}
        />

        {/* Outer Orbit Ring 01 - Major Architecture */}
        <div 
          className="absolute inset-0 rounded-full border border-white/[0.08] transition-all duration-700 ease-out"
          style={{
            transform: `perspective(600px) rotateX(${mousePos.y * -14 + 15}deg) rotateY(${mousePos.x * 14}deg) rotateZ(0deg)`
          }}
        >
          {/* Subtle tick markers at cardinal points */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white/20" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white/20" />
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-2 bg-white/20" />
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-2 bg-white/20" />

          {/* Orbital Satellite Node 01: AI */}
          <div 
            className="absolute top-2 right-12 w-2.5 h-2.5 rounded-full bg-[#5B8CFF] shadow-[0_0_12px_#5B8CFF] animate-pulse"
            title="Node: AI Engine"
          />
        </div>

        {/* Mid Orbit Ring 02 - Elliptical System (Opposing Tilt) */}
        <div 
          className="absolute inset-8 rounded-full border border-[#7C5CFF]/25 border-dashed transition-all duration-700 ease-out"
          style={{
            transform: `perspective(600px) rotateX(${mousePos.y * 12 - 25}deg) rotateY(${mousePos.x * -12 + 10}deg)`
          }}
        >
          {/* Orbital Satellite Node 02: Cloud */}
          <div 
            className="absolute bottom-4 left-10 w-2 h-2 rounded-full bg-[#7C5CFF] shadow-[0_0_10px_#7C5CFF]"
            title="Node: Cloud Fabric"
          />
        </div>

        {/* Inner Gyroscopic Ring 03 */}
        <div 
          className="absolute inset-16 rounded-full border border-white/[0.12] transition-all duration-500 ease-out"
          style={{
            transform: `perspective(600px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`
          }}
        >
          {/* Orbital Satellite Node 03: Systems */}
          <div className="absolute -top-1 right-1/3 w-1.5 h-1.5 rounded-full bg-white/70" />
        </div>

        {/* Core Center Anchor - Glass Pill & Morphing Monogram */}
        <div 
          className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-panel flex flex-col items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-[#7C5CFF]/50"
          style={{
            transform: `perspective(600px) translateZ(${isHovered ? '24px' : '0px'}) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg)`
          }}
        >
          {/* Top Micro Monospace Index */}
          <span className="text-[9px] font-mono text-[#5F6268] tracking-widest uppercase mb-1">
            CORE // 0{stateIndex + 1}
          </span>

          {/* Morphing Identity Typography */}
          <span 
            key={currentState}
            className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F0] transition-all duration-500 transform animate-in fade-in zoom-in-95"
            style={{
              textShadow: '0 0 24px rgba(124, 92, 255, 0.4)'
            }}
          >
            {currentState}
          </span>

          {/* Bottom Precision Coordinates */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-1 h-1 rounded-full bg-[#5B8CFF]" />
            <span className="text-[9px] font-mono text-[#A0A0A0] tracking-wider">
              {currentState === 'G' || currentState === 'GARV' ? 'IDENTITY' : 'VECTOR'}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls & State Trackers */}
      {interactive && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#0A0B0D] border border-white/[0.08]">
            {CORE_STATES.map((state, idx) => (
              <button
                key={state}
                onClick={() => {
                  setStateIndex(idx);
                  setIsAutoPlaying(false);
                  if (onStateChange) onStateChange(state);
                }}
                className={`px-3 py-1 text-xs font-mono transition-all rounded ${
                  stateIndex === idx
                    ? 'bg-[#121417] text-[#F5F5F0] border border-white/15 shadow-sm'
                    : 'text-[#5F6268] hover:text-[#A0A0A0]'
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#5F6268]">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="hover:text-[#F5F5F0] transition-colors flex items-center gap-1.5"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-600'}`} />
              <span>{isAutoPlaying ? 'CYCLE ACTIVE (3.2s)' : 'CYCLE PAUSED'}</span>
            </button>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-500">CLICK CORE TO ADVANCE</span>
          </div>
        </div>
      )}
    </div>
  );
};
