import React from 'react';
import {Text, Pressable, FlatList, View} from 'react-native';
import * as colors from '../../styles/colors';
import styles from './styles';

const TicketList = function ({showtime, cinema, buy}) {
    return (
        <View style={ { justifyContent: 'center', alignItems: 'center'} }>
            <FlatList
                numColumns={1}
                data={showtime.schedule}
                renderItem={({item}) => (
									<View>
									<Pressable
									 style={({ pressed }) => [
											{
										backgroundColor: pressed
										? colors.five
										: colors.yello
										},
										styles.button, styles.shadow, styles.border
										]}
										onPress={() => buy(item.purchase_url)}>
										{
										 cinema
											?
											<Text style={styles.buttonText}>{ cinema }</Text>
											:
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
        )
};

export default TicketList;
