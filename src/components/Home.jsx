import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="intro__div">
          <h1>Na jógu: Rychle a na pár kliknutí</h1>
          <Link to="/search">
            <button className="btn__start">Chci si zacvičit</button>
          </Link>
        </div>
      </div>

      <div className="intro__heading">
        <h2>Najděte jógu v pravý čas a na pravém místě!</h2>
      </div>

      <div className="intro__articles">
        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose1.svg"
            alt="asana01"
          />
          <h2>Rychle</h2>
          <p>
            Není třeba ztrácet čas vyhledáváním jednotlivých studií na internetu
            a pročítáním jejich nabídky. U nás tyto informace najdete hezky
            pohromadě.
          </p>
        </div>

        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose2.svg"
            alt="asana02"
          />
          <h2>Přehledně</h2>
          <p>
            Na interaktivní mapě si najděte nejbližší studio a s pomocí našich
            filtrů si na pár kliknutí vyhledejte lekci jógy v čase, který Vám
            bude sedět.
          </p>
        </div>

        <div className="intro__article">
          <img
            className="intro__pose"
            src="/assets/yogaPose3.svg"
            alt="asana03"
          />
          <h2>S ohledem na Vaše možnosti</h2>
          <p>
            Těžký den? Najděte si lekci, kde si odpočinete a znovu naberete
            síly. Pokud se potřebujete zapotit, ani to pro nás není problém.
            Vyhledávat je možné i podle náročnosti.
          </p>
        </div>
      </div>
    </>
  );
};
