import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';

const Genres = function({genres, inStyles}) {
  if (inStyles !== undefined) {
    styles = inStyles;
  };

  return (
    <View>
      <FlatList
	  numColumns={3}
        data={ genres }
	  renderItem={({item}) => (
          <View style={ {marginTop: 15, alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'} }>
		  <Text style={styles.subtext}>{ item['NameEN	'] }</Text>
          </View>
        )}
        keyExtractor={(genre) => genre['NameEN	']}
      />
    </View>
  );
};

export default Genres;
