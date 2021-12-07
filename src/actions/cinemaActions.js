import API from '../services/api';
import * as constants from '../constants';

export const getAllCinemas = (token) => {
    return async dispatch => {
        try {
            const cinemas = await API.getCinemas(token);
            console.log(`Log in action ${cinemas}`)
            dispatch(getCinemasSuccess(cinemas));
        } catch (err) {
            // TODO: dispatch some error
            //console.log(err);
        }
    };
}

const getCinemasSuccess = cinemas => ({
    type: constants.CINEMAS,
    payload: cinemas
});