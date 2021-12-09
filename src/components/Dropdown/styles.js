import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({

	button: {
		margin: 10,
		padding:5,
		width: winWidth -10,
		borderRadius: 10,
		backgroundColor: colors.three,
	},

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
		
		overflow: 'hidden'
	},

	border: {
		borderColor: colors.one,
		borderWidth: 0.7,
	},
		

})
