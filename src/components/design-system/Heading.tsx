import React from 'react';

export type HeadingLevel = 'display-xl' | 'display-lg' | 'heading' | 'subheading';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'heading',
  as,
  children,
  className = '',
  ...props
}) => {
  const styles = {
    // Hero Display XL: 96-160px desktop, 56-76px tablet, 44-60px mobile. Tight -0.04em, line-height 0.88
    'display-xl':
      'font-display font-extrabold text-[44px] sm:text-[68px] md:text-[96px] lg:text-[132px] xl:text-[144px] tracking-[-0.04em] leading-[0.88] text-[#F5F5F0] text-balance',
    // Major Section Titles Display Large: 64-96px desktop. Line height 0.98, tracking -0.03em
    'display-lg':
      'font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.03em] leading-[0.98] text-[#F5F5F0]',
    // Project / Subsection Headings: 40-64px
    heading:
      'font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.025em] leading-[1.08] text-[#F5F5F0]',
    // Subheading: 24-32px
    subheading:
      'font-sans font-medium text-lg sm:text-xl md:text-2xl tracking-[-0.015em] leading-snug text-[#A5A7AC]',
  }[level];

  const Tag = as || (level === 'display-xl' ? 'h1' : level === 'display-lg' ? 'h2' : level === 'heading' ? 'h3' : 'h4');

  return (
    <Tag className={`${styles} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
