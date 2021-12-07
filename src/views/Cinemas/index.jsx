import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { getAllCinemas } from '../../actions/cinemaActions';
import * as API from '../../services/api-caller';


const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	//const [ cinemas, setCinemas ] = useState([])
	const [ movies, setMovies ] = useState([]);
	const cinemas = useSelector(state => state.cinemas)
	const dispatch = useDispatch()
	const token = route.params.token;

	useEffect( () => {
		(async () => {
			/*
			setCinemas(API.getCinemas(token));
			setMovies(API.getMovies(token));
			console.log(movies);
			*/
			dispatch(getAllCinemas(token))
		})();
	}, []);

	const test = () => {
		console.log(cinemas);
	}
	
	

	return(

		<View style={{ flex: 1 }}>
			<Text> Smárabíó </Text>
			<TouchableHighlight onPress={() => test()}>
				<Text>Test button</Text>
			</TouchableHighlight>
		</View>
			
	)
}

export default Cinemas;
