import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';
import * as API from '../../services/api-caller';

const Cinemas = function ( {route,  navigation: { navigate } } ) {
	
	const [ cinemas, setCinemas ] = useState()
	const colors = colors; 
	
	const token = route.params.token;

	const sort = (arr) => {
		const sortedArr = arr.sort((first, second) => {
			return first.name.toUpperCase() > second.name.toUpperCase() ? 1 : -1;
		});

		return sortedArr;
	};

	useEffect( () => {
		(async () => {
			API.getCinemas(token).then((cinemas) => {
				arr = sort(cinemas);
				setCinemas(arr)
			}	);
		})();
	}, []);
	

	
	console.log(cinemas);

	return(

		<View style={[ {flex:1}, body.body ]}>
			<FlatList
				numColumns={1}
				data={cinemas}
				renderItem={({ item }) => (
					<TouchableHighlight 
						activeOpacity={1}
						underlayColor={ '#ff784f' }
						onPress={() => navigate("Cinema", { id: item.id })}
						style={[styles.card, styles.shadow]}
					>
						<View style={{ flex: 1 }}>
							<Text style={ styles.text }>{ item.name }</Text>
							<Text style={ styles.subtext }>{ item["address	"] }</Text>
							<Text style={ styles.subtext }> { item.city} </Text>
						</View>
					</TouchableHighlight>
				)}
			/>

		</View>
			
	)
}

export default Cinemas;
