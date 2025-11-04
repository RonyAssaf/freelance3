import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // ✅ Fixed height for navbar
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft h-24">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* ✅ Logo takes 30% width and full height */}
          <div className="w-[30%]  flex items-center">
            <Link to="/" className="h-full flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-full object-contain"
              />
            </Link>
          </div>

          {/* ✅ Navigation links (70%) */}
          <div className="hidden md:flex items-center justify-end space-x-20 w-[70%] h-full">
            <Link to="/" className="text-blue hover:text-accent transition-colors font-medium text-2xl">
              Home
            </Link>
            <Link to="/about" className="text-blue hover:text-accent transition-colors font-medium text-2xl">
              About
            </Link>
            <Link to="/services" className="text-blue hover:text-accent transition-colors font-medium text-2xl">
              Services
            </Link>
            <Link to="/contact" className="text-blue hover:text-accent transition-colors font-medium text-2xl">
              Contact
            </Link>
          </div>

          {/* ✅ Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-blue hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-blue hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-blue hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-blue hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-blue hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
