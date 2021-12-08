import * as API from '../services/api';
import * as constants from '../constants';

// stores data retrieved from the api 
export const getAllCinemas = (token) => {
    return async dispatch => {
        try {
					const res = await API.getCinemas(token);

					const sort = async (arr) => {
					  await arr.sort((first, second) => {
						  return first.name.toUpperCase() > second.name.toUpperCase() ? 1 : -1;
					  });};
					sort(res);
					dispatch(getAllCinemasSuccess(res));


        } catch (err) {
            // TODO: dispatch some error
            console.log(err);
            // console.log('error in cinemaAction')
        }
    };
}

const getAllCinemasSuccess = cinemas => ({
    type: constants.CINEMAS,
    payload: cinemas
});
