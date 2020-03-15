import React from "react";
import classes from "../Activities/ActivitiesCard/ActivitiesCard.module.css";
import MediumRoundedButton from "../Buttons/MediumRoundedButton/MediumRoundedButton";

const ActivityInfoCard = props => {
  return (
    <div>
      <div className={classes.infoContainer}>
        <p className={classes.activityInfo}>
          {props.time} Time {props.minutes} Min
        </p>
        <h2 className={classes.activityHeading}>{props.activityName}</h2>
        <p className={classes.activityInfo}>{props.spotsLeft} Spots Left</p>
        <p className={classes.activityInfo}>{props.gymName}</p>
      </div>
      <h2>Info:</h2>
      <p>
        Lorem Ipsum Dolor Sit Amet Banh mi vegan lumbersexual brooklyn freegan
        drinking vinegar ramps mustache pork belly art party tbh humblebrag
        venmo iceland mlkshk. Bespoke wolf dreamcatcher, literally marfa vape
        synth coloring book chartreuse taxidermy offal everyday carry
        chicharrones mixtape freegan. Fashion axe church-key mustache literally
        coloring book leggings. Deep v artisan chillwave coloring book la croix
        blue bottle chartreuse gastropub af edison bulb taiyaki. Franzen
        scenester 3 wolf moon retro listicle pop-up bicycle rights live-edge
        chicharrones quinoa.
      </p>
      <MediumRoundedButton aria-label="Book Activity" to="#">
        BOOK
      </MediumRoundedButton>
    </div>
  );
};

export default ActivityInfoCard;
