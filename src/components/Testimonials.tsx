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
  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Infinite Loop Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-7 animate-scroll-x md:animate-scroll-x-desktop">
            {/* Duplicate the photos 10 times for 10 full loops */}
            {Array.from({ length: 10 }).flatMap(() => photos).map((photo, index) => (
              <div
                key={index}
                className="w-64 h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-transform duration-300 hover:scale-105"
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
