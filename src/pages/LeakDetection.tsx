import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const LeakDetection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leak Detection & Repair</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Hidden water leaks can cause serious damage to your property. Masterfix provides professional leak detection and repair services to protect your home or business.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Schedule Leak Detection?</h2>
        <p className="text-gray-700 mb-6">
          A hidden water leak can cause extensive property damage if not addressed promptly. Masterfix uses advanced technology, including camera line inspections, to locate even the smallest leaks.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Signs You Have a Hidden Water Leak</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Accumulated water in the street in front of your property</li>
          <li>Unexplained lush patches of lawn or soggy yard areas</li>
          <li>Water damage inside the home—ceiling, floor, or walls</li>
          <li>Standing water near sinks, toilets, or tubs</li>
          <li>The sound of running water with all taps off</li>
          <li>Unexplained increases in your water bill</li>
          <li>Low or poor water pressure</li>
          <li>Unusual noises from pipes (banging or squeaking)</li>
          <li>Visible foundation cracks</li>
          <li>Damage to driveways or landscapes</li>
          <li>Unpleasant sewage-like odors</li>
        </ul>

        <p className="text-gray-700 mb-6">
          If you notice any of these signs, contact Masterfix immediately. Our expert plumbers can repair hidden water main leaks, water heater leaks, drain leaks, sewer line leaks, slab leaks, leaking valves, sump pumps, and more.
        </p>

        <p className="text-gray-700">
          Call <a href="tel:+15619339296" className="text-blue-600 font-semibold">313-900-3211</a> or contact us online for fast, reliable leak detection and repair service.
        </p>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default LeakDetection;
