import React from 'react';
import classes from './GymCard.module.css';
import { Link } from 'react-router-dom';

const GymCard = props => {
  const previousGymName = props.selectedGymName;
  const gymName = props.gymName;

  return (
    <Link
      className={classes.gymNameStyling}
      to='/selectedGym'
      onClick={() => {
        props.setSelectedGymName([previousGymName, gymName]);
      }}
    >
      <h3>{props.gymName}</h3>
    </Link>
  );
};

export default GymCard;
