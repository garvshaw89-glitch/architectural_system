import React from 'react';

export interface SectionLabelProps {
  index?: string | number;
  label: string;
  category?: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  index,
  label,
  category,
  className = '',
}) => {
  // Format numeric index to two digits if needed
  const formattedIndex =
    typeof index === 'number'
      ? index < 10
        ? `0${index}`
        : `${index}`
      : index;

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.12em] uppercase select-none text-[#6B6E75] ${className}`}
    >
      {formattedIndex && (
        <>
          <span className="text-[#5B8CFF] font-semibold">{formattedIndex}</span>
          <span className="text-white/20">/</span>
        </>
      )}
      <span className="text-[#A5A7AC] font-medium hover:text-[#F5F5F0] transition-colors">
        {label}
      </span>
      {category && (
        <>
          <span className="text-white/20">·</span>
          <span className="text-[#6B6E75]">{category}</span>
        </>
      )}
    </div>
  );
};
