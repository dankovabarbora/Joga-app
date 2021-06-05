import React from 'react';
import './LessonList.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import data from '../data.json';

export const LessonList = (props) => {
  console.log(props);
  const filteredLessons = data.Lekce.filter((lekce) => {
    if (props.filter.available === true && lekce.occupancy === 'full') {
      return false;
    }
    if (props.filter.studio && lekce.studioId !== props.filter.studio) {
      return false;
    }
    return true;
  });
  console.log(filteredLessons.length);
  return (
    <>
      <div className="results-intro">
        <h2 className="results__heading">Výsledky hledání</h2>
        {filteredLessons.map((lekce) => {
          const time = new Date(lekce.time);
          const studio = data.Studio.find((s) => s.id === lekce.studioId);
          return (
            <Link key={lekce.id} to={`/lesson/${lekce.id}`}>
              <img className="results__img" src="assets/lotos.svg" alt="" />
              <span className="results__time">{` ${String(
                time.getHours(),
              ).padStart(2, 0)}:${String(time.getMinutes()).padStart(
                2,
                0,
              )}`}</span>{' '}
              <span className="results__StudioName">{studio.name}</span> <br />
              <span className="results__title">{lekce.title}</span>{' '}
              <span className={lekce.occupancy === 'full' ? 'obsazeno' : ''}>
                {lekce.occupancy === 'full' ? 'Obsazeno' : null}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
