import { SagaIterator } from "redux-saga";
import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "../../common/networkHandler";
import { IS_AUTH } from "./consts";
import { isAuthStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* checkAuth() {
  try {
    const request = yield call(networkHandlerGet, `/auth/is_auth`);
    console.log(request);
    if (request.status === 200)
      yield put({
        type: IS_AUTH.success,
      });
    else if (request.status === 202)
      yield put({
        type: IS_AUTH.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: IS_AUTH.failure,
      payload: { error: "Your session expired, please sign in again" },
    });
  }
}

export function* checkAuthSaga(): SagaIterator {
  yield takeLatest(getType(isAuthStarted), checkAuth);
}
