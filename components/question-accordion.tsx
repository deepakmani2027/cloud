'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Question } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

interface QuestionAccordionProps {
  question: Question;
  color: string;
  accent: string;
}

export function QuestionAccordion({ question, color, accent }: QuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasAnswer = question.answer && question.answer.length > 0;

  return (
    <div className="border border-slate-700/50 rounded-lg overflow-hidden transition-all duration-200 hover:border-slate-600/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left hover:bg-slate-900/50 transition-colors flex items-start gap-4 group"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <span
              className="text-sm font-semibold px-2.5 py-1 rounded-full"
              style={{
                color: color,
                backgroundColor: `${color}15`,
                border: `1px solid ${color}40`,
              }}
            >
              Q{question.no}
            </span>
            {question.tag && (
              <span className="text-xs font-medium text-amber-400/80 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
                {question.tag}
              </span>
            )}
            {question.marks && (
              <span className="text-xs text-slate-400">
                <span className="text-slate-500">Marks:</span> {question.marks}
              </span>
            )}
            {question.co && (
              <span className="text-xs text-slate-400">
                <span className="text-slate-500">CO:</span> {question.co}
              </span>
            )}
          </div>
          <p className="text-slate-100 text-sm leading-relaxed">{question.text}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } group-hover:opacity-100 opacity-70`}
          style={{ color: color }}
        />
      </button>

      {isOpen && hasAnswer && (
        <div
          className="px-4 py-4 border-t border-slate-700/50"
          style={{
            backgroundColor: `${accent}08`,
          }}
        >
          <div className="space-y-4">
            {question.answer!.map((section, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4
                  className="font-semibold text-sm"
                  style={{
                    color: accent,
                  }}
                >
                  {section.heading}
                </h4>
                <p className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                  {section.body}
                </p>
                {section.imageSrc && (
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-700/50 bg-slate-950/40 p-3">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt ?? section.heading}
                      width={900}
                      height={600}
                      className="h-auto w-full rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
