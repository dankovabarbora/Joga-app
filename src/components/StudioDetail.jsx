import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './studiodetail.css';
import data from '../data.json';

export const StudioDetail = () => {
  let { id } = useParams();
  const [order, setOrder] = useState(0);

  const studio = data.Studio.find((x) => x.id === id);

  const photos = studio.photo.split(';');

  return (
    <section className="oneStudio">
      <div className="oneStudio__div">
        <h1 className="oneStudio__title">{studio.name}</h1>
        <div className="oneStudio__photogallery">
          <div className="oneResult__photos carousel">
            <button
              onClick={() => {
                if (order <= 0) {
                  setOrder(4);
                } else {
                  setOrder(order - 1);
                }
              }}
              className="carousel__predchozi"
            >
              ←
            </button>
            <div className="carousel__media">
              {photos.map((photo, index) => {
                return (
                  <img src={photo.trim()} alt="fotka studia" key={index} />
                );
              })}
            </div>
            <button
              onClick={() => {
                if (order === 4) {
                  setOrder(0);
                } else {
                  setOrder(order + 1);
                }
              }}
              className="carousel__nasledujici"
            >
              →
            </button>
          </div>
        </div>
        <div className="oneStudio__details">
          <p className="oneStudio__description">{studio.description}</p>
          <div className="oneStudio__address">
            <img
              className="oneStudio__icons"
              src="/assets/address.svg"
              alt="ikona špendlíku"
            />
            <div className="oneStudio__address-text">{studio.address}</div>
          </div>
          <div className="oneStudio__links">
            <div className="oneStudio__website">
              <a href={studio.website}>
                <img
                  className="oneStudio__icons"
                  src="/assets/ikonka.svg"
                  alt="ikona webové stránky"
                />
              </a>
            </div>
            <div className="oneStudio__email">
              <a href={studio.email}>
                <img
                  className="oneStudio__icons"
                  src="/assets/mail.svg"
                  alt="ikona e-mailu"
                />
              </a>
            </div>
            <div className="oneStudio__facebook">
              <a href={studio.facebook}>
                <img
                  className="oneStudio__icons"
                  src="/assets/facebook.svg"
                  alt="ikona facebooku"
                />
              </a>
            </div>
            <div className="oneStudio__instagram">
              
              <a href={studio.instagram} >
                <img
                  className="oneStudio__icons"
                  src="/assets/instagram.svg"
                  alt="ikona instagramu"
                  
                />
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
