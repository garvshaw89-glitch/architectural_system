import React, { useState } from 'react';
import { IdentityCore } from './IdentityCore';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface ViewportPreviewProps {
  onExploreClick?: () => void;
}

export const ViewportPreview: React.FC<ViewportPreviewProps> = ({ onExploreClick }) => {
  const [activeNav, setActiveNav] = useState('WORK');
  const [currentCoreVector, setCurrentCoreVector] = useState('G');

  return (
    <div className="relative min-h-[92vh] w-full bg-[#050505] text-[#F5F5F0] overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14">
      {/* Layer 01: Ambient Atmosphere Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#5B8CFF]/10 via-[#7C5CFF]/15 to-transparent blur-[140px] pointer-events-none rounded-full" 
      />

      {/* Layer 02: Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none" />

      {/* Top Bar Contract: 3 Strict Zones */}
      <header className="relative z-20 flex items-center justify-between border-b border-white/[0.06] pb-6">
        {/* Zone 1: Single Text Element Wordmark */}
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#F5F5F0] hover:text-[#5B8CFF] transition-colors cursor-pointer">
            G / GARV SHAW
          </span>
        </div>

        {/* Zone 2: 4 Clean Text Links (Single-Line, No Pills) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[#A0A0A0]">
          {['WORK', 'ABOUT', 'ARCHITECTURE', 'LAB'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`hover:text-[#F5F5F0] transition-colors relative py-1 ${
                activeNav === item ? 'text-[#F5F5F0]' : ''
              }`}
            >
              {item}
              {activeNav === item && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C5CFF]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExploreClick}
            className="px-4 py-2 text-xs font-mono font-medium text-[#F5F5F0] bg-[#121417] hover:bg-[#1c2026] border border-white/10 rounded-lg transition-colors flex items-center gap-2 group whitespace-nowrap"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* Central Architecture: Dominant Typography + Identity Core */}
      <main className="relative z-10 my-auto py-12 flex flex-col items-center text-center">
        {/* Level 01: Hero Dominant Headline */}
        <div className="max-w-4xl mx-auto space-y-1">
          <span className="text-xs font-mono text-[#5F6268] tracking-widest uppercase block mb-3">
            PORTFOLIO // DIGITAL ARCHITECT
          </span>
          <h1 
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#F5F5F0] leading-[0.92] text-balance"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            BUILDING
            <br />
            INTELLIGENT
            <br />
            <span className="bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0] to-[#A0A0A0] bg-clip-text text-transparent">
              SYSTEMS.
            </span>
          </h1>
        </div>

        {/* Centerpiece: The Identity Core */}
        <div className="my-8">
          <IdentityCore 
            interactive={true} 
            size="medium" 
            onStateChange={(state) => setCurrentCoreVector(state)} 
          />
        </div>

        {/* Descriptor & Sub-narrative */}
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#121417]/80 border border-white/[0.08] text-xs font-mono text-[#A0A0A0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
            <span className="font-semibold text-[#F5F5F0]">AI × CLOUD × SOFTWARE</span>
            <span className="text-[#5F6268]">·</span>
            <span className="text-[#7C5CFF]">VECTOR: {currentCoreVector}</span>
          </div>

          <p className="text-sm sm:text-base text-[#A0A0A0] font-sans font-normal max-w-md mx-auto leading-relaxed">
            Engineering ideas into intelligent digital experiences. High-performance software, cloud infrastructure, and computational design.
          </p>
        </div>
      </main>

      {/* Viewport Footer Bar */}
      <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs font-mono text-[#5F6268]">
        <div className="flex items-center gap-3">
          <span className="text-[#A0A0A0]">LOC // GLOBAL</span>
          <span>·</span>
          <span>EST. 2026</span>
          <span>·</span>
          <span className="text-[#5B8CFF]">80% CALM / 20% SPECTACLE</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#F5F5F0] transition-colors py-1 group"
        >
          <span>EXPLORE SPECIFICATION</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#7C5CFF] group-hover:translate-y-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
};
