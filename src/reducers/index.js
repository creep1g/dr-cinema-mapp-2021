import {combineReducers} from 'redux';
import cinemas from './cinemaReducer';
import movies from './moviesReducer';
import token from './tokenReducer';
import upcoming from './upcomingReducer';
import cinemaDetails from './cinemaDetailsReducer';

export default combineReducers({
		cinemaDetails,
    cinemas,
    movies,
    token,
    upcoming,
});
