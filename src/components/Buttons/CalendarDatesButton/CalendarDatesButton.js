import React from 'react';
import classes from './CalendarDatesButton.module.css';

const CalendarDatesButton = props => {
  return (
    <a className={classes.calendarButtonStyling} href='#'>
      {props.date}
    </a>
  );
};

export default CalendarDatesButton;
