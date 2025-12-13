import { useEffect, useRef, useState } from "react";
import generalMaintenance from "@/assets/GeneralMaintenance.png";
import generalMaintenance1 from "@/assets/GeneralMaintenance1.png";
import generalMaintenance2 from "@/assets/GeneralMaintenance2.png";
import handy1 from "@/assets/handy1.png";
import plumbing from "@/assets/plumbing.png";
import plumbing1 from "@/assets/plumbing1.png";
import plumbing2 from "@/assets/plumbing2.png";

const photos = [
  generalMaintenance,
  generalMaintenance1,
  generalMaintenance2,
  handy1,
  plumbing,
  plumbing1,
  plumbing2,
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(0.5); // pixels per frame, adjust speed here
  const translateXRef = useRef(0); // Keep track of current translation

  // Update speed based on viewport width (faster on mobile)
  const updateSpeed = () => {
    if (window.innerWidth < 768) {
      setSpeed(3.5); // faster on mobile
    } else {
      setSpeed(1.5); // slower on desktop
    }
  };

  useEffect(() => {
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const step = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const totalWidth = container.scrollWidth / 4; // because we duplicated photos

      // Increment translation value by speed
      translateXRef.current -= speed;

      // Reset translateX when exceeding half the total width (loop)
      if (-translateXRef.current >= totalWidth) {
        translateXRef.current = 0;
      }

      // Apply transform for smooth gliding
      container.style.transform = `translateX(${translateXRef.current}px)`;

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mb-6">
            Calls You’ve Made
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">From small fixes to full projects, our work reflects the standards our customers trust.</p>
        </div>

        {/* Slider Wrapper (hidden overflow) */}
        <div className="relative overflow-hidden">
          {/* Slider track */}
          <div
            ref={containerRef}
            className="flex gap-8 w-max select-none cursor-default"
            style={{ willChange: "transform" }}
          >
            {/* Duplicate photos twice for infinite effect */}
            {[...photos, ...photos, ...photos, ...photos].map((photo, index) => (
              <div
                key={index}
                className="w-64 h-64 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-transform duration-300 hover:scale-105 flex-shrink-0"
              >
                <img
                  src={photo}
                  alt={`Client photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false} // disable drag to avoid interference
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
