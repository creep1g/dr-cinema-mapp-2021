import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';
import * as API from '../../services/api-caller';

const CinemaDetails = function ( { route, navigation: { navigate } } ) {
	
	return(
		<View>
			<Text> Wow Movies ! </Text>
		</View>
	)
};

export default CinemaDetails;
