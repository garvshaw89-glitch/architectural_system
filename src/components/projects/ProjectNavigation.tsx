import React from 'react';
import { Project, PROJECTS } from '../../data/projects';

interface ProjectNavigationProps {
  activeProjectId: string;
  onSelectProject: (id: string) => void;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  activeProjectId,
  onSelectProject,
}) => {
  return (
    <aside
      aria-label="Project Exhibition Navigation"
      className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 font-mono text-xs select-none"
    >
      <span className="text-[9px] text-[#6B6E75] uppercase tracking-widest rotate-180 [writing-mode:vertical-lr]">
        EXHIBITION INDEX
      </span>

      <div className="w-[1px] h-12 bg-white/10" />

      <div className="flex flex-col gap-3">
        {PROJECTS.map((p) => {
          const isActive = activeProjectId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectProject(p.id)}
              className={`group flex items-center gap-3 transition-colors cursor-pointer py-1 ${
                isActive ? 'text-[#F5F5F0]' : 'text-[#6B6E75] hover:text-[#A5A7AC]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                isActive ? 'bg-[#5B8CFF] scale-125 shadow-[0_0_8px_#5B8CFF]' : 'bg-white/20 group-hover:bg-white/50'
              }`} />
              <span className={`text-[11px] tracking-wider ${isActive ? 'font-bold text-[#F5F5F0]' : ''}`}>
                0{p.number}
              </span>
            </button>
          );
        })}
      </div>

      <div className="w-[1px] h-12 bg-white/10" />

      <span className="text-[9px] text-[#5B8CFF] font-semibold">
        0{PROJECTS.findIndex((p) => p.id === activeProjectId) + 1}
      </span>
    </aside>
  );
};
