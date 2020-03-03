import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  return (
    <div>
      <label htmlFor='Searchbar for Gym'>Search for a gym:</label>
      <input className={classes.inputBarStyle} id='SearchBarGym' type='text' />
    </div>
  );
};

export default SearchBar;
