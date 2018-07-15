import { getAll } from '../actions';
import { GET_ALL } from '../constants';

describe('ListProvider actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: GET_ALL,
      };
      expect(getAll()).toEqual(expected);
    });
  });
});
