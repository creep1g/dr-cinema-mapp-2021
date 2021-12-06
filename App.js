import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	
	const auth = () => {
		const requestBody = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: 'creep1g', password: 'Streetlock10' })
		};
		fetch('https://api.kvikmyndir.is/authenticate', requestBody).catch( (error) => console.log(error) )
	};


	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZGNmNGExMTQ0MDFmNDU2NWRmOTQiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IsOeb3JnaWxzIMOBcm5pIEhqw6FsbWFyc3NvbiIsImVtYWlsIjoiY3JlZXAxZ0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNyZWVwMWciLCJwYXNzd29yZCI6IiQyYSQwOCRucExQV3hkL2RqS1E5U252ZFlrcHV1Q1ZjaVlRclRadHdEalEvYnRoZUM0OTNFWUMzNzlzeSIsImRvbWFpbiI6ImxvY2FsaG9zdCIsIm1lc3NhZ2UiOiJTY2hvb2wiLCJpYXQiOjE2Mzg3ODgzMjMsImV4cCI6MTYzODg3NDcyM30.vi67Eo8a6SXh8XgA-DOGO_xOSlioO4E-Nr6LrZZqgDQ'

	const get = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token,
								 "Content-Type": "application/json"
			},
		};
		const res = await fetch('http://api.kvikmyndir.is/movies', requestBody)
			// .then( (response) => response.status )
			// .then( (res) => console.log(res))
			// .catch( (error) => console.log(error) )
		const jso = await res.json();
		console.log(jso)
	};
	
	// auth();
	get(token);

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
