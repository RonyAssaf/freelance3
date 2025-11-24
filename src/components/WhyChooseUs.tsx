import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [openChild, setOpenChild] = useState(null);

  // ⭐ Subnav structure with links
  const subNav = [
    {
      title: "Cooling",
      children: [
        { name: "AC Repair", link: "/ac-repair" },
        { name: "AC Installation", link: "/ac-installation" },
        { name: "AC Maintenance", link: "/ac-maintenance" },
        {
          name: "Ductwork",
          children: [
            { name: "Duct Cleaning", link: "/duct-cleaning" },
            { name: "Duct Installation", link: "/duct-installation" },
            { name: "Duct Repair", link: "/duct-repair" },
          ],
        },
      ],
    },
    {
      title: "HVAC",
      children: [
        {
          name: "Heating",
          children: [
            { name: "Heating Repair", link: "/heating-repair" },
            { name: "Heating Installation", link: "/heating-installation" },
            { name: "Heating Maintenance", link: "/heating-maintenance" },
            { name: "Furnaces", link: "/furnaces" },
            { name: "Thermostat Service", link: "/thermostat-service" },
          ],
        },
      ],
    },
    {
      title: "Sewer & Drain",
      children: [
        { name: "Drain Cleaning", link: "/drain-cleaning" },
        { name: "Trenchless Sewer Repair", link: "/trenchless-sewer-repair" },
        { name: "Sewer Camera Inspection", link: "/sewer-camera" },
        { name: "Hydro Jetting", link: "/hydro-jetting" },
        { name: "Excavation", link: "/excavation" },
      ],
    },
    {
      title: "Plumbing",
      children: [
        { name: "Leak Detection", link: "/leak-detection" },
        { name: "Sump Pump Services", link: "/sump-pump" },
        { name: "Piping & Repiping", link: "/repiping" },
      ],
    },
  ];

  return (
    <>
      {/* ⭐ MAIN NAVBAR — ALWAYS FIXED, ALWAYS ON TOP */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md shadow-soft h-24">
        <div className="container h-full px-6 flex justify-between items-center">

          {/* Logo Left */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="object-contain h-32 md:h-62 lg:h-64"


            />
          </Link>

          {/* Right desktop nav */}
          <div className="hidden md:flex items-center space-x-14">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-blue text-xl font-medium hover:text-accent transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* ⭐ SECOND NAVBAR (DESKTOP ONLY) */}
      <nav className="fixed top-24 left-0 right-0 z-[9998] bg-gray-100 shadow-sm border-b hidden md:flex">
        <div className="container mx-auto px-6 h-14 flex items-center justify-center">
          <div className="flex space-x-12">
            {subNav.map((item, i) => (
              <div key={i} className="relative group">

                {/* Desktop Parent */}
                <button className="flex items-center space-x-1 text-gray-800 hover:text-accent text-lg font-medium transition">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Desktop dropdown */}
                <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-md w-60 opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
                  {item.children.map((child, j) => (
                    <div key={j} className="relative group/item">

                      {/* First level */}
                      {child.children ? (
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-gray-700">
                          {child.name}
                          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </button>
                      ) : (
                        <Link
                          to={child.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {child.name}
                        </Link>
                      )}

                      {/* Nested level */}
                      {child.children && (
                        <div className="absolute left-full top-0 ml-1 bg-white shadow-xl rounded-md w-60 opacity-0 scale-95 invisible group-hover/item:visible group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-200">
                          {child.children.map((sub, k) => (
                            <Link
                              key={k}
                              to={sub.link}
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ⭐ MOBILE MENU — RIGHT SLIDE PANEL */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* ⭐ Mobile main links */}
          <div className="flex flex-col space-y-6">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-blue text-xl font-medium hover:text-accent transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* ⭐ Mobile Subnav (Accordion) */}
            <div className="mt-6 border-t pt-4">
              {subNav.map((item, i) => (
                <div key={i} className="mb-4">
                  <button
                    onClick={() => setOpenSub(openSub === i ? null : i)}
                    className="w-full flex justify-between text-lg font-semibold text-gray-800"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openSub === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openSub === i && (
                    <div className="mt-2 ml-3 space-y-2">
                      {item.children.map((child, j) => (
                        <div key={j}>
                          {/* Child level */}
                          {child.children ? (
                            <button
                              onClick={() => setOpenChild(openChild === j ? null : j)}
                              className="w-full text-left flex justify-between text-gray-700 text-base"
                            >
                              {child.name}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  openChild === j ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          ) : (
                            <Link
                              to={child.link}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-gray-700 text-base hover:text-accent"
                            >
                              {child.name}
                            </Link>
                          )}

                          {/* Sub-child level */}
                          {child.children && openChild === j && (
                            <div className="ml-4 mt-2 space-y-2">
                              {child.children.map((sub, k) => (
                                <Link
                                  key={k}
                                  to={sub.link}
                                  className="block text-left text-gray-600 hover:text-accent text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
  