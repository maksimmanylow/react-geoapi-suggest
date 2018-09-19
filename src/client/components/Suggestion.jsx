import React from 'react';

const Suggestion = ({ title, isActive }) => (
  <div className={isActive ? 'autocomplete-active' : ''}>{title}</div>
);

export default Suggestion;
