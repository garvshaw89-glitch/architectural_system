import React, { useEffect, useState } from 'react';
import { useEnvironment, CursorMode } from '../../context/EnvironmentContext';
import { useScrollSystem } from '../../design/ScrollContext';

export const CursorSystem: React.FC = () => {
  const { mouseX, mouseY, cursorMode, isTouchDevice } = useEnvironment();
  const { prefersReducedMotion } = useScrollSystem();
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });

  // Spring lerp for the outer ring so it flows naturally behind the inner point
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setRingPos((prev) => {
        const nextX = lerp(prev.x, mouseX, 0.22);
        const nextY = lerp(prev.y, mouseY, 0.22);
        return { x: nextX, y: nextY };
      });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [mouseX, mouseY, isTouchDevice, prefersReducedMotion]);

  // Disable completely on mobile touch
  if (isTouchDevice) return null;

  // Don't render until first mouse move
  if (mouseX < 0 || mouseY < 0) return null;

  const isExpanded = cursorMode !== 'default';
  const labelText = {
    default: '',
    view: 'VIEW',
    open: 'OPEN ↗',
    explore: 'EXPLORE',
    visit: 'VISIT ↗',
    drag: 'DRAG ↔',
  }[cursorMode];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-50 overflow-hidden"
    >
      {/* 01: Inner Light Point (5px-7px, NEVER disappears, instantaneous response) */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-[#F5F5F0] -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75"
        style={{
          left: `${mouseX}px`,
          top: `${mouseY}px`,
          boxShadow: '0 0 8px rgba(245, 245, 240, 0.9)',
        }}
      />

      {/* 02: Outer Spring-Lerped Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ease-out z-40 ${
          isExpanded
            ? 'w-16 h-16 bg-[#101216]/85 border border-[#5B8CFF]/70 backdrop-blur-md shadow-[0_0_30px_rgba(91,140,255,0.35)]'
            : 'w-9 h-9 border border-white/25 bg-white/[0.02]'
        }`}
        style={{
          left: prefersReducedMotion ? `${mouseX}px` : `${ringPos.x}px`,
          top: prefersReducedMotion ? `${mouseY}px` : `${ringPos.y}px`,
        }}
      >
        {isExpanded && (
          <span className="font-mono text-[9px] font-bold text-[#F5F5F0] tracking-widest uppercase px-1 text-center select-none animate-in fade-in zoom-in-95 duration-150">
            {labelText}
          </span>
        )}
      </div>
    </div>
  );
};
