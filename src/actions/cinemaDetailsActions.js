import * as constants from '../constants';

export const holdCinema = ( cinema ) =>{
	return async dispatch => {
		try {
			dispatch(holdCinemaSuccess(cinema));
		} catch (err) {
			console.log(err);
		}
	};
}

const holdCinemaSuccess = cinema => ({
	type: constants.CINEMA,
	payload: cinema
});
