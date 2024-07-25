import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../Images/placeholder.png";
import styled from "styled-components";

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

  const AlwaysOpenPopup = ({ position, content }) => {
    const map = useMap();

    useEffect(() => {
      const marker = L.marker(position, { icon: customIcon }).addTo(map);
      marker.bindPopup(content).openPopup();

      return () => {
        map.removeLayer(marker);
      };
    }, [map, position, content]);

    return null;
  };

  const popupContent = `
    <div style="display: flex; flex-direction: column; align-items: flex-start; padding: 10px;">
      <h3 style="margin: 0; font-size: 1rem; color: #333;">Gem Luxe Aesthetics</h3>
      <a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer" style="margin-top: 5px; font-size: 0.9rem; color: #007bff; text-decoration: underline; cursor: pointer;">Open in Google Maps</a>
    </div>
  `;

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
      zoomControl={false} // Disable the zoom control
      scrollWheelZoom={false} // Disable scroll wheel zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <AlwaysOpenPopup position={position} content={popupContent} />
    </MapContainer>
  );
};

export default MapComponent;
