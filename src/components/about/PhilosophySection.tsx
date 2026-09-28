import React from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Text } from '../design-system/Text';

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Build with clarity.',
      narrative:
        'Complexity is easy; structural clarity is rare. Every line of code, database query, and system architecture must serve a precise operational purpose without layers of speculative bloat.',
    },
    {
      num: '02',
      title: 'Design with purpose.',
      narrative:
        'Aesthetics are never cosmetic decoration—they are the user’s cognitive interface with logic. 80% calm restraint ensures that when spectacle occurs, it delivers genuine meaning and delight.',
    },
    {
      num: '03',
      title: 'Create meaningful experiences.',
      narrative:
        'Technology achieves its highest form when it empowers humans without friction. By marrying real-time machine intelligence with ergonomic design, software transitions from a tool into an intuition.',
    },
  ];

  return (
    <div className="space-y-16 select-none">
      {/* Section Label */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <SectionLabel index={5} label="ENGINEERING PHILOSOPHY" category="GOVERNING PRINCIPLES" />
        <span className="font-mono text-xs text-[#6B6E75]">HUMAN × SYSTEM ETHOS</span>
      </div>

      {/* Dominant Editorial Manifesto Headline */}
      <div className="max-w-4xl space-y-4">
        <span className="font-mono text-xs text-[#5B8CFF] uppercase tracking-widest block">
          // CORE CONVICTION
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F0] leading-[0.98] text-balance">
          I BELIEVE
          <br />
          TECHNOLOGY SHOULD
          <br />
          <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
            FEEL HUMAN.
          </span>
        </h2>
      </div>

      {/* The 3 Core Architectural Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {principles.map((p) => (
          <div
            key={p.num}
            className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-300 space-y-4 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-semibold text-[#5B8CFF]">
                  {p.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#5B8CFF] transition-colors" />
              </div>

              <h3 className="font-display font-bold text-2xl text-[#F5F5F0]">
                {p.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#A5A7AC] leading-relaxed">
                {p.narrative}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.04] font-mono text-[10px] text-[#6B6E75]">
              ETHOS // PRINCIPLE 0{p.num}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
