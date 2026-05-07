'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { QuestionAccordion } from '@/components/question-accordion';
import { SearchBar } from '@/components/search-bar';
import type { ModuleData } from '@/lib/data';

export function ModulePageContent({ module }: { module: ModuleData }) {
  const [search, setSearch] = useState('');

  const answeredCount = module.questions.filter((question) => question.answer && question.answer.length > 0).length;
  const totalCount = module.questions.length;
  const percentage = Math.round((answeredCount / totalCount) * 100);

  const filteredQuestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return module.questions;

    return module.questions.filter(
      (question) =>
        question.text.toLowerCase().includes(query) ||
        String(question.no).includes(query) ||
        question.tag?.toLowerCase().includes(query) ||
        question.co?.toLowerCase().includes(query),
    );
  }, [search, module.questions]);

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at top right, ${module.color}20, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10">
        <header className="border-b border-slate-800/50 backdrop-blur-md z-40 bg-slate-950/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors mb-4 text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to modules
            </Link>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                  style={{
                    color: module.color,
                    backgroundColor: `${module.color}15`,
                    border: `1px solid ${module.color}40`,
                  }}
                >
                  {module.hours}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{module.title}</h1>
                <p className="text-slate-400 text-sm sm:text-base">{module.subtitle}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400">Progress</span>
                <span style={{ color: module.color }}>{percentage}%</span>
              </div>
              <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: module.color,
                    boxShadow: `0 0 10px ${module.color}80`,
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  {answeredCount}/{totalCount} questions answered
                </span>
              </div>
            </div>

            <div className="w-full max-w-sm">
              <SearchBar value={search} onChange={setSearch} placeholder="Search in this module..." />
            </div>
          </div>
        </header>

        <section className="border-b border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Topics Covered</h2>
            <div className="flex flex-wrap gap-2">
              {module.topics.split('·').map((topic, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-300"
                  style={{
                    backgroundColor: `${module.color}10`,
                    border: `1px solid ${module.color}30`,
                  }}
                >
                  {topic.trim()}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredQuestions.length > 0 ? (
            <>
              <h2 className="text-lg font-semibold mb-6 text-slate-200">
                {search
                  ? `Found ${filteredQuestions.length} question${filteredQuestions.length !== 1 ? 's' : ''}`
                  : `All Questions (${totalCount})`}
              </h2>
              <div className="space-y-3">
                {filteredQuestions.map((question) => (
                  <QuestionAccordion
                    key={`${module.id}-${question.no}`}
                    question={question}
                    color={module.color}
                    accent={module.accent}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-400 mb-2">No questions found matching your search.</p>
              <p className="text-slate-500 text-sm">Try a different search term.</p>
            </div>
          )}
        </section>

        <footer className="border-t border-slate-800/50 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                {module.title} — {totalCount} questions
              </p>
              <Link
                href="/"
                className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium"
              >
                View all modules
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}