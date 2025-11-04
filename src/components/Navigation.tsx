import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// ✅ Import your logo
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-8">
          {/* ✅ Logo on the left */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-auto object-contain rounded-full"
            />
          </Link>

          {/* Desktop Navigation (center/right on large screens) */}
          <div className="hidden md:flex items-center space-x-20">
            <Link
              to="/"
              className="text-blue hover:text-accent transition-colors font-medium text-2xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-blue hover:text-accent transition-colors font-medium text-2xl"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-blue hover:text-accent transition-colors font-medium text-2xl"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-blue hover:text-accent transition-colors font-medium text-2xl"
            >
              Contact
            </Link>
          </div>

          {/* ✅ Mobile Menu Button on the far right */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-blue hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
