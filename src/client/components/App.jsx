import React from 'react';
import fetch from 'isomorphic-fetch';
import C from '../constants';
import FormContainer from './containers/FormContainer';

class App extends React.Component {
  state = {
    suggestions: [],
    currentFocus: 0,
    query: ''
  };

  getSuggestions = query => {
    this.postData({ query, count: C.MAX_SUGGESTIONS })
      .then(result => result.suggestions.map(suggestion => suggestion.value))
      .then(suggestions => this.setState({ suggestions }))
      .catch(error => console.error(error));
  };

  handleInputChange = e => {
    if (e.target.value.length > 2) {
      const suggestions = this.getSuggestions(e.target.value);
      const newSuggestions = [e.target.value, ...suggestions];
      console.log(newSuggestions);
      const nextState = {
        ...this.state,
        suggestions: newSuggestions,
        query: e.target.value
      };
      this.setState(nextState);
    }
  };

  handleKeyDown = e => {
    let { currentFocus } = this.state;
    switch (e.keyCode) {
      case 38:
        console.log('UP');
        currentFocus = currentFocus && currentFocus - 1;
        e.preventDefault();
        break;
      case 40:
        console.log('DOWN');
        currentFocus = currentFocus + 1 < C.MAX_SUGGESTIONS ? currentFocus + 1 : currentFocus;
        e.preventDefault();
        break;
      default:
    }
    const nextState = {
      ...this.state,
      currentFocus,
      query: this.state.suggestions[currentFocus]
    };
    this.setState(nextState);
  };

  postData = (data = {}) =>
    // Default options are marked with *
    fetch(C.API_URL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json; charset=utf-8',
        Authorization: `Token ${C.API_KEY}`
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON

  render() {
    const { handleInputChange, handleKeyDown } = this;
    const { suggestions, currentFocus, query } = this.state;
    return (
      <div className="app">
        <FormContainer
          onInput={handleInputChange}
          handleKeyDown={handleKeyDown}
          suggestions={suggestions}
          currentFocus={currentFocus}
          query={query}
        />
      </div>
    );
  }
}

export default App;
