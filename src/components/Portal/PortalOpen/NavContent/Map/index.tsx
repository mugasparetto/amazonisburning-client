import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { amazon } from '../../../../../assets/amazon';

import {} from './styles';

const Map: React.FC = () => {
  return (
    <>
      <h2>Map</h2>

      <MapContainer
        center={[-10.535474, -61.187286]}
        zoom={4.2}
        style={{ height: '100%' }}
      >
        <GeoJSON data={amazon} />;
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
};

export default Map;
