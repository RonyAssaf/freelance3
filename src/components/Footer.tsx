import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MapModal from "@/components/mapModel";

const Footer = () => {
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      <footer className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* CTA Section */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how ApexLink can transform your logistics operations.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg   text-white hover:bg-white hover:text-blue bg-orange">
                Start Your Free Consultation
              </Button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Call */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-navy-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm sm:text-base">+1 (561) 933 9296</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-navy-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm sm:text-base">admin@pro-luma.com</p>
            </div>

            {/* Visit Us (WITH MAP) */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-navy-900" />
              </div>

              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>

              <p className="text-gray-300 text-sm sm:text-base">
                250 congress park dr, ap 320
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-2">
               delray beach, florida 33445
              </p>

              <button
                onClick={() => setOpenMap(true)}
                className="text-orange text-sm font-medium hover:underline hover:tracking-wide transition-all"
              >
                View on map
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-orange bg-clip-text">
                Proluma
              </h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 ApexLink Logistics. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      <MapModal open={openMap} onClose={() => setOpenMap(false)} />
    </>
  );
};

export default Footer;
