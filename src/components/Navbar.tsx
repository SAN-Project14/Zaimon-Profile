import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Code2, Sparkles, Terminal, FileText, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'live-games', 'game-projects', 'playground', 'software-projects', 'skills', 'process', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Games', href: '#live-games', id: 'live-games', badge: 'Playable' },
    { name: 'Projects', href: '#software-projects', id: 'software-projects' },
    { name: 'Playground', href: '#playground', id: 'playground', isDemo: true },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050505]/85 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="navbar-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-black text-black text-sm group-hover:scale-105 group-hover:bg-cyan-400 transition-all">
            ZA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg text-white tracking-tighter">
                {personalInfo.name}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono-code font-bold bg-white/10 text-cyan-400 border border-white/10">
                STUDIO
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block font-mono-code">
              Game Dev &bull; Software
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-400 bg-white/10 border border-white/10 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[8px] font-mono-code bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30 animate-pulse">
                    ● {link.badge}
                  </span>
                )}
                {link.isDemo && (
                  <span className="inline-flex items-center px-1 py-0.2 rounded text-[8px] font-mono-code bg-white/10 text-cyan-300 font-semibold">
                    PHYSICS
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="navbar-cta-button"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Work Together</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-white/10 text-cyan-400 border border-white/10'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[9px] font-mono-code bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              id="mobile-navbar-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 px-4 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
