import React from 'react';

export interface DividerProps {
  variant?: 'subtle' | 'default' | 'strong';
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'default',
  orientation = 'horizontal',
  label,
  className = '',
}) => {
  const borderColors = {
    subtle: 'border-white/[0.06]',
    default: 'border-white/[0.10]',
    strong: 'border-white/[0.18]',
  }[variant];

  if (orientation === 'vertical') {
    return <div className={`border-r ${borderColors} h-full ${className}`} />;
  }

  if (label) {
    return (
      <div className={`relative flex items-center justify-between my-6 ${className}`}>
        <div className={`flex-grow border-t ${borderColors}`} />
        <span className="px-3 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#6B6E75] select-none">
          {label}
        </span>
        <div className={`flex-grow border-t ${borderColors}`} />
      </div>
    );
  }

  return <div className={`w-full border-t ${borderColors} ${className}`} />;
};
