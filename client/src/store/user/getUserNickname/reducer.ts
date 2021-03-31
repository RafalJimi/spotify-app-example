import { GET_USER_NICKNAME } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../../types/actions";
import { getUserNicknameStarted, clearUserNicknameState } from "./actions";

export type UserNicknameState = {
  nickname: string;
  isError: string;
  isLoading: boolean;
};

export const initialState = {
  nickname: "",
  isError: "",
  isLoading: false,
};

export const userNickname = (
  state = initialState,
  action: Action
): UserNicknameState => {
  switch (action.type) {
    case getType(getUserNicknameStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        nickname: initialState.nickname,
      };
    case GET_USER_NICKNAME.success:
      console.log(action.payload);
      return {
        ...state,
        isLoading: initialState.isLoading,
        nickname: action.payload.nickname,
      };
    case GET_USER_NICKNAME.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case getType(clearUserNicknameState):
      return {
        ...state,
        nickname: initialState.nickname,
        isError: initialState.isError,
        isLoading: initialState.isLoading,
      };
    default:
      return { ...state };
  }
};
