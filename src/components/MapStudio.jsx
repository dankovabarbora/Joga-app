import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import data from '../data.json';
import spendlikUrl from '../assets/spendlik_lotos.svg';

export const MapStudio = () => {
  let { id } = useParams();
  const studio = data.Studio.find((x) => x.id === id);
  const position = studio.position.split(',');
  console.log(position);

  const [viewport, setViewport] = useState({
    latitude: parseFloat(position[0]),
    longitude: parseFloat(position[1].trim()),
    zoom: 15,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height={400}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle={{
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tileSize: 256,
            attribution:
              'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 18,
          },
        ],
      }}
    >
      <Marker
      offsetLeft={-25}
      offsetTop={-50}
        latitude={parseFloat(position[0])}
        longitude={parseFloat(position[1].trim())}
      >
        <img src={spendlikUrl} width={50} height={50} alt={studio.name} />
      </Marker>
    </ReactMapGL>
  );
};
