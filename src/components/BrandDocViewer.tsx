import React, { useState } from 'react';
import { 
  BRAND_IDENTITY, 
  BRAND_ARCHETYPES, 
  COLOR_PALETTE, 
  MATERIAL_LANGUAGE, 
  TYPOGRAPHY_SCALE, 
  MOTION_PROFILES, 
} from '../brand/brand-spec';
import { CursorLab } from './CursorPreview';
import { Check, Copy, Layers, Eye, Cpu, Compass, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export const BrandDocViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'archetype' | 'colors' | 'typography' | 'materials' | 'motion' | 'fullspec'>('archetype');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-8">
      {/* Header Overview */}
      <div className="border-b border-white/[0.08] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#7C5CFF] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
            <span>PHASE 01 — BRAND & ART DIRECTION MASTER SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F5F0] tracking-tight">
            GARV SHAW ARCHITECTURAL SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] mt-2 max-w-2xl font-sans leading-relaxed">
            Establishing the foundational visual identity, material physics, typography hierarchy, and 80/20 luxury discipline for the digital portfolio.
          </p>
        </div>

        {/* Status Chip */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0A0B0D] border border-white/[0.08] shrink-0 text-xs font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-[#A0A0A0]">SPEC STATUS:</span>
          <span className="text-[#F5F5F0] font-semibold">LOCKED FOR PHASE 2</span>
        </div>
      </div>

      {/* Navigation Tabs (Single line, anti-pill segmented control) */}
      <div className="flex items-center gap-1 p-1 bg-[#0A0B0D] rounded-xl border border-white/[0.08] overflow-x-auto">
        {[
          { id: 'archetype', label: '1. Brand Core & Archetype', icon: Compass },
          { id: 'colors', label: '2. Color System (60-30-10)', icon: Sparkles },
          { id: 'typography', label: '3. Typography Hierarchy', icon: BookOpen },
          { id: 'materials', label: '4. Material Language', icon: Layers },
          { id: 'motion', label: '5. Cursor & Motion', icon: Cpu },
          { id: 'fullspec', label: '6. Complete Creative Spec', icon: Eye },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono transition-all rounded-lg whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-[#121417] text-[#F5F5F0] border border-white/10 shadow-sm'
                  : 'text-[#A0A0A0] hover:text-[#F5F5F0]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#7C5CFF]' : 'text-[#5F6268]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Brand Core & Archetypes */}
      {activeTab === 'archetype' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Identity Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#0A0B0D] border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">STRATEGIC POSITIONING</span>
              <h3 className="text-2xl font-display font-bold text-[#F5F5F0]">
                {BRAND_IDENTITY.positioning}
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Generic portfolios frame themselves as "Web Developer" or "Full-Stack Engineer". Garv Shaw is positioned as a <strong className="text-[#F5F5F0]">Digital Architect</strong>: designing the convergence of high-resilience cloud infrastructure, real-time AI capabilities, and sculptural digital interfaces.
              </p>
              <div className="p-3 rounded-lg bg-[#121417] border border-white/[0.05] text-xs font-mono text-[#5B8CFF]">
                FORMULA: {BRAND_IDENTITY.supportingDescriptor}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0B0D] border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">CENTRAL BRAND IDEA</span>
              <h3 className="text-2xl font-display font-bold text-[#F5F5F0]">
                {BRAND_IDENTITY.centralIdea}
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                The interface feels alive and computationally aware. It reacts to viewport position, pointer proximity, and project selection without chaotic distraction. The golden ratio of restraint: <strong className="text-[#F5F5F0]">80% calm + 20% spectacle</strong>.
              </p>
              <div className="p-3 rounded-lg bg-[#121417] border border-white/[0.05] text-xs font-mono text-[#7C5CFF]">
                RULE: {BRAND_IDENTITY.ruleOfSpectacle}
              </div>
            </div>
          </div>

          {/* Archetype Quadrant */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">THE 4-PILLAR ARCHETYPE</span>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0]">The Identity Quadrant</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BRAND_ARCHETYPES.map((arch) => (
                <div 
                  key={arch.title} 
                  className="p-5 rounded-xl bg-[#0A0B0D] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold text-[#5B8CFF]">
                        // 0{BRAND_ARCHETYPES.indexOf(arch) + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <h5 className="text-lg font-display font-bold text-[#F5F5F0] mb-2">{arch.title}</h5>
                    <p className="text-xs text-[#A0A0A0] mb-4 leading-relaxed">{arch.descriptor}</p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.04]">
                    {arch.traits.map((t) => (
                      <div key={t} className="text-[11px] font-mono text-[#5F6268] flex items-center gap-1.5">
                        <span className="text-[#7C5CFF]">›</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Color System */}
      {activeTab === 'colors' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="p-6 rounded-xl bg-[#0A0B0D] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">BUDGET ALLOCATION</span>
              <h3 className="text-xl font-display font-bold text-[#F5F5F0] mt-1">60-30-10 Color Architecture</h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
                60% Base Obsidian Canvas · 30% Structural Graphite Surfaces · 10% High-Intent Electric Accent
              </p>
            </div>
            <div className="h-6 w-full md:w-64 rounded-md overflow-hidden flex border border-white/10 shrink-0">
              <div className="w-[60%] bg-[#050505] flex items-center justify-center text-[9px] font-mono text-zinc-500 border-r border-white/5">60%</div>
              <div className="w-[30%] bg-[#121417] flex items-center justify-center text-[9px] font-mono text-zinc-400 border-r border-white/5">30%</div>
              <div className="w-[10%] bg-[#7C5CFF] flex items-center justify-center text-[9px] font-mono text-white font-bold">10%</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COLOR_PALETTE.map((color) => (
              <div
                key={color.name}
                onClick={() => handleCopy(color.hex)}
                className="p-4 rounded-xl bg-[#0A0B0D] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer group"
              >
                <div 
                  className="w-full h-24 rounded-lg mb-3 border border-white/10 flex items-end justify-end p-2 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                >
                  <button className="p-1.5 rounded-md bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedHex === color.hex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-display font-bold text-[#F5F5F0]">{color.name}</span>
                  <span className="text-xs font-mono text-[#5B8CFF]">{color.hex}</span>
                </div>
                <p className="text-xs text-[#A0A0A0] mb-2">{color.role}</p>
                <div className="text-[10px] font-mono text-[#5F6268] pt-2 border-t border-white/[0.04]">
                  {color.ratio}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Typography */}
      {activeTab === 'typography' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#0A0B0D] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#5B8CFF]">PRIMARY DISPLAY FACE</span>
              <h4 className="text-xl font-display font-bold text-[#F5F5F0] mt-1">Syne</h4>
              <p className="text-xs text-[#A0A0A0] mt-2">
                Geometric, architectural, confident. Reserved for Level 01 hero impact and section chapter heads.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0A0B0D] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#7C5CFF]">PRIMARY BODY PROSE</span>
              <h4 className="text-xl font-sans font-bold text-[#F5F5F0] mt-1">Plus Jakarta Sans</h4>
              <p className="text-xs text-[#A0A0A0] mt-2">
                Pristine geometric clarity with warm humanist apertures. Optimal reading measure at 65ch.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0A0B0D] border border-white/[0.08]">
              <span className="text-xs font-mono text-zinc-400">DATA & TECHNICAL OUTLIER</span>
              <h4 className="text-xl font-mono font-bold text-[#F5F5F0] mt-1">JetBrains Mono</h4>
              <p className="text-xs text-[#A0A0A0] mt-2">
                Engineering precision, tabular numerical alignment, coordinates, and section numbering.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">
              TYPE SCALE HIERARCHY
            </div>
            {TYPOGRAPHY_SCALE.map((spec) => (
              <div 
                key={spec.level}
                className="p-6 rounded-xl bg-[#0A0B0D] border border-white/[0.06] hover:border-white/15 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5B8CFF] font-semibold">{spec.level}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-[#F5F5F0]">{spec.name}</span>
                  </div>
                  <span className="text-[#5F6268]">{spec.font} // {spec.size}</span>
                </div>

                <div className="py-2 text-[#F5F5F0] overflow-x-auto">
                  {spec.level === 'LEVEL 01' && (
                    <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter">
                      {spec.example}
                    </div>
                  )}
                  {spec.level === 'LEVEL 02' && (
                    <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                      {spec.example}
                    </div>
                  )}
                  {spec.level === 'LEVEL 03' && (
                    <div className="font-display text-xl sm:text-2xl font-bold">
                      {spec.example}
                    </div>
                  )}
                  {spec.level === 'LEVEL 04' && (
                    <div className="font-sans text-base text-[#A0A0A0] max-w-2xl leading-relaxed">
                      {spec.example}
                    </div>
                  )}
                  {spec.level === 'LEVEL 05' && (
                    <div className="font-mono text-xs text-[#5F6268] tracking-widest uppercase">
                      {spec.example}
                    </div>
                  )}
                </div>

                <div className="text-[11px] font-mono text-[#5F6268] pt-2 border-t border-white/[0.04]">
                  FUNCTION: {spec.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Materials */}
      {activeTab === 'materials' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MATERIAL_LANGUAGE.map((mat) => (
              <div 
                key={mat.number}
                className="p-6 rounded-xl bg-[#0A0B0D] border border-white/[0.08] space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#7C5CFF]">MATERIAL // {mat.number}</span>
                  <span className="text-xs font-mono text-[#5F6268]">{mat.hex}</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-[#F5F5F0]">{mat.name}</h4>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{mat.description}</p>
                <div className="p-3 rounded-lg bg-[#050505] border border-white/[0.05] text-xs font-mono text-[#5F6268]">
                  APPLICATION: {mat.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Motion & Cursor */}
      {activeTab === 'motion' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <CursorLab />

          <div>
            <div className="mb-4">
              <span className="text-xs font-mono text-[#5F6268] uppercase tracking-wider">PHYSICS & LATENCY</span>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0]">Motion Timing Budgets</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOTION_PROFILES.map((prof) => (
                <div key={prof.tier} className="p-5 rounded-xl bg-[#0A0B0D] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-display font-bold text-[#F5F5F0]">{prof.tier}</span>
                    <span className="text-xs font-mono text-[#5B8CFF]">{prof.duration}</span>
                  </div>
                  <p className="text-xs text-[#A0A0A0]">{prof.application}</p>
                  <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono text-[#5F6268] truncate">
                    {prof.easing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Complete Creative Spec */}
      {activeTab === 'fullspec' && (
        <div className="p-6 sm:p-8 rounded-xl bg-[#0A0B0D] border border-white/[0.08] space-y-6 font-mono text-xs text-[#A0A0A0] leading-relaxed">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <span className="text-[#F5F5F0] font-bold">GARV_SHAW_PHASE_01_LOCKED_SPECIFICATION.TXT</span>
            <span className="text-emerald-400">STATUS: APPROVED FOR IMPLEMENTATION</span>
          </div>

          <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto bg-[#050505] p-6 rounded-lg border border-white/[0.06]">
{`================================================================================
GARV SHAW — DIGITAL ARCHITECT SPECIFICATION (PHASE 01 LOCKED)
================================================================================

1. BRAND TAXONOMY
   - Primary Wordmark : GARV SHAW
   - Compact Mark     : G
   - Top Bar Lockup   : G / GARV SHAW
   - Positioning      : DIGITAL ARCHITECT (AI × CLOUD × SOFTWARE)
   - Mission          : Building intelligent digital systems.
   - Central Concept  : INTELLIGENCE IN MOTION

2. AESTHETIC POLARITY & DESIGN EQUATION
   LUXURY + EDITORIAL + ARCHITECTURE + TECHNOLOGY + MOTION + AI/3D
   = GARV DIGITAL EXPERIENCE
   
   - 80% Calm / 20% Spectacle discipline.
   - Zero-Pill Rule: No static capsules or candy tags; use clean typographic dividers.
   - Anti-Slop Rule: No mechanical "//" comment headers or fake "SYNTHEX v4.8" tags.
   - Real Viewport Anchor: Single dominant headline per viewport frame.

3. COLOR TOKENS (60-30-10 DISTRIBUTION)
   - Obsidian Base       : #050505 (60% Canvas)
   - Deep Graphite       : #0A0B0D (15% Secondary Surface)
   - Graphite Card       : #121417 (15% Interactive Elevation)
   - Electric Blue       : #5B8CFF (5% Focal Accent)
   - Electric Violet     : #7C5CFF (5% Identity Core Glow)
   - Primary Text        : #F5F5F0 (Contrast 17.8:1 AAA)
   - Secondary Text      : #A0A0A0 (Contrast 8.2:1 AAA)
   - Tertiary Text       : #5F6268 (Contrast 4.6:1 AA)

4. TYPOGRAPHY ARCHITECTURE
   - Display Face        : Syne (700, 800)
   - Body Prose Face     : Plus Jakarta Sans (400, 500)
   - Technical Monospace : JetBrains Mono (500)

5. SIGNATURE VISUAL
   - THE IDENTITY CORE: Dynamic orbital concentric rings with morphing states:
     G -> GARV -> AI -> CLOUD -> CODE -> SYSTEM

6. CURSOR SYSTEM
   - Persistent dual-layer cursor (4px white dot + 32px dampened aura).
   - 7 defined states: Default, Link, Button, Project (OPEN ↗), Image (EXPLORE),
     Drag (DRAG ↔), Disabled. Never disappears.`}
          </pre>
        </div>
      )}
    </div>
  );
};
