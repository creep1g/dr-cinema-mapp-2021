import React, { useEffect, useState } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, ScrollView } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import Genres from '../../components/Genres';
import TicketList from '../../components/TicketList';



const BrowseMovieDetail = function ( {route,  navigation: { navigate } } ) {
	
	const movie = useSelector(state => state.movie)
	
	useEffect( () => {
		(async () => {
		})();
	}, []);

	const openLink = (url) => {
		Linking.openURL(url)
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
				</>}
				numColumns={1}
				data={movie.showtimes}
				renderItem={({item}) => (
                    <View>
                        <Text>{item.cinema.name}</Text>
						<TicketList
                            showtime={item}
                            buy={(url) => openLink(url)}
                        />
                    </View>
				)}
				keyExtractor={(item) => item.cinema.name}
                />

	)
}

export default BrowseMovieDetail;
