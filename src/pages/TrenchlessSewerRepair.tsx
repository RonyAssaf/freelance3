import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const TrenchlessSewerRepair = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dependable Trenchless Sewer Repairs</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix provides expert trenchless sewer repair services to restore water flow efficiently and safely. Our licensed technicians use advanced technology and proven methods for long-lasting results.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Trenchless Sewer Repairs</h2>
        <p className="text-gray-700 mb-6">
          Masterfix technicians quickly locate sewer line damage using cameras, sensors, and other advanced tools. We can repair breaks, replace deteriorating pipes, and remove clogs including tree roots with minimal disruption to your property.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Trenchless Sewer Repair Process:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Use a high-resolution camera to inspect and accurately diagnose the sewer line issue.</li>
          <li>Dig small access holes at the beginning and end of the damaged pipe section.</li>
          <li>Thoroughly clean the sewer line using hydro jetting or other methods to ensure proper liner adhesion.</li>
          <li>Insert a flexible, resin-coated liner into the existing pipe and inflate it to create a new durable pipe within the old one.</li>
          <li>Cure the resin to solidify the liner and restore pipe functionality.</li>
          <li>Perform a final camera inspection to confirm the repair was successful.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          When your sewer line breaks, trust Masterfix for professional trenchless repairs that minimize disruption and restore your plumbing efficiently. +1 (561) 933 9296 to schedule service today!
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default TrenchlessSewerRepair;
