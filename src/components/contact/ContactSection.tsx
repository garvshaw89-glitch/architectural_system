import React, { useState, useEffect } from 'react';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { Button } from '../design-system/Button';
import { useEnvironment } from '../../context/EnvironmentContext';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Check, 
  Copy, 
  Send, 
  Terminal, 
  Clock, 
  Globe2,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  
  // Terminal Form State
  const [projectType, setProjectType] = useState('AI System Architecture');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');

  const emailAddress = 'garvshaw89@gmail.com';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in UTC+5:30 (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatchStatus('transmitting');

    setTimeout(() => {
      setDispatchStatus('sent');
      const subject = encodeURIComponent(`Project Inquiry: ${projectType} — from ${senderName || 'Visitor'}`);
      const body = encodeURIComponent(
        `Hi Garv,\n\nSender: ${senderName || 'Anonymous'}\nContact: ${senderEmail || 'Not provided'}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\nSent via Garv Shaw Digital Architecture Portal.`
      );
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration with Garv Shaw"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-20 select-none"
    >
      {/* 01: SECTION ENTRY HEADER */}
      <div className="space-y-8 border-b border-white/[0.08] pb-12">
        <div className="flex items-center justify-between">
          <SectionLabel index={5} label="INITIATE COLLABORATION" category="FUTURE SYSTEMS" />
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR SELECT PROJECTS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#F5F5F0] leading-[0.92] text-balance">
              BUILD
              <br />
              <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
                WITH ME.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#A5A7AC] max-w-xl leading-[1.65]">
              Whether architecting a resilient autonomous AI platform, engineering high-throughput
              software, or building a sensory digital experience—I turn ambitious ideas into
              production systems.
            </p>

            {/* Direct Email Quick Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="p-1.5 pl-4 pr-2 rounded-2xl bg-[#08090B] border border-white/10 flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5B8CFF]" />
                <span className="font-mono text-xs text-[#F5F5F0]">{emailAddress}</span>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setCursorMode('open')}
                  onMouseLeave={() => setCursorMode('default')}
                  className="px-3 py-1.5 rounded-xl bg-[#101216] border border-white/10 hover:border-white/20 text-xs font-mono text-[#A5A7AC] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20%E2%80%94%20Digital%20Architecture`}
                className="px-5 py-2.5 rounded-2xl bg-[#5B8CFF] hover:bg-[#4a7aed] text-white font-mono text-xs font-medium transition-all shadow-[0_0_20px_rgba(91,140,255,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <span>OPEN EMAIL CLIENT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Global Telemetry Cards */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-[#08090B] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between text-[#6B6E75] border-b border-white/[0.06] pb-2">
                <span>SYSTEM DISPATCH METRICS</span>
                <span className="text-[#5B8CFF]">ONLINE</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#A5A7AC]">PRIMARY LOCATION</span>
                  <span className="text-[#F5F5F0] font-medium">INDIA · GLOBAL ASYNC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#A5A7AC]">LOCAL TIME (IST)</span>
                  <span className="text-[#5B8CFF] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentTime || 'CALIBRATING...'} (UTC+5:30)</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#A5A7AC]">RESPONSE VELOCITY</span>
                  <span className="text-emerald-400 font-medium">&lt; 24 HOURS</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Networks */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/GarvShaw"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorMode('visit')}
                onMouseLeave={() => setCursorMode('default')}
                className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#A5A7AC] group-hover:text-white transition-colors" />
                  <span className="text-[#F5F5F0] font-medium">GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6E75] group-hover:text-[#5B8CFF] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/garvshaw/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorMode('visit')}
                onMouseLeave={() => setCursorMode('default')}
                className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#A5A7AC] group-hover:text-white transition-colors" />
                  <span className="text-[#F5F5F0] font-medium">LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6E75] group-hover:text-[#5B8CFF] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 02: INTERACTIVE COLLABORATION DISPATCH CONSOLE */}
      <div className="p-8 sm:p-12 rounded-[28px] bg-[#08090B] border border-white/[0.08] relative overflow-hidden space-y-8">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-[#5B8CFF]" />
            <span className="font-mono text-xs text-[#5B8CFF] font-semibold uppercase">
              TRANSMIT PROJECT INQUIRY
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#6B6E75]">
            DIRECT SYSTEM GATEWAY
          </span>
        </div>

        <form onSubmit={handleTransmit} className="space-y-6">
          {/* Domain Selection Tabs */}
          <div className="space-y-2">
            <label className="font-mono text-xs text-[#A5A7AC] uppercase block">
              1. SELECT DOMAIN VECTOR:
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'AI System Architecture',
                'Full-Stack Production Software',
                'Cloud & Distributed Systems',
                'Design System & Digital Product',
                'Advisory / Consulting',
              ].map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setProjectType(domain)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                    projectType === domain
                      ? 'bg-[#15171B] border border-[#5B8CFF]/60 text-white shadow-sm'
                      : 'bg-[#050505] border border-white/[0.06] text-[#A5A7AC] hover:border-white/20'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Email Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name-input" className="font-mono text-xs text-[#A5A7AC] uppercase block">
                2. YOUR NAME / ORGANIZATION:
              </label>
              <input
                id="name-input"
                type="text"
                placeholder="e.g. Elena Rostova / Veloce Labs"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/[0.08] focus:border-[#5B8CFF] focus:outline-none font-mono text-xs text-[#F5F5F0] placeholder:text-[#6B6E75] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email-input" className="font-mono text-xs text-[#A5A7AC] uppercase block">
                3. CONTACT EMAIL:
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="e.g. elena@velocelabs.io"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/[0.08] focus:border-[#5B8CFF] focus:outline-none font-mono text-xs text-[#F5F5F0] placeholder:text-[#6B6E75] transition-colors"
              />
            </div>
          </div>

          {/* Scope / Message Input */}
          <div className="space-y-2">
            <label htmlFor="msg-input" className="font-mono text-xs text-[#A5A7AC] uppercase block">
              4. PROJECT SCOPE & OBJECTIVES:
            </label>
            <textarea
              id="msg-input"
              rows={4}
              placeholder="Outline the problem you are solving, target timeline, technical constraints, or system requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/[0.08] focus:border-[#5B8CFF] focus:outline-none font-mono text-xs text-[#F5F5F0] placeholder:text-[#6B6E75] transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Form Submit & Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            <div className="font-mono text-xs text-[#6B6E75] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
              <span>TRANSMISSION ENCRYPTED VIA CLIENT MAIL PROTOCOL</span>
            </div>

            <button
              type="submit"
              disabled={dispatchStatus === 'transmitting'}
              onMouseEnter={() => setCursorMode('open')}
              onMouseLeave={() => setCursorMode('default')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5B8CFF] to-[#795CFF] hover:from-[#4a7aed] hover:to-[#6a4eed] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(91,140,255,0.25)]"
            >
              {dispatchStatus === 'transmitting' ? (
                <span>DISPATCHING...</span>
              ) : dispatchStatus === 'sent' ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>TRANSMITTED TO MAIL</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
