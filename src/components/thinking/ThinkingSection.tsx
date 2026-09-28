import React, { useState } from 'react';
import { THOUGHTS, ThoughtArticle } from '../../data/thoughts';
import { SectionLabel } from '../design-system/SectionLabel';
import { Heading } from '../design-system/Heading';
import { useEnvironment } from '../../context/EnvironmentContext';
import { ArrowUpRight, BookOpen, Clock, Calendar, Check, X, Sparkles, Layers } from 'lucide-react';

export const ThinkingSection: React.FC = () => {
  const { setCursorMode } = useEnvironment();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<ThoughtArticle | null>(null);

  const categories = ['ALL', 'AI & AGENTS', 'SYSTEM ARCHITECTURE', 'DESIGN & COGNITION', 'BUSINESS & TECH'];

  const filteredArticles =
    selectedCategory === 'ALL'
      ? THOUGHTS
      : THOUGHTS.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="thoughts"
      aria-label="Garv Shaw Architectural Writing & Thinking"
      className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-36 space-y-16 select-none"
    >
      {/* 01: SECTION ENTRY HEADER */}
      <div className="space-y-8 border-b border-white/[0.08] pb-12">
        <div className="flex items-center justify-between">
          <SectionLabel index={4} label="WRITING & THINKING" category="ARCHITECTURAL NOTES" />
          <span className="font-mono text-xs text-[#6B6E75]">04 ESSAYS & FIELD LOGS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F0] leading-[0.94] text-balance">
              EXPLORE
              <br />
              <span className="bg-gradient-to-r from-[#F5F5F0] via-[#5B8CFF] to-[#795CFF] bg-clip-text text-transparent">
                MY THINKING.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#A5A7AC] max-w-xl leading-[1.65]">
              Architectural essays, design constitutions, and technical notes exploring software
              engineering, AI reasoning engines, cloud resilience, and the economic leverage of code.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#08090B] border border-white/[0.08] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[#5B8CFF] border-b border-white/[0.06] pb-2 font-semibold">
              <span>EDITORIAL DISCIPLINE</span>
              <span>80/20 CALM</span>
            </div>
            <p className="font-sans text-[12px] text-[#A5A7AC] leading-relaxed">
              No generic thought leadership or AI-generated filler. Every essay is distilled from
              hands-on production architecture and verified engineering decisions.
            </p>
          </div>
        </div>
      </div>

      {/* 02: CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            onMouseEnter={() => setCursorMode('open')}
            onMouseLeave={() => setCursorMode('default')}
            className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#101216] text-[#F5F5F0] border border-white/25 shadow-md'
                : 'bg-transparent text-[#6B6E75] hover:text-[#A5A7AC] border border-transparent hover:border-white/[0.06]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 03: ARTICLES LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => setActiveArticle(article)}
            onMouseEnter={() => setCursorMode('open')}
            onMouseLeave={() => setCursorMode('default')}
            className="p-8 rounded-[24px] bg-[#08090B] border border-white/[0.08] hover:border-[#5B8CFF]/40 hover:bg-[#0C0E12] transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 group relative overflow-hidden"
          >
            {/* Top Bar: Number, Category, Read Time */}
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="text-[#5B8CFF] font-semibold">SYS // 0{article.number}</span>
                <span className="text-white/20">·</span>
                <span className="text-[#A5A7AC] uppercase tracking-wider">{article.category}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#6B6E75]">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title & Summary */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F0] group-hover:text-white leading-snug transition-colors">
                {article.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#A5A7AC] leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            {/* Key Takeaways Monospace List */}
            <div className="p-4 rounded-xl bg-[#050505] border border-white/[0.04] space-y-2 font-mono text-xs">
              <div className="text-[10px] text-[#6B6E75] uppercase tracking-wider">
                CORE THESIS:
              </div>
              <div className="space-y-1 text-[#A5A7AC] font-sans text-xs">
                {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#5B8CFF] font-mono">›</span>
                    <span className="line-clamp-1">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Read Action */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
              <span className="text-[#6B6E75]">{article.date}</span>
              <div className="flex items-center gap-1 text-[#5B8CFF] group-hover:translate-x-1 transition-transform">
                <span>READ ARCHITECTURAL NOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 04: FULL ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
          className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl overflow-y-auto selection:bg-[#5B8CFF]/30 selection:text-white animate-in fade-in duration-300 p-6 sm:p-12"
        >
          <div className="max-w-4xl mx-auto space-y-12 py-8">
            {/* Top Modal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#5B8CFF]">
                <BookOpen className="w-4 h-4" />
                <span>ARCHITECTURAL NOTE // 0{activeArticle.number}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-3.5 py-1.5 rounded-lg bg-[#101216] border border-white/10 hover:border-white/25 text-[#F5F5F0] font-mono text-xs flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>ESC / CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Headline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#6B6E75] uppercase">
                <span className="text-[#5B8CFF]">{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F5F5F0] tracking-tight leading-tight">
                {activeArticle.title}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-[#A5A7AC] font-light leading-snug">
                {activeArticle.tagline}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#08090B] border border-white/[0.08] space-y-4">
              <span className="font-mono text-xs text-[#5B8CFF] font-semibold uppercase tracking-wider block">
                ARCHITECTURAL TAKEAWAYS
              </span>
              <div className="space-y-2.5 font-sans text-sm text-[#F5F5F0]">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#5B8CFF] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Body Content */}
            <div className="space-y-6 font-sans text-base sm:text-lg text-[#A5A7AC] leading-[1.8]">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Author Sign-Off Bar */}
            <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#6B6E75]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#101216] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-bold">
                  G
                </div>
                <div>
                  <div className="text-[#F5F5F0] font-medium">GARV SHAW</div>
                  <div>DIGITAL ARCHITECT · AI × CLOUD × SOFTWARE</div>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl bg-[#101216] border border-white/15 text-[#F5F5F0] hover:text-white"
              >
                RETURN TO OVERVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
