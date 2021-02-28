import { CHANGE_PLAYLIST_NAME } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { changePlaylistNameStarted } from "./actions";

export type ChangePlaylistNameState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const changePlaylistName = (
  state = initialState,
  action: Action
): ChangePlaylistNameState => {
  switch (action.type) {
    case getType(changePlaylistNameStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case CHANGE_PLAYLIST_NAME.success:
      return {
        ...state,
        isLoading: false,
        isError: "",
      };
    case CHANGE_PLAYLIST_NAME.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
