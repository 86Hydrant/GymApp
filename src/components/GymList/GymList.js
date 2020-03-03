import React from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';

const GymList = props => {
  return (
    <div id='list of Gyms' className={classes.gymListStyling}>
      <GymCard />
      <GymCard />
      <GymCard />
      <GymCard />
    </div>
  );
};

export default GymList;
