import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const ACRepair = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AC Repair Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          A new cooling system provides superior comfort and savings on energy bills. Whether your AC has stopped working or you’re upgrading to an energy-efficient model, Proluma is ready to handle your installation and replacement needs.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Proluma?</h2>
        <p className="text-gray-700 mb-6">
          Got an AC emergency? Our contractors are available From monday to friday 9AM to 7PM. We’ll help you select the best cooling system for your home, comfort needs, and budget. With Proluma, you get:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Free estimates and transparent pricing</li>
          <li>Flexible financing options with approved credit</li>
          <li>100% satisfaction guarantee and a lifetime parts warranty on select high-efficiency systems</li>
          <li>Top-notch service and comfort solutions</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Top Signs You Need an AC Replacement</h2>
        <p className="text-gray-700 mb-6">
          When your air conditioner can’t meet cooling demands or stops working entirely, it may be time for a replacement. Consider these factors:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Poor Performance:</strong> Warm spots in your home or a constantly running AC may indicate the need for a more efficient system.
          </li>
          <li>
            <strong>Age:</strong> Most ACs last 10-15 years. If yours is 10+ years old, replacement could improve comfort, lower energy bills, and reduce repair frequency.
          </li>
          <li>
            <strong>Repair History:</strong> Frequent repairs or major component issues may make replacement more cost-effective than continued fixes.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Unsure whether to repair or replace? Proluma will evaluate your system and provide honest recommendations, suggesting replacement only when it’s the best option.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default ACRepair;
