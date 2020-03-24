import React from 'react';
import classes from '../Activities.module.css';
import { Link } from 'react-router-dom';

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
