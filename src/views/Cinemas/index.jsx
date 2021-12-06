import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import * as API from '../../services/api-caller';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const [ cinemas, setCinemas ] = useState([])
	
	const token = route.params.token;

	useEffect( () => {
		(async () => {
			setCinemas(API.getCinemas(token));	
		})();
	}, []);
	
	

	return(

		<View style={{ flex: 1 }}>
			<Text> Smárabíó </Text>
		</View>
			
	)
}

export default Cinemas;
