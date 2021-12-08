import React, { useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import { getMovieById } from '../../services/api';
import Toolbar from '../../components/Toolbar';
import { testElement } from 'domutils';


const Upcoming = function ( {route,  navigation: { navigate } } ) {
	
	const upcoming = useSelector(state => state.upcoming);
    
	const token = useSelector(state => state.token);

	//const token = route.params.token;

	useEffect( () => {
		(async () => {

		})();
	}, []);

    const test = () => {
        console.log(upcoming)
    }
	

	return(

		<View style={{ flex: 1 }}>
			<Toolbar 
				getMovies={() => navigate('Movies')}
				getUpcoming={() => navigate('Upcoming')}
			/>
            <TouchableHighlight onPress={() => test()}>
                <Text>Test</Text>
            </TouchableHighlight>
			<MoviesList
                onSelect={(item) => navigate('Movie', {movie: item})} 
                films={upcoming}/>
		</View>
			
	)
}

export default Upcoming;
