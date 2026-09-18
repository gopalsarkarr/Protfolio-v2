import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, FileDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="group flex items-center space-x-2 text-slate-900 hover:text-blue-600 transition-colors"
          >
            <div className="p-1.5 rounded-md bg-blue-50 border border-blue-200 text-blue-600 group-hover:border-blue-400 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold tracking-tight text-sm sm:text-base text-slate-900">
              <span className="text-blue-600">&lt;</span>
              GopalSarkar
              <span className="text-blue-600"> /&gt;</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 border border-blue-200 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/resume"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-600" />
              CV
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-1 shadow-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <NavLink
              to="/resume"
              className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-sm font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100"
            >
              <FileDown className="w-4 h-4 text-blue-600" />
              View & Download Resume
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
