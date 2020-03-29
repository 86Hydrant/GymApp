import React from 'react';
import classes from './CalendarDatesButton.module.css';

const CalendarDatesButton = props => {
	return (
		<a
			aria-label={'March ' + props.date}
			className={classes.calendarButtonStyling}
			href='/Activities/'
		>
			{props.date}
		</a>
	);
};

export default CalendarDatesButton;
