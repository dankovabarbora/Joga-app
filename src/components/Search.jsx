import React, { useState } from 'react';
import './Search.css';
import { LessonList } from './LessonList';
import data from '../locations.json';
import { Map } from './Map';

export const Search = (props) => {
  const [limit, setLimit] = useState(5);
  const loadMore = () => {
    setLimit(Number.MAX_SAFE_INTEGER);
  };

  return (
    <>
      <div className="search-intro">
        <Map filter={props.filter} setFilter={props.setFilter} />

        <form id="search__form" className="search__form" action="">
          <div className="search__fields">
            <label>
              Městská část
              <select
                value={props.filter.location || ''}
                onChange={(event) => {
                  props.setFilter({
                    ...props.filter,
                    location: event.target.value,
                  });
                }}
                name="district"
              >
                <option value="">Všechny městské části</option>
                {data.map((location, index) => {
                  return (
                    <option
                      key={index}
                      value={`${location.latitude},${location.longitude}`}
                    >
                      {location.label}
                    </option>
                  );
                })}
              </select>
            </label>
            <br />
            <label>
              Den v týdnu
              <select
                value={props.filter.date || ''}
                onChange={(event) => {
                  props.setFilter({
                    ...props.filter,
                    date: event.target.value,
                  });
                }}
              >
                <option value="">Zvolte den...</option>
                <option value="1">Pondělí</option>
                <option value="2">Úterý</option>
                <option value="3">Středa</option>
                <option value="4">Čtvrtek</option>
                <option value="5">Pátek</option>
                <option value="6">Sobota</option>
                <option value="7">Neděle</option>
              </select>
            </label>
            <br />

            <label className="checkbox">
              Pouze dostupné
              <input
                onChange={() => {
                  props.setFilter({
                    ...props.filter,
                    available: !props.filter.available,
                  });
                }}
                className="checkbox__input"
                type="checkbox"
                name=""
                id=""
                defaultChecked={props.filter.available}
              />
            </label>
            {/*<button className="btn__advanced">Rozšířené hledání</button>*/}

            <label>
              Výběr podle studia
              <select
                className="select__studio"
                value={props.filter.studio || ''}
                onChange={(event) => {
                  props.setFilter({
                    ...props.filter,
                    studio: event.target.value,
                  });
                }}
                name="studio__select"
              >
                <option value="">Všechna studia</option>
                <option value="yogaart">YOGA &amp; Art</option>
                <option value="karma-yoga">Studio Karma Yoga</option>
                <option value="yogame">YOGAME</option>
                <option value="jogovna">Jógovna</option>
                <option value="jemny-svet">Jemný svět</option>
                <option value="joga-letna">Jóga Letná</option>
                <option value="joga-krymska">Jóga Krymská</option>
                <option value="yoga-daily-life">
                  Jóga v denním životě Praha 2
                </option>
                <option value="yoga-karlin">YogaKarlin</option>
                <option value="aloha-joga">Aloha joga</option>
              </select>
            </label>
            <br></br>
            <label>
              Náročnost
              <select
                value={props.filter.level || ''}
                onChange={(event) => {
                  props.setFilter({
                    ...props.filter,
                    level: event.target.value,
                  });
                }}
              >
                <option value="">Zvolte obtížnost...</option>
                <option value="*">*</option>
                <option value="**">**</option>
                <option value="***">***</option>
                <option value="****">****</option>
              </select>
            </label>
          </div>
        </form>
      </div>
      <LessonList filter={props.filter} limit={limit} />
      <button className="btn__loadMore" onClick={loadMore}>
        {' '}
        Načíst další{' '}
      </button>
    </>
  );
};
