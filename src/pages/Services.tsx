
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  useScrollReveal();

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.6s ease-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const services = [
    {
      title: 'Corporate & M&A',
      description: 'Expert guidance through complex corporate transactions, mergers, and acquisitions.',
      details: [
        'Due diligence and transaction structuring',
        'Regulatory compliance and approvals',
        'Post-merger integration support',
        'Corporate governance advisory'
      ],
      icon: 'ph-light ph-buildings'
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive real estate legal services for commercial and residential projects.',
      details: [
        'Property acquisition and disposition',
        'Commercial leasing and development',
        'Zoning and land use planning',
        'Real estate investment strategies'
      ],
      icon: 'ph-light ph-house'
    },
    {
      title: 'Tax Law',
      description: 'Strategic tax planning and compliance to minimize liability and ensure compliance.',
      details: [
        'Tax planning and strategy',
        'IRS audit representation',
        'Estate and gift tax planning',
        'International tax compliance'
      ],
      icon: 'ph-light ph-calculator'
    },
    {
      title: 'Employment Law',
      description: 'Comprehensive employment law services for employers and employees.',
      details: [
        'Employment contract drafting',
        'Workplace compliance',
        'Discrimination and harassment claims',
        'Executive compensation'
      ],
      icon: 'ph-light ph-users'
    },
    {
      title: 'Intellectual Property',
      description: 'Protection and enforcement of intellectual property rights.',
      details: [
        'Patent and trademark registration',
        'IP licensing and transfers',
        'Trade secret protection',
        'IP litigation support'
      ],
      icon: 'ph-light ph-lightbulb'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory environments across industries.',
      details: [
        'Compliance program development',
        'Regulatory risk assessment',
        'Government investigations',
        'Industry-specific compliance'
      ],
      icon: 'ph-light ph-shield-check'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-libre font-bold mb-6 tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto font-lato font-light leading-relaxed">
              Apex Legal Group provides comprehensive legal services tailored to meet the complex needs of modern businesses and individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 rounded-xl scroll-reveal hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-2xl font-libre font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-body font-lato font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <i className="ph-light ph-check text-primary mt-1 flex-shrink-0"></i>
                      <span className="text-body font-lato font-light text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center scroll-reveal">
            <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-libre font-bold mb-6 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-body font-lato font-light leading-relaxed mb-8">
                Contact us today for a consultation and discover how Apex Legal Group can help you achieve your legal objectives with confidence and expertise.
              </p>
              <button className="neomorphic-btn px-8 py-4 rounded-lg text-foreground font-lato font-medium transition-all duration-300 hover:scale-105">
                <a href="/contact" className="flex items-center space-x-2">
                  <span>Schedule Consultation</span>
                  <i className="ph-light ph-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
