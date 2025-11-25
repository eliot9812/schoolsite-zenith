import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center">
                 <img src="/images/ml.webp" alt="schoollogo" />
              </div>
              <span className="text-lg font-display font-bold">Motherland Academy</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering students with quality education and holistic development since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/notice" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Admissions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  How to Apply
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Biratnagar-04,Belgachhi,Morang,Nepal
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +977-9842041511
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@motherlandeacademy.edu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Motherland Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
