/**
 * GARV SHAW DESIGN SYSTEM — TOKENS SPECIFICATION (PHASE 02)
 * Master Design Tokens: Colors, Typography, Spacing, Grids, Surfaces,
 * Glass, Shadows, Glows, Borders, Radii, Motion, Cursor, Breakpoints.
 */

export const COLOR_TOKENS = {
  // Core Surfaces
  void: '#050505',
  obsidian: '#08090B',
  graphite: '#101216',
  surface: '#15171B',
  surfaceElevated: '#1A1D22',

  // Typography Tokens
  textPrimary: '#F5F5F0',
  textSecondary: '#A5A7AC',
  textMuted: '#6B6E75',
  textDisabled: '#44474D',

  // Border Tokens
  borderSubtle: 'rgba(255, 255, 255, 0.06)',
  borderDefault: 'rgba(255, 255, 255, 0.10)',
  borderStrong: 'rgba(255, 255, 255, 0.18)',

  // Accent System (Electric Blue family + Violet secondary)
  accent500: '#5B8CFF',
  accent600: '#4777F2',
  accentLight: '#8EAEFF',
  violet: '#795CFF',
} as const;

export const GRADIENTS = {
  // Primary Interactive Accent (Identity Core, CTA, Focal illumination)
  accent: 'linear-gradient(135deg, #5B8CFF 0%, #795CFF 100%)',
  accentHover: 'linear-gradient(135deg, #8EAEFF 0%, #5B8CFF 100%)',
  
  // Ambient Atmospheric Lighting (Backgrounds only - very subtle)
  atmospheric: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91, 140, 255, 0.09) 0%, rgba(121, 92, 255, 0.06) 45%, rgba(5, 5, 5, 0) 80%)',
  atmosphericVoid: 'radial-gradient(circle at 50% 50%, rgba(16, 18, 22, 0.8) 0%, #050505 100%)',
} as const;

export const TYPOGRAPHY_TOKENS = {
  displayXL: {
    name: 'Display XL (Hero Anchor)',
    desktop: 'text-7xl lg:text-[120px] xl:text-[144px]',
    lineHeight: 'leading-[0.88]',
    letterSpacing: 'tracking-[-0.04em]',
    weight: 'font-extrabold',
    font: 'font-display',
    usage: 'Hero title: BUILDING INTELLIGENT SYSTEMS.'
  },
  displayLarge: {
    name: 'Display Large (Major Section Headings)',
    desktop: 'text-5xl lg:text-7xl xl:text-8xl',
    lineHeight: 'leading-[0.98]',
    letterSpacing: 'tracking-[-0.03em]',
    weight: 'font-bold',
    font: 'font-display',
    usage: 'Chapter demarcations: FEATURED ARCHITECTURE'
  },
  heading: {
    name: 'Heading (Section / Project)',
    desktop: 'text-3xl lg:text-4xl xl:text-5xl',
    lineHeight: 'leading-[1.1]',
    letterSpacing: 'tracking-[-0.025em]',
    weight: 'font-bold',
    font: 'font-display',
    usage: 'Project titles and primary card headers'
  },
  subheading: {
    name: 'Subheading',
    desktop: 'text-xl lg:text-2xl',
    lineHeight: 'leading-snug',
    letterSpacing: 'tracking-[-0.015em]',
    weight: 'font-medium',
    font: 'font-sans',
    usage: 'Supporting descriptions and subsection intros'
  },
  bodyLarge: {
    name: 'Body Large',
    desktop: 'text-lg lg:text-xl',
    lineHeight: 'leading-[1.5]',
    letterSpacing: 'tracking-normal',
    weight: 'font-normal',
    font: 'font-sans',
    usage: 'Lead paragraphs, introductory narrative'
  },
  body: {
    name: 'Body Regular',
    desktop: 'text-sm lg:text-base',
    lineHeight: 'leading-[1.65]',
    letterSpacing: 'tracking-normal',
    weight: 'font-normal',
    font: 'font-sans',
    usage: 'Long-form documentation and prose'
  },
  technicalLabel: {
    name: 'Technical Label',
    desktop: 'text-[11px] lg:text-xs',
    lineHeight: 'leading-[1.3]',
    letterSpacing: 'tracking-[0.12em]',
    weight: 'font-medium',
    font: 'font-mono',
    usage: 'Index counters: 01 / FEATURED WORK'
  }
} as const;

export const SPACING_SCALE = [
  { step: 'space-1', px: 4, usage: 'Micro gaps, indicator offsets' },
  { step: 'space-2', px: 8, usage: 'Icon gaps, padding in dense tags' },
  { step: 'space-3', px: 12, usage: 'Button horizontal padding, small gaps' },
  { step: 'space-4', px: 16, usage: 'Standard component internal padding' },
  { step: 'space-6', px: 24, usage: 'Card padding, grouped element gaps' },
  { step: 'space-8', px: 32, usage: 'Major panel gaps, tablet page padding' },
  { step: 'space-12', px: 48, usage: 'Subsection margins, module separation' },
  { step: 'space-16', px: 64, usage: 'Component block spacing' },
  { step: 'space-20', px: 80, usage: 'Minor section breathing room' },
  { step: 'space-24', px: 96, usage: 'Standard section vertical padding' },
  { step: 'space-32', px: 128, usage: 'Major section vertical spacing (Desktop)' },
  { step: 'space-40', px: 160, usage: 'Hero-to-content separation' },
  { step: 'space-48', px: 192, usage: 'Expansive luxury negative space' },
  { step: 'space-60', px: 240, usage: 'Maximal architectural breathing room' },
] as const;

export const GRID_SPEC = {
  columns: {
    desktop: 12,
    tablet: 8,
    mobile: 4,
  },
  maxWidth: '1600px',
  pagePadding: {
    desktop: '5vw–7vw',
    tablet: '32px–48px',
    mobile: '20px–24px',
  },
  gutters: {
    desktop: '32px',
    tablet: '24px',
    mobile: '16px',
  }
} as const;

export const RADIUS_TOKENS = {
  sm: '6px',      // technical controls, inputs, micro buttons
  md: '12px',     // cards, interactive surfaces, panels
  lg: '20px',     // large modals, media viewports, hero frame
} as const;

export const GLASS_SPEC = {
  background: 'rgba(15, 17, 20, 0.65)',
  backdropBlur: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
} as const;

export const SHADOW_TOKENS = {
  sm: '0 8px 30px rgba(0, 0, 0, 0.18)',
  md: '0 20px 60px rgba(0, 0, 0, 0.28)',
  lg: '0 30px 100px rgba(0, 0, 0, 0.40)',
} as const;

export const GLOW_TOKENS = {
  accent: '0 0 45px -8px rgba(91, 140, 255, 0.35)',
  violet: '0 0 55px -10px rgba(121, 92, 255, 0.35)',
  ambientSoft: '0 0 80px -15px rgba(91, 140, 255, 0.15)',
} as const;

export const MOTION_TOKENS = {
  durations: {
    instant: '100–150ms',
    fast: '200–300ms',
    standard: '400–600ms',
    cinematic: '700–1200ms',
    ambient: '5–20s',
  },
  easings: {
    ui: 'cubic-bezier(0.16, 1, 0.3, 1)',      // Smooth ease-out
    enter: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)', // Strong ease-out
    exit: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',  // Fast ease-in
    hero: 'cubic-bezier(0.22, 1, 0.36, 1)',    // Architectural smooth
    spring: { stiffness: 350, damping: 25 },
  }
} as const;

export const CURSOR_TOKENS = {
  sizeInner: 6,       // px
  sizeOuter: 34,      // px
  hoverScale: 50,     // px
  followSpeed: 0.14,  // Lerp factor
  accentColor: '#5B8CFF',
  opacityNormal: 0.6,
  opacityActive: 0.95,
} as const;

export const BREAKPOINTS = {
  mobile: '< 768px',
  tablet: '768px – 1199px',
  desktop: '1200px+',
  largeDesktop: '1600px+',
} as const;
