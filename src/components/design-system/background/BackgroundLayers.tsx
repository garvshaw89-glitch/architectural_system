import React from 'react';

export const AmbientGradient: React.FC<{ intensity?: 'subtle' | 'normal'; className?: string }> = ({
  intensity = 'normal',
  className = '',
}) => {
  const opacity = intensity === 'subtle' ? 'opacity-50' : 'opacity-80';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <div
        className={`absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[140px] bg-gradient-to-tr from-[#5B8CFF]/10 via-[#795CFF]/15 to-transparent ${opacity}`}
      />
      <div
        className="absolute bottom-0 right-[-10%] w-[500px] h-[400px] rounded-full blur-[160px] bg-[#5B8CFF]/5 opacity-60"
      />
    </div>
  );
};

export const TechnicalGrid: React.FC<{
  dense?: boolean;
  opacity?: number;
  interactive?: boolean;
  className?: string;
}> = ({ dense = false, opacity = 0.04, interactive = false, className = '' }) => {
  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className={`absolute inset-0 pointer-events-none ${
        dense ? 'bg-technical-grid-dense' : 'bg-technical-grid'
      } ${className}`}
    />
  );
};

export const NoiseOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.035 }) => {
  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none z-30 bg-noise-overlay"
    />
  );
};

export const ParticleField: React.FC<{ count?: number; active?: boolean }> = ({
  count = 18,
  active = true,
}) => {
  if (!active) return null;

  // Fixed deterministic coordinates to prevent layout jitter
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 19.3) % 94 + 3}%`,
    top: `${(i * 23.7) % 90 + 5}%`,
    size: (i % 3) + 1.5,
    opacity: ((i % 4) + 2) * 0.08,
    duration: 6 + (i % 6),
  }));

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `pulse ${p.duration}s infinite ease-in-out`,
          }}
          className="absolute rounded-full bg-[#8EAEFF]"
        />
      ))}
    </div>
  );
};

export const CursorLight: React.FC<{ x: number; y: number; active?: boolean }> = ({
  x,
  y,
  active = true,
}) => {
  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none z-10 transition-transform duration-100 ease-out hidden lg:block"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(91, 140, 255, 0.06) 0%, rgba(121, 92, 255, 0.02) 40%, transparent 70%)',
      }}
    />
  );
};
