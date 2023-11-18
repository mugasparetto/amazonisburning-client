import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { amazon } from '../../../../../assets/amazon';
import api from '../../../../../services/api';
import {} from './styles';

const Map: React.FC = () => {
  const [wildfires, setWildfires] = useState([]);

  useEffect(() => {
    api.get('wildfires').then((response) => {
      const { data } = response;
      console.log(data);
      setWildfires(data);
    });
  }, []);

  return (
    <>
      <h2>Map</h2>

      <MapContainer
        center={[-10.535474, -61.187286]}
        zoom={4.2}
        minZoom={2.5}
        style={{ height: '100%' }}
        maxBoundsViscosity={1.0}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <GeoJSON data={amazon} />
        {wildfires.map(([lat, long, _, count]) => (
          <CircleMarker
            center={[lat, long]}
            radius={2 + count}
            key={`${lat},${long}`}
          />
        ))}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
};

export default Map;
