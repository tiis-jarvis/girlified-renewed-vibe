import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold text-primary">Girlified</span>
            </div>
            <p className="text-background/80">
              Restoring women's dignity and increasing gender equity while reducing plastic waste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-all duration-300 hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-background/80 hover:text-primary transition-all duration-300 hover:translate-x-1">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/80 hover:text-primary transition-all duration-300 hover:translate-x-1">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-all duration-300 hover:translate-x-1">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>info@girlified.com.ng</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; {new Date().getFullYear()} Girlified. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
