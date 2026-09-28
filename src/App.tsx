/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewportPreview } from './components/ViewportPreview';
import { BrandDocViewer } from './components/BrandDocViewer';
import { CursorPreview } from './components/CursorPreview';
import { DesignSystemShowcase } from './components/design-system/DesignSystemShowcase';
import { ScrollProvider } from './design/ScrollContext';
import {
  AmbientGradient,
  TechnicalGrid,
  NoiseOverlay,
  CursorLight,
} from './components/design-system/background/BackgroundLayers';
import { LayoutGrid, Compass, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'system' | 'viewport' | 'brand'>('system');
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-[#050505] text-[#F5F5F0] selection:bg-[#795CFF]/30 selection:text-white relative overflow-x-hidden">
        {/* Layer 01: Ambient Gradient Background */}
        <AmbientGradient intensity="normal" />

        {/* Layer 02: Architectural Technical Grid */}
        <TechnicalGrid opacity={0.035} />

        {/* Layer 03: Film Grain Noise Overlay */}
        <NoiseOverlay opacity={0.03} />

        {/* Layer 04: Intelligent Cursor Light */}
        <CursorLight x={mousePos.x} y={mousePos.y} />

        {/* Layer 05: Persistent Intelligent Cursor Ring */}
        <CursorPreview enabled={true} />

        {/* Floating Master Mode Switcher HUD */}
        <aside className="fixed bottom-6 right-6 z-40 flex items-center p-1.5 rounded-xl bg-[#08090B]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => setActiveTab('system')}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'system'
                  ? 'bg-[#15171B] text-[#F5F5F0] border border-white/15 font-medium'
                  : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
              }`}
              title="Phase 02 Design System Showcase & Workbench"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span>02 / Design System</span>
            </button>

            <button
              onClick={() => setActiveTab('viewport')}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'viewport'
                  ? 'bg-[#15171B] text-[#F5F5F0] border border-white/15 font-medium'
                  : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
              }`}
              title="First Viewport Target (Section 30)"
            >
              <Compass className="w-3.5 h-3.5 text-[#795CFF]" />
              <span>Target Viewport</span>
            </button>

            <button
              onClick={() => setActiveTab('brand')}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'brand'
                  ? 'bg-[#15171B] text-[#F5F5F0] border border-white/15 font-medium'
                  : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
              }`}
              title="Phase 01 Brand & Art Direction Spec"
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>01 / Brand Spec</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
          {/* Phase 02 Status Bar */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#08090B]/80 border border-white/[0.06] text-xs font-mono text-[#A5A7AC] backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
              <span className="text-[#F5F5F0] font-semibold">GARV SHAW ARCHITECTURAL PLATFORM</span>
              <span className="text-zinc-600">·</span>
              <span className="text-[#5B8CFF]">PHASE 02: DESIGN SYSTEM LOCKED</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-zinc-400 hidden md:inline">12-COL GRID · 80/20 CALM</span>
              <span className="text-zinc-600 hidden md:inline">·</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FOUNDATION READY FOR HERO</span>
              </div>
            </div>
          </header>

          {/* Tab 1: Phase 02 Design System Test Page & Interactive Workbench */}
          {activeTab === 'system' && (
            <main className="animate-in fade-in duration-300">
              <DesignSystemShowcase />
            </main>
          )}

          {/* Tab 2: Target First Viewport (Section 30) */}
          {activeTab === 'viewport' && (
            <main className="animate-in fade-in duration-300 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B6E75]">
                <div className="flex items-center gap-2">
                  <span>TARGET VIEWPORT 1.0</span>
                  <span>—</span>
                  <span className="text-[#A5A7AC]">First Screen Experience with Identity Core</span>
                </div>
                <span>1440PX–1600PX CONTENT BOUNDS</span>
              </div>
              <ViewportPreview onExploreClick={() => setActiveTab('system')} />
            </main>
          )}

          {/* Tab 3: Phase 01 Brand & Art Direction Specification */}
          {activeTab === 'brand' && (
            <main className="animate-in fade-in duration-300">
              <BrandDocViewer />
            </main>
          )}
        </div>
      </div>
    </ScrollProvider>
  );
}
