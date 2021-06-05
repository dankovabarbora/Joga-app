import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link className="" to="/">
          <img className="logo-lotos" src="../assets/lotos.svg" alt="lotos" />
        </Link>
        <p className="logo-text">Na jógu</p>
      </div>

      <nav className="menu nav-closed">
        <ul className="menu_buttons">
          <li>
            <Link to="/" className="nav-link">
              Domů
            </Link>
          </li>
          <li>
            <HashLink to="/#search__form" className="nav-link">
              Vyhledávání
            </HashLink>
          </li>
          <li>
            <Link to="/studio-list" className="nav-link">
              Seznam jógových studií
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              O nás
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hamburger">
        <button className="hamburger-btn" id="hamburger-btn"></button>
      </div>
    </header>
  );
};
