import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listProvider state domain
 */

const selectListProviderDomain = state =>
  state.get('listProvider', initialState);

const makeSelectListProvider = () =>
  createSelector(selectListProviderDomain, substate => substate.get('strings'));

export default makeSelectListProvider;
export { selectListProviderDomain };
