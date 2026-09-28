/**
 * GARV SHAW — ARCHITECTURAL WRITINGS & SYSTEM NOTES
 * Factual engineering essays and philosophical reflections on software architecture,
 * AI reasoning systems, design restraint, and technology economics.
 */

export interface ThoughtArticle {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: 'AI & AGENTS' | 'SYSTEM ARCHITECTURE' | 'DESIGN & COGNITION' | 'BUSINESS & TECH';
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
}

export const THOUGHTS: ThoughtArticle[] = [
  {
    id: 'calm-restraint',
    slug: '80-20-aesthetic-constitution',
    number: '01',
    title: 'The 80/20 Aesthetic Constitution: Why Calm Restraint Beats UI Noise',
    tagline: 'Designing digital environments that respect human attention and cognitive bandwidth.',
    category: 'DESIGN & COGNITION',
    date: 'MARCH 2026',
    readTime: '4 MIN READ',
    summary:
      'Most modern interfaces suffer from visual hyperactivity: neon gradients, bouncing badges, and excessive motion. High-end digital architecture requires 80% disciplined calm and 20% intentional spectacle.',
    keyTakeaways: [
      'Visual silence creates psychological luxury and reduces user decision fatigue.',
      'Animation should obey physical spring inertia rather than arbitrary CSS keyframes.',
      'Typography hierarchy (editorial display vs. monospace telemetry) replaces colorful bubble tags.',
    ],
    content: [
      'In a digital landscape oversaturated with neon pills, endless micro-animations, and cluttered sidebars, true luxury is clarity. When everything screams for attention, nothing is heard.',
      'The 80/20 Aesthetic Constitution is built upon a simple mathematical premise: 80% of an interface must be quiet, dark, and structurally predictable. The remaining 20% carries the entire emotional weight through razor-sharp typography, deliberate lighting gradients, and tactile responsiveness.',
      'When designing systems like ArogyaSeva or ChessVerse, the primary constraint was cognitive load. In clinical triage, an unnecessary animation is not just ugly—it introduces latency into human judgment. Engineering calm is therefore an engineering responsibility.',
    ],
  },
  {
    id: 'agentic-reasoning-loops',
    slug: 'architecting-multi-agent-loops',
    number: '02',
    title: 'From Heuristics to Autonomy: Architecting Multi-Agent LLM Loops',
    tagline: 'Moving beyond naive prompt wrappers to resilient, self-correcting agent graphs.',
    category: 'AI & AGENTS',
    date: 'FEBRUARY 2026',
    readTime: '6 MIN READ',
    summary:
      'Single-shot LLM calls break down under real-world ambiguity. Building production-grade AI platforms requires deterministic state machines, tool validation contracts, and retry loops.',
    keyTakeaways: [
      'Never trust unstructured LLM output in production; enforce strict JSON schemas at the compiler level.',
      'Decouple reasoning from execution: the agent proposes actions, the sandbox validates permissions.',
      'Deterministic fallback heuristics prevent infinite token burn and runaway execution loops.',
    ],
    content: [
      'The transition from chatbot toys to enterprise-grade AI systems hinges on deterministic boundaries. A neural network is fundamentally probabilistic, whereas software business rules are strictly contractual.',
      'To reconcile this tension, our architecture treats frontier models as execution coprocessors inside a strongly-typed finite state machine. Every tool call is intercepted by a middleware proxy that validates arguments against Zod or JSON schemas before touching any persistence layer.',
      'Furthermore, by introducing multi-agent verification—where an independent critique agent verifies the generator’s work before state commitment—we eliminate hallucination risks in high-stakes domains.',
    ],
  },
  {
    id: 'zero-downtime-edge',
    slug: 'scaling-serverless-edge-topologies',
    number: '03',
    title: 'Zero-Downtime Edge Topologies: Scaling Systems from Zero to Global',
    tagline: 'Pragmatic distributed infrastructure: container clusters, edge routing, and cold-start minimization.',
    category: 'SYSTEM ARCHITECTURE',
    date: 'JANUARY 2026',
    readTime: '5 MIN READ',
    summary:
      'Serverless computing should not mean unpredictable latency or vendor lock-in. A guide to architecting portable Docker workloads with Cloud Run, edge caches, and connection pooling.',
    keyTakeaways: [
      'Containerize everything: local parity ensures zero surprises in distributed staging.',
      'Scale-to-zero is the ultimate cost optimizer for non-linear workloads.',
      'Connection pooling and prepared SQL statements are mandatory to prevent database thread starvation.',
    ],
    content: [
      'Over-engineering infrastructure is the most common death spiral for digital products. Provisioning multi-node Kubernetes clusters for an early-stage product burns both engineering velocity and capital.',
      'Modern cloud primitives like Google Cloud Run combined with edge CDN routing give developers the best of both worlds: zero server maintenance, instantaneous horizontal scaling from 0 to hundreds of instances, and billing down to the millisecond of actual execution.',
      'The critical architectural detail is statelessness. By keeping the compute tier purely transient and offloading transactional state to managed PostgreSQL with connection pooling, we achieve near-instantaneous container spin-up with sub-50ms global TTFB.',
    ],
  },
  {
    id: 'code-as-capital',
    slug: 'code-as-financial-leverage',
    number: '04',
    title: 'Code as Capital: The Intersection of Software, Business, and Finance',
    tagline: 'Why software engineering without commercial comprehension is wasted energy.',
    category: 'BUSINESS & TECH',
    date: 'DECEMBER 2025',
    readTime: '5 MIN READ',
    summary:
      'Software is not just lines of code; it is an economic leverage mechanism. Exploring domain modeling, unit economics, and building high-velocity technology assets.',
    keyTakeaways: [
      'Every technical decision is implicitly a financial decision with compounding interest.',
      'Reducing operational complexity directly lowers the cost of customer acquisition and servicing.',
      'Systems thinking bridges the gap between engineering perfectionism and market impact.',
    ],
    content: [
      'Engineers often pride themselves on pure algorithmic elegance while ignoring the economic terrain in which their software operates. Conversely, business leaders often treat technology as a commodity line item.',
      'The most potent digital systems are born when software architecture directly models commercial realities. When a distributed queue eliminates hours of manual data entry, that is not merely an engineering milestone—it is permanent operational margin.',
      'By grounding engineering choices in financial and domain discipline, we build software that scales not only in request throughput, but in enterprise value.',
    ],
  },
];
