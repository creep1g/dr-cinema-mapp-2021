import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import { useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import {useDispatch} from 'react-redux';
import { getUpcoming, selectedMovie, setUpcomingFilter } from '../../actions/moviesActions';
import Dropdown from '../../components/Dropdown';


const Upcoming = function ( {route,  navigation: { navigate } } ) {;
	
    const token = useSelector(state => state.token);
    const dispatch = useDispatch()
    const upcoming = useSelector(state => state.upcoming)
	const [ filter, setFilter ] = useState(false)

    useEffect( () => {
		(async () => {
			dispatch(getUpcoming(token))
		})();
	}, []);
	
	const onPressMovie = (item) => {
		dispatch(selectedMovie(item))
		navigate('UpcomingDetails')
	}

	const onFilter = (genre) => {
        if (genre === 'All') {
			setFilter(false)
        } else {
			setFilter(true)
            const filteredUpcoming = []
            for (var i = 0; i < upcoming.length; i++) {
                for (var j = 0; j < upcoming[i].genres.length; j++){
                    if (upcoming[i].genres[j]["NameEN	"] === genre) {
                        filteredUpcoming.push(upcoming[i])
                    }
                }
            }
            dispatch(setUpcomingFilter(filteredUpcoming))
        }
    }

	upcoming.sort((a,b) => a['release-dateIS'] > b['release-dateIS'] ? 1 : -1)

	return(
		<View style={{ flex: 1 }}>
			<Dropdown
				selected={(genre) => onFilter(genre)}
				isUpcoming={true}/>
			<MoviesList
				onSelect={(item) => onPressMovie(item)}
                upcoming={true}
				filter={filter}
                />
		</View>
	)
}

export default Upcoming;
