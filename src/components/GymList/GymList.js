import React, { useState } from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';
import SearchBar from '../SearchBar/SearchBar';

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
      <SearchBar searchBarLabel={props.searchBarLabel} />
      <ul className={classes.gymListStyling}>
        {gymNames.map((gymName, index) => (
          <GymCard
            key={index}
            gymName={gymName}
            toggleGymState={toggleGymState}
            setSelectedGymName={props.setSelectedGymName}
            selectedGymName={props.selectedGymName}
          />
        ))}
      </ul>
    </div>
  );
};

export default GymList;
