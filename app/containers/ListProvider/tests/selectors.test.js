import { fromJS } from 'immutable';
import { selectListProviderDomain } from '../selectors';

describe('selectListProviderDomain', () => {
  it('Should return listProvider property on state', () => {
    const listProvider = 'test';
    const state = fromJS({ listProvider });
    const result = selectListProviderDomain(state);
    expect(result).toEqual(listProvider);
  });
});
