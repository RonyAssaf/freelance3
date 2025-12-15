import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const HeatingRepair = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Heating Repair Services You Can Trust</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Even in colder months, Proluma ensures your home stays warm and comfortable. Our expert team provides fast, reliable heating system repair services.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Warning Signs You Need Heating Repair</h2>
        <p className="text-gray-700 mb-6">
          You don’t have to be an expert to recognize when your heating system needs attention. Here are common indicators that it’s time to call in a professional:
        </p>

        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          <li>
            <strong>No Heat:</strong> Check that your thermostat is in heat mode, inspect breakers, fuses, or pilot lights. If still no heat, call us.
          </li>
          <li>
            <strong>Insufficient Heat:</strong> Your system runs constantly but the house is cold? The unit may need repairs.
          </li>
          <li>
            <strong>Short Cycling:</strong> Heater switches on/off frequently, indicating overheating or thermostat issues.
          </li>
          <li>
            <strong>Unusual Noises:</strong> Sounds from your system can indicate loose parts or wear. Turn off and call Proluma.
          </li>
          <li>
            <strong>Rising Heating Bills:</strong> A sudden spike in costs can mean your system needs servicing or repairs.
          </li>
        </ul>

        <p className="mt-6 text-gray-700">
          If you notice any of these signs, call (313) 900-3211 or contact Proluma online for expert heating repair. We’re available 24/7.
        </p>

        {/* Why Choose Proluma Section */}
        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Why Choose Proluma for Heating Repair?</h2>
        <p className="text-gray-700 mb-6">
          Proluma services a wide range of heating equipment, including furnaces and heat pumps from leading manufacturers. Our skilled technicians quickly diagnose problems and deliver prompt, cost-effective repairs.
        </p>
        <p className="text-gray-700 mb-6">
          Upfront pricing, clear explanations, waived diagnostic fees if you proceed, and guidance on replacement options if needed.
        </p>
        <p className="text-gray-700 mb-6">
          We pride ourselves on fast response times, same-day service, courtesy call 30 minutes before arrival, lifetime parts warranty, and 100% satisfaction guarantee.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HeatingRepair;
