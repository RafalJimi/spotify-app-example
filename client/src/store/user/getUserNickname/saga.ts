import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { axiosGet } from "../../../common/axios";

import { GET_USER_NICKNAME } from "./consts";
import { getUserNicknameStarted } from "./actions";
import { getType } from "typesafe-actions";

export function* userNickname() {
  try {
    const request = yield call(axiosGet, `/user/get_user_nickname`);
    if (request.nickname)
      yield put({
        type: GET_USER_NICKNAME.success,
        payload: { nickname: request.nickname },
      });
  } catch (e) {
    yield put({
      type: GET_USER_NICKNAME.failure,
      payload: { errors: "Something went wrong - please try again" },
    });
  }
}

export function* userNicknameSaga(): SagaIterator {
  yield takeLatest(getType(getUserNicknameStarted), userNickname);
}
