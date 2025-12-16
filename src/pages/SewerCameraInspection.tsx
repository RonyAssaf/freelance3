import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const SewerCameraInspection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center mt-24">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sewer Camera Inspection</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Masterfix uses advanced video pipe inspections to locate clogs, breaks, and other damage without digging. Fast, precise, and non-intrusive diagnostics for your plumbing and sewer lines.
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">How Video Pipe Inspection Works</h2>
        <p className="text-gray-700 mb-6">
          During a video pipe inspection, a Masterfix plumber inserts a camera-tipped rod into the drain or sewer access point. Live footage helps locate the problem, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>The exact location of clogs or breaks</li>
          <li>The materials causing the issue, such as tree roots, grease, debris, or corrosion</li>
          <li>The extent of damage sustained by the pipe</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Benefits of Video Pipe Inspection</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Faster resolution of emergencies</li>
          <li>Better information about the nature of clogs or breaks</li>
          <li>Detection of minor blockages before they become serious</li>
          <li>Ability to find lost items in the pipes</li>
          <li>Preventative drain and sewer maintenance</li>
        </ul>

        <p className="text-gray-700 mb-6">
          For trusted, non-intrusive pipe diagnostics, schedule a video pipe inspection with Masterfix today. +1 (561) 933 9296.
        </p>
      </section>

      {/* Components */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default SewerCameraInspection;
