import {StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../styles/colors';

const {width: winWidth} = Dimensions.get('window');

export default StyleSheet.create({

  shadow: {
    // Shadow for iOS
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    // Elevation for android
    elevation: 8,

    overflow: 'hidden',
  },

  border: {
    borderColor: colors.one,
    borderWidth: 0.7,
  },

  description: {
    backgroundColor: colors.five,
    padding: 10,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    width: winWidth-10,
  },

  descrText: {
    padding: 5,
    margin: 5,
    fontSize: 16,
  },
});
