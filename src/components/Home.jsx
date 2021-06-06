import React, { useState } from 'react';
import './Home.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LessonList } from './LessonList';

export const Home = (props) => {
  return (
    <>
      <div className="intro">
        <div className="intro__div">
          <h1>Na jógu: Rychle, jednoduše a na pár kliknutí</h1>
        </div>
      </div>

      <div className="intro__heading">
        <h2>Najděte jógu v pravý čas na pravém místě!</h2>
      </div>

      <div className="intro__articles">
        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose1.svg"
            alt="asana01"
          />
          <h2>Jednoduchost</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ipsum molestiae! Doloremque eum sint illo perspiciatis,
            placeat earum iste consequuntur, magnam vitae exercitationem
            deserunt saepe illum sequi minima, dolorem tempora?
          </p>
        </div>

        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose2.svg"
            alt="asana02"
          />
          <h2>Rychlost</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ipsum molestiae! Doloremque eum sint illo perspiciatis,
            placeat earum iste consequuntur, magnam vitae exercitationem
            deserunt saepe illum sequi minima, dolorem tempora?
          </p>
        </div>

        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose3.svg"
            alt="asana03"
          />
          <h2>Přehlednost</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ipsum molestiae! Doloremque eum sint illo perspiciatis,
            placeat earum iste consequuntur, magnam vitae exercitationem
            deserunt saepe illum sequi minima, dolorem tempora?
          </p>
        </div>
      </div>

      <div className="search-intro">
        <div className="map-intro"></div>

        <form id="search__form" className="search__form" action="">
          <div className="search__fields">
            <label>
              Městská část
              <br></br>
              <select name="district">
                <option value="prague1">Praha 1</option>
                <option value="prague1">Praha 2</option>
                <option value="prague1">Praha 3</option>
                <option value="prague1">Praha 4</option>
                <option value="prague1">Praha 5</option>
                <option value="prague1">Praha 6</option>
                <option value="prague1">Praha 7</option>
                <option value="prague1">Praha 8</option>
                <option value="prague1">Praha 9</option>
                <option value="prague1">Praha 10</option>
              </select>
            </label>
            <br></br>
            <label>
              Datum:
              <input type="date" />
            </label>
            <label>
              Čas:
              <input type="time" />
            </label>
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
            <button className="btn__advanced">Rozšířené hledání</button>

            <label>
              Výběr podle studia
              <br></br>
              <select
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
              <input type="text" />
            </label>
          </div>
        </form>
      </div>
      <LessonList filter={props.filter} />
    </>
  );
};
