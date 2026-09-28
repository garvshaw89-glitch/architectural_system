import React, { useMemo } from 'react';
import { useEnvironment } from '../../context/EnvironmentContext';
import { useScrollSystem } from '../../design/ScrollContext';

export const AtmosphericEnvironment: React.FC = () => {
  const { normalizedX, normalizedY, mouseX, mouseY, isTouchDevice } = useEnvironment();
  const { scrollY, scrollProgress, prefersReducedMotion } = useScrollSystem();

  // Subtle ambient light position based on mouse coordinates (Section 03 formula)
  const ambientLightStyle = useMemo(() => {
    if (prefersReducedMotion || isTouchDevice) {
      return {
        left: '50%',
        top: '35%',
      };
    }
    // Very gentle shift: x = 50% + normX * 4%, y = 35% + normY * 3% - scrollY * 0.04%
    const posX = 50 + normalizedX * 4.5;
    const posY = 35 + normalizedY * 3.5 - scrollProgress * 15;
    return {
      left: `${posX}%`,
      top: `${posY}%`,
    };
  }, [normalizedX, normalizedY, scrollProgress, prefersReducedMotion, isTouchDevice]);

  // Deterministic particles
  const particleCount = isTouchDevice ? 15 : 45;
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      baseX: (i * 17.3 + 5) % 94 + 3, // %
      baseY: (i * 23.7 + 7) % 92 + 4, // %
      size: (i % 3) * 0.8 + 1.2,
      opacity: ((i % 4) + 1.5) * 0.05,
      speed: 8 + (i % 7) * 2,
    }));
  }, [particleCount]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 01: Deep Void Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 02: Ambient Radial Light Source (Moves with mouse/scroll) */}
      <div
        className="absolute w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full blur-[140px] transition-transform duration-700 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          ...ambientLightStyle,
          background:
            'radial-gradient(circle, rgba(91, 140, 255, 0.08) 0%, rgba(121, 92, 255, 0.05) 45%, rgba(5, 5, 5, 0) 75%)',
        }}
      />

      {/* Secondary Bottom Ambient Shimmer */}
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(91, 140, 255, 0.04) 0%, transparent 70%)',
        }}
      />

      {/* 03: Architectural Grid (Thin lines, low opacity, perspective depth) */}
      <div
        className="absolute inset-0 bg-technical-grid transition-opacity duration-500"
        style={{
          opacity: 0.045 + (1 - Math.min(scrollProgress * 2, 1)) * 0.02,
          transform: `perspective(1000px) rotateX(${prefersReducedMotion ? 0 : normalizedY * -1.5}deg) translateY(${scrollY * -0.05}px)`,
        }}
      />

      {/* Grid Cursor Presence Distortion (Subtle localized light brightening the grid near mouse) */}
      {!isTouchDevice && (
        <div
          className="absolute w-[360px] h-[360px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${mouseX}px`,
            top: `${mouseY}px`,
            background:
              'radial-gradient(circle, rgba(91, 140, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)',
          }}
        />
      )}

      {/* 04: Restrained Digital Architecture Particle Field */}
      <div className="absolute inset-0">
        {particles.map((p) => {
          // Slight parallax shift based on scroll and mouse
          const offsetX = prefersReducedMotion ? 0 : normalizedX * (p.size * 5);
          const offsetY = prefersReducedMotion ? 0 : normalizedY * (p.size * 5) - scrollY * 0.08;

          return (
            <div
              key={p.id}
              className="absolute rounded-full bg-[#8EAEFF]"
              style={{
                left: `${p.baseX}%`,
                top: `${p.baseY}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          );
        })}
      </div>

      {/* 05: Film Grain Noise Overlay (Fixed, 0.03 opacity, avoids digital flat look) */}
      <div className="absolute inset-0 bg-noise-overlay opacity-30 pointer-events-none" />
    </div>
  );
};
