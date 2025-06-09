
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Tech Innovations Corp',
      text: 'Apex Legal Group guided us through a complex M&A transaction with remarkable expertise. Their attention to detail and strategic thinking saved us millions.',
      result: '$50M successful acquisition',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Real Estate Ventures LLC',
      text: 'Outstanding representation in our commercial real estate portfolio. Professional, responsive, and incredibly knowledgeable about market dynamics.',
      result: '200% ROI increase',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Global Manufacturing Inc',
      text: 'Their tax law expertise helped us restructure our operations, resulting in significant savings while maintaining full compliance.',
      result: '$2M annual tax savings',
      rating: 5
    },
    {
      name: 'James Thompson',
      company: 'Thompson Family Trust',
      text: 'Exceptional estate planning services. They made complex legal matters understandable and provided peace of mind for our family.',
      result: 'Complete estate protection',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl  font-bold mb-6 tracking-tight">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto font-lato font-light">
            Hear from our clients about their exceptional experiences with Apex Legal Group.
          </p>
        </div>

        <div className="relative scroll-reveal">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <i key={i} className="ph-light ph-star text-primary text-xl"></i>
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-lato font-light leading-relaxed mb-8 text-foreground">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full">
                <i className="ph-light ph-chart-line-up text-primary"></i>
                <span className="text-primary font-lato font-medium">
                  {testimonials[currentTestimonial].result}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-libre font-bold tracking-tight">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-body font-lato font-light">
                {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 neomorphic-btn p-3 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 neomorphic-btn p-3 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
