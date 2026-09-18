import React from 'react';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

export default function EducationCard({ item, isLast = false }) {
  const { degree, institution, board, duration, score, scoreLabel, stream, highlights, status } = item;

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 group-hover:border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 shadow-2xs transition-all">
          <GraduationCap className="w-5 h-5" />
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-slate-200 my-2 group-hover:bg-blue-300 transition-colors"></div>
        )}
      </div>

      {/* Card Content */}
      <div className="grow pb-10">
        <div className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-5 sm:p-6 shadow-xs hover:shadow-sm transition-all">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold font-mono text-slate-900">
                  {degree}
                </h3>
                {status && (
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    status === 'Current'
                      ? 'bg-blue-50 text-blue-700 border-blue-200 font-medium'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium'
                  }`}>
                    {status}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-mono text-xs sm:text-sm mt-1.5">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{institution}</span>
              </div>
            </div>

            {/* Duration badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 self-start">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Details Row: Board, Stream, Score */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-3 my-2 border-y border-slate-100 text-xs font-mono">
            {board && (
              <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600">
                Board: <strong className="text-slate-800">{board}</strong>
              </span>
            )}
            {stream && (
              <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600">
                Stream: <strong className="text-slate-800">{stream}</strong>
              </span>
            )}
            {score && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                {scoreLabel ? `${scoreLabel}: ${score}` : score}
              </span>
            )}
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm font-mono text-slate-600 list-disc list-inside marker:text-blue-600">
              {highlights.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
}
