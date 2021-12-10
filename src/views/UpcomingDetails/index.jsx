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


	const checkImage = (url) => {
		console.log(url);
		if( url !== undefined ){
			fetch(url)
				.then((response) => response.status)
				.then((res) => {
					console.log(res);
					if (res !== '404'){
						return true
					}
					else{ 
						return false
					}
				})
		}
	};

	const hasTrailer = () => {
		if (movie.trailers.length > 0) {
			if (movie.trailers[0].results.length > 0) {
				return true;
			}
		}
		return false
	}
	// console.log(movie)
  
	return (
		<ScrollView>
			<View style={{alignItems: 'center', margin: 10,}}>

					{
						checkImage(movie.poster)
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

					<Text style={styles.title}>{ movie.title }{'\n'}{ movie['release-dateIS'] }</Text>
					<View 
						style={[ 
							styles.plotContainer,
							styles.shadow,
							styles.border, { alignItems: 'center' } ]}>
					<Text>{movie.plot}</Text>
					</View>
			</View>
			
			<View styles={[styles.videoContainer, styles.shadow, styles.border]}>

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
