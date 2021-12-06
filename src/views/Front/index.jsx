import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
// import styles from './styles';
// import PropTypes from 'prop-types';
// import Toolbar from '../../components/toolbar';

const Front = function( { route, navigation: { navigate } } )  {
	useEffect( () => {
		(async () => {
			const requestBody = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					username: 'Morgaes',
					password: 'Morgaes1' })
			};
			fetch('https://api.kvikmyndir.is/authenticate/', requestBody)
				.then( (response) => response.json() )
				.then( (res) =>  setToken(res.token))
				.catch( (error) => console.log(error) )
		})();
	}, []);
	
	return(
		<View style={ { flex: 1 } }>
		<Text>Poop</Text>
		</View>
	);
}


export default Front;
