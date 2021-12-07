import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {addToken} from '../../actions/tokenActions';
import { getAllCinemas } from '../../actions/cinemaActions';
import { getAllMovies, getUpcoming } from '../../actions/moviesActions';
import * as API from '../../services/api-caller';
// import PropTypes from 'prop-types';
// import Toolbar from '../../components/toolbar';

const Front = function( { navigation: {navigate} } )  {

	const token = useSelector(state => state.token)
	const dispatch = useDispatch()
	
	useEffect( () => {
		(async () => {
			await API.auth().then((res) => dispatch(addToken(res)))
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
				onPress={() => navigate("Cinemas")}
			>
				<Text style={styles.text}>Cinemas</Text>
			</TouchableHighlight>
			<TouchableHighlight 
				style={[styles.buttonCard, styles.shadow]}
				activeOpacity={ 0.6 }
				underlayColor={ 'teal' }
				onPress={() => navigate("Movies",{ token: token })}
			>
				<Text style={styles.text}>Movies</Text>
			</TouchableHighlight>
		</View>
	);
}


export default Front;
