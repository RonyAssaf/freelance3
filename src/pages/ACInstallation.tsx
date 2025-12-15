import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const ACInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AC Installation & Replacement</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          A new cooling system delivers exceptional comfort and energy savings. Whether your old AC has stopped working or you want an energy-efficient upgrade, Proluma can handle all your installation and replacement needs.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Proluma?</h2>
        <p className="text-gray-700 mb-6">
          Got an AC emergency? Our contractors are available 24/7. We’ll help you choose the best cooling system for your home, comfort needs, and budget. With Proluma, you’ll always receive:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Free estimates and transparent pricing</li>
          <li>Flexible financing options with approved credit</li>
          <li>100% satisfaction guarantee and a lifetime parts warranty on select high-efficiency systems</li>
          <li>Top-notch service and comfort solutions</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Top Signs Your Home Needs an Air Conditioning Replacement</h2>
        <p className="text-gray-700 mb-6">
          When your AC can’t meet your cooling needs or stops working, deciding whether to repair or replace it can be difficult. Consider the following factors:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Poor Performance:</strong> Warm spots or constantly running AC may indicate the need for a more efficient system.
          </li>
          <li>
            <strong>Age:</strong> Most AC units last 10–15 years. If your unit is 10+ years old, replacing it can improve comfort, lower energy bills, and reduce repairs.
          </li>
          <li>
            <strong>Repair Needs:</strong> Frequent repairs or major component issues may make replacement more cost-effective than continuing repairs.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Unsure whether to repair or replace? Proluma will evaluate your system and provide honest recommendations, suggesting replacement only when it’s the best option for your needs.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default ACInstallation;
