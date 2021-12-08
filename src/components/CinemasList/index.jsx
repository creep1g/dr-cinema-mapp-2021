import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';

const CinemasList = function ({ cinemas, onSelect }) {
	
  return (
	
		<View style={[ {flex:1}, body.body ]}>
			<FlatList
				numColumns={1}
				data={cinemas}
				renderItem={({ item }) => (
					<TouchableHighlight 
						activeOpacity={1}
						underlayColor={ '#ff784f' }
						onPress={() => onSelect(item)}
						style={[styles.card, styles.shadow]}
					>
						<View style={{ flex: 1 }}>
							<Text style={ styles.text }>{ item.name }</Text>
							<Text style={ styles.subtext }> { item.website } </Text>
						</View>
					</TouchableHighlight>
				)}
				keyExtractor={item => item.id}
			/>

   </View>
  );
};

export default CinemasList;
