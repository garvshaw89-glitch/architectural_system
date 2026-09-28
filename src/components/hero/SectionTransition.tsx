import React from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Text } from '../design-system/Text';
import { ProjectMeta } from '../design-system/ProjectMeta';
import { ImageReveal } from '../design-system/ImageReveal';
import { Button } from '../design-system/Button';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { useEnvironment } from '../../context/EnvironmentContext';

export const SectionTransition: React.FC = () => {
  const { setCursorMode } = useEnvironment();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-24">
      {/* SECTION 01: ABOUT / ARCHITECTURAL PHILOSOPHY */}
      <section id="about" className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <SectionLabel index={1} label="ABOUT THE ARCHITECT" category="SYSTEM PHILOSOPHY" />
          <span className="font-mono text-xs text-[#6B6E75]">EST. 2026 // INDIA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <Heading level="display-lg">
              ENGINEERING RESILIENCE INTO DIGITAL REALITY.
            </Heading>

            <Text variant="body-large" measure>
              Most digital products today suffer from fragmented execution: brilliant design trapped
              inside fragile code, or scalable backends hidden behind generic dashboards.
            </Text>

            <Text variant="body" measure>
              As a Digital Architect, I bridge this divide. Combining deep cloud engineering, modern
              generative AI systems, and Swiss-precision aesthetic restraint, I build software that
              is fast, reliable, and visually commanding.
            </Text>

            <div className="pt-4 flex items-center gap-6">
              <div className="space-y-1">
                <div className="font-mono text-[10px] text-[#6B6E75] uppercase">ARCHETYPE</div>
                <div className="font-mono text-sm font-semibold text-[#F5F5F0]">BUILDER × ARCHITECT</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="space-y-1">
                <div className="font-mono text-[10px] text-[#6B6E75] uppercase">PARADIGM</div>
                <div className="font-mono text-sm font-semibold text-[#5B8CFF]">INTELLIGENCE IN MOTION</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Cpu,
                num: '01',
                title: 'AI Native Systems',
                desc: 'Integrating frontier LLMs and autonomous agents into production business processes with real-time streaming and function calling.',
              },
              {
                icon: Layers,
                num: '02',
                title: 'Cloud Infrastructure',
                desc: 'Distributed microservices, serverless containers, zero-downtime deployments, and high-throughput databases.',
              },
              {
                icon: Sparkles,
                num: '03',
                title: 'Sensory Design',
                desc: 'Ultra-refined typography, 80/20 calm restraint, custom physics-informed cursors, and cinematic viewport presence.',
              },
              {
                icon: ShieldCheck,
                num: '04',
                title: 'Zero Slop Rigor',
                desc: 'Clean type safety, zero placeholder telemetry, strict accessible navigation, and optimized GPU rendering.',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 rounded-[12px] bg-[#08090B] border border-white/[0.06] hover:border-white/[0.18] transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#5B8CFF]">SYS // {pillar.num}</span>
                    <Icon className="w-4 h-4 text-[#6B6E75] group-hover:text-[#5B8CFF] transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#F5F5F0]">{pillar.title}</h4>
                  <p className="font-sans text-xs text-[#A5A7AC] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 02: FEATURED WORK OVERVIEW */}
      <section id="work" className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <SectionLabel index={2} label="SELECTED ARCHITECTURE" category="PRODUCTION PORTFOLIO" />
          <span className="font-mono text-xs text-[#6B6E75]">2026 RELEASES</span>
        </div>

        <div className="space-y-12">
          {/* Project 01 Feature */}
          <div
            onMouseEnter={() => setCursorMode('open')}
            onMouseLeave={() => setCursorMode('default')}
            className="p-8 sm:p-12 rounded-[20px] bg-[#08090B] border border-white/[0.08] hover:border-white/[0.2] transition-all space-y-6 group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <ProjectMeta
                  index={1}
                  year={2026}
                  role="SYSTEM ARCHITECT"
                  deliverable="FULL STACK AI HEALTHCARE PLATFORM"
                  technologies={['DISTRIBUTED AI', 'CLOUD CLUSTERS', 'REACT 19']}
                />
                <Heading level="heading" className="mt-3">
                  AROGYASEVA HEALTH ENGINE
                </Heading>
              </div>

              <Button variant="secondary" iconType="arrow-up-right">
                EXPLORE CASE STUDY
              </Button>
            </div>

            <ImageReveal
              alt="ArogyaSeva Health Engine"
              treatment="cinematic"
              caption="Clinical triage diagnostics and multi-tenant telemedicine infrastructure"
              metadata="LATENCY: 42MS // AVAILABILITY: 99.99%"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
