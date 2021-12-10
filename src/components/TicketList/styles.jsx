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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: winWidth-40,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 16,
    margin: 5,
    padding: 5,
  },

});
