import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import { LOGOUT_USER, CLEAR_LOGOUT_USER_STATE } from "./consts";
import { logoutUserStarted } from "./actions";
import { getType } from "typesafe-actions";
import { removeLocalStorage } from "../../../helpers/auth";
import { toast } from "react-toastify";

export function* logoutUser() {
  try {
    removeLocalStorage("token");
    yield put({
      type: LOGOUT_USER.success,
    });
    /* yield put({
      type: CLEAR_LOGOUT_USER_STATE,
    }); */
  } catch (e) {
    toast.dark("Something went wrong - please try again.");
  }
}

export function* logoutUserSaga(): SagaIterator {
  yield takeLatest(getType(logoutUserStarted), logoutUser);
}
