import { fork } from "redux-saga/effects";
import { registerUserSaga } from "../store/registerUser/saga";
import { loginUserSaga } from "./loginUser/saga";
import { checkAuthSaga } from "./isAuth/saga";
import { logoutUserSaga } from "./logoutUser/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(loginUserSaga);
  yield fork(checkAuthSaga);
  yield fork(logoutUserSaga);
}
