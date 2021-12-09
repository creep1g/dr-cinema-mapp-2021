import React, { useEffect } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import * as colors from '../../styles/colors';



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
					showtimes.push(movie.showtimes[i].schedule[j]);		
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
				<View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
					{/* poster */}
					<View style={{ alignItems: 'center', marginTop:10}}>
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

					<View style={{alignItems: 'center'}}>
						<Text style={ styles.title }>{movie.title} ({ movie.year })</Text>
					</View>

					{/* Plot */}

					<View style={ [
						styles.plotContainer,
						styles.shadow,
						styles.border,
						{ alignItems: 'center'}]}>
						<Text style={ styles.plotText }>
						{ movie.plot }{"\n"}{"\n"} 
						Duration: { movie.durationMinutes } Minutes
						</Text>
					</View>

					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<View style={ [styles.genreContainer, styles.shadow, styles.border] } >

					<View>
						<View style={{ justifyContent: 'center', alignItems: 'center'}}>
							<Text style={ styles.genreText }> Genres </Text>
						</View>
						<FlatList
							numColumns={3}
							data={ movie.genres }
							renderItem={({ item }) => (
								<View style={ { 
									marginTop: 15,
									alignItems: 'center',
									justifyContent: 'center',
									flex: 1, 
									flexDirection: 'row' } }>

								<Text style={styles.genreText}>{ item["NameEN	"] }</Text>
							</View>
					)}
				keyExtractor={genre => genre["NameEN	"]}
				/>

					</View>
						</View>
				  </View>		
				</View>
				</>}
				numColumns={1}
				data={showtimes}
				renderItem={({item}) => (
					<View style={{ justifyContent: 'center', alignItems: 'center'}}>
						<View>
						</View>
						<Pressable
						 style={({ pressed }) => [
          		{
            	backgroundColor: pressed
              ? colors.five
              : colors.yello
          		},
							styles.button, styles.shadow, styles.border
							]}
							onPress={() => openLink(item.purchase_url)}>
							<Text style={ styles.buttonText }>Time: {item.time}</Text>
							<Text style={ styles.buttonText }>Buy Ticket</Text>
						</Pressable>
					</View>
				)}
				keyExtractor={(item) => item.purchase_url}
		/>

	)
}

export default Movie;
