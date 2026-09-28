import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { useEnvironment } from '../../context/EnvironmentContext';
import { Cpu, Cloud, Code, Terminal, Palette, Sparkles, ArrowUpRight } from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  level: 'Core Mastery' | 'Advanced' | 'Production';
  notes: string;
}

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  technologies: TechItem[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'ai',
    name: 'AI & Machine Intelligence',
    icon: Cpu,
    description: 'Frontier model integrations, autonomous task agents, streaming protocols, and semantic search.',
    technologies: [
      { name: 'Python', role: 'Core AI runtime & scripting', level: 'Core Mastery', notes: 'Model orchestration & automation scripts' },
      { name: 'OpenAI / Gemini SDKs', role: 'Frontier LLM integrations', level: 'Production', notes: 'Tool calling, structured JSON, streaming' },
      { name: 'Autonomous Agents', role: 'Multi-step reasoning pipelines', level: 'Advanced', notes: 'Task planning & automated execution loops' },
      { name: 'Vector Search', role: 'Semantic indexing & retrieval', level: 'Advanced', notes: 'Embeddings & knowledge augmentation' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Zero-downtime microservices, containerization, edge deployments, and high-performance databases.',
    technologies: [
      { name: 'Docker', role: 'Containerized microservices', level: 'Production', notes: 'Isolated, reproducible production runtimes' },
      { name: 'Cloud Run / GCP', role: 'Serverless container orchestration', level: 'Core Mastery', notes: 'Scale-to-zero autoscaling infrastructure' },
      { name: 'PostgreSQL / SQL', role: 'Relational data storage', level: 'Core Mastery', notes: 'Strict schema integrity & relational indexing' },
      { name: 'Firebase', role: 'Auth, Firestore, Security Rules', level: 'Production', notes: 'Production RBAC and realtime listeners' },
    ],
  },
  {
    id: 'software',
    name: 'Frontend Architecture',
    icon: Code,
    description: 'Modern reactive client applications built with strict type safety, zero layout shifts, and physical motion.',
    technologies: [
      { name: 'React 19', role: 'Declarative component architecture', level: 'Core Mastery', notes: 'Concurrent features, actions, modular hooks' },
      { name: 'TypeScript', role: 'End-to-end type safety', level: 'Core Mastery', notes: 'Zero `any` policy, rigorous schema contracts' },
      { name: 'Next.js / Vite', role: 'Modern build pipelines', level: 'Core Mastery', notes: 'Fast bundling, sub-second HMR & routing' },
      { name: 'Tailwind CSS', role: 'Utility-first token system', level: 'Core Mastery', notes: 'Custom CSS variables & design tokens' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Data APIs',
    icon: Terminal,
    description: 'High-throughput transactional servers, secure proxy gateways, and modular API endpoints.',
    technologies: [
      { name: 'Node.js & Express', role: 'High-performance HTTP server', level: 'Core Mastery', notes: 'Server-side proxies & background workers' },
      { name: 'REST & GraphQL', role: 'API communication contracts', level: 'Production', notes: 'Predictable schemas, caching, pagination' },
      { name: 'OAuth 2.0 & Auth', role: 'Secure authentication flows', level: 'Production', notes: 'RBAC permissions & token lifecycle' },
      { name: 'Data Migrations', role: 'Database evolution', level: 'Advanced', notes: 'Zero-downtime schema upgrades' },
    ],
  },
  {
    id: 'design',
    name: 'Design Systems & Sensory UX',
    icon: Palette,
    description: 'Swiss typography, negative space as luxury, physics-based spring cursors, and mathematical grid alignment.',
    technologies: [
      { name: 'Design Tokens', role: 'Single source of visual truth', level: 'Core Mastery', notes: 'Synchronized colors, spacings, & motion' },
      { name: 'Swiss Typography', role: 'Editorial visual hierarchy', level: 'Core Mastery', notes: 'Syne Display, Plus Jakarta Sans, JetBrains Mono' },
      { name: 'Physics Motion', role: 'Natural spring interactions', level: 'Advanced', notes: 'Cubic-bezier curves, zero cartoon bounce' },
      { name: 'WCAG AAA Contrast', role: 'Accessibility & clarity', level: 'Core Mastery', notes: 'Strict contrast testing across dark voids' },
    ],
  },
];

export const TechConstellation: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [selectedCatId, setSelectedCatId] = useState<string>('ai');

  const currentCategory = TECH_CATEGORIES.find((c) => c.id === selectedCatId) || TECH_CATEGORIES[0];

  return (
    <div className="space-y-8 select-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.06] pb-4 gap-4">
        <div>
          <SectionLabel index={4} label="TECHNOLOGY ECOSYSTEM" category="CONSTELLATION ARCHITECTURE" />
          <Heading level="heading" className="mt-2">
            TECHNOLOGY CONSTELLATION
          </Heading>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          CURATED STACK · NO RANDOM 50-LOGO GRIDS
        </div>
      </div>

      {/* Category Segmented Selector */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#08090B] border border-white/[0.08] overflow-x-auto text-xs font-mono">
        {TECH_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCatId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#15171B] text-[#F5F5F0] border border-white/10 shadow-sm font-semibold'
                  : 'text-[#6B6E75] hover:text-[#A5A7AC]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#5B8CFF]' : 'text-[#6B6E75]'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Constellation Panel */}
      <div className="p-8 rounded-[20px] bg-[#08090B] border border-white/[0.08] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#5B8CFF] uppercase tracking-wider">
              CATEGORY CLUSTER // {currentCategory.id.toUpperCase()}
            </span>
            <h4 className="font-display font-bold text-2xl text-[#F5F5F0]">
              {currentCategory.name}
            </h4>
            <p className="font-sans text-xs text-[#A5A7AC] max-w-xl">
              {currentCategory.description}
            </p>
          </div>
          <div className="font-mono text-xs text-[#6B6E75] px-3 py-1.5 rounded bg-[#050505] border border-white/[0.06] self-start md:self-auto">
            {currentCategory.technologies.length} CORE VECTORS
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategory.technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-[12px] bg-[#050505] border border-white/[0.05] hover:border-white/[0.15] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-[#F5F5F0] group-hover:text-[#5B8CFF] transition-colors">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] text-[#5B8CFF] px-2 py-0.5 rounded bg-[#101216] border border-white/5">
                  {tech.level}
                </span>
              </div>
              <p className="font-mono text-xs text-[#A5A7AC]">{tech.role}</p>
              <div className="font-sans text-[11px] text-[#6B6E75] pt-2 border-t border-white/[0.04]">
                {tech.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
