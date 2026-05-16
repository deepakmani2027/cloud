'use client';

import Link from 'next/link';
import { ModuleData } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleData;
  questionCount: number;
  answeredCount: number;
}

export function ModuleCard({ module, questionCount, answeredCount }: ModuleCardProps) {
  const answeredPercentage = questionCount > 0 ? Math.round((answeredCount / questionCount) * 100) : 0;

  return (
    <Link href={`/modules/${module.id}`}>
      <div
        className="group relative overflow-hidden rounded-2xl border border-slate-700/50 p-6 transition-all duration-300 hover:border-slate-600/80 hover:shadow-lg cursor-pointer h-full"
        style={{
          background: `linear-gradient(135deg, ${module.bg}, rgba(0,0,0,0.3))`,
          borderColor: `${module.color}33`,
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at top right, ${module.accent}15, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  color: module.color,
                  backgroundColor: `${module.color}15`,
                  border: `1px solid ${module.color}40`,
                }}
              >
                {module.hours}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{module.title}</h3>
              <p className="text-sm" style={{ color: `${module.color}cc` }}>
                {module.subtitle}
              </p>
            </div>
            <ChevronRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: module.color }}
            />
          </div>

          {/* Topics */}
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {module.topics}
          </p>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Progress</span>
              <span style={{ color: module.color }}>{answeredPercentage}%</span>
            </div>
            <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${answeredPercentage}%`,
                  backgroundColor: module.color,
                  boxShadow: `0 0 10px ${module.color}80`,
                }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>
                {answeredCount}/{questionCount} answered
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
