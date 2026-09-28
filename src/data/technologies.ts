/**
 * GARV SHAW — VERIFIED TECHNOLOGY DATA MODEL
 * Real technologies, verified project mapping, architectural roles.
 * No arbitrary percentages (e.g. no "React 92%").
 */

export interface TechItem {
  id: string;
  name: string;
  category: 'ai' | 'frontend' | 'backend' | 'cloud' | 'data' | 'devtools' | 'design';
  role: string;
  projects: string[];
  description: string;
  architectureLayer: string;
}

export const TECHNOLOGIES: TechItem[] = [
  // AI
  {
    id: 'python',
    name: 'Python',
    category: 'ai',
    role: 'Core AI script engine & model integration',
    projects: ['ArogyaSeva', 'Virtual Food Photographer'],
    description: 'Scripting data ingestion pipelines, structured prompt formatting, and model invocation.',
    architectureLayer: 'AI & Data Layer',
  },
  {
    id: 'openai-gemini-sdk',
    name: 'OpenAI & Gemini SDKs',
    category: 'ai',
    role: 'Frontier LLM inference & function calling',
    projects: ['ArogyaSeva', 'Virtual Food Photographer', 'Portfolio'],
    description: 'Structured JSON schemas, streaming endpoints, agentic tool dispatch, and reasoning loops.',
    architectureLayer: 'AI & Logic Layer',
  },
  {
    id: 'ai-agents',
    name: 'Autonomous Agent Workflows',
    category: 'ai',
    role: 'Multi-step automated reasoning',
    projects: ['ArogyaSeva'],
    description: 'Asynchronous task queues, verification steps, and clinical diagnosis routing loops.',
    architectureLayer: 'AI & Logic Layer',
  },

  // Frontend
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    role: 'Declarative component architecture',
    projects: ['ArogyaSeva', 'ChessVerse', 'Portfolio'],
    description: 'Concurrent rendering, custom hooks, transition hooks, and strict declarative state models.',
    architectureLayer: 'Interface & Frontend Layer',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    role: 'End-to-end type safety & contract validation',
    projects: ['ArogyaSeva', 'ChessVerse', 'Virtual Food Photographer', 'Portfolio'],
    description: 'Zero `any` policy, branded types for IDs, strict schema boundaries between UI and APIs.',
    architectureLayer: 'Interface & System Layer',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    category: 'frontend',
    role: 'Token-driven architectural styling',
    projects: ['ArogyaSeva', 'ChessVerse', 'Portfolio'],
    description: 'Custom CSS variables, 60-30-10 color allocation, Swiss typography scale, and fluid containers.',
    architectureLayer: 'Interface & Design Layer',
  },
  {
    id: 'canvas-webgl',
    name: 'Canvas & Spatial Math',
    category: 'frontend',
    role: 'Spatial kinematics & 2D/3D projection',
    projects: ['ChessVerse'],
    description: 'Mathematical matrix projections, isometric tile calculation, and sub-60fps move trajectory easing.',
    architectureLayer: 'Interface Layer',
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    role: 'High-throughput proxy servers & APIs',
    projects: ['ArogyaSeva', 'Virtual Food Photographer'],
    description: 'Server-side API routes, rate-limiting, secure key isolation, and asynchronous event streaming.',
    architectureLayer: 'API & Logic Layer',
  },
  {
    id: 'rest-streaming',
    name: 'REST & SSE Streaming',
    category: 'backend',
    role: 'Real-time server-sent telemetry',
    projects: ['ArogyaSeva', 'Portfolio'],
    description: 'Chunked HTTP transfer, event stream connections, and low-latency payload delivery.',
    architectureLayer: 'API & Communication Layer',
  },

  // Cloud & Infrastructure
  {
    id: 'docker',
    name: 'Docker Containers',
    category: 'cloud',
    role: 'Reproducible microservice encapsulation',
    projects: ['ArogyaSeva'],
    description: 'Multi-stage builds, alpine Linux images, and isolated dependency environments.',
    architectureLayer: 'Cloud & Infrastructure Layer',
  },
  {
    id: 'cloud-run',
    name: 'Google Cloud Run / GCP',
    category: 'cloud',
    role: 'Serverless container orchestration',
    projects: ['ArogyaSeva', 'Portfolio'],
    description: 'Auto-scaling from zero, regional routing, and zero-downtime revision rollouts.',
    architectureLayer: 'Cloud & Infrastructure Layer',
  },
  {
    id: 'firebase',
    name: 'Firebase & Firestore',
    category: 'cloud',
    role: 'Realtime database & authentication',
    projects: ['ArogyaSeva'],
    description: 'Role-based security rules, atomic transactions, and offline persistent cache sync.',
    architectureLayer: 'Data & Cloud Layer',
  },

  // Data
  {
    id: 'postgresql',
    name: 'PostgreSQL / SQL',
    category: 'data',
    role: 'Relational data modeling & transactional integrity',
    projects: ['ArogyaSeva'],
    description: 'Strict foreign key relationships, relational indexes, and parameterized SQL queries.',
    architectureLayer: 'Data Layer',
  },

  // DevTools
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'devtools',
    role: 'Source control & public collaboration',
    projects: ['ArogyaSeva', 'ChessVerse', 'Portfolio'],
    description: 'Semantic commits, atomic pull requests, automated GitHub Actions CI/CD workflows.',
    architectureLayer: 'System & Tooling Layer',
  },
  {
    id: 'vite',
    name: 'Vite & Bundler Architecture',
    category: 'devtools',
    role: 'Fast compilation & asset optimization',
    projects: ['ArogyaSeva', 'ChessVerse', 'Portfolio'],
    description: 'Rollup tree-shaking, sub-second HMR, and modern ES module delivery.',
    architectureLayer: 'System & Tooling Layer',
  },

  // Design
  {
    id: 'design-tokens',
    name: 'Design Systems & Tokens',
    category: 'design',
    role: 'Single source of visual truth',
    projects: ['Portfolio', 'ArogyaSeva'],
    description: 'Mathematical spacing scales (4px to 240px), WCAG AAA contrast guarantees, zero-pill discipline.',
    architectureLayer: 'Experience & Design Layer',
  },
];
