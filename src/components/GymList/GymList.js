import React, { useState } from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';
import SearchBar from '../SearchBar/SearchBar';

const GymList = props => {
  const [gymNames] = useState([
    'Abrahamsberg ',
    'Farsta',
    'Gärdet',
    'Hagastan',
    'Haninge',
    'Hornstull',
    'Kista',
    'Kungsholmen',
    'Lindhagen',
    'Orminge',
    'Ringen',
    'Sickla',
    'Skanstull',
    'Skrapan',
    'Solna',
    'Sundberg'
  ]);

  return (
    <div id='listofGyms'>
      <SearchBar searchBarLabel={props.searchBarLabel} />
      <ul className={classes.gymListStyling}>
        {gymNames.map((gymName, index) => (
          <GymCard
            key={index}
            gymName={gymName}
            setSelectedGymName={props.setSelectedGymName}
            selectedGymName={props.selectedGymName}
          />
        ))}
      </ul>
    </div>
  );
};

export default GymList;
