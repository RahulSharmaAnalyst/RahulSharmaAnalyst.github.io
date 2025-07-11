
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
