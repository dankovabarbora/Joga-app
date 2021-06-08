import React, { useState } from 'react';
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleclick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="logo-container">
        <Link className="" to="/">
          <img className="logo-lotos" src="../assets/lotos.svg" alt="lotos" />
        </Link>
        <p className="logo-text">Na jógu</p>
      </div>

      <nav className={menuOpen === false ? 'menu nav-closed' : 'menu'}>
        <ul className="menu_buttons">
          <li>
            <Link onClick={handleclick} to="/" className="nav-link">
              Domů
            </Link>
          </li>
          <li>
            <HashLink
              onClick={handleclick}
              to="/#search__form"
              className="nav-link"
            >
              Vyhledávání
            </HashLink>
          </li>
          <li>
            <Link onClick={handleclick} to="/studio-list" className="nav-link">
              Seznam jógových studií
            </Link>
          </li>
          <li>
            <Link onClick={handleclick} to="/about" className="nav-link">
              O nás
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hamburger">
        <button
          onClick={handleclick}
          className="hamburger-btn"
          id="hamburger-btn"
        ></button>
      </div>
    </header>
  );
};
