import React from 'react';
import './about.css';

export const About = () => {
  return (
    <>
      <h1 className="about__heading">
        O projektu Na jógu (zatím pouze v Praze)
      </h1>
      <div className="about__articles">
        <p className="about__articles-first">
          Webové stránky Na jógu vznikly jako závěrečný projekt <strong>Digitální
          akademie: Front-end web</strong> na jaře roku 2021. V týmu jsme byly dvě –
          <strong> Barbora Daňková a Šárka Princová Maroušková</strong>. Obě nadšené jogínky,
          které mají zároveň malé syny. Samotnou realizaci podpořil svými
          radami mentor <strong>Matěj Šimek</strong>.
        </p>

        <p className="about__articles-second">
          Snažily jsme se vytvořit webovou aplikaci, kterou na trhu postrádáme a
          kterou bychom rády samy využívaly. Výsledkem je tento <strong>rozcestník</strong>, který by
          uživateli nebo uživatelce pomohl jednoduše vyhledat nejbližší
          dostupnou lekci jógy v jeho / jejím okolí. Základem je <strong>interaktivní
          mapa</strong>, díky níž může uživatel / uživatelka prozkoumávat své okolí a
          nabídky jednotlivých studií. Své hledání pak může zpřesnit díky
          několika filtrům, jež hledání zpřesňují.
        </p>
        {/*Pozn. sem vložit třeba video, jak se pracuje s mapou*/}

        <p className="about__articles-third">
          Věříme, že tento projekt může pomoct zpřístupnit jógu těm, kteří ji
          nikdy nezkusili. Anebo pomoct zkušenějším jogínům najít lekci, která
          jim bude nejvíc sedět. Zároveň doufáme, že by projekt <strong>Na jógu </strong> mohl
          pomoct jógovým studiím, které teď byly kvůli pandemii covidu-19 dlouho
          zavřené a prakticky bez příjmů.
        </p>
        <p>Velké díky patří samozřejmě Czechitas!</p>
      </div>
    </>
  );
};
