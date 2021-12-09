import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create ({
	image: {
		width: 250,
		height: 400,
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
		padding: 5
	},

	title: {
		fontSize: 12,
		marginBottom: 10,
		paddingBottom: 5,
	},

	plotContainer: {
		backgroundColor: colors.five,	
		padding: 10,
		margin: 10,
		marginTop: 0,
		marginBottom: 0,
		width: winWidth-10,
	},

	plotText: {
		padding: 5,
		margin: 5,
		fontSize: 16,
	},

	genreText: {
		fontSize: 16,
		paddingBottom: 2,
		marginBottom: 2,
	},
genreContainer: {
		backgroundColor: colors.two,
		width: winWidth-10,
		marginBottom: 10,
		paddingBottom: 5,
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
