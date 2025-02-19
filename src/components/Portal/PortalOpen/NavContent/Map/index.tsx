import React, { useEffect, useState, useCallback } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Tooltip,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import { amazon } from '../../../../../assets/amazon';
import api from '../../../../../services/api';
import { ContentContainer } from './styles';
import './styles.css';

const Map: React.FC = () => {
  const [wildfires, setWildfires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      api
        .get('wildfires')
        .then((response) => {
          const { data } = response;
          setWildfires(data);
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const calculatePointSize = useCallback((count: number) => {
    if (count >= 1 && count < 20) {
      return 6;
    } else if (count >= 20 && count < 60) {
      return 10;
    } else if (count >= 60 && count < 100) {
      return 14;
    } else if (count >= 100) {
      return 18;
    }
  }, []);

  const calculatePointColor = useCallback((count: number) => {
    if (count >= 1 && count < 20) {
      return '#F3AB8C';
    } else if (count >= 1 && count < 60) {
      return '#FC7A41';
    } else if (count >= 60 && count < 100) {
      return '#AF4517';
    } else if (count >= 100) {
      return '#5A2006';
    }
  }, []);

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
              color: '#FFD28F',
              fillOpacity: 0.3,
            }}
            interactive={false}
          />
          <MarkerClusterGroup
            disableClusteringAtZoom={5}
            spiderfyOnMaxZoom={false}
            polygonOptions={{
              color: '#FC7A41',
              weight: 2,
            }}
          >
            {wildfires.map(([lat, long, _, count]) => (
              <CircleMarker
                center={[lat, long]}
                radius={calculatePointSize(count)}
                key={`${lat},${long}`}
                pathOptions={{
                  stroke: false,
                  color: '#222',
                  fillColor: calculatePointColor(count),
                  weight: 2,
                  fillOpacity: 0.6,
                }}
                eventHandlers={{
                  mouseover: ({ target }) => {
                    target.setStyle({
                      stroke: true,
                    });
                  },
                  mouseout: ({ target }) => {
                    target.setStyle({ stroke: false });
                  },
                }}
              >
                <Tooltip>
                  Recurrence: {count} {count > 1 ? 'times' : 'time'}
                </Tooltip>
              </CircleMarker>
            ))}
          </MarkerClusterGroup>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          />
        </MapContainer>
      )}
      {error && !loading && (
        <ContentContainer>
          <p>An error has happened while downloading the locations.</p>
          <p>Refresh the page and check your connection.</p>
        </ContentContainer>
      )}
      {loading && !error && (
        <ContentContainer>
          <span className="loader"></span>
        </ContentContainer>
      )}
    </>
  );
};

export default Map;
