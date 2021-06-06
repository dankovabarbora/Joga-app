import React, { useState } from 'react';
import './Home.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LessonList } from './LessonList';
import data from '../locations.json';
import { Map } from './Map';

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
        <Map />

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
                <option value="0">Pondělí</option>
                <option value="1">Úterý</option>
                <option value="2">Středa</option>
                <option value="3">Čtvrtek</option>
                <option value="4">Pátek</option>
                <option value="5">Sobota</option>
                <option value="6">Neděle</option>
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
            <button className="btn__advanced">Rozšířené hledání</button>

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
      <LessonList filter={props.filter} />
    </>
  );
};
