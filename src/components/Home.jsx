import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="intro__div">
          <h1>Za jógou: Rychle, jednoduše a na pár kliknutí</h1>
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
              Kde:
              <input />
            </label>
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
                className="checkbox__input"
                type="checkbox"
                name=""
                id=""
              />
            </label>
            <button className="btn__advanced">Rozšířené hledání</button>
          </div>
        </form>
      </div>

      <h2 className="results__heading">Výsledky hledání</h2>
      <div className="results-intro">
        <a href="result.html">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </a>
        <a href="result.html">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </a>
        <a href="result.html">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </a>
        <a href="result.html">
          <img className="results__img" src="assets/lotos.svg" alt="" />
          <span>10.30</span> <span>Jógovna</span> <span>8 míst</span>
          <span>Power jóga</span>
        </a>
      </div>
    </>
  );
};
