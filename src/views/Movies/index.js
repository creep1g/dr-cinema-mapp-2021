import React, { useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovieById } from '../../services/api';
import Toolbar from '../../components/Toolbar';
import {useDispatch} from 'react-redux';


const Movies = function ( {route,  navigation: { navigate } } ) {
	const { cinemaId } = route.params;
	const movies = useSelector(state => state.movies);
    
	const token = useSelector(state => state.token);
	
	// This should be handled with redux.. i think?
	const onPressMovie = (id) => {
		navigate("Movie", { movie: id, cinemaId: cinemaId })
	}

	return(
		<View style={{ flex: 1 }}>
			<Toolbar />
			<MoviesList
				onSelect={(id) => onPressMovie(id)} 
                films={movies}/>
		</View>
	)
}

export default Movies;
