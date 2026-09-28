import React from 'react';

export type ImageTreatment = 'cinematic' | 'editorial' | 'floating';

export interface ImageRevealProps {
  src?: string;
  alt: string;
  treatment?: ImageTreatment;
  caption?: string;
  metadata?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '1/1';
  className?: string;
  children?: React.ReactNode;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  treatment = 'editorial',
  caption,
  metadata,
  aspectRatio = '16/9',
  className = '',
  children,
}) => {
  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[21/9]',
    '1/1': 'aspect-square',
  }[aspectRatio];

  const treatmentClasses = {
    // Cinematic: Large full-width visual, deep contrast, immersive framing
    cinematic:
      'w-full rounded-[20px] border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden',
    // Editorial: Aligned to architectural 12-col grid with hairline boundary
    editorial:
      'w-full rounded-[12px] border border-white/[0.08] hover:border-white/[0.18] transition-colors overflow-hidden',
    // Floating: Subtle tilt and elevation for overlapping modular composition
    floating:
      'w-full rounded-[12px] border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transform hover:-translate-y-1.5 transition-all duration-300 overflow-hidden',
  }[treatment];

  return (
    <div className={`space-y-3 ${className}`}>
      <div className={`relative bg-[#08090B] group ${treatmentClasses} ${aspectClasses}`}>
        {/* Subtle inner hairline gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Ambient Corner Spec Identifier */}
        <div className="absolute top-3 left-3 z-20 font-mono text-[9px] text-[#A5A7AC] tracking-wider uppercase px-2 py-0.5 rounded bg-black/60 border border-white/10 backdrop-blur-sm">
          {treatment}
        </div>

        {/* Visual Content */}
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : children ? (
          <div className="w-full h-full flex items-center justify-center p-6 text-center">
            {children}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-technical-grid">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 text-[#5B8CFF]">
              <span className="font-mono text-xs">VIS</span>
            </div>
            <span className="font-display font-bold text-lg text-[#F5F5F0]">{alt}</span>
            <span className="font-mono text-xs text-[#6B6E75] mt-1">{aspectRatio} ARCHITECTURAL FRAME</span>
          </div>
        )}
      </div>

      {(caption || metadata) && (
        <div className="flex items-center justify-between text-xs font-mono text-[#6B6E75] px-1 select-none">
          {caption && <span className="text-[#A5A7AC] font-medium">{caption}</span>}
          {metadata && <span>{metadata}</span>}
        </div>
      )}
    </div>
  );
};
