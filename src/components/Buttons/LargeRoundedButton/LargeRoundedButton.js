import React from 'react';
import classes from './LargeRoundedButton.module.css';

const MediumRoundedButton = props => {
  return (
    <a
      className={classes.largeButtonStyling}
      aria-label={props.ariaLabel}
      href='#'
    >
      {props.name}
    </a>
  );
};

export default MediumRoundedButton;
