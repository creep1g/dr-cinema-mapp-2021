import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const [ cinemas, setCinemas ] = useState([])
	
	// Get list of cinemas, 
	// Display them
	// Eat salad

	const token = route.params;
	console.log(token)
	

	return(

		<View style={{ flex: 1 }}>
			<Text> Smárabíó </Text>
		</View>
			
	)
}

export default Cinemas;
