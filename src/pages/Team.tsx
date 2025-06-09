
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Team = () => {
  useScrollReveal();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.6s ease-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      position: 'Managing Partner',
      specialization: 'Corporate Law & M&A',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face',
      bio: 'Harvard Law graduate with 20+ years experience in complex corporate transactions.',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'David Chen',
      position: 'Senior Partner',
      specialization: 'Real Estate Law',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Specialized in commercial real estate with $2B+ in transaction experience.',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Partner',
      specialization: 'Tax Law',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Former IRS attorney with expertise in complex tax planning and compliance.',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'James Thompson',
      position: 'Partner',
      specialization: 'Employment Law',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading employment law expert with successful representation of Fortune 500 companies.',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'Emily Foster',
      position: 'Senior Associate',
      specialization: 'Intellectual Property',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      bio: 'Technology law specialist with background in software engineering.',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'Robert Kim',
      position: 'Senior Associate',
      specialization: 'Regulatory Compliance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      bio: 'Former federal regulator with deep knowledge of compliance frameworks.',
      linkedin: '#',
      facebook: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-libre font-bold mb-6 tracking-tight">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto font-lato font-light leading-relaxed">
              Our team of elite attorneys brings decades of experience and unparalleled expertise to every client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group scroll-reveal"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="glass-card rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    
                    {/* Overlay with info */}
                    <div className={`absolute inset-0 bg-background/90 backdrop-blur-md flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <h3 className="text-xl font-libre font-bold mb-2 text-center tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-primary font-lato font-medium mb-1">
                        {member.position}
                      </p>
                      <p className="text-body font-lato font-light text-sm mb-4 text-center">
                        Specializes in {member.specialization}
                      </p>
                      <p className="text-body font-lato font-light text-xs text-center mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="flex space-x-4">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                        >
                          <i className="ph-light ph-linkedin-logo text-primary"></i>
                        </a>
                        <a
                          href={member.facebook}
                          className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                        >
                          <i className="ph-light ph-facebook-logo text-primary"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-libre font-bold mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-primary font-lato font-medium text-sm mb-1">
                      {member.position}
                    </p>
                    <p className="text-body font-lato font-light text-sm">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 scroll-reveal">
            <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-libre font-bold mb-6 tracking-tight">
                Join Our Team
              </h2>
              <p className="text-lg text-body font-lato font-light leading-relaxed mb-8">
                We're always looking for exceptional legal professionals who share our commitment to excellence and client service.
              </p>
              <button className="neomorphic-btn px-8 py-4 rounded-lg text-foreground font-lato font-medium transition-all duration-300 hover:scale-105">
                <span className="flex items-center space-x-2">
                  <span>View Career Opportunities</span>
                  <i className="ph-light ph-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
