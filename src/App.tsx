import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LiveGames } from './components/LiveGames';
import { GameProjects } from './components/GameProjects';
import { InteractivePlayground } from './components/InteractivePlayground';
import { SoftwareProjects } from './components/SoftwareProjects';
import { Skills } from './components/Skills';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { BuildingInPublic } from './components/BuildingInPublic';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { BaseProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<BaseProject | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Elegant Dark Dot Matrix Layer */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] -mr-48 -mt-48 pointer-events-none z-0" />
      <div className="fixed bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[130px] -ml-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-950/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <LiveGames onSelectProject={(project) => setSelectedProject(project)} />
        <GameProjects onSelectProject={(project) => setSelectedProject(project)} />
        <InteractivePlayground />
        <SoftwareProjects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <DevelopmentProcess />
        <BuildingInPublic />
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

