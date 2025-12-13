import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Proper Leaflet icon config (no any, no prototype mutation)
const DefaultIcon = L.icon({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

createRoot(document.getElementById("root")!).render(<App />);
