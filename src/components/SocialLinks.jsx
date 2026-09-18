import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { profileData } from '../data/profile';

export default function SocialLinks({ className = '', showLabels = false }) {
  const links = [
    {
      name: 'GitHub',
      url: profileData.github,
      icon: Github,
      color: 'hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50',
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50',
    },
    {
      name: 'Email',
      url: `mailto:${profileData.email}`,
      icon: Mail,
      color: 'hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50',
    },
    {
      name: 'Phone',
      url: `tel:${profileData.phone}`,
      icon: Phone,
      color: 'hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50',
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'Phone' && link.name !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 ${link.color} transition-all duration-150 text-xs font-mono shadow-2xs`}
          >
            <Icon className="w-4 h-4 text-blue-600 shrink-0" />
            {showLabels && <span>{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
