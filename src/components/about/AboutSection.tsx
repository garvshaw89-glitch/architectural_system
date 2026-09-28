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
      <div className="space-y-16">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <SectionLabel index={1} label="02 / ABOUT THE ARCHITECT" category="THE PERSON BEHIND THE SYSTEM" />
          <span className="font-mono text-xs text-[#6B6E75]">GARV SHAW // SYSTEM → PERSON</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Dominant Editorial Headline (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
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

            <div className="space-y-4 text-base sm:text-lg text-[#A5A7AC] font-sans leading-[1.7]">
              <p>
                I am <span className="text-[#F5F5F0] font-semibold">Garv Shaw</span> — a software engineer, builder, and digital architect. I approach digital products not as static pages or isolated scripts, but as living, interconnected systems.
              </p>
              <p className="text-sm sm:text-base text-[#8E9096]">
                My background spans computer science, cloud infrastructure, frontier generative AI integrations, and full-stack engineering. Whether building clinical healthcare platforms like ArogyaSeva, spatial interactive simulations like ChessVerse, or high-throughput developer tooling, I focus on transforming complex problems into fast, durable, and human experiences.
              </p>
            </div>

            {/* Quick Persona Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">ROLE</span>
                <span className="text-[#F5F5F0] font-semibold">DEVELOPER & BUILDER</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">MINDSET</span>
                <span className="text-[#5B8CFF] font-semibold">SYSTEMS THINKER</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6E75] block uppercase">CREED</span>
                <span className="text-[#A5A7AC]">QUIET PRECISION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Paradigm & Personal Philosophy (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* The 4 Identity Anchors */}
            <div className="p-8 rounded-[24px] bg-[#08090B] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="font-mono text-xs text-[#5B8CFF] font-semibold uppercase">
                  THE 4 IDENTITY ANCHORS
                </span>
                <span className="font-mono text-[10px] text-[#6B6E75]">CORE ARCHITECTURE</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { title: 'DEVELOPER', desc: 'Crafting resilient, type-safe full-stack software and clean APIs.' },
                  { title: 'BUILDER', desc: 'Shipping production systems with rapid velocity and zero fluff.' },
                  { title: 'SYSTEMS THINKER', desc: 'Connecting interface, edge proxy, machine logic, and data flow.' },
                  { title: 'DESIGNER', desc: 'Sensory ergonomics, Swiss typography, and 80/20 calm restraint.' },
                ].map((item, idx) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.04] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#F5F5F0]">0{idx + 1} // {item.title}</span>
                      <span className="text-[#5B8CFF]">›</span>
                    </div>
                    <p className="font-sans text-[11px] text-[#A5A7AC] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Philosophy Card */}
            <div className="p-6 rounded-2xl bg-[#050505] border border-white/[0.06] space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#5B8CFF] block">
                PERSONAL PHILOSOPHY:
              </span>
              <blockquote className="font-serif italic text-sm text-[#F5F5F0] leading-snug">
                “Code is not merely syntax; it is organizational architecture. Systems should be quiet, deterministic, and fast—empowering human judgment rather than exhausting it.”
              </blockquote>
              <span className="font-mono text-[10px] text-[#6B6E75] block pt-1">— GARV SHAW</span>
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
