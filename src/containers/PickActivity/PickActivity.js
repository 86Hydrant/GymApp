import React from "react";
import Header from "../../components/Header/Header";
import Auxiliary from "../../hoc/Auxiliary";
import ActivitiesCard from "../../components/Activities/ActivitiesCard/ActivitiesCard";
import classes from "../../components/Activities/ActivitiesCard/ActivitiesCard.module.css";
import { activitiesList } from "../../components/Activities/ActivitiesList";

const PickActivity = props => {
  return (
    <Auxiliary>
      <Header heading={"Activities"} />
      <h2 className={classes.dateActivityScreen}>TODAY:</h2>
      {activitiesList.map(activity => {
        return (
          <ActivitiesCard
            to={"/Activities/" + activity.id}
            time={activity.time}
            minutes={activity.minutes}
            activityName={activity.name}
            spotsLeft={activity.spotsLeft}
            gymName={activity.gymName}
          />
        );
      })}
    </Auxiliary>
  );
};

export default PickActivity;

{
  /*Fix h2 so it displays user picked date from calendar*/
}
