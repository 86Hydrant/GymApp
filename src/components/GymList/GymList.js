import React, { useState } from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';

const GymList = props => {
  const [gymNames] = useState([
    'Stockholm City',
    'Farsta',
    'Haninge',
    'Hagastan'
  ]);
  const [removeGymCards, setRemoveGymCards] = useState(false);

  const toggleGymState = () => {
    setRemoveGymCards(!removeGymCards);
  };

  return removeGymCards ? null : (
    <div id='listofGyms'>
      <ul className={classes.gymListStyling}>
        {gymNames.map((gymName, index) => (
          <GymCard key={index} gymName={gymName} onClick={toggleGymState} />
        ))}
      </ul>
    </div>
  );
};

export default GymList;
