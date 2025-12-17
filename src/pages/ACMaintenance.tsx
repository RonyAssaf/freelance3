import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const ACMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AC & Heating Maintenance</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Keep your heating and cooling systems running efficiently with Proluma’ comprehensive, cost-effective maintenance services. Regular tune-ups help your system operate reliably and save you money on energy bills.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What Happens During a Tune-Up?</h2>
        <p className="text-gray-700 mb-6">
          During our annual AC or heating tune-up, Proluma technicians will thoroughly inspect, clean, adjust, and calibrate all key components. This ensures your system operates efficiently and safely. Key tasks include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Cleaning outdoor equipment (if needed)</li>
          <li>Checking and tightening all electrical connections</li>
          <li>Inspecting and testing safety controls</li>
          <li>Checking and replacing air filters, if necessary</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We recommend scheduling a tune-up at least once a year, ideally before the cold or hot season when your system will see heavy use.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Do I Need Maintenance?</h2>
        <p className="text-gray-700 mb-6">
          Just like you wouldn’t drive a car for years without an oil change, your heating or cooling system needs regular professional maintenance. Routine tune-ups with Proluma provide many benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Identify small issues before they become costly problems</li>
          <li>Maximize efficiency to save on energy bills</li>
          <li>Ensure reliable operation throughout the season</li>
          <li>Extend the lifespan of your system by several years</li>
          <li>Maintain warranty validity if professional maintenance is required</li>
        </ul>

       
        
       
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default ACMaintenance;
