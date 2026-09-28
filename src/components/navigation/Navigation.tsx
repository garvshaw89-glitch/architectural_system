import React, { useState } from 'react';
import { useScrollSystem } from '../../design/ScrollContext';
import { useEnvironment } from '../../context/EnvironmentContext';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { isAtTop } = useScrollSystem();
  const { setCursorMode } = useEnvironment();
  const [activeItem, setActiveItem] = useState('WORK');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'capabilities', label: 'CAPABILITIES' },
    { id: 'engineering', label: 'ENGINEERING' },
    { id: 'thoughts', label: 'THOUGHTS' },
  ];

  const handleItemClick = (id: string, label: string) => {
    setActiveItem(label);
    if (onNavigate) onNavigate(id);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Main Header Wrapper */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isAtTop
            ? 'py-6 sm:py-8 bg-transparent'
            : 'py-3.5 bg-[#050505]/40 backdrop-blur-md border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Left Brand Mark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleItemClick('hero', 'HERO')}
              onMouseEnter={() => setCursorMode('view')}
              onMouseLeave={() => setCursorMode('default')}
              className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            >
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F5F5F0] transition-all duration-300 group-hover:tracking-wider group-hover:text-white">
                G / GARV SHAW
              </span>
            </button>
          </div>

          {/* Zone 2: Center Floating Architectural Glass Pill (Morphs on scroll) */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
              isAtTop
                ? 'bg-transparent border border-transparent px-2 py-1'
                : 'bg-[#0C0E12]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-full px-5 py-1.5'
            }`}
          >
            {navLinks.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id, item.label)}
                  onMouseEnter={() => setCursorMode('view')}
                  onMouseLeave={() => setCursorMode('default')}
                  className={`relative px-4 py-1.5 font-mono text-xs tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group ${
                    isActive ? 'text-[#F5F5F0] font-semibold' : 'text-[#A5A7AC] hover:text-[#F5F5F0]'
                  }`}
                >
                  {/* Subtle active glowing dot indicator */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] shadow-[0_0_8px_#5B8CFF] animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Right Action & Technical Availability */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Technical Availability Status */}
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#6B6E75]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </div>

            {/* Contact CTA */}
            <button
              onClick={() => handleItemClick('contact', 'CONTACT')}
              onMouseEnter={() => setCursorMode('open')}
              onMouseLeave={() => setCursorMode('default')}
              className="px-4 py-1.5 font-mono text-xs text-[#F5F5F0] hover:text-white bg-[#101216] hover:bg-[#15171B] border border-white/10 hover:border-white/20 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm group"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3 h-3 text-[#5B8CFF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-[#101216] border border-white/10 text-[#F5F5F0] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Navigation (Section 41) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-300"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
            <span className="font-display font-bold text-lg text-[#F5F5F0]">GARV SHAW</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-[#101216] border border-white/10 text-[#F5F5F0]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-col gap-6 my-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#6B6E75]">
              // ARCHITECTURAL DIRECTORY
            </span>

            {navLinks.concat([{ id: 'contact', label: 'CONTACT' }]).map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id, item.label)}
                className="flex items-center justify-between py-2 text-left group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#5B8CFF]">0{idx + 1}</span>
                  <span className="font-display text-3xl font-bold text-[#F5F5F0] group-hover:text-white group-hover:translate-x-2 transition-all">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6B6E75] group-hover:text-[#5B8CFF] transition-colors" />
              </button>
            ))}
          </div>

          {/* Footer Metadata */}
          <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-2 font-mono text-xs text-[#6B6E75]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[#A5A7AC]">AVAILABLE FOR SELECT PROJECTS</span>
            </div>
            <div>DIGITAL ARCHITECT · AI × CLOUD × SOFTWARE</div>
          </div>
        </div>
      )}
    </>
  );
};
