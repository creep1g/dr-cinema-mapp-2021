/* eslint-disable require-jsdoc */
import * as constants from '../constants';

export default function(state = '', action) {
  switch (action.type) {
    case constants.TOKEN: return action.payload;
    default: return state;
  }
}
