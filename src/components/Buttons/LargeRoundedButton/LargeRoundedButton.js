import React from "react";
import { Link } from "react-router-dom";
import classes from "./LargeRoundedButton.module.css";

const LargeRoundedButton = props => {
  return (
    <Link
      className={classes.largeButtonStyling}
      aria-label={props.ariaLabel}
      to={props.to}
      exact
    >
      {props.name}
    </Link>
  );
};

export default LargeRoundedButton;
