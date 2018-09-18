import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import C from '../constants';
import SearchAddressForm from './SearchAddressForm/SearchAddressForm';
import Suggestion from './Suggestion/Suggestion';

class App extends React.component {
  state = {
    query: '',
    suggestions: []
  };

  getSuggestions = query => {
    this.postData({ query: this.queryInput.value, count: 6 })
      .then(result => result.suggestions.map(suggestion => suggestion.value))
      .then(suggestions => this.setState({ suggestions, query }))
      .catch(error => console.error(error));
  };

  handleInputChange = () => {
    if (this.queryInput.value.length > 2) {
      this.getSuggestions(this.queryInput.value);
    }
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
    const { handleInputChange } = this;
    const { suggestions } = this.state;
    return (
      <div className="app">
        <SearchAddressForm onChange={handleInputChange} />
        <ul>
          {suggestions.map(item => (
            <Suggestion title={item} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.query,
    suggestions: state.suggestions
  };
}

export default connect(mapStateToProps)(App);
