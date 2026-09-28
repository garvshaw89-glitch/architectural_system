import React from 'react';
import { useScrollSystem } from '../../design/ScrollContext';

export const HeroHeadline: React.FC = () => {
  const { prefersReducedMotion } = useScrollSystem();

  return (
    <div className="space-y-1 sm:space-y-2 select-none text-left">
      {/* Line 1: BUILDING */}
      <div className="overflow-hidden">
        <h1
          className={`font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] tracking-[-0.04em] leading-[0.92] text-[#F5F5F0] ${
            prefersReducedMotion
              ? 'opacity-100'
              : 'animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
          }`}
        >
          BUILDING
        </h1>
      </div>

      {/* Line 2: INTELLIGENT (With subtle moving light sweep / accent sheen) */}
      <div className="overflow-hidden">
        <div
          className={`font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] tracking-[-0.04em] leading-[0.92] text-[#F5F5F0] relative inline-block ${
            prefersReducedMotion
              ? 'opacity-100'
              : 'animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]'
          }`}
        >
          <span className="relative z-10">INTELLIGENT</span>
          {/* Subtle light sweep */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5B8CFF]/20 to-transparent bg-clip-text text-transparent pointer-events-none opacity-80"
          />
        </div>
      </div>

      {/* Line 3: DIGITAL SYSTEMS. (Dominates the viewport, subtle accent gradient) */}
      <div className="overflow-hidden">
        <div
          className={`font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] tracking-[-0.04em] leading-[0.92] text-[#F5F5F0] ${
            prefersReducedMotion
              ? 'opacity-100'
              : 'animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]'
          }`}
        >
          <span className="bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0] to-[#5B8CFF] bg-clip-text text-transparent">
            DIGITAL SYSTEMS.
          </span>
        </div>
      </div>
    </div>
  );
};
