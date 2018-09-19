import React from 'react';
import Suggestion from '../Suggestion';
import Input from '../Input';

const FormContainer = ({
  onInput = f => f,
  handleKeyDown = f => f,
  suggestions,
  currentFocus,
  query
}) => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="autocomplete">
      <Input type="text" onChange={onInput} onKeyDown={handleKeyDown} value={query} />
      <div className="autocomplete-items">
        {suggestions.map((item, key) => (
          <Suggestion title={item} key={key} isActive={currentFocus === key} />
        ))}
      </div>
    </div>
  </form>
);

export default FormContainer;
