import React from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { ProjectMeta } from '../design-system/ProjectMeta';
import { ImageReveal } from '../design-system/ImageReveal';
import { Button } from '../design-system/Button';
import { useEnvironment } from '../../context/EnvironmentContext';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();

  return (
    <section
      id="work"
      aria-label="Selected Architecture Projects"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-16 select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.06] pb-4 gap-4">
        <div>
          <SectionLabel index={6} label="SELECTED ARCHITECTURE" category="PRODUCTION PLATFORMS" />
          <Heading level="heading" className="mt-2">
            FEATURED WORK
          </Heading>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          ENGINEERED FOR RESILIENCE & SCALE
        </div>
      </div>

      <div className="space-y-16">
        {/* Project 01: ArogyaSeva */}
        <div
          onMouseEnter={() => setCursorMode('open')}
          onMouseLeave={() => setCursorMode('default')}
          className="p-8 sm:p-12 rounded-[24px] bg-[#08090B] border border-white/[0.08] hover:border-white/[0.2] transition-all space-y-8 group"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <ProjectMeta
                index={1}
                year={2026}
                role="LEAD SYSTEM ARCHITECT"
                deliverable="FULL-STACK CLINICAL TELEHEALTH PLATFORM"
                technologies={['DISTRIBUTED AI', 'CLOUD CLUSTERS', 'REACT 19', 'POSTGRESQL']}
              />
              <Heading level="display-lg">
                AROGYASEVA HEALTH ENGINE
              </Heading>
              <p className="font-sans text-xs sm:text-sm text-[#A5A7AC] max-w-2xl leading-relaxed">
                A mission-critical clinical intelligence platform connecting rural clinics with specialist doctors. Features sub-50ms triage algorithms, automated medical record transcription, and resilient offline-first mobile sync.
              </p>
            </div>

            <Button variant="secondary" iconType="arrow-up-right" className="self-start lg:self-center shrink-0">
              EXPLORE ARCHITECTURE
            </Button>
          </div>

          <ImageReveal
            alt="ArogyaSeva Health Engine Architecture"
            treatment="cinematic"
            caption="Distributed clinical triage infrastructure with automated diagnosis pipeline"
            metadata="LATENCY: 42MS // AVAILABILITY: 99.99%"
          />
        </div>
      </div>
    </section>
  );
};
