import React from 'react';
import classes from './Header.module.css';

const Header = props => {
  return (
    <div className={classes.headerBackgroundStyling}>
      <h1 className={classes.headerH1Styling}>Heading:{props.heading}</h1>
    </div>
  );
};

export default Header;
