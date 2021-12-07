import * as API from '../services/api';
import * as constants from '../constants';

// stores data retrieved from the api 
export const getAllCinemas = (token) => {
    return async dispatch => {
        try {
            const cinemas = await API.getCinemas(token);
            dispatch(getAllCinemasSuccess(cinemas));
        } catch (err) {
            // TODO: dispatch some error
            //console.log(err);
            console.log('error in cinemaAction')
        }
    };
}

const getAllCinemasSuccess = cinemas => ({
    type: constants.CINEMAS,
    payload: cinemas
});
