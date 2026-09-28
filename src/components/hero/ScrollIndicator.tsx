import React from 'react';
import { useScrollSystem } from '../../design/ScrollContext';
import { ArrowDown } from 'lucide-react';

export const ScrollIndicator: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { scrollProgress } = useScrollSystem();

  // Fades away smoothly as user scrolls past 0.08
  const opacity = Math.max(1 - scrollProgress * 12, 0);

  if (opacity <= 0) return null;

  return (
    <button
      onClick={onClick}
      style={{ opacity }}
      className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-[#6B6E75] hover:text-[#F5F5F0] transition-colors cursor-pointer select-none"
    >
      <span className="uppercase">SCROLL TO EXPLORE</span>
      <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 via-[#5B8CFF] to-transparent relative overflow-hidden">
        <div className="w-full h-1/2 bg-white animate-pulse" />
      </div>
    </button>
  );
};
