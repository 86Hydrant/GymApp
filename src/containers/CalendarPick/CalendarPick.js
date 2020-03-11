import React from 'react';
import Header from '../../components/Header/Header';
import Auxiliary from '../../hoc/Auxiliary';
import Calendar from '../../components/Calendar/Calendar';

const CalendarPick = props => {
  return (
    <Auxiliary>
      <Header heading={'Calendar'} />
      <Calendar />
    </Auxiliary>
  );
};

export default CalendarPick;
