import React, { useEffect, useState } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, ScrollView } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import Genres from '../../components/Genres';



const Movie = function ( {route,  navigation: { navigate } } ) {
	
	const movie = useSelector(state => state.movie)
	const cinema = useSelector(state => state.cinema)
	
	useEffect( () => {
		(async () => {
		})();
	}, []);

	// Generate a list of showtimes for each title 
	const getShowTimes = () => {
		const showtimes = []
		for (let i = 0; i < movie.showtimes.length; i++){
			if (movie.showtimes[i].cinema.id === cinema.id){
				for (let j = 0; j < movie.showtimes[i].schedule.length; j++){
					showtimes.push(movie.showtimes[i].schedule[j]);		
				}
			};
		}
			return showtimes;
	}
	//console.log(movie);	
	const showtimes = getShowTimes();

	const openLink = (url) => {
		Linking.openURL(url)
	}

	const test = () => {
		console.log('erroooorrrr')
	}

	return(

		<FlatList
				ListHeaderComponent={
				<>
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
							onError={() => test()}
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
					<TouchableHighlight onPress={() => test()}>
						<Text>Test</Text>
					</TouchableHighlight>
				</>}
				numColumns={1}
				data={showtimes}
				renderItem={({item}) => (
						<Pressable
							style={styles.button}
							onPress={() => openLink(item.purchase_url)}>
							<Text style={ styles.buttonText }>Time: {item.time}</Text>
							<Text style={ styles.buttonText }>Buy Ticket</Text>
						</Pressable>
				)}
				keyExtractor={(item) => item.purchase_url}
		/>

	)
}

export default Movie;
