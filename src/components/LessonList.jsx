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
      <h2 className="results__heading">Výsledky hledání</h2>
      <div className="results-intro">
        {filteredLessons.map((lekce) => {
          const time = new Date(lekce.time);
          const studio = data.Studio.find((s) => s.id === lekce.studioId);
          return (
            <Link key={lekce.id} to={`/lesson/${lekce.id}`}>
              <img className="results__img" src="assets/lotos.svg" alt="" />
              <span>{` ${time.getHours()}: ${time.getMinutes()}`}</span>{' '}
              <span>{studio.name}</span> <span>{lekce.occupancy}</span>
              <span>{lekce.title}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
