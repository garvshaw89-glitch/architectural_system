import React, { useState } from 'react';
import { Project } from '../../data/projects';
import { Activity, Check, ChevronRight, Sliders, Sun, Camera, Shield, Eye, Layers } from 'lucide-react';

interface ProjectPreviewSimulatorProps {
  project: Project;
}

export const ProjectPreviewSimulator: React.FC<ProjectPreviewSimulatorProps> = ({ project }) => {
  // 1. ArogyaSeva: Clinical Triage Simulation
  const [triageUrgency, setTriageUrgency] = useState<'Standard' | 'Priority' | 'Emergency'>('Priority');
  const [triageSymptoms, setTriageSymptoms] = useState<string>('Persistent fever (39°C) + dry cough + mild dyspnea');

  // 2. ChessVerse: Chess Board Simulation
  const [chessMove, setChessMove] = useState<number>(3);
  const moves = [
    { num: '1', white: 'e4', black: 'e5', eval: '+0.2' },
    { num: '2', white: 'Nf3', black: 'Nc6', eval: '+0.3' },
    { num: '3', white: 'Bb5', black: 'a6', eval: '+0.4' },
    { num: '4', white: 'Ba4', black: 'Nf6', eval: '+0.3' },
    { num: '5', white: 'O-O', black: 'Be7', eval: '+0.5' },
  ];

  // 3. Virtual Food Photographer: Lighting & Lens Simulation
  const [kelvin, setKelvin] = useState<number>(5400); // Daylight studio
  const [aperture, setAperture] = useState<string>('f/2.8');
  const [lightingAngle, setLightingAngle] = useState<'Top Key' | 'Side Rim' | 'Diffused 45°'>('Side Rim');

  // 4. Garv Portfolio: System Tokens Simulation
  const [activeToken, setActiveToken] = useState<string>('Obsidian Void (#050505)');

  if (project.interactiveType === 'clinical-triage') {
    return (
      <div className="rounded-[16px] bg-[#050505] border border-white/[0.08] p-5 sm:p-6 space-y-5 select-none">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#5B8CFF]">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">TRIAGE INTAKE TELEMETRY SIMULATOR</span>
          </div>
          <span className="text-[#6B6E75]">LATENCY: 38MS // CLOUD RUN EDGE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#6B6E75] uppercase">URGENCY CLASSIFICATION</span>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {(['Standard', 'Priority', 'Emergency'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setTriageUrgency(level)}
                  className={`px-3 py-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                    triageUrgency === level
                      ? level === 'Emergency'
                        ? 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                        : level === 'Priority'
                        ? 'bg-[#5B8CFF]/15 border-[#5B8CFF]/60 text-[#F5F5F0]'
                        : 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                      : 'bg-[#08090B] border-white/[0.06] text-[#6B6E75] hover:text-[#A5A7AC]'
                  }`}
                >
                  <span>{level}</span>
                  {triageUrgency === level && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <span className="font-mono text-[10px] text-[#6B6E75] uppercase">SIMULATED PATIENT INGESTION</span>
            <div className="p-3.5 rounded-lg bg-[#08090B] border border-white/[0.06] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#A5A7AC]">
                <span>VITALS: BP 128/84 · HR 88BPM · SPO2 98%</span>
                <span className="text-[#5B8CFF]">TOKENIZED</span>
              </div>
              <div className="p-2.5 rounded bg-[#101216] text-[#F5F5F0] border border-white/5 text-[11px] leading-relaxed">
                "{triageSymptoms}"
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#6B6E75] pt-1 border-t border-white/[0.04]">
                <span>SPECIALIST ASSIGNED: PULMONOLOGIST #429</span>
                <span className="text-emerald-400">ENCRYPTED STREAM READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.interactiveType === 'chess-board') {
    return (
      <div className="rounded-[16px] bg-[#050505] border border-white/[0.08] p-5 sm:p-6 space-y-5 select-none">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#795CFF]">
            <Eye className="w-4 h-4" />
            <span className="font-semibold">SPATIAL POSITIONAL EVALUATION HUD</span>
          </div>
          <span className="text-[#6B6E75]">MOVE DEPTH: 18 PLY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Mini 8x8 Chess Grid Representation */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 grid grid-cols-8 grid-rows-8 border border-white/15 rounded-lg overflow-hidden shadow-2xl">
              {Array.from({ length: 64 }).map((_, idx) => {
                const row = Math.floor(idx / 8);
                const col = idx % 8;
                const isLight = (row + col) % 2 === 0;
                const isHighlight = idx === 28 || idx === 35 || idx === 43;

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-center text-[10px] font-mono transition-colors ${
                      isHighlight
                        ? 'bg-[#795CFF]/30 border border-[#795CFF]/60'
                        : isLight
                        ? 'bg-[#15171B]'
                        : 'bg-[#08090B]'
                    }`}
                  >
                    {idx === 28 && <span className="text-[#F5F5F0] font-bold">♞</span>}
                    {idx === 35 && <span className="text-[#795CFF] font-bold">♟</span>}
                    {idx === 43 && <span className="text-[#5B8CFF] font-bold">♗</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Move Sequence Controller */}
          <div className="md:col-span-6 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-[#6B6E75] uppercase block">RUY LOPEZ ANALYSIS STREAM</span>
            <div className="space-y-1 bg-[#08090B] p-3 rounded-lg border border-white/[0.06]">
              {moves.map((m, i) => (
                <div
                  key={m.num}
                  onClick={() => setChessMove(i)}
                  className={`p-1.5 rounded flex items-center justify-between cursor-pointer transition-colors ${
                    chessMove === i ? 'bg-[#795CFF]/20 text-[#F5F5F0] font-bold' : 'text-[#6B6E75] hover:text-[#A5A7AC]'
                  }`}
                >
                  <span>{m.num}. {m.white} {m.black}</span>
                  <span className="text-[10px] text-[#795CFF]">{m.eval}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-[#6B6E75] flex items-center justify-between">
              <span>POSITIONAL TENSION: OPTIMAL</span>
              <span className="text-emerald-400">ENGINE ZERO-LATENCY</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.interactiveType === 'vision-style') {
    return (
      <div className="rounded-[16px] bg-[#050505] border border-white/[0.08] p-5 sm:p-6 space-y-5 select-none">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#38BDF8]">
            <Camera className="w-4 h-4" />
            <span className="font-semibold">STUDIO LIGHTING RIG & APERTURE SIMULATOR</span>
          </div>
          <span className="text-[#6B6E75]">EDITORIAL RATIO: 16:9</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>COLOR TEMP</span>
              <span className="text-[#38BDF8] font-bold">{kelvin}K</span>
            </div>
            <input
              type="range"
              min="3200"
              max="6500"
              step="100"
              value={kelvin}
              onChange={(e) => setKelvin(Number(e.target.value))}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />
            <div className="flex items-center justify-between text-[10px] text-[#6B6E75]">
              <span>3200K (Warm Tungsten)</span>
              <span>6500K (Daylight)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>DEPTH OF FIELD</span>
              <span className="text-[#38BDF8] font-bold">{aperture}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(['f/1.8', 'f/2.8', 'f/5.6'] as const).map((ap) => (
                <button
                  key={ap}
                  onClick={() => setAperture(ap)}
                  className={`py-1.5 rounded border text-center transition-all ${
                    aperture === ap ? 'bg-[#38BDF8]/20 border-[#38BDF8]/60 text-white' : 'bg-[#08090B] border-white/10 text-[#6B6E75]'
                  }`}
                >
                  {ap}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#A5A7AC]">
              <span>LIGHTING ANGLE</span>
              <span className="text-[#38BDF8] font-bold">{lightingAngle}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(['Top Key', 'Side Rim', 'Diffused 45°'] as const).map((la) => (
                <button
                  key={la}
                  onClick={() => setLightingAngle(la)}
                  className={`py-1.5 rounded border text-center text-[10px] transition-all truncate ${
                    lightingAngle === la ? 'bg-[#38BDF8]/20 border-[#38BDF8]/60 text-white' : 'bg-[#08090B] border-white/10 text-[#6B6E75]'
                  }`}
                >
                  {la}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#08090B] border border-white/[0.04] text-[11px] font-mono text-[#A5A7AC] flex items-center justify-between">
          <span>OUTPUT PROFILE: DCI-P3 WIDE GAMUT</span>
          <span className="text-[#38BDF8]">DIFFUSION RIG READY</span>
        </div>
      </div>
    );
  }

  // Default: System tokens inspector
  return (
    <div className="rounded-[16px] bg-[#050505] border border-white/[0.08] p-5 sm:p-6 space-y-4 select-none font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2 text-[#795CFF]">
          <Layers className="w-4 h-4" />
          <span className="font-semibold">ARCHITECTURAL DESIGN TOKEN ENGINE</span>
        </div>
        <span className="text-[#6B6E75]">STATUS: SYNCHRONIZED</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'CANVAS VOID', val: '#050505', contrast: 'AAA 17.8:1' },
          { label: 'GRAPHITE CARD', val: '#101216', contrast: 'HAIRLINE 0.08' },
          { label: 'ELECTRIC ACCENT', val: '#5B8CFF', contrast: '10% BUDGET' },
          { label: 'SWISS DISPLAY', val: 'SYNE 800', contrast: '-0.04EM' },
        ].map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveToken(`${item.label} (${item.val})`)}
            className="p-3 rounded-lg bg-[#08090B] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer space-y-1"
          >
            <span className="text-[10px] text-[#6B6E75] block">{item.label}</span>
            <span className="text-sm font-bold text-[#F5F5F0] block">{item.val}</span>
            <span className="text-[9px] text-[#5B8CFF] block">{item.contrast}</span>
          </div>
        ))}
      </div>

      <div className="pt-2 text-[10px] text-[#6B6E75] flex items-center justify-between">
        <span>ACTIVE INSPECTION: {activeToken}</span>
        <span className="text-emerald-400">ZERO COMPILATION LATENCY</span>
      </div>
    </div>
  );
};
