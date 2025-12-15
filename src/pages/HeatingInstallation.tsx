import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const HeatingInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Heater Replacement & Installation</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          If your heater is over 10 years old, it’s more likely to break down, leading to costly and inconvenient repairs. Proluma offers comprehensive heating replacement and installation services to keep your home warm and efficient all winter long.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">New Heating Installation & Replacement Services</h2>
        <p className="text-gray-700 mb-6">
          We understand that heating replacement is a significant decision, but investing in a new heater can save you money over time. Newer models are more energy-efficient and meet stricter Department of Energy guidelines, meaning fewer repairs and lower energy bills. Though the upfront cost may seem high, the long-term savings make it worthwhile. We also offer flexible financing options to make your new system more affordable.
        </p>
        <p className="text-gray-700 mb-6">
          When you trust Proluma to replace your home’s outdated or malfunctioning furnace, our experienced technicians ensure a precise installation so your new system operates perfectly and lasts for years. We thoroughly inspect and test your new heating system to guarantee efficient, consistent comfort.
        </p>
        <p className="text-gray-700 mb-6">
          Let Proluma help keep your home cozy this winter with our expert heating installation services. Call us at (313) 900-3211 or schedule your heating replacement services online today!
        </p>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-800">Why Choose Proluma for Heating Installation & Replacement?</h2>
        <p className="text-gray-700 mb-6">
          At Proluma, we are committed to providing the best customer service, ensuring you get clear communication and peace of mind. Our heating installation and replacement services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>24-hour emergency service</li>
          <li>VIP customer service</li>
          <li>100% money-back guarantee</li>
          <li>Lifetime parts warranty</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We employ highly trained professionals who are background checked and drug tested, so you can trust our technicians to provide top-rated service in your home. We maintain upfront pricing and offer financing options to make new system installations more affordable.
        </p>
        <p className="text-gray-700 mb-6">
          There’s no better team to trust for your home’s heating system installation and replacement — guaranteed! Call us at (313) 900-3211 or schedule your services online and join the Proluma family today!
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HeatingInstallation;
