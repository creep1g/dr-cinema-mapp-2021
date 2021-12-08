import React, { useState, useEffect } from 'react';
import { View,  Text, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import Toolbar from '../../components/Toolbar';
import { getAllCinemas } from '../../actions/cinemaActions';
import { getUpcoming } from '../../actions/moviesActions';
import { holdCinema } from '../../actions/cinemaDetailsActions';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const token = useSelector(state => state.token);
	// console.log(token);
	const dispatch = useDispatch()

	useEffect( ()  => {
		(async () => {
			dispatch(getAllCinemas(token));
			dispatch(getUpcoming(token))

		})();
	}, []);

	const upcoming = useSelector(state => state.upcoming);
	console.log(upcoming);
	const cinemas = useSelector(state => state.cinemas);
	// console.log(cinemas);	

	const onClick = ( cinema ) => {
		navigate("CinemaDetails", { cinema: cinema });
	};

	return(


		<View style={{ flex: 1 }}>
			<Toolbar 
				getCinemas={() => getCinemas()}
				getMovies={() => getMovies()}
				getUpcoming={() => navigate('Upcoming')}
			/>
			<CinemasList cinemas={cinemas} onSelect={(id) => onClick(id)}  />
		</View>
			
	)
}

export default Cinemas;
