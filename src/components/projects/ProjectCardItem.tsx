import React from 'react';
import { Project } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { Button } from '../design-system/Button';
import { Heading } from '../design-system/Heading';
import { useEnvironment } from '../../context/EnvironmentContext';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardItemProps {
  project: Project;
  onOpenCaseStudy: (p: Project) => void;
}

export const ProjectCardItem: React.FC<ProjectCardItemProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const { setCursorMode } = useEnvironment();

  // Layout 1: Full-Width Cinematic Hero Presentation (Project 01 & Project 04)
  if (project.layoutVariant === 'full-width') {
    return (
      <article
        id={`project-${project.id}`}
        aria-label={`${project.title} Project Showcase`}
        className="space-y-8 select-none"
      >
        {/* Top Annotation Tag */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-[#6B6E75]">
          <div className="flex items-center gap-2">
            <span className="text-[#5B8CFF] font-semibold">0{project.number}</span>
            <span className="text-white/20">/</span>
            <span className="text-[#A5A7AC] uppercase tracking-wider">{project.category}</span>
          </div>
          <span>ARCHITECTURAL SPECIFICATION · {project.year}</span>
        </div>

        {/* Cinematic Large Visual */}
        <ProjectVisual
          project={project}
          onClick={() => onOpenCaseStudy(project)}
          className="min-h-[340px] sm:min-h-[440px]"
        />

        {/* Project Editorial Headline & Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#5B8CFF] uppercase tracking-widest block">
                {project.tagline}
              </span>
              <h3 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F5F0] leading-[0.95]">
                {project.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#A5A7AC] max-w-2xl leading-[1.65]">
              {project.description}
            </p>

            {/* Zero-Pill Tech Tag Strip */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs pt-2">
              <span className="text-[#6B6E75] uppercase text-[10px]">STACK:</span>
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="text-[#F5F5F0]">{tech}</span>
                  {i < project.technologies.length - 1 && (
                    <span className="text-white/20">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Actions & Metadata (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 p-6 rounded-[16px] bg-[#08090B] border border-white/[0.06]">
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                <span className="text-[#6B6E75]">ROLE:</span>
                <span className="text-[#F5F5F0] text-right font-medium">{project.role}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                <span className="text-[#6B6E75]">STATUS:</span>
                <span className="text-emerald-400">PRODUCTION READY</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="primary"
                size="md"
                iconType="arrow-right"
                onClick={() => onOpenCaseStudy(project)}
                className="w-full"
              >
                VIEW CASE STUDY
              </Button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorMode('visit')}
                    onMouseLeave={() => setCursorMode('default')}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#101216] border border-white/10 hover:border-white/20 text-[#A5A7AC] hover:text-[#F5F5F0] text-center font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorMode('visit')}
                    onMouseLeave={() => setCursorMode('default')}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#101216] border border-white/10 hover:border-white/20 text-[#5B8CFF] hover:text-white text-center font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LIVE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Layout 2: Image Left / Text Right (Project 02 - ChessVerse)
  if (project.layoutVariant === 'image-left') {
    return (
      <article
        id={`project-${project.id}`}
        aria-label={`${project.title} Project Showcase`}
        className="space-y-6 select-none"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-[#6B6E75]">
          <div className="flex items-center gap-2">
            <span className="text-[#5B8CFF] font-semibold">0{project.number}</span>
            <span className="text-white/20">/</span>
            <span className="text-[#A5A7AC] uppercase tracking-wider">{project.category}</span>
          </div>
          <span>SPATIAL COMPUTATION · {project.year}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual (Cols 1-7) */}
          <div className="lg:col-span-7">
            <ProjectVisual project={project} onClick={() => onOpenCaseStudy(project)} />
          </div>

          {/* Details (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#795CFF] uppercase tracking-widest block">
                {project.tagline}
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F5F0] leading-[0.98]">
                {project.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.65]">
              {project.description}
            </p>

            <div className="space-y-2 font-mono text-xs">
              <div className="text-[10px] text-[#6B6E75] uppercase">ENGINEERING HIGHLIGHTS:</div>
              <div className="space-y-1 text-[#A5A7AC]">
                {project.deliverables.slice(0, 3).map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="text-[#795CFF]">›</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                iconType="arrow-right"
                onClick={() => onOpenCaseStudy(project)}
              >
                VIEW CASE STUDY
              </Button>
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="md"
                  iconType="arrow-up-right"
                  onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                >
                  SOURCE
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Layout 3: Text Left / Image Right (Project 03 - Virtual Food Photographer)
  return (
    <article
      id={`project-${project.id}`}
      aria-label={`${project.title} Project Showcase`}
      className="space-y-6 select-none"
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-[#6B6E75]">
        <div className="flex items-center gap-2">
          <span className="text-[#5B8CFF] font-semibold">0{project.number}</span>
          <span className="text-white/20">/</span>
          <span className="text-[#A5A7AC] uppercase tracking-wider">{project.category}</span>
        </div>
        <span>COMPUTATIONAL VISION · {project.year}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Details (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest block">
              {project.tagline}
            </span>
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F5F0] leading-[0.98]">
              {project.title}
            </h3>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.65]">
            {project.description}
          </p>

          <div className="space-y-2 font-mono text-xs">
            <div className="text-[10px] text-[#6B6E75] uppercase">GENERATIVE PIPELINE:</div>
            <div className="space-y-1 text-[#A5A7AC]">
              {project.deliverables.slice(0, 3).map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="md"
              iconType="arrow-right"
              onClick={() => onOpenCaseStudy(project)}
            >
              VIEW CASE STUDY
            </Button>
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="md"
                iconType="arrow-up-right"
                onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
              >
                SOURCE
              </Button>
            )}
          </div>
        </div>

        {/* Visual (Cols 6-12) */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <ProjectVisual project={project} onClick={() => onOpenCaseStudy(project)} />
        </div>
      </div>
    </article>
  );
};
