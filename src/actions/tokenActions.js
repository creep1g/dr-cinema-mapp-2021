import * as constants from '../constants';
import * as API from '../services/api-caller';

export const auth = () => {
	return async dispatch => {
		try {
			res = await API.auth();
			dispatch(addToken(res));
		} catch (err) {
			console.log(err);
		}
	};
}

export const addToken = (token) => ({
    type: constants.TOKEN,
    payload: token
});
