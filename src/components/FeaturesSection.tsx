
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'ph-light ph-shield-check',
      title: 'Proven Results',
      description: 'Over 95% success rate in complex legal matters with measurable outcomes for our clients.'
    },
    {
      icon: 'ph-light ph-clock',
      title: '24/7 Support',
      description: 'Round-the-clock legal support for urgent matters and time-sensitive situations.'
    },
    {
      icon: 'ph-light ph-users',
      title: 'Expert Team',
      description: 'Harvard and Yale-educated attorneys with decades of experience in their respective fields.'
    },
    {
      icon: 'ph-light ph-medal',
      title: 'Award Winning',
      description: 'Recognized by leading legal publications and peer organizations for excellence in service.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-lato font-bold mb-6 tracking-tight text-foreground">
            Why Choose <span className="text-primary">Apex Legal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-lato font-light">
            Our commitment to excellence sets us apart in the legal industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center scroll-reveal hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <i className={`${feature.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-lato font-bold mb-3 tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-lato font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
