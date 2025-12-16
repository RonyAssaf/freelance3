import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const HydroJetting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hydro Jetting Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix provides expert hydro jetting to clear stubborn clogs quickly and effectively, restoring your home’s plumbing system.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Is Hydro Jetting?</h2>
        <p className="text-gray-700 mb-6">
          Hydro jetting uses high-pressure water jets to clear pipe blockages and remove debris clinging to your pipe walls. This method can remove:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Tree roots</li>
          <li>Grease</li>
          <li>Food</li>
          <li>Mineral scale</li>
          <li>And more</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Signs You Need Hydro Jetting</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Clogs despite careful use</li>
          <li>Noisy or gurgling pipes</li>
          <li>Multiple slow-running drains</li>
          <li>Sewage odors</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Hydro Jetting vs. Drain Snaking</h3>
        <p className="text-gray-700 mb-6">
          Hydro jetting flushes a sewer line clean of sludge, roots, and stubborn debris, while drain snaking breaks up clogs but may leave residue on the pipe walls. Your Masterfix plumber will recommend the best method for your pipes.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Masterfix?</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>24/7 emergency plumbing services</li>
          <li>Same-day services</li>
          <li>VIP experience</li>
          <li>Background-checked technicians</li>
          <li>Upfront pricing</li>
        </ul>

        <p className="text-gray-700">
          Discover the Masterfix difference. +1 (561) 933 9296 to schedule hydro jetting today.
        </p>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HydroJetting;
