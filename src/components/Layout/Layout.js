import React from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header/Header';

const Layout = props => (
  <Auxiliary>
    <div className={classes.phoneStyling}>
      <Header />
      <main className={classes.bodyStyling}>
        This is where the body will be placed
      </main>
    </div>
  </Auxiliary>
);

export default Layout;
