import React from 'react';
import { Project } from '../../data/projects';
import { useEnvironment } from '../../context/EnvironmentContext';
import { useScrollSystem } from '../../design/ScrollContext';
import { ArrowUpRight, Activity, Cpu, Shield, Globe, Terminal, Eye, Layers } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  onClick?: () => void;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  project,
  onClick,
  className = '',
}) => {
  const { normalizedX, normalizedY, setCursorMode, isTouchDevice } = useEnvironment();
  const { prefersReducedMotion } = useScrollSystem();

  // Subtle 3D perspective shift on hover
  const tiltX = prefersReducedMotion || isTouchDevice ? 0 : normalizedY * -4;
  const tiltY = prefersReducedMotion || isTouchDevice ? 0 : normalizedX * 5;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setCursorMode('open')}
      onMouseLeave={() => setCursorMode('default')}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
      }}
      className={`relative w-full rounded-[20px] bg-[#08090B] border border-white/[0.08] hover:border-white/[0.22] overflow-hidden shadow-2xl cursor-pointer group select-none ${className}`}
    >
      {/* 01: Ambient Atmospheric Glow Behind Interface */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-700"
        style={{
          background: project.ambientGlow,
          opacity: 0.6,
        }}
      />

      {/* 02: Realistic Architectural Browser Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#5B8CFF] transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="font-mono text-[10px] text-[#6B6E75] ml-2 tracking-wider">
            SYSTEM // {project.number} — {project.title.toLowerCase()}.sys
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-[#A5A7AC] px-2 py-0.5 rounded bg-[#101216] border border-white/5 uppercase">
            {project.category.split('/')[0].trim()}
          </span>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE ARCHITECTURE</span>
          </span>
        </div>
      </div>

      {/* 03: Simulated Product Scene UI */}
      <div className="p-6 sm:p-10 relative z-10 min-h-[280px] sm:min-h-[360px] flex flex-col justify-between bg-technical-grid">
        {/* Top telemetry bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A5A7AC]">
          <div className="flex items-center gap-2.5">
            <div
              className="w-3 h-3 rounded-full shadow-[0_0_8px]"
              style={{ backgroundColor: project.accentColor, color: project.accentColor }}
            />
            <span className="text-[#F5F5F0] font-semibold">{project.tagline}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#6B6E75]">
            <span>NODE ID: #0{project.number}</span>
            <span>·</span>
            <span>BUILD YEAR: {project.year}</span>
          </div>
        </div>

        {/* Central Display Visual Matrix */}
        <div className="my-6 p-6 rounded-xl bg-[#050505]/90 border border-white/[0.08] backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#5B8CFF] font-semibold">CORE ARCHITECTURE PIPELINE</span>
            <span className="text-[#6B6E75]">CLICK TO EXPAND CASE STUDY ↗</span>
          </div>

          {/* Micro Architecture Grid Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.architectureFlow.map((flow) => (
              <div
                key={flow.step}
                className="p-3 rounded-lg bg-[#0C0E12] border border-white/[0.04] space-y-1 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#5B8CFF]">{flow.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <div className="font-display font-bold text-xs text-[#F5F5F0] truncate">
                  {flow.label}
                </div>
                <div className="font-sans text-[10px] text-[#6B6E75] line-clamp-2">
                  {flow.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Spec Footnote */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-[#A5A7AC]">
            <span className="text-[#6B6E75]">STACK:</span>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={tech} className="text-[#F5F5F0]">
                {tech}
                {i < 3 && <span className="text-white/20 ml-2">·</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[#5B8CFF] group-hover:translate-x-1 transition-transform">
            <span className="font-semibold text-[11px]">INSPECT SPECIFICATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
