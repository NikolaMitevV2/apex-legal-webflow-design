
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.6s ease-out';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message. We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-libre font-bold mb-6 tracking-tight">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto font-lato font-light leading-relaxed">
              Ready to discuss your legal needs? Our team is here to provide expert counsel and exceptional service.
            </p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Company Info */}
            <div className="scroll-reveal">
              <div className="glass-card p-8 rounded-xl h-full">
                <h2 className="text-3xl font-libre font-bold mb-8 tracking-tight">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ph-light ph-phone text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-libre font-bold mb-1 tracking-tight">Phone</h3>
                      <p className="text-body font-lato font-light">(555) 123-4567</p>
                      <p className="text-body font-lato font-light text-sm">Available 24/7 for urgent matters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ph-light ph-envelope text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-libre font-bold mb-1 tracking-tight">Email</h3>
                      <p className="text-body font-lato font-light">info@apexlegal.com</p>
                      <p className="text-body font-lato font-light text-sm">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ph-light ph-map-pin text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-libre font-bold mb-1 tracking-tight">Location</h3>
                      <p className="text-body font-lato font-light">
                        123 Legal Plaza<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                      <p className="text-body font-lato font-light text-sm">Convenient downtown location</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ph-light ph-clock text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-libre font-bold mb-1 tracking-tight">Office Hours</h3>
                      <p className="text-body font-lato font-light">
                        Monday - Friday: 8:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-3xl font-libre font-bold mb-8 tracking-tight">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-lato font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-body focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-lato font-light"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-lato font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-body focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-lato font-light"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-lato font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-body focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-lato font-light resize-none"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full neomorphic-btn px-8 py-4 rounded-lg text-foreground font-lato font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <i className="ph-light ph-paper-plane-tilt"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-libre font-bold mb-8 tracking-tight text-center">
                Our Location
              </h2>
              <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph-light ph-map-pin text-2xl text-primary"></i>
                  </div>
                  <h3 className="text-xl font-libre font-bold mb-2 tracking-tight">
                    123 Legal Plaza
                  </h3>
                  <p className="text-body font-lato font-light">
                    New York, NY 10001
                  </p>
                  <p className="text-body font-lato font-light text-sm mt-2">
                    Interactive map integration would be implemented here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
