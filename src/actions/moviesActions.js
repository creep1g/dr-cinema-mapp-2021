import * as API from '../services/api';
import * as constants from '../constants';

export const getAllMovies = (token) => {
    return async dispatch => {
        try {
            const movies = await API.getMovies(token);
            dispatch(getAllMoviesSuccess(movies))
        } catch (err) {
            console.log(`error in getAllMovies ${err}`)
        }
    };
}

export const getUpcoming = (token) => {
    return async dispatch => {
        try {
            const upcoming = await API.getUpcoming(token);
            dispatch(getUpcomingSuccess(upcoming));
        } catch (err) {
            console.log('error in getUpcoming in movies actions')
        }
    }
}

export const getMoviesByCinema = (token, cinema) => {
	return async dispatch => {
		try{
			const movies = await API.getMovies(token);
			const filtered = [];
			
			for (let i = 0; i < movies.length; i++){
				for (let j = 0; j < movies[i].showtimes.length; j++){
					if (movies[i].showtimes[j].cinema.id === cinema){
								filtered.push(movies[i]);
					};
				};
			};
			dispatch(getAllMoviesSuccess(filtered));
		}
		catch (err) {
			console.log(err);
		}
	}
}

export const getMovieById = (token, id) => {
	return async dispatch => {
		try{
			await API.getMovieById(token, id)
				.then( (movie) => dispatch(getMovieSuccess(movie)) );	
		} catch (err) {
			console.log(err);
		} 
	}
}

const getMovieSuccess = movie => ({
	type: constants.MOVIE,
	payload: movie
});

const getAllMoviesSuccess = movies => ({
    type: constants.MOVIES,
    payload: movies
});

const getUpcomingSuccess = upcoming => ({
    type: constants.UPCOMING,
    payload: upcoming
})
