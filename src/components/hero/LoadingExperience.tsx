import React, { useState, useEffect } from 'react';

interface LoadingExperienceProps {
  onComplete: () => void;
}

export const LoadingExperience: React.FC<LoadingExperienceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(50);
    }, 250);

    const timer2 = setTimeout(() => {
      setProgress(90);
    }, 600);

    const timer3 = setTimeout(() => {
      setProgress(100);
    }, 950);

    const timerEnd = setTimeout(() => {
      onComplete();
    }, 1150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  return (
    <div
      aria-live="polite"
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500"
    >
      <div className="w-full max-w-xs space-y-6 text-center">
        {/* Monogram / Core Emblem */}
        <div className="w-12 h-12 rounded-full border border-white/15 mx-auto flex items-center justify-center bg-[#08090B] shadow-[0_0_30px_rgba(91,140,255,0.25)]">
          <span className="font-display font-bold text-lg text-[#F5F5F0]">G</span>
        </div>

        {/* 00 / LOADING: Exact Visual Copy */}
        <div className="space-y-1.5">
          <div className="font-display font-extrabold text-2xl tracking-tight text-[#F5F5F0]">
            GARV SHAW
          </div>
          <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#A5A7AC]">
            DIGITAL ARCHITECTURE
          </div>
        </div>

        {/* Progress Hairline Bar */}
        <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#5B8CFF] to-[#795CFF] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6E75]">
          <span className="text-[#5B8CFF] font-medium tracking-wider">SYSTEM INITIALIZING...</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
