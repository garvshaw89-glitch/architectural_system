import React, { useState } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Button } from '../design-system/Button';
import { useEnvironment } from '../../context/EnvironmentContext';
import { Terminal, Copy, Check, GitBranch, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { GITHUB_PROFILE } from '../../data/engineering';

export const EngineeringTerminalCTA: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [commandInput, setCommandInput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'system --status',
      output: 'All systems operational. Type safety 100%. Node environment verified.',
    },
  ]);

  const quickCommands = [
    { label: 'git status', cmd: 'git status' },
    { label: 'stack list', cmd: 'stack --all' },
    { label: 'connect', cmd: 'connect garvshaw89@gmail.com' },
  ];

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output = '';
    const lower = trimmed.toLowerCase();

    if (lower.includes('status')) {
      output = 'Core: GARV SHAW // Digital Architecture // 0 runtime errors // Uptime: 99.98%';
    } else if (lower.includes('git')) {
      output = `Origin: https://github.com/GarvShaw // 12 public repos // 780+ annual commits`;
    } else if (lower.includes('stack')) {
      output = 'Active Stack: React 19, TypeScript, Tailwind v4, Python, Gemini 2.5 SDK, Docker, GCP';
    } else if (lower.includes('connect') || lower.includes('contact') || lower.includes('email')) {
      output = 'Routing to garvshaw89@gmail.com... Ready for collaboration on intelligent software systems.';
    } else if (lower.includes('help')) {
      output = 'Available commands: status, git, stack, connect, clear';
    } else if (lower.includes('clear')) {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    } else {
      output = `Command executed: "${trimmed}". Architecture validated. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: trimmed, output }]);
    setCommandInput('');
  };

  const handleCopyClone = () => {
    navigator.clipboard.writeText('git clone https://github.com/GarvShaw/ArogyaSeva.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGithub = () => {
    window.open(GITHUB_PROFILE.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = () => {
    window.location.href =
      'mailto:garvshaw89@gmail.com?subject=Engineering%20Collaboration%20%E2%80%94%20Systems%20Architecture';
  };

  return (
    <div className="space-y-12 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/[0.08] pb-4 gap-4">
        <div>
          <SectionLabel index="03.6" label="SYSTEM CONSOLE" category="COMMAND & INTERACTION" />
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mt-2 tracking-tight">
            INTERACTIVE CONSOLE & CTA
          </h3>
        </div>
        <div className="font-mono text-xs text-[#6B6E75]">
          DIRECT ARCHITECTURAL LINK
        </div>
      </div>

      {/* Terminal Container */}
      <div className="rounded-[24px] bg-[#08090B] border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Terminal Title Bar */}
        <div className="px-6 py-4 bg-[#050505] border-b border-white/[0.06] flex items-center justify-between font-mono text-xs text-[#6B6E75]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <span className="ml-3 text-[#A5A7AC]">garvshaw@digital-architect:~</span>
          </div>

          <button
            onClick={handleCopyClone}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101216] border border-white/[0.06] text-[11px] text-[#A5A7AC] hover:text-[#F5F5F0] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#34D399]" />
                <span>CLONED</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#5B8CFF]" />
                <span>COPY CLONE URI</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 font-mono text-xs space-y-4 min-h-[160px] max-h-[300px] overflow-y-auto">
          {terminalHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#5B8CFF]">
                <span>garvshaw@digital-architect:~$</span>
                <span className="text-[#F5F5F0]">{item.command}</span>
              </div>
              <div className="text-[#A5A7AC] pl-4">{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunCommand(commandInput);
            }}
            className="flex items-center gap-2 pt-2 text-[#5B8CFF]"
          >
            <span className="shrink-0">garvshaw@digital-architect:~$</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="type a command (e.g. status, git, connect, clear)..."
              className="w-full bg-transparent text-[#F5F5F0] focus:outline-none placeholder-[#6B6E75]"
            />
          </form>
        </div>

        {/* Quick Commands & Quick Actions */}
        <div className="p-4 sm:p-6 bg-[#050505] border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[#6B6E75] text-[11px]">SUGGESTIONS:</span>
            {quickCommands.map((q) => (
              <button
                key={q.cmd}
                onClick={() => handleRunCommand(q.cmd)}
                className="px-2.5 py-1 rounded bg-[#101216] border border-white/[0.06] text-[#A5A7AC] hover:text-[#5B8CFF] hover:border-[#5B8CFF]/40 transition-colors cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenGithub}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101216] border border-white/10 text-xs font-mono text-[#F5F5F0] hover:text-white hover:border-[#5B8CFF]/50 transition-all cursor-pointer"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span>EXPLORE REPOSITORIES</span>
              <ArrowUpRight className="w-3 h-3 text-[#6B6E75]" />
            </button>

            <Button
              variant="primary"
              size="md"
              iconType="arrow-right"
              onClick={handleContactClick}
            >
              START TECHNICAL DIALOGUE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
