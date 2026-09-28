import React, { useState } from 'react';
import { 
  COLOR_TOKENS, 
  TYPOGRAPHY_TOKENS, 
  SPACING_SCALE, 
  GRID_SPEC, 
  RADIUS_TOKENS, 
  GLASS_SPEC, 
  SHADOW_TOKENS, 
  GLOW_TOKENS, 
  MOTION_TOKENS 
} from '../../design/tokens';
import { Button } from './Button';
import { MagneticButton } from './MagneticButton';
import { IconButton } from './IconButton';
import { SectionLabel } from './SectionLabel';
import { Heading } from './Heading';
import { Text } from './Text';
import { Divider } from './Divider';
import { GlassPanel } from './GlassPanel';
import { ProjectMeta } from './ProjectMeta';
import { ImageReveal } from './ImageReveal';
import { 
  Check, 
  Copy, 
  Sliders, 
  Layers, 
  Maximize2, 
  Move, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  Eye,
  Grid,
  Type,
  Code
} from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'all' | 'colors' | 'type' | 'grid' | 'components' | 'motion' | 'surfaces'>('all');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [customText, setCustomText] = useState('BUILDING INTELLIGENT SYSTEMS.');
  const [reducedMotionSim, setReducedMotionSim] = useState(false);
  const [gridOverlayActive, setGridOverlayActive] = useState(false);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="space-y-16 max-w-7xl mx-auto py-8">
      {/* Design System Header & Quick Inspection Bar */}
      <div className="border-b border-white/[0.08] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#5B8CFF] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span>PHASE 02 — DESIGN SYSTEM & VISUAL FOUNDATION WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F5F5F0] tracking-tight">
            GARV DESIGN SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-[#A5A7AC] mt-2 max-w-2xl leading-relaxed">
            The canonical foundation for all upcoming sections: semantic tokens, editorial typography scale, 12-column architectural grid, 80/20 calm restraint, and physical motion easing.
          </p>
        </div>

        {/* Global Inspection Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#08090B] border border-white/[0.08] text-xs font-mono">
          <button
            onClick={() => setGridOverlayActive(!gridOverlayActive)}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              gridOverlayActive ? 'bg-[#5B8CFF] text-[#050505] font-semibold' : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>12-Col Grid: {gridOverlayActive ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setReducedMotionSim(!reducedMotionSim)}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              reducedMotionSim ? 'bg-[#795CFF] text-white font-semibold' : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Reduced Motion: {reducedMotionSim ? 'SIMULATED' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Grid Overlay Guide when activated */}
      {gridOverlayActive && (
        <div className="fixed inset-0 z-50 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#5B8CFF]/[0.03] border-x border-[#5B8CFF]/15 flex items-start justify-center pt-4 text-[10px] font-mono text-[#5B8CFF]/40"
              >
                COL {i + 1}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Filter Switcher */}
      <div className="flex items-center gap-1 p-1 bg-[#08090B] rounded-xl border border-white/[0.08] overflow-x-auto text-xs font-mono">
        {[
          { id: 'all', label: 'All Foundation Modules' },
          { id: 'colors', label: '01 / Colors & Accent' },
          { id: 'type', label: '02 / Typography Scale' },
          { id: 'surfaces', label: '03 / Surfaces & Glass' },
          { id: 'components', label: '04 / Component Library' },
          { id: 'grid', label: '05 / Grid & Spacing' },
          { id: 'motion', label: '06 / Motion & Latency' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as any)}
            className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
              activeSection === tab.id
                ? 'bg-[#15171B] text-[#F5F5F0] border border-white/10 shadow-sm font-medium'
                : 'text-[#6B6E75] hover:text-[#A5A7AC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 01. COLOR TOKENS */}
      {(activeSection === 'all' || activeSection === 'colors') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={1} label="COLOR TOKENS & ACCENT SYSTEM" category="SEMANTIC SPECIFICATION" />
            <span className="text-xs font-mono text-[#6B6E75]">60-30-10 ARCHITECTURAL BUDGET</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { name: 'VOID', hex: COLOR_TOKENS.void, role: 'Base Canvas Void', contrast: '60% Budget' },
              { name: 'OBSIDIAN', hex: COLOR_TOKENS.obsidian, role: 'Secondary Surfaces', contrast: '15% Budget' },
              { name: 'GRAPHITE', hex: COLOR_TOKENS.graphite, role: 'Elevated Cards', contrast: '15% Budget' },
              { name: 'SURFACE', hex: COLOR_TOKENS.surface, role: 'Interactive Cards', contrast: '10% Structure' },
              { name: 'SURFACE-ELEVATED', hex: COLOR_TOKENS.surfaceElevated, role: 'Modal & Popover', contrast: '5% Depth' },
            ].map((c) => (
              <div
                key={c.name}
                onClick={() => handleCopy(c.hex)}
                className="p-3.5 rounded-lg bg-[#08090B] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer group"
              >
                <div
                  className="w-full h-16 rounded-md mb-2.5 border border-white/10 flex items-end justify-end p-1.5 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: c.hex }}
                >
                  <button className="p-1 rounded bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedHex === c.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#F5F5F0]">{c.name}</span>
                  <span className="text-[11px] font-mono text-[#5B8CFF]">{c.hex}</span>
                </div>
                <div className="text-[10px] text-[#A5A7AC] mt-0.5">{c.role}</div>
                <div className="text-[9px] font-mono text-[#6B6E75] mt-1 pt-1 border-t border-white/[0.04]">
                  {c.contrast}
                </div>
              </div>
            ))}
          </div>

          {/* Text and Accent Tokens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {[
              { name: 'TEXT-PRIMARY', hex: COLOR_TOKENS.textPrimary, role: 'Headings, Focal Copy', ratio: 'Contrast 17.8:1 (AAA)' },
              { name: 'TEXT-SECONDARY', hex: COLOR_TOKENS.textSecondary, role: 'Descriptions, Body', ratio: 'Contrast 8.2:1 (AAA)' },
              { name: 'TEXT-MUTED', hex: COLOR_TOKENS.textMuted, role: 'Technical Indices, Labels', ratio: 'Contrast 4.6:1 (AA)' },
              { name: 'TEXT-DISABLED', hex: COLOR_TOKENS.textDisabled, role: 'Inert / Non-interactive', ratio: 'Contrast 2.9:1' },
            ].map((t) => (
              <div
                key={t.name}
                onClick={() => handleCopy(t.hex)}
                className="p-3.5 rounded-lg bg-[#08090B] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: t.hex }} />
                  <span className="text-xs font-mono text-[#5B8CFF]">{t.hex}</span>
                </div>
                <div className="text-xs font-mono font-bold text-[#F5F5F0]">{t.name}</div>
                <div className="text-[11px] text-[#A5A7AC] mt-0.5">{t.role}</div>
                <div className="text-[9px] font-mono text-[#6B6E75] mt-1 pt-1 border-t border-white/[0.04]">{t.ratio}</div>
              </div>
            ))}
          </div>

          {/* Accent System Swatches */}
          <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#6B6E75] uppercase">ACCENT FAMILY (ELECTRIC BLUE → VIOLET)</span>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-display font-bold text-[#F5F5F0]">10% Accent Intent Budget</span>
                <span className="text-xs text-[#A5A7AC]">— Reserved for Identity Core, active cursor states, and CTAs</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { name: 'ACCENT-500', hex: COLOR_TOKENS.accent500 },
                { name: 'ACCENT-600', hex: COLOR_TOKENS.accent600 },
                { name: 'ACCENT-LIGHT', hex: COLOR_TOKENS.accentLight },
                { name: 'VIOLET', hex: COLOR_TOKENS.violet },
              ].map((acc) => (
                <button
                  key={acc.name}
                  onClick={() => handleCopy(acc.hex)}
                  title={`Copy ${acc.name}: ${acc.hex}`}
                  className="px-3 py-1.5 rounded-md text-xs font-mono border border-white/10 flex items-center gap-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: `${acc.hex}22`, color: acc.hex }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: acc.hex }} />
                  <span>{acc.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 02. TYPOGRAPHY SYSTEM */}
      {(activeSection === 'all' || activeSection === 'type') && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-3 gap-2">
            <SectionLabel index={2} label="TYPOGRAPHY HIERARCHY" category="DISPLAY + BODY + MONOSPACE" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#6B6E75]">INTERACTIVE TEXT TESTER:</span>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="bg-[#101216] border border-white/10 rounded px-2 py-0.5 text-xs text-[#F5F5F0] font-mono focus:outline-none focus:border-[#5B8CFF]"
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Display XL */}
            <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B6E75]">
                <span className="text-[#5B8CFF] font-semibold">DISPLAY XL // HERO ANCHOR</span>
                <span>DESKTOP 96–144PX · TRACKING -0.04EM · LINE-HEIGHT 0.88</span>
              </div>
              <Heading level="display-xl" className="py-2">
                {customText}
              </Heading>
              <div className="text-[11px] font-mono text-[#6B6E75] pt-2 border-t border-white/[0.04]">
                ROLE: {TYPOGRAPHY_TOKENS.displayXL.usage}
              </div>
            </div>

            {/* Display Large */}
            <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B6E75]">
                <span className="text-[#5B8CFF] font-semibold">DISPLAY LARGE // MAJOR SECTION HEADINGS</span>
                <span>DESKTOP 64–96PX · TRACKING -0.03EM · LINE-HEIGHT 0.98</span>
              </div>
              <Heading level="display-lg" className="py-2">
                FEATURED ARCHITECTURE
              </Heading>
              <div className="text-[11px] font-mono text-[#6B6E75] pt-2 border-t border-white/[0.04]">
                ROLE: {TYPOGRAPHY_TOKENS.displayLarge.usage}
              </div>
            </div>

            {/* Heading & Subheading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-[#5B8CFF] font-semibold">
                  HEADING // PROJECT & CARD TITLES (40–64PX)
                </div>
                <Heading level="heading">AROGYASEVA HEALTH ENGINE</Heading>
                <div className="text-[11px] font-mono text-[#6B6E75] pt-1">
                  Line-height: 1.08 · Tracking: -0.025em
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-[#795CFF] font-semibold">
                  SUBHEADING // SUPPORTING DESCRIPTOR (24–32PX)
                </div>
                <Heading level="subheading">
                  High-throughput clinical diagnostics and distributed data fabric.
                </Heading>
                <div className="text-[11px] font-mono text-[#6B6E75] pt-1">
                  Line-height: Snug · Tracking: -0.015em
                </div>
              </div>
            </div>

            {/* Body Large & Body Regular */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-[#A5A7AC] font-semibold">
                  BODY LARGE // INTRODUCTORY NARRATIVE (18–22PX)
                </div>
                <Text variant="body-large" measure>
                  Architecting resilient digital systems by pairing real-time intelligence models with cloud-native infrastructure and sensory editorial design.
                </Text>
                <div className="text-[11px] font-mono text-[#6B6E75]">Line-height: 1.5 · Measure: 65ch</div>
              </div>

              <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-[#A5A7AC] font-semibold">
                  BODY REGULAR // DOCUMENTATION PROSE (15–18PX)
                </div>
                <Text variant="body" measure>
                  Every system is built upon solid mechanical constraints: low operational latency, rigorous type safety, modular micro-frontends, and zero unnecessary visual distraction.
                </Text>
                <div className="text-[11px] font-mono text-[#6B6E75]">Line-height: 1.65 · Measure: 65ch</div>
              </div>
            </div>

            {/* Technical Label Monospace */}
            <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-3">
              <div className="text-xs font-mono text-[#5B8CFF] font-semibold">
                TECHNICAL LABEL // MONOSPACE DATA (11–13PX, LETTER-SPACING 0.12EM)
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <SectionLabel index={1} label="ABOUT SYSTEM" />
                <SectionLabel index={2} label="CAPABILITIES" />
                <SectionLabel index={3} label="ENGINEERING LOGS" category="CLOUD FABRIC" />
                <SectionLabel index={4} label="CONTACT PROTOCOL" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03. SURFACES & GLASS SYSTEM */}
      {(activeSection === 'all' || activeSection === 'surfaces') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={3} label="SURFACE HIERARCHY & GLASS SYSTEM" category="3 ELEVATION LEVELS + 20PX BLUR GLASS" />
            <span className="text-xs font-mono text-[#6B6E75]">NO EXCESSIVE SHADOWS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Level 0: Void */}
            <div className="p-6 rounded-[12px] bg-[#050505] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-[#6B6E75]">SURFACE LEVEL 0</span>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0]">Void Background</h4>
              <p className="text-xs text-[#A5A7AC] leading-relaxed">
                Color: <code className="text-[#5B8CFF]">#050505</code>. Non-reflective absorbent deep space. Grounds the entire luxury experience.
              </p>
              <div className="pt-2 font-mono text-[10px] text-[#6B6E75]">Used for: Page root, hero backdrop</div>
            </div>

            {/* Level 1: Subtle Surface */}
            <div className="p-6 rounded-[12px] bg-[#08090B] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono text-[#5B8CFF]">SURFACE LEVEL 1</span>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0]">Obsidian Foundation</h4>
              <p className="text-xs text-[#A5A7AC] leading-relaxed">
                Color: <code className="text-[#5B8CFF]">#08090B</code>. Subtle structural separation for section backdrops and inset panels.
              </p>
              <div className="pt-2 font-mono text-[10px] text-[#6B6E75]">Used for: Section wrappers, grouped bands</div>
            </div>

            {/* Level 2: Elevated Surface */}
            <div className="p-6 rounded-[12px] bg-[#101216] border border-white/[0.10] shadow-soft-sm space-y-3">
              <span className="text-xs font-mono text-[#795CFF]">SURFACE LEVEL 2</span>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0]">Graphite Elevated</h4>
              <p className="text-xs text-[#A5A7AC] leading-relaxed">
                Color: <code className="text-[#5B8CFF]">#101216</code>. Elevated interactive surface with subtle depth.
              </p>
              <div className="pt-2 font-mono text-[10px] text-[#6B6E75]">Used for: Interactive cards, drawers, popups</div>
            </div>
          </div>

          {/* Canonical Glass Spec (Section 18) */}
          <div className="relative p-8 rounded-[20px] bg-gradient-to-r from-[#050505] via-[#101216] to-[#050505] overflow-hidden border border-white/[0.06]">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-[#5B8CFF]/20 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-[#795CFF]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto text-center space-y-4">
              <GlassPanel radius="md" glow="accent" className="p-6 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#5B8CFF]">
                    CANONICAL GLASS SPECIFICATION (PHASE 02 SEC 18)
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6E75]">20PX BACKDROP-BLUR</span>
                </div>
                <div className="font-mono text-xs text-zinc-300 space-y-1 bg-[#050505]/70 p-3 rounded-md border border-white/[0.08]">
                  <div>background: rgba(15, 17, 20, 0.65);</div>
                  <div>backdrop-filter: blur(20px);</div>
                  <div>border: 1px solid rgba(255, 255, 255, 0.08);</div>
                </div>
                <p className="text-xs text-[#A5A7AC]">
                  Strict usage: Floating navigation, modals, and special HUD controls only. Never slapped on every single card.
                </p>
              </GlassPanel>
            </div>
          </div>
        </section>
      )}

      {/* 04. REUSABLE COMPONENT LIBRARY */}
      {(activeSection === 'all' || activeSection === 'components') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={4} label="COMPONENT LIBRARY" category="BUTTONS · METADATA · IMAGES" />
            <span className="text-xs font-mono text-[#6B6E75]">ZERO-PILL DISCIPLINE</span>
          </div>

          {/* Button System Variants */}
          <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-6">
            <div>
              <span className="text-xs font-mono text-[#6B6E75] uppercase">BUTTON SYSTEM (3 CANONICAL VARIANTS + MAGNETIC)</span>
              <h4 className="text-base font-display font-bold text-[#F5F5F0] mt-0.5">
                Physical arrow transition: 4–8px on hover
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {/* Primary */}
              <div className="space-y-1.5 text-center">
                <Button variant="primary" iconType="arrow-right">
                  EXPLORE WORK
                </Button>
                <div className="text-[10px] font-mono text-[#6B6E75]">Variant: Primary (Contrast)</div>
              </div>

              {/* Secondary */}
              <div className="space-y-1.5 text-center">
                <Button variant="secondary" iconType="arrow-up-right">
                  VIEW GITHUB
                </Button>
                <div className="text-[10px] font-mono text-[#6B6E75]">Variant: Secondary (Outline)</div>
              </div>

              {/* Text Button */}
              <div className="space-y-1.5 text-center">
                <Button variant="text" iconType="arrow-right">
                  READ CASE STUDY
                </Button>
                <div className="text-[10px] font-mono text-[#6B6E75]">Variant: Text Button (No Box)</div>
              </div>

              {/* Magnetic Button */}
              <div className="space-y-1.5 text-center">
                <MagneticButton strength={0.3}>
                  <Button variant="secondary" iconType="arrow-up-right">
                    MAGNETIC HOVER
                  </Button>
                </MagneticButton>
                <div className="text-[10px] font-mono text-[#5B8CFF]">Feature: Spring Magnetic Pull</div>
              </div>
            </div>
          </div>

          {/* ProjectMeta: Strict Zero-Pill Enforcement */}
          <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#5B8CFF] uppercase">PROJECT META SYSTEM</span>
                <h4 className="text-base font-display font-bold text-[#F5F5F0] mt-0.5">
                  Anti-AI Slop: Zero Pill Tag Rule
                </h4>
              </div>
              <span className="text-xs font-mono text-emerald-400">PASSED: NO CANDY PILLS</span>
            </div>

            <p className="text-xs text-[#A5A7AC]">
              Categories and tech stacks are rendered as pristine inline typography connected by dots and monospace metadata, not colorful rounded bubbles:
            </p>

            <div className="p-4 rounded-lg bg-[#050505] border border-white/[0.06] space-y-3">
              <ProjectMeta
                index={1}
                year={2026}
                role="LEAD ARCHITECT"
                deliverable="PRODUCTION DEPLOYMENT"
                technologies={['DISTRIBUTED AI', 'CLOUD CLUSTERS', 'NEXT-GEN UI']}
              />
              <Divider variant="subtle" />
              <ProjectMeta
                index={2}
                year={2026}
                role="CORE DEVELOPER"
                deliverable="SYSTEM PLATFORM"
                technologies={['POSTGRES', 'REALTIME SOCKETS', 'KUBERNETES']}
              />
            </div>
          </div>

          {/* Image Container Treatments (Section 25) */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-[#6B6E75] uppercase">IMAGE CONTAINER TREATMENTS</span>
              <h4 className="text-base font-display font-bold text-[#F5F5F0] mt-0.5">
                3 Distinct Architectural Framing Styles
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImageReveal
                alt="AROGYASEVA HEALTH ENGINE"
                treatment="cinematic"
                caption="01 / CINEMATIC TREATMENT"
                metadata="FULL-WIDTH · 16:9 RATIO"
                aspectRatio="16/9"
              />

              <ImageReveal
                alt="DISTRIBUTED CLOUD SCHEMATIC"
                treatment="editorial"
                caption="02 / EDITORIAL TREATMENT"
                metadata="12-COL GRID ALIGNED"
                aspectRatio="16/9"
              />

              <ImageReveal
                alt="SYSTEM IDENTITY CORE"
                treatment="floating"
                caption="03 / FLOATING TREATMENT"
                metadata="MODULAR ELEVATION"
                aspectRatio="16/9"
              />
            </div>
          </div>
        </section>
      )}

      {/* 05. GRID & SPACING */}
      {(activeSection === 'all' || activeSection === 'grid') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={5} label="GRID & SPACING ARCHITECTURE" category="12 / 8 / 4 RESPONSIVE GRID" />
            <span className="text-xs font-mono text-[#6B6E75]">MAX-WIDTH: {GRID_SPEC.maxWidth}</span>
          </div>

          {/* Grid Spec */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06]">
              <span className="text-xs font-mono text-[#5B8CFF]">DESKTOP (1200PX+)</span>
              <h4 className="text-xl font-display font-bold text-[#F5F5F0] mt-1">12 Columns</h4>
              <p className="text-xs text-[#A5A7AC] mt-1">Gutter: 32px · Page Padding: 5vw–7vw</p>
            </div>
            <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06]">
              <span className="text-xs font-mono text-[#795CFF]">TABLET (768–1199PX)</span>
              <h4 className="text-xl font-display font-bold text-[#F5F5F0] mt-1">8 Columns</h4>
              <p className="text-xs text-[#A5A7AC] mt-1">Gutter: 24px · Page Padding: 32–48px</p>
            </div>
            <div className="p-5 rounded-xl bg-[#08090B] border border-white/[0.06]">
              <span className="text-xs font-mono text-zinc-400">MOBILE (&lt; 768PX)</span>
              <h4 className="text-xl font-display font-bold text-[#F5F5F0] mt-1">4 Columns</h4>
              <p className="text-xs text-[#A5A7AC] mt-1">Gutter: 16px · Page Padding: 20–24px</p>
            </div>
          </div>

          {/* Spacing Scale */}
          <div className="p-6 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#6B6E75] uppercase">SPACING SCALE (4PX TO 240PX)</span>
                <h4 className="text-base font-display font-bold text-[#F5F5F0] mt-0.5">
                  Section Separation: 120–240px for Luxury Breathing Room
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {SPACING_SCALE.map((s) => (
                <div key={s.step} className="p-3 rounded-lg bg-[#050505] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#F5F5F0]">{s.px}px</span>
                    <span className="text-[10px] font-mono text-[#5B8CFF]">{s.step}</span>
                  </div>
                  <div
                    className="h-1 bg-[#5B8CFF]/60 rounded-full"
                    style={{ width: `${Math.min((s.px / 240) * 100, 100)}%` }}
                  />
                  <div className="text-[10px] text-[#A5A7AC] line-clamp-1">{s.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06. MOTION TOKENS */}
      {(activeSection === 'all' || activeSection === 'motion') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <SectionLabel index={6} label="MOTION TOKENS & LATENCY BUDGETS" category="RESTRICTED PHYSICAL TRANSITIONS" />
            <span className="text-xs font-mono text-[#6B6E75]">NO CARTOON BOUNCE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { tier: 'Instant', duration: MOTION_TOKENS.durations.instant, use: 'Tiny UI states, focus rings, toggles' },
              { tier: 'Fast', duration: MOTION_TOKENS.durations.fast, use: 'Button hover, arrow translate, links' },
              { tier: 'Standard', duration: MOTION_TOKENS.durations.standard, use: 'Component transitions, card drawer' },
              { tier: 'Cinematic', duration: MOTION_TOKENS.durations.cinematic, use: 'Hero reveal, section transitions' },
              { tier: 'Ambient', duration: MOTION_TOKENS.durations.ambient, use: 'Background atmosphere, slow orbital drift' },
            ].map((m) => (
              <div key={m.tier} className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-bold text-[#F5F5F0]">{m.tier}</span>
                  <span className="text-xs font-mono text-[#5B8CFF]">{m.duration}</span>
                </div>
                <p className="text-xs text-[#A5A7AC]">{m.use}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Summary Box */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-[#08090B] via-[#101216] to-[#08090B] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
        <div className="space-y-1">
          <div className="text-[#F5F5F0] font-bold">PHASE 02 DESIGN SYSTEM STATUS: VERIFIED</div>
          <div className="text-[#A5A7AC]">All tokens, components, grids, and physics rules are now available for subsequent phases.</div>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>PRODUCTION-READY FOUNDATION</span>
        </div>
      </div>
    </div>
  );
};
