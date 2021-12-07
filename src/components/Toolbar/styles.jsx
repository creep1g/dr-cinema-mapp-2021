import { StyleSheet } from 'react-native';
import * as colors from '../../styles/colors';

export default StyleSheet.create ({
	bar: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.one,
		flexDirection: 'row',
	},

	buttonArray: {
		flexDirection: 'row',
	},

	button: {
		alignItems: 'center',
		width: 130,
		padding: 10,
		margin: 10,
		backgroundColor: colors.three,
		borderColor: colors.two,
		borderWidth: 0.4,
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
