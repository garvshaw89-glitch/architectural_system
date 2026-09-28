import React, { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  iconType?: 'arrow-right' | 'arrow-up-right' | 'none';
  children: React.ReactNode;
  magnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconType = 'arrow-right',
  children,
  magnetic = false,
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Dampened magnetic pull (max 8px)
    const pullX = (e.clientX - centerX) * 0.18;
    const pullY = (e.clientY - centerY) * 0.18;
    setOffset({ x: Math.max(Math.min(pullX, 8), -8), y: Math.max(Math.min(pullY, 8), -8) });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-[6px]',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2 rounded-[8px]',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 rounded-[10px]',
  }[size];

  const variantClasses = {
    // Primary: High contrast dark/light with subtle electric blue hover luminescence
    primary:
      'bg-[#F5F5F0] text-[#050505] font-semibold hover:bg-white active:bg-zinc-200 shadow-sm hover:shadow-[0_0_25px_rgba(91,140,255,0.3)] border border-transparent',
    // Secondary: Minimal hairline outline
    secondary:
      'bg-[#101216] text-[#F5F5F0] font-medium border border-white/[0.10] hover:border-white/[0.22] hover:bg-[#15171B]',
    // Text Button: No box, pure typography with animated arrow
    text:
      'bg-transparent text-[#F5F5F0] font-medium hover:text-[#5B8CFF] px-0 py-1 border-none shadow-none',
  }[variant];

  const IconComponent =
    iconType === 'arrow-up-right'
      ? ArrowUpRight
      : iconType === 'arrow-right'
      ? ArrowRight
      : null;

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: magnetic ? `translate(${offset.x}px, ${offset.y}px)` : undefined,
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease',
      }}
      className={`group relative inline-flex items-center justify-center font-mono uppercase tracking-wider select-none cursor-pointer disabled:opacity-40 disabled:pointer-events-none ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {IconComponent && (
        <IconComponent
          className={`transition-transform duration-200 ease-out group-hover:translate-x-1.5 ${
            iconType === 'arrow-up-right' ? 'group-hover:-translate-y-1.5' : ''
          } ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} ${
            variant === 'primary' ? 'text-[#050505]' : 'text-[#5B8CFF]'
          }`}
        />
      )}
    </button>
  );
};
