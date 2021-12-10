import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import PropTypes from 'prop-types';

const Movies = function( {navigation: {navigate}} ) {
  const movies = useSelector((state) => state.movies);

  // This should be handled with redux.. i think?
  return (
    <View style={{flex: 1}}>
      <MoviesList
        onSelect={(movie) => onPressMovie(movie)}
        films={movies}/>
    </View>
  );
};

Movies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Movies;
