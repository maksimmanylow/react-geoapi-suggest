import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap'; // Import Bootstrap’s JavaScript
import 'popper.js'; // Import Bootstrap’s dependencies
import 'jquery'; // Import Bootstrap’s dependencies
import './static/scss/main.scss';

window.React = React;

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
