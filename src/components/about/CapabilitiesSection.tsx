import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { useEnvironment } from '../../context/EnvironmentContext';
import { 
  Cpu, 
  Code, 
  Cloud, 
  Layout, 
  Workflow, 
  TrendingUp, 
  DollarSign, 
  Check, 
  ChevronRight,
  Sparkles,
  Terminal
} from 'lucide-react';

export interface CapabilityItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  icon: React.ElementType;
  accent: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ai-systems',
    number: '01',
    tag: 'INTELLIGENCE',
    title: 'AI Systems',
    headline: 'Autonomous Agents & Frontier Reasoning Engines',
    description:
      'Designing and deploying intelligent reasoning engines, multi-agent workflows, automated tool calling, and streaming model architectures for high-utility business platforms.',
    technologies: ['Python', 'OpenAI & Gemini SDKs', 'Agent Orchestration', 'Vector Embeddings', 'Structured Outputs'],
    deliverables: ['Autonomous Task Workers', 'Realtime AI Copilots', 'Semantic Search', 'Automated Triage Pipelines'],
    icon: Cpu,
    accent: '#5B8CFF',
  },
  {
    id: 'software',
    number: '02',
    tag: 'ENGINEERING',
    title: 'Software',
    headline: 'High-Resilience Full-Stack Software & Distributed Systems',
    description:
      'Engineering mission-critical web applications with strict type safety, modular component architecture, optimistic client updates, and sub-50ms interaction response times.',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    deliverables: ['SaaS Platforms', 'Client Portals', 'Realtime Dashboards', 'Interactive Tools'],
    icon: Code,
    accent: '#795CFF',
  },
  {
    id: 'cloud-systems',
    number: '03',
    tag: 'INFRASTRUCTURE',
    title: 'Cloud Systems',
    headline: 'Distributed Edge, Microservices & Container Infrastructure',
    description:
      'Architecting resilient cloud topologies that scale automatically from zero. Microservice encapsulation, secure OAuth/RBAC boundaries, and multi-region database clusters.',
    technologies: ['Docker', 'Cloud Run / GCP', 'PostgreSQL / SQL', 'Firebase / Supabase', 'REST & GraphQL', 'CI/CD'],
    deliverables: ['Serverless Deployments', 'Container Clusters', 'Zero-Downtime APIs', 'Data Migrations'],
    icon: Cloud,
    accent: '#38BDF8',
  },
  {
    id: 'digital-products',
    number: '04',
    tag: 'EXPERIENCE',
    title: 'Digital Products',
    headline: 'End-to-End Product Architecture & Sensory Interfaces',
    description:
      'Crafting cohesive digital design systems with Swiss-inspired typographic discipline, custom physics-informed cursors, 80/20 calm restraint, and zero-slop UI tokens.',
    technologies: ['Design Tokens', 'Micro-Interactions', 'Motion Easing', 'WCAG AAA Contrast', 'Fluid Viewports'],
    deliverables: ['Custom Token Libraries', 'Design Constitutions', 'Micro-Interactions', 'Interactive Prototypes'],
    icon: Layout,
    accent: '#E0E7FF',
  },
  {
    id: 'automation',
    number: '05',
    tag: 'EFFICIENCY',
    title: 'Automation',
    headline: 'Event-Driven Pipelines & Operational Orchestration',
    description:
      'Eliminating manual friction across business workflows through headless background workers, asynchronous webhooks, and intelligent data transform pipelines.',
    technologies: ['Node.js Scripts', 'GitHub Actions', 'Serverless Cron', 'Webhook Gateways', 'ETL Pipelines'],
    deliverables: ['Automated Ingestion', 'Self-Healing Cron Jobs', 'Sync Bridges', 'Data Reconciliation'],
    icon: Workflow,
    accent: '#10B981',
  },
  {
    id: 'business-tech',
    number: '06',
    tag: 'STRATEGY',
    title: 'Business × Technology',
    headline: 'Systemic Translation of Business Goals into Software Value',
    description:
      'Bridging high-level commercial objectives with pragmatic technical architecture. De-risking build decisions, streamlining unit economics, and building for long-term maintainability.',
    technologies: ['Systems Architecture', 'Domain Modeling', 'Technical Scoping', 'API Economics', 'Product Strategy'],
    deliverables: ['Architectural Blueprints', 'Technical Roadmaps', 'De-risked Prototypes', 'Scalability Audits'],
    icon: TrendingUp,
    accent: '#F59E0B',
  },
  {
    id: 'finance-tech',
    number: '07',
    tag: 'QUANTITATIVE',
    title: 'Finance × Technology',
    headline: 'Quantitative Logic, Ledger Integrity & Capital Efficiency',
    description:
      'Applying computational rigor to financial data structures: double-entry bookkeeping ledgers, high-precision decimal math, audit trails, and automated valuation models.',
    technologies: ['Decimal Precision Math', 'Double-Entry Ledgers', 'Financial Modeling', 'Audit Trails', 'SQL Aggregations'],
    deliverables: ['Immutable Ledgers', 'Financial Analytics Dashboards', 'Unit Economics Calculators', 'Risk Models'],
    icon: DollarSign,
    accent: '#EC4899',
  },
];

export const CapabilitiesSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activeId, setActiveId] = useState<string>('ai-systems');

  const selectedCap = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];
  const SelectedIcon = selectedCap.icon;

  return (
    <div id="capabilities" className="space-y-12 select-none">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.06] pb-4 gap-4">
        <div>
          <SectionLabel index={4} label="WHAT I BUILD" category="CORE CAPABILITIES" />
          <Heading level="heading" className="mt-2">
            ENGINEERING CAPABILITIES
          </Heading>
        </div>
        <div className="font-mono text-xs text-[#6B6E75] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
          <span>7 PRODUCTION DOMAINS · ZERO PLACEHOLDER CODE</span>
        </div>
      </div>

      {/* Main Interactive Matrix Layout: Left Selector Navigation + Right Architectural Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 7 Domain Navigation Tabs (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-2">
          <div className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-wider mb-2">
            SELECT DOMAIN VECTOR:
          </div>

          {CAPABILITIES.map((cap) => {
            const isSelected = activeId === cap.id;
            const Icon = cap.icon;

            return (
              <button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                onMouseEnter={() => setCursorMode('open')}
                onMouseLeave={() => setCursorMode('default')}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E1117] border-white/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
                    : 'bg-[#08090B]/60 border-white/[0.04] hover:border-white/10 hover:bg-[#0C0E12]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-white/10 text-white'
                        : 'bg-[#101216] text-[#A5A7AC] group-hover:text-white'
                    }`}
                    style={isSelected ? { color: cap.accent } : undefined}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#6B6E75]">{cap.number}</span>
                      <span
                        className={`font-display font-bold text-sm sm:text-base transition-colors ${
                          isSelected ? 'text-[#F5F5F0]' : 'text-[#A5A7AC] group-hover:text-[#F5F5F0]'
                        }`}
                      >
                        {cap.title}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#6B6E75] block">
                      {cap.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isSelected && (
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: cap.accent }}
                    />
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? 'text-white translate-x-0.5'
                        : 'text-[#6B6E75] group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Showcase for Selected Domain (Cols 6-12) */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-[24px] bg-[#08090B] border border-white/[0.08] relative overflow-hidden space-y-8">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 transition-all duration-700"
            style={{ backgroundColor: selectedCap.accent }}
          />

          {/* Header Metadata */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#5B8CFF] font-semibold">
                DOM // {selectedCap.number}
              </span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#A5A7AC]">
                {selectedCap.tag}
              </span>
            </div>
            <div
              className="px-2.5 py-1 rounded-full text-[10px] font-mono border"
              style={{
                borderColor: `${selectedCap.accent}40`,
                color: selectedCap.accent,
                backgroundColor: `${selectedCap.accent}10`,
              }}
            >
              ACTIVE VECTOR
            </div>
          </div>

          {/* Headline & Body */}
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F0] leading-tight">
              {selectedCap.headline}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.65]">
              {selectedCap.description}
            </p>
          </div>

          {/* Unique Algorithmic Visual System per Selected Domain */}
          <div className="h-36 w-full rounded-2xl bg-[#050505] border border-white/[0.06] p-5 flex flex-col justify-between relative overflow-hidden">
            {/* 01: AI Systems Visual */}
            {selectedCap.id === 'ai-systems' && (
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#6B6E75]">
                  <span>LLM REASONING LOOP</span>
                  <span className="text-[#5B8CFF]">TOOL-CALLING: ACTIVE</span>
                </div>
                <div className="flex items-center justify-between px-4">
                  <div className="p-2 rounded bg-[#101216] border border-white/10 font-mono text-[10px] text-white">
                    PROMPT
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-[#5B8CFF] to-[#795CFF] mx-3" />
                  <div className="p-2 rounded bg-[#101216] border border-[#5B8CFF]/50 font-mono text-[10px] text-[#5B8CFF] shadow-[0_0_12px_rgba(91,140,255,0.3)]">
                    AGENT CORE
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-[#795CFF] to-emerald-400 mx-3" />
                  <div className="p-2 rounded bg-[#101216] border border-white/10 font-mono text-[10px] text-emerald-400">
                    OUTPUT
                  </div>
                </div>
                <div className="font-mono text-[9px] text-[#6B6E75] flex items-center justify-between">
                  <span>TEMPERATURE: 0.2</span>
                  <span>STRUCTURED JSON SCHEMAS</span>
                </div>
              </div>
            )}

            {/* 02: Software Visual */}
            {selectedCap.id === 'software' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>TYPE-SAFE COMPONENT ARCHITECTURE</span>
                  <span className="text-[#795CFF]">0 ERRORS</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-2 rounded bg-[#101216] border border-white/10 text-[10px] text-center">
                    <span className="text-[#795CFF] block">REACT 19</span>
                    <span className="text-[9px] text-[#6B6E75]">STATE HOOKS</span>
                  </div>
                  <div className="p-2 rounded bg-[#101216] border border-white/10 text-[10px] text-center">
                    <span className="text-white block">TYPESCRIPT</span>
                    <span className="text-[9px] text-[#6B6E75]">STRICT TYPES</span>
                  </div>
                  <div className="p-2 rounded bg-[#101216] border border-white/10 text-[10px] text-center">
                    <span className="text-emerald-400 block">OPTIMISTIC</span>
                    <span className="text-[9px] text-[#6B6E75]">&lt;50MS UI</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>BUNDLE: MODULAR CHUNKS</span>
                  <span>ACCESSIBILITY: AAA</span>
                </div>
              </div>
            )}

            {/* 03: Cloud Systems Visual */}
            {selectedCap.id === 'cloud-systems' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>EDGE CLUSTER // GLOBAL TOPOLOGY</span>
                  <span className="text-emerald-400">99.99% HEALTH</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-[#38BDF8]">
                    <span>CONTAINER TRAFFIC LOAD</span>
                    <span>18.4 MS LATENCY</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#38BDF8] to-[#5B8CFF]" />
                  </div>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>SCALE: ZERO-TO-BURST</span>
                  <span>ISOLATED ENVIRONMENT</span>
                </div>
              </div>
            )}

            {/* 04: Digital Products Visual */}
            {selectedCap.id === 'digital-products' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>SENSORY DESIGN CONSTITUTION</span>
                  <span className="text-white">80% CALM / 20% SPECTACLE</span>
                </div>
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <span className="font-display font-bold text-sm text-[#F5F5F0] block">SYNE 800</span>
                    <span className="text-[9px] text-[#6B6E75]">EDITORIAL</span>
                  </div>
                  <div className="h-6 w-px bg-white/15" />
                  <div className="text-center">
                    <span className="font-mono text-sm text-[#5B8CFF] block">JETBRAINS</span>
                    <span className="text-[9px] text-[#6B6E75]">TELEMETRY</span>
                  </div>
                  <div className="h-6 w-px bg-white/15" />
                  <div className="text-center">
                    <span className="font-sans text-sm text-white block">JAKARTA</span>
                    <span className="text-[9px] text-[#6B6E75]">LEGIBILITY</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>ZERO-PILL RULE</span>
                  <span>PHYSICAL SPRING LERP</span>
                </div>
              </div>
            )}

            {/* 05: Automation Visual */}
            {selectedCap.id === 'automation' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>EVENT PIPELINE ORCHESTRATION</span>
                  <span className="text-emerald-400">HEADLESS · REAL-TIME</span>
                </div>
                <div className="flex items-center justify-between px-3 text-[10px]">
                  <span className="text-[#A5A7AC]">WEBHOOK INGEST</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-[#A5A7AC]">TRANSFORM</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-[#A5A7AC]">DB SYNC</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-[#10B981] font-semibold">NOTIFY</span>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>AUTOMATIC RETRY: EXPONENTIAL BACKOFF</span>
                  <span>ZERO MANUAL INTERVENTION</span>
                </div>
              </div>
            )}

            {/* 06: Business x Tech Visual */}
            {selectedCap.id === 'business-tech' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>SYSTEM VALUE ARCHITECTURE</span>
                  <span className="text-[#F59E0B]">HIGH ROI VELOCITY</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-2 rounded bg-[#101216] border border-white/10">
                    <div className="text-[9px] text-[#6B6E75]">DE-RISKED BUILD</div>
                    <div className="text-xs text-white font-bold">MINIMUM SYSTEM MASS</div>
                  </div>
                  <div className="p-2 rounded bg-[#101216] border border-white/10">
                    <div className="text-[9px] text-[#6B6E75]">MAINTAINABILITY</div>
                    <div className="text-xs text-[#F59E0B] font-bold">LONG-TERM DIVIDENDS</div>
                  </div>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>DOMAIN-DRIVEN DESIGN</span>
                  <span>MEASURED CAPITAL IMPACT</span>
                </div>
              </div>
            )}

            {/* 07: Finance x Tech Visual */}
            {selectedCap.id === 'finance-tech' && (
              <div className="w-full h-full flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
                  <span>LEDGER TOPOLOGY & DECIMAL ACCURACY</span>
                  <span className="text-[#EC4899]">BALANCE RECONCILED</span>
                </div>
                <div className="flex items-center justify-between px-2 text-[10px]">
                  <div className="text-left">
                    <span className="text-[#6B6E75] block text-[9px]">DEBIT LEDGER</span>
                    <span className="text-emerald-400 font-bold">+1,450.0000</span>
                  </div>
                  <div className="text-center font-bold text-white">===</div>
                  <div className="text-right">
                    <span className="text-[#6B6E75] block text-[9px]">CREDIT LEDGER</span>
                    <span className="text-rose-400 font-bold">-1,450.0000</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#6B6E75] flex justify-between">
                  <span>ZERO FLOATING-POINT ERRORS</span>
                  <span>IMMUTABLE AUDIT LOG</span>
                </div>
              </div>
            )}
          </div>

          {/* Two-Column Deliverables & Technologies Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            {/* Verified Deliverables */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-wider block">
                TYPICAL DELIVERABLES:
              </span>
              <div className="space-y-2 font-mono text-xs text-[#F5F5F0]">
                {selectedCap.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5B8CFF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Employed */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-wider block">
                PRODUCTION TOOLING:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {selectedCap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#101216] border border-white/[0.08] text-[#A5A7AC]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
