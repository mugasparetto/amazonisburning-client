import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, CircleMarker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import { amazon } from '../../../../../assets/amazon';
import api from '../../../../../services/api';
import { ErrorContainer } from './styles';

const Map: React.FC = () => {
  const [wildfires, setWildfires] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get('wildfires')
      .then((response) => {
        const { data } = response;
        setWildfires(data);
      })
      .catch((error) => {
        setError(true);
        //display error message
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <>
      <h2>Map</h2>

      {!loading && !error && (
        <MapContainer
          center={[-10.535474, -61.187286]}
          zoom={4.2}
          minZoom={2.5}
          maxZoom={16}
          style={{ height: '100%' }}
          maxBoundsViscosity={1.0}
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]}
        >
          <GeoJSON
            data={amazon}
            pathOptions={{
              stroke: false,
              color: '#FC7A41',
            }}
            interactive={false}
          />
          {/* <MarkerClusterGroup> */}
          {wildfires.map(([lat, long, _, count]) => (
            <CircleMarker
              center={[lat, long]}
              radius={2 + 2 * count}
              key={`${lat},${long}`}
              pathOptions={{ stroke: false, color: '#FC7A41', fillOpacity: 1 }}
              interactive={false}
            />
          ))}
          {/* </MarkerClusterGroup> */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          />
        </MapContainer>
      )}
      {error && (
        <ErrorContainer>
          <p>An error has happened while downloading the locations.</p>
          <p>Refresh the page and check your connection.</p>
        </ErrorContainer>
      )}
    </>
  );
};

export default Map;
