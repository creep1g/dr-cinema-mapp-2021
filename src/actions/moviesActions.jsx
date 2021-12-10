import * as API from '../services/api';
import * as constants from '../constants';

export const getAllMovies = (token) => {
  return async (dispatch) => {
    try {
      const movies = await API.getMovies(token);
      dispatch(getAllMoviesSuccess(movies));
    } catch (err) {
      console.log(`error in getAllMovies ${err}`);
    }
  };
};

export const setAllMovies = (token) => {
  return async (dispatch) => {
    try {
      const movies = await API.getMovies(token);
      dispatch(allMoviesSuccess(movies));
    } catch (err) {
      console.log(`error in setAllMovies ${err}`);
    }
  };
};

export const setMovieFilter = (movies) => {
  return async (dispatch) => {
    try {
      dispatch(getAllMoviesSuccess(movies));
    } catch (err) {
      console.log(`error in setFilter ${err}`);
    }
  };
};

export const getUpcoming = (token) => {
  return async (dispatch) => {
    try {
      const upcoming = await API.getUpcoming(token);
      await upcoming.sort((a, b) =>
      a['release-dateIS'] > b['release-dateIS'] ? 1 : -1);
      dispatch(getUpcomingSuccess(upcoming));
    } catch (err) {
      console.log('error in getUpcoming in movies actions');
    }
  };
};

export const setUpcomingFilter = (upcoming) => {
  return async (dispatch) => {
    try {
      dispatch(setUpcomingFilterSuccess(upcoming));
    } catch (err) {
      console.log(`error in setUpcomingFilter ${err}`);
    }
  };
};

export const getMoviesByCinema = (token, cinema) => {
  return async (dispatch) => {
    try {
      const movies = await API.getMovies(token);
      const filtered = [];

      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[i].showtimes.length; j++) {
          if (movies[i].showtimes[j].cinema.id === cinema ||
              movies[i].showtimes[j].cinema === cinema.toString()) {
            filtered.push(movies[i]);
          };
        };
      };
      dispatch(getAllMoviesSuccess(filtered));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieById = (token, id) => {
  return async (dispatch) => {
    try {
      await API.getMovieById(token, id)
          .then( (movie) => dispatch(getMovieSuccess(movie)) );
    } catch (err) {
      console.log(err);
    }
  };
};

export const selectedMovie = (movie) => {
  return async (dispatch) => {
    try {
      dispatch(selectedMovieSuccess(movie));
    } catch (err) {
      console.log(`Error in selectedMovie ${err}`);
    }
  };
};


const getMovieSuccess = (movie) => ({
  type: constants.MOVIE,
  payload: movie,
});

const getAllMoviesSuccess = (movies) => ({
  type: constants.MOVIES,
  payload: movies,
});

const getUpcomingSuccess = (upcoming) => ({
  type: constants.UPCOMING,
  payload: upcoming,
});

const selectedMovieSuccess = (movie) => ({
  type: constants.MOVIE,
  payload: movie,
});

const allMoviesSuccess = (movies) => ({
  type: constants.ALL_MOVIES,
  payload: movies,
});

const setUpcomingFilterSuccess = (upcoming) => ({
  type: constants.UPCOMING_FILTER,
  payload: upcoming,
});
