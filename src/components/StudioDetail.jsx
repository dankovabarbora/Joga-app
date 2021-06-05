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
        <div className="oneResult__photogallery">
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
          <div className="oneStudio__links">
            <div>
              <img
                className="oneStudio__icons"
                src="/assets/ikonka.svg"
                alt=""
              />
              <a href={studio.website}>Webové stránky</a>
            </div>
            <div>
              <img
                className="oneStudio__icons"
                src="/assets/facebook.svg"
                alt=""
              />
              <a href={studio.facebook}>Facebook</a>
            </div>
            <div>
              <img
                className="oneStudio__icons"
                src="/assets/instagram.svg"
                alt=""
              />
              <a href={studio.instagram}>Instagram</a>
            </div>
            <div>
              <img
                className="oneStudio__icons"
                src="/assets/address.svg"
                alt=""
              />
              <div>{studio.address}</div>
            </div>
            <div>
              <img className="oneStudio__icons" src="/assets/mail.svg" alt="" />
              <a href={studio.email}>E-mail</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
