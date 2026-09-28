import React from 'react';

export const HeroMetadata: React.FC = () => {
  const metadataItems = [
    { label: 'BASED IN', value: 'INDIA' },
    { label: 'FOCUS', value: 'AI / CLOUD / SOFTWARE' },
    { label: 'STATUS', value: 'BUILDING' },
    { label: 'YEAR', value: '2026' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] font-mono select-none">
      {metadataItems.map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="text-[10px] tracking-widest text-[#6B6E75] uppercase">
            {item.label}
          </div>
          <div className="text-xs sm:text-sm font-medium text-[#F5F5F0] tracking-wide flex items-center gap-1.5">
            {item.label === 'STATUS' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            )}
            <span>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
