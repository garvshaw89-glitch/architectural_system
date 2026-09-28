import React, { useState } from 'react';
import { useEnvironment } from '../../context/EnvironmentContext';
import { useScrollSystem } from '../../design/ScrollContext';
import { Cpu, Cloud, Code, Layout, TrendingUp, ShieldCheck, Zap, Layers, Sparkles, Terminal, X } from 'lucide-react';

export interface DNANodeData {
  id: string;
  label: string;
  category: 'core' | 'ai' | 'cloud' | 'software' | 'design' | 'business';
  x: number; // percentage in SVG -140 to 140
  y: number; // percentage in SVG -140 to 140
  icon: React.ElementType;
  description: string;
  subSkills: string[];
}

export const DNA_NODES: DNANodeData[] = [
  {
    id: 'ai',
    label: 'AI & Intelligence',
    category: 'ai',
    x: 0,
    y: -110,
    icon: Cpu,
    description: 'Frontier model integration, autonomous workflows, and machine intelligence pipelines.',
    subSkills: ['Large Language Models', 'Agent Orchestration', 'Prompt Architecture', 'Neural Workflows'],
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    category: 'cloud',
    x: -85,
    y: -65,
    icon: Cloud,
    description: 'Resilient distributed systems, container orchestration, and serverless edge delivery.',
    subSkills: ['Microservices', 'Distributed Databases', 'Docker & K8s', 'Edge Deployment'],
  },
  {
    id: 'ui',
    label: 'UI & Design Systems',
    category: 'design',
    x: 85,
    y: -65,
    icon: Layout,
    description: 'Swiss typography, 80/20 visual restraint, custom physics motion, and design tokens.',
    subSkills: ['Typography Architecture', 'Design Tokens', 'Micro-Interactions', 'Sensory Polish'],
  },
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    category: 'software',
    x: -120,
    y: 10,
    icon: Code,
    description: 'Zero-slop modern web apps with instant compilation and GPU-accelerated rendering.',
    subSkills: ['React 19 & Next.js', 'TypeScript Rigor', 'State Machines', 'Fluid Motion'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    category: 'software',
    x: 120,
    y: 10,
    icon: Terminal,
    description: 'High-throughput transactional APIs, GraphQL/gRPC services, and event streams.',
    subSkills: ['Node.js & Express', 'PostgreSQL / SQL', 'REST & Streaming APIs', 'Data Modeling'],
  },
  {
    id: 'automation',
    label: 'Automation',
    category: 'software',
    x: -80,
    y: 80,
    icon: Zap,
    description: 'Algorithmic task automation, CI/CD pipelines, and workflow orchestration.',
    subSkills: ['Process Automation', 'Webhook Infrastructure', 'CI/CD Pipelines', 'Integration Bridges'],
  },
  {
    id: 'business',
    label: 'Business Strategy',
    category: 'business',
    x: 80,
    y: 80,
    icon: TrendingUp,
    description: 'Translating business objectives into scalable software architecture and high ROI.',
    subSkills: ['Product Strategy', 'Systems ROI', 'Technical Roadmaps', 'Operational Scaling'],
  },
  {
    id: 'finance',
    label: 'Finance & Systems',
    category: 'business',
    x: 0,
    y: 115,
    icon: Layers,
    description: 'Data analytics, algorithmic calculation engines, and auditable financial data models.',
    subSkills: ['Financial Modeling', 'Data Pipelines', 'Transactional Integrity', 'Metrics Engine'],
  },
];

export const DigitalDNA: React.FC = () => {
  const { setCursorMode, normalizedX, normalizedY } = useEnvironment();
  const { prefersReducedMotion } = useScrollSystem();

  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<DNANodeData | null>(null);

  const activeNode = DNA_NODES.find((n) => n.id === activeNodeId) || selectedNode;

  // 3D tilt calculation
  const tiltX = prefersReducedMotion ? 0 : normalizedY * -8;
  const tiltY = prefersReducedMotion ? 0 : normalizedX * 10;

  return (
    <div className="relative w-full rounded-[24px] bg-[#08090B] border border-white/[0.08] p-6 sm:p-10 overflow-hidden shadow-2xl space-y-8 select-none">
      {/* Background Architectural Markings */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#5B8CFF] font-semibold">SYS // 002</span>
          <span className="text-white/20">·</span>
          <span className="font-mono text-xs text-[#A5A7AC] tracking-wider uppercase">DIGITAL DNA ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#6B6E75]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] animate-pulse" />
          <span>NETWORK ACTIVE // 8 SYNAPSE NODES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Visual Canvas (Cols 1-8) */}
        <div className="lg:col-span-8 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
          {/* Subtle Ambient Radial Backlight */}
          <div
            className="absolute inset-8 rounded-full blur-[100px] pointer-events-none transition-all duration-500"
            style={{
              background: activeNode
                ? 'radial-gradient(circle, rgba(91, 140, 255, 0.18) 0%, rgba(121, 92, 255, 0.12) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(91, 140, 255, 0.08) 0%, transparent 70%)',
            }}
          />

          {/* SVG Synaptic Network Canvas */}
          <svg
            viewBox="-170 -160 340 320"
            className="w-full h-full max-w-[500px] max-h-[460px] overflow-visible"
            style={{
              transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <defs>
              <linearGradient id="dnaLineDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
              </linearGradient>
              <linearGradient id="dnaLineActive" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#795CFF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting Synaptic Lines from Center (GARV) to Nodes */}
            {DNA_NODES.map((node) => {
              const isConnected = activeNode?.id === node.id;
              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1="0"
                    y1="0"
                    x2={node.x}
                    y2={node.y}
                    stroke={isConnected ? 'url(#dnaLineActive)' : 'url(#dnaLineDefault)'}
                    strokeWidth={isConnected ? 1.8 : 1}
                    strokeDasharray={isConnected ? 'none' : '3 3'}
                    className="transition-all duration-300"
                  />
                  {/* Small animated pulse traveling along line when active */}
                  {isConnected && (
                    <circle
                      cx={node.x * 0.5}
                      cy={node.y * 0.5}
                      r="2"
                      fill="#5B8CFF"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* Inter-Node Structural Lattice Lines */}
            <line x1="-85" y1="-65" x2="0" y2="-110" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="85" y1="-65" x2="0" y2="-110" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="-120" y1="10" x2="-85" y2="-65" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="120" y1="10" x2="85" y2="-65" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="-120" y1="10" x2="-80" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="120" y1="10" x2="80" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="-80" y1="80" x2="0" y2="115" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
            <line x1="80" y1="80" x2="0" y2="115" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />

            {/* Peripheral Nodes */}
            {DNA_NODES.map((node) => {
              const isHovered = activeNodeId === node.id;
              const isSelected = selectedNode?.id === node.id;
              const isActive = isHovered || isSelected;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer group"
                  onMouseEnter={() => {
                    setActiveNodeId(node.id);
                    setCursorMode('open');
                  }}
                  onMouseLeave={() => {
                    setActiveNodeId(null);
                    setCursorMode('default');
                  }}
                  onClick={() => setSelectedNode(node)}
                >
                  {/* Subtle Node Halo */}
                  <circle
                    r={isActive ? 22 : 16}
                    fill={isActive ? 'rgba(91,140,255,0.18)' : 'rgba(16,18,22,0.8)'}
                    stroke={isActive ? '#5B8CFF' : 'rgba(255,255,255,0.12)'}
                    strokeWidth={isActive ? 1.5 : 1}
                    className="transition-all duration-300"
                  />

                  {/* Center Dot */}
                  <circle
                    r={isActive ? 4 : 2.5}
                    fill={isActive ? '#F5F5F0' : '#A5A7AC'}
                    className="transition-all duration-300"
                  />

                  {/* Micro Text Label */}
                  <text
                    x="0"
                    y={node.y > 0 ? 24 : -20}
                    textAnchor="middle"
                    fill={isActive ? '#F5F5F0' : '#6B6E75'}
                    fontSize="8.5"
                    fontFamily="monospace"
                    letterSpacing="0.8"
                    className="transition-colors duration-200 uppercase font-medium pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}

            {/* CENTER CORE: GARV */}
            <g
              transform="translate(0, 0)"
              className="cursor-pointer"
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
            >
              <circle
                r="30"
                fill="#101216"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
                className="transition-all duration-300 hover:stroke-[#5B8CFF]"
              />
              <circle
                r="38"
                fill="none"
                stroke="rgba(91,140,255,0.3)"
                strokeDasharray="3 4"
                className="animate-spin"
                style={{ animationDuration: '24s' }}
              />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#F5F5F0"
                fontSize="11"
                fontFamily="sans-serif"
                fontWeight="800"
                letterSpacing="1.5"
              >
                GARV
              </text>
            </g>
          </svg>
        </div>

        {/* Right Column: Node Details Inspector (Cols 9-12) */}
        <div className="lg:col-span-4 bg-[#050505] rounded-[16px] border border-white/[0.08] p-6 space-y-5 flex flex-col justify-between min-h-[360px]">
          {activeNode ? (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="font-mono text-[10px] text-[#5B8CFF] uppercase tracking-wider">
                  NODE // {activeNode.category}
                </span>
                <span className="font-mono text-[10px] text-[#6B6E75]">STATUS: SYNCHRONIZED</span>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-[#F5F5F0]">{activeNode.label}</h4>
                <p className="font-sans text-xs text-[#A5A7AC] mt-2 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              {/* Sub-skill DNA Vectors */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[10px] text-[#6B6E75] uppercase tracking-wider">
                  DISCIPLINE COMPILATION:
                </div>
                <div className="space-y-1.5">
                  {activeNode.subSkills.map((skill) => (
                    <div
                      key={skill}
                      className="p-2 rounded-md bg-[#101216] border border-white/[0.04] text-xs font-mono text-[#F5F5F0] flex items-center justify-between"
                    >
                      <span>{skill}</span>
                      <span className="text-[10px] text-[#5B8CFF]">ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="my-auto text-center space-y-3 py-8">
              <div className="w-10 h-10 rounded-full border border-white/10 mx-auto flex items-center justify-center text-[#5B8CFF]">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-sm text-[#F5F5F0]">
                EXPLORE DIGITAL DNA
              </div>
              <p className="font-sans text-xs text-[#6B6E75] max-w-xs mx-auto leading-relaxed">
                Hover or click any node to illuminate synaptic pathways and inspect underlying engineering competencies.
              </p>
            </div>
          )}

          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#6B6E75]">
            <span>COORDINATES: X{tiltX.toFixed(1)} / Y{tiltY.toFixed(1)}</span>
            <span className="text-[#A5A7AC]">ZERO SKILL BARS DISCIPLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
