import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import storeFactory from '../redux/store/storeFactory';

const store = storeFactory();

const HomePage = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default HomePage;
