import React, { useEffect, useState } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, ScrollView } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import Genres from '../../components/Genres';
import TicketList from '../../components/TicketList';



const BrowseMovieDetail = function ( { navigation: { setOptions } } ) {
	
	const movie = useSelector(state => state.movie)
	
	useEffect( () => {
		(async () => {
			setOptions({ title: movie.title });
		})();
	}, []);

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
				</>	
			}
				numColumns={1}
				data={movie.showtimes}
				renderItem={({item}) => (
                    <View>
											<TicketList
													cinema={item.cinema.name}
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
