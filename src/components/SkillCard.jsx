import React from 'react';
import { Code, Globe, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code,
  'Web & MERN Stack': Globe,
  'Databases': Database,
  'Tools & Platforms': Wrench,
};

export default function SkillCard({ category, description, skills }) {
  const IconComponent = categoryIcons[category] || Code;

  return (
    <div className="rounded-xl bg-white border border-slate-200 hover:border-blue-300 p-6 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-sm">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-mono text-slate-900">{category}</h3>
            <span className="font-mono text-[11px] text-slate-500">{skills.length} skills listed</span>
          </div>
        </div>

        {description && (
          <p className="text-xs font-mono text-slate-600 mb-5 leading-relaxed">
            {description}
          </p>
        )}

        <div className="space-y-2.5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-xs sm:text-sm font-mono font-medium text-slate-800">{skill.name}</span>
                {skill.type && (
                  <span className="hidden sm:inline text-[11px] text-slate-500 font-mono">
                    ({skill.type})
                  </span>
                )}
              </div>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                skill.level === 'Intermediate'
                  ? 'bg-blue-50 text-blue-700 border-blue-200 font-medium'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
