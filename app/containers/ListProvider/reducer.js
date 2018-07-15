/*
 *
 * ListProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_ALL, SET_STRINGS } from './constants';

export const initialState = fromJS({
  strings: [],
});

function listProviderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return state.get('strings');
    case SET_STRINGS:
      return state.set('strings', fromJS(action.payload));
    default:
      return state;
  }
}

export default listProviderReducer;
