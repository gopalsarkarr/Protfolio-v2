import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto pb-16 space-y-10">
      
      <SectionTitle
        tag="software_builds"
        title="Featured Projects"
        subtitle="Showcasing software projects built with modern web technologies, full-stack architectures, and cloud deployments."
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Developer note on adding more projects */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-600">
        <div className="flex items-center gap-2.5">
          <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            More projects can be added simply by appending a new object into <span className="text-slate-900 font-semibold">src/data/projects.js</span>.
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
          {projectsData.length} project{projectsData.length > 1 ? 's' : ''} listed
        </span>
      </div>

    </div>
  );
}
