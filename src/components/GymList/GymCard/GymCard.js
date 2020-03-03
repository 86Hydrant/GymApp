import React from 'react';
import classes from './GymCard.module.css';

const GymCard = props => {
  return (
    <a className={classes.gymNameStyling} href=''>
      <h3>{props.gymName}</h3>
    </a>
  );
};

export default GymCard;
