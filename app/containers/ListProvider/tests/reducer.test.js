import { fromJS } from 'immutable';
import listProviderReducer from '../reducer';

describe('listProviderReducer', () => {
  it('returns the initial state', () => {
    expect(listProviderReducer(undefined, {})).toEqual(
      fromJS({
        strings: [],
      }),
    );
  });
});
