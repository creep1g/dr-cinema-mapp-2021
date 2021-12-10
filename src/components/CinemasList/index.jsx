import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import styles from './styles';
import body from '../../styles/body';
import * as colors from '../../styles/colors';
import PropTypes from 'prop-types';

const CinemasList = function({onSelect}) {
  const cinemas = useSelector((state) => state.cinemas);
  return (

    <View style={[{flex: 1}, body.body]}>
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

    </View>
  );
};

CinemasList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CinemasList;
