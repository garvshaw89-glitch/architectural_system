import React, { useState, useEffect, useRef } from 'react';
import { useEnvironment } from '../../context/EnvironmentContext';
import { useScrollSystem } from '../../design/ScrollContext';

export type IdentityState = 'GARV' | 'AI' | 'CLOUD' | 'CODE' | 'SYSTEMS' | 'BUILD';

const STATES: IdentityState[] = ['GARV', 'AI', 'CLOUD', 'CODE', 'SYSTEMS', 'BUILD'];

interface IdentityCoreProps {
  onStateChange?: (state: IdentityState) => void;
  className?: string;
}

export const IdentityCore: React.FC<IdentityCoreProps> = ({ onStateChange, className = '' }) => {
  const { normalizedX, normalizedY, setCursorMode, isTouchDevice } = useEnvironment();
  const { prefersReducedMotion, scrollProgress } = useScrollSystem();

  const [stateIndex, setStateIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [transitionProgress, setTransitionProgress] = useState(0);

  const currentState = STATES[stateIndex];

  // 4-second cycle per state (Section 25 timeline)
  useEffect(() => {
    if (!isAutoCycling || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setStateIndex((prev) => {
        const next = (prev + 1) % STATES.length;
        if (onStateChange) onStateChange(STATES[next]);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoCycling, onStateChange, prefersReducedMotion]);

  // Handle manual state change
  const handleManualState = (idx: number) => {
    setStateIndex(idx);
    setIsAutoCycling(false);
    if (onStateChange) onStateChange(STATES[idx]);
  };

  // 3D perspective calculation from cursor
  const tiltX = prefersReducedMotion ? 0 : normalizedY * -12;
  const tiltY = prefersReducedMotion ? 0 : normalizedX * 14;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Interactive Core Canvas Container */}
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          setCursorMode('drag');
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCursorMode('default');
        }}
        onClick={() => {
          setStateIndex((prev) => (prev + 1) % STATES.length);
        }}
        className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center cursor-pointer group"
        style={{
          transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
            1 - scrollProgress * 0.15
          })`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Layer 01: Ambient Focal Glow (Intensifies on hover) */}
        <div
          className={`absolute inset-4 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
            isHovered
              ? 'bg-gradient-to-tr from-[#5B8CFF]/25 via-[#795CFF]/30 to-transparent scale-110'
              : 'bg-gradient-to-tr from-[#5B8CFF]/12 via-[#795CFF]/15 to-transparent scale-100'
          }`}
        />

        {/* Dynamic Architectural Geometry Rendered via SVG */}
        <svg
          viewBox="-160 -160 320 320"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            <linearGradient id="coreLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#795CFF" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5B8CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#5B8CFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* STATE 01: GARV — Orbital Architectural Geometry */}
          {currentState === 'GARV' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Elliptical Ring 1 */}
              <ellipse
                cx="0"
                cy="0"
                rx="140"
                ry="55"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
                transform="rotate(-25)"
              />
              {/* Elliptical Ring 2 */}
              <ellipse
                cx="0"
                cy="0"
                rx="120"
                ry="45"
                fill="none"
                stroke="rgba(91,140,255,0.25)"
                strokeDasharray="4 6"
                strokeWidth="1.2"
                transform="rotate(35)"
              />
              {/* Cardinal crosshairs */}
              <line x1="-155" y1="0" x2="-135" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="135" y1="0" x2="155" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="0" y1="-155" x2="0" y2="-135" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="0" y1="135" x2="0" y2="155" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              {/* Orbital Satellite Node */}
              <circle cx="115" cy="-35" r="4" fill="#5B8CFF" filter="drop-shadow(0 0 6px #5B8CFF)" />
              <circle cx="-100" cy="45" r="3" fill="#795CFF" filter="drop-shadow(0 0 6px #795CFF)" />
            </g>
          )}

          {/* STATE 02: AI — Neural Synaptic Architecture */}
          {currentState === 'AI' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Synaptic interconnect lines */}
              <line x1="-90" y1="-80" x2="0" y2="-40" stroke="url(#coreLineGrad)" strokeWidth="1.2" />
              <line x1="0" y1="-40" x2="90" y2="-70" stroke="url(#coreLineGrad)" strokeWidth="1" />
              <line x1="-100" y1="20" x2="-30" y2="0" stroke="url(#coreLineGrad)" strokeWidth="1" />
              <line x1="-30" y1="0" x2="80" y2="30" stroke="url(#coreLineGrad)" strokeWidth="1.5" />
              <line x1="80" y1="30" x2="110" y2="-20" stroke="url(#coreLineGrad)" strokeWidth="1" />
              <line x1="-60" y1="80" x2="0" y2="50" stroke="url(#coreLineGrad)" strokeWidth="1" />
              <line x1="0" y1="50" x2="70" y2="90" stroke="url(#coreLineGrad)" strokeWidth="1.2" />
              {/* Neural Nodes */}
              {[-90, 0, 90, -100, 80, -60, 70].map((val, idx) => (
                <circle
                  key={idx}
                  cx={val}
                  cy={idx % 2 === 0 ? -60 + idx * 20 : 20 + idx * 10}
                  r="3.5"
                  fill="#F5F5F0"
                  stroke="#5B8CFF"
                  strokeWidth="1.5"
                />
              ))}
              {/* Dynamic traveling pulse */}
              <circle cx="20" cy="-15" r="2.5" fill="#5B8CFF" className="animate-ping" />
            </g>
          )}

          {/* STATE 03: CLOUD — Distributed Infrastructure */}
          {currentState === 'CLOUD' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Horizontal Server Rack Plane 1 */}
              <rect x="-110" y="-70" width="220" height="24" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <circle cx="-90" cy="-58" r="2" fill="#5B8CFF" />
              <line x1="-70" y1="-58" x2="90" y2="-58" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

              {/* Horizontal Server Rack Plane 2 */}
              <rect x="-125" y="-10" width="250" height="24" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
              <circle cx="-105" cy="2" r="2.5" fill="#795CFF" />
              <line x1="-80" y1="2" x2="100" y2="2" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />

              {/* Horizontal Server Rack Plane 3 */}
              <rect x="-105" y="50" width="210" height="24" rx="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <circle cx="-85" cy="62" r="2" fill="#5B8CFF" />

              {/* Vertical Bus Linkages */}
              <line x1="-30" y1="-46" x2="-30" y2="-10" stroke="#5B8CFF" strokeWidth="1" />
              <line x1="40" y1="14" x2="40" y2="50" stroke="#795CFF" strokeWidth="1" />
            </g>
          )}

          {/* STATE 04: CODE — Flowing Computational Structure */}
          {currentState === 'CODE' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Binary & Token Streams */}
              <text x="-120" y="-60" fill="rgba(91,140,255,0.5)" fontFamily="monospace" fontSize="10" letterSpacing="2">
                0101 &lt;system /&gt;
              </text>
              <text x="30" y="-30" fill="rgba(245,245,240,0.4)" fontFamily="monospace" fontSize="10" letterSpacing="1">
                AI.dispatch()
              </text>
              <text x="-90" y="40" fill="rgba(121,92,255,0.6)" fontFamily="monospace" fontSize="10" letterSpacing="2">
                deploy(edge)
              </text>
              <text x="20" y="80" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="9" letterSpacing="1">
                {'{ state: ACTIVE }'}
              </text>
              {/* Framing Brackets */}
              <path d="M -130 -90 L -145 -90 L -145 90 L -130 90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
              <path d="M 130 -90 L 145 -90 L 145 90 L 130 90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            </g>
          )}

          {/* STATE 05: SYSTEMS — Architectural Blueprint */}
          {currentState === 'SYSTEMS' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Blueprint Grid */}
              <rect x="-120" y="-120" width="240" height="240" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="-120" y1="0" x2="120" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="0" y1="-120" x2="0" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {/* Modular Blocks */}
              <rect x="-80" y="-80" width="70" height="70" rx="3" fill="none" stroke="#5B8CFF" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="15" y="-80" width="65" height="50" rx="3" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <rect x="-80" y="15" width="160" height="65" rx="3" fill="none" stroke="#795CFF" strokeWidth="1.2" />
              {/* Dimension measurement marks */}
              <line x1="-80" y1="90" x2="80" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
              <text x="-15" y="102" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
                1600PX
              </text>
            </g>
          )}

          {/* STATE 06: BUILD — Progressive Geometric Construction */}
          {currentState === 'BUILD' && (
            <g className="animate-in fade-in zoom-in-95 duration-700">
              {/* Assembling Isometric Scaffolding */}
              <polygon points="0,-110 95,-55 95,55 0,110 -95,55 -95,-55" fill="none" stroke="url(#coreLineGrad)" strokeWidth="1.5" />
              <line x1="0" y1="-110" x2="0" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="95" y1="-55" x2="-95" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="-95" y1="-55" x2="95" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              {/* Construction Nodes */}
              <circle cx="0" cy="-110" r="3.5" fill="#5B8CFF" />
              <circle cx="95" cy="55" r="3.5" fill="#795CFF" />
              <circle cx="-95" cy="55" r="3.5" fill="#5B8CFF" />
            </g>
          )}
        </svg>

        {/* Central Core Glass Capsule */}
        <div
          className={`relative z-10 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full glass-panel-p2 flex flex-col items-center justify-center shadow-2xl transition-all duration-500 border border-white/[0.12] ${
            isHovered ? 'border-[#5B8CFF]/60 shadow-[0_0_35px_rgba(91,140,255,0.3)]' : ''
          }`}
        >
          {/* Micro Index Tracker */}
          <span className="text-[9px] font-mono text-[#6B6E75] tracking-widest uppercase mb-1">
            CORE // 0{stateIndex + 1}
          </span>

          {/* State Text with Subtle Accent Glow */}
          <span
            key={currentState}
            className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F0] transition-all duration-300 animate-in fade-in zoom-in-95"
            style={{
              textShadow: '0 0 20px rgba(91, 140, 255, 0.4)',
            }}
          >
            {currentState}
          </span>

          {/* Bottom Active Pulse */}
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] shadow-[0_0_6px_#5B8CFF] animate-pulse" />
            <span className="text-[9px] font-mono text-[#A5A7AC] tracking-wider uppercase">
              {currentState === 'GARV' ? 'IDENTITY' : 'SYSTEM'}
            </span>
          </div>
        </div>
      </div>

      {/* Manual Timeline State Stepper */}
      <div className="mt-5 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[#08090B] border border-white/[0.08]">
          {STATES.map((s, idx) => (
            <button
              key={s}
              onClick={() => handleManualState(idx)}
              className={`px-2.5 py-1 text-[11px] font-mono transition-all rounded ${
                stateIndex === idx
                  ? 'bg-[#15171B] text-[#F5F5F0] font-semibold border border-white/10 shadow-sm'
                  : 'text-[#6B6E75] hover:text-[#A5A7AC]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[10px] font-mono text-[#6B6E75]">
          <button
            onClick={() => setIsAutoCycling(!isAutoCycling)}
            className="hover:text-[#F5F5F0] transition-colors flex items-center gap-1"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isAutoCycling ? 'bg-emerald-400' : 'bg-zinc-600'
              }`}
            />
            <span>{isAutoCycling ? 'METAMORPHIC CYCLE (4s)' : 'CYCLE PAUSED'}</span>
          </button>
          <span>·</span>
          <span>CLICK CORE TO ADVANCE</span>
        </div>
      </div>
    </div>
  );
};
