import React from 'react';
import Header from '../../components/Header/Header';
import LargeRoundedButton from '../../components/Buttons/LargeRoundedButton/LargeRoundedButton';
import Auxiliary from '../../hoc/Auxiliary';

const SelectedGym = props => {
  return (
    <Auxiliary>
      <Header heading={'Selected Gyms'} />
      <LargeRoundedButton name={'Add Another Gym'} to={''} />
      <LargeRoundedButton name={'Clear'} to={''} />
      <LargeRoundedButton name={'Continue'} to={''} />
    </Auxiliary>
  );
};

export default SelectedGym;
