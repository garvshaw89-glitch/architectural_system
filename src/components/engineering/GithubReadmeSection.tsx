import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { GITHUB_PROFILE, GITHUB_README_SPEC, VERIFIED_REPOSITORIES } from '../../data/engineering';
import { useEnvironment } from '../../context/EnvironmentContext';
import {
  FileText,
  Code2,
  Copy,
  Check,
  ExternalLink,
  GitBranch,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Download,
} from 'lucide-react';

export const GithubReadmeSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [activeTab, setActiveTab] = useState<'preview' | 'raw'>('preview');
  const [copiedRaw, setCopiedRaw] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const cloneCommand = `git clone https://github.com/garvshaw89-glitch/digital-architecture-portfolio.git`;

  const handleCopyRaw = () => {
    navigator.clipboard.writeText(GITHUB_README_SPEC.rawContent);
    setCopiedRaw(true);
    setTimeout(() => setCopiedRaw(false), 2200);
  };

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2200);
  };

  const handleOpenGithub = () => {
    window.open(GITHUB_PROFILE.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 select-none">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.3B" label="GITHUB REPOSITORY & PROFILE SPECIFICATION" category="OPEN-SOURCE DOCUMENTATION" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            GITHUB PROFILE & REPOSITORY README
          </h3>
          <p className="font-sans text-sm text-[#A5A7AC] mt-1 max-w-2xl">
            Verified architectural thesis, production systems topology, and reproducible clone guidelines published to the official GitHub repository.
          </p>
        </div>

        {/* View / Raw Toggle & Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center p-1 rounded-xl bg-[#08090B] border border-white/10">
            <button
              onClick={() => setActiveTab('preview')}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#1E2330] text-[#5B8CFF] shadow-sm'
                  : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PREVIEW</span>
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === 'raw'
                  ? 'bg-[#1E2330] text-[#5B8CFF] shadow-sm'
                  : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>RAW MARKDOWN</span>
            </button>
          </div>

          <button
            onClick={handleCopyRaw}
            onMouseEnter={() => setCursorMode('view')}
            onMouseLeave={() => setCursorMode('default')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#08090B] border border-white/10 text-xs font-mono text-[#F5F5F0] hover:border-[#5B8CFF]/60 hover:text-white transition-all cursor-pointer"
            title="Copy README.md content to clipboard"
          >
            {copiedRaw ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="text-[#34D399]">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#A5A7AC]" />
                <span>COPY RAW</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenGithub}
            onMouseEnter={() => setCursorMode('visit')}
            onMouseLeave={() => setCursorMode('default')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#5B8CFF]/10 border border-[#5B8CFF]/30 text-xs font-mono text-[#5B8CFF] hover:bg-[#5B8CFF]/20 hover:border-[#5B8CFF]/60 transition-all cursor-pointer"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* GitHub Repository Window Container */}
      <div className="rounded-[24px] bg-[#08090B] border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* GitHub Header Navigation Bar */}
        <div className="bg-[#0C0E12] px-5 sm:px-6 py-3.5 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#A5A7AC]">
          <div className="flex items-center gap-3">
            {/* Branch Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#141820] border border-white/[0.08] text-[#F5F5F0] text-[11px]">
              <GitBranch className="w-3 h-3 text-[#5B8CFF]" />
              <span>{GITHUB_README_SPEC.branch}</span>
            </div>

            {/* Path Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[12px] text-[#A5A7AC]">
              <span className="text-[#5B8CFF] hover:underline cursor-pointer" onClick={handleOpenGithub}>
                {GITHUB_README_SPEC.repositoryPath.split('/')[0]}
              </span>
              <span>/</span>
              <span className="text-[#F5F5F0] font-semibold flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#5B8CFF]" />
                {GITHUB_README_SPEC.fileName}
              </span>
            </div>
          </div>

          {/* Commit & File Info */}
          <div className="flex items-center gap-4 text-[11px] text-[#6B6E75]">
            <span className="hidden sm:inline">
              commit <span className="text-[#5B8CFF] font-semibold">{GITHUB_README_SPEC.commitHash}</span>
            </span>
            <span>{GITHUB_README_SPEC.commitTime}</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#A5A7AC]">
              {GITHUB_README_SPEC.fileSize}
            </span>
          </div>
        </div>

        {/* Clone Terminal Prompt Banner */}
        <div className="bg-[#060709] px-5 sm:px-6 py-3 border-b border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#A5A7AC] overflow-hidden">
            <Terminal className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
            <span className="text-[#6B6E75]">$</span>
            <span className="text-[#F5F5F0] truncate font-mono">{cloneCommand}</span>
          </div>

          <button
            onClick={handleCopyClone}
            onMouseEnter={() => setCursorMode('view')}
            onMouseLeave={() => setCursorMode('default')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#F5F5F0] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
          >
            {copiedClone ? (
              <>
                <Check className="w-3 h-3 text-[#34D399]" />
                <span className="text-[#34D399] text-[11px]">COPIED CLONE CMD</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#A5A7AC]" />
                <span className="text-[11px]">COPY CLONE</span>
              </>
            )}
          </button>
        </div>

        {/* Tab 1: Rendered View */}
        {activeTab === 'preview' && (
          <div className="p-6 sm:p-10 space-y-10">
            {/* README Title & Monogram Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0D11] border border-white/[0.06] relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#5B8CFF]/10 via-[#795CFF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-[#5B8CFF]/15 border border-[#5B8CFF]/30 font-mono text-[10px] text-[#5B8CFF] font-semibold uppercase tracking-wider">
                  OFFICIAL REPOSITORY SPECIFICATION
                </span>
                <span className="font-mono text-xs text-[#6B6E75]">// v2.4.0 PROD</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight">
                  GARV SHAW — DIGITAL ARCHITECT
                </h1>
                <p className="font-mono text-sm sm:text-base text-[#5B8CFF] font-medium tracking-wide">
                  AI × CLOUD × SOFTWARE — INTELLIGENCE IN MOTION
                </p>
              </div>

              {/* GitHub Shield Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3178C6]/15 border border-[#3178C6]/30 font-mono text-[11px] text-[#93C5FD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3178C6]" />
                  TypeScript 5.8
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#61DAFB]/15 border border-[#61DAFB]/30 font-mono text-[11px] text-[#67E8F9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB]" />
                  React 19.0
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/30 font-mono text-[11px] text-[#38BDF8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  Tailwind CSS v4
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#4285F4]/15 border border-[#4285F4]/30 font-mono text-[11px] text-[#93C5FD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                  Google Cloud Run
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 font-mono text-[11px] text-[#34D399]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Production Deployed
                </span>
              </div>
            </div>

            {/* Architectural Thesis */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2 font-mono text-sm text-[#F5F5F0] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#5B8CFF]" />
                <span>ARCHITECTURAL THESIS</span>
              </div>
              <p className="font-sans text-sm text-[#A5A7AC] leading-relaxed">
                I architect and ship high-resilience digital systems at the convergence of Frontier AI, distributed cloud backends, and mathematical frontend interfaces. Every application is built with uncompromising principles:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-[#050608] border border-white/[0.05] space-y-1">
                  <div className="font-mono text-xs text-[#5B8CFF] font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    SUB-100MS STATE TRANSITIONS
                  </div>
                  <p className="font-sans text-xs text-[#6B6E75]">
                    Zero perceptible frame drops; mathematical canvas kinematics over bloated 3D dependencies.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050608] border border-white/[0.05] space-y-1">
                  <div className="font-mono text-xs text-[#34D399] font-semibold flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    DETERMINISTIC AI ORCHESTRATION
                  </div>
                  <p className="font-sans text-xs text-[#6B6E75]">
                    Frontier LLMs routed with strict JSON schema validation and multi-agent DAG pipelines.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050608] border border-white/[0.05] space-y-1">
                  <div className="font-mono text-xs text-[#F59E0B] font-semibold flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    ANTI-AI SLOP DESIGN SYSTEM
                  </div>
                  <p className="font-sans text-xs text-[#6B6E75]">
                    Strict Swiss typography, bespoke monochromatic atmospheric lighting, zero generic components.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#050608] border border-white/[0.05] space-y-1">
                  <div className="font-mono text-xs text-[#A855F7] font-semibold flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    AUTHENTIC PRODUCTION RIGOR
                  </div>
                  <p className="font-sans text-xs text-[#6B6E75]">
                    No fabricated metrics, no fake numbers. All code verified against real GitHub repositories.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Production Systems Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 font-mono text-sm text-[#F5F5F0] font-semibold">
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#5B8CFF]" />
                  VERIFIED PRODUCTION SYSTEMS
                </span>
                <span className="text-xs text-[#6B6E75] font-normal">
                  {VERIFIED_REPOSITORIES.length} REPOSITORIES
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs text-[#A5A7AC] border border-white/[0.06] rounded-xl overflow-hidden">
                  <thead className="bg-[#0C0E12] font-mono text-[11px] text-[#F5F5F0] border-b border-white/[0.06]">
                    <tr>
                      <th className="p-3.5">REPOSITORY</th>
                      <th className="p-3.5 hidden sm:table-cell">ARCHITECTURE FOCUS</th>
                      <th className="p-3.5">LANGUAGE</th>
                      <th className="p-3.5 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {VERIFIED_REPOSITORIES.map((repo) => (
                      <tr key={repo.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-mono text-[#F5F5F0]">
                          <div className="font-semibold text-[#5B8CFF]">{repo.name}</div>
                          <div className="text-[11px] text-[#6B6E75] truncate max-w-[200px] sm:max-w-none">
                            {repo.description}
                          </div>
                        </td>
                        <td className="p-3.5 hidden sm:table-cell font-mono text-[11px] text-[#A5A7AC]">
                          {repo.architectureFocus}
                        </td>
                        <td className="p-3.5 font-mono text-[11px]">
                          <span
                            className="inline-block w-2 h-2 rounded-full mr-1.5"
                            style={{ backgroundColor: repo.languageColor }}
                          />
                          {repo.language}
                        </td>
                        <td className="p-3.5 text-right font-mono">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setCursorMode('visit')}
                            onMouseLeave={() => setCursorMode('default')}
                            className="inline-flex items-center gap-1 text-[#5B8CFF] hover:text-white transition-colors"
                          >
                            <span>VIEW</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Start Terminal Guide */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2 font-mono text-sm text-[#F5F5F0] font-semibold">
                <Terminal className="w-4 h-4 text-[#34D399]" />
                <span>QUICK START & REPRODUCTION</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#050608] border border-white/[0.06] font-mono text-xs text-[#A5A7AC] space-y-3">
                <div className="text-[#6B6E75]">// 1. Clone repository to your local machine</div>
                <div className="p-3 rounded-lg bg-[#0C0E12] border border-white/[0.04] text-[#F5F5F0] flex items-center justify-between">
                  <code>git clone https://github.com/garvshaw89-glitch/digital-architecture-portfolio.git</code>
                  <button
                    onClick={handleCopyClone}
                    className="p-1 hover:text-[#5B8CFF] transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-[#6B6E75]">// 2. Install dependencies & initialize dev server</div>
                <div className="p-3 rounded-lg bg-[#0C0E12] border border-white/[0.04] text-[#F5F5F0]">
                  <code>cd digital-architecture-portfolio &amp;&amp; npm install &amp;&amp; npm run dev</code>
                </div>

                <div className="text-[#6B6E75]">// 3. Production build test</div>
                <div className="p-3 rounded-lg bg-[#0C0E12] border border-white/[0.04] text-[#F5F5F0]">
                  <code>npm run build &amp;&amp; npm run preview</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Raw Markdown View */}
        {activeTab === 'raw' && (
          <div className="p-6 sm:p-8 bg-[#050608] overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm text-[#A5A7AC] leading-relaxed whitespace-pre-wrap select-text">
              {GITHUB_README_SPEC.rawContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
