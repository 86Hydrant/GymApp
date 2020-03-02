import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  return (
    <input
      className={classes.inputBarStyle}
      id='Search Bar for Gym'
      type='text'
      placeholder='SEARCH'
    />
  );
};

export default SearchBar;
