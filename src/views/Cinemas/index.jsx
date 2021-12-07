import React, { useState, useEffect } from 'react';

import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
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

	useEffect( () => {
		(async () => {
		})();
	}, []);

	const getCinemas = async () => {
		console.log(cinemas)
	}
	

	const getMovies = async () => {
		console.log(movies)
	}

	const getUpcoming = async () => {
		console.log(upcoming)
	}
	
	console.log(cinemas);

	return(


		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={() => getCinemas()}>
				<Text>Cinemas</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => getMovies()}>
				<Text>Movies</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => getUpcoming()}>
				<Text>Upcoming</Text>
			</TouchableHighlight>
			<CinemasList cinemas={cinemas} />

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
