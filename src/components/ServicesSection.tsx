
import React, { useState } from 'react';
import { Building2, Home, Calculator, Users } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Corporate & M&A',
      icon: Building2,
      description: 'Expert guidance through complex corporate transactions, mergers, and acquisitions. Our team provides strategic counsel to ensure successful business combinations and corporate restructuring.',
      details: 'We handle everything from due diligence to post-merger integration, ensuring compliance with all regulatory requirements while maximizing value for our clients.'
    },
    {
      title: 'Real Estate Law',
      icon: Home,
      description: 'Comprehensive real estate legal services covering commercial and residential transactions, development projects, and property disputes.',
      details: 'From contract negotiation to closing, we protect your interests in all real estate matters, including zoning issues, environmental compliance, and investment strategies.'
    },
    {
      title: 'Tax Law',
      icon: Calculator,
      description: 'Strategic tax planning and compliance services to minimize liability while ensuring full regulatory compliance for individuals and businesses.',
      details: 'Our tax attorneys work closely with your financial advisors to develop comprehensive strategies that protect your assets and optimize your tax position.'
    },
    {
      title: 'Other Specialties',
      icon: Users,
      description: 'Additional legal services including employment law, intellectual property protection, and regulatory compliance across various industries.',
      details: 'We offer specialized expertise in emerging areas of law, providing innovative solutions for complex legal challenges in the modern business environment.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-lato font-bold mb-6 tracking-tight text-foreground">
            AREAS OF <span className="text-primary">EXPERTISE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-lato font-light leading-relaxed">
            Our specialized legal services are designed to meet the complex needs of modern businesses and individuals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services List */}
          <div className="space-y-4 scroll-reveal">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 flex items-start space-x-4 ${
                    activeService === index 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-lato font-semibold mb-2 tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-lato font-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Details */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                {React.createElement(services[activeService].icon, { 
                  className: "w-8 h-8 text-primary" 
                })}
                <h3 className="text-2xl font-lato font-bold text-primary tracking-tight">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-muted-foreground font-lato font-light leading-relaxed mb-6">
                {services[activeService].description}
              </p>
              <p className="text-muted-foreground font-lato font-light leading-relaxed mb-8">
                {services[activeService].details}
              </p>
              <button className="premium-btn px-6 py-3 text-foreground font-lato font-medium transition-all duration-300">
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
