import React from 'react';
import classes from './Calendar.module.css';
import MediumRoundedButton from '../Buttons/MediumRoundedButton/MediumRoundedButton';
import SearchBar from '../SearchBar/SearchBar';
import CalendarDatesButton from '../Buttons/CalendarDatesButton/CalendarDatesButton';

const Calendar = () => {
  const datesArray = [];

  for (let date = 1; date < 32; date++) {
    datesArray.push(date);
  }

  return (
    <div className={classes.calendarContainer}>
      <div className={classes.linkContainer}>
        <MediumRoundedButton day='TODAY' />
        <MediumRoundedButton day='TOMORROW' />
      </div>
      <SearchBar className={classes.searchDateBar} label='SEARCH FOR A DATE' />
      <p aria-hidden='true' className={classes.mo}>
        M
      </p>
      <p aria-hidden='true' className={classes.tu}>
        T
      </p>
      <p aria-hidden='true' className={classes.we}>
        W
      </p>
      <p aria-hidden='true' className={classes.th}>
        T
      </p>
      <p aria-hidden='true' className={classes.fr}>
        F
      </p>
      <p aria-hidden='true' className={classes.sa}>
        S
      </p>
      <p aria-hidden='true' className={classes.su}>
        S
      </p>
      <h3 aria-hidden='true' className={classes.month}>
        MARCH
      </h3>
      {datesArray.map(date => {
        return (
          <CalendarDatesButton
            className={classes.calendarDates}
            key={date}
            date={date}
            aria-label={'march'}
            aria-required='true'
          />
        );
      })}
    </div>
  );
};

export default Calendar;
