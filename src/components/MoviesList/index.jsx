import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Genres from '../Genres';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const MoviesList = function ({ onSelect, upcoming, all, filter}) {
	
	const movies = () => {
		if (upcoming) {
			if (filter) {
				return useSelector(state => state.upcomingFilter)
			}
			return useSelector(state => state.upcoming); 
		}
		if (all) {
			if (filter) {
				return useSelector(state => state.movies)
			} else {
				return useSelector(state => state.allMovies)
			}
		}
		return useSelector(state => state.movies);
		}

	const checkImage = (url) => {
			fetch(url)
				.then((response) => response.status)
				.then((res) => {
					if (res === 200){
						return true
					}
					else{ 
						return false
					}
				}).catch((err) => { return true })
	};


	const films = movies()	
	return (
    <View style={{ flex: 1 }}>
		{
		films.length === 0
		?
		<Text style={styles.card, { textAlign: 'center' }}>No Movies Found</Text>
		:
		<FlatList
    	numColumns={1}
      data={films}
      renderItem={({ item }) => (
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor={ 'white'}
					onPress={() => onSelect(item)}
				>
					<View style={styles.card}>
{/* 					// There are inconsitencies with the data */}
{/* 					// Some movies have omdb as property but it is an empty array */}
{/* 					// Others have it and poster is kept there inside */}
{/* 					// this should take care of that. */}

						<View style={styles.shadow}>
							{
								checkImage(item.poster)
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

						

					</View>

        </View>
				</TouchableHighlight>
          ) 
		  }
      keyExtractor={movie => movie.id }
      />
		}
    </View>
		
  );
};

MoviesList.propTypes = {
	onSelect: PropTypes.func.isRequired,
	upcoming: PropTypes.bool,
	all: PropTypes.bool,
	filtered: PropTypes.bool,
};

MoviesList.defaultProps = {
	upcoming: false,
	all: false,
	filter: false,
};

export default MoviesList;
