import {combineReducers} from 'redux';
import cinemas from './cinemasReducer';
import movies from './moviesReducer';
import token from './tokenReducer';
import upcoming from './upcomingReducer';
import cinema from './cinemaReducer';
import movie from './movieReducer';
import allMovies from './allMoviesReducer';
import upcomingFilter from './upcomingFilterReducer';

export default combineReducers({
  cinema,
  cinemas,
  movies,
  token,
  upcoming,
  movie,
  allMovies,
  upcomingFilter,
});
