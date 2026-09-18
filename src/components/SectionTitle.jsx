import React from 'react';

export default function SectionTitle({ tag, title, subtitle, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-10 ${alignmentClass}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded font-mono text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-3">
          <span>// {tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-mono">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs sm:text-sm font-mono text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
