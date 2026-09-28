import React from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Terminal, Cpu, GitBranch, Layers, ShieldCheck } from 'lucide-react';
import { GITHUB_PROFILE } from '../../data/engineering';

export const EngineeringHero: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Technical Section Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-4 gap-4">
        <SectionLabel index={3} label="ENGINEERING & SYSTEMS" category="SYSTEM LAYER 03" />
        <div className="flex items-center gap-3 font-mono text-xs text-[#6B6E75]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#101216] border border-white/[0.06] text-[#5B8CFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] animate-pulse" />
            LIVE TELEMETRY
          </span>
          <span>GITHUB: @{GITHUB_PROFILE.username}</span>
        </div>
      </div>

      {/* Dominant Headline & Architectural Stance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5B8CFF] uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>// ARCHITECTURAL FOUNDATION</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F0] leading-[0.94] text-balance">
            BEHIND
            <br />
            EVERY INTERFACE
            <br />
            <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
              IS A SYSTEM.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#A5A7AC] max-w-2xl leading-[1.68]">
            I approach digital products not merely as screens to be styled, but as interconnected
            systems of data flows, state machines, API contracts, and infrastructure topology. Code
            is the architecture that allows intelligence to move with reliability, scale, and
            sensory restraint.
          </p>

          {/* Systems Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06] font-mono">
            <div className="p-3 rounded-xl bg-[#08090B] border border-white/[0.04]">
              <span className="text-[10px] text-[#6B6E75] block uppercase">TYPE CONTRACT</span>
              <span className="text-sm font-semibold text-[#F5F5F0]">100% STRICT</span>
              <span className="text-[10px] text-[#5B8CFF] block mt-0.5">Zero `any` mandate</span>
            </div>

            <div className="p-3 rounded-xl bg-[#08090B] border border-white/[0.04]">
              <span className="text-[10px] text-[#6B6E75] block uppercase">UI COMPOSITING</span>
              <span className="text-sm font-semibold text-[#F5F5F0]">60+ FPS</span>
              <span className="text-[10px] text-[#34D399] block mt-0.5">GPU-accelerated</span>
            </div>

            <div className="p-3 rounded-xl bg-[#08090B] border border-white/[0.04]">
              <span className="text-[10px] text-[#6B6E75] block uppercase">TOPOLOGY</span>
              <span className="text-sm font-semibold text-[#F5F5F0]">CLOUD-NATIVE</span>
              <span className="text-[10px] text-[#A5A7AC] block mt-0.5">Docker & Cloud Run</span>
            </div>

            <div className="p-3 rounded-xl bg-[#08090B] border border-white/[0.04]">
              <span className="text-[10px] text-[#6B6E75] block uppercase">AI INFERENCE</span>
              <span className="text-sm font-semibold text-[#F5F5F0]">STREAMING</span>
              <span className="text-[10px] text-[#795CFF] block mt-0.5">Chunked SSE protocols</span>
            </div>
          </div>
        </div>

        {/* Right Architectural Blueprint Box */}
        <div className="lg:col-span-4 p-6 sm:p-8 rounded-[24px] bg-[#08090B] border border-white/[0.08] relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B8CFF]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 font-mono text-xs">
            <span className="text-[#5B8CFF] font-semibold uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              SYSTEM DIAGNOSTICS
            </span>
            <span className="text-[10px] text-[#34D399]">OPTIMAL</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>CORE ARCHITECT:</span>
              <span className="text-[#F5F5F0] font-semibold">GARV SHAW</span>
            </div>
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>PRIMARY LANGUAGES:</span>
              <span className="text-[#F5F5F0]">TYPESCRIPT, PYTHON</span>
            </div>
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>CLOUD INFRASTRUCTURE:</span>
              <span className="text-[#F5F5F0]">GCP / CLOUD RUN</span>
            </div>
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>INTELLIGENCE LAYER:</span>
              <span className="text-[#5B8CFF]">GEMINI & MULTI-AGENT</span>
            </div>
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>COMMIT DISCIPLINE:</span>
              <span className="text-[#F5F5F0]">SEMANTIC CONVENTIONS</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.06] font-mono text-[11px] text-[#A5A7AC] space-y-1">
            <div className="text-[10px] text-[#6B6E75] uppercase tracking-wider">
              OPERATIONAL DIRECTIVE
            </div>
            <p className="text-[#F5F5F0] leading-snug">
              "Build systems that operate with mathematical predictability, fail gracefully, and
              respect human cognition."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
