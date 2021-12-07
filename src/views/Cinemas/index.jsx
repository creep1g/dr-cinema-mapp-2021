import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import styles from './styles';
import * as API from '../../services/api';


const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const cinemas = useSelector(state => state.cinemas);
	const movies = useSelector(state => state.movies);
	const token = useSelector(state => state.token);
	const upcoming = useSelector(state => state.upcoming);
	const dispatch = useDispatch()
	//const token = route.params.token;

	useEffect( () => {
		(async () => {

		})();
	}, []);

	const getCinemas = async () => {
		console.log(cinemas)
	}
	
	const getMovies = async () => {
		console.log(movies)
	}

	const getUpcoming = async () => {
		console.log(upcoming)
	}
	

	return(

		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={() => getCinemas()}>
				<Text>Cinemas</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => getMovies()}>
				<Text>Movies</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => getUpcoming()}>
				<Text>Upcoming</Text>
			</TouchableHighlight>
			<CinemasList cinemas={cinemas} />
		</View>
			
	)
}

export default Cinemas;
