
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-libre font-bold mb-6 text-primary tracking-tight">
              Apex Legal Group
            </h3>
            <p className="text-body font-lato font-light leading-relaxed mb-4">
              Elite legal services with a commitment to excellence, integrity, and exceptional client results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <i className="ph-light ph-linkedin-logo text-xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <i className="ph-light ph-twitter-logo text-xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <i className="ph-light ph-facebook-logo text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-libre font-bold mb-4 tracking-tight">Practice Areas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-body hover:text-primary transition-colors font-lato font-light">Corporate & M&A</a></li>
              <li><a href="#" className="text-body hover:text-primary transition-colors font-lato font-light">Real Estate Law</a></li>
              <li><a href="#" className="text-body hover:text-primary transition-colors font-lato font-light">Tax Law</a></li>
              <li><a href="#" className="text-body hover:text-primary transition-colors font-lato font-light">Employment Law</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-libre font-bold mb-4 tracking-tight">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-body hover:text-primary transition-colors font-lato font-light">About Us</a></li>
              <li><a href="#team" className="text-body hover:text-primary transition-colors font-lato font-light">Our Team</a></li>
              <li><a href="#" className="text-body hover:text-primary transition-colors font-lato font-light">Careers</a></li>
              <li><a href="#contact" className="text-body hover:text-primary transition-colors font-lato font-light">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-libre font-bold mb-4 tracking-tight">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ph-light ph-phone text-primary"></i>
                <span className="text-body font-lato font-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ph-light ph-envelope text-primary"></i>
                <span className="text-body font-lato font-light">info@apexlegal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ph-light ph-map-pin text-primary mt-1"></i>
                <span className="text-body font-lato font-light">123 Legal Plaza<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-body font-lato font-light">
            © 2024 Apex Legal Group. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
