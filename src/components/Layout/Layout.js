import React, { useState } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import GymList from '../GymList/GymList';
import Calendar from '../Calendar/Calendar';

const Layout = props => {
  const [headerState, setHeaderState] = useState([
    'Pick a Gym',
    'Selected Gyms',
    'Calendar',
    'Activities',
    'Picked Card'
  ]);

  const [searchBarState, setSearchBarState] = useState([
    'Search for a Gym',
    'Search for a Date'
  ]);

  const [selectedGymName, setSelectedGymName] = useState(['']);

  return (
    <Auxiliary>
      <div className={classes.phoneStyling}>
        <Header heading={headerState} setHeading={setHeaderState} />
        <main className={classes.bodyStyling}>
          <SearchBar searchBarLabel={searchBarState[0]} />
          <GymList
            selectedGymName={selectedGymName}
            setSelectedGymName={setSelectedGymName}
          />
        </main>
      </div>
    </Auxiliary>
  );
};

export default Layout;
