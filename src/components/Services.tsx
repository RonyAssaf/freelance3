import { Truck, Warehouse, Package, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "HVAC",
    description: "Proluma Service Solutions provides reliable general contracting across Texas with a focus on quality, efficiency, and trusted service."
  },
  {
    icon: Truck,
    title: "Handyman",
    description: "Proluma Service Solutions provides reliable handyman services across Texas, handling repairs, maintenance, and upgrades with efficient, quality workmanship."
  },
  {
    icon: Package,
    title: "Plumbing",
    description: "Proluma Service Solutions delivers reliable plumbing services across Texas, providing efficient repairs and maintenance to keep your systems running smoothly."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mb-6">
            Comprehensive  Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re dedicated to providing dependable, high-quality service that keeps your property running smoothly and your mind at ease.

          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-150 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-navy-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;