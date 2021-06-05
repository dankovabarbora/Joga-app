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
          const photos = studio.foto.split(';');

          return (
            <div key={studio.id} className="studio__card">
              <Link to="/studio">
                <h2>{studio.nazev}</h2>
              </Link>
              <img src={photos[0]} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
