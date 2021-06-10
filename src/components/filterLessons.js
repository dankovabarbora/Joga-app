import {
  toLatLon,
  toLatitudeLongitude,
  headingDistanceTo,
  moveTo,
  insidePolygon,
  distanceTo,
} from 'geolocation-utils';
import data from '../data.json';

export function filterLessons(filter, limit) {
  return data.Lekce.filter((lekce) => {
    const day = new Date(lekce.date).getDay();

    if (filter.available === true && lekce.occupancy === 'full') {
      return false;
    }
    if (filter.level && lekce.difficulty !== filter.level) {
      return false;
    }

    if (filter.studio && lekce.studioId !== filter.studio) {
      return false;
    }

    if (filter.date && day != filter.date) {
      return false;
    }

    const studio = data.Studio.find((x) => lekce.studioId === x.id);

    if (filter.location) {
      const radius = 3000;
      const locationDistrict = toLatLon(
        filter.location.split(',').map((i) => {
          return parseFloat(i);
        }),
      );

      const locationStudio = toLatLon(
        studio.position.split(',').map((i) => {
          return parseFloat(i);
        }),
      );

      const locationLesson = lekce.position
        ? toLatLon(
            lekce.position.split(',').map((i) => {
              return parseFloat(i);
            }),
          )
        : locationStudio;

      const distance = distanceTo(locationDistrict, locationLesson);

      if (distance > radius) {
        console.log(distance);
        return false;
      }
    }

    return true;
  }).slice(0, limit);
}
