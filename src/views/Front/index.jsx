import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
// import PropTypes from 'prop-types';
// import Toolbar from '../../components/toolbar';

const Front = function( { navigation: {navigate} } )  {

	const [token, setToken] = useState();

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
		<View style={ styles.screen }>
			<TouchableHighlight 
				style={[styles.buttonCard, styles.shadow]}
				activeOpacity={ 0.6 }
				underlayColor={ 'teal' }
				onPress={() => navigate("Cinemas", { token: token })}
			>
				<Text style={styles.text}>Cinemas</Text>
			</TouchableHighlight>
		</View>
	);
}


export default Front;
