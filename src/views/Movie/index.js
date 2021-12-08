import React, { useEffect, useState } from 'react';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, ScrollView } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovieById } from '../../actions/moviesActions';
import styles from './styles';
import Genres from '../../components/Genres';



const Movie = function ( {route,  navigation: { navigate } } ) {
	
	const { movie, cinemaId } = route.params;
	
	console.log("haoeu " + cinemaId);
	const token = useSelector(state => state.token);
	const dispatch = useDispatch();
	// const movie = useSelector(state => state.movie)
	
	useEffect( () => {
		(async () => {
			// dispatch(getMovieById(token, id))
		})();
	}, []);

	// const movie = useSelector(state => state.movie);
	// console.log(movie);
	// Generate a list of showtimes for each title 
	const getShowTimes = () => {
		const showtimes = []
		for (let i = 0; i < movie.showtimes.length; i++){
			if (movie.showtimes[i].cinema.id === cinemaId){
				for (let j = 0; j < movie.showtimes[i].schedule.length; j++){
					showtimes.push(movie.showtimes[i].schedule[j]);		
				}
			};
		}
			return showtimes;
	}
	console.log(movie);	
	const showtimes = getShowTimes();

	return(

		<View style={{ flex: 1  }}>
			{/* title */}
			<View style={{alignItems: 'center'}}>
				<Text>{ movie.title }</Text>
				<Text>{ movie.year }</Text>
			</View>
			{/* poster */}
			<View style={{ alignItems: 'center'}}>
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
			{/* Plot */}
			<View style={{ alignItems: 'center'}}>
				<Text>{ movie.plot }</Text>
			</View>
			{/* duration */}
			<View style={{ alignItems: 'center'}}>
				<Text>{ movie.durationMinutes } Minutes</Text>
			</View>
			{/* Year of release */}
			<View >
				<Genres genres={ movie.genres } />
			</View>
			{/* ShowTimes! */}	
			<View style={{alignItems: 'center'}}>
				<FlatList
					numColumns={1}
					data={showtimes}
					renderItem={({item}) => (
							<Pressable
								style={styles.button}
								onPress={() => console.log(item.purchase_url)}>
								<Text style={ styles.buttonText }>Time: {item.time}</Text>
								<Text style={ styles.buttonText }>Buy Ticket</Text>
							</Pressable>
					)}
					keyExtractor={(item) => item.purchase_url}
			/>
			</View>
		</View>
			
	)
}

export default Movie;
