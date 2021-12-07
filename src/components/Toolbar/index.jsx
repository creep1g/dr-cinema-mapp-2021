import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = function ( { getMovies, getUpcoming  } ) {

	return(
		<View style={ styles.bar }>
			<View style={ styles.buttonArray }> 
				
				<TouchableHighlight 
					underlayColor={ "white" }
					style={ [styles.button, styles.shadow]}
					onPress={() => getMovies()}>
					
					<Text>In Cinemas Now</Text>

				</TouchableHighlight>

				<TouchableHighlight
					activeOpacity={ 0.9 }
					underlayColor={ "white" }
					style={ [styles.button, styles.shadow] } 
					onPress={() => getUpcoming()}>

					<Text>Upcoming</Text>

				</TouchableHighlight>

			</View>
		</View>
	)
}

export default Toolbar;
