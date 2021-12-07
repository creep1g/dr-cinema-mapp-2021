import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const CinemasList = function ({ cinemas, onSelect}) {
  return (
    <View style={{ flex: 1 }}>
	<FlatList
        numColumns={1}
        data={cinemas}
        renderItem={({ item: { ids, name, website} }) =>
          (
              <TouchableHighlight
                style={{padding: 20}}
                onPress={()=> onSelect()}>
                <View>
                  <Text>{name}</Text>
                  <Text>{website}</Text>
                </View>
              </TouchableHighlight>
          ) 
		  }
        keyExtractor={cinema => cinema.id }
      />
    </View>
  );
};

export default CinemasList;
