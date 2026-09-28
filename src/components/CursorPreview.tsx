import React, { useState, useEffect } from 'react';
import { CURSOR_STATES, CursorStateDef } from '../brand/brand-spec';

interface CursorPreviewProps {
  enabled?: boolean;
}

export const CursorPreview: React.FC<CursorPreviewProps> = ({ enabled = true }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<CursorStateDef>(CURSOR_STATES[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isVisible]);

  if (!enabled || !isVisible) return null;

  const isExpanded = ['project', 'image', 'drag'].includes(cursorState.id);
  const isLink = cursorState.id === 'link';
  const isButton = cursorState.id === 'button';
  const isDisabled = cursorState.id === 'disabled';

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out select-none hidden lg:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer Halo / Ring */}
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isExpanded
            ? 'w-20 h-20 bg-[#121417]/85 border border-[#7C5CFF]/60 backdrop-blur-md shadow-[0_0_25px_rgba(124,92,255,0.3)]'
            : isLink
            ? 'w-12 h-12 bg-white/[0.04] border border-[#5B8CFF]/60 shadow-[0_0_15px_rgba(91,140,255,0.25)]'
            : isButton
            ? 'w-10 h-10 border border-[#F5F5F0]/60 scale-110'
            : isDisabled
            ? 'w-6 h-6 border border-zinc-700/50 opacity-40'
            : 'w-8 h-8 border border-white/30'
        }`}
      >
        {/* Core Dot (Always present, never disappears) */}
        {!isExpanded && (
          <div
            className={`w-1.5 h-1.5 rounded-full bg-[#F5F5F0] transition-transform duration-200 ${
              isButton ? 'scale-125 bg-[#5B8CFF]' : ''
            }`}
          />
        )}

        {/* Text inside expanded state */}
        {cursorState.cursorLabel && (
          <span className="text-[10px] font-mono font-semibold tracking-wider text-[#F5F5F0] uppercase text-center px-1">
            {cursorState.cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
};

export const CursorLab: React.FC = () => {
  const [activeTestState, setActiveTestState] = useState<string>('default');

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0A0B0D] p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#5F6268]">INTERACTION MATRIX</span>
          <h4 className="text-lg font-display font-bold text-[#F5F5F0] mt-0.5">Persistent Intelligent Cursor</h4>
        </div>
        <div className="text-xs font-mono text-[#A0A0A0] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5B8CFF]" />
          <span>80% CALM DOT / 20% CONTEXTUAL MORPH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CURSOR_STATES.map((state) => {
          const isSelected = activeTestState === state.id;
          return (
            <div
              key={state.id}
              onMouseEnter={() => setActiveTestState(state.id)}
              className={`p-4 rounded-lg border transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'border-[#7C5CFF]/60 bg-[#121417] shadow-[0_0_20px_rgba(124,92,255,0.12)]'
                  : 'border-white/[0.06] bg-[#050505] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium text-[#F5F5F0]">
                  {state.label}
                </span>
                <span className="text-[10px] font-mono text-[#5F6268]">
                  STATE // {state.id.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-[#A0A0A0] mb-3 line-clamp-2">
                {state.visual}
              </p>
              <div className="pt-2 border-t border-white/[0.04] text-[11px] font-mono text-[#5F6268]">
                {state.cursorLabel ? `Label: "${state.cursorLabel}"` : state.behavior}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-lg bg-[#121417]/60 border border-white/[0.06] flex items-center justify-between text-xs text-[#A0A0A0]">
        <div className="flex items-center gap-2">
          <span className="text-[#5B8CFF] font-mono">RULE:</span>
          <span>Never disappear. Fluid continuous tracking without sudden opacity clipping.</span>
        </div>
        <span className="font-mono text-[#5F6268] text-[11px]">LERP DAMPING: 0.14</span>
      </div>
    </div>
  );
};
