import React, { useState } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { ProjectCardItem } from './ProjectCardItem';
import { CaseStudyModal } from './CaseStudyModal';
import { ProjectNavigation } from './ProjectNavigation';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Button } from '../design-system/Button';
import { Divider } from '../design-system/Divider';
import { ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { useEnvironment } from '../../context/EnvironmentContext';

export const ProjectsSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);

  const scrollToProject = (id: string) => {
    setActiveProjectId(id);
    const el = document.getElementById(`project-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:garvshaw89@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Digital%20Architecture';
  };

  return (
    <section
      id="work"
      aria-label="Selected Systems and Products Exhibition"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-28 select-none"
    >
      {/* Sticky Side Project Navigation (xl viewports) */}
      <ProjectNavigation
        activeProjectId={activeProjectId}
        onSelectProject={scrollToProject}
      />

      {/* 01: SECTION DRAMATIC INTRODUCTION */}
      <div className="space-y-8 border-b border-white/[0.08] pb-12">
        <div className="flex items-center justify-between">
          <SectionLabel index={2} label="SELECTED WORK" category="PRODUCTION PORTFOLIO" />
          <span className="font-mono text-xs text-[#6B6E75]">04 DIGITAL SYSTEMS</span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F0] leading-[0.94] text-balance">
            BUILT
            <br />
            TO EXIST
            <br />
            <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
              IN THE REAL WORLD.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#A5A7AC] max-w-xl leading-[1.65]">
            A selection of digital systems, experiments and products built across software, AI,
            cloud and interactive experiences. Engineered with strict type safety, zero placeholder
            data, and sensory restraint.
          </p>
        </div>
      </div>

      {/* 02: THE EXHIBITION SEQUENCE */}
      <div className="space-y-28">
        {PROJECTS.map((project, idx) => (
          <React.Fragment key={project.id}>
            <ProjectCardItem
              project={project}
              onOpenCaseStudy={(p) => setSelectedCaseStudy(p)}
            />
            {idx < PROJECTS.length - 1 && (
              <Divider
                variant="subtle"
                label={`TRANSITION // SYSTEM 0${project.number} → 0${PROJECTS[idx + 1].number}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 03: PROJECT EXHIBITION EXIT & CTA (Section 51 & 62) */}
      <div className="pt-20 border-t border-white/[0.08] space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#5B8CFF] tracking-widest uppercase block">
            // BEYOND PORTFOLIO CARDS
          </span>
          <h3 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F5F0] leading-snug">
            MORE THAN PROJECTS.
            <br />
            <span className="text-[#A5A7AC]">
              SYSTEMS BUILT TO MOVE IDEAS FORWARD.
            </span>
          </h3>
        </div>

        <div className="p-8 sm:p-12 rounded-[24px] bg-[#08090B] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <h4 className="font-display font-bold text-2xl text-[#F5F5F0]">
              Have an idea worth building?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#A5A7AC] leading-relaxed">
              Whether architecting a zero-downtime cloud platform, engineering autonomous AI
              pipelines, or crafting an editorial digital interface—let’s make it exceptional.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            iconType="arrow-right"
            onClick={handleContactClick}
            className="shrink-0"
          >
            LET'S BUILD SOMETHING SIGNIFICANT
          </Button>
        </div>
      </div>

      {/* 04: FULL-SCREEN INTERACTIVE CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(p) => setSelectedCaseStudy(p)}
        />
      )}
    </section>
  );
};
