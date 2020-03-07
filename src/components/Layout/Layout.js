import React, { useState } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import GymList from '../GymList/GymList';
import Calendar from '../Calendar/Calendar';
import ActivitiesCard from '../Activities/ActivitiesCard/ActivitiesCard';
import LargeRoundedButton from '../Buttons/LargeRoundedButton/LargeRoundedButton';

const Layout = props => {
  const [headerState, setHeaderState] = useState([
    'Pick a Gym',
    'Selected Gyms'
    // 'Calendar',
    // 'Activities',
    // 'Picked Card'
  ]);

  const [searchBarState, setSearchBarState] = useState([
    'Search for a Gym',
    'Search for a Date'
  ]);

  const [selectedGymName, setSelectedGymName] = useState(null);

  return (
    <Auxiliary>
      <div className={classes.phoneStyling}>
        {selectedGymName ? null : <Header heading={headerState[0]} />}
        <main className={classes.bodyStyling}>
          <GymList
            selectedGymName={selectedGymName}
            setSelectedGymName={setSelectedGymName}
            searchBarLabel={searchBarState}
          />
          {selectedGymName ? (
            <Auxiliary>
              <Header heading={headerState[1]} /> <h2>{selectedGymName}</h2>
              <LargeRoundedButton name='Add Another Gym' />
              <LargeRoundedButton name='Clear' />
              <LargeRoundedButton name='Continue' />
            </Auxiliary>
          ) : null}
        </main>
      </div>
    </Auxiliary>
  );
};

export default Layout;
