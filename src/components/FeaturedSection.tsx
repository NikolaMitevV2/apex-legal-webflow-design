
import React from 'react';

const FeaturedSection = () => {
  const companies = [
    { name: 'Fortune 500 Corp', logo: 'F500' },
    { name: 'Global Ventures', logo: 'GV' },
    { name: 'Tech Solutions Inc', logo: 'TSI' },
    { name: 'Metropolitan Bank', logo: 'MB' },
    { name: 'Innovation Partners', logo: 'IP' },
    { name: 'Strategic Holdings', logo: 'SH' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Trusted by Industry <span className="text-primary">Leaders</span>
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto font-lato font-light">
            We're proud to represent some of the most respected organizations across various industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center scroll-reveal">
          {companies.map((company, index) => (
            <div key={index} className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-libre font-bold text-sm">
                  {company.logo}
                </span>
              </div>
              <p className="text-body font-lato font-light text-xs">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
