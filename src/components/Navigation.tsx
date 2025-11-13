import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft h-24">
        <div className="container mx-auto px-4 h-20">
          <div className="flex justify-between items-center h-full">
            {/* ✅ Logo */}
            <div className="w-[30%] flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="object-contain h-full md:h-full h-28"
              />
            </div>

            {/* ✅ Desktop Navigation */}
            <div className="hidden md:flex items-center justify-end space-x-20 w-[70%] h-full">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-blue hover:text-accent transition-colors font-medium text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-primary hover:text-accent transition-colors relative z-[60]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-7 h-7 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 🍎 Apple-style Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white/90 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 🔹 Content container */}
        <div
          className={`flex flex-col justify-start items-center mt-28 space-y-8 transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-blue text-3xl font-semibold transition-all duration-300 ease-out hover:text-accent ${
                isMenuOpen
                  ? `opacity-100 translate-y-0 delay-[${index * 100}ms]`
                  : "opacity-0 translate-y-5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
