import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create ({
	button: {
		margin: 10,
		padding: 10,
		width:winWidth-10, 
		backgroundColor: colors.four,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.one,
    },

    buttonText: { 
        color: "black", 
        textAlign: "left" 
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


})
