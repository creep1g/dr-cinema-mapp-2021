import React from 'react';

const baseUrl = 'https://api.kvikmyndir.is';


export const auth = async () => {
	const requestBody = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username: 'Morgaes', password: 'Morgaes1' })
	};
	return await fetch(baseUrl+'/authenticate/', requestBody)
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
	return await fetch(baseUrl+'/upcoming', requestBody)
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

	return await fetch(baseUrl+'/movies', requestBody)
		.then( (response) => response.text() )
		.then(response => {
			console.log(response);
			const s = JSON.parse(response)
			console.log(s)
			return s
		})
		//.then( (res) => {return res} )
		.catch( (error) => console.log(error) )
	};



export const getCinemas = async (token) => {
	const requestBody = {
		method: 'GET',
		headers: { "x-access-token": token, 
							 "Content-Type": "application/json"
		},
	};

	return fetch(baseUrl+'/theaters', requestBody)
		.then( (response) => response.json() )
		.then( (res) => {return res} )
		.catch( (error) => console.log(error) )
	};

export const getMovieByMongoid = async (token, mongoid) =>{
	const requestBody = {
		method: 'GET',
		headers: { "x-access-token": token, 
							 "Content-Type": "application/json"
		},
	};

	return fetch(baseUrl+'/movies?mongoid='+mongoid, requestBody)
		.then( (response) => response.json() )
		.then( (res) => {return res} )
		.catch( (error) => console.log(error) )

}
