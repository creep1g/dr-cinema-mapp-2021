import React, { useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getAllMovies, selectedMovie } from '../../actions/moviesActions';


const BrowseMovies = function ( {route,  navigation: { navigate, setOptions } } ) {
	
    const dispatch = useDispatch();
    const movies = useSelector(state => state.allMovies);
    const token = useSelector(state => state.token)

    const onPressMovie = (movie) => {
        dispatch(selectedMovie(movie))
        navigate('BrowseMovieDetail');
    }

    const test = () => {
        const genres = []
        for (var i = 0; i < movies.length; i++) {
            for (var j = 0; j < movies[i].genres.length; j++) {
                if (!genres.includes(movies[i].genres[j]["NameEN	"])) {
                    genres.push(movies[i].genres[j]["NameEN	"])
                }
            }
        }
        console.log(genres)
    }

	return(
		<View style={{ flex: 1 }}>
            <TouchableHighlight onPress={() => test()}>
                <Text>Test</Text>
            </TouchableHighlight>
			<MoviesList
				onSelect={(movie) => onPressMovie(movie)} 
                all={true}/>
		</View>
	)
}

export default BrowseMovies;
