import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, FlatList, Linking, ScrollView } from 'react-native';
import styles from './styles';
import body from '../../styles/body';
import Toolbar from '../../components/Toolbar';
import {useDispatch, useSelector} from 'react-redux';
import { getMoviesByCinema } from '../../actions/moviesActions';
import MoviesList from '../../components/MoviesList';
import { selectedMovie } from '../../actions/moviesActions';

const CinemaDetails = function ( { scene, route, navigation: { navigate, setOptions }} ) {
	// This should be done with redux but i can't figure it out!
	const dispatch = useDispatch();
	const cinema  = useSelector(state => state.cinema)
	const token = useSelector(state => state.token);
	
	// Set header to cinema name
	// Get a list of movies filtered by cinema id
	useEffect(() => {
		( async () => {
			dispatch(getMoviesByCinema(token, cinema.id))
			setOptions({title: cinema.name})
		} )();
	}, []);

	// Opens URL to cinema website
  const openUrlButton = (url) => {
	  Linking.canOpenURL(url).then(supported => {
		  if (supported){
			  Linking.openURL(url);
		  }
		  else {
			  console.log("Proplem with URI " + url)
		  }
	  });
	};

	// Opens Address on JA.IS
  const openJaWeb = ( street, city ) => {
   	const url = 'https://ja.is/?q='+street+" "+city 
	  Linking.canOpenURL(url).then(supported => {
		  if (supported){
			  Linking.openURL(url);
		  }
		  else{
			  console.log(url + " Does not work");
		  }
	  });
	};

	// Opens phone when phone number is pressed
  const openPhoneButton = ( phone ) => {
		let phoneNumber = phone;
		if (Platform.OS !== 'android'){
			phoneNumber = `tel:${phone}`;
		}
		else{
			phoneNumber = `tel:${phone}`;
		}
		Linking.canOpenURL(phoneNumber).then(() =>{
			return Linking.openURL(phoneNumber);
		})
			.catch((err) => console.log(err));
	};
		const onPressMovie = (movie) => {
		dispatch(selectedMovie(movie))
		navigate("Movie")
	}

	// Make url supported!
  const url = "http://" + cinema.website;
	// Filter out html tags from cinema descriptiotns
  const regex = /(<([^>]+)>)/ig;
	
  return(
	  <View style={ [body.body, { flex:1 }] }>
		<Toolbar 
		getMovies={() => navigate("Movies")} 
		getUpcoming={() => navigate('Upcoming')}
		/>
		<FlatList
			numColumns={1}
			data={[0]}
			renderItem={({ item }) => (

			<View>

				<MoviesList upcoming={false} 
				onSelect={(movie) => onPressMovie(movie)} />	
				<View style={styles.container}>
					{
					cinema.description !== null
					?
					<View style={ [ styles.border, styles.shadow, styles.description] }>
						<Text style={ styles.descrText }> { cinema.description.replace(regex, '\n') } </Text>
					</View>
					:
					<View style={ [ styles.border, styles.shadow, styles.description] }>
					</View>
				}

				<TouchableHighlight 
					activeOpacity={0.4}
					underlayColor={ 'white' }
					style={ [  styles.border, styles.shadow, styles.website ] } 
					onPress={() => openUrlButton(url) }>
					<Text style={ styles.websiteText }>{ cinema.website.toUpperCase() }</Text>
				</TouchableHighlight>

				<TouchableHighlight 
					activeOpacity={0.4}
					underlayColor={ 'white' }
					style={ [ styles.border, styles.shadow, styles.phone ] }
					onPress={() => openPhoneButton( cinema.phone )}
				>
					<Text style={ styles.phoneText }>Phone: { cinema.phone }</Text>
				</TouchableHighlight>

				<TouchableHighlight
					activeOpacity={0.4}
					underlayColor={ 'white' }
					style={ [ styles.border, styles.shadow, styles.address ] }
					onPress={() => openJaWeb(cinema["address	"], cinema.city)}>
					<Text style={ styles.addressText }>{ cinema["address	"] }{"\n"}{ cinema.city }</Text>
				</TouchableHighlight>
				</View>

		</View>
			)
		}
		keyExtractor={(id) => id}/>
	</View>
	)
};

export default CinemaDetails;
