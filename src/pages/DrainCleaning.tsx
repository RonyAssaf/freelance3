import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const DrainCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Drain Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Clogged sinks and drains? Masterfix offers top-rated drain cleaning, repair, and replacement services. Our licensed plumbers are available 24/7 for emergency plumbing needs.
        </p>
        <a
          href="tel:+15619339296"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          +1 (561) 933 9296
        </a>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Signs You Need Drain Services</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Slow-moving drains</li>
          <li>Sewage odors</li>
          <li>Standing water</li>
          <li>Gurgling sounds</li>
          <li>Multiple drain clogs</li>
          <li>Wastewater backup</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Comprehensive Drain Services</h2>
        <p className="text-gray-700 mb-6">
          Masterfix provides a full range of drain solutions to protect and repair your plumbing system:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Drain repair:</strong> Fix hairline cracks or burst pipes quickly and affordably.</li>
          <li><strong>Drain cleaning:</strong> Advanced hydro jetting and state-of-the-art equipment ensure thorough cleaning.</li>
          <li><strong>Rooter service:</strong> Clear tree root blockages and restore proper pipe flow.</li>
          <li><strong>Piping and repiping:</strong> Durable solutions for traditional or modern piping systems.</li>
          <li><strong>Leak detection and repair:</strong> Fast, accurate leak identification and repair.</li>
          <li><strong>Sewer line services:</strong> Diagnose and resolve main sewer line clogs effectively.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Don’t try to solve drain issues alone—call the local experts at Masterfix for fast, effective, and affordable plumbing solutions. +1 (561) 933 9296 or contact us online today!
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default DrainCleaning;
