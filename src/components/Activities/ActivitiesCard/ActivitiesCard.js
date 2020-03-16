import React from "react";
import classes from "../Activities.module.css";
import { Link } from "react-router-dom";

const ActivitiesCard = props => {
  return (
    <div>
      <Link
        className={classes.infoContainer}
        aria-label={props.activityName}
        to={props.to}
        exact
      >
        <p className={classes.activityInfo}>
          {props.time} Time {props.minutes} Min
        </p>
        <h2 className={classes.activityHeading}>{props.activityName}</h2>
        <p className={classes.activityInfo}>{props.spotsLeft} Spots Left</p>
        <p className={classes.activityInfo}>{props.gymName}</p>
      </Link>
    </div>
  );
};

export default ActivitiesCard;

{
  /* What's needed:
-Onclick function to connect to calendar when its ready
-fixes in margins and padding
-rewriting CSS so its mobile first and responsive
-fix "TODAY:" heading. Has to be changeable depending on user input, but we
should probably leave it hardcoded for now.


*/
}

{
  /*   <h2 className={classes.dateActivityScreen}>TODAY:</h2>
        <ActivitiesCard
          time="17:30"
          minutes="55"
          activityName="Cirkelfys"
          gymName="F&S City"
          spotsLeft="4"
        />
        <ActivitiesCard
          time="18:00"
          minutes="45"
          activityName="Yoga Energy"
          gymName="F&S Farsta"
          spotsLeft="10"
        />
        <ActivitiesCard
          time="14:30"
          minutes="55"
          activityName="Power Hour"
          gymName="F&S City"
          spotsLeft="6"
        />*/
}
