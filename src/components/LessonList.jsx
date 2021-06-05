import React from 'react';
import './LessonList.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const LessonList = () => {
  return (
    <>
      <h2 className="results__heading">Výsledky hledání</h2>
      <div className="results-intro">
        <Link to="/lesson/:id">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </Link>
        <Link to="/lesson/:id">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </Link>
        <Link to="/lesson/:id">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </Link>
        <Link to="/lesson/:id">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </Link>
      </div>
    </>
  );
};
