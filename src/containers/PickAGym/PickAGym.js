import React from 'react';
import Header from '../../components/Header/Header';
import Auxiliary from '../../hoc/Auxiliary';
import GymList from '../../components/GymList/GymList';

const SelectedGym = props => {
  return (
    <Auxiliary>
      <Header heading={'Pick A Gym'} />
      <GymList
        setSelectedGymName={props.setSelectedGymName}
        selectedGymName={props.selectedGymName}
      />
    </Auxiliary>
  );
};

export default SelectedGym;
