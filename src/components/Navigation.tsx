import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft h-24">
      <div className="container mx-auto px-4 h-20">
        <div className="flex justify-between items-center h-full">
          {/* ✅ Logo (larger on mobile) */}
          <div className="w-[30%] flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="object-contain h-full md:h-full h-28"
            />
          </div>

          {/* ✅ Desktop Navigation */}
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

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Dim Background Overlay (left 50%) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 w-1/2 h-full bg-black/30 backdrop-blur-[1px] md:hidden transition-opacity duration-300 z-40"
        />
      )}

      {/* ✅ Right Sliding Menu (white 70% opacity, 50% width) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white/70 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="w-8 h-8 text-blue" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col items-start space-y-6 px-8 mt-6">
          <Link
            to="/"
            className="text-blue hover:text-accent text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue hover:text-accent text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-blue hover:text-accent text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-blue hover:text-accent text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
