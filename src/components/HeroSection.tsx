
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10" />
      
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-libre font-bold mb-6 tracking-tight">
          Elite Legal
          <br />
          <span className="text-primary">Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-body max-w-2xl mx-auto mb-8 font-lato font-light leading-relaxed">
          Apex Legal Group delivers unparalleled legal expertise with a commitment to justice, integrity, and exceptional client service.
        </p>
        <button className="neomorphic-btn px-8 py-4 rounded-lg text-foreground font-lato font-medium transition-all duration-300 hover:scale-105">
          <a href="#contact" className="flex items-center space-x-2">
            <span>Get Legal Consultation</span>
            <i className="ph-light ph-arrow-right"></i>
          </a>
        </button>
      </div>

      <div className="relative z-20 mt-12 w-full max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 shadow-2xl">
          <img
            src="/lovable-uploads/7f4cef78-de7d-4f39-a9aa-dd17fc17e902.png"
            alt="Lady Justice - Symbol of Legal Excellence"
            className="w-full h-auto max-h-96 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
