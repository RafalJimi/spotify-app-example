import { GET_USER_NICKNAME, CLEAR_USER_NICKNAME_STATE } from "./consts";

import { createAction } from "typesafe-actions";

export const getUserNicknameStarted = createAction(
  GET_USER_NICKNAME.started,
  () => ({})
)();

export const clearUserNicknameState = createAction(
  CLEAR_USER_NICKNAME_STATE,
  () => ({})
)();
