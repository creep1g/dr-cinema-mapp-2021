import React, { useEffect } from 'react';
import { View} from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import {useDispatch} from 'react-redux';
import { getUpcoming } from '../../actions/moviesActions';


const Upcoming = function ( {route,  navigation: { navigate } } ) {;
	
    const token = useSelector(state => state.token);
    const dispatch = useDispatch()
    const upcoming = useSelector(state => state.upcoming)

    useEffect( () => {
		(async () => {
			dispatch(getUpcoming(token))
		})();
	}, []);
	
	const onPressMovie = (item) => {
		navigate('Youtube', {videoId: item.trailers[0].results[0].key})
	}

    const getSortedUpcoming = () => upcoming.sort((a,b) => b['release-dateIS'] - a['release-dateIS'])

	return(
		<View style={{ flex: 1 }}>
			<MoviesList
				onSelect={(item) => onPressMovie(item)}
                films={getSortedUpcoming()}
                upcoming={true}
                />
		</View>
	)
}

export default Upcoming;
