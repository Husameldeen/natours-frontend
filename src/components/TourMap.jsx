import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../assets/pin.png";

function TourMap({ tour }) {
  const { locations } = tour;

  const latLngConverter = (lng, lat) => [lat, lng];

  const avgCenter = Math.round(locations.length / 2);

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <section className="section-map">
      <div id="map">
        <MapContainer
          center={latLngConverter(
            locations.at(avgCenter).coordinates[0],
            locations.at(avgCenter).coordinates[1],
          )}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc) => (
            <Marker
              icon={customIcon}
              key={loc._id}
              position={latLngConverter(loc.coordinates[0], loc.coordinates[1])}
            >
              <Popup>Hello</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}

export default TourMap;
