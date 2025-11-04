import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck, Package, Ship, Warehouse, MapPin, Hand, BellElectric, LucideBellElectric } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const services = [
  {
    icon: Hand,
    title: "General Maintenance & Handyman",
    description: "Our general maintenance and handyman services are built to support the day-to-day functionality, safety, and appearance of your facility. From small fixes to larger repair projects, we ensure every task is handled with precision and professionalism.",
    features: [
      "Interior & Exterior Painting",
      "Drywall Installation, Repair & Patching",
      "Carpentry Services (Repairs, Framing, Trim Work)",
      "Door & Window Repairs",
      "General Repairs & Touch-Ups"
    ],
    benefits: "Perfect for all-around repairs, installations, and upkeep to keep your property in top shape."
  },
  {
    icon: Warehouse,
    title: "Plumbing Services",
    description: "Our comprehensive plumbing solutions are designed to keep your systems running smoothly, efficiently, and up to code. From routine maintenance to complex repairs, we cover it all:",
    features: [
      "Preventive Maintenance & System Inspections",
      "Pipe, Fixture, Sink, Toilet, Urinal & Drain Installations & Repairs",
      "Boiler & Water Heater Installations & Repairs",
      "Drain & Duct Maintenance",
      "Piping & Sewer System Management"
    ],
    benefits: "Perfect for resolving leaks, blockages, and all plumbing-related issues efficiently and professionally."
  },
  {
    icon: Ship,
    title: "Renovation Services",
    description: "We offer full-service renovation solutions tailored to modernize and upgrade your facilities, improving functionality, compliance, and visual appeal. Whether it’s a single-room refresh or a full-scale build-out, we deliver quality, efficiency, and minimal disruption:",
    features: [
      "Interior & Exterior Renovations",
      "Office, Retail, and Commercial Buildouts",
      "Flooring, Walls, & Ceiling Upgrades",
      "Fixture & Finish Installations",
      "Project Management & Coordination",
      "Custom Carpentry & Millwork"
    ],
    benefits: "Perfect for revitalizing your home or workspace with modern designs and quality craftsmanship."
  },
  {
    icon: BellElectric,
    title: "Electrical Services",
    description: "Our electrical services are built to ensure safety, efficiency, and uninterrupted operations. Whether it’s routine upkeep or urgent repairs, we provide complete solutions tailored to your facility’s needs:",
    features: [
      "Generator Installations & Maintenance",
      "Surge Protection & Grounding Solutions",
      "Electrical Troubleshooting & Diagnostics",
      "Preventive Maintenance & System Inspections",
      "Interior & Exterior Lighting Installations & Repairs",
      "Panel Upgrades, Circuit Breaker Replacements & Fuse Services"

    ],
    benefits: "Ideal for installations, repairs, and maintenance to ensure safe and efficient electrical systems."
  },
  {
    icon: MapPin,
    title: "HVAC/R Services",
    description: "Our HVAC/R solutions are designed to maintain optimal climate control, energy efficiency, and system reliability across your facility. From preventive care to emergency repairs, we ensure your heating, cooling, and refrigeration systems perform at their best:",
    features: [
      "HVAC Installations & Replacements",
      "Refrigeration System Maintenance & Repairs",
      "Duct Cleaning, Sealing & Balancing",
      "Refrigerant Leak Detection & Charging",
      "International shipping documentation",
      "Heating & Cooling Repairs (Furnaces, Heat Pumps, AC Units)",
    ],
    benefits: "Delivering high-quality renovations to refresh, modernize, and elevate any space."
  }
];

const Services = () => {
  return (
     <div className="min-h-screen bg-background pt-20">
      <Navigation />

        

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Comprehensive logistics solutions tailored to meet your unique transportation and warehousing needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`animate-slide-up ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-navy-900" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-blue">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-secondary/50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-blue font-medium">{service.benefits}</p>
                    </div>
                  </div>
                  
                  <div className={`animate-slide-up ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-secondary p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-navy-900" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-blue mb-4">
                          Ready to Get Started?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Contact our team to discuss how {service.title.toLowerCase()} can optimize your supply chain.
                        </p>
                        <Link to="/contact">
                          <Button variant="cta" size="lg" className="bg-orange">
                            Request Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6 animate-fade-in">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our logistics experts can design a tailored solution that combines multiple services 
            to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4 bg-orange">
                Contact Our Experts
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
   
  );
};

export default Services;