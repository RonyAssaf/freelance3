import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Repiping = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Piping & Repiping Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix provides expert piping and repiping services for homes and commercial properties. We work with copper and PEX piping to provide durable, reliable solutions.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Signs You Need Repiping</h2>
        <p className="text-gray-700 mb-6">
          Pipes are subject to wear and tear over time. Even with proper maintenance, old or corroded pipes eventually need replacement. Repiping replaces these pipes with durable, modern materials.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Unpleasant odors</li>
          <li>Poor water taste</li>
          <li>Creaking and banging noises from pipes</li>
          <li>Inconsistent water temperature</li>
          <li>Visible corrosion</li>
          <li>Discolored or rust-colored water</li>
          <li>Poor or inconsistent water pressure</li>
          <li>Frequent leaks</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">PEX vs. Copper: Which Piping Material Is Best?</h3>
        <p className="text-gray-700 mb-4">
          PEX pipes are durable, corrosion-resistant, and cost-effective, while copper piping is quick to install and resists bacteria growth. The right choice depends on your property’s needs.
        </p>

        <p className="text-gray-700 mb-6">
          Our expert plumbers can assess your home or business and recommend the ideal piping solution. We offer same-day services, free estimates, upfront pricing, and a price match guarantee.
        </p>

        <p className="text-gray-700">
          Contact Masterfix online or call <a href="tel:3139003211" className="text-blue-600 font-semibold">313-900-3211</a> to schedule repiping or piping services today!
        </p>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Repiping;
