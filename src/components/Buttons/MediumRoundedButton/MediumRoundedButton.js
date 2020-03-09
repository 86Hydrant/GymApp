import React from 'react';
import classes from './MediumRoundedButton.module.css';

const MediumRoundedButton = props => {
  return (
    <a
      className={classes.mediumButtonStyling}
      aria-label={props.ariaLabel}
      href='/'
    >
      {props.day}
    </a>
  );
};

export default MediumRoundedButton;
