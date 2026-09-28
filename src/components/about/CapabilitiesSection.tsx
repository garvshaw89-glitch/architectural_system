import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Text } from '../design-system/Text';
import { useEnvironment } from '../../context/EnvironmentContext';
import { Cpu, Globe, Cloud, Layout, ArrowRight } from 'lucide-react';

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  icon: React.ElementType;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ai-systems',
    number: '01',
    title: 'AI Systems & Workflows',
    headline: 'Autonomous Agents & Frontier LLM Integrations',
    description:
      'Designing and deploying intelligent reasoning engines, multi-agent workflows, automated tool calling, and streaming model architectures for high-utility business platforms.',
    technologies: ['Python', 'OpenAI & Gemini SDKs', 'Agent Orchestration', 'Vector Embeddings', 'Structured Outputs'],
    deliverables: ['Autonomous Task Workers', 'Realtime AI Copilots', 'Semantic Search', 'Automated Triage Pipelines'],
    icon: Cpu,
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'Web Applications',
    headline: 'High-Resilience Full-Stack Software',
    description:
      'Engineering mission-critical web applications with strict type safety, modular component architecture, optimistic client updates, and sub-50ms interaction response times.',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    deliverables: ['SaaS Platforms', 'Client Portals', 'Realtime Dashboards', 'Interactive Tools'],
    icon: Globe,
  },
  {
    id: 'cloud-solutions',
    number: '03',
    title: 'Cloud Solutions',
    headline: 'Distributed Edge & Container Infrastructure',
    description:
      'Architecting resilient cloud topologies that scale automatically from zero. Microservice encapsulation, secure OAuth/RBAC boundaries, and multi-region database clusters.',
    technologies: ['Docker', 'Cloud Run / GCP', 'PostgreSQL / SQL', 'Firebase / Supabase', 'REST & GraphQL', 'CI/CD'],
    deliverables: ['Serverless Deployments', 'Container Clusters', 'Zero-Downtime APIs', 'Data Migrations'],
    icon: Cloud,
  },
  {
    id: 'design-systems',
    number: '04',
    title: 'Design Systems & UX',
    headline: 'Architectural Typography & Sensory Polish',
    description:
      'Crafting cohesive digital design systems with Swiss-inspired typographic discipline, custom physics-informed cursors, 80/20 calm restraint, and zero-slop UI tokens.',
    technologies: ['Design Tokens', 'Micro-Interactions', 'Motion Easing', 'WCAG AAA Contrast', 'Fluid Viewports'],
    deliverables: ['Custom Token Libraries', 'Design Constitutions', 'Micro-Interactions', 'Interactive Prototypes'],
    icon: Layout,
  },
];

export const CapabilitiesSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activeTab, setActiveTab] = useState<string>('ai-systems');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedCapability = CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];

  return (
    <div className="space-y-12 select-none">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.06] pb-4 gap-4">
        <div>
          <SectionLabel index={3} label="WHAT I BUILD" category="CORE CAPABILITIES" />
          <Heading level="heading" className="mt-2">
            ENGINEERING CAPABILITIES
          </Heading>
        </div>
        <div className="font-mono text-xs text-[#6B6E75] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
          <span>PRODUCTION SYSTEMS ONLY · ZERO PLACEHOLDER CODE</span>
        </div>
      </div>

      {/* Main Grid: 4 Capability Cards with Custom Mini Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAPABILITIES.map((cap) => {
          const isSelected = activeTab === cap.id;
          const isHovered = hoveredId === cap.id;
          const Icon = cap.icon;

          return (
            <div
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              onMouseEnter={() => {
                setHoveredId(cap.id);
                setCursorMode('open');
              }}
              onMouseLeave={() => {
                setHoveredId(null);
                setCursorMode('default');
              }}
              className={`p-8 rounded-[20px] bg-[#08090B] border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between space-y-6 group ${
                isSelected
                  ? 'border-[#5B8CFF]/60 shadow-[0_0_35px_rgba(91,140,255,0.14)] bg-[#0C0E12]'
                  : 'border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0A0C0F]'
              }`}
            >
              {/* Corner Ambient Glow for Active Card */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#5B8CFF]/10 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Card Top: Number & Category Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-[#5B8CFF]">
                    {cap.number}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="font-mono text-xs uppercase text-[#A5A7AC] tracking-wider">
                    {cap.title}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#101216] border border-white/10 flex items-center justify-center text-[#F5F5F0] group-hover:text-[#5B8CFF] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Card Mid: Headline, Description, & Algorithmic Mini Visual */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F0] leading-snug">
                  {cap.headline}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-[#A5A7AC] leading-relaxed">
                  {cap.description}
                </p>

                {/* Unique Algorithmic Mini-Visual per Capability */}
                <div className="h-24 w-full rounded-lg bg-[#050505] border border-white/[0.05] p-3 flex items-center justify-center overflow-hidden relative">
                  {/* AI Systems Mini Visual: Neural nodes and synaptic pulse */}
                  {cap.id === 'ai-systems' && (
                    <div className="w-full flex items-center justify-around relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#5B8CFF] animate-pulse" />
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-[#5B8CFF] to-[#795CFF] mx-2" />
                      <div className="w-3 h-3 rounded-full bg-[#795CFF] shadow-[0_0_8px_#795CFF]" />
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-[#795CFF] to-white/40 mx-2" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                    </div>
                  )}

                  {/* Web Applications Mini Visual: Modular UI Blocks */}
                  {cap.id === 'web-apps' && (
                    <div className="w-full grid grid-cols-3 gap-2 px-4">
                      <div className="h-10 rounded bg-[#101216] border border-white/10 flex items-center justify-center">
                        <span className="font-mono text-[9px] text-[#5B8CFF]">APP</span>
                      </div>
                      <div className="h-10 rounded bg-[#15171B] border border-white/15 flex items-center justify-center">
                        <span className="font-mono text-[9px] text-white">API</span>
                      </div>
                      <div className="h-10 rounded bg-[#101216] border border-white/10 flex items-center justify-center">
                        <span className="font-mono text-[9px] text-[#795CFF]">DB</span>
                      </div>
                    </div>
                  )}

                  {/* Cloud Solutions Mini Visual: Distributed Horizontal Bus */}
                  {cap.id === 'cloud-solutions' && (
                    <div className="w-full flex flex-col gap-1.5 px-4 font-mono text-[9px]">
                      <div className="flex items-center justify-between text-[#5B8CFF]">
                        <span>EDGE // ROUTER</span>
                        <span className="text-emerald-400">99.99%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-[#5B8CFF] to-[#795CFF]" />
                      </div>
                      <div className="flex items-center justify-between text-[#6B6E75]">
                        <span>CLUSTER REGION</span>
                        <span>AUTO-SCALE</span>
                      </div>
                    </div>
                  )}

                  {/* Design Systems Mini Visual: Typography & Ratio Lines */}
                  {cap.id === 'design-systems' && (
                    <div className="w-full flex items-center justify-between px-6 font-mono text-[10px]">
                      <div className="space-y-0.5">
                        <div className="text-[#F5F5F0] font-display font-bold text-xs">SYNE 800</div>
                        <div className="text-[#6B6E75] text-[9px]">65CH MEASURE</div>
                      </div>
                      <div className="h-8 w-px bg-white/10" />
                      <div className="space-y-0.5 text-right">
                        <div className="text-[#5B8CFF]">80/20 CALM</div>
                        <div className="text-[#6B6E75] text-[9px]">ZERO-PILL</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Bottom: Zero-Pill Technology Tags (Clean inline monospace typography) */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-wider">
                  TECHNOLOGY STACK:
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
                  {cap.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#A5A7AC] hover:text-[#5B8CFF] transition-colors">
                        {tech}
                      </span>
                      {i < cap.technologies.length - 1 && <span className="text-white/20">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
