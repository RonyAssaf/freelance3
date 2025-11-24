import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Excavation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Excavation Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix offers professional excavation solutions for water and sewer line repairs, minimizing disruption and restoring your service efficiently.
        </p>
        <a
          href="tel:3139003211"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Call (313) 900-3211
        </a>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Excavation Services</h2>
        <p className="text-gray-700 mb-6">
          Excavation services vary depending on the plumbing issue. For severely damaged pipes, we conduct a <strong>full excavation</strong>, digging a trench to access and replace the entire pipe. For localized issues, we use a <strong>spot repair</strong> strategy, digging only at the trouble site.
        </p>
        <p className="text-gray-700 mb-6">
          We also offer <strong>trenchless pipe repair</strong>, a specialized technique that allows pipe repair or replacement from the inside, avoiding trench digging. This method helps preserve your landscape, driveway, or other property features.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Masterfix for Excavation?</h3>
        <p className="text-gray-700 mb-6">
          Regardless of the excavation type, our team restores water service quickly and efficiently. We have the expertise to diagnose, plan, and execute solutions for all types of water line issues. No job is too big or small — we provide reliable service and peace of mind.
        </p>

        <p className="text-gray-700">
          Suspect a plumbing issue? Contact Masterfix today at <a href="tel:3139003211" className="text-green-600 font-semibold">313-900-3211</a> for expert excavation services.
        </p>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Excavation;
