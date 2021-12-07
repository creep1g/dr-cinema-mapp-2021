import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const MoviesList = function ({ films, onSelect}) {
  return (
    <View style={{ flex: 1 }}>
	<FlatList
        numColumns={1}
        data={films}
        renderItem={({ item: { ids, title, poster } }) =>
          (
              <TouchableHighlight
                onPress={() => onSelect(ids.imdb)}>
                <View>
                    <Text>{title}</Text>
                    <Image 
                        source={{uri: poster}} 
                    />
                </View>
              </TouchableHighlight>
          ) 
		  }
      keyExtractor={movie => movie.id }
      />
    </View>
  );
};

export default MoviesList;
