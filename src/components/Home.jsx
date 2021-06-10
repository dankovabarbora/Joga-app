import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="intro__div">
          <h1>Na jógu: Rychle a na pár kliknutí</h1>
          <button className="btn__start">Chci si zacvičit</button>
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
            Na interaktivní mapě si ve svém okolí vyhledejte nejbližší studio a
            s pomocí filtrů si na pár kliků vyhledejte lekci jógy, která se koná
            v čase, jenž Vám bude sedět.
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
            Těžký den? Najděte si lekci, kde si odpočinete a naberete znovu
            síly. Pokud se ale potřebujete zapotit, ani to pro nás není problém.
            Vyhledávat je možné i podle náročnosti.
          </p>
        </div>
      </div>
    </>
  );
};
