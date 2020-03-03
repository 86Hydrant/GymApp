import React, { useState } from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';

const GymList = props => {
  const [gymNames, setGymNames] = useState([
    'Stockholm City',
    'Farsta',
    'Haninge',
    'Hagastan'
  ]);

  return (
    <div id='listofGyms'>
      <ul className={classes.gymListStyling}>
        {gymNames.map((gymName, index) => (
          <GymCard key={gymName.index} gymName={gymName} />
        ))}
      </ul>
    </div>
  );
};

export default GymList;
