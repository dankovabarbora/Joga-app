import React from 'react';
import { useParams } from 'react-router-dom';
import './studiodetail.css';
import data from '../data.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { MapStudio } from './MapStudio';

export const StudioDetail = () => {
  let { id } = useParams();

  const studio = data.Studio.find((x) => x.id === id);

  const photos = studio.photo.split(';');

  return (
    <section className="oneStudio">
      <h1 className="oneStudio__title">{studio.name}</h1>
      <div className="oneStudio__div">
        <div className="oneStudio__photos">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            interval={2000}
            transitionTime={500}
          >
            {photos.map((photo, index) => {
              return (
                <div key={index} className="">
                  <img src={photo.trim()} alt="fotka studia" key={index} />
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="oneStudio__details">
          <div className="oneStudio__description">{studio.description}</div>
          
          <div className="oneStudio__address">
            <img
              className="oneStudio__icons"
              src="/assets/address.svg"
              alt="ikona špendlíku"
            />
            <div className="oneStudio__address-text">{studio.address}</div>
          </div>
          <h2>Zůstaňte ve spojení!</h2>
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
              <a href={`mailto:${studio.email}`}>
                <img
                  className="oneStudio__icons"
                  src="/assets/mail.svg"
                  alt="ikona e-mailu"
                />
              </a>
            </div>
            <div className="oneStudio__facebook">
              <a
                href={
                  studio.facebook === null
                    ? 'oneStudio__facebook hidden'
                    : 'oneStudio__facebook'
                }
              >
                <img
                  className="oneStudio__icons"
                  src="/assets/facebook.svg"
                  alt="ikona facebooku"
                />
              </a>
            </div>
            <div
              className={
                studio.instagram === null
                  ? 'oneStudio__instagram hidden'
                  : 'oneStudio__instagram'
              }
            >
              <a href={studio.instagram}>
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
      <MapStudio className="map__studio"/>
    </section>
  );
};
