import React, { useState, useEffect } from 'react';
import './LessonList.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import data from '../data.json';
import { filterLessons } from './filterLessons';

const dnyVTydnu = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];

export const LessonList = (props) => {
  console.log(props);
  const filteredLessons = filterLessons(props.filter, props.limit);
  console.log(filteredLessons.length);

  return (
    <>
      <div className="results-intro">
        <h2 className="results__heading">Výsledky hledání</h2>
        {filteredLessons.map((lekce) => {
          const time = new Date(lekce.time);
          const date = new Date(lekce.date);
          const studio = data.Studio.find((s) => s.id === lekce.studioId);
          return (
            <Link key={lekce.id} to={`/lesson/${lekce.id}`}>
              <img className="results__img" src="assets/lotos.svg" alt="" />
              <span> {dnyVTydnu[date.getDay()]}</span>
              <span className="results__time">{` ${String(
                time.getHours(),
              ).padStart(2, 0)}:${String(time.getMinutes()).padStart(
                2,
                0,
              )}`}</span>{' '}
              <span className="results__StudioName">{studio.name}</span>{' '}
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
