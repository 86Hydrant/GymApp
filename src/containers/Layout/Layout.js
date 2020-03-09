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
      <Link path='/' component={Header}></Link>;
      <Link path='/' component={GymList}></Link>;
    </main>
  );
};

export default Layout;
// <Auxiliary>
//   <div className={classes.phoneStyling}>
//     {selectedGymName ? null : <Header heading={headerState[0]} />}
//     <main className={classes.bodyStyling}>
//       <GymList
//         selectedGymName={selectedGymName}
//         setSelectedGymName={setSelectedGymName}
//         searchBarLabel={searchBarState}
//       />
//       {selectedGymName ? (
//         <Auxiliary>
//           <Header heading={headerState[1]} /> <h2>{selectedGymName}</h2>
//           <LargeRoundedButton name='Add Another Gym' />
//           <LargeRoundedButton name='Clear' />
//           <LargeRoundedButton name='Continue' />
//         </Auxiliary>
//       ) : null}
//     </main>
//   </div>
// </Auxiliary>
