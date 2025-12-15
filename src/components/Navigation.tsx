import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

type SubChild = { name: string; link: string };
type SubItem = { name: string; link?: string; children?: SubChild[] };
type SubNavItem = { title: string; children: SubItem[] };

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);

  const subNav: SubNavItem[] = [
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
      {/* ================= MAIN NAV ================= */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md shadow-sm h-24">
        <div className="container h-full px-6 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-30" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-14">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-blue text-xl font-medium hover:text-accent transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* ================= DESKTOP SUB NAV ================= */}
      <nav className="fixed top-24 left-0 right-0 z-[90] bg-gray-100 border-b hidden md:flex">
        <div className="container mx-auto px-6 h-14 flex justify-center items-center">
          <div className="flex space-x-12">
            {subNav.map((item, i) => (
              <div key={i} className="relative group">
                <button className="flex items-center space-x-1 text-gray-800 hover:text-accent text-lg font-medium">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-md w-64 opacity-0 invisible scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
                  {item.children.map((child, j) => (
                    <div key={j} className="relative group/item">
                      {child.children ? (
                        <button className="w-full px-4 py-2 flex justify-between hover:bg-gray-100 text-gray-700">
                          {child.name}
                          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </button>
                      ) : (
                        <Link
                          to={child.link!}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {child.name}
                        </Link>
                      )}

                      {child.children && (
                        <div className="absolute left-full top-0 ml-1 bg-white shadow-xl rounded-md w-64 opacity-0 invisible scale-95 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-200">
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

      {/* ================= APPLE-STYLE MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <img src={logo} className="h-20 w-30"/>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-10 overflow-y-auto h-[calc(100vh-80px)]">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-3xl font-semibold tracking-tight"
            >
              {item}
            </Link>
          ))}

          <div className="h-px bg-gray-200" />

          {subNav.map((section, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenSub(openSub === i ? null : i)}
                className="w-full flex justify-between items-center text-xl font-medium"
              >
                {section.title}
                <ChevronDown
                  className={`transition-transform ${
                    openSub === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSub === i && (
                <div className="mt-4 space-y-3 pl-2">
                  {section.children.map((child) =>
                    child.children ? (
                      child.children.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-gray-700"
                        >
                          {sub.name}
                        </Link>
                      ))
                    ) : (
                      <Link
                        key={child.name}
                        to={child.link!}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-gray-700"
                      >
                        {child.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
