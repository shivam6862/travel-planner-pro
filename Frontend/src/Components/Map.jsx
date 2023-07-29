"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  Marker,
  Popup,
  Pane,
  Circle,
} from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import RoutingMachine from "./RoutingControl";

const maps = {
  base: "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=6HsWF1PPM2UmlGH3TpIe",
};

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = ({ searchTerm }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([28.65195, 77.23149]);

  console.log(searchTerm);
  useEffect(() => {
    if (searchTerm) setCenter(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <MapContainer
        center={center}
        zoom={5}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        whenCreated={(map) => setMap(map)}
        touchZoom={true}
      >
        {/* *************** */}
        {/* Pass in our custom control layer here, inside of the map container */}
        {/* *************** */}
        {searchTerm.length >= 2 && (
          <RoutingMachine key={searchTerm.length} routes={searchTerm} />
        )}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        {searchTerm.length > 0 &&
          searchTerm.map((place, index) => (
            <Marker key={index} position={place}></Marker>
          ))}
        <LocationMarker />
        <Pane name="custom" style={{ zIndex: 100 }}>
          <Circle center={[50.5, 30.5]} radius={200} />
        </Pane>
      </MapContainer>
    </>
  );
};

export default Map;
