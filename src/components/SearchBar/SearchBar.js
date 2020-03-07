import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  return (
    <div className={classes.searchBarContainer}>
      <label htmlFor='SearchBar'>{props.searchBarLabel}</label>
      <input className={classes.inputBarStyle} id='SearchBar' type='text' />
    </div>
  );
};

export default SearchBar;
