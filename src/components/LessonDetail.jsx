import React from 'react';
import './LessonDetail.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const LessonDetail = () => {
  return (
    <section className="oneResult">
      <div className="oneResult__div">
        <p className="oneResult__headnig">
          <span>10:30 </span>
          <span>Jógovna </span>
          <span>Power jóga</span>
        </p>
        <div className="oneResult__photogallery">
          <div className="oneResult__photos">
            <img
              className="oneResult__onePhoto"
              src="assets/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
            <img
              className="oneResult__onePhoto"
              src="assets/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
            <img
              className="oneResult__onePhoto"
              src="assets/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
            <img
              className="oneResult__onePhoto"
              src="assets/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
            <img
              className="oneResult__onePhoto"
              src="assets/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneResult__details">
          <ul>
            <li>Typ:</li>
            <li>Počet volných míst:</li>
            <li>Náročnost:</li>
            <li>Délka lekce:</li>
            <li>Lektor:</li>
            <li>Cena:</li>
            <li>Kontakt na studio:</li>
            <li>Webové stránky studia:</li>
            <li>Rezervační sytém:</li>
          </ul>
        </div>
        {/* <button>
          <Link to="/lesson-list">Zpět na výsledky hledání</Link>
        </button> */}
      </div>
    </section>
  );
};
