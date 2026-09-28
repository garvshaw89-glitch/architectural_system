/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProvider } from './design/ScrollContext';
import { EnvironmentProvider } from './context/EnvironmentContext';
import { AtmosphericEnvironment } from './components/hero/AtmosphericEnvironment';
import { CursorSystem } from './components/hero/CursorSystem';
import { Navigation } from './components/navigation/Navigation';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EngineeringSection } from './components/engineering/EngineeringSection';
import { ThinkingSection } from './components/thinking/ThinkingSection';
import { ContactSection } from './components/contact/ContactSection';
import { LoadingExperience } from './components/hero/LoadingExperience';
import { DesignSystemShowcase } from './components/design-system/DesignSystemShowcase';
import { BrandDocViewer } from './components/BrandDocViewer';
import { IdentityState } from './components/hero/IdentityCore';
import { Layers, LayoutGrid, X, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeInspector, setActiveInspector] = useState<'none' | 'design-system' | 'brand-spec'>('none');
  const [activeIdentityState, setActiveIdentityState] = useState<IdentityState>('GARV');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGithubClick = () => {
    window.open('https://github.com/garvshaw89-glitch', '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollProvider>
      <EnvironmentProvider>
        {/* 00: Loading / System Initialization */}
        {loading && <LoadingExperience onComplete={() => setLoading(false)} />}

        <div className="min-h-screen bg-[#050505] text-[#F5F5F0] selection:bg-[#5B8CFF]/30 selection:text-white relative overflow-x-hidden">
          {/* Global Atmospheric Environment */}
          <AtmosphericEnvironment />

          {/* Persistent Dual-Layer Intelligent Cursor */}
          <CursorSystem />

          {/* Primary Architectural Navigation */}
          <Navigation onNavigate={scrollToSection} />

          {/* 
            GARV SHAW — LOCKED MASTER SECTION FLOW:
            01 — HERO / INTELLIGENCE IN MOTION
            02 — ABOUT / THE PERSON BEHIND THE SYSTEM
            03 — DIGITAL DNA / HOW GARV THINKS
            04 — CAPABILITIES / WHAT GARV BUILDS
            05 — SELECTED WORK / PROOF
            06 — PROJECT CASE STUDIES / HOW IT WAS BUILT
            07 — ENGINEERING / UNDER THE INTERFACE
            08 — WRITING / THINKING ("EXPLORE MY THINKING")
            09 — CONTACT / COLLABORATION ("BUILD WITH ME")
            10 — FOOTER / ARCHITECTURAL SIGN-OFF
          */}
          <main>
            {/* 01: Hero / Intelligence in Motion */}
            <Hero
              onExploreClick={() => scrollToSection('work')}
              onGithubClick={handleGithubClick}
              onIdentityChange={(state) => setActiveIdentityState(state)}
            />

            {/* 02, 03, 04: About (The Person Behind the System) + Digital DNA + Capabilities */}
            <AboutSection />

            {/* 05, 06: Selected Work + Project Case Studies */}
            <ProjectsSection />

            {/* 07: Engineering / Under the Interface (System Topology, Constellation, GitHub Telemetry, Stack Matrix, Terminal) */}
            <EngineeringSection />

            {/* 08: Writing / Thinking ("EXPLORE MY THINKING") */}
            <ThinkingSection />

            {/* 09: Contact / Collaboration ("BUILD WITH ME") */}
            <ContactSection />
          </main>

          {/* 10: Architectural Footer & Colophon */}
          <footer className="relative z-10 border-t border-white/[0.08] bg-[#050505] pt-16 pb-12 px-6 sm:px-12 text-xs font-mono text-[#6B6E75] space-y-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
              {/* Brand Colophon */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#101216] border border-white/15 flex items-center justify-center font-display font-bold text-sm text-[#F5F5F0]">
                    G
                  </div>
                  <div>
                    <span className="text-[#F5F5F0] font-bold text-sm block">GARV SHAW</span>
                    <span className="text-[10px] text-[#A5A7AC] uppercase tracking-wider">
                      DIGITAL ARCHITECT // 2026
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-[#A5A7AC] max-w-sm leading-relaxed">
                  Building intelligent digital systems at the intersection of AI, cloud computing,
                  software engineering, and sensory restraint.
                </p>
              </div>

              {/* Fast Architectural Navigation Index */}
              <div className="md:col-span-4 space-y-3">
                <span className="text-[10px] text-[#5B8CFF] uppercase tracking-wider block font-semibold">
                  // DIRECTORY INDEX
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    01 / HERO
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    02 / ABOUT
                  </button>
                  <button
                    onClick={() => scrollToSection('capabilities')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    03 / CAPABILITIES
                  </button>
                  <button
                    onClick={() => scrollToSection('work')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    04 / SELECTED WORK
                  </button>
                  <button
                    onClick={() => scrollToSection('engineering')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    05 / ENGINEERING
                  </button>
                  <button
                    onClick={() => scrollToSection('thoughts')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    06 / THOUGHTS
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors"
                  >
                    07 / CONTACT
                  </button>
                </div>
              </div>

              {/* Realtime System Telemetry */}
              <div className="md:col-span-3 space-y-3">
                <span className="text-[10px] text-[#A5A7AC] uppercase tracking-wider block">
                  SYSTEM TELEMETRY:
                </span>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span>ACTIVE CORE:</span>
                    <span className="text-[#5B8CFF] font-semibold">{activeIdentityState}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ARCHITECTURE:</span>
                    <span className="text-white">80% CALM / 20% SPECTACLE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SYSTEM HEALTH:</span>
                    <span className="text-emerald-400">100% OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Hairline & Legal Creed */}
            <div className="max-w-7xl mx-auto pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
              <div>
                © 2026 GARV SHAW · ALL RIGHTS RESERVED
              </div>
              <div className="flex items-center gap-3 text-[#A5A7AC]">
                <span>TYPESCRIPT RIGOR</span>
                <span>·</span>
                <span>ZERO PLACEHOLDER DATA</span>
                <span>·</span>
                <span>SWISS TYPOGRAPHY</span>
              </div>
            </div>
          </footer>

          {/* Floating System Inspector Trigger HUD */}
          <aside className="fixed bottom-6 right-6 z-40 flex items-center p-1.5 rounded-xl bg-[#08090B]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() =>
                  setActiveInspector(activeInspector === 'design-system' ? 'none' : 'design-system')
                }
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeInspector === 'design-system'
                    ? 'bg-[#15171B] text-[#F5F5F0] border border-white/15'
                    : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
                }`}
                title="Open Phase 02 Design System Workbench"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#5B8CFF]" />
                <span className="hidden sm:inline">Design System</span>
              </button>

              <button
                onClick={() =>
                  setActiveInspector(activeInspector === 'brand-spec' ? 'none' : 'brand-spec')
                }
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeInspector === 'brand-spec'
                    ? 'bg-[#15171B] text-[#F5F5F0] border border-white/15'
                    : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
                }`}
                title="Open Phase 01 Brand & Art Direction Specification"
              >
                <Layers className="w-3.5 h-3.5 text-[#795CFF]" />
                <span className="hidden sm:inline">Brand Spec</span>
              </button>
            </div>
          </aside>

          {/* Overlay Drawer for Design System / Brand Spec Inspection */}
          {activeInspector !== 'none' && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-300"
            >
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#5B8CFF]">
                    <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
                    <span>
                      {activeInspector === 'design-system'
                        ? 'PHASE 02 // DESIGN SYSTEM WORKBENCH'
                        : 'PHASE 01 // BRAND & ART DIRECTION SPECIFICATION'}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveInspector('none')}
                    className="p-2 rounded-lg bg-[#101216] border border-white/10 text-[#F5F5F0] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {activeInspector === 'design-system' ? (
                  <DesignSystemShowcase />
                ) : (
                  <BrandDocViewer />
                )}
              </div>
            </div>
          )}
        </div>
      </EnvironmentProvider>
    </ScrollProvider>
  );
}
