import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { StudioList } from './components/StudioList';
import { About } from './components/About';
import { LessonList } from './components/LessonList';
import { LessonDetail } from './components/LessonDetail';
import { StudioDetail } from './components/StudioDetail';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Domů</Link>
            </li>
            <li>
              <Link to="/#search__form">Vyhledávání</Link>
            </li>
            <li>
              <Link to="/studio-list">Seznam jógových studií</Link>
            </li>
            <li>
              <Link to="/about">O nás</Link>
            </li>
          </ul>
        </nav>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lesson/:id">
            <LessonDetail />
          </Route>
          <Route path="/lesson-list">
            <LessonList />
          </Route>
          <Route path="/studio">
            <StudioDetail />
          </Route>
          <Route path="/studio-list">
            <StudioList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
