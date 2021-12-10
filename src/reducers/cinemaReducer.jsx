import * as constants from '../constants';

// eslint-disable-next-line require-jsdoc
export default function( state = [], action ) {
  switch (action.type) {
    case constants.CINEMA: return action.payload;
    default: return state;
  };
}
