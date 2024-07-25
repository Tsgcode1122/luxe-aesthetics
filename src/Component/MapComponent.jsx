import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../Images/placeholder.png";

const MapComponent = () => {
  const position = [40.006, -75.272];
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=1418+Manoa+Rd,+Wynnewood,+PA+19096";

  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point as needed
    popupAnchor: [0, -32], // Adjust the popup anchor point as needed
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          GenLuxeAesthetics
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
