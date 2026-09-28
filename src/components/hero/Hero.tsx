import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { IdentityCore, IdentityState } from './IdentityCore';
import { HeroMetadata } from './HeroMetadata';
import { ScrollIndicator } from './ScrollIndicator';
import { Button } from '../design-system/Button';
import { MagneticButton } from '../design-system/MagneticButton';
import { useScrollSystem } from '../../design/ScrollContext';
import { useEnvironment } from '../../context/EnvironmentContext';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onGithubClick?: () => void;
  onIdentityChange?: (state: IdentityState) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onGithubClick,
  onIdentityChange,
}) => {
  const { scrollY, scrollProgress, prefersReducedMotion } = useScrollSystem();
  const { setCursorMode } = useEnvironment();

  // Scroll transformation factors (Section 37)
  const heroScale = prefersReducedMotion ? 1 : Math.max(1 - scrollProgress * 0.18, 0.92);
  const heroTranslateY = prefersReducedMotion ? 0 : scrollY * 0.15;
  const contentOpacity = Math.max(1 - scrollProgress * 2.8, 0);

  return (
    <section
      id="hero"
      aria-label="Garv Shaw Hero Landing"
      className="relative min-h-[105svh] w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-5 sm:px-8 lg:px-12 select-none overflow-hidden"
      style={{
        transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale})`,
        opacity: contentOpacity,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Background Side Markers & Architectural Crosshairs */}
      <div
        aria-hidden="true"
        className="absolute top-36 left-6 font-mono text-[10px] text-[#6B6E75] hidden xl:block"
      >
        <span>SYS // 001</span>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-36 right-6 font-mono text-[10px] text-[#6B6E75] hidden xl:block"
      >
        <span>AI × CLOUD × ARCH</span>
      </div>

      {/* Main Hero Body Composition */}
      <div className="max-w-7xl mx-auto w-full my-auto space-y-12">
        {/* Top Technical Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] uppercase text-[#6B6E75]">
          <span className="text-[#5B8CFF] font-semibold">01</span>
          <span className="text-white/20">/</span>
          <span className="text-[#A5A7AC] font-medium">DIGITAL ARCHITECTURE</span>
          <span className="text-white/20">·</span>
          <span className="text-[#6B6E75]">INTELLIGENCE IN MOTION</span>
        </div>

        {/* Intentional Asymmetric 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Dominant Editorial Headline & Narrative (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <HeroHeadline />

            {/* Supporting Statement (Narrow max-width 520–620px, 18–20px desktop) */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#A5A7AC] max-w-xl font-sans leading-[1.6] font-normal">
              I build intelligent digital systems at the intersection of AI, cloud computing,
              software engineering, business and technology.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton strength={0.25}>
                <div
                  onMouseEnter={() => setCursorMode('open')}
                  onMouseLeave={() => setCursorMode('default')}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    iconType="arrow-right"
                    onClick={onExploreClick}
                  >
                    EXPLORE WORK
                  </Button>
                </div>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <div
                  onMouseEnter={() => setCursorMode('visit')}
                  onMouseLeave={() => setCursorMode('default')}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    iconType="arrow-up-right"
                    onClick={onGithubClick}
                  >
                    VIEW GITHUB
                  </Button>
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Metamorphic Identity Core (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <IdentityCore onStateChange={onIdentityChange} />
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Technical Metadata & Scroll Down */}
      <div className="max-w-7xl mx-auto w-full pt-10 space-y-6">
        <HeroMetadata />

        {/* Center Scroll Indicator */}
        <div className="flex justify-center pt-2">
          <ScrollIndicator onClick={onExploreClick} />
        </div>
      </div>
    </section>
  );
};
