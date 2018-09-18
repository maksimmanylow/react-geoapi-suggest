import C from '../constants';

const addressSuggestions = (state = {}, action) => {
  switch (action.type) {
    case C.GET_ADDRESS_SUGGESTIONS:
      return {
        id: action.id,
        query: action.query,
        timestamp: action.timestamp
      };
    default:
      return state;
  }
};

export default addressSuggestions;

/*

currentState = {
  query: 'Лиговский 12',
  suggestions: ['Лиговский 12']
}

const action = {
  type: C.SEARCH_ADDRESS,
  id: '128e1p5-3abl-0e52-33p0-8401l8yf3036',
  query: 'Невский 53'
};

let nextSate = addressSuggestions(currentState, action);
console.log(nextSate);
*/
