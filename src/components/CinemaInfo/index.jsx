import React from 'react-native';
import {View, TouchableHighlight, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import body from '../../styles/body';

const CinemaInfo = function( {openUrl, openJa, openPhone} ) {
  const movies = useSelector((state) => state.movies);
  const cinema = useSelector((state) => state.cinema);
  const url = 'http://' + cinema.website;
  const regex = /(<([^>]+)>)/ig;

  return (
    <View style={ [body.body, {flex: 1, justifyContent: 'center', alignItems: 'center'}] }>
      <View>
        {
			  cinema.description !== null ?
			  <Text > { cinema.description.replace(regex, '\n') } </Text>:
			  <></>
        }
      </View>
    </View>
  );
};

export default CinemaInfo;
