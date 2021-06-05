import React from 'react';
import './studiodetail.css';

export const StudioDetail = () => {
  return (
    <section class="oneStudio">
      <div class="oneStudio__div">
        <h1>YOGA &amp; ART</h1>
        <div class="oneResult__photogallery">
          <div class="oneResult__photos">
            <img
              class="oneResult__onePhoto"
              src="../assets/ilustracni_foto_studio.jpg"
              alt=""
            />
            <img
              class="oneResult__onePhoto"
              src="../assets/ilustracni_foto_studio.jpg"
              alt=""
            />
            <img
              class="oneResult__onePhoto"
              src="../assets/ilustracni_foto_studio.jpg"
              alt=""
            />
            <img
              class="oneResult__onePhoto"
              src="../assets/ilustracni_foto_studio.jpg"
              alt=""
            />
            <img
              class="oneResult__onePhoto"
              src="./img/calder-b-aHll22KZdJE-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="oneStudio__details">
          <p class="oneStudio__description">
            Jóga představuje jeden z nejstarších a nejdokonalejších systémů pro
            lidské zdraví, které chápeme ve třech rovinách – tělesné, duševní a
            duchovní. YOGA &amp; ART je unikátní prostor zaštiťující projekt v
            rámci pořádání jógových aktivit pro všechny generace. Záměrem je
            kombinace osvědčených pohybových cvičení s uměleckým rozvojem
            osobnosti, kreativity, sociálního cítění a úcty k sobě samému, okolí
            a přírodě. To vše v krásném prostředí objektu Marjánka na pražském
            Břevnově.
          </p>
          <div class="oneStudio__links">
            <div>
              <img class="oneStudio__icons" src="../assets/ikonka.svg" alt="" />
              <a href="#">Webové stránky</a>
            </div>
            <div>
              <img
                class="oneStudio__icons"
                src="../assets/facebook.svg"
                alt=""
              />
              <a href="#">Facebook</a>
            </div>
            <div>
              <img
                class="oneStudio__icons"
                src="../assets/instagram.svg"
                alt=""
              />
              <a href="#">Instagram</a>
            </div>
            <div>
              <img
                class="oneStudio__icons"
                src="../assets/address.svg"
                alt=""
              />
              <a href="#">Adresa</a>
            </div>
            <div>
              <img class="oneStudio__icons" src="../assets/mail.svg" alt="" />
              <a href="#">E-mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
