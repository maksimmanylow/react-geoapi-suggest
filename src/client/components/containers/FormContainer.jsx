import React from 'react';
import Suggestion from '../Suggestion';
import Input from '../Input';

const FormContainer = ({
  handleInputChange = f => f,
  handleKeyDown = f => f,
  handleClick = f => f,
  suggestions,
  currentFocus,
  query
}) => (
  <form onSubmit={e => e.preventDefault()}>
    <div className="autocomplete">
      <Input type="text" onChange={handleInputChange} onKeyDown={handleKeyDown} value={query} />
      <div className="autocomplete-items">
        {suggestions.map((item, key) => (
          <Suggestion
            title={item}
            key={key}
            isActive={currentFocus === key}
            onClick={() => handleClick(key)}
          />
        ))}
      </div>
    </div>
  </form>
);

export default FormContainer;
