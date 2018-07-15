/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { fork } from 'redux-saga/effects';
import { takeEvery as takeEveryFunc, runSaga } from 'redux-saga';
import { mockSaga } from 'redux-saga-mock';
import axios from 'axios';
import watchFetch, { fetch } from '../saga';
import { FETCH, SET_STRINGS } from '../constants';
import { API_URL } from '../../../config';

// have to do this because the expected output has a named function,
// while just passing in takeEvery directly from 'redux-saga' below
// was returning an anonymous function with the results
function takeEvery(...args) {
  return takeEveryFunc.call(null, args);
}

describe('defaultSaga Saga', () => {
  it('Should trigger on every FETCH', () => {
    const iterator = watchFetch();
    const expectedYield = JSON.stringify(fork(takeEvery, FETCH, fetch));
    const actualYield = JSON.stringify(iterator.next().value);
    expect(actualYield).toEqual(expectedYield);
  });
  it('Should call API_URL on every FETCH', () => {
    const iterator = fetch();
    const result = iterator.next().value.CALL.args[0];
    const expected = API_URL;
    expect(result).toEqual(expected);
  });
  it('Should dispatch SET_STRINGS with new data as payload', () => {
    // if this works change the above to be mocks
    const testSaga = mockSaga(fetch());
    const sampleData = {
      data: [
        {
          text: 'hello',
          _id: '3414314',
        },
        {
          text: 'hello2',
          _id: '4544554',
        },
      ],
    };
    testSaga.stubCall(axios.get, () => ({ data: sampleData }));
    let results;
    const dispatch = action => {
      results = action;
    };
    return runSaga(testSaga, { dispatch }).done.then(() => {
      const expected = {
        type: SET_STRINGS,
        payload: sampleData,
      };
      expect(results).toEqual(expected);
    });
  });
});
