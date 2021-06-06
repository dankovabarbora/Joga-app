import React, { useState } from 'react';
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
  const [filter, setFilter] = useState({
    location: null,
    date: new Date().getDay(),
    time: new Date(),
    available: true,
    level: null,
    studio: null,
  });

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lesson/:id">
            <LessonDetail />
          </Route>
          <Route path="/lesson-list">
            <LessonList filter={filter} />
          </Route>
          <Route path="/studio/:id">
            <StudioDetail />
          </Route>
          <Route path="/studio-list">
            <StudioList />
          </Route>
          <Route path="/">
            <Home setFilter={setFilter} filter={filter} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
