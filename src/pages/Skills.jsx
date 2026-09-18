import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto pb-16 space-y-12">
      
      <SectionTitle
        tag="technical_stack"
        title="Technical Skills"
        subtitle="Categorized breakdown of programming languages, web frameworks, databases, and engineering tools verified on my resume."
      />

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard
            key={cat.category}
            category={cat.category}
            description={cat.description}
            skills={cat.skills}
          />
        ))}
      </div>

      {/* Coding Profiles & Problem Solving */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-mono text-slate-900">Coding Profile & Problem Solving</h3>
              <p className="text-xs text-slate-500 font-mono">Data Structures & Algorithms</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 border border-blue-200 text-blue-700 font-semibold self-start sm:self-auto">
            Active Learner
          </span>
        </div>

        <div className="mt-4 space-y-2 text-xs sm:text-sm font-mono text-slate-700">
          <p className="flex items-start gap-2 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900">LeetCode:</strong> Regularly practicing problem-solving and Data Structures & Algorithms in <span className="text-blue-600 font-semibold">Java</span>, <span className="text-blue-600 font-semibold">C</span>, and <span className="text-blue-600 font-semibold">C++</span>.
            </span>
          </p>
        </div>
      </div>

    </div>
  );
}
