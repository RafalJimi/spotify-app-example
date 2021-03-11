import { LOGOUT_USER, CLEAR_LOGOUT_USER_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export const logoutUserStarted = createAction(
  LOGOUT_USER.started,
  () => ({})
)();

export const clearlogoutUserState = createAction(
  CLEAR_LOGOUT_USER_STATE,
  () => ({})
)();
