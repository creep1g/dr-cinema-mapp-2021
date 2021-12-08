import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, FlatList, Linking, ScrollView } from 'react-native';
import styles from './styles';
import body from '../../styles/body';
import Toolbar from '../../components/Toolbar';
import {useDispatch, useSelector} from 'react-redux';
import { getMoviesByCinema } from '../../actions/moviesActions';

const CinemaDetails = function ( { scene, route, navigation: { navigate } } ) {
	// This should be done with redux but i can't figure it out!
	const dispatch = useDispatch();
	const cinema  = useSelector(state => state.cinema)
	const token = useSelector(state => state.token);

	useEffect(() => {
		( async () => {
			dispatch(getMoviesByCinema(token, cinema.id))
		} )();
	}, []);

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
	
  const url = "http://" + cinema.website;
  const regex = /(<([^>]+)>)/ig;

  return(
	  <ScrollView style={ [body.body, { flex:1 }] }>
		<Toolbar 
		getMovies={() => navigate("Movies", { cinemaId: cinema.id })} 
		getUpcoming={() => navigate('Upcoming')}
		/>
		<View style={{ justifyContent:'center', alignItems: 'center'}}>
			<View style={ [styles.title, styles.shadow, styles.border] }>
			  <Text style={ styles.titleText }> { cinema.name } </Text>
			</View>

			{
			  cinema.description !== null
			  ?
			  <View style={ [ styles.border, styles.shadow, styles.description] }>
				  <Text style={ styles.descrText }> { cinema.description.replace(regex, '\n') } </Text>
			  </View>
			  :
			  <></>
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
	</ScrollView>
	)
};

export default CinemaDetails;
