import React, { useEffect, useState } from 'react';
import {Linking} from 'react-native';
import { FlatList, View, TouchableHighlight, Text, Image, Pressable, ScrollView } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './styles';
import Genres from '../../components/Genres';
import TicketList from '../../components/TicketList';
import MovieDetail from '../../components/Movie'; 


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
				<MovieDetail />
				</>}
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
				keyExtractor={(item, index) => index.toString()}
                />

	)
}

export default BrowseMovieDetail;
