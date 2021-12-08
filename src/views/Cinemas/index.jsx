import React, { useState, useEffect } from 'react';
import { View,  Text, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import Toolbar from '../../components/Toolbar';
import { getAllCinemas } from '../../actions/cinemaActions';
import { selectedCinema } from '../../actions/cinemaActions';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const token = useSelector(state => state.token);
	// console.log(token);
	const dispatch = useDispatch()

	useEffect( ()  => {
		(async () => {
			dispatch(getAllCinemas(token));

		})();
	}, []);

	const cinemas = useSelector(state => state.cinemas);
	// console.log(cinemas);	

	const onClick = ( cinema ) => {
		dispatch(selectedCinema(cinema))
		navigate("CinemaDetails");
	};

	return(


		<View style={{ flex: 1 }}>
			<Toolbar 
				getCinemas={() => getCinemas()}
				getMovies={() => getMovies()}
				getUpcoming={() => navigate('Upcoming')}
			/>
			<CinemasList cinemas={cinemas} onSelect={(item) => onClick(item)}  />
		</View>
			
	)
}

export default Cinemas;
