import { DELETE_PLAYLIST } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
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
        isError: initialState.isError,
      };
    case DELETE_PLAYLIST.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case DELETE_PLAYLIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
