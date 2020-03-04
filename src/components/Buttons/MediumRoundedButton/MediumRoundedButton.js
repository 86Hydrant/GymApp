import React from 'react';
import classes from './MediumRoundedButton.module.css';

const MediumRoundedButton = props => {
  return (
    <a className={classes.mediumButtonStyling} href='#'>
      {props.day}
    </a>
  );
};

export default MediumRoundedButton;
