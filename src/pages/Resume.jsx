import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { FileDown, ExternalLink, Printer, Mail, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-10 font-mono">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <SectionTitle
          tag="curriculum_vitae"
          title="Resume"
          subtitle="Official technical resume. Preview below or download a PDF copy."
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0 mb-6 sm:mb-0">
          <a
            href="/Gopal_Sarkar_Resume.pdf"
            download="Gopal_Sarkar_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
          >
            <FileDown className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href="/Gopal_Sarkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all"
            title="Open original PDF in new tab"
          >
            <ExternalLink className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Open PDF</span>
          </a>

          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all"
            title="Print resume"
          >
            <Printer className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Styled Resume Preview Sheet (matching uploaded resume structure) */}
      <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8 font-mono text-slate-700">
        
        {/* Header / Contact Info */}
        <div className="text-center border-b border-slate-200 pb-6 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {profileData.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-600" /> {profileData.phone}
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" /> {profileData.email}
            </span>
            <span>|</span>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/gopal-sarkar
            </a>
            <span>|</span>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
            >
              <Github className="w-3.5 h-3.5" /> github.com/gopalsarkarr
            </a>
          </div>
        </div>

        {/* Objective */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            OBJECTIVE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            • {profileData.objective}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            TECHNICAL SKILLS
          </h2>
          <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
            <p>
              • <strong className="text-slate-900">Programming Languages:</strong> Java (Intermediate), C (Intermediate), C++ (Basic), JavaScript (Intermediate)
            </p>
            <p>
              • <strong className="text-slate-900">Web and MERN Stack:</strong> HTML (Intermediate), CSS (Intermediate), React.js (Intermediate), Node.js (Intermediate), Express.js (Intermediate)
            </p>
            <p>
              • <strong className="text-slate-900">Database:</strong> MongoDB (Intermediate), MySQL (Intermediate)
            </p>
            <p>
              • <strong className="text-slate-900">Tools and Platforms:</strong> Git, VS Code, Vercel
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            PROJECTS
          </h2>
          {projectsData.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-slate-900">{project.title}</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-blue-700 font-medium">
                    {project.technologies.join(', ')}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    [Live Demo]
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    [GitHub]
                  </a>
                </div>
                <span className="text-xs text-slate-500">{project.year}</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                {project.description.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            EDUCATION
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <p>
              • <strong className="text-slate-900">B.Tech in Computer Science and Engineering (CSE)</strong> : 2023 – 2027 Hooghly Engineering and Technology College
            </p>
            <p>
              • <strong className="text-slate-900">Higher Secondary (12th) Board</strong> : [WBCHSE] : 2023 Percentage: 60% (Banbole High School)
            </p>
            <p>
              • <strong className="text-slate-900">Secondary (10th) Board</strong> : [WBBSE] : 2021 Percentage: 83% (Soashi High School)
            </p>
          </div>
        </section>

        {/* Coding Profiles */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            CODING PROFILES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            • <strong className="text-slate-900">LeetCode:</strong> Regularly practicing problem-solving and Data Structures & Algorithms in Java, C, and C++.
          </p>
        </section>

        {/* Personal Details */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1">
            PERSONAL DETAILS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div><span className="text-slate-500">Fathers Name:</span> Dutiram Sarkar</div>
            <div><span className="text-slate-500">Mothers Name:</span> Bhakti Rani Sarkar</div>
            <div><span className="text-slate-500">Date of Birth:</span> 21-07-2005</div>
            <div><span className="text-slate-500">Passport:</span> No</div>
            <div className="sm:col-span-2">
              <span className="text-slate-500">Address:</span> Pardha, Kamlai, Raiganj, Uttar Dinajpur, West Bengal, 733143
            </div>
          </div>

          <div className="mt-3 pt-2">
            <p className="text-xs text-slate-600 mb-2 font-semibold">Languages Known:</p>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
              <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-slate-700 font-bold border-b border-slate-200">
                <div>Language</div>
                <div>Speak</div>
                <div>Read</div>
                <div>Write</div>
              </div>
              <div className="grid grid-cols-4 px-3 py-2 border-b border-slate-100">
                <div className="text-slate-900 font-medium">English</div>
                <div className="text-emerald-600 font-bold">Yes</div>
                <div className="text-emerald-600 font-bold">Yes</div>
                <div className="text-emerald-600 font-bold">Yes</div>
              </div>
              <div className="grid grid-cols-4 px-3 py-2 border-b border-slate-100">
                <div className="text-slate-900 font-medium">Hindi</div>
                <div className="text-emerald-600 font-bold">Yes</div>
                <div className="text-slate-400">No</div>
                <div className="text-slate-400">No</div>
              </div>
              <div className="grid grid-cols-4 px-3 py-2">
                <div className="text-slate-900 font-medium">Bengali</div>
                <div className="text-emerald-600 font-bold">Yes</div>
                <div className="text-emerald-600 font-bold">Yes</div>
                <div className="text-emerald-600 font-bold">Yes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration */}
        <section className="pt-4 border-t border-slate-200 space-y-4 text-xs text-slate-500">
          <p>∗ N.B. : I confirm that all the above information is true to the best of my knowledge.</p>
          <div className="flex items-end justify-between pt-4">
            <div>∗ Date: September 18, 2026</div>
            <div className="text-right border-t border-slate-300 pt-1.5 px-4">
              <p className="font-bold text-slate-900">Gopal Sarkar</p>
              <p className="text-[11px] text-slate-500">(Signature)</p>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
