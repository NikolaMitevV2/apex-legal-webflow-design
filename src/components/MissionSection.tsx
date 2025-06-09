import React from "react";

const MissionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal p-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-body font-lato font-light leading-relaxed mb-6">
              At Apex Legal Group, we are dedicated to providing exceptional
              legal counsel that empowers our clients to achieve their goals
              while upholding the highest standards of justice and integrity.
            </p>
            <p className="text-body font-lato font-light leading-relaxed mb-8">
              We believe in building lasting relationships based on trust,
              transparency, and results. Our approach combines traditional legal
              excellence with innovative strategies to deliver unparalleled
              value.
            </p>
            <button className="rounded-full premium-btn px-8 py-4 text-foreground font-lato font-medium transition-all duration-300">
              <a href="/contact" className="flex items-center space-x-3">
                <span>Get Legal Consultation</span>
                <i className="ph-light ph-arrow-right"></i>
              </a>
            </button>
          </div>

          <div className="grid gap-6 scroll-reveal">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ph-light ph-target text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-mediummb-2 tracking-tight">
                    Vision for Excellence
                  </h3>
                  <p className="text-body font-lato font-light text-sm">
                    To be the premier legal firm setting new standards for
                    client service and legal innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ph-light ph-lightbulb text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">
                    Innovation Focus
                  </h3>
                  <p className="text-body font-lato font-light text-sm">
                    Leveraging cutting-edge technology and creative strategies
                    to solve complex legal challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ph-light ph-handshake text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">
                    Client Partnership
                  </h3>
                  <p className="text-body font-lato font-light text-sm">
                    Building long-term relationships through trust,
                    communication, and exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
