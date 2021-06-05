import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './studiolist.css';

export const StudioList = () => {
  return (
    <section class="studios__gallery">
      <h1>Seznam jógových studií</h1>
      <div class="studios__list">
        <div class="studio__card">
          <Link to="/studio">
            <h2>YOGA &amp; ART</h2>
          </Link>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
        <div class="studio__card">
          <h2>Jógovna</h2>
          <img src="../assets/ilustracni_foto_studio.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
