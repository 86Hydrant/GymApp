import React from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import GymList from '../GymList/GymList';

const Layout = props => (
  <Auxiliary>
    <div className={classes.phoneStyling}>
      <Header />
      <main className={classes.bodyStyling}>
        <SearchBar />
        <GymList />
      </main>
    </div>
  </Auxiliary>
);

export default Layout;
