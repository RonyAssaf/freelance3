import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { X } from "lucide-react";
import type { LatLngExpression } from "leaflet";

// ⚠️ Make sure Leaflet CSS is imported once in your app (usually in main.tsx or index.tsx)
// import "leaflet/dist/leaflet.css";

type MapModalProps = {
  open: boolean;
  onClose: () => void;
};

// 📍 250 Congress Park Dr, Apt 320, Delray Beach, FL 33445
const position: LatLngExpression = [26.4599, -80.1056];

const MapModal = ({ open, onClose }: MapModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative bg-white rounded-xl w-[90%] max-w-3xl overflow-hidden shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-3 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>

        {/* Map */}
        <MapContainer
          center={position}
          zoom={15}
          className="h-[400px] w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Marker position={position}>
            <Popup>
              <strong>Proluma</strong>
              <br />
              250 Congress Park Dr, Apt 320
              <br />
              Delray Beach, FL 33445
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapModal;
