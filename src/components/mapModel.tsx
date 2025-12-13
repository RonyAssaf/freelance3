import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { X } from "lucide-react";
import type { LatLngExpression } from "leaflet";

type MapModalProps = {
  open: boolean;
  onClose: () => void;
};

// ✅ Explicit Leaflet type
const position: LatLngExpression = [33.753746, -84.38633]; // Atlanta

const MapModal = ({ open, onClose }: MapModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative bg-white rounded-xl w-[90%] max-w-3xl overflow-hidden shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>

        {/* Map */}
        <MapContainer
          center={position}
          zoom={13}
          className="h-[400px] w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              ApexLink Logistics <br />
              Atlanta, GA
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapModal;
