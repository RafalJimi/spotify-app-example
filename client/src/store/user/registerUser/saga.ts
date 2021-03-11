import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosPost } from "../../../common/axios";

import { REGISTER_USER } from "./consts";
import { registerUserStarted } from "./actions";
import { getType } from "typesafe-actions";
import { setLocalStorage } from "../../../helpers/auth";

export function* registerUser({
  payload,
}: ReturnType<typeof registerUserStarted>) {
  try {
    const { user } = payload;
    const request = yield call(axiosPost, `/auth/register`, user);
    if (request.status === 200) {
      setLocalStorage("token", request.data.token);
      yield put({
        type: REGISTER_USER.success,
      });
    } else if (request.status === 202)
      yield put({
        type: REGISTER_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: REGISTER_USER.failure,
      payload: { error: "Something went wrong - please try again" },
    });
  }
}

export function* registerUserSaga(): SagaIterator {
  yield takeLatest(getType(registerUserStarted), registerUser);
}
