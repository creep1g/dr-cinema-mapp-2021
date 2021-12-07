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

const getAllMoviesSuccess = movies => ({
    type: constants.MOVIES,
    payload: movies
});

const getUpcomingSuccess = upcoming => ({
    type: constants.UPCOMING,
    payload: upcoming
})