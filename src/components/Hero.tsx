import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logistics-hero.mp4";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
        autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover" 
          src={heroImage} 
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome To
            <span className="text-transparent bg-orange bg-clip-text"> Proluma</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-grey-200 leading-relaxed">
           Expert HVAC, plumbing, and electrical solutions you can trust, with guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Button 
              size="lg" 
              className="text-lg   text-white hover:bg-white hover:text-blue bg-orange"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Hero;