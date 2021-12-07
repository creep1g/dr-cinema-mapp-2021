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

    const getMovie = async (id) => {
		//console.log(`id: ${id}`)
		const movie = await getMovieById(token, id);
        //console.log(movie)
		navigate('Movie', {movie: movie})
    }
	

	return(

		<View style={{ flex: 1 }}>
			<Toolbar />
			<MoviesList
                onSelect={(id) => getMovie(id)} 
                films={movies}/>
		</View>
			
	)
}

export default Movies;
