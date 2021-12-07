import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({

	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	buttonCard: {
		// flex: 0.1,
		backgroundColor: "lightblue",
		margin: 10,
		width: winWidth-80,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},

	text: {
		textAlign: 'center',
		fontSize: 50,
		color: 'white',
		padding: 10
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
		elevation: 4,
	},


}
)
