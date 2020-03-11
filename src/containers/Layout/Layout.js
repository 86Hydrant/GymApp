import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar';
import SelectedGym from '../SelectedGym/SelectedGym';
import PickAGym from '../PickAGym/PickAGym';
import classes from './Layout.module.css';

const Layout = props => {
  const [selectedGymName, setSelectedGymName] = useState(null);

  return (
    <main className={classes.bodyStyling}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <PickAGym
              setSelectedGymName={setSelectedGymName}
              selectedGymName={selectedGymName}
            />
          )}
        />
        <Route path='/selectedGym' exact component={SelectedGym} />
        <Route path='/calendar' exact component={Calendar} />
        {/* <Route path='/activities' exact component={Activities} /> */}
      </Switch>
    </main>
  );
};

export default Layout;

//   'Pick a Gym',
//   'Selected Gyms',
//   'Calendar',
//   'Activities',
//   'Picked Card'
