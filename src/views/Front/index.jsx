import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {addToken} from '../../actions/tokenActions';
import { getAllCinemas } from '../../actions/cinemaActions';
import { getAllMovies, getUpcoming } from '../../actions/moviesActions';
// import PropTypes from 'prop-types';
// import Toolbar from '../../components/toolbar';

const Front = function( { navigation: {navigate} } )  {

	const token = useSelector(state => state.token)
	const dispatch = useDispatch()
	
	useEffect( () => {
		(async () => {
			const requestBody = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					username: 'Morgaes',
					password: 'Morgaes1' })
			};
			await fetch('https://api.kvikmyndir.is/authenticate/', requestBody)
				.then( (response) => response.json() )
				.then( (res) =>  dispatch(addToken(res.token)))
				.catch( (error) => console.log(error) )
			dispatch(getAllCinemas(token))
			dispatch(getAllMovies(token))
			dispatch(getUpcoming(token))
		})();
	}, []);


	return(
		<View style={ styles.screen }>
			<TouchableHighlight 
				style={[styles.buttonCard, styles.shadow]}
				activeOpacity={ 0.6 }
				underlayColor={ 'teal' }
				onPress={() => navigate("Cinemas", { token: token })}
			>
				<Text style={styles.text}>Cinemas</Text>
			</TouchableHighlight>
			<TouchableHighlight 
				style={[styles.buttonCard, styles.shadow]}
				activeOpacity={ 0.6 }
				underlayColor={ 'teal' }
				onPress={() => navigate("Movies", { token: token })}
			>
				<Text style={styles.text}>Movies</Text>
			</TouchableHighlight>
		</View>
	);
}


export default Front;
