
import React, { useState } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Corporate & M&A',
      description: 'Expert guidance through complex corporate transactions, mergers, and acquisitions. Our team provides strategic counsel to ensure successful business combinations and corporate restructuring.',
      details: 'We handle everything from due diligence to post-merger integration, ensuring compliance with all regulatory requirements while maximizing value for our clients.'
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive real estate legal services covering commercial and residential transactions, development projects, and property disputes.',
      details: 'From contract negotiation to closing, we protect your interests in all real estate matters, including zoning issues, environmental compliance, and investment strategies.'
    },
    {
      title: 'Tax Law',
      description: 'Strategic tax planning and compliance services to minimize liability while ensuring full regulatory compliance for individuals and businesses.',
      details: 'Our tax attorneys work closely with your financial advisors to develop comprehensive strategies that protect your assets and optimize your tax position.'
    },
    {
      title: 'Other Specialties',
      description: 'Additional legal services including employment law, intellectual property protection, and regulatory compliance across various industries.',
      details: 'We offer specialized expertise in emerging areas of law, providing innovative solutions for complex legal challenges in the modern business environment.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-libre font-bold mb-6 tracking-tight">
            Areas of <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto font-lato font-light">
            Our specialized legal services are designed to meet the complex needs of modern businesses and individuals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services List */}
          <div className="space-y-4 scroll-reveal">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-primary/10 border-primary/30' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className="text-xl font-libre font-bold mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-body font-lato font-light text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-libre font-bold mb-4 text-primary tracking-tight">
                {services[activeService].title}
              </h3>
              <p className="text-body font-lato font-light leading-relaxed mb-6">
                {services[activeService].description}
              </p>
              <p className="text-body font-lato font-light leading-relaxed">
                {services[activeService].details}
              </p>
              <button className="neomorphic-btn px-6 py-3 rounded-lg mt-6 text-foreground font-lato font-medium transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
