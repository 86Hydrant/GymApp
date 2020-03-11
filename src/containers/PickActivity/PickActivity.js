import React from "react";
import Header from "../../components/Header/Header";
import Auxiliary from "../../hoc/Auxiliary";
import ActivitiesCard from "../../components/Activities/ActivitiesCard/ActivitiesCard";
import classes from "../../components/Activites/ActivitiesCard/ActivitesCard.module.css";

const PickActivity = props => {
  return (
    <Auxiliary>
      <Header heading={"Activities"} />
      <h2 className={classes.dateActivityScreen}>TODAY:</h2>
      <ActivitiesCard />
    </Auxiliary>
  );
};

export default PickActivity;

{
  /*Fix h2 so it displays user picked date from calendar*/
}
