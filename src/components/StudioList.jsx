import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './studiolist.css';
import data from '../data.json';

export const StudioList = () => {
  return (
    <section className="studios__gallery">
      <h1>Seznam jógových studií</h1>
      <div className="studios__list">
        {data.Studio.map((studio) => {
          const photos = studio.photo.split(';');

          return (
            <div key={studio.id} className="studio__card">
              <Link to={`/studio/${studio.id}`}>
                <h2>{studio.name}</h2>
              </Link>
              <img src={photos[0]} alt="fotka studia" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
