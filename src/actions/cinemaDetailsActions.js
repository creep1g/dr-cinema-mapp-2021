import * as constants from '../constants';
import * as API from '../services/api-caller';

export const getCinema = ( token, cinemaId ) => {
  return async (dispatch) => {
    try {
      const cinemas = await API.getCinemas(token);
      const cinema = cinemas.filter((cinema) => cinema.id === cinemaId);
      dispatch(holdCinemaSuccess(cinema));
    } catch (err) {
      console.log(err);
    }
  };
};

const holdCinemaSuccess = (cinema) => ({
  type: constants.CINEMA,
  payload: cinema,
});
