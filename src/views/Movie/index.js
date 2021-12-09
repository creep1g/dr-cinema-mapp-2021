import React, { useEffect } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import * as colors from '../../styles/colors';
import TicketList from '../../components/TicketList';
import MovieDetail from '../../components/Movie';



const Movie = function ( { navigation: { setOptions } } ) {
	
	const movie = useSelector(state => state.movie)
	const cinema = useSelector(state => state.cinema)

	// Set header title
	useEffect( () => {
		(async () => {
			setOptions({title: movie.title})
		})();
	}, []);

	// Generate a list of showtimes for each title 
	const getShowTimes = () => {
		const showtimes = []
		for (let i = 0; i < movie.showtimes.length; i++){
			if (movie.showtimes[i].cinema.id === cinema.id){
				for (let j = 0; j < movie.showtimes[i].schedule.length; j++){
					showtimes.push(movie.showtimes[i]);		
				}
			};
		}
			return showtimes;
	}
	// Get showtimes	
	const showtimes = getShowTimes();
	
	//Open ticket links
	const openLink = (url) => {
		Linking.openURL(url)
	}

	return(

		<FlatList
				ListHeaderComponent={
				<>
				<MovieDetail />
				</>}
				numColumns={1}
				data={showtimes}
				renderItem={({item}) => (
					<View style={{ justifyContent: 'center', alignItems: 'center'}}>
						<TicketList 
							cinema={cinema.name}
							showtime={item}
							buy={(url) => openLink(url)} />
					</View>
				)}
			keyExtractor={(item, index) => index.toString() }
		/>

	)
}

export default Movie;
