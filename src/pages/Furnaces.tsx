import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Furnaces = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Furnace Services You Can Trust</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Proluma provides reliable furnace services year-round, including repair, installation, replacement, and maintenance, ensuring your home stays warm and comfortable.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Furnace Repairs</h2>
        <p className="text-gray-700 mb-6">
          If your furnace isn’t working properly, Proluma offers comprehensive repair services to restore comfort and safety.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Rattling Noises:</strong> Loose panels or ductwork issues causing annoying sounds.</li>
          <li><strong>Power Cycling:</strong> Frequent shut-offs indicating airflow problems or clogged filters.</li>
          <li><strong>Flickering Pilot Light:</strong> May indicate excessive carbon monoxide or furnace issues.</li>
          <li><strong>Clogged Filters:</strong> Dirty filters reduce efficiency and airflow.</li>
          <li><strong>No Airflow:</strong> The blower motor may need attention if air isn’t circulating.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Contact Proluma at (313) 900-3211 for fast, professional furnace repairs. We’re here 24/7!
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Furnace Installation & Replacement</h2>
        <p className="text-gray-700 mb-6">
          Need a new furnace or replacing an old unit? Proluma provides seamless installation and replacement services. We’ll help you choose a system that fits your home’s heating needs for maximum efficiency and comfort.
        </p>
        <p className="text-gray-700 mb-6">
          From removing the old unit to installing and calibrating the new furnace, our team ensures a smooth, hassle-free process. Call us at (313) 900-3211 to schedule your furnace replacement.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Gas Furnaces</h3>
        <p className="text-gray-700 mb-6">
          Professional gas furnace installation provides energy-efficient, cost-effective heating. Enjoy faster warmth, consistent comfort, and reduced energy costs with a gas furnace.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Electric Furnaces</h3>
        <p className="text-gray-700 mb-6">
          Electric furnaces are easy to maintain, provide consistent heating, improve air quality, and reduce environmental impact. Proluma ensures a seamless electric furnace installation.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Furnace Maintenance</h2>
        <p className="text-gray-700 mb-6">
          Protect your investment with annual furnace maintenance. Our technicians inspect, lubricate, and clean your furnace to ensure efficient performance and safety. Regular maintenance catches small issues before they become costly repairs and extends the lifespan of your system.
        </p>
        <p className="text-gray-700 mb-6">
          For optimal performance, schedule furnace maintenance before the cold season begins. +1 (561) 933 9296 or contact Proluma online today!
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Why Choose Proluma for Furnace Solutions?</h2>
        <p className="text-gray-700 mb-6">
          Proluma is known for excellence in HVAC services. Our background-checked technicians ensure your safety and peace of mind. We offer upfront pricing, free estimates for replacements, lifetime warranties, and a 100% satisfaction guarantee.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Furnaces;
