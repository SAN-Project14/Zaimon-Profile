import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, CheckCircle, Terminal, Sparkles, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Game Development',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        category: 'Game Development',
        subject: '',
        message: '',
      });
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>START A PROJECT</span>
        </div>
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter"
        >
          LET'S BUILD SOMETHING
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mt-3">
          Have a game idea, software project, or collaboration in mind? Let's create something interesting.
        </p>
      </div>

      {/* Main Form & Contact Info Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: Direct Contact & Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between game-card-surface rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-3">
              Direct Communication
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8">
              Whether you need a custom gameplay prototype, a full web game deployment, or a resilient software tool, I am currently available for new projects and engineering roles.
            </p>

            {/* Channels List */}
            <div className="space-y-4 font-mono-code text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">EMAIL DIRECT</span>
                  <span className="font-medium text-white truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-white/5 text-white border border-white/10 group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">GITHUB PROFILE</span>
                  <span className="font-medium text-white truncate block">
                    github.com/{personalInfo.githubUsername}
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">LINKEDIN NETWORK</span>
                  <span className="font-medium text-white truncate block">
                    linkedin.com/in/{personalInfo.githubUsername}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick status footer */}
          <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono-code text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>CURRENT STATUS: Available for new projects & roles</span>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 game-card-surface rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Message Received!
              </h3>
              <p className="text-sm text-gray-300 max-w-md leading-relaxed">
                Thank you for reaching out. I'll review your project details and get back to you promptly at <strong className="text-cyan-400">{personalInfo.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-heading font-bold uppercase tracking-wider border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-mono-code text-gray-300 font-bold uppercase tracking-wider">
                    YOUR NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-mono-code text-gray-300 font-bold uppercase tracking-wider">
                    EMAIL ADDRESS <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@studio.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Project Category & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-category" className="block text-xs font-mono-code text-gray-300 font-bold uppercase tracking-wider">
                    PROJECT SCOPE
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all cursor-pointer"
                  >
                    <option value="Game Development">Game Development / Prototype</option>
                    <option value="Physics Mechanics">Physics / Mechanics Engine</option>
                    <option value="Full-Stack Application">Full-Stack Web Software</option>
                    <option value="Freelance Contract">Freelance Contract</option>
                    <option value="Full-Time Engineering">Full-Time Engineering Role</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono-code text-gray-300 font-bold uppercase tracking-wider">
                    SUBJECT <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. 2D Arcade Game Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono-code text-gray-300 font-bold uppercase tracking-wider">
                  PROJECT DETAILS & GOALS <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your gameplay vision, timeline, mechanics, or tech stack requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="btn-submit-contact"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider bg-cyan-500 text-black hover:bg-cyan-400 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
