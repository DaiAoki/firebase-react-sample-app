import React from 'react';
import { render } from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

const router = (
  <BrowserRouter>
    <App>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </App>
  </BrowserRouter>
);

render(
  router,
  document.getElementById('root')
);
