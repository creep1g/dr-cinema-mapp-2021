import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
	
	const [token, setToken] = useState();

// Get access token !


	return (
		<View style={{ flex: 1 }}>
			<AppContainer />
		</View>
  );
}

