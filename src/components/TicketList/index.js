import React from 'react';
import {Text, Pressable, FlatList, View} from 'react-native';
import styles from './styles';

const TicketList = function ({showtime, buy}) {
    return (
        <View>
            <FlatList
                numColumns={1}
                data={showtime.schedule}
                renderItem={({item}) => (
                    <Pressable
                        style={styles.button}
                        onPress={() => buy(item.purchase_url)}
                    >
                        <Text style={ styles.buttonText }>Time: {item.time}</Text>
                        <Text style={ styles.buttonText }>Buy Ticket</Text>
                    </Pressable>
                )}
            keyExtractor={(item) => item.purchase_url} 
            />
        </View>
        )
};

export default TicketList;