import { StyleSheet } from 'react-native';
import * as colors from '../../styles/colors';

export default StyleSheet.create ({
	image: {
		width: 250,
		height: 400,
	},

	button: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: colors.yello,
		elevation: 20,
	},
	
	buttonText: {
		fontSize: 16,
		margin: 5,
		padding: 5
	}
})
