import { fromJS } from 'immutable';
import listProviderReducer from '../reducer';
import { GET_ALL, SET_STRINGS } from '../constants';

describe('listProviderReducer', () => {
  it('returns the initial state', () => {
    expect(listProviderReducer(undefined, {})).toEqual(
      fromJS({
        strings: [],
      }),
    );
  });
  it('returns all messages when action with type of GET_ALL is passed in', () => {
    const sampleState = fromJS({ strings: [1, 2, 3] });
    const expectedResults = fromJS([1, 2, 3]);
    const result = listProviderReducer(sampleState, { type: GET_ALL });
    expect(result).toEqual(expectedResults);
  });
  it('sets messages when action with type of SET_STRINGS is passed in', () => {
    const sampleStrings = [1, 2, 3];
    const expectedResults = fromJS({ strings: sampleStrings });
    const result = listProviderReducer(fromJS({ strings: [] }), {
      type: SET_STRINGS,
      payload: sampleStrings,
    });
    expect(result).toEqual(expectedResults);
  });
});
