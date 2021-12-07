import API from '../services/api-caller';
import * as constants from '../constants';

export const getAllCinemas = () => {
    return async dispatch => {
        try {
            const cinemas = await API.getCinemas();
        } catch (err) {
            // TODO: dispatch some error
            console.log(err);
        }
    };
}

const getCinemasSuccess = cinemas => ({
    type: constants.CINEMAS,
    payload: cinemas
});