import { IS_AUTH } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { isAuthStarted } from "./actions";

export type CheckAuthState = {
  isAuth: boolean;
  error: string;
};

export const initialState = {
  isAuth: false,
  error: "",
};

export const checkAuth = (
  state = initialState,
  action: Action
): CheckAuthState => {
  switch (action.type) {
    case getType(isAuthStarted):
      return {
        ...state,
      };
    case IS_AUTH.success:
      return {
        ...state,
        isAuth: true,
        error: "",
      };
    case IS_AUTH.failure:
      return {
        ...state,
        isAuth: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};
