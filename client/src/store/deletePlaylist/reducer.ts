import { DELETE_PLAYLIST } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { deletePlaylistStarted } from "./actions";

export type DeletePlaylistState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const deletePlaylist = (
  state = initialState,
  action: Action
): DeletePlaylistState => {
  switch (action.type) {
    case getType(deletePlaylistStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case DELETE_PLAYLIST.success:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_PLAYLIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
