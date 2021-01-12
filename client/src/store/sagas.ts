import { fork } from "redux-saga/effects";
import { registerUserSaga } from "../store/registerUser/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
}
