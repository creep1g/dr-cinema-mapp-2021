import React, { useState, useEffect } from 'react';

import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import * as API from '../../services/api';
import body from '../../styles/body';
import * as colors from '../../styles/colors';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const cinemas = useSelector(state => state.cinemas);
	const movies = useSelector(state => state.movies);
	const token = useSelector(state => state.token);
	const upcoming = useSelector(state => state.upcoming);
	const dispatch = useDispatch()
	//const token = route.params.token;


	const sort = (arr) => {
		const sortedArr = arr.sort((first, second) => {
			return first.name.toUpperCase() > second.name.toUpperCase() ? 1 : -1;
		});

		return sortedArr;
	};

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
			<CinemasList cinemas={cinemas} />

		</View>
			
	)
}

export default Cinemas;
