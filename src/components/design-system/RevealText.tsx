import React, { useEffect, useState } from 'react';

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  delay = 100,
  className = '',
  tag: Tag = 'span',
}) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tag
      className={`inline-block overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {text}
    </Tag>
  );
};
