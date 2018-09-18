import React from 'react';
import StyledSearchAddressForm from './StyledSearchAddressForm';

const SearchAddressForm = ({ handleInputChange = f => f }) => {
  let _query;

  return (
    <StyledSearchAddressForm>
      <form onSubmit={e => e.preventDefault()}>
        <div className="autocomplete">
          <input
            type="text"
            ref={input => (_query = input)}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </StyledSearchAddressForm>
  );
};
