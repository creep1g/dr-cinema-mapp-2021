import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

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
		
		overflow: 'hidden'
	},

	border: {
		borderColor: colors.one,
		borderWidth: 0.7,
	},

	title: {
		backgroundColor: colors.three,
		padding: 20,
		margin: 10,
		marginBottom: 0,
		width: winWidth-10,
		alignItems: 'center',
		justifyContent: 'center',
	},

	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: "black"
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

	website: {
		padding: 10,
		margin: 10,
		marginBottom:0,
		marginTop:0,
		alignItems: 'center',
		backgroundColor: colors.two,
		width: winWidth-10
	},

	websiteText: { 
		color: colors.four,
		fontSize: 18,
		padding: 10,
		margin: 10
	},

	phone: {
		padding: 10,
		margin: 10,
		marginBottom:0,
		marginTop:0,
		alignItems: 'center',
		backgroundColor: colors.one,
		width: winWidth-10
	},

	phoneText: { 
		color: colors.four,
		fontSize: 18,
		padding: 10,
		margin: 10
	},
	address: {
		padding: 10,
		margin: 10,
		marginBottom:20,
		marginTop:0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.three,
		width: winWidth-10
	},


	addressText: { 
		textAlign: 'center',
		color: 'black',
		fontSize: 18,
		padding: 10,
		margin: 10
	}

})
