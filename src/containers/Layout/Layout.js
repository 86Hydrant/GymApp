import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import CalendarPick from "../CalendarPick/CalendarPick";
import SelectedGym from "../SelectedGym/SelectedGym";
import PickAGym from "../PickAGym/PickAGym";
import PickActivity from "../PickActivity/PickActivity";
import classes from "./Layout.module.css";
import ActivityInfoCard from "../../components/ActivityInfoCard/ActivityInfoCard";

const Layout = props => {
  const [selectedGymName, setSelectedGymName] = useState(null);

  return (
    <main className={classes.bodyStyling}>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <PickAGym
              setSelectedGymName={setSelectedGymName}
              selectedGymName={selectedGymName}
            />
          )}
        />
        <Route
          path="/selectedGym"
          exact
          render={() => <SelectedGym selectedGymName={selectedGymName} />}
        />
        <Route path="/calendar" exact component={CalendarPick} />
        <Route path="/Activities/" exact component={PickActivity} />
        <Route path="/Activities/:id" component={ActivityInfoCard} />
      </Switch>
    </main>
  );
};

export default Layout;

//   'Pick a Gym', done
//   'Selected Gyms', done
//   'Calendar', done
//   'Activities',
//   'Picked Card'
