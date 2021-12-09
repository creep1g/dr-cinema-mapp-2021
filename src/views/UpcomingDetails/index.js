import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Youtube from '../../components/Youtube';
import styles from './styles';



const UpcomingDetails = function ( { navigation: { setOptions } } ) {

	const movie = useSelector(state => state.movie)

	
	useEffect( () => {
		(async () => {
			setOptions({title: movie.title})
		})();
	}, []);

	const hasTrailer = () => {
		if (movie.trailers.length > 0) {
			if (movie.trailers[0].results.length > 0) {
				return true;
			}
		}
		return false
	}
	console.log(movie)
  
	return (
		<ScrollView>
			<View style={{alignItems: 'center'}}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>{ movie.title }</Text>
					<Text>Release date: {movie['release-dateIS']}</Text>
					{
						movie.omdb.length !== 0
						?
						// If omdb is populated use it
						<Image 
							style={styles.image}
							source={{uri: movie.omdb[0].Poster }} 
						/>
							:
						// Else use poster
						<Image
							style={[ styles.image, ]}
							source={{uri: movie.poster}}
						/>
					}
					<Text>{movie.plot}</Text>
			</View>
			
			<View>
			{
				hasTrailer()
				?
				<Youtube 
					videoId={movie.trailers[0].results[0].key}
				/>
				:
				<></>
			}
			</View>
			
		</ScrollView>

	);
  };
  


export default UpcomingDetails;
