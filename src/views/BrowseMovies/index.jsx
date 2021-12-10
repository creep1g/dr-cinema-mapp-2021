import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import {setMovieFilter, selectedMovie} from '../../actions/moviesActions';
import Dropdown from '../../components/Dropdown';
import PropTypes from 'prop-types';


const BrowseMovies = function( {navigation: {navigate}} ) {
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies);

  const onPressMovie = (movie) => {
    dispatch(selectedMovie(movie));
    navigate('BrowseMovieDetail');
  };

  const onFilter = (genre) => {
    if (genre === 'All') {
      setFilter(false);
    } else {
      setFilter(true);
      const filteredMovies = [];
      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].genres.length; j++) {
          if (movies[i].genres[j]['NameEN	'] === genre) {
            filteredMovies.push(movies[i]);
          }
        }
      }
      dispatch(setMovieFilter(filteredMovies));
    }
  };

  return (
    <FlatList
      numColumns={1}
      data={[0]}
      renderItem={({item}) => (
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Dropdown
              selected={(genre) => onFilter(genre)}/>
          </View>
          <MoviesList
            onSelect={(movie) => onPressMovie(movie)}
            all={true}
            filter={filter}/>
        </View>) }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

BrowseMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
export default BrowseMovies;
