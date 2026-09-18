import React from 'react';
import { Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function ProjectCard({ project }) {
  const { title, year, tagline, description, technologies, liveUrl, githubUrl, deployment } = project;

  return (
    <div className="group relative rounded-xl bg-white border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md">
      
      <div>
        {/* Header: Title, Year & Deployment */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold font-mono text-slate-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              {year && (
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  {year}
                </span>
              )}
            </div>
            {tagline && (
              <p className="text-xs font-mono text-slate-600 font-medium mt-1">
                {tagline}
              </p>
            )}
          </div>
          
          {deployment && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {deployment}
            </span>
          )}
        </div>

        {/* Bullet description */}
        <ul className="mt-4 space-y-2 text-xs sm:text-sm font-mono text-slate-600 leading-relaxed list-disc list-inside marker:text-blue-600">
          {Array.isArray(description) ? (
            description.map((point, index) => (
              <li key={index} className="pl-1">
                <span className="text-slate-700">{point}</span>
              </li>
            ))
          ) : (
            <p className="text-slate-700">{description}</p>
          )}
        </ul>

        {/* Tech Badges */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5 font-semibold">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Code / GitHub</span>
          </a>
        )}
      </div>

    </div>
  );
}
