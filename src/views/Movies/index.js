import React, { useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovieById } from '../../services/api';
import Toolbar from '../../components/Toolbar';


const Movies = function ( {route,  navigation: { navigate } } ) {
	
	const movies = useSelector(state => state.movies);
    
	const token = useSelector(state => state.token);

	//const token = route.params.token;

	useEffect( () => {
		(async () => {

		})();
	}, []);
	

	return(

		<View style={{ flex: 1 }}>
			<Toolbar />
			<MoviesList
                onSelect={(item) => navigate('Movie', {movie: item})} 
                films={movies}/>
		</View>
			
	)
}

export default Movies;
