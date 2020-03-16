import React from 'react';

import classes from './ClearButton.module.css';

const ClearButton = props => {
  const clearGymName = [];

  return (
    <button
      className={classes.clearButtonStyling}
      aria-label={props.ariaLabel}
      onClick={() => props.setSelectedGymName(clearGymName)}
    >
      Clear
    </button>
  );
};

export default ClearButton;
