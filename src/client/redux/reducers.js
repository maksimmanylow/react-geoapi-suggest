import C from '../constants';

const suggestionsReducer = ({ state = {}, action }) => {
  switch (action.type) {
    case C.CHANGE_ACTIVE_SUGGESTION:
      return {
        ...state,
        currentFocus: action.currentFocus
      };
    default:
      return state;
  }
};

export default suggestionsReducer;
