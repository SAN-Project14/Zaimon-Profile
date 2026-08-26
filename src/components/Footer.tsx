import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail, Heart, Gamepad2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Games', href: '#live-games' },
    { name: 'Projects', href: '#software-projects' },
    { name: 'Playground', href: '#playground' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#030303] border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand & Title */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-heading font-black text-xl text-white tracking-tight">
            {personalInfo.name}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-mono-code text-cyan-400 mb-6 font-bold uppercase tracking-wider">
          Game Developer &bull; Programmer &bull; Creator
        </p>

        {/* Core Statement */}
        <p className="text-xs sm:text-sm text-gray-400 italic max-w-lg mb-8">
          &ldquo;{personalInfo.statement}&rdquo;
        </p>

        {/* Quick Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-mono-code text-gray-400 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all"
            aria-label="Email Zaimon"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full max-w-3xl pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-500">
          <div>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
