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

  const lekce = data.Lekce.find((x) => x.id == id);
  const studio = data.Studio.find((s) => s.id == lekce.studioId);
  const time = new Date(lekce.time);
  const photos = studio.photo.split(';');

  return (
    <section className="oneResult">
      <h1 className="oneResult__heading">
        <span>
          {` ${String(time.getHours()).padStart(2, 0)}:${String(
            time.getMinutes(),
          ).padStart(2, 0)}`}{' '}
        </span>{' '}
        – <span>{studio.name} </span> – <span>{lekce.title}</span>
      </h1>
      <div className="oneResult__description">{lekce.description}</div>

      <div className="oneResult__div">
        <div className="oneResult__details">
          <ul className="oneResult__details">
            <li className="oneResult__capacity">
              Kapacita:{' '}
              {lekce.occupancy === 'full'
                ? 'Kapacita této lekce byla naplněna.'
                : 'Na této lekci jsou stále volná místa.'}
            </li>
            <li className="oneResult__difficulty">
              Náročnost: {lekce.difficulty}{' '}
            </li>
            <li className="oneResult__length">
              Délka lekce: {`${lekce.length * 60} minut`}{' '}
            </li>
            <li className="oneResult__teacher">Lektor: {lekce.teacher}</li>
            <li className="oneResult__price">Cena: {lekce.price}</li>
            <h2>Kontakty</h2>
            <div className="oneResult__contacts">
              <li className="oneResult__phone">
                <img
                  className="oneResult__icons"
                  src="/assets/phone.svg"
                  alt="ikona telefon"
                ></img>
                <a href={`tel:${studio.phone}`}>
                  <div className="oneResult__phone-text">{studio.phone}</div>
                </a>
              </li>
              <div className="oneResult__links">
                <li className="oneResult__email">
                  <a href={`mailto:${studio.email}`}>
                    <img
                      className="oneResult__icons"
                      src="/assets/mail.svg"
                      alt="ikona email"
                    ></img>
                  </a>
                </li>
                <li className="oneResult__website">
                  <a href={studio.website}>
                    <img
                      className="oneResult__icons"
                      src="/assets/ikonka.svg"
                      alt="ikona webové stránky"
                    ></img>
                  </a>
                </li>
              </div>
            </div>
            <a href={lekce.reservation}>
              <button className="button__reservation">Rezervujte</button>
            </a>
          </ul>
        </div>

        <div className="oneResult__photogallery">
          <div className="oneResult__photos">
            {photos.map((photo, index) => {
              return <img src={photo.trim()} alt="fotka studia" key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
