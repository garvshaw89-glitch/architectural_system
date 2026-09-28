import React, { useState, useEffect } from 'react';

interface LoadingExperienceProps {
  onComplete: () => void;
}

export const LoadingExperience: React.FC<LoadingExperienceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ARCHITECTURE...');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(45);
      setStatusText('CALIBRATING NEURAL FABRIC...');
    }, 300);

    const timer2 = setTimeout(() => {
      setProgress(85);
      setStatusText('SYNCHRONIZING IDENTITY CORE...');
    }, 700);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText('SYSTEM ONLINE');
    }, 1100);

    const timerEnd = setTimeout(() => {
      onComplete();
    }, 1350);

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
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Monogram */}
        <div className="w-12 h-12 rounded-full border border-white/15 mx-auto flex items-center justify-center bg-[#08090B] shadow-[0_0_25px_rgba(91,140,255,0.2)]">
          <span className="font-display font-bold text-lg text-[#F5F5F0]">G</span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="font-display font-bold text-xl tracking-tight text-[#F5F5F0]">
            GARV SHAW
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6B6E75]">
            DIGITAL ARCHITECT // 2026
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
        <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6E75]">
          <span>{statusText}</span>
          <span className="text-[#5B8CFF] font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
