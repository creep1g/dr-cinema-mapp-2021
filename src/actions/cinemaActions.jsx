import * as API from '../services/api-caller';
import * as constants from '../constants';

// stores data retrieved from the api
export const getAllCinemas = (token) => {
  return async (dispatch) => {
    try {
      const res = await API.getCinemas(token);

      const sort = async (arr) => {
        await arr.sort((first, second) => {
          return first.name.toUpperCase() > second.name.toUpperCase() ? 1 : -1;
        });
      };
      sort(res);
      // console.log(res);
      dispatch(getAllCinemasSuccess(res));
    } catch (err) {
      console.log(`error in cinemaActions: ${err}`);
    }
  };
};

export const selectedCinema = (cinema) => {
  return async (dispatch) => {
    try {
      dispatch(selectedCinemaSuccess(cinema));
    } catch (err) {
      console.log(`error in selectedCinema ${err}`);
    }
  };
};

const getAllCinemasSuccess = (cinemas) => ({
  type: constants.CINEMAS,
  payload: cinemas,
});

const selectedCinemaSuccess = (cinema) => ({
  type: constants.CINEMA,
  payload: cinema,
});
