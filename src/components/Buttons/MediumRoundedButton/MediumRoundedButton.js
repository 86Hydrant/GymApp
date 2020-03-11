import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MediumRoundedButton.module.css';

const MediumRoundedButton = props => {
  return (
    <Link
      className={classes.mediumButtonStyling}
      aria-label={props.ariaLabel}
      to={props.to}
    >
      {props.day}
    </Link>
  );
};

export default MediumRoundedButton;
