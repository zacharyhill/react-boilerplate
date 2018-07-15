import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_STRINGS, FETCH } from './constants';

// Individual exports for testing
export default function* watchFetch() {
  yield takeEvery(FETCH, fetch);
}

export function* fetch() {
  const { data } = yield call(axios.get, 'http://localhost:3000/api/strings');
  yield put({ type: SET_STRINGS, payload: data });
}
