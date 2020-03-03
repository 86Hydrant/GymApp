import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  return (
    <div>
      <label htmlFor='Search Bar for Gym'>Search for a gym:</label>
      <input
        className={classes.inputBarStyle}
        id='Search Bar for Gym'
        type='text'
      />
    </div>
  );
};

export default SearchBar;
