import { createStore, combineReducers, applyMiddleware } from 'redux';
import addressSuggestions from '../reducers/addressSuggestions';
import initialState from './initialState';

const logger = ({ getState }) => next => action => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', getState());
  console.groupEnd();
};

const saver = ({ getState }) => next => action => {
  const result = next(action);
  localStorage['redux-store'] = JSON.stringify(getState());
  return result;
};

export const storeFactory = initialState =>
  applyMiddleware(logger, saver)(createStore)(
    addressSuggestions,
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState
  );

export default storeFactory;
