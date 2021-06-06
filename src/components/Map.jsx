import React, { useState } from 'react';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import { filterLessons } from './filterLessons';
import data from '../data.json';

export const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 50.087543262674856,
    longitude: 14.421045443793917,
    zoom: 15,
  });
  const studios = data.Studio;
  const lessons = filterLessons(props.filter);

  return (
    <div className="map-intro">
      <ReactMapGL
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
        {...viewport}
        width="100%"
        height={'100%'}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {lessons.map((lesson) => {
          const studio = studios.find((x) => lesson.studioId === x.id);

          const position = lesson.position ? lesson.position : studio.position;
          const coordinates = position.split(',').map((i) => parseFloat(i));

          return (
            <Marker
              key={lesson.id}
              latitude={coordinates[0]}
              longitude={coordinates[1]}
              offsetLeft={-8}
              offsetTop={-24}
            >
              <img src="assets/spendlik_lotos.svg" alt="spendlik" />
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};
