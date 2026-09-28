/**
 * GARV SHAW — FEATURED PROJECTS & SYSTEMS DATA MODEL
 * Real, factual project specifications, verified roles, architectural flows,
 * and design decisions. Zero fabricated statistics or imaginary clients.
 */

export interface ArchitectureNode {
  step: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  deliverables: string[];
  accentColor: string; // e.g. '#5B8CFF', '#795CFF', '#F59E0B'
  ambientGlow: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  layoutVariant: 'full-width' | 'image-left' | 'text-left';
  problem: string;
  approach: string;
  architectureFlow: ArchitectureNode[];
  designHighlights: string[];
  engineeringDecisions: string[];
  interactiveType: 'clinical-triage' | 'chess-board' | 'vision-style' | 'system-tokens';
}

export const PROJECTS: Project[] = [
  {
    id: 'arogyaseva',
    number: '01',
    title: 'AROGYASEVA',
    tagline: 'Intelligent Clinical Healthcare Infrastructure',
    category: 'AI / HEALTHCARE / DISTRIBUTED CLOUD',
    year: '2026',
    description:
      'A digital healthcare platform designed to make critical medical triage and clinical data management accessible through an offline-resilient, AI-accelerated interface.',
    longDescription:
      'ArogyaSeva addresses healthcare access friction in distributed communities. The platform bridges local triage staff with specialized clinical consultants, featuring real-time diagnostic workflows, automated clinical report extraction, and privacy-hardened data synchronization across low-bandwidth environments.',
    role: 'Lead System Architect & Full-Stack Engineer',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI/Gemini APIs', 'Tailwind CSS'],
    deliverables: ['Clinical Triage Dashboard', 'AI Prescription Parser', 'Patient Registry Schema', 'Encrypted Teleconsultation Channel'],
    accentColor: '#5B8CFF',
    ambientGlow: 'rgba(91, 140, 255, 0.12)',
    githubUrl: 'https://github.com/GarvShaw/ArogyaSeva',
    featured: true,
    layoutVariant: 'full-width',
    problem:
      'Rural and suburban healthcare centers frequently lack specialized physicians on-site, while existing hospital software is heavy, clunky, and fails over low-bandwidth cellular networks.',
    approach:
      'Architected an ultra-fast, optimistic client interface paired with lightweight server-side edge proxies. Clinical consultation logs are tokenized and processed through structured LLM pipelines with strict JSON schemas.',
    architectureFlow: [
      { step: '01', label: 'Triage Ingestion', detail: 'Vitals & symptom entry with offline local storage cache' },
      { step: '02', label: 'Edge LLM Pipeline', detail: 'Structured classification into clinical urgency levels' },
      { step: '03', label: 'Distributed Queue', detail: 'Priority dispatch to authenticated clinical specialists' },
      { step: '04', label: 'Encrypted Telemetry', detail: 'Zero-knowledge session logging & relational audit trail' },
    ],
    designHighlights: [
      'High-contrast monospace patient timeline for rapid visual scanning',
      'Zero-clutter triage HUD preventing cognitive fatigue during emergency cases',
      'Dark ambient surface palette reducing eye strain during night shifts',
    ],
    engineeringDecisions: [
      'Strict TypeScript schema validation ensuring zero type errors in critical medical data',
      'Optimistic local cache updates with automatic retry queue for unstable connectivity',
      'Server-side API proxy routing preventing credential exposure and enforcing strict rate limits',
    ],
    interactiveType: 'clinical-triage',
  },
  {
    id: 'chessverse',
    number: '02',
    title: 'CHESSVERSE',
    tagline: 'Spatial Interactive Chess Simulation & Analysis',
    category: 'CREATIVE COMPUTATION / WEBGL / ALGORITHMS',
    year: '2026',
    description:
      'A cinematic, browser-based spatial chess environment combining chess engine analysis, geometric board perspectives, and physical move kinematics.',
    longDescription:
      'ChessVerse reimagines the classical 64-square game as a computational spatial sculpture. Built to explore board state evaluation, legal move tree pruning, and real-time piece illumination, it offers grandmaster-level positional analysis wrapped in a luxury dark architectural environment.',
    role: 'Systems & Interaction Designer',
    technologies: ['TypeScript', 'Canvas / WebGL', 'Chess Engine Logic', 'Fluid Motion', 'Tailwind CSS'],
    deliverables: ['Custom Board Kinematics', 'Engine Evaluation HUD', 'Move Tree Visualizer', 'Spatial Perspective Controls'],
    accentColor: '#795CFF',
    ambientGlow: 'rgba(121, 92, 255, 0.14)',
    githubUrl: 'https://github.com/GarvShaw/ChessVerse',
    featured: false,
    layoutVariant: 'image-left',
    problem:
      'Standard online chess platforms look like 2012 dashboards with rigid 2D sprites, lacking physical weight, cinematic spatial awareness, and intuitive depth of analysis.',
    approach:
      'Constructed a lightweight mathematical rendering pipeline that calculates piece projections with subtle isometric perspective without heavy 3D asset downloads.',
    architectureFlow: [
      { step: '01', label: 'Board State Matrix', detail: 'FEN string parser and 64-index state vector representation' },
      { step: '02', label: 'Rule Validation', detail: 'Bitboard evaluation tree eliminating illegal move branches' },
      { step: '03', label: 'Positional Analyzer', detail: 'Calculates dynamic advantage metrics and piece tension' },
      { step: '04', label: 'Kinematic Renderer', detail: 'Sub-60fps spring-interpolated move trajectory easing' },
    ],
    designHighlights: [
      'Obsidian-black and graphite board tiles with subtle 1px hairline borders',
      'Piece illumination glowing softly when legal paths are evaluated',
      'Minimalist algebraic notation HUD maintaining zero clutter',
    ],
    engineeringDecisions: [
      'Pure mathematical canvas/SVG rendering keeping initial load under 50KB',
      'Zero external chess asset dependencies; all pieces rendered as geometric vectors',
      'State engine decoupled from UI layer allowing headless testing',
    ],
    interactiveType: 'chess-board',
  },
  {
    id: 'food-photographer',
    number: '03',
    title: 'VIRTUAL FOOD PHOTOGRAPHER',
    tagline: 'Computational Visual Lighting & Culinary AI Studio',
    category: 'COMPUTER VISION / GENERATIVE AI / DESIGN',
    year: '2026',
    description:
      'A computational studio that converts raw culinary concepts into high-fidelity editorial imagery with controllable studio lighting angles and camera depth.',
    longDescription:
      'Virtual Food Photographer enables chefs and restaurants to generate studio-grade culinary art without expensive photo studios. By engineering custom image generation prompts with structured lighting coordinates, diffusion weights, and camera lenses, the platform delivers magazine-grade visual assets.',
    role: 'Creative Technologist & AI Prompt Architect',
    technologies: ['Gemini Image Generation', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    deliverables: ['Virtual Lighting Studio HUD', 'Style Parameter Synthesizer', 'High-Res Asset Pipeline', 'Editorial Composition Engine'],
    accentColor: '#38BDF8',
    ambientGlow: 'rgba(56, 189, 248, 0.12)',
    githubUrl: 'https://github.com/GarvShaw',
    featured: false,
    layoutVariant: 'text-left',
    problem:
      'High-end culinary photography requires expensive specialized lighting rigs, food stylists, and studio environments that are inaccessible for emerging culinary innovators.',
    approach:
      'Bridged generative vision models with architectural photography principles—controlling focal length, color temperature, and rim lighting parameters through a clean slider interface.',
    architectureFlow: [
      { step: '01', label: 'Concept Deconstruction', detail: 'Texture, ingredient, and plating composition parsing' },
      { step: '02', label: 'Lighting Rig Mapping', detail: 'Mathematical translation of Kelvin values and softbox angles' },
      { step: '03', label: 'Diffusion Execution', detail: 'Server-side inference via frontier image generation SDK' },
      { step: '04', label: 'Post-Process Filter', detail: 'Film grain, contrast harmonization, and color profiling' },
    ],
    designHighlights: [
      'Darkroom-inspired interface focusing full attention on high-fidelity imagery',
      'Technical Kelvin scale sliders and aperture depth controllers',
      'Zero-pill metadata inspection tags for shutter speed and focal length',
    ],
    engineeringDecisions: [
      'Server-side proxy shielding API keys and running strict payload validation',
      'Progressive image decoding preventing layout shift during generation',
      'Deterministic seed caching enabling reproducible photographic variants',
    ],
    interactiveType: 'vision-style',
  },
  {
    id: 'garv-portfolio',
    number: '04',
    title: 'GARV SHAW ARCHITECTURAL SYSTEM',
    tagline: 'The Digital Architect Exhibition Environment',
    category: 'DIGITAL ARCHITECTURE / PERFORMANCE / SYSTEM',
    year: '2026',
    description:
      'The custom design system and digital exhibition platform engineered around Garv Shaw’s philosophy of Intelligence in Motion and 80/20 calm restraint.',
    longDescription:
      'This portfolio itself was built as a software product. Rejecting generic template builders, it features semantic design tokens, a centralized single-loop scroll controller, persistent intelligent cursor dynamics, metamorphic SVG Identity Core, and 12-column responsive architectural mathematics.',
    role: 'Author & Digital Architect',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Lucide Icons'],
    deliverables: ['Design Token Engine', 'Metamorphic Identity Core', 'Centralized Scroll Context', 'Persistent Dual Cursor'],
    accentColor: '#795CFF',
    ambientGlow: 'rgba(121, 92, 255, 0.12)',
    githubUrl: 'https://github.com/GarvShaw',
    liveUrl: 'https://ais-dev-ffjct5si6uhdovuditjbs4-469705002222.asia-southeast1.run.app',
    featured: false,
    layoutVariant: 'full-width',
    problem:
      'Standard developer portfolios look like identical collections of bootstrap cards, fake animated statistics, and random skill percentage bars.',
    approach:
      'Created a holistic digital architectural system grounded in 60-30-10 color discipline, Swiss typography scales, and physical spring inertia where every pixel serves a purpose.',
    architectureFlow: [
      { step: '01', label: 'Brand Taxonomy', detail: 'Digital Architect positioning with strict anti-slop guidelines' },
      { step: '02', label: 'Token Compilation', detail: 'Semantic CSS variables for surfaces, borders, and motion budgets' },
      { step: '03', label: 'Interaction Engine', detail: 'Centralized environment context managing mouse & scroll physics' },
      { step: '04', label: 'Sensory Delivery', detail: 'Metamorphic identity loops and progressive case study modals' },
    ],
    designHighlights: [
      'Deep Obsidian void (#050505) avoiding digital flat black through fine noise and grid',
      'Syne 800 display typography with tight -0.04em tracking for commanding impact',
      'Strict zero-pill rule replacing colorful bubble tags with monospace inline metadata',
    ],
    engineeringDecisions: [
      'Centralized event listeners preventing duplicate scroll and mouse listeners',
      'requestAnimationFrame batching for 60fps cursor and ambient light lerping',
      'Complete accessibility with full prefers-reduced-motion fallback',
    ],
    interactiveType: 'system-tokens',
  },
];
