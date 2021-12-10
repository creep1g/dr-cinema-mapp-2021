import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const CinemasList = function({onSelect}) {
  const cinemas = useSelector((state) => state.cinemas);
  // For some reason this works when the API does not answer?
  if (cinemas === undefined) {
    console.log(cinemas);
  }
  return (
    <View style={[{flex: 1}, body.body]}>
      {
        // eslint-disable-next-line react/prop-types
        cinemas.length === undefined || cinemas.length === 0 ?
        <Text style={{textAlign: 'center', fontSize: 20}}>
            No Cinemas Found
        </Text> :
        <FlatList
          numColumns={1}
          data={cinemas}
          renderItem={({item}) => (
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={ colors.one }
              onPress={() => onSelect(item)}
              style={[styles.card, styles.shadow]}
            >
              <View style={{flex: 1}}>
                <Text style={ styles.text }>{ item.name }</Text>
                <Text style={ styles.subtext }> { item.website } </Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.id}
        />
      }
    </View>
  );
};

CinemasList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CinemasList;
