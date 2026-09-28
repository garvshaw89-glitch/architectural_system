import React from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: 'sm' | 'md' | 'lg';
  glow?: 'none' | 'accent' | 'violet' | 'ambient';
  interactive?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  radius = 'md',
  glow = 'none',
  interactive = false,
  className = '',
  ...props
}) => {
  const radiusClasses = {
    sm: 'rounded-[6px]',
    md: 'rounded-[12px]',
    lg: 'rounded-[20px]',
  }[radius];

  const glowClasses = {
    none: '',
    accent: 'shadow-[0_0_45px_-8px_rgba(91,140,255,0.35)]',
    violet: 'shadow-[0_0_55px_-10px_rgba(121,92,255,0.35)]',
    ambient: 'shadow-[0_0_80px_-15px_rgba(91,140,255,0.15)]',
  }[glow];

  const interactiveClasses = interactive
    ? 'hover:border-white/[0.18] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
    : '';

  return (
    <div
      className={`glass-panel-p2 ${radiusClasses} ${glowClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
