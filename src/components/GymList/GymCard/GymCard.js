import React from 'react';
import classes from './GymCard.module.css';

const GymCard = props => {
  const gymName = props.gymName;
  return (
    <a
      className={classes.gymNameStyling}
      href='#'
      onClick={() => {
        props.setSelectedGymName(gymName);
        props.toggleGymState();
      }}
    >
      <h3>{props.gymName}</h3>
    </a>
  );
};

export default GymCard;
