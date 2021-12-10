import React from 'react';
import {Text, Pressable, FlatList, View} from 'react-native';
import * as colors from '../../styles/colors';
import styles from './styles';
import PropTypes from 'prop-types';

const TicketList = function({showtime, cinema, buy}) {
  return (
    <View style={ {justifyContent: 'center', alignItems: 'center'} }>
      <FlatList
        numColumns={1}
        data={showtime.schedule}
        renderItem={({item}) => (
          <View>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ?
                      colors.two :
                      colors.three,
                },
                styles.button, styles.shadow, styles.border,
              ]}
              onPress={() => buy(item.purchase_url)}>
              {
                    cinema?
                    <Text style={styles.buttonText}>{ cinema }</Text>:
                    <></>
              }
              <Text style={ styles.buttonText }>Time: {item.time}</Text>
              <Text style={ styles.buttonText }>Buy Ticket</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.purchase_url}
      />
    </View>
  );
};

TicketList.propTypes = {
  showtime: PropTypes.object.isRequired,
  cinema: PropTypes.string,
  buy: PropTypes.func.isRequired,
};

TicketList.defaultProps = {
  cinema: '',
};

export default TicketList;
