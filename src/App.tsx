import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Import your new pages here
import ACRepair from "@/pages/ACRepair";
import ACInstallation from "@/pages/ACInstallation";
import ACMaintenance from "@/pages/ACMaintenance";

import DuctCleaning from "@/pages/DuctCleaning";
import DuctInstallation from "@/pages/DuctInstallation";
import DuctRepair from "@/pages/DuctRepair";

import HeatingRepair from "@/pages/HeatingRepair";
import HeatingInstallation from "@/pages/HeatingInstallation";
import HeatingMaintenance from "@/pages/HeatingMaintenance";
import Furnaces from "@/pages/Furnaces";
import ThermostatService from "@/pages/ThermostatService";

import DrainCleaning from "@/pages/DrainCleaning";
import TrenchlessSewerRepair from "@/pages/TrenchlessSewerRepair";
import SewerCameraInspection from "@/pages/SewerCameraInspection";
import HydroJetting from "@/pages/HydroJetting";
import Excavation from "@/pages/Excavation";

import LeakDetection from "@/pages/LeakDetection";
import SumpPumpServices from "@/pages/SumpPumpServices";
import Repiping from "@/pages/Repiping";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Subnav pages */}
          <Route path="/ac-repair" element={<ACRepair />} />
          <Route path="/ac-installation" element={<ACInstallation />} />
          <Route path="/ac-maintenance" element={<ACMaintenance />} />

          <Route path="/duct-cleaning" element={<DuctCleaning />} />
          <Route path="/duct-installation" element={<DuctInstallation />} />
          <Route path="/duct-repair" element={<DuctRepair />} />

          <Route path="/heating-repair" element={<HeatingRepair />} />
          <Route path="/heating-installation" element={<HeatingInstallation />} />
          <Route path="/heating-maintenance" element={<HeatingMaintenance />} />
          <Route path="/furnaces" element={<Furnaces />} />
          <Route path="/thermostat-service" element={<ThermostatService />} />

          <Route path="/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/trenchless-sewer-repair" element={<TrenchlessSewerRepair />} />
          <Route path="/sewer-camera" element={<SewerCameraInspection />} />
          <Route path="/hydro-jetting" element={<HydroJetting />} />
          <Route path="/excavation" element={<Excavation />} />

          <Route path="/leak-detection" element={<LeakDetection />} />
          <Route path="/sump-pump" element={<SumpPumpServices />} />
          <Route path="/repiping" element={<Repiping />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
