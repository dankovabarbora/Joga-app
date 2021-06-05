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
      
        <h1 className="oneResult__heading">
          <span>{` ${time.getHours()}:${time.getMinutes()}`} </span>
          <span>{studio.name} </span>
          <span>{lekce.title}</span>
        </h1>
        <div className="oneResult__div">
        <div className="oneResult__details">
          <ul>
            {/*<li>Název lekce: {lekce.title}</li>*/}
            <li className="oneResult__description">{lekce.description}</li>
            <hr></hr>
            <li className="oneResult__capacity">Kapacita: {lekce.occupancy==="full" ? "Kapacita této lekce byla naplněna." : "Na této lekci jsou stále volná místa."}</li>
            <li className="oneResult__difficulty">Náročnost: {lekce.difficulty} </li>
            <li className="oneResult__length">Délka lekce (v hodinách): {lekce.length} </li>
            <li className="oneResult__teacher">Lektor: {lekce.teacher}</li>
            <li className="oneResult__price">Cena: {lekce.price}</li>
            <div className="oneResult__contacts">
            <li>Kontakt na studio: {`${studio.email}, ${studio.phone}`}</li>
            <li>Webové stránky studia: {studio.website}</li>
            <li>Rezervační sytém: {lekce.reservation}</li>
            </div>
          </ul>
        </div>
        <div className="oneResult__photogallery">
          <div className="oneResult__photos">
            {photos.map((photo, index) => {
              return <img src={photo.trim()} alt="fotka studia" key={index} />;
            })}
          </div>
        </div>
        
        {/* <button>
          <Link to="/lesson-list">Zpět na výsledky hledání</Link>
        </button> */}
      </div>
    </section>
  );
};
