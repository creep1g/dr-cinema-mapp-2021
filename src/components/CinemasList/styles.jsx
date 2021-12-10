import {StyleSheet} from 'react-native';
import * as colors from '../../styles/colors';

export default StyleSheet.create({

  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: colors.purp,
    // borderWidth: 0.5,
    padding: 10,
    backgroundColor: colors.five,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadow: {
    // Shadow for iOS
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    // Elevation for android
    elevation: 8,
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },

  subtext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },

});
