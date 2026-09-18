import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, MapPin, Languages, ArrowRight, User } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { profileData } from '../data/profile';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto pb-16 space-y-12">
      
      <SectionTitle
        tag="who_am_i"
        title="About Me"
        subtitle="Background, engineering focus, and core technical pursuits."
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Bio & Details */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Objective Callout */}
          <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 border-l-4 border-l-blue-600 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
              // Career Objective
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-800 leading-relaxed italic">
              "{profileData.objective}"
            </p>
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm font-mono text-slate-700 leading-relaxed">
            {profileData.aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* LeetCode / Coding Profile Focus */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-xs sm:text-sm">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Problem Solving & Data Structures</span>
            </div>
            <p className="text-xs font-mono text-slate-600 leading-relaxed">
              <strong className="text-slate-800">LeetCode:</strong> Regularly practicing problem-solving and Data Structures & Algorithms using Java, C, and C++.
            </p>
          </div>

          {/* Spoken Languages Table / Cards */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-xs sm:text-sm">
              <Languages className="w-4 h-4 text-blue-600" />
              <span>Languages Known</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {profileData.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-center"
                >
                  <p className="font-bold text-slate-800">{lang.language}</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {[
                      lang.speak ? 'Speak' : null,
                      lang.read ? 'Read' : null,
                      lang.write ? 'Write' : null,
                    ]
                      .filter(Boolean)
                      .join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Quick facts card & Photo */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Photo Preview card */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-4">
            <img
              src={profileImg}
              alt="Gopal Sarkar"
              className="w-20 h-20 rounded-lg object-cover object-top border border-slate-200"
            />
            <div>
              <h4 className="font-bold font-mono text-slate-900 text-sm sm:text-base">{profileData.name}</h4>
              <p className="text-xs text-slate-600 font-mono">{profileData.title}</p>
              <p className="text-xs text-blue-600 font-mono mt-1 font-medium">{profileData.college}</p>
            </div>
          </div>

          {/* Personal & Academic Details */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-2 font-bold">
              <User className="w-3.5 h-3.5 text-blue-600" /> Personal Information
            </h4>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Current Institution:</span>
                <span className="text-slate-800 font-medium">{profileData.college}</span>
              </div>
              <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Degree:</span>
                <span className="text-slate-800 font-medium">{profileData.degree}</span>
              </div>
              <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Batch / Duration:</span>
                <span className="text-slate-800 font-medium">{profileData.batch}</span>
              </div>
              <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-800 font-medium flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  {profileData.location}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/education"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                <span>View Full Academic History</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
