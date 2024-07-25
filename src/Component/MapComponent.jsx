import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
          <PopupContent>
            <PopupTitle>Gem Luxe Aesthetics</PopupTitle>
            <PopupLink
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </PopupLink>
          </PopupContent>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const PopupTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

const PopupLink = styled.a`
  margin-top: 5px;
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
