// import { Marker } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const Map = ({ response }) => {
  const latitude = response.location.lat;
  const longitude = response.location.lng;
  const customIcon = new Icon({
    iconUrl: "../assets/icon-location.svg",
    iconSize: [25, 25],
  });
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
