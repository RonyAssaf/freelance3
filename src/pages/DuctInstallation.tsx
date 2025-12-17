import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const DuctInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Duct Installation</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Proluma prioritizes your health and satisfaction with expert duct installation, using premium-quality products and methods to ensure clean air and flawless system performance.
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
          Proper duct installation is essential for new homes, upgrades, or replacing outdated systems. High-quality ducts maintain clean air circulation throughout your space, ensuring your home stays comfortable and efficient.
        </p>

        <p className="text-gray-700 mb-6">
          Poorly installed ductwork can cause reduced air quality, inefficiency, and costly repairs. Since most ductwork starts to degrade after 10–15 years, it’s an ideal time to consider replacement. Trust Proluma to deliver reliable, top-tier duct installation and long-lasting results.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default DuctInstallation;
