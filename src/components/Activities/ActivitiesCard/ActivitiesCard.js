import React from "react";
import classes from "../Activities.module.css";

const ActivitiesCard = props => {
  return (
    <div>
      <a className={classes.infoContainer} href="#">
        <p className={classes.activityInfo}>
          {props.time} Time {props.minutes} Min
        </p>
        <h2 className={classes.activityHeading}>{props.activityName}</h2>
        <p className={classes.activityInfo}>{props.spotsLeft} Spots Left</p>
        <p className={classes.activityInfo}>{props.gymName}</p>
      </a>
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
