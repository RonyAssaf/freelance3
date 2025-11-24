import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const DuctRepair = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Duct Repair & Sealing</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Improve your HVAC efficiency, comfort, and indoor air quality with expert duct repair and sealing from Masterfix. Our skilled technicians ensure top-notch service every time.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Signs You Need Ductwork Repair</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Damaged or missing insulation in unconditioned spaces</li>
          <li>Leaking air ducts with cracks, holes, or loose joints</li>
          <li>Excessive dirt, dust, or debris accumulation</li>
          <li>Crushed or damaged ductwork restricting airflow</li>
          <li>Poor duct system design causing hot/cold spots</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Ductwork Repair Process</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Inspection and testing with advanced equipment</li>
          <li>Duct repair: fixing cracks, holes, corrosion, missing insulation, and loose joints</li>
          <li>Duct sealing to prevent air leaks, energy loss, and poor air quality</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Duct Cleaning vs. Duct Repair vs. Duct Replacement</h2>
        <p className="text-gray-700 mb-4">
          Not sure which duct service you need? Here's a quick guide:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Duct Cleaning:</strong> Removes dust and debris buildup to improve airflow and air quality.
          </li>
          <li>
            <strong>Duct Repair:</strong> Necessary when ducts are damaged or leaking to restore HVAC function.
          </li>
          <li>
            <strong>Duct Replacement:</strong> Required if ductwork is improperly sized, poorly designed, or too damaged to repair.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Flexible ducts usually last 10–15 years, while fiberglass or metal ducts can last 25+ years. Masterfix can design and install a duct system tailored to your home’s needs.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default DuctRepair;
