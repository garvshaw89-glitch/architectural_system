import React from 'react';
import { EngineeringHero } from './EngineeringHero';
import { EngineeringPhilosophy } from './EngineeringPhilosophy';
import { ConstellationMatrix } from './ConstellationMatrix';
import { GithubTelemetry } from './GithubTelemetry';
import { DevelopmentWorkflow } from './DevelopmentWorkflow';
import { SystemStackTier } from './SystemStackTier';
import { EngineeringTerminalCTA } from './EngineeringTerminalCTA';
import { Divider } from '../design-system/Divider';

export const EngineeringSection: React.FC = () => {
  return (
    <section
      id="engineering"
      aria-label="Engineering, Systems Architecture and GitHub Telemetry"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-28 select-none"
    >
      {/* 01: Section Entry & Systems Statement */}
      <EngineeringHero />

      <Divider variant="subtle" label="03.1 // SYSTEMS RIGOR & PHILOSOPHY" />

      {/* 02: Systems Engineering Philosophy */}
      <EngineeringPhilosophy />

      <Divider variant="subtle" label="03.2 // FULL-STACK TECHNOLOGY CONSTELLATION" />

      {/* 03: Technology Constellation & Stack Matrix */}
      <ConstellationMatrix />

      <Divider variant="subtle" label="03.3 // PUBLIC GITHUB & SOURCE TELEMETRY" />

      {/* 04: GitHub Activity Heatmap & Verified Repositories */}
      <GithubTelemetry />

      <Divider variant="subtle" label="03.4 // ARCHITECTURAL DEVELOPMENT LIFECYCLE" />

      {/* 05: Development System & Workflow */}
      <DevelopmentWorkflow />

      <Divider variant="subtle" label="03.5 // 4-TIER FULL-STACK ARCHITECTURE" />

      {/* 06: Full-Stack Tier Hierarchy & Trace Simulator */}
      <SystemStackTier />

      <Divider variant="subtle" label="03.6 // SYSTEM CONSOLE & TECHNICAL CTA" />

      {/* 07: Interactive Terminal & Collaboration CTA */}
      <EngineeringTerminalCTA />
    </section>
  );
};
