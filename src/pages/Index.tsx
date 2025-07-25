
import React, { useEffect, useState } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <AboutSection scrollY={scrollY} />
        <SkillsSection scrollY={scrollY} />
        <CertificationsSection scrollY={scrollY} />
        <ProjectsSection scrollY={scrollY} />
        <ExperienceSection scrollY={scrollY} />
        <EducationSection scrollY={scrollY} />
        <ContactSection scrollY={scrollY} />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
