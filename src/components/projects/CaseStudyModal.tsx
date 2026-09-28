import React, { useEffect } from 'react';
import { Project, PROJECTS } from '../../data/projects';
import { ProjectPreviewSimulator } from './ProjectPreviewSimulator';
import { Button } from '../design-system/Button';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Divider } from '../design-system/Divider';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity,
  ArrowUpRight 
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  // Find previous and next project indices
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Keyboard navigation: ESC closes, ArrowLeft goes to prev, ArrowRight goes to next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectProject(nextProject);
      } else if (e.key === 'ArrowLeft') {
        onSelectProject(prevProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onSelectProject, nextProject, prevProject]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl overflow-y-auto selection:bg-[#5B8CFF]/30 selection:text-white animate-in fade-in duration-300"
    >
      {/* Sticky Top Header Bar */}
      <div className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Project Index */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#5B8CFF] font-semibold">
              0{project.number} / 0{PROJECTS.length}
            </span>
            <span className="text-white/20">·</span>
            <span className="font-mono text-xs text-[#A5A7AC] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Center Navigation Controls */}
          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-[#6B6E75]">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="hover:text-[#F5F5F0] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREV [←]</span>
            </button>
            <span>·</span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="hover:text-[#F5F5F0] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>NEXT [→]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Close Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-[#101216] border border-white/10 hover:border-white/25 text-[#F5F5F0] font-mono text-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>ESC / CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Case Study Body */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-20">
        {/* 01: Hero Intro of Case Study */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#6B6E75] uppercase">
            <span className="text-[#5B8CFF]">SYS // 00{project.number}</span>
            <span>·</span>
            <span>PUBLISHED {project.year}</span>
            <span>·</span>
            <span className="text-emerald-400">PRODUCTION ARCHITECTURE</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#F5F5F0] leading-[0.92]">
            {project.title}
          </h1>

          <p className="font-sans text-xl sm:text-2xl text-[#A5A7AC] font-light max-w-2xl leading-snug">
            {project.tagline}
          </p>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] font-mono text-xs">
            <div>
              <span className="text-[10px] text-[#6B6E75] block uppercase">ROLE</span>
              <span className="text-[#F5F5F0] font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B6E75] block uppercase">YEAR</span>
              <span className="text-[#F5F5F0] font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B6E75] block uppercase">CATEGORY</span>
              <span className="text-[#5B8CFF] font-medium">{project.category.split('/')[0]}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B6E75] block uppercase">LINKS</span>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F5F0] hover:text-[#5B8CFF] transition-colors flex items-center gap-1"
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
                    className="text-[#5B8CFF] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LIVE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 02: Interactive Real-Time Simulator */}
        <div className="space-y-4">
          <SectionLabel index={1} label="INTERACTIVE SYSTEM DEMONSTRATION" category="TELEMETRY SIMULATOR" />
          <ProjectPreviewSimulator project={project} />
        </div>

        <Divider variant="subtle" />

        {/* 03: Overview & Core Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 space-y-1">
            <SectionLabel index={2} label="SYSTEM OVERVIEW" />
            <h3 className="font-display font-bold text-2xl text-[#F5F5F0]">What Was Built</h3>
          </div>
          <div className="md:col-span-8 space-y-4 font-sans text-base text-[#A5A7AC] leading-[1.65]">
            <p>{project.longDescription}</p>
            <p className="text-sm font-mono text-[#6B6E75] pt-2">
              DELIVERABLES: {project.deliverables.join(' · ')}
            </p>
          </div>
        </div>

        <Divider variant="subtle" />

        {/* 04: The Problem & The Engineering Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.06] space-y-3">
            <span className="font-mono text-xs text-rose-400 uppercase tracking-wider">
              03 // THE PROBLEM
            </span>
            <h4 className="font-display font-bold text-xl text-[#F5F5F0]">
              Operational Friction & Constraints
            </h4>
            <p className="font-sans text-sm text-[#A5A7AC] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.06] space-y-3">
            <span className="font-mono text-xs text-[#5B8CFF] uppercase tracking-wider">
              04 // THE APPROACH
            </span>
            <h4 className="font-display font-bold text-xl text-[#F5F5F0]">
              Architectural Resolution
            </h4>
            <p className="font-sans text-sm text-[#A5A7AC] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        <Divider variant="subtle" />

        {/* 05: Data Flow & Architecture Pipeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={5} label="ENGINEERING ARCHITECTURE" category="SYSTEM TOPOLOGY" />
            <span className="font-mono text-xs text-[#6B6E75]">VERIFIED DATA FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.architectureFlow.map((flow) => (
              <div
                key={flow.step}
                className="p-5 rounded-[12px] bg-[#08090B] border border-white/[0.06] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#5B8CFF] font-semibold">
                    STEP // {flow.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <h5 className="font-display font-bold text-base text-[#F5F5F0]">
                  {flow.label}
                </h5>
                <p className="font-sans text-xs text-[#A5A7AC] leading-relaxed">
                  {flow.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider variant="subtle" />

        {/* 06: Design & Engineering Rigor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Design Thinking */}
          <div className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#795CFF] uppercase tracking-wider">
                06 // DESIGN HIGHLIGHTS
              </span>
              <Layers className="w-4 h-4 text-[#6B6E75]" />
            </div>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#A5A7AC]">
              {project.designHighlights.map((dh, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#795CFF] font-mono">›</span>
                  <span>{dh}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Decisions */}
          <div className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#5B8CFF] uppercase tracking-wider">
                07 // TECHNICAL DECISIONS
              </span>
              <ShieldCheck className="w-4 h-4 text-[#6B6E75]" />
            </div>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#A5A7AC]">
              {project.engineeringDecisions.map((ed, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#5B8CFF] font-mono">›</span>
                  <span>{ed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider variant="subtle" />

        {/* 07: Technology Stack Strip */}
        <div className="space-y-4">
          <SectionLabel index={8} label="TECHNOLOGY MATRIX" category="PRODUCTION LIBRARIES" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="p-3 rounded-lg bg-[#08090B] border border-white/[0.06] text-center font-mono text-xs text-[#F5F5F0] hover:border-[#5B8CFF]/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 08: Next Project Transition Footer (Continuous Exhibition Flow) */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-widest block">
              CONTINUE EXHIBITION JOURNEY
            </span>
            <div className="font-display font-bold text-2xl text-[#F5F5F0]">
              NEXT: {nextProject.title}
            </div>
            <span className="font-mono text-xs text-[#A5A7AC]">
              {nextProject.tagline}
            </span>
          </div>

          <Button
            variant="primary"
            iconType="arrow-right"
            onClick={() => onSelectProject(nextProject)}
          >
            ENTER NEXT SYSTEM
          </Button>
        </div>
      </div>
    </div>
  );
};
