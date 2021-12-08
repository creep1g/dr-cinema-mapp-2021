import React, { useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import Toolbar from '../../components/Toolbar';
import {useDispatch} from 'react-redux';
import { selectedMovie } from '../../actions/moviesActions';


const Movies = function ( {route,  navigation: { navigate } } ) {
	const movies = useSelector(state => state.movies);
	const token = useSelector(state => state.token);
	const dispatch = useDispatch()
	
	// This should be handled with redux.. i think?
	const onPressMovie = (movie) => {
		dispatch(selectedMovie(movie))
		navigate("Movie")
	}

	return(
		<View style={{ flex: 1 }}>
			<Toolbar 
			getUpcoming={() => navigate('Upcoming')}
			/>
			<MoviesList
				onSelect={(movie) => onPressMovie(movie)} 
                films={movies}/>
		</View>
	)
}

export default Movies;
