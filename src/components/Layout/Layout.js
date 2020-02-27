import React from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';

const Layout = props => (
  <Auxiliary>
    <div>Header goes here</div>
    <main>This is where the body will be placed</main>
  </Auxiliary>
);

export default Layout;
