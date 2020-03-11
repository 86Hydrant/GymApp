import React from 'react';
import Header from '../../components/Header/Header';
import LargeRoundedButton from '../../components/Buttons/LargeRoundedButton/LargeRoundedButton';
import ClearButton from '../../components/Buttons/ClearButton/ClearButton';
import Auxiliary from '../../hoc/Auxiliary';
import SelectedGymCard from '../../components/GymList/SelectedGymCard/SelectedGymCard';

const SelectedGym = props => {
  const selectedGymName = props.selectedGymName;

  return (
    <Auxiliary>
      <Header heading={'Selected Gyms'} />
      {selectedGymName
        ? selectedGymName.map((gymName, index) => (
            <SelectedGymCard key={index} gymName={gymName} />
          ))
        : null}
      <LargeRoundedButton name={'Add Another Gym'} to={'/'} />
      <ClearButton setSelectedGymName={props.setSelectedGymName} />
      <LargeRoundedButton name={'Continue'} to={'/calendar'} />
    </Auxiliary>
  );
};

export default SelectedGym;
