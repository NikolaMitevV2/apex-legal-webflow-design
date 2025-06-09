
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.6s ease-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <div id="about">
        <MissionSection />
      </div>
      <div id="team">
        {/* Team section placeholder - will be implemented in Meet Our Team page */}
      </div>
      <TestimonialsSection />
      <FeaturedSection />
      <div id="contact">
        {/* Contact section placeholder - will be implemented in Contact page */}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
