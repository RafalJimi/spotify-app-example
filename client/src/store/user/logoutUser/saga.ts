import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import { LOGOUT_USER } from "./consts";
import { logoutUserStarted } from "./actions";
import { getType } from "typesafe-actions";
import { removeLocalStorage } from "../../../helpers/auth";
import { toast } from "react-toastify";
import { RESET_IS_AUTH_STATE } from "../isAuth/consts";
import { CLEAR_LOGIN_USER_STATE } from "../loginUser/consts";

export function* logoutUser() {
  try {
    removeLocalStorage("token");
    yield put({
      type: RESET_IS_AUTH_STATE,
    });
    yield put({
      type: CLEAR_LOGIN_USER_STATE,
    });
    yield put({
      type: LOGOUT_USER.success,
    });
  } catch (e) {
    toast.dark("Something went wrong - please try again.");
  }
}

export function* logoutUserSaga(): SagaIterator {
  yield takeLatest(getType(logoutUserStarted), logoutUser);
}
