import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import TicketList from '../../components/TicketList';
import MovieDetail from '../../components/Movie';
import PropTypes from 'prop-types';


const BrowseMovieDetail = function( {navigation: {setOptions}} ) {
  const movie = useSelector((state) => state.movie);

  useEffect( () => {
    (async () => {
      setOptions({title: movie.title});
    })();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (

    <FlatList
      ListHeaderComponent={
        <>
          <MovieDetail />
        </>}
      numColumns={1}
      data={movie.showtimes}
      renderItem={({item}) => (
        <View>
          <TicketList
            cinema={item.cinema.name}
            showtime={item}
            buy={(url) => openLink(url)}
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />

  );
};


BrowseMovieDetail.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }),
};


export default BrowseMovieDetail;
