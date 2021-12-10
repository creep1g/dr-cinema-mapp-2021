import React from 'react';

const baseUrl = 'https://api.kvikmyndir.is';


	export const auth = async () => {
		const requestBody = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: 'Morgaes', password: 'Morgaes1' })
		};
		fetch('https://api.kvikmyndir.is/authenticate/', requestBody)
			.then( (response) => response.json() )
			.then( (res) =>  console.log(res.token))
			.catch( (error) => console.log(error) )
	};

	export const getUpcoming = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};
		const upcoming = await fetch('https://api.kvikmyndir.is/upcoming', requestBody)
			.then( (response) => response.json() )
			//.then( (res) => upComing = res)
			.catch( (error) => console.log(error) )
		return upcoming;
	};

	export const getMovies = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};

		const movies = await fetch('https://api.kvikmyndir.is/movies', requestBody)
			.then( (response) => response.json() )
			.catch( (error) => console.log(error) )

		return movies;
		};

	export const getCinemas = async (token) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};

		const data = await fetch('https://api.kvikmyndir.is/theaters', requestBody)
			.then( response => response.json())
			.catch( (error) => console.log(error) )
		return data;
		};

	export const getMovieById = async (token, id) => {
		const requestBody = {
			method: 'GET',
			headers: { "x-access-token": token, 
								 "Content-Type": "application/json"
			},
		};
			const movie = await fetch(baseUrl+"/movies", requestBody)
				.then( (response) => response.json() )
				.catch( (err) => console.log(err) )
			return(movie.filter((movie) => movie.id === id));
		};

	
	
		
