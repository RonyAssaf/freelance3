import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only form submission
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      details: ["1-800-APEX-LOG (1-800-273-9564)", "Direct: (865) 555-0123"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@apexlinklogistics.com", "sales@apexlinklogistics.com"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1250 Commerce Drive", "Knoxville, TN 37919", "United States"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 7:00 AM - 7:00 PM EST",
        "Saturday: 8:00 AM - 4:00 PM EST",
        "Sunday: Emergency services only"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Shared Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Ready to optimize your supply chain? Get in touch with our logistics experts today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-blue mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of logistics professionals is ready to help you streamline your supply chain 
                operations. Contact us today for a free consultation and custom quote.
              </p>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                        <Icon className="w-6 h-6 text-navy-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lead Generation Form */}
            <div className="animate-slide-up">
              <div className="bg-secondary p-8 rounded-lg shadow-soft">
                <h2 className="text-3xl font-bold text-blue mb-6">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a customized logistics solution.
                </p>

                {showSuccess && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-medium">
                      Thank you for your inquiry! Our team will contact you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your logistics needs, shipment volumes, destinations, or any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full text-lg   text-white hover:bg-white hover:text-blue bg-orange"
                    disabled={showSuccess}
                  >
                    {showSuccess ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            We’re here to support all your general maintenance and handyman needs, from routine repairs to complete property care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg   text-white hover:bg-white hover:text-blue bg-orange"
              asChild
            >
              <a href="tel:18002739564">Call Now: 1-800-APEX-LOG</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
