import React from 'react';

export type TextVariant = 'body-large' | 'body' | 'muted' | 'technical';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
  measure?: boolean; // If true, constrains to optimal 65ch reading width
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as: Component = 'p',
  measure = false,
  children,
  className = '',
  ...props
}) => {
  const styles = {
    'body-large': 'font-sans text-base sm:text-lg md:text-xl text-[#F5F5F0] leading-[1.5] tracking-normal font-normal',
    body: 'font-sans text-sm sm:text-base text-[#A5A7AC] leading-[1.65] tracking-normal font-normal',
    muted: 'font-sans text-xs sm:text-sm text-[#6B6E75] leading-[1.6] tracking-normal',
    technical: 'font-mono text-xs text-[#A5A7AC] tracking-[0.05em] leading-[1.4]',
  }[variant];

  const measureClass = measure ? 'max-w-[65ch]' : '';

  return (
    <Component className={`${styles} ${measureClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};
