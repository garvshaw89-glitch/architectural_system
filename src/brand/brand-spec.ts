/**
 * GARV SHAW — BRAND & ART DIRECTION SPECIFICATION DATA
 * Phase 01 Canonical Design Tokens and Architectural Principles
 */

export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  ratio: string;
  category: 'base' | 'text' | 'accent';
}

export interface ArchetypeNode {
  title: string;
  descriptor: string;
  traits: string[];
}

export interface CursorStateDef {
  id: string;
  label: string;
  visual: string;
  behavior: string;
  cursorLabel?: string;
}

export const BRAND_IDENTITY = {
  name: 'GARV SHAW',
  wordmark: 'GARV SHAW',
  compactMark: 'G',
  positioning: 'DIGITAL ARCHITECT',
  supportingDescriptor: 'AI × CLOUD × SOFTWARE',
  mission: 'Building intelligent digital systems.',
  centralIdea: 'INTELLIGENCE IN MOTION',
  visualConcept: 'DIGITAL ARCHITECTURE',
  equation: 'LUXURY + EDITORIAL + ARCHITECTURE + TECHNOLOGY + MOTION + AI/3D = GARV DIGITAL EXPERIENCE',
  ruleOfSpectacle: '80% calm + 20% spectacle',
  accentBudget: '90% Neutral UI + 10% Electric Accent',
};

export const BRAND_ARCHETYPES: ArchetypeNode[] = [
  {
    title: 'ENGINEER',
    descriptor: 'Foundation of logic, computation, and structural integrity',
    traits: ['Software Engineering', 'Distributed Cloud', 'Deep AI Systems', 'High Performance']
  },
  {
    title: 'CREATOR',
    descriptor: 'Vision for aesthetics, sensory perception, and human resonance',
    traits: ['Sensory Design', 'Visual Experiments', 'Product Ideation', 'Creative Coding']
  },
  {
    title: 'ARCHITECT',
    descriptor: 'Holistic vision for scale, system boundaries, and longevity',
    traits: ['Systems Thinking', 'Microservice Design', 'Scalable Patterns', 'Strategy & Clarity']
  },
  {
    title: 'BUILDER',
    descriptor: 'Relentless execution, real-world deployment, and shipping',
    traits: ['Execution Rigor', 'Continuous Shipping', 'Zero-Slop Code', 'User Impact']
  }
];

export const COLOR_PALETTE: ColorToken[] = [
  {
    name: 'Obsidian',
    hex: '#050505',
    role: 'Primary Canvas & Void Background',
    ratio: '60% Base Canvas',
    category: 'base'
  },
  {
    name: 'Deep Graphite',
    hex: '#0A0B0D',
    role: 'Secondary Surfaces & Inset Panels',
    ratio: '15% Structure',
    category: 'base'
  },
  {
    name: 'Graphite',
    hex: '#121417',
    role: 'Elevated Cards & Interactive Surfaces',
    ratio: '15% Structure',
    category: 'base'
  },
  {
    name: 'Primary Text',
    hex: '#F5F5F0',
    role: 'Hero Headings, High-Priority Copy',
    ratio: 'Contrast 17.8:1 (AAA)',
    category: 'text'
  },
  {
    name: 'Secondary Text',
    hex: '#A0A0A0',
    role: 'Descriptions, Body Copy, Explanations',
    ratio: 'Contrast 8.2:1 (AAA)',
    category: 'text'
  },
  {
    name: 'Tertiary Text',
    hex: '#5F6268',
    role: 'Labels, Technical Numerals, Monospace Metadata',
    ratio: 'Contrast 4.6:1 (AA)',
    category: 'text'
  },
  {
    name: 'Electric Blue',
    hex: '#5B8CFF',
    role: 'Primary Active Light & Interactive Accent Start',
    ratio: '5% Budget',
    category: 'accent'
  },
  {
    name: 'Electric Violet',
    hex: '#7C5CFF',
    role: 'Identity Core Light & State Transition Focal Glow',
    ratio: '5% Budget',
    category: 'accent'
  }
];

export const MATERIAL_LANGUAGE = [
  {
    number: '01',
    name: 'Void',
    hex: '#050505',
    description: 'Deepest absorbent black background, providing infinite contrast and space.',
    usage: 'Page root, canvas, immersive hero void'
  },
  {
    number: '02',
    name: 'Glass',
    hex: 'rgba(18, 20, 23, 0.70)',
    description: 'Frosted structural membrane with 16px backdrop-blur and 1px 7% opacity hairline border.',
    usage: 'Floating navigation, modal overlays, contextual controls'
  },
  {
    number: '03',
    name: 'Light',
    hex: 'rgba(124, 92, 255, 0.25)',
    description: 'Diffused electric luminescence, restrained strictly to active states and focal points.',
    usage: 'Intelligent cursor halo, identity core nodes, focus rings'
  },
  {
    number: '04',
    name: 'Technical Surface',
    hex: 'rgba(255, 255, 255, 0.03)',
    description: 'Precision architectural grid lines (64px & 24px) reacting subtly to cursor proximity.',
    usage: 'Engineering canvases, constellation planes, schematics'
  }
];

export const TYPOGRAPHY_SCALE = [
  {
    level: 'LEVEL 01',
    name: 'Hero Display',
    font: 'Syne (800 ExtraBold)',
    size: '64px – 96px',
    tracking: '-0.03em',
    example: 'BUILDING INTELLIGENT SYSTEMS.',
    role: 'Dominant anchor of the primary viewport'
  },
  {
    level: 'LEVEL 02',
    name: 'Section Title',
    font: 'Syne (700 Bold)',
    size: '32px – 44px',
    tracking: '-0.02em',
    example: 'FEATURED ARCHITECTURE',
    role: 'Major chapter demarcations'
  },
  {
    level: 'LEVEL 03',
    name: 'Project Heading',
    font: 'Syne (700 Bold)',
    size: '22px – 28px',
    tracking: '-0.01em',
    example: 'AROGYASEVA HEALTH ENGINE',
    role: 'Editorial project and system titles'
  },
  {
    level: 'LEVEL 04',
    name: 'Body Prose',
    font: 'Plus Jakarta Sans (400/500)',
    size: '15px – 16px',
    tracking: 'normal',
    example: 'Engineering high-resilience digital architecture combining real-time machine intelligence with cloud infrastructure.',
    role: 'Comfortable, highly readable long-form thought'
  },
  {
    level: 'LEVEL 05',
    name: 'Technical Metadata',
    font: 'JetBrains Mono (500)',
    size: '11px – 13px',
    tracking: '+0.05em (Uppercase)',
    example: '01 / ARCHITECTURE · CLOUD NATIVE · 2026',
    role: 'Monospace data, tabular metrics, and indices'
  }
];

export const MOTION_PROFILES = [
  {
    tier: 'Micro',
    duration: '150 – 250ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    application: 'Button hover, focus rings, link underlines, toggles'
  },
  {
    tier: 'Normal',
    duration: '400 – 700ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    application: 'Card expand, tab transitions, navigation slide'
  },
  {
    tier: 'Cinematic',
    duration: '800 – 1400ms',
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    application: 'Hero section entry, Identity Core morph, page routing'
  },
  {
    tier: 'Ambient',
    duration: '4 – 15s',
    easing: 'linear / ease-in-out',
    application: 'Atmospheric light shift, orbital rotation, background grid drift'
  }
];

export const CURSOR_STATES: CursorStateDef[] = [
  {
    id: 'default',
    label: 'Default State',
    visual: 'Small 4px dot + 32px translucent ring',
    behavior: 'Smooth fluid lerp following pointer across void'
  },
  {
    id: 'link',
    label: 'Navigation Link',
    visual: 'Ring expands to 48px with soft violet tint',
    behavior: 'Attracts slightly toward link typography'
  },
  {
    id: 'button',
    label: 'Interactive Button',
    visual: 'Magnetic suction effect; ring bounds button perimeter',
    behavior: 'Magnetic snap within 20px threshold'
  },
  {
    id: 'project',
    label: 'Project Showcase',
    visual: 'Ring expands to 72px with label "OPEN ↗"',
    behavior: 'Signals high-value case study expansion',
    cursorLabel: 'OPEN ↗'
  },
  {
    id: 'image',
    label: 'Visual Artwork / Spec',
    visual: 'Ring expands with label "EXPLORE"',
    behavior: 'Indicates media zoom or inspection',
    cursorLabel: 'EXPLORE'
  },
  {
    id: 'drag',
    label: 'Interactive Canvas / 3D',
    visual: 'Ring with horizontal arrows "DRAG ↔"',
    behavior: 'Signifies spatial rotation or orbital drag',
    cursorLabel: 'DRAG ↔'
  },
  {
    id: 'disabled',
    label: 'Disabled Element',
    visual: 'Subtle dimmed ring with reduced opacity',
    behavior: 'Communicates inert or non-clickable state'
  }
];
