import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { WORKFLOW_STAGES } from '../../data/engineering';
import { useEnvironment } from '../../context/EnvironmentContext';
import { Workflow, CheckCircle, ArrowRight, Layers, Box, Cpu, CloudRain } from 'lucide-react';

export const DevelopmentWorkflow: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const activeStage = WORKFLOW_STAGES[activeStageIndex];

  return (
    <div className="space-y-12 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.4" label="DEVELOPMENT LIFECYCLE" category="ENGINEERING PROTOCOL" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            THE ARCHITECTURAL LIFECYCLE
          </h3>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          METHODICAL SYSTEM CONSTRUCTION PIPELINE
        </div>
      </div>

      {/* Stepped Timeline Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WORKFLOW_STAGES.map((stage, idx) => {
          const isSelected = activeStageIndex === idx;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStageIndex(idx)}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer group ${
                isSelected
                  ? 'bg-[#101216] border-[#5B8CFF]/50 shadow-[0_0_20px_rgba(91,140,255,0.1)]'
                  : 'bg-[#08090B] border-white/[0.06] hover:border-white/[0.16] hover:bg-[#0C0E12]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#5B8CFF] rounded-t-2xl" />
              )}

              <div className="flex items-center justify-between font-mono text-xs">
                <span className={isSelected ? 'text-[#5B8CFF] font-bold' : 'text-[#6B6E75]'}>
                  {stage.step}
                </span>
                <span className="text-[10px] text-[#A5A7AC]">STAGE 0{idx + 1}</span>
              </div>

              <div className="mt-3 font-display font-bold text-base sm:text-lg text-[#F5F5F0] leading-snug">
                {stage.name}
              </div>

              <div className="mt-2 font-mono text-[11px] text-[#A5A7AC] truncate">
                {stage.focus}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Stage Panel */}
      <div className="p-8 sm:p-10 rounded-[24px] bg-[#08090B] border border-white/[0.08] relative overflow-hidden space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#5B8CFF] font-semibold tracking-wider uppercase">
              {activeStage.step} // EXECUTION PROFILE
            </span>
            <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F0]">
              {activeStage.name}
            </h4>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-[#050505] border border-white/[0.06] font-mono text-xs text-[#A5A7AC] shrink-0">
            CORE DOMAIN: <span className="text-[#F5F5F0] font-semibold">{activeStage.focus}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[10px] uppercase text-[#6B6E75] block tracking-wider">
              STAGE DIRECTIVE & METHODOLOGY
            </span>
            <p className="font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.75]">
              {activeStage.description}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050505] border border-white/[0.06] space-y-4">
            <span className="font-mono text-[10px] uppercase text-[#5B8CFF] font-semibold block tracking-wider">
              PRIMARY ARTIFACTS & DELIVERABLES
            </span>

            <div className="space-y-2.5 font-mono text-xs">
              {activeStage.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2.5 text-[#F5F5F0]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
