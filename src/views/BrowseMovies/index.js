import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { setMovieFilter, selectedMovie } from '../../actions/moviesActions';
import Dropdown from '../../components/Dropdown';


const BrowseMovies = function ( {route,  navigation: { navigate } } ) {
	
    const [filter, setFilter] = useState(false);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.allMovies);
    const token = useSelector(state => state.token)

    useEffect( () => {
		(async () => {
		})();
	}, []);

    const onPressMovie = (movie) => {
        dispatch(selectedMovie(movie))
        navigate('BrowseMovieDetail');
    }

    const onFilter = (genre) => {
        const filteredMovies = []
        for (var i = 0; i < movies.length; i++) {
            for (var j = 0; j < movies[i].genres.length; j++){
                if (movies[i].genres[j]["NameEN	"] === genre) {
                    filteredMovies.push(movies[i].genres)
                }
            }
        }
        dispatch(setMovieFilter(filteredMovies))
    }

    const test = () => {
        console.log(filter)
    }

	return(
		<View style={{ flex: 1 }}>
            <Dropdown 
                selected={(genre) => {
                    setFilter(true)
                    onFilter(genre)}}/>
            <TouchableHighlight onPress={() => test()}>
                <Text>Test</Text>
            </TouchableHighlight>
			<MoviesList
				onSelect={(movie) => onPressMovie(movie)} 
                all={true}
                filter={filter}/>
		</View>
	)
}

export default BrowseMovies;
