import React, { useState, useCallback } from 'react';
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

  /*const onSelectLocation = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: 'auto',
    });
  }, []);*/

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
        /*onViewportChange={setViewport}*/
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
                offsetLeft={-8}
                offsetTop={-24}
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
                  offsetTop={-34}
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
