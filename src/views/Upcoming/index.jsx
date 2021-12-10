import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import {useDispatch} from 'react-redux';
import {getUpcoming, selectedMovie, setUpcomingFilter}
  from '../../actions/moviesActions';
import Dropdown from '../../components/Dropdown';
import PropTypes from 'prop-types';

const Upcoming = function( {navigation: {navigate}} ) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const upcoming = useSelector((state) => state.upcoming);
  const [filter, setFilter] = useState(false);

  useEffect( () => {
    (async () => {
      dispatch(getUpcoming(token));
    })();
  }, []);

  const onPressMovie = (item) => {
    dispatch(selectedMovie(item));
    navigate('UpcomingDetails');
  };

  const onFilter = (genre) => {
    if (genre === 'All') {
      setFilter(false);
    } else {
      setFilter(true);
      const filteredUpcoming = [];
      for (let i = 0; i < upcoming.length; i++) {
        for (let j = 0; j < upcoming[i].genres.length; j++) {
          if (upcoming[i].genres[j]['NameEN	'] === genre) {
            filteredUpcoming.push(upcoming[i]);
          }
        }
      }
      dispatch(setUpcomingFilter(filteredUpcoming));
    }
  };

  upcoming.sort((a, b) => a['release-dateIS'] > b['release-dateIS'] ? 1 : -1);

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
            upcoming={true}
            filter={filter}/>
        </View>) }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

Upcoming.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Upcoming;
