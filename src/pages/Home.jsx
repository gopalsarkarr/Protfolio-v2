import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Code2, GraduationCap, FolderGit2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import profileImg from '../assets/profile.jpeg';

export default function Home() {
  const featuredProject = projectsData[0];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="pt-8 sm:pt-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text & Intro Column */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Software Development Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm text-blue-600 font-semibold tracking-wide">
                &gt; Hello, World!
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-mono">
                Hi, I'm <span className="text-blue-600">{profileData.name}</span>
              </h1>
              <h2 className="text-base sm:text-lg font-mono font-medium text-slate-700">
                {profileData.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-500">
                {profileData.college} (2023 – 2027)
              </p>
            </div>

            {/* Introduction based strictly on resume */}
            <p className="text-slate-600 text-xs sm:text-sm font-mono leading-relaxed max-w-xl mx-auto lg:mx-0">
              {profileData.objective}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-800 bg-white hover:bg-slate-100 hover:text-blue-600 border border-slate-300 shadow-2xs transition-all"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </Link>
            </div>

            {/* Social icons */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500 mr-1">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-2xs transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 shadow-2xs transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-blue-200 via-slate-200 to-transparent blur-xs"></div>

              {/* Photo Card Container */}
              <div className="relative rounded-2xl bg-white border border-slate-200 p-2.5 shadow-xl">
                <div className="w-60 sm:w-72 h-72 sm:h-88 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Gopal Sarkar - B.Tech CSE Student"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Minimal terminal footer badge */}
                <div className="mt-2.5 px-2 py-1.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-700 font-medium">gopal@dev:~</span>
                  </div>
                  <span className="text-blue-600 font-semibold">React • Java • MERN</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Highlights Quick Grid */}
      <section className="max-w-5xl mx-auto pt-8 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
            <div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 w-fit mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-mono text-slate-900">Core Skills</h3>
              <p className="text-xs font-mono text-slate-600 mt-1 leading-relaxed">
                Java, C, C++, JavaScript, React.js, Node.js, Express.js, MongoDB & MySQL.
              </p>
            </div>
            <Link to="/skills" className="mt-4 inline-flex items-center text-xs font-mono font-medium text-blue-600 hover:text-blue-800">
              Explore technical stack →
            </Link>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
            <div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 w-fit mb-3">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-mono text-slate-900">Featured Project</h3>
              <p className="text-xs font-mono text-slate-600 mt-1 leading-relaxed">
                {featuredProject.title} — Built with React, Vite, Tailwind CSS, Supabase, and Recharts.
              </p>
            </div>
            <Link to="/projects" className="mt-4 inline-flex items-center text-xs font-mono font-medium text-blue-600 hover:text-blue-800">
              View live demo & repo →
            </Link>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
            <div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 w-fit mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold font-mono text-slate-900">Education</h3>
              <p className="text-xs font-mono text-slate-600 mt-1 leading-relaxed">
                B.Tech 4th Year CSE at Hooghly Engineering and Technology College.
              </p>
            </div>
            <Link to="/education" className="mt-4 inline-flex items-center text-xs font-mono font-medium text-blue-600 hover:text-blue-800">
              View academic timeline →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
