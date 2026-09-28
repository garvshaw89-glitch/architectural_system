import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'elevated' | 'glass';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  size = 'md',
  variant = 'subtle',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-3',
  }[size];

  const variantClasses = {
    subtle: 'bg-[#101216] border border-white/[0.08] hover:border-white/[0.2] text-[#A5A7AC] hover:text-[#F5F5F0]',
    elevated: 'bg-[#1A1D22] border border-white/[0.12] hover:border-[#5B8CFF]/50 text-[#F5F5F0] shadow-sm',
    glass: 'glass-panel-p2 text-[#F5F5F0] hover:border-[#795CFF]/60 hover:shadow-[0_0_20px_rgba(121,92,255,0.25)]',
  }[variant];

  return (
    <button
      aria-label={label}
      title={label}
      className={`rounded-[6px] transition-all duration-200 inline-flex items-center justify-center cursor-pointer group ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <Icon className="w-full h-full transition-transform duration-200 group-hover:scale-110" />
    </button>
  );
};
