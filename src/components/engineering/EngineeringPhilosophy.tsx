import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { ENGINEERING_PILLARS } from '../../data/engineering';
import { CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { useEnvironment } from '../../context/EnvironmentContext';

export const EngineeringPhilosophy: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const activePillar = ENGINEERING_PILLARS[activePillarIndex];

  return (
    <div className="space-y-12 select-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.1" label="ENGINEERING PRINCIPLES" category="SYSTEM ARCHITECTURE" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            SYSTEMS PHILOSOPHY
          </h3>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          GOVERNING LAWS OF SOFTWARE RIGOR
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Pillar List */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const isSelected = activePillarIndex === idx;
            return (
              <button
                key={pillar.code}
                onClick={() => setActivePillarIndex(idx)}
                onMouseEnter={() => setCursorMode('view')}
                onMouseLeave={() => setCursorMode('default')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'bg-[#101216] border-[#5B8CFF]/50 shadow-[0_4px_24px_rgba(91,140,255,0.08)]'
                    : 'bg-[#08090B] border-white/[0.06] hover:border-white/[0.16] hover:bg-[#0C0E12]'
                }`}
              >
                {/* Active left indicator accent bar */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5B8CFF]" />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className={isSelected ? 'text-[#5B8CFF] font-bold' : 'text-[#6B6E75]'}>
                      // {pillar.code}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#A5A7AC]">
                      {pillar.tag}
                    </span>
                  </div>

                  <span
                    className={`transition-transform duration-300 ${
                      isSelected
                        ? 'translate-x-1 text-[#5B8CFF]'
                        : 'text-[#6B6E75] group-hover:text-white'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="mt-2 font-display font-bold text-lg sm:text-xl text-[#F5F5F0]">
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Architectural Dossier */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-[24px] bg-[#08090B] border border-white/[0.08] relative overflow-hidden flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="font-mono text-xs text-[#5B8CFF] font-semibold flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                PILLAR DEEP-DIVE: {activePillar.code}
              </span>
              <span className="font-mono text-[10px] text-[#A5A7AC] uppercase tracking-widest px-2 py-0.5 rounded bg-[#101216] border border-white/[0.06]">
                {activePillar.tag}
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F0]">
                {activePillar.title}
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.7]">
                {activePillar.statement}
              </p>
            </div>

            {/* Impact Metric Callout */}
            <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.06] space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-xs text-[#34D399]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase text-[11px] tracking-wider">
                  ARCHITECTURAL OUTCOME
                </span>
              </div>
              <p className="text-xs text-[#F5F5F0] font-sans">{activePillar.impact}</p>
            </div>
          </div>

          {/* Code Contract Simulation Example */}
          <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#6B6E75] flex items-center justify-between">
            <span>METHODOLOGY: FORMAL VERIFICATION</span>
            <span className="text-[#5B8CFF]">STRICT COMPLIANCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
