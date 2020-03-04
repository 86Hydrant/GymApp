import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = props => {
  return (
    <div className={classes.headerBackgroundStyling}>
      <h1 className={classes.headerH1Styling}>{props.heading}</h1>
      <img src={logo} alt='' width='42' className={classes.logo} />
    </div>
  );
};

export default Header;
