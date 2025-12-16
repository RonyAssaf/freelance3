import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const DuctCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Duct Cleaning</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix provides expert duct cleaning to remove dust, allergens, and pollutants from your home, improving indoor air quality and comfort.
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
        <p className="text-gray-700 mb-6">
          With our job done right guarantee, you can trust Masterfix to go the extra mile for exceptional results. We also provide upfront pricing so there are no hidden fees.
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Benefits of Air Duct Cleaning</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Improved indoor air quality:</strong> Removes dust, allergens, mold, and other contaminants.</li>
          <li><strong>Enhanced HVAC efficiency:</strong> Ensures optimal airflow and lowers utility bills.</li>
          <li><strong>Reduced allergens and irritants:</strong> Minimizes pet dander, pollen, and dust mites.</li>
          <li><strong>Odor elimination:</strong> Eliminates trapped odors, leaving your home fresh and clean.</li>
          <li><strong>Prolonged HVAC system lifespan:</strong> Reduces system strain and extends lifespan.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Duct Cleaning Process</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Air Duct Inspection:</strong> We assess duct condition to determine the best cleaning approach.</li>
          <li><strong>Vacuuming:</strong> Specialized vacuum equipment removes dust, dirt, and allergens efficiently.</li>
          <li><strong>Compressed Air Flush:</strong> High-pressure air clears stubborn debris for a comprehensive clean.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Throughout the process, our skilled professionals take extra care to protect your home and follow industry best practices for a safe, efficient, and effective cleaning experience.
        </p>

        <p className="text-gray-700 mb-6">
          Schedule duct cleaning online or +1 (561) 933 9296 today.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default DuctCleaning;
