import { ADD_SONG_TO_PLAYLIST } from "./consts";
import { addSongToPlaylistStarted } from "./actions";
import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";

export type AddToPlaylistState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const addToPlaylist = (
  state = initialState,
  action: Action
): AddToPlaylistState => {
  switch (action.type) {
    case getType(addSongToPlaylistStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case ADD_SONG_TO_PLAYLIST.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
      };
    case ADD_SONG_TO_PLAYLIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload,
      };
    default:
      return { ...state };
  }
};
