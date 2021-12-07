import React, { useState, useEffect } from 'react';

import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import Toolbar from '../../components/Toolbar';
import { holdCinema } from '../../actions/cinemaDetailsActions';
import styles from './styles';
import * as API from '../../services/api';
import body from '../../styles/body';
import * as colors from '../../styles/colors';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const cinemas = useSelector(state => state.cinemas);
	const movies = useSelector(state => state.movies);
	const upcoming = useSelector(state => state.upcoming);
	const dispatch = useDispatch()
	//const token = route.params.token;

	const onClick = async ( cinema ) => {
		dispatch(holdCinema(cinema));
		navigate("CinemaDetails");
	}

	const getCinemas = async () => {
		console.log(cinemas)
	}
	

	const getMovies = async () => {
		console.log(movies)
	}

	const getUpcoming = async () => {
		console.log(upcoming)
	}
	
	// console.log(cinemas);

	return(


		<View style={{ flex: 1 }}>
			<Toolbar 
				getCinemas={() => getCinemas()}
				getMovies={() => getMovies()}
				getUpcoming={() => getMovies()}
			/>
			<CinemasList cinemas={cinemas} onSelect={(id) => navigate("CinemaDetails", { cinema: id })}  />
		</View>
			
	)
}

export default Cinemas;
