import { LOGOUT_USER, CLEAR_LOGOUT_USER_STATE } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../../types/actions";
import { logoutUserStarted } from "./actions";

export type LogoutUserState = {
  loggedOut: boolean;
};

export const initialState = {
  loggedOut: false,
};

export const logoutUser = (
  state = initialState,
  action: Action
): LogoutUserState => {
  switch (action.type) {
    case getType(logoutUserStarted):
      return {
        ...state,
        loggedOut: initialState.loggedOut,
      };
    case LOGOUT_USER.success:
      return {
        ...state,
        loggedOut: true,
      };
    case CLEAR_LOGOUT_USER_STATE:
      return {
        ...state,
        loggedOut: initialState.loggedOut,
      };
    default:
      return { ...state };
  }
};
