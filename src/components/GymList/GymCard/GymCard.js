import React from 'react';
import classes from './GymCard.module.css';
import { Link } from 'react-router-dom';

const GymCard = props => {
  const gymName = props.gymName;
  return (
    <Link
      className={classes.gymNameStyling}
      href='/'
      onClick={() => {
        props.setSelectedGymName(gymName);
        props.toggleGymState();
      }}
    >
      <h3>{props.gymName}</h3>
    </Link>
  );
};

export default GymCard;
