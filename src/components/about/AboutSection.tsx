import React from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Text } from '../design-system/Text';
import { DigitalDNA } from './DigitalDNA';
import { CapabilitiesSection } from './CapabilitiesSection';
import { Divider } from '../design-system/Divider';
import { Cpu, Cloud, Code, Layout, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Garv Shaw and Digital DNA"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-32"
    >
      {/* 01: ABOUT INTRO & EDITORIAL HEADLINE */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <SectionLabel index={1} label="ABOUT THE ARCHITECT" category="SYSTEM ORIGIN" />
          <span className="font-mono text-xs text-[#6B6E75]">GARV SHAW // 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Dominant Editorial Headline (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F0] leading-[0.94] text-balance">
              I BUILD
              <br />
              INTELLIGENT
              <br />
              DIGITAL
              <br />
              <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
                EXPERIENCES.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#A5A7AC] max-w-xl leading-[1.65]">
              I enjoy building digital products that combine software engineering, AI, cloud
              computing, and thoughtful design. My work focuses on transforming ideas into scalable,
              resilient, and meaningful experiences.
            </p>

            {/* Quick Persona Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">ROLE</span>
                <span className="text-[#F5F5F0] font-semibold">DIGITAL ARCHITECT</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">FOCUS</span>
                <span className="text-[#5B8CFF] font-semibold">AI × CLOUD × DESIGN</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">DISCIPLINE</span>
                <span className="text-[#A5A7AC]">ZERO-SLOP SYSTEMS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Paradigm Overview (Cols 8-12) */}
          <div className="lg:col-span-5 p-8 rounded-[20px] bg-[#08090B] border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="font-mono text-xs text-[#5B8CFF] font-semibold uppercase">
                THE 4 IDENTITY ANCHORS
              </span>
              <span className="font-mono text-[10px] text-[#6B6E75]">CORE MATRIX</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {[
                { title: 'ENGINEER', desc: 'Software systems, cloud topography, algorithmic rigor' },
                { title: 'CREATOR', desc: 'Aesthetics, sensory UI, visual experiments, lighting' },
                { title: 'ARCHITECT', desc: 'Scalable structure, clean boundaries, durability' },
                { title: 'BUILDER', desc: 'Relentless velocity, deploying live production solutions' },
              ].map((item, idx) => (
                <div key={item.title} className="p-3 rounded-lg bg-[#050505] border border-white/[0.04] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#F5F5F0]">0{idx + 1} // {item.title}</span>
                    <span className="text-[#5B8CFF]">›</span>
                  </div>
                  <p className="font-sans text-[11px] text-[#A5A7AC]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02: THE DIGITAL DNA VISUALIZATION (Signature Network Feature) */}
      <div className="space-y-6">
        <DigitalDNA />
      </div>

      <Divider variant="subtle" label="CAPABILITIES MATRIX" />

      {/* 03: CAPABILITIES SECTION ("What I Build") */}
      <CapabilitiesSection />
    </section>
  );
};
