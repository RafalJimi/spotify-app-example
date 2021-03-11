import { LOGIN_USER, CLEAR_LOGIN_USER_STATE } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../../types/actions";
import { loginUserStarted } from "./actions";

export type LoginUserState = {
  token: string;
  isError: string;
  isLoading: boolean;
};

export const initialState = {
  token: "",
  isError: "",
  isLoading: false,
};

export const loginUser = (
  state = initialState,
  action: Action
): LoginUserState => {
  switch (action.type) {
    case getType(loginUserStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        token: initialState.token,
      };
    case LOGIN_USER.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
        token: action.payload.token,
      };
    case LOGIN_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case CLEAR_LOGIN_USER_STATE:
      return {
        ...state,
        token: initialState.token,
        isError: initialState.isError,
        isLoading: initialState.isLoading,
      };
    default:
      return { ...state };
  }
};
