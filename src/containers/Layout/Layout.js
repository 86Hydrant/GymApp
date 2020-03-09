import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import GymList from '../../components/GymList/GymList';

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

  const [selectedGymName, setSelectedGymName] = useState(null);

  return (
    <main>
      <Route
        path='/'
        render={props => <Header {...props} heading={headerState[0]} />}
      ></Route>
      <Route
        path='/'
        render={props => (
          <GymList
            {...props}
            setSelectedGymName={setSelectedGymName}
            selectedGymName={selectedGymName}
          />
        )}
      ></Route>
    </main>
  );
};

export default Layout;
