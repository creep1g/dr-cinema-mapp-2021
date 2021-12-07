import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const MoviesList = function ({ films, onSelect}) {
	const prant = (item) => {
		console.log(item);
	} 
	console.log(films);

// 	const genreList = ( list ) =>{ 
// 		const genres = [];
// 		list.forEach((genre) => { genres.push(genre.Name) })
// 		return genres;
// 	},

	return (
    <View style={{ flex: 1 }}>
		<FlatList
    	numColumns={1}
      data={films}
      renderItem={({ item }) => (
				<TouchableHighlight
					onPress={() => prant( item )}>
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
						
						<Text style={styles.subtext}>{ item.year }</Text> 

						<Text style={ styles.subtext }>{ item.genres[0]["NameEN	"] }</Text>
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

export default MoviesList;
