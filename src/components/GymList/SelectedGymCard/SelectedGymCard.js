import React from 'react';
import classes from './SelectedGymCard.module.css';

const SelectedGymCard = props => {
  return (
    <h3 className={classes.gymNameStyling}>
      <h3>{props.gymName}</h3>
    </h3>
  );
};

export default SelectedGymCard;
