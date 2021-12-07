import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovieById } from '../../services/api';


const Movie = function ( {route,  navigation: { navigate } } ) {
	
    const movie = route.params.movie[0]
	const token = useSelector(state => state.token);

	//const token = route.params.token;

	useEffect( () => {
		(async () => {
		})();
	}, []);

	const test = async () => {
		//console.log(movie)
		console.log(movie.poster)
	}
	

	return(

		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={() => test()}>
				<Text>test</Text>
			</TouchableHighlight>
			<View>
				<Text>{movie.title}</Text>
			</View>
		</View>
			
	)
}

export default Movie;
