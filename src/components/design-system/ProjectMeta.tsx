import React from 'react';

export interface ProjectMetaProps {
  index?: string | number;
  year?: string | number;
  role?: string;
  technologies?: string[];
  deliverable?: string;
  className?: string;
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({
  index,
  year = '2026',
  role,
  technologies = [],
  deliverable,
  className = '',
}) => {
  const formattedIndex =
    typeof index === 'number'
      ? index < 10
        ? `0${index}`
        : `${index}`
      : index;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono select-none ${className}`}
    >
      {formattedIndex && (
        <span className="text-[#5B8CFF] font-semibold tracking-wider">
          {formattedIndex}
        </span>
      )}

      {formattedIndex && <span className="text-white/20">/</span>}

      <span className="text-[#A5A7AC] tracking-wider">{year}</span>

      {role && (
        <>
          <span className="text-white/20">·</span>
          <span className="text-[#F5F5F0] font-medium tracking-wide">{role}</span>
        </>
      )}

      {deliverable && (
        <>
          <span className="text-white/20">·</span>
          <span className="text-[#6B6E75]">{deliverable}</span>
        </>
      )}

      {technologies.length > 0 && (
        <>
          <span className="text-white/20">·</span>
          <span className="text-[#6B6E75] flex items-center gap-1.5 flex-wrap">
            {technologies.map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="text-[#A5A7AC] hover:text-[#5B8CFF] transition-colors">
                  {tech}
                </span>
                {i < technologies.length - 1 && <span className="text-white/20">+</span>}
              </React.Fragment>
            ))}
          </span>
        </>
      )}
    </div>
  );
};
