import React from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import GymList from '../GymList/GymList';
import Calendar from '../Calendar/Calendar';

const Layout = props => (
  <Auxiliary>
    <div className={classes.phoneStyling}>
      <Header heading='Calendar' />
      <main className={classes.bodyStyling}>
        <Calendar />
      </main>
    </div>
  </Auxiliary>
);

export default Layout;
