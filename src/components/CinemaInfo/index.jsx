import React from 'react-native';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import body from '../../styles/body';


const CinemaInfo = function( ) {
  const cinema = useSelector((state) => state.cinema);
  const regex = /(<([^>]+)>)/ig;

  return (
    <View
      style={ [body.body, {flex: 1,
        justifyContent: 'center', alignItems: 'center'}] }>
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
