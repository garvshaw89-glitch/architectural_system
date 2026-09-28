import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { SYSTEM_TIERS } from '../../data/engineering';
import { useEnvironment } from '../../context/EnvironmentContext';
import { Layers, Play, CheckCircle2, ArrowDown, Activity, Sparkles } from 'lucide-react';

export const SystemStackTier: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [selectedTierId, setSelectedTierId] = useState<string>(SYSTEM_TIERS[0].id);
  const [isTracing, setIsTracing] = useState<boolean>(false);
  const [traceStep, setTraceStep] = useState<number>(-1);
  const [traceLatency, setTraceLatency] = useState<number>(0);

  const activeTier = SYSTEM_TIERS.find((t) => t.id === selectedTierId) || SYSTEM_TIERS[0];

  const handleSimulateTrace = () => {
    if (isTracing) return;
    setIsTracing(true);
    setTraceStep(0);
    setTraceLatency(12);

    const stepInterval = setInterval(() => {
      setTraceStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsTracing(false);
            setTraceStep(-1);
          }, 1200);
          return 3;
        }
        setTraceLatency((lat) => lat + Math.floor(Math.random() * 25) + 15);
        return prev + 1;
      });
    }, 450);
  };

  return (
    <div className="space-y-12 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.5" label="SYSTEM TOPOLOGY" category="4-TIER ARCHITECTURE" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            FULL-STACK ARCHITECTURAL TIERS
          </h3>
        </div>

        <button
          onClick={handleSimulateTrace}
          disabled={isTracing}
          onMouseEnter={() => setCursorMode('view')}
          onMouseLeave={() => setCursorMode('default')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
            isTracing
              ? 'bg-[#5B8CFF]/20 text-[#5B8CFF] border border-[#5B8CFF]/40 animate-pulse'
              : 'bg-[#08090B] border border-white/10 text-[#F5F5F0] hover:border-[#5B8CFF]/60 hover:text-white'
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{isTracing ? `TRACING REQUEST (${traceLatency}ms)` : 'SIMULATE END-TO-END TRACE'}</span>
        </button>
      </div>

      {/* Tiers Vertical Hierarchy / Pipeline */}
      <div className="space-y-4">
        {SYSTEM_TIERS.map((tier, idx) => {
          const isSelected = selectedTierId === tier.id;
          const isTraceActive = traceStep === idx;
          const isTracePassed = traceStep > idx;

          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className={`p-6 sm:p-7 rounded-[22px] border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                isTraceActive
                  ? 'bg-[#15171B] border-[#5B8CFF] shadow-[0_0_30px_rgba(91,140,255,0.2)]'
                  : isSelected
                  ? 'bg-[#0E1014] border-white/[0.18]'
                  : 'bg-[#08090B] border-white/[0.06] hover:border-white/[0.12] hover:bg-[#0C0E12]'
              }`}
            >
              {/* Active Trace Ping Animation */}
              {isTraceActive && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B8CFF]/20 rounded-full blur-xl animate-ping pointer-events-none" />
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span
                      className={`font-semibold ${
                        isTraceActive
                          ? 'text-[#5B8CFF]'
                          : isSelected
                          ? 'text-[#F5F5F0]'
                          : 'text-[#6B6E75]'
                      }`}
                    >
                      {tier.tierName}
                    </span>

                    {isTraceActive && (
                      <span className="px-2 py-0.5 rounded bg-[#5B8CFF]/20 text-[#5B8CFF] text-[10px] animate-pulse">
                        ACTIVE TRACE NODE
                      </span>
                    )}

                    {isTracePassed && (
                      <span className="text-[#34D399] flex items-center gap-1 text-[10px]">
                        <CheckCircle2 className="w-3 h-3" /> VERIFIED
                      </span>
                    )}
                  </div>

                  <div className="font-display font-bold text-xl text-[#F5F5F0]">
                    {tier.role}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {tier.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#050505] border border-white/[0.06] font-mono text-[11px] text-[#A5A7AC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities list shown when selected or active */}
              {isSelected && (
                <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs animate-in fade-in duration-200">
                  {tier.responsibilities.map((r, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-[#A5A7AC]">
                      <span className="text-[#5B8CFF] mt-0.5">›</span>
                      <span className="font-sans text-xs leading-relaxed">{r}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
