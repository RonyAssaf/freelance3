import { Star } from "lucide-react";
import generalMaintenance from "@/assets/GeneralMaintenance.png";
import generalMaintenance1 from "@/assets/GeneralMaintenance1.png";
import generalMaintenance2 from "@/assets/GeneralMaintenance2.png";
import handy from "@/assets/handy.png";
import handy1 from "@/assets/handy1.png";
import plumbing from "@/assets/plumbing.png";
import plumbing1 from "@/assets/plumbing1.png";
import plumbing2 from "@/assets/plumbing2.png";


const photos = [
 generalMaintenance,
  generalMaintenance1,
  generalMaintenance2,
  handy,
  handy1,
  plumbing,
 plumbing1,
  plumbing2,
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mb-6">
            What Our Clients Say
          </h2>
        
        </div>

        {/* Moving Photo Row */}
        <div className="relative w-full overflow-hidden">
          {/* Double the list of photos for seamless loop */}
          <div className="flex animate-scroll-x gap-8">
            {[...photos, ...photos].map((photo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={photo}
                  alt={`Client photo ${index + 1}`}
                  className="w-full h-full object-cover"
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
