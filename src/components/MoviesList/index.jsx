import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Genres from '../Genres';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const MoviesList = function ({ onSelect, upcoming}) {
	
	
	const isDisabled = (item) => {
		if (upcoming) {
			if (item.trailers.length === 0 || (item.trailers.length > 0 && item.trailers[0].results.length === 0)){
				return true;
			} 
		} 
		return false;
	}
	
	const films = useSelector(state => state.movies);
	return (
    <View style={{ flex: 1 }}>
		<FlatList
    	numColumns={1}
      data={films}
      renderItem={({ item }) => (
				<TouchableHighlight
					onPress={() => onSelect(item)}
					disabled={isDisabled(item)}>
					<View style={styles.card}>
{/* 					// There are inconsitencies with the data */}
{/* 					// Some movies have omdb as property but it is an empty array */}
{/* 					// Others have it and poster is kept there inside */}
{/* 					// this should take care of that. */}

						<View style={styles.shadow}>
							{
								item.omdb.length !== 0
								?
								// If omdb is populated use it
								<Image 
									style={styles.image}
									source={{uri: item.omdb[0].Poster }} 
								/>
								:
								// Else use poster
								<Image
									style={[ styles.image, ]}
									source={{uri: item.poster}}
								/>
							}

					</View>

					<View style={ { flex:1 } }>
						<Text style={styles.text}>{item.title}</Text> 
						
						{/* Check whether we are rendering upcoming or released movies in order to determine what to render */}
						{
							upcoming
							?
							<Text style={styles.subtext}>Release date: {item['release-dateIS']}</Text>
							:
							<Text style={styles.subtext}>{ item.year }</Text> 
						}	

						<Genres genres={ item.genres } />

						
						{
							!isDisabled(item) && upcoming
							?
							<Text style={styles.subtext}>Click to watch trailer</Text>
							:
							<></>
						}
						

					</View>

        </View>
				</TouchableHighlight>
          ) 
		  }
      keyExtractor={movie => movie.id }
      />
    </View>
  );
};

MoviesList.propTypes = {
	films: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	upcoming: PropTypes.bool,
};

MoviesList.defaultProps = {
	upcoming: false
};

export default MoviesList;
