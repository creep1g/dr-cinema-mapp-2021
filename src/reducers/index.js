import {combineReducers} from 'redux';
import cinemas from './cinemaReducer';
import movies from './moviesReducer';
import token from './tokenReducer';
import upcoming from './upcomingReducer';

export default combineReducers({
    cinemas,
    movies,
    token,
    upcoming,
});