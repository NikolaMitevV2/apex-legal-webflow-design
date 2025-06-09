
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10" />
      
      {/* Centered Hero Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in-up flex flex-col items-center justify-center min-h-screen">
        <div className="mb-8">
          <p className="text-sm md:text-base text-body font-lato font-light tracking-wide mb-4 opacity-70">
            Introducing
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-libre font-bold mb-6 tracking-tight leading-none">
            Apex Legal
            <br />
            <span className="text-primary">Group</span>
          </h1>
          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto mb-12 font-lato font-light leading-relaxed opacity-80">
            The world's best legal services,
            <br />
            powered by expertise & excellence.
          </p>
        </div>
        
        <button className="modern-btn px-12 py-4 rounded-full text-foreground font-lato font-medium transition-all duration-500">
          <a href="#contact" className="flex items-center space-x-3">
            <span>Get Legal Consultation</span>
            <i className="ph-light ph-arrow-right"></i>
          </a>
        </button>
      </div>

      {/* Image without background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto px-4 z-20">
        <img
          src="/lovable-uploads/7f4cef78-de7d-4f39-a9aa-dd17fc17e902.png"
          alt="Lady Justice - Symbol of Legal Excellence"
          className="w-full h-auto max-h-80 object-contain mx-auto opacity-80"
        />
      </div>
    </section>
  );
};

export default HeroSection;
