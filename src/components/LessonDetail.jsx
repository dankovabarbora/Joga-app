import React from 'react';
import './LessonDetail.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import data from '../data.json';
import { LessonList } from './LessonList';

export const LessonDetail = () => {
  let { id } = useParams();
  console.log(id);
  const lekce = data.Lekce.find((x) => x.id == id);
  const studio = data.Studio.find((s) => s.id == lekce.studioId);
  const time = new Date(lekce.time);
  const photos = studio.photo.split(';');

  return (
    <section className="oneResult">
      <div className="oneResult__div">
        <p className="oneResult__headnig">
          <span>{` ${time.getHours()}:${time.getMinutes()}`} </span>
          <span>{studio.name} </span>
          <span>{lekce.title}</span>
        </p>
        <div className="oneResult__photogallery">
          <div className="oneResult__photos">
            {photos.map((photo, index) => {
              return <img src={photo.trim()} alt="fotka studia" key={index} />;
            })}
          </div>
        </div>
        <div className="oneResult__details">
          <ul>
            <li>Typ: {lekce.title}</li>
            <li>Počet volných míst: {lekce.occupancy}</li>
            <li>Náročnost: {lekce.difficulty} </li>
            <li>Délka lekce: {lekce.length}</li>
            <li>Lektor: {lekce.teacher}</li>
            <li>Cena: {lekce.price}</li>
            <li>Kontakt na studio: {`${studio.email}, ${studio.phone}`}</li>
            <li>Webové stránky studia: {studio.website}</li>
            <li>Rezervační sytém: {lekce.reservation}</li>
          </ul>
        </div>
        {/* <button>
          <Link to="/lesson-list">Zpět na výsledky hledání</Link>
        </button> */}
      </div>
    </section>
  );
};
