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
import { SectionTransition } from './components/hero/SectionTransition';
import { LoadingExperience } from './components/hero/LoadingExperience';
import { DesignSystemShowcase } from './components/design-system/DesignSystemShowcase';
import { BrandDocViewer } from './components/BrandDocViewer';
import { IdentityState } from './components/hero/IdentityCore';
import { Layers, LayoutGrid, Sparkles, Terminal, X } from 'lucide-react';

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
    window.open('https://github.com/GarvShaw', '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollProvider>
      <EnvironmentProvider>
        {/* Optional 1.2s Initial System Boot (Phase 3 Section 47) */}
        {loading && <LoadingExperience onComplete={() => setLoading(false)} />}

        <div className="min-h-screen bg-[#050505] text-[#F5F5F0] selection:bg-[#5B8CFF]/30 selection:text-white relative overflow-x-hidden">
          {/* 01: Global Atmospheric Environment (Ambient light, architectural grid, noise, particles) */}
          <AtmosphericEnvironment />

          {/* 02: Persistent Dual-Layer Intelligent Cursor (Never disappears) */}
          <CursorSystem />

          {/* 03: Architectural Minimal Navigation (Transparent -> Floating Glass Pill) */}
          <Navigation onNavigate={scrollToSection} />

          {/* 04: Hero Landing Experience (105svh, asymmetric composition, Identity Core, independent reveals) */}
          <main>
            <Hero
              onExploreClick={() => scrollToSection('work')}
              onGithubClick={handleGithubClick}
              onIdentityChange={(state) => setActiveIdentityState(state)}
            />

            {/* 05: Cinematic Section Transition (01 / ABOUT + 02 / WORK PREVIEW) */}
            <SectionTransition />
          </main>

          {/* System Footer Note */}
          <footer className="relative z-10 border-t border-white/[0.06] bg-[#050505] py-12 px-6 sm:px-12 text-xs font-mono text-[#6B6E75] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#F5F5F0] font-semibold">GARV SHAW</span>
              <span>·</span>
              <span>DIGITAL ARCHITECT</span>
              <span>·</span>
              <span className="text-[#5B8CFF]">CORE VECTOR: {activeIdentityState}</span>
            </div>

            <div className="flex items-center gap-6">
              <span>80% CALM + 20% SPECTACLE</span>
              <span>·</span>
              <span>2026 // ALL SYSTEMS OPERATIONAL</span>
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
