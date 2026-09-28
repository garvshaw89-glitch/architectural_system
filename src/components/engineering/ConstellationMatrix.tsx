import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { TECHNOLOGIES, TechItem } from '../../data/technologies';
import { useEnvironment } from '../../context/EnvironmentContext';
import {
  Cpu,
  Layers,
  Code,
  Terminal,
  Cloud,
  Database,
  Wrench,
  Search,
  ExternalLink,
  ArrowRight,
  Sparkles,
  X,
  FolderGit2,
} from 'lucide-react';

export const ConstellationMatrix: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const categories = [
    { id: 'all', label: 'ALL LAYERS', icon: Layers },
    { id: 'ai', label: 'AI & REASONING', icon: Cpu },
    { id: 'frontend', label: 'INTERFACE & SPATIAL', icon: Code },
    { id: 'backend', label: 'BACKEND & PROXIES', icon: Terminal },
    { id: 'cloud', label: 'CLOUD & CONTAINERS', icon: Cloud },
    { id: 'data', label: 'DATA STORES', icon: Database },
    { id: 'devtools', label: 'TOOLING & DEVOPS', icon: Wrench },
  ];

  const filteredTechnologies = TECHNOLOGIES.filter((tech) => {
    const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.projects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 select-none">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.2" label="TECHNOLOGY CONSTELLATION" category="SYSTEM TOPOLOGY" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            ARCHITECTURE & STACK CONSTELLATION
          </h3>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          {TECHNOLOGIES.length} VERIFIED STACK NODES · NO PLACEHOLDER PERCENTAGES
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills (Architectural tabs, zero-pill discipline) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-mono text-xs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                onMouseEnter={() => setCursorMode('view')}
                onMouseLeave={() => setCursorMode('default')}
                className={`px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#15171B] border-[#5B8CFF]/50 text-[#F5F5F0] font-semibold shadow-[0_0_12px_rgba(91,140,255,0.15)]'
                    : 'bg-[#08090B] border-white/[0.06] text-[#A5A7AC] hover:text-[#F5F5F0] hover:border-white/[0.12]'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? 'text-[#5B8CFF]' : 'text-[#6B6E75]'
                  }`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6E75]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack nodes..."
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-[#08090B] border border-white/[0.08] text-xs font-mono text-[#F5F5F0] placeholder-[#6B6E75] focus:outline-none focus:border-[#5B8CFF]/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B6E75] hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTechnologies.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedTech(item)}
            onMouseEnter={() => setCursorMode('view')}
            onMouseLeave={() => setCursorMode('default')}
            className="p-5 rounded-2xl bg-[#08090B] border border-white/[0.06] hover:border-[#5B8CFF]/40 hover:bg-[#0C0E12] transition-all duration-300 group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5B8CFF] px-2 py-0.5 rounded bg-[#101216] border border-white/[0.04]">
                  {item.architectureLayer}
                </span>
                <span className="font-mono text-[10px] text-[#6B6E75] group-hover:text-[#5B8CFF] transition-colors">
                  EXPLORE ›
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-lg text-[#F5F5F0] group-hover:text-white transition-colors">
                  {item.name}
                </h4>
                <p className="font-sans text-xs text-[#A5A7AC] mt-1 leading-relaxed">
                  {item.role}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[11px] text-[#6B6E75]">
              <span className="flex items-center gap-1.5 text-[10px]">
                <FolderGit2 className="w-3 h-3 text-[#A5A7AC]" />
                {item.projects.length} {item.projects.length === 1 ? 'Project' : 'Projects'}
              </span>
              <span className="text-[10px] text-[#A5A7AC] truncate max-w-[150px]">
                {item.projects.join(', ')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Stack Node Inspection Modal / Drawer */}
      {selectedTech && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-[#08090B] border border-white/[0.12] rounded-[24px] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#5B8CFF]">
                <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
                <span>STACK NODE // {selectedTech.name.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="p-1.5 rounded-lg bg-[#101216] border border-white/10 text-[#A5A7AC] hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#6B6E75] block tracking-wider">
                  LAYER TOPOLOGY
                </span>
                <span className="font-mono text-xs text-[#5B8CFF] font-semibold">
                  {selectedTech.architectureLayer}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F5F5F0] mt-1">
                  {selectedTech.name}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.06] space-y-1.5 font-mono text-xs">
                <span className="text-[10px] text-[#6B6E75] uppercase block">
                  ARCHITECTURAL ROLE
                </span>
                <p className="text-xs text-[#F5F5F0] font-sans leading-relaxed">
                  {selectedTech.role}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#6B6E75] uppercase block tracking-wider">
                  CONCRETE IMPLEMENTATION
                </span>
                <p className="font-sans text-xs text-[#A5A7AC] leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className="font-mono text-[10px] text-[#6B6E75] uppercase block tracking-wider">
                  VERIFIED DEPLOYMENTS IN GARV'S PROJECTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.projects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-1 rounded-md bg-[#101216] border border-white/[0.08] font-mono text-[11px] text-[#F5F5F0]"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setSelectedTech(null)}
                className="px-4 py-2 rounded-xl bg-[#15171B] border border-white/10 text-xs font-mono text-[#F5F5F0] hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
