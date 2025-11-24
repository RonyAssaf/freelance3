import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const SumpPumpServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sump Pump Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Prevent basement floods with professional sump pump installation, replacement, and maintenance. Masterfix offers free estimates and same-day service.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What is a Sump Pump?</h2>
        <p className="text-gray-700 mb-6">
          A sump pump is a submersible appliance installed in a pit at the lowest point of your basement or crawlspace. It stays idle until groundwater rises and triggers the float switch, pumping water to prevent flooding.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sump Pump Installation & Replacement</h3>
        <p className="text-gray-700 mb-4">
          Masterfix installs high-quality sump pumps to protect your home from basement floods. We perform new installations, replacements, and install battery backups that can keep pumps running up to two days during power outages.
        </p>

        <p className="text-gray-700 mb-6">
          Even in areas like Arizona, just an inch of water in a basement can cause thousands of dollars in damage. Protect your property with a reliable sump pump.
        </p>

        <p className="text-gray-700">
          Schedule your sump pump service today by calling <a href="tel:3139003211" className="text-blue-600 font-semibold">313-900-3211</a> or contacting us online.
        </p>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default SumpPumpServices;
