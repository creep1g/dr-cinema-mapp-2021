import * as constants from '../constants';

export const addToken = (token) => ({
    type: constants.TOKEN,
    payload: token
});