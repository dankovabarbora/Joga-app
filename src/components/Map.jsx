import React, { useState, useEffect } from 'react';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from 'react-map-gl';
import { filterLessons } from './filterLessons';
import data from '../data.json';

export const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 50.087543262674856,
    longitude: 14.421045443793917,
    zoom: 12,
  });

  const [popup, setPopup] = useState(null);

  const studios = data.Studio;
  const lessons = filterLessons(props.filter);

  useEffect(() => {
    const location = props.filter.location
      ? props.filter.location.split(',').map((s) => parseFloat(s))
      : null;
    if (location) {
      setViewport({
        latitude: location[0],
        longitude: location[1],
        zoom: 12,
      });
    }
  }, [props.filter.location, setViewport]);

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
        <GeolocateControl
          style={{
            right: 10,
            top: 100,
          }}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showAccuracyCircle={false}
          /* auto */
        />
        <div className="map__navigation">
          <NavigationControl />
        </div>
        {lessons.map((lesson) => {
          const studio = studios.find((x) => lesson.studioId === x.id);

          const position = lesson.position ? lesson.position : studio.position;
          const coordinates = position.split(',').map((i) => parseFloat(i));

          return (
            <div key={lesson.id}>
              <Marker
                latitude={coordinates[0]}
                longitude={coordinates[1]}
                offsetLeft={-10}
                offsetTop={-40}
              >
                <button
                  className="marker-button"
                  onMouseEnter={() => setPopup(lesson.id)}
                  onClick={() =>
                    props.setFilter({
                      ...props.filter,
                      studio: lesson.studioId,
                    })
                  }
                >
                  <img
                    className="map__pin"
                    src="assets/spendlik_lotos.svg"
                    alt="spendlik"
                  />
                </button>
              </Marker>
              {popup === lesson.id ? (
                <Popup
                  latitude={coordinates[0]}
                  longitude={coordinates[1]}
                  offsetTop={-54}
                  onClose={() => setPopup(null)}
                >
                  {studio.name}
                </Popup>
              ) : null}
            </div>
          );
        })}
      </ReactMapGL>
    </div>
  );
};
