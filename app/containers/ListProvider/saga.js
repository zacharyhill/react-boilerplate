import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_STRINGS, FETCH } from './constants';
import { API_URL } from '../../config';

// Individual exports for testing
export default function* watchFetch() {
  yield takeEvery(FETCH, fetch);
}

export function* fetch() {
  const results = yield call(axios.get, API_URL);
  const { data } = results;
  yield put({ type: SET_STRINGS, payload: data });
}
