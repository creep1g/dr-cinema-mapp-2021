import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	
	const [token, setToken] = useState();

// Get access token !

	useEffect( () => {
		(async () => {
			const requestBody = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					username: 'Morgaes',
					password: 'Morgaes1' })
			};
			fetch('https://api.kvikmyndir.is/authenticate/', requestBody)
				.then( (response) => response.json() )
				.then( (res) =>  setToken(res.token))
				.catch( (error) => console.log(error) )
		})();
	}, []);
	

	return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
