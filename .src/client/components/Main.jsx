import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page404 from './Page404';
import HomePage from './HomePage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={Page404} />
    </Switch>
  </main>
);

export default Main;
