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
          <h2>Přehledně</h2>
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
          <h2>S ohledem na Vaše možnosti</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ipsum molestiae! Doloremque eum sint illo perspiciatis,
            placeat earum iste consequuntur, magnam vitae exercitationem
            deserunt saepe illum sequi minima, dolorem tempora?
          </p>
        </div>
      </div>
    </>
  );
};
