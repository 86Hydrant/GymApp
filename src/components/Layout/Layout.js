<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 816478b1064c2d83c0c1d89550bf6c6dfd03de96
=======
import React, { useState } from 'react';
>>>>>>> 09beac298f44e5a0643cc30a93b41945f34a0560
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import GymList from '../GymList/GymList';
import Calendar from '../Calendar/Calendar';
import ActivitiesCard from "../Activities/ActivitiesCard/ActivitiesCard";

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
             {/*   <h2 className={classes.dateActivityScreen}>TODAY:</h2>
        <ActivitiesCard
          time="17:30"
          minutes="55"
          activityName="Cirkelfys"
          gymName="F&S City"
          spotsLeft="4"
        />
        <ActivitiesCard
          time="18:00"
          minutes="45"
          activityName="Yoga Energy"
          gymName="F&S Farsta"
          spotsLeft="10"
        />
        <ActivitiesCard
          time="14:30"
          minutes="55"
          activityName="Power Hour"
          gymName="F&S City"
          spotsLeft="6"
        />*/}
        </main>
      </div>
    </Auxiliary>
  );
};

export default Layout;
