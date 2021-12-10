import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CinemasList from '../../components/CinemasList';
import {getAllCinemas, selectedCinema} from '../../actions/cinemaActions';
import {getUpcoming, setAllMovies} from '../../actions/moviesActions';
import PropTypes from 'prop-types';

const Cinemas = function( {navigation: {navigate}} ) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  // For some reason this works when nothing loads?
  if (token === undefined) {
    console.log(token);
  };

  useEffect( () => {
    (async () => {
      dispatch(getAllCinemas(token));
      dispatch(getUpcoming(token));
      dispatch(setAllMovies(token));
    })();
  }, []);

  const cinemas = useSelector((state) => state.cinemas);

  const onClick = ( cinema ) => {
    dispatch(selectedCinema(cinema));
    navigate('CinemaDetails');
  };

  return (

    <View style={{flex: 1}}>
      <CinemasList cinemas={cinemas} onSelect={(item) => onClick(item)} />
    </View>

  );
};

Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Cinemas;
