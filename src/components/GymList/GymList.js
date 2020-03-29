import React, { useState } from 'react';
import GymCard from './GymCard/GymCard';
import classes from './GymList.module.css';
import SearchBar from '../SearchBar/SearchBar';

const GymList = props => {
	const [gymNames] = useState([
		'Stockholm City',
		'Farsta',
		'Haninge',
		'Hagastan',
		'Nacka',
		'Hökerängen',
		'Blåsut'
	]);

	return (
		<div id='listofGyms'>
			<SearchBar searchBarLabel='Search for a Gym' />
			<ul className={classes.gymListStyling}>
				{gymNames.map((gymName, index) => (
					<GymCard
						key={index}
						gymName={gymName}
						setSelectedGymName={props.setSelectedGymName}
						selectedGymName={props.selectedGymName}
					/>
				))}
			</ul>
		</div>
	);
};

export default GymList;
