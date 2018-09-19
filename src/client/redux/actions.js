import C from '../constants';

export const changeActiveSuggestion = currentFocus => ({
  type: C.CHANGE_ACTIVE_SUGGESTION,
  currentFocus
});
