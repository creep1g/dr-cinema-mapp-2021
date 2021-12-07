import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, FlatList, Linking } from 'react-native';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';
import * as API from '../../services/api-caller';
import Toolbar from '../../components/Toolbar';
import {useSelector} from 'react-redux';
import WebView from 'react-native-webview';

const CinemaDetails = function ( { route, navigation: { navigate } } ) {
	// This should be done with redux but i can't figure it out!

  const { cinema } = route.params;
  console.log(cinema)

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

  return(
	  <View style={ [body.body, { flex:1, flexDirection:'column' }] }>
	  <Toolbar />
		<View style={{ justifyContent:'center', alignItems: 'center'}}>
			<View style={ [styles.title, styles.shadow, styles.border] }>
			  <Text style={ styles.titleText }> { cinema.name } </Text>
			</View>

			{
			  cinema.description !== null
			  ?
			  <View style={ [ styles.border, styles.shadow, styles.description] }>
				 <Text style={ styles.descrText }> { cinema.description } </Text>
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

		</View>
	</View>
	)
};

export default CinemaDetails;
