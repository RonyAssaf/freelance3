import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";


const About = () => {
  return (
        <div className="min-h-screen bg-background pt-20">
      {/* Shared Navigation (same as Home) */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About ApexLink Logistics
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Two decades of innovation, excellence, and partnership in supply chain solutions
          </p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-blue mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are confident that our deep industry expertise and dedicated service team enable us to achieve our objectives, uphold our commitments, and advance our vision. Guided by core principles that
                   shape our decisions and fuel our progress, we place strong emphasis on clear, timely, and transparent communication.
                   Through exclusive technology and a centralized control center, we streamline interactions and enhance efficiency.
By maintaining continuous, direct communication with our clients and team managers, we deliver real-time project monitoring and ensure access to accurate, up-to-date information whenever it is needed.
                </p>

                <p>
                  Our growth has been fueled by a simple philosophy: when our clients succeed, we succeed. 
                  This partnership mindset has earned us industry recognition and, more importantly, 
                  lasting relationships with the companies we serve.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-secondary p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-bold text-blue mb-6">Our Mission</h3>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                  "To empower businesses with seamless, technology-driven logistics solutions that 
                  optimize operations, reduce costs, and accelerate growth while maintaining the 
                  highest standards of service excellence."
                </blockquote>
                <div className="border-t pt-6">
                  <h4 className="text-xl font-semibold text-blue mb-4">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To be the go-to handyman service, known for reliability, quality craftsmanship, and smart solutions that make property maintenance easy and stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Culture & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue mb-6">
              Our Team Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decisions, shape our relationships, and drive our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Ownership & Accountability",
                description: "We take initiative and approach every task with a strong sense of responsibility. By remaining flexible and adapting to change, we ensure challenges are met with proactive solutions and dependable follow-through."
              },
              {
                icon: Users,
                title: "Customer Excellence",
                description: "Exceptional service is at the heart of everything we do. We focus on clear communication, efficient processes, and thoughtful execution to deliver seamless and satisfying experiences for every customer."
              },
              {
                icon: Heart,
                title: "Integrity & Authenticity",
                description: "We believe trust is built through honesty and transparency. By communicating with integrity, avoiding gossip, and staying true to our values, we foster respectful relationships and long-term confidence."
              },
              {
                icon: Globe,
                title: "Growth, Care & Teamwork",
                description: "We are committed to continuous learning and improvement while caring deeply for our people, clients, and communities. By working together toward shared goals, we create a supportive environment where everyone can succeed."
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange hover:scale-150 transition-all duration-300 group">
                    <Icon className="w-10 h-10 text-white group-hover:text-navy-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Partner with Nextris?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the difference that years of proven excellence make in reliable, professional general maintenance.
          </p>
          <Link to="/services">
            <Button variant="cta" size="lg" className="text-lg   text-white hover:bg-white hover:text-blue bg-orange">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;