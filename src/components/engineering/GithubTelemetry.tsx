import React, { useState, useMemo } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import {
  GITHUB_PROFILE,
  VERIFIED_REPOSITORIES,
  RECENT_COMMITS,
  generateAnnualActivityGrid,
  CommitActivityDay,
} from '../../data/engineering';
import { useEnvironment } from '../../context/EnvironmentContext';
import {
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Flame,
  CheckCircle2,
  Calendar,
  Terminal,
  Activity,
} from 'lucide-react';

export const GithubTelemetry: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [hoveredDay, setHoveredDay] = useState<CommitActivityDay | null>(null);

  const annualGrid = useMemo(() => generateAnnualActivityGrid(), []);

  const handleOpenGithub = () => {
    window.open(GITHUB_PROFILE.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenRepo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#1E3A8A]/50 border-white/[0.04]';
      case 2:
        return 'bg-[#2563EB]/70 border-white/[0.06]';
      case 3:
        return 'bg-[#3B82F6] border-white/[0.08]';
      case 4:
        return 'bg-[#60A5FA] border-white/[0.1] shadow-[0_0_8px_rgba(96,165,250,0.5)]';
      default:
        return 'bg-[#101216] border-white/[0.03]';
    }
  };

  return (
    <div className="space-y-12 select-none">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.3" label="GITHUB & SOURCE TELEMETRY" category="PUBLIC ECOSYSTEM" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            OPEN-SOURCE & CODE TELEMETRY
          </h3>
        </div>

        <button
          onClick={handleOpenGithub}
          onMouseEnter={() => setCursorMode('view')}
          onMouseLeave={() => setCursorMode('default')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#08090B] border border-white/10 text-xs font-mono text-[#F5F5F0] hover:border-[#5B8CFF]/60 hover:text-white transition-all cursor-pointer group"
        >
          <GitBranch className="w-3.5 h-3.5 text-[#5B8CFF]" />
          <span>GITHUB.COM/{GITHUB_PROFILE.username.toUpperCase()}</span>
          <ExternalLink className="w-3 h-3 text-[#6B6E75] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>

      {/* GitHub Activity Matrix & Annual Heatmap */}
      <div className="p-6 sm:p-8 rounded-[24px] bg-[#08090B] border border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" />
            <span className="font-mono text-xs text-[#F5F5F0] font-semibold">
              52-WEEK COMMIT CADENCE
            </span>
            <span className="font-mono text-[10px] text-[#6B6E75]">
              // {GITHUB_PROFILE.contributionsPastYear} CONTRIBUTIONS ACROSS SYSTEMS
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-[#A5A7AC]">
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{GITHUB_PROFILE.streakDays} DAYS ACTIVE STREAK</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span>{GITHUB_PROFILE.publicStars} REPOSITORY STARS</span>
            </div>
          </div>
        </div>

        {/* The 52-week grid visualizer */}
        <div className="relative overflow-x-auto pb-2 scrollbar-none">
          <div className="min-w-[680px]">
            <div className="flex gap-[3px] items-center">
              {annualGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[10px] h-[10px] rounded-[2px] border transition-all duration-150 cursor-pointer ${getHeatmapColor(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Scale legend & tooltip */}
            <div className="flex items-center justify-between mt-4 font-mono text-[10px] text-[#6B6E75]">
              <div className="flex items-center gap-2">
                <span>LESS</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#101216] border border-white/[0.04]" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1E3A8A]/50" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#2563EB]/70" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#3B82F6]" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#60A5FA]" />
                </div>
                <span>MORE COMMITS</span>
              </div>

              <div className="text-[#A5A7AC]">
                {hoveredDay ? (
                  <span className="text-[#5B8CFF]">
                    {hoveredDay.count} commits on {hoveredDay.date}
                  </span>
                ) : (
                  <span>Hover day cell for commit telemetry</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Repositories Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between font-mono text-xs text-[#6B6E75]">
          <span className="uppercase text-[#5B8CFF] font-semibold">
            VERIFIED PRODUCTION & RESEARCH REPOSITORIES
          </span>
          <span>{VERIFIED_REPOSITORIES.length} REPOSITORIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VERIFIED_REPOSITORIES.map((repo) => (
            <div
              key={repo.id}
              onClick={() => handleOpenRepo(repo.url)}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className="p-6 rounded-[20px] bg-[#08090B] border border-white/[0.06] hover:border-[#5B8CFF]/50 hover:bg-[#0C0E12] transition-all duration-300 group cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F5F5F0] font-semibold group-hover:text-[#5B8CFF] transition-colors">
                    <GitBranch className="w-3.5 h-3.5 text-[#5B8CFF]" />
                    <span>{repo.fullName}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B6E75] group-hover:text-white transition-colors" />
                </div>

                <p className="font-sans text-xs text-[#A5A7AC] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>

                {/* Architecture highlight tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-[#050505] border border-white/[0.04] font-mono text-[10px] text-[#A5A7AC]">
                  FOCUS: <span className="text-[#F5F5F0]">{repo.architectureFocus}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-xs text-[#6B6E75]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-[11px] text-[#A5A7AC]">{repo.language}</span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1 text-[#A5A7AC]">
                    <Star className="w-3 h-3 text-[#F59E0B]" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-[#A5A7AC]">
                    <GitFork className="w-3 h-3 text-[#6B6E75]" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Commit Discipline Stream */}
      <div className="p-6 sm:p-8 rounded-[24px] bg-[#08090B] border border-white/[0.08] space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 font-mono text-xs">
          <span className="text-[#5B8CFF] font-semibold uppercase flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            LIVE SEMANTIC COMMIT FEED
          </span>
          <span className="text-[10px] text-[#6B6E75]">SEMANTIC CONVENTIONAL COMMITS</span>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {RECENT_COMMITS.map((commit) => (
            <div
              key={commit.id}
              className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    commit.type === 'arch'
                      ? 'bg-[#795CFF]/15 text-[#795CFF] border border-[#795CFF]/30'
                      : commit.type === 'perf'
                      ? 'bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30'
                      : commit.type === 'feat'
                      ? 'bg-[#5B8CFF]/15 text-[#5B8CFF] border border-[#5B8CFF]/30'
                      : 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                  }`}
                >
                  {commit.type}
                </span>

                <span className="text-[#F5F5F0] truncate max-w-md">{commit.message}</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-[#6B6E75] shrink-0">
                <span className="text-[#A5A7AC]">{commit.repo}</span>
                <span className="text-[#5B8CFF]">{commit.id}</span>
                <span>{commit.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
