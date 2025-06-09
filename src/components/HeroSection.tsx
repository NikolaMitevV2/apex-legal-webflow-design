
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-start justify-center relative overflow-hidden bg-background">
      {/* Hero Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-libre font-bold mb-8 tracking-tight leading-none text-foreground">
            ELITE LEGAL
            <br />
            <span className="text-primary">EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-lato font-light leading-relaxed">
            An investment firm born to accelerate the
            <br />
            improvement of obsolete industry standards.
          </p>
          
          <button className="premium-btn px-8 py-4 text-foreground font-lato font-medium transition-all duration-300">
            <a href="#contact" className="flex items-center space-x-3">
              <span>Get Legal Consultation</span>
              <i className="ph-light ph-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>

      {/* Hero Image positioned behind and below button */}
      <div className="absolute bottom-0 right-0 w-full max-w-2xl z-10">
        <img
          src="/lovable-uploads/7f4cef78-de7d-4f39-a9aa-dd17fc17e902.png"
          alt="Lady Justice - Symbol of Legal Excellence"
          className="w-full h-auto object-contain opacity-20 ml-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
