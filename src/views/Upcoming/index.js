import React, { useEffect } from 'react';
import { View} from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import {useDispatch} from 'react-redux';
import { getUpcoming, selectedMovie } from '../../actions/moviesActions';
import Dropdown from '../../components/Dropdown';


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
		dispatch(selectedMovie(item))
		navigate('UpcomingDetails')
	}

	upcoming.sort((a,b) => a['release-dateIS'] > b['release-dateIS'] ? 1 : -1)

	return(
		<View style={{ flex: 1 }}>
			<Dropdown
				selected={(genre) => onFilter(genre)}
				isUpcoming={true}/>
			<MoviesList
				onSelect={(item) => onPressMovie(item)}
                isUpcoming={true}
                />
		</View>
	)
}

export default Upcoming;
