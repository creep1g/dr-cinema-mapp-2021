import React, { useEffect } from 'react';
import { View  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CinemasList from '../../components/CinemasList';
import Toolbar from '../../components/Toolbar';
import { getAllCinemas, selectedCinema } from '../../actions/cinemaActions';
import { getUpcoming } from '../../actions/moviesActions';

const Cinemas = function ( { navigation: { navigate, setParams } } ) {

	const token = useSelector(state => state.token);
	// console.log(token);
	const dispatch = useDispatch()

	useEffect( ()  => {
		(async () => {
			dispatch(getAllCinemas(token));
			dispatch(getUpcoming(token))

		})();
	}, []);

	const upcoming = useSelector(state => state.upcoming);
	const cinemas = useSelector(state => state.cinemas);
	// console.log(cinemas);	

	const onClick = ( cinema ) => {
		dispatch(selectedCinema(cinema));
		navigate("CinemaDetails");
	};

	return(
		
		<View style={{ flex: 1 }}>
			<Toolbar 
				getCinemas={() => getCinemas()}
				getMovies={() => getMovies()}
				getUpcoming={() => navigate('Upcoming')}
			/>
			<CinemasList cinemas={cinemas} onSelect={(item) => onClick(item)}  />
		</View>
			
	)
}

export default Cinemas;
