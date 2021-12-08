import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector} from 'react-redux';
import styles from './styles';


const Movie = function ( {route,  navigation: { navigate } } ) {
	
    const movie = route.params.movie
	const token = useSelector(state => state.token);
	const movies = useSelector(state => state.movies)

	//const token = route.params.token;

	useEffect( () => {
		(async () => {
		})();
	}, []);

	const test = async () => {
		for (var i = 0; i < movies.length; i++) {
			console.log(movies[i].title)
		}
		console.log(JSON.stringify(movies))
	}

	const getGenres = () => movie.genres.map((genre) => genre.Name)
	

	return(

		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={() => test()}>
				<Text>test</Text>
			</TouchableHighlight>
			<View>
				<Text>{movie.title}</Text>
				<View style={styles.shadow}>
							{
								movie.omdb.length !== 0
								?
								// If omdb is populated use it
								<Image 
									style={styles.image}
									source={{uri: movie.omdb[0].Poster }} 
								/>
								:
								// Else use poster
								<Image
									style={[ styles.image, ]}
									source={{uri: movie.poster}}
								/>
							}
				</View>
				<Text> {movie.plot} </Text>
				<Text>Duration: {movie.durationMinutes} minutes</Text>
				<Text>Released: {movie.year}</Text>
				<FlatList
					numColumns={4}
					data={ movie.genres }
					renderItem={({ item }) => (
						<View style={ { marginTop: 15, alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row' } }>
							<Text style={styles.subtext}>{ item["NameEN	"] }</Text>
						</View>
					)}
					keyExtractor={genre => genre.id}
				/>
			</View>
		</View>
			
	)
}

export default Movie;
