'use client';

import { useState, useMemo } from 'react';
import { modules, getTotalStats } from '@/lib/data';
import { ModuleCard } from '@/components/module-card';
import { SearchBar } from '@/components/search-bar';
import { Zap } from 'lucide-react';

export default function Home() {
  const [search, setSearch] = useState('');
  const stats = getTotalStats();

  // Filter modules by search
  const filteredModules = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return modules;

    return modules.filter(
      (module) =>
        module.title.toLowerCase().includes(query) ||
        module.subtitle.toLowerCase().includes(query) ||
        module.topics.toLowerCase().includes(query),
    );
  }, [search]);

  // Calculate stats for each module
  const moduleStats = useMemo(() => {
    return modules.map((module) => ({
      id: module.id,
      questionCount: module.questions.length,
      answeredCount: module.questions.filter((q) => q.answer && q.answer.length > 0).length,
    }));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          style={{ animation: 'pulse 15s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-40 left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"
          style={{ animation: 'pulse 20s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-40 bg-slate-950/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold">Cloud Computing Hub</h1>
              </div>
            </div>
            <div className="w-full max-w-md">
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </div>
        </header>

        {/* Hero section with stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
              A publish-ready cloud computing question bank.
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
              Explore comprehensive study materials across 4 modules. Search questions, track your progress, and master
              cloud computing concepts.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {[
              { label: 'Modules', value: stats.modules, color: '#0ea5e9' },
              { label: 'Questions', value: stats.totalQuestions, color: '#8b5cf6' },
              { label: 'Answered', value: stats.answeredQuestions, color: '#10b981' },
              { label: 'Practice', value: stats.practiceQuestions, color: '#f59e0b' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm"
                style={{
                  borderColor: `${stat.color}40`,
                  background: `${stat.color}08`,
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Modules grid */}
          <div>
            {filteredModules.length > 0 ? (
              <>
                <h3 className="text-lg font-semibold mb-6 text-slate-200">
                  {search ? `Found ${filteredModules.length} module${filteredModules.length !== 1 ? 's' : ''}` : 'Study Modules'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredModules.map((module) => {
                    const stats = moduleStats.find((s) => s.id === module.id)!;
                    return (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        questionCount={stats.questionCount}
                        answeredCount={stats.answeredCount}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-400 mb-2">No modules found matching your search.</p>
                <p className="text-slate-500 text-sm">Try a different search term.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-slate-400 text-sm text-center">
              Cloud Computing Study Materials — Comprehensive question bank with detailed answers
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </main>
  );
}
