import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const ThermostatService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thermostat Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Your thermostat is the brain of your HVAC system. Upgrade to a programmable or Wi-Fi thermostat with Proluma for enhanced comfort, convenience, and energy efficiency.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Is a Wi-Fi Thermostat?</h2>
        <p className="text-gray-700 mb-6">
          A Wi-Fi thermostat works like a standard programmable thermostat but allows remote control via your smartphone or computer. This enables you to maximize energy savings while keeping your home comfortable.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Adjust the temperature remotely if you forget to set it before leaving.</li>
          <li>Delay temperature changes if your schedule changes.</li>
          <li>Change settings from anywhere in your home.</li>
          <li>Monitor home temperature and receive alerts if your HVAC system stops working.</li>
          <li>Set reminders for filter changes and maintenance appointments.</li>
          <li>Enjoy comfort as the thermostat learns your preferences and adapts automatically.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Benefits of a Smart Thermostat</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Self-adjusting Temperature:</strong> Automatically adjusts based on your schedule.</li>
          <li><strong>Energy Savings:</strong> Save up to 10% annually by using temperature setbacks.</li>
          <li><strong>Uninterrupted Comfort:</strong> Your home stays at the ideal temperature without manual adjustments.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Proluma installs a wide range of smart thermostats and also provides HVAC and electrical services, from maintenance to rewiring. That’s why homeowners trust us as a top-rated local HVAC and electrical company.
        </p>

        <p className="text-gray-700 mb-6">
          Ready to upgrade to a smart thermostat? Call Proluma today at (313) 900-3211 or contact us online to schedule your thermostat installation!
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default ThermostatService;
