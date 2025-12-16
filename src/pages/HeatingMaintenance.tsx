import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const HeatingMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Heating Maintenance</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Regular maintenance ensures your heating system stays efficient, reliable, and ready to keep your home warm during the coldest months. Proluma provides expert heating tune-ups for all makes and models.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Happens During a Heating Tune-Up?</h2>
        <p className="text-gray-700 mb-6">
          During an annual tune-up, our technicians inspect, clean, adjust, and calibrate key components of your heating system. Tasks include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Cleaning outdoor equipment if needed</li>
          <li>Checking and tightening electrical connections</li>
          <li>Inspecting and testing safety controls</li>
          <li>Checking and replacing air filters as necessary</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We recommend scheduling a heating tune-up annually, ideally before the cold season begins. If it’s been over a year since your last inspection, +1 (561) 933 9296 or contact Proluma online to schedule your maintenance today!
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Do I Need Heating Maintenance?</h2>
        <p className="text-gray-700 mb-6">
          Just as you wouldn’t drive a car for years without an oil change, your heating system needs regular professional attention. Routine maintenance with Proluma helps:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Identify small issues before they become costly problems</li>
          <li>Maximize efficiency and reduce energy bills</li>
          <li>Ensure reliable operation throughout the season</li>
          <li>Extend the lifespan of your heating system</li>
          <li>Maintain warranty compliance for systems requiring professional service</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">The Proluma Plan: Cost-Effective HVAC Tune-Up Program</h2>
        <p className="text-gray-700 mb-6"></p>
      
        <p className="text-gray-700 mb-6">
          Join the Proluma Plan or schedule preventive heating maintenance today by calling +1 (561) 933 9296 or contacting us online.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HeatingMaintenance;
