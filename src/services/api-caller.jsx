import React from 'react';

const baseUrl = 'https://api.kvikmyndir.is';


	export const auth = async () => {
		const requestBody = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: 'Morgaes', password: 'Morgaes1' })
		};
		return fetch('https://api.kvikmyndir.is/authenticate/', requestBody)
			.then( (response) => response.json() )
			.then( (res) =>  {return res.token})
			.catch( (error) => console.log(error) )
	};

	export const getUpComing = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};
		return fetch('https://api.kvikmyndir.is/upcoming', requestBody)
			.then( (response) => response.json() )
			.then( (res) => upComing = res)
			.catch( (error) => console.log(error) )
	};

	export const getMovies = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};

		await fetch('https://api.kvikmyndir.is/movies', requestBody)
			.then( (response) => response.json() )
			.then( (res) => {return res} )
			.catch( (error) => console.log(error) )
		};



	export const getCinemas = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};

		return fetch('https://api.kvikmyndir.is/theaters', requestBody)
			.then( (response) => response.json() )
			.then( (res) => {return res} )
			.catch( (error) => console.log(error) )
		};
